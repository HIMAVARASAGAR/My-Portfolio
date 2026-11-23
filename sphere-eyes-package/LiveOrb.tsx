"use client";

import { useEffect, useRef, useState } from "react";

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export type LiveOrbVariant =
  | "white"
  | "black"
  | "webgl"
  | "volt"
  | "sunset"
  | "klein"
  | "custom";

export type LiveOrbOptions = {
  /** Material preset. Default `"black"`. */
  variant?: LiveOrbVariant;
  /** Body hex — used when `variant="custom"`. */
  color?: string;
  /** Eye hex — used when `variant="custom"`. */
  eyeColor?: string;
  /** Unlit wash stops — used when `variant="webgl"`. */
  colors?: string[];
  /** Eyes follow the pointer. Default `true`. */
  interactive?: boolean;
  /** Occasional natural blink. Default `true`. */
  blink?: boolean;
  /** Autonomous wander: eyes casually look around when pointer is still or idle. */
  wander?: boolean;
  /** Sleep mode (eyes shut). Default `false`. */
  sleep?: boolean;
  /** Manual blink / squint amounts: [left, right] from 0 (open) to 1 (closed) */
  manualBlink?: [number, number];
  /** Eye capsule dimensions */
  eyeSpacing?: number;
  eyeRadius?: number;
  eyeHeight?: number;
  eyeY?: number;
  /** 3D subtle depth / rim shading (0.0 to 1.0). Default `0.0` (flat minimal). */
  shading?: number;
  /** Speed multiplier for noise/animations. Default `0.55`. */
  speed?: number;
  /** Callback with current gaze coordinates (normalized -1 to 1). */
  onGazeChange?: (gaze: { x: number; y: number }) => void;
  /** Fires when WebGL is ready (`true`) or torn down (`false`). */
  onHasGl?: (ok: boolean) => void;
};

export type LiveOrbInstance = {
  setOptions: (options: Partial<LiveOrbOptions>) => void;
  triggerBlink: () => void;
  triggerWink: (eye: "left" | "right") => void;
  destroy: () => void;
};

export const PRESETS = {
  black: { color: "#18181B", eyeColor: "#F4F4F5" },
  white: { color: "#F4F4F5", eyeColor: "#09090B" },
  volt: { color: "#D2FF00", eyeColor: "#0F1115" },
  sunset: { color: "#FF5376", eyeColor: "#FFF375" },
  klein: { color: "#002FA7", eyeColor: "#FFFFFF" },
  custom: { color: "#7C5CFF", eyeColor: "#FAFAFA" },
} as const;

export const WEBGL_COLORS = ["#7C6AF7", "#7DD3C7", "#E8B4D4"];

const VERT = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_speed;
uniform vec2 u_look;
uniform vec2 u_blink;
uniform float u_mode;
uniform float u_shading;
uniform vec3 u_body;
uniform vec3 u_eye;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;

uniform float u_eye_spacing;
uniform float u_eye_radius;
uniform float u_eye_height;
uniform float u_eye_y;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

vec3 orient(vec3 p, vec2 look) {
  float yaw = look.x * 0.92;
  float pitch = -look.y * 0.78;
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  vec3 q = vec3(p.x, p.y * cp - p.z * sp, p.y * sp + p.z * cp);
  return vec3(q.x * cy + q.z * sy, q.y, -q.x * sy + q.z * cy);
}

float eyeMask(vec3 n, vec3 e, vec3 right, vec3 up, float halfH, float rad) {
  float facing = dot(n, e);
  float x = dot(n, right) - dot(e, right);
  float y = dot(n, up) - dot(e, up);
  y -= clamp(y, -halfH, halfH);
  float d = length(vec2(x, y)) - rad;
  float fill = 1.0 - smoothstep(-0.012, 0.012, d);
  return fill * smoothstep(0.10, 0.32, facing);
}

vec3 wash(vec3 n, float t) {
  vec2 q = n.xy * 2.2 + n.z * 0.85;
  vec2 w1 = vec2(
    fbm(q * 1.4 + vec2(t * 0.22, t * 0.18)),
    fbm(q * 1.4 + vec2(-t * 0.16, t * 0.24) + 4.1)
  );
  q += (w1 - 0.5) * 0.72;
  float f = fbm(q * 2.1 + vec2(0.0, t * 0.12));
  float g = fbm(q * 4.6 - vec2(t * 0.2, 0.0));
  vec3 col = mix(u_c1, u_c2, smoothstep(0.28, 0.72, f));
  return mix(col, u_c3, pow(smoothstep(0.42, 0.9, g), 1.4));
}

void main() {
  vec2 uv = (gl_FragCoord.xy / u_resolution.xy) * 2.0 - 1.0;
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  uv.x *= aspect;

  float radius = 0.94;
  vec2 p = uv / radius;
  float r2 = dot(p, p);
  float edge = 1.0 - smoothstep(0.985, 1.012, sqrt(max(r2, 0.0)));
  if (edge <= 0.001) {
    gl_FragColor = vec4(0.0);
    return;
  }

  float z = sqrt(max(1.0 - r2, 0.0));
  vec3 n = normalize(vec3(p, z));

  vec2 look = u_look;
  float lm = length(look);
  if (lm > 1.0) look /= lm;

  vec3 right = orient(vec3(1.0, 0.0, 0.0), look);
  vec3 up = orient(vec3(0.0, 1.0, 0.0), look);
  vec3 eL = orient(normalize(vec3(-u_eye_spacing, u_eye_y, 1.0)), look);
  vec3 eR = orient(normalize(vec3(u_eye_spacing, u_eye_y, 1.0)), look);

  float halfHL = mix(u_eye_height, 0.010, u_blink.x);
  float radL = mix(u_eye_radius, u_eye_radius * 1.15, u_blink.x);

  float halfHR = mix(u_eye_height, 0.010, u_blink.y);
  float radR = mix(u_eye_radius, u_eye_radius * 1.15, u_blink.y);

  float eyes = max(
    eyeMask(n, eL, right, up, halfHL, radL),
    eyeMask(n, eR, right, up, halfHR, radR)
  );

  vec3 body = u_mode > 0.5 ? wash(n, u_time * u_speed) : u_body;

  if (u_shading > 0.0) {
    vec3 lightDir = normalize(vec3(0.7, 1.1, 1.4));
    float diff = max(dot(n, lightDir), 0.0) * 0.22;
    float fresnel = pow(1.0 - max(n.z, 0.0), 2.2) * 0.35;
    body = mix(body, body + vec3(diff + fresnel), u_shading);
  }

  vec3 col = mix(body, u_eye, clamp(eyes, 0.0, 1.0));

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), edge);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "").trim();
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return [1, 1, 1];
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

function resolveVariant(
  variant: LiveOrbVariant = "black",
  color?: string,
  eyeColor?: string,
  colors?: string[],
) {
  if (variant === "webgl") {
    return {
      body: "#18181B",
      eye: "#FFFFFF",
      palette: colors?.length ? colors : WEBGL_COLORS,
      mode: 1,
    };
  }
  if (variant === "custom") {
    return {
      body: color || PRESETS.custom.color,
      eye: eyeColor || PRESETS.custom.eyeColor,
      palette: WEBGL_COLORS,
      mode: 0,
    };
  }
  const preset = PRESETS[variant] || PRESETS.black;
  return {
    body: color || preset.color,
    eye: eyeColor || preset.eyeColor,
    palette: WEBGL_COLORS,
    mode: 0,
  };
}

export function createLiveOrb(
  canvas: HTMLCanvasElement,
  initialOptions: LiveOrbOptions = {},
): LiveOrbInstance {
  let options: LiveOrbOptions = {
    variant: "black",
    interactive: true,
    blink: true,
    wander: false,
    sleep: false,
    eyeSpacing: 0.32,
    eyeRadius: 0.054,
    eyeHeight: 0.128,
    eyeY: 0.08,
    shading: 0.0,
    speed: 0.55,
    ...initialOptions,
  };

  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: true,
    premultipliedAlpha: true,
    preserveDrawingBuffer: true,
  });

  if (!gl) {
    options.onHasGl?.(false);
    return {
      setOptions: () => {},
      triggerBlink: () => {},
      triggerWink: () => {},
      destroy: () => {},
    };
  }

  const vs = gl.createShader(gl.VERTEX_SHADER)!;
  gl.shaderSource(vs, VERT);
  gl.compileShader(vs);

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
  gl.shaderSource(fs, FRAG);
  gl.compileShader(fs);

  const program = gl.createProgram()!;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("LiveOrb WebGL link error:", gl.getProgramInfoLog(program));
    options.onHasGl?.(false);
    return {
      setOptions: () => {},
      triggerBlink: () => {},
      triggerWink: () => {},
      destroy: () => {},
    };
  }

  options.onHasGl?.(true);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );

  const aPos = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uResolution = gl.getUniformLocation(program, "u_resolution");
  const uTime = gl.getUniformLocation(program, "u_time");
  const uSpeed = gl.getUniformLocation(program, "u_speed");
  const uLook = gl.getUniformLocation(program, "u_look");
  const uBlink = gl.getUniformLocation(program, "u_blink");
  const uMode = gl.getUniformLocation(program, "u_mode");
  const uShading = gl.getUniformLocation(program, "u_shading");
  const uBody = gl.getUniformLocation(program, "u_body");
  const uEye = gl.getUniformLocation(program, "u_eye");
  const uC1 = gl.getUniformLocation(program, "u_c1");
  const uC2 = gl.getUniformLocation(program, "u_c2");
  const uC3 = gl.getUniformLocation(program, "u_c3");
  const uEyeSpacing = gl.getUniformLocation(program, "u_eye_spacing");
  const uEyeRadius = gl.getUniformLocation(program, "u_eye_radius");
  const uEyeHeight = gl.getUniformLocation(program, "u_eye_height");
  const uEyeY = gl.getUniformLocation(program, "u_eye_y");

  gl.useProgram(program);

  let width = 0;
  let height = 0;
  const updateSize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width * dpr));
    const h = Math.max(1, Math.round(rect.height * dpr));
    if (w !== width || h !== height) {
      width = w;
      height = h;
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
  };

  const ro = new ResizeObserver(updateSize);
  ro.observe(canvas);
  updateSize();

  let running = true;
  let raf = 0;
  const start = performance.now();

  const look = { x: 0, y: 0.08 };
  const targetLook = { x: 0, y: 0.08 };

  let nextBlink = start + 1800 + Math.random() * 3000;
  let blinkLeftAt = -10000;
  let blinkRightAt = -10000;

  let nextWander = start + 1500;
  let isPointerActive = false;
  let pointerTimeout = 0;

  const triggerBlink = () => {
    const now = performance.now();
    blinkLeftAt = now;
    blinkRightAt = now;
    nextBlink = now + 2500 + Math.random() * 3500;
  };

  const triggerWink = (eye: "left" | "right") => {
    const now = performance.now();
    if (eye === "left") blinkLeftAt = now;
    else blinkRightAt = now;
  };

  const onMove = (e: PointerEvent) => {
    if (!options.interactive) return;
    isPointerActive = true;
    window.clearTimeout(pointerTimeout);
    pointerTimeout = window.setTimeout(() => {
      isPointerActive = false;
    }, 2800);

    const rect = canvas.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const r = Math.max(rect.width, rect.height) / 2;
    const dx = (e.clientX - cx) / Math.max(r * 2.2, 1);
    const dy = (e.clientY - cy) / Math.max(r * 2.2, 1);
    const dist = Math.hypot(dx, dy);
    const norm = dist > 1 ? 1 / dist : 1;
    targetLook.x = dx * norm;
    targetLook.y = -dy * norm;
  };

  window.addEventListener("pointermove", onMove, { passive: true });

  const tick = (now: number) => {
    if (!running) return;

    const resolved = resolveVariant(
      options.variant,
      options.color,
      options.eyeColor,
      options.colors,
    );
    const time = (now - start) / 1000;

    if (options.wander || (!isPointerActive && options.interactive)) {
      if (now >= nextWander) {
        nextWander = now + 1200 + Math.random() * 2600;
        const angle = Math.random() * Math.PI * 2;
        const radius = 0.15 + Math.random() * 0.65;
        targetLook.x = Math.cos(angle) * radius;
        targetLook.y = Math.sin(angle) * radius * 0.7;
      }
    }

    if (options.sleep) {
      targetLook.x += (0 - targetLook.x) * 0.05;
      targetLook.y += (-0.2 - targetLook.y) * 0.05;
    }

    look.x += (targetLook.x - look.x) * 0.15;
    look.y += (targetLook.y - look.y) * 0.15;
    options.onGazeChange?.({ x: look.x, y: look.y });

    if (options.blink && !options.sleep && now >= nextBlink) {
      blinkLeftAt = now;
      blinkRightAt = now;
      const isDoubleBlink = Math.random() < 0.18;
      nextBlink = now + (isDoubleBlink ? 350 : 2500 + Math.random() * 3800);
    }

    const calcBlink = (at: number): number => {
      const bt = (now - at) / 1000;
      if (bt < 0.05) return bt / 0.05;
      if (bt < 0.09) return 1.0;
      if (bt < 0.17) return 1.0 - (bt - 0.09) / 0.08;
      return 0.0;
    };

    let bL = options.sleep ? 1.0 : calcBlink(blinkLeftAt);
    let bR = options.sleep ? 1.0 : calcBlink(blinkRightAt);

    if (options.manualBlink) {
      bL = Math.max(bL, options.manualBlink[0]);
      bR = Math.max(bR, options.manualBlink[1]);
    }

    const body = hexToRgb(resolved.body);
    const eye = hexToRgb(resolved.eye);
    const palette = [0, 1, 2].map((i) =>
      hexToRgb(
        resolved.palette[i % resolved.palette.length] ?? WEBGL_COLORS[i]!,
      ),
    );

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.uniform2f(uResolution, canvas.width, canvas.height);
    gl.uniform1f(uTime, time);
    gl.uniform1f(uSpeed, options.speed ?? 0.55);
    gl.uniform2f(uLook, look.x, look.y);
    gl.uniform2f(uBlink, bL, bR);
    gl.uniform1f(uMode, resolved.mode);
    gl.uniform1f(uShading, options.shading ?? 0.0);
    gl.uniform3f(uBody, body[0], body[1], body[2]);
    gl.uniform3f(uEye, eye[0], eye[1], eye[2]);
    gl.uniform3f(uC1, palette[0]![0], palette[0]![1], palette[0]![2]);
    gl.uniform3f(uC2, palette[1]![0], palette[1]![1], palette[1]![2]);
    gl.uniform3f(uC3, palette[2]![0], palette[2]![1], palette[2]![2]);

    gl.uniform1f(uEyeSpacing, options.eyeSpacing ?? 0.32);
    gl.uniform1f(uEyeRadius, options.eyeRadius ?? 0.054);
    gl.uniform1f(uEyeHeight, options.eyeHeight ?? 0.128);
    gl.uniform1f(uEyeY, options.eyeY ?? 0.08);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);

  return {
    setOptions(next) {
      options = { ...options, ...next };
    },
    triggerBlink,
    triggerWink,
    destroy() {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.clearTimeout(pointerTimeout);
      options.onHasGl?.(false);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    },
  };
}

export type LiveOrbProps = Omit<LiveOrbOptions, "onHasGl"> & {
  className?: string;
  size?: number;
  onClick?: () => void;
};

/**
 * LiveOrb — Interactive Sphere with capsule eyes that smoothly track gaze.
 */
export function LiveOrb({
  className,
  size = 280,
  variant = "black",
  color,
  eyeColor,
  colors,
  interactive = true,
  blink = true,
  wander = false,
  sleep = false,
  manualBlink,
  eyeSpacing = 0.32,
  eyeRadius = 0.054,
  eyeHeight = 0.128,
  eyeY = 0.08,
  shading = 0.0,
  speed = 0.55,
  onGazeChange,
  onClick,
}: LiveOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<LiveOrbInstance | null>(null);
  const [hasGl, setHasGl] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    instanceRef.current = createLiveOrb(canvas, {
      variant,
      color,
      eyeColor,
      colors,
      interactive,
      blink,
      wander,
      sleep,
      manualBlink,
      eyeSpacing,
      eyeRadius,
      eyeHeight,
      eyeY,
      shading,
      speed,
      onGazeChange,
      onHasGl: setHasGl,
    });
    return () => {
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    instanceRef.current?.setOptions({
      variant,
      color,
      eyeColor,
      colors,
      interactive,
      blink,
      wander,
      sleep,
      manualBlink,
      eyeSpacing,
      eyeRadius,
      eyeHeight,
      eyeY,
      shading,
      speed,
      onGazeChange,
      onHasGl: setHasGl,
    });
  }, [
    variant,
    color,
    eyeColor,
    colors,
    interactive,
    blink,
    wander,
    sleep,
    manualBlink,
    eyeSpacing,
    eyeRadius,
    eyeHeight,
    eyeY,
    shading,
    speed,
    onGazeChange,
  ]);

  const resolved = resolveVariant(variant, color, eyeColor, colors);

  const handleClick = () => {
    instanceRef.current?.triggerBlink();
    onClick?.();
  };

  return (
    <div
      data-slot="live-orb"
      role="img"
      aria-label="Interactive Sphere Eyes Character"
      onClick={handleClick}
      className={cn("live-orb-wrapper", className)}
      style={{
        width: size,
        height: size,
        position: "relative",
        flexShrink: 0,
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      {!hasGl ? (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "3%",
            overflow: "hidden",
            borderRadius: "9999px",
            backgroundColor: resolved.body,
          }}
        >
          <span
            style={{
              position: "absolute",
              borderRadius: "9999px",
              backgroundColor: resolved.eye,
              width: "14%",
              height: "28%",
              left: "30%",
              top: "35%",
            }}
          />
          <span
            style={{
              position: "absolute",
              borderRadius: "9999px",
              backgroundColor: resolved.eye,
              width: "14%",
              height: "28%",
              left: "56%",
              top: "35%",
            }}
          />
        </div>
      ) : null}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}

export default LiveOrb;
