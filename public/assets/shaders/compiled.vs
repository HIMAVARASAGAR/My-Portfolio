{@}aastep.glsl{@}float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

float aastep(float threshold, float value, float padding) {
    return smoothstep(threshold - padding, threshold + padding, value);
}

vec2 aastep(vec2 threshold, vec2 value) {
    return vec2(
        aastep(threshold.x, value.x),
        aastep(threshold.y, value.y)
    );
}{@}blendmodes.glsl{@}float blendColorDodge(float base, float blend) {
    return (blend == 1.0)?blend:min(base/(1.0-blend), 1.0);
}
vec3 blendColorDodge(vec3 base, vec3 blend) {
    return vec3(blendColorDodge(base.r, blend.r), blendColorDodge(base.g, blend.g), blendColorDodge(base.b, blend.b));
}
vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
    return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}
float blendColorBurn(float base, float blend) {
    return (blend == 0.0)?blend:max((1.0-((1.0-base)/blend)), 0.0);
}
vec3 blendColorBurn(vec3 base, vec3 blend) {
    return vec3(blendColorBurn(base.r, blend.r), blendColorBurn(base.g, blend.g), blendColorBurn(base.b, blend.b));
}
vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
    return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}
float blendVividLight(float base, float blend) {
    return (blend<0.5)?blendColorBurn(base, (2.0*blend)):blendColorDodge(base, (2.0*(blend-0.5)));
}
vec3 blendVividLight(vec3 base, vec3 blend) {
    return vec3(blendVividLight(base.r, blend.r), blendVividLight(base.g, blend.g), blendVividLight(base.b, blend.b));
}
vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
    return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendHardMix(float base, float blend) {
    return (blendVividLight(base, blend)<0.5)?0.0:1.0;
}
vec3 blendHardMix(vec3 base, vec3 blend) {
    return vec3(blendHardMix(base.r, blend.r), blendHardMix(base.g, blend.g), blendHardMix(base.b, blend.b));
}
vec3 blendHardMix(vec3 base, vec3 blend, float opacity) {
    return (blendHardMix(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearDodge(float base, float blend) {
    return min(base+blend, 1.0);
}
vec3 blendLinearDodge(vec3 base, vec3 blend) {
    return min(base+blend, vec3(1.0));
}
vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
    return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearBurn(float base, float blend) {
    return max(base+blend-1.0, 0.0);
}
vec3 blendLinearBurn(vec3 base, vec3 blend) {
    return max(base+blend-vec3(1.0), vec3(0.0));
}
vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
    return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearLight(float base, float blend) {
    return blend<0.5?blendLinearBurn(base, (2.0*blend)):blendLinearDodge(base, (2.0*(blend-0.5)));
}
vec3 blendLinearLight(vec3 base, vec3 blend) {
    return vec3(blendLinearLight(base.r, blend.r), blendLinearLight(base.g, blend.g), blendLinearLight(base.b, blend.b));
}
vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
    return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLighten(float base, float blend) {
    return max(blend, base);
}
vec3 blendLighten(vec3 base, vec3 blend) {
    return vec3(blendLighten(base.r, blend.r), blendLighten(base.g, blend.g), blendLighten(base.b, blend.b));
}
vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
    return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}
float blendDarken(float base, float blend) {
    return min(blend, base);
}
vec3 blendDarken(vec3 base, vec3 blend) {
    return vec3(blendDarken(base.r, blend.r), blendDarken(base.g, blend.g), blendDarken(base.b, blend.b));
}
vec3 blendDarken(vec3 base, vec3 blend, float opacity) {
    return (blendDarken(base, blend) * opacity + base * (1.0 - opacity));
}
float blendPinLight(float base, float blend) {
    return (blend<0.5)?blendDarken(base, (2.0*blend)):blendLighten(base, (2.0*(blend-0.5)));
}
vec3 blendPinLight(vec3 base, vec3 blend) {
    return vec3(blendPinLight(base.r, blend.r), blendPinLight(base.g, blend.g), blendPinLight(base.b, blend.b));
}
vec3 blendPinLight(vec3 base, vec3 blend, float opacity) {
    return (blendPinLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendReflect(float base, float blend) {
    return (blend == 1.0)?blend:min(base*base/(1.0-blend), 1.0);
}
vec3 blendReflect(vec3 base, vec3 blend) {
    return vec3(blendReflect(base.r, blend.r), blendReflect(base.g, blend.g), blendReflect(base.b, blend.b));
}
vec3 blendReflect(vec3 base, vec3 blend, float opacity) {
    return (blendReflect(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendGlow(vec3 base, vec3 blend) {
    return blendReflect(blend, base);
}
vec3 blendGlow(vec3 base, vec3 blend, float opacity) {
    return (blendGlow(base, blend) * opacity + base * (1.0 - opacity));
}
float blendOverlay(float base, float blend) {
    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}
vec3 blendOverlay(vec3 base, vec3 blend) {
    return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));
}
vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
    return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendHardLight(vec3 base, vec3 blend) {
    return blendOverlay(blend, base);
}
vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendPhoenix(vec3 base, vec3 blend) {
    return min(base, blend)-max(base, blend)+vec3(1.0);
}
vec3 blendPhoenix(vec3 base, vec3 blend, float opacity) {
    return (blendPhoenix(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendNormal(vec3 base, vec3 blend) {
    return blend;
}
vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendNegation(vec3 base, vec3 blend) {
    return vec3(1.0)-abs(vec3(1.0)-base-blend);
}
vec3 blendNegation(vec3 base, vec3 blend, float opacity) {
    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendMultiply(vec3 base, vec3 blend) {
    return base*blend;
}
vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendAverage(vec3 base, vec3 blend) {
    return (base+blend)/2.0;
}
vec3 blendAverage(vec3 base, vec3 blend, float opacity) {
    return (blendAverage(base, blend) * opacity + base * (1.0 - opacity));
}
float blendScreen(float base, float blend) {
    return 1.0-((1.0-base)*(1.0-blend));
}
vec3 blendScreen(vec3 base, vec3 blend) {
    return vec3(blendScreen(base.r, blend.r), blendScreen(base.g, blend.g), blendScreen(base.b, blend.b));
}
vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}
float blendSoftLight(float base, float blend) {
    return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}
vec3 blendSoftLight(vec3 base, vec3 blend) {
    return vec3(blendSoftLight(base.r, blend.r), blendSoftLight(base.g, blend.g), blendSoftLight(base.b, blend.b));
}
vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
    return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendSubtract(float base, float blend) {
    return max(base+blend-1.0, 0.0);
}
vec3 blendSubtract(vec3 base, vec3 blend) {
    return max(base+blend-vec3(1.0), vec3(0.0));
}
vec3 blendSubtract(vec3 base, vec3 blend, float opacity) {
    return (blendSubtract(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendExclusion(vec3 base, vec3 blend) {
    return base+blend-2.0*base*blend;
}
vec3 blendExclusion(vec3 base, vec3 blend, float opacity) {
    return (blendExclusion(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendDifference(vec3 base, vec3 blend) {
    return abs(base-blend);
}
vec3 blendDifference(vec3 base, vec3 blend, float opacity) {
    return (blendDifference(base, blend) * opacity + base * (1.0 - opacity));
}
float blendAdd(float base, float blend) {
    return min(base+blend, 1.0);
}
vec3 blendAdd(vec3 base, vec3 blend) {
    return min(base+blend, vec3(1.0));
}
vec3 blendAdd(vec3 base, vec3 blend, float opacity) {
    return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));
}{@}BloomBlur.fs{@}uniform vec2 uResolution;
uniform vec2 uDir;
uniform float uStrength;

#require(gaussianblur.fs)

void main() {
    gl_FragColor = blur5(tDiffuse, vUv, uResolution, uDir) * uStrength;
}{@}BloomPass.fs{@}#require(bloom.fs)

void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
    applyBloom(gl_FragColor, vUv);
}{@}BloomQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uBloomMinLuma;

#!VARYINGS
varying vec2 vUv;

#!SHADER: BloomQuad.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: BloomQuad.fs

#require(luma.fs)

void main() {
    gl_FragColor = texture2D(tMap, vUv);

    gl_FragColor *= step(uBloomMinLuma, luma(gl_FragColor));
}{@}bloom.fs{@}uniform sampler2D tBloom0;
uniform sampler2D tBloom1;
uniform sampler2D tBloom2;
uniform sampler2D tBloom3;
uniform float uBloomAddStrength;

void applyBloom(inout vec4 texel, vec2 uv) {
    vec3 c = vec3(0.0);
    c += texture2D(tBloom0, uv).rgb;
    c += texture2D(tBloom1, uv).rgb;
    c += texture2D(tBloom2, uv).rgb;
    c += texture2D(tBloom3, uv).rgb;

    c = clamp(c, 0.0, 1.0);

    texel.rgb += c * uBloomAddStrength;
}{@}conditionals.glsl{@}vec4 when_eq(vec4 x, vec4 y) {
  return 1.0 - abs(sign(x - y));
}

vec4 when_neq(vec4 x, vec4 y) {
  return abs(sign(x - y));
}

vec4 when_gt(vec4 x, vec4 y) {
  return max(sign(x - y), 0.0);
}

vec4 when_lt(vec4 x, vec4 y) {
  return max(sign(y - x), 0.0);
}

vec4 when_ge(vec4 x, vec4 y) {
  return 1.0 - when_lt(x, y);
}

vec4 when_le(vec4 x, vec4 y) {
  return 1.0 - when_gt(x, y);
}

vec3 when_eq(vec3 x, vec3 y) {
  return 1.0 - abs(sign(x - y));
}

vec3 when_neq(vec3 x, vec3 y) {
  return abs(sign(x - y));
}

vec3 when_gt(vec3 x, vec3 y) {
  return max(sign(x - y), 0.0);
}

vec3 when_lt(vec3 x, vec3 y) {
  return max(sign(y - x), 0.0);
}

vec3 when_ge(vec3 x, vec3 y) {
  return 1.0 - when_lt(x, y);
}

vec3 when_le(vec3 x, vec3 y) {
  return 1.0 - when_gt(x, y);
}

vec2 when_eq(vec2 x, vec2 y) {
  return 1.0 - abs(sign(x - y));
}

vec2 when_neq(vec2 x, vec2 y) {
  return abs(sign(x - y));
}

vec2 when_gt(vec2 x, vec2 y) {
  return max(sign(x - y), 0.0);
}

vec2 when_lt(vec2 x, vec2 y) {
  return max(sign(y - x), 0.0);
}

vec2 when_ge(vec2 x, vec2 y) {
  return 1.0 - when_lt(x, y);
}

vec2 when_le(vec2 x, vec2 y) {
  return 1.0 - when_gt(x, y);
}

float when_eq(float x, float y) {
  return 1.0 - abs(sign(x - y));
}

float when_neq(float x, float y) {
  return abs(sign(x - y));
}

float when_gt(float x, float y) {
  return max(sign(x - y), 0.0);
}

float when_lt(float x, float y) {
  return max(sign(y - x), 0.0);
}

float when_ge(float x, float y) {
  return 1.0 - when_lt(x, y);
}

float when_le(float x, float y) {
  return 1.0 - when_gt(x, y);
}

vec4 and(vec4 a, vec4 b) {
  return a * b;
}

vec4 or(vec4 a, vec4 b) {
  return min(a + b, 1.0);
}

vec4 Not(vec4 a) {
  return 1.0 - a;
}

vec3 and(vec3 a, vec3 b) {
  return a * b;
}

vec3 or(vec3 a, vec3 b) {
  return min(a + b, 1.0);
}

vec3 Not(vec3 a) {
  return 1.0 - a;
}

vec2 and(vec2 a, vec2 b) {
  return a * b;
}

vec2 or(vec2 a, vec2 b) {
  return min(a + b, 1.0);
}


vec2 Not(vec2 a) {
  return 1.0 - a;
}

float and(float a, float b) {
  return a * b;
}

float or(float a, float b) {
  return min(a + b, 1.0);
}

float Not(float a) {
  return 1.0 - a;
}{@}eases.glsl{@}#ifndef PI
#define PI 3.141592653589793
#endif

#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif

float backInOut(float t) {
  float f = t < 0.5
    ? 2.0 * t
    : 1.0 - (2.0 * t - 1.0);

  float g = pow(f, 3.0) - f * sin(f * PI);

  return t < 0.5
    ? 0.5 * g
    : 0.5 * (1.0 - g) + 0.5;
}

float backIn(float t) {
  return pow(t, 3.0) - t * sin(t * PI);
}

float backOut(float t) {
  float f = 1.0 - t;
  return 1.0 - (pow(f, 3.0) - f * sin(f * PI));
}

float bounceOut(float t) {
  const float a = 4.0 / 11.0;
  const float b = 8.0 / 11.0;
  const float c = 9.0 / 10.0;

  const float ca = 4356.0 / 361.0;
  const float cb = 35442.0 / 1805.0;
  const float cc = 16061.0 / 1805.0;

  float t2 = t * t;

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72;
}

float bounceIn(float t) {
  return 1.0 - bounceOut(1.0 - t);
}

float bounceInOut(float t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}

float circularInOut(float t) {
  return t < 0.5
    ? 0.5 * (1.0 - sqrt(1.0 - 4.0 * t * t))
    : 0.5 * (sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
}

float circularIn(float t) {
  return 1.0 - sqrt(1.0 - t * t);
}

float circularOut(float t) {
  return sqrt((2.0 - t) * t);
}

float cubicInOut(float t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
}

float cubicIn(float t) {
  return t * t * t;
}

float cubicOut(float t) {
  float f = t - 1.0;
  return f * f * f + 1.0;
}

float elasticInOut(float t) {
  return t < 0.5
    ? 0.5 * sin(+13.0 * HALF_PI * 2.0 * t) * pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * sin(-13.0 * HALF_PI * ((2.0 * t - 1.0) + 1.0)) * pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;
}

float elasticIn(float t) {
  return sin(13.0 * t * HALF_PI) * pow(2.0, 10.0 * (t - 1.0));
}

float elasticOut(float t) {
  return sin(-13.0 * (t + 1.0) * HALF_PI) * pow(2.0, -10.0 * t) + 1.0;
}

float expoInOut(float t) {
  return t == 0.0 || t == 1.0
    ? t
    : t < 0.5
      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;
}

float expoIn(float t) {
  return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));
}

float expoOut(float t) {
  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);
}

float linear(float t) {
  return t;
}

float quadraticInOut(float t) {
  float p = 2.0 * t * t;
  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

float quadraticIn(float t) {
  return t * t;
}

float quadraticOut(float t) {
  return -t * (t - 2.0);
}

float quarticInOut(float t) {
  return t < 0.5
    ? +8.0 * pow(t, 4.0)
    : -8.0 * pow(t - 1.0, 4.0) + 1.0;
}

float quarticIn(float t) {
  return pow(t, 4.0);
}

float quarticOut(float t) {
  return pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}

float qinticInOut(float t) {
  return t < 0.5
    ? +16.0 * pow(t, 5.0)
    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;
}

float qinticIn(float t) {
  return pow(t, 5.0);
}

float qinticOut(float t) {
  return 1.0 - (pow(t - 1.0, 5.0));
}

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}

float sineIn(float t) {
  return sin((t - 1.0) * HALF_PI) + 1.0;
}

float sineOut(float t) {
  return sin(t * HALF_PI);
}
{@}ColorMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 color;
uniform float alpha;

#!VARYINGS

#!SHADER: ColorMaterial.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: ColorMaterial.fs
void main() {
    gl_FragColor = vec4(color, alpha);
}{@}DebugCamera.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS
varying vec3 vColor;

#!SHADER: DebugCamera.vs
void main() {
    vColor = mix(uColor, vec3(1.0, 0.0, 0.0), step(position.z, -0.1));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: DebugCamera.fs
void main() {
    gl_FragColor = vec4(vColor, 1.0);
}{@}OcclusionMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 bbMin;
uniform vec3 bbMax;

#!VARYINGS

#!SHADER: Vertex.vs
void main() {
    vec3 pos = position;
    pos *= bbMax - bbMin;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment.fs
void main() {
    gl_FragColor = vec4(1.0);
}{@}ScreenQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: ScreenQuad.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: ScreenQuad.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a = 1.0;
}{@}ScreenQuadVR.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uEye;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex

vec2 scaleUV(vec2 uv, vec2 scale, vec2 origin) {
    vec2 st = uv - origin;
    st /= scale;
    return st + origin;
}

void main() {
    vUv = scaleUV(uv, vec2(2.0, 1.0), vec2(0.0)) - vec2(uEye, 0.0);
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv);
}{@}TestMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float alpha;

#!VARYINGS
varying vec3 vNormal;

#!SHADER: TestMaterial.vs
void main() {
    vec3 pos = position;
    vNormal = normalMatrix * normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: TestMaterial.fs
void main() {
    gl_FragColor = vec4(vNormal, 1.0);
}{@}TextureMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: TextureMaterial.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: TextureMaterial.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.rgb /= gl_FragColor.a;
}{@}BlitPass.fs{@}void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
    gl_FragColor.a = 1.0;
}{@}NukePass.vs{@}varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}{@}ShadowDepth.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: ShadowDepth.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: ShadowDepth.fs
void main() {
    gl_FragColor = vec4(vec3(gl_FragCoord.x), 1.0);
}{@}instance.vs{@}vec3 transformNormal(vec3 n, vec4 orientation) {
    vec3 nn = n + 2.0 * cross(orientation.xyz, cross(orientation.xyz, n) + orientation.w * n);
    return nn;
}

vec3 transformPosition(vec3 position, vec3 offset, vec3 scale, vec4 orientation) {
    vec3 _pos = position;
    _pos *= scale;

    _pos = _pos + 2.0 * cross(orientation.xyz, cross(orientation.xyz, _pos) + orientation.w * _pos);
    _pos += offset;
    return _pos;
}

vec3 transformPosition(vec3 position, vec3 offset, vec4 orientation) {
    vec3 _pos = position;

    _pos = _pos + 2.0 * cross(orientation.xyz, cross(orientation.xyz, _pos) + orientation.w * _pos);
    _pos += offset;
    return _pos;
}

vec3 transformPosition(vec3 position, vec3 offset, float scale, vec4 orientation) {
    return transformPosition(position, offset, vec3(scale), orientation);
}

vec3 transformPosition(vec3 position, vec3 offset) {
    return position + offset;
}

vec3 transformPosition(vec3 position, vec3 offset, float scale) {
    vec3 pos = position * scale;
    return pos + offset;
}

vec3 transformPosition(vec3 position, vec3 offset, vec3 scale) {
    vec3 pos = position * scale;
    return pos + offset;
}{@}lights.fs{@}vec3 worldLight(vec3 pos, vec3 vpos) {
    vec4 mvPos = modelViewMatrix * vec4(vpos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}{@}lights.vs{@}vec3 worldLight(vec3 pos) {
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}

vec3 worldLight(vec3 lightPos, vec3 localPos) {
    vec4 mvPos = modelViewMatrix * vec4(localPos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(lightPos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}{@}shadows.fs{@}#define PI2 6.2831853072
#define PI 3.141592653589793

#define MAX_PCSS_SAMPLES 17
vec2 poissonDisk[MAX_PCSS_SAMPLES];

struct PCSShadowConfig {
    int sampleCount;
    int ringCount;
    float lightWorldSize;
    float lightFrustumWidth;
    float nearPlane;
};

PCSShadowConfig defaultPCSSShadowConfig() {
    PCSShadowConfig config;
    config.sampleCount = 10;
    config.ringCount = 11;
    config.lightWorldSize = 0.3;
    config.lightFrustumWidth = 6.75;
    config.nearPlane = 6.5;
    return config;
}

bool frustumTest(vec3 coords) {
    return coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0 && coords.z <= 1.0;
}

float rand(float n){return fract(sin(n) * 43758.5453123);}
highp float rand( const in vec2 uv ) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot( uv.xy, vec2( a, b ) ), sn = mod( dt, PI );
    return fract( sin( sn ) * c );
}

void initPoissonSamples(const in vec2 randomSeed, PCSShadowConfig config) {
    float angleStep = PI2 * float(config.ringCount) / float(config.sampleCount);
    float invSampleCount = 1.0 / float(config.sampleCount);
    float angle = rand(randomSeed) * PI2;
    float radius = invSampleCount;
    float radiusStep = radius;
    
    for(int i = 0; i < MAX_PCSS_SAMPLES; i ++ ) {
        if( i > config.sampleCount ) {
            break;
        }
        poissonDisk[i] = vec2(cos(angle), sin(angle)) * pow(radius, 0.75);
        radius += radiusStep;
        angle += angleStep;
    }
}

float penumbraSize(const in float zReceiver, const in float zBlocker) {
    return (zReceiver - zBlocker) / zBlocker;
}

float findBlocker(sampler2D shadowMap, const in vec2 uv, const in float zReceiver, PCSShadowConfig config) {
    // This uses similar triangles to compute what
    // area of the shadow map we should search
    float lightSizeUV = config.lightWorldSize / config.lightFrustumWidth;
    float searchRadius = lightSizeUV * (zReceiver - config.nearPlane) / zReceiver;
    float blockerDepthSum = 0.0;
    int numBlockers = 0;
    
    for(int i = 0; i < MAX_PCSS_SAMPLES; i ++ ) {
        if( i > config.sampleCount ) {
            break;
        }
        float shadowMapDepth = texture2D(shadowMap, uv + poissonDisk[i] * searchRadius).r;
        if (shadowMapDepth < zReceiver) {
            blockerDepthSum += shadowMapDepth;
            numBlockers ++ ;
        }
    }
    
    if (numBlockers == 0)return -1.0;
    
    return blockerDepthSum / float(numBlockers);
}

float pcfFilter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius, PCSShadowConfig config) {
    float sum = 0.0;
    float depth;
    int numSamples = config.sampleCount;
    for(int i = 0; i < MAX_PCSS_SAMPLES; i ++ ) {
        if( i > numSamples ) {
            break;
        }
        depth = texture2D(shadowMap, uv + poissonDisk[i] * filterRadius).r;
        if (zReceiver <= depth) sum += 1.0;
    }
    for(int i = 0; i < MAX_PCSS_SAMPLES; i ++ ) {
        if( i > numSamples ) {
            break;
        }
        depth = texture2D(shadowMap, uv + -poissonDisk[i].yx * filterRadius).r;
        if (zReceiver <= depth) sum += 1.0;
    }
    return sum / (2.0 * float(numSamples));
}

float PCSS(sampler2D shadowMap, vec3 coords, PCSShadowConfig config) {
    vec2 uv = coords.xy;
    float zReceiver = coords.z; // Assumed to be eye-space z in this code
    
    initPoissonSamples(uv, config);
    
    float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver, config);
    if (avgBlockerDepth == -1.0)return 1.0; 

    float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);
    float lightSizeUV = config.lightWorldSize / config.lightFrustumWidth;
    float filterRadius = penumbraRatio * lightSizeUV * config.nearPlane / zReceiver;    

    return pcfFilter(shadowMap, uv, zReceiver, filterRadius, config);
}

float shadowLookupPCSS(sampler2D map, vec3 coords, float size, float compare, vec3 wpos, PCSShadowConfig config) {
    float shadow = 1.0;
    bool frustumTest = frustumTest(coords);
    if (frustumTest) {
        shadow = PCSS(map, coords, config);
    }
    return clamp(shadow, 0.0, 1.0);
}

float shadowCompare(sampler2D map, vec2 coords, float compare) {
    return step(compare, texture2D(map, coords).r);
}

float shadowLerp(sampler2D map, vec2 coords, float compare, float size) {
    const vec2 offset = vec2(0.0, 1.0);

    vec2 texelSize = vec2(1.0) / size;
    vec2 centroidUV = floor(coords * size + 0.5) / size;

    float lb = shadowCompare(map, centroidUV + texelSize * offset.xx, compare);
    float lt = shadowCompare(map, centroidUV + texelSize * offset.xy, compare);
    float rb = shadowCompare(map, centroidUV + texelSize * offset.yx, compare);
    float rt = shadowCompare(map, centroidUV + texelSize * offset.yy, compare);

    vec2 f = fract( coords * size + 0.5 );

    float a = mix( lb, lt, f.y );
    float b = mix( rb, rt, f.y );
    float c = mix( a, b, f.x );

    return c;
}

float srange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    float oldRange = oldMax - oldMin;
    float newRange = newMax - newMin;
    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
}

float shadowrandom(vec3 vin) {
    vec3 v = vin * 0.1;
    float t = v.z * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += srange(sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1), -1.0, 1.0, -0.3, 0.3);
    noise += srange(sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5), -1.0, 1.0, -0.3, 0.3);
    return noise;
}

float shadowLookup(sampler2D map, vec3 coords, float size, float compare, vec3 wpos) {
    float shadow = 1.0;

    #if defined(SHADOW_MAPS)
    bool frustumTest = coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0 && coords.z <= 1.0;
    if (frustumTest) {
        
        vec2 texelSize = vec2(1.0) / size;

        float dx0 = -texelSize.x;
        float dy0 = -texelSize.y;
        float dx1 = +texelSize.x;
        float dy1 = +texelSize.y;

        float rnoise = shadowrandom(wpos) * 0.00015;
        dx0 += rnoise;
        dy0 -= rnoise;
        dx1 += rnoise;
        dy1 -= rnoise;

        #if defined(SHADOWS_MED)
        shadow += shadowCompare(map, coords.xy + vec2(0.0, dy0), compare);
        //        shadow += shadowCompare(map, coords.xy + vec2(dx1, dy0), compare);
        shadow += shadowCompare(map, coords.xy + vec2(dx0, 0.0), compare);
        shadow += shadowCompare(map, coords.xy, compare);
        shadow += shadowCompare(map, coords.xy + vec2(dx1, 0.0), compare);
        //        shadow += shadowCompare(map, coords.xy + vec2(dx0, dy1), compare);
        shadow += shadowCompare(map, coords.xy + vec2(0.0, dy1), compare);
        shadow /= 5.0;

        #elif defined(SHADOWS_HIGH)
        shadow = shadowLerp(map, coords.xy + vec2(dx0, dy0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(0.0, dy0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx1, dy0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx0, 0.0), compare, size);
        shadow += shadowLerp(map, coords.xy, compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx1, 0.0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx0, dy1), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(0.0, dy1), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx1, dy1), compare, size);
        shadow /= 9.0;

        #else
        shadow = shadowCompare(map, coords.xy, compare);
        #endif
    }

        #endif

    return clamp(shadow, 0.0, 1.0);
}

#test !!window.Metal
vec3 transformShadowLight(vec3 pos, vec3 vpos, mat4 mvMatrix, mat4 viewMatrix) {
    vec4 mvPos = mvMatrix * vec4(vpos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return normalize(worldPosition.xyz - mvPos.xyz);
}

float getShadow(vec3 pos, vec3 normal, float bias, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = uniforms.shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);
        lookup = shadowLookup(shadowMap, coords, uniforms.shadowSize[i], coords.z - bias, pos);
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(uniforms.shadowLightPos[i], pos, uniforms.modelViewMatrix, globalUniforms.viewMatrix), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }

    #endif
    return shadow;
}

float getShadow(vec3 pos, vec3 normal, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    return getShadow(pos, normal, 0.0, uniforms, globalUniforms, shadowMap);
}

float getShadow(vec3 pos, float bias, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    return getShadow(pos, vec3(99999.0), bias, uniforms, globalUniforms, shadowMap);
}

float getShadow(vec3 pos, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    return getShadow(pos, vec3(99999.0), 0.0, uniforms, globalUniforms, shadowMap);
}

float getShadow(vec3 pos, vec3 normal) {
    return 1.0;
}

float getShadow(vec3 pos, float bias) {
    return 1.0;
}

float getShadow(vec3 pos) {
    return 1.0;
}

float getShadowPCSS(vec3 pos, vec3 normal, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap, PCSShadowConfig config) {
    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = uniforms.shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);
        lookup = shadowLookupPCSS(shadowMap, coords, uniforms.shadowSize[i], coords.z - bias, pos);
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(uniforms.shadowLightPos[i], pos, uniforms.modelViewMatrix, globalUniforms.viewMatrix), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }

    #endif
    return shadow;
}

float getShadowPCSS(vec3 pos, vec3 normal, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    PCSShadowConfig config = defaultPCSSShadowConfig();
    return getShadowPCSS(pos, normal, bias, config);
}

#endtest

#test !window.Metal
vec3 transformShadowLight(vec3 pos, vec3 vpos) {
    vec4 mvPos = modelViewMatrix * vec4(vpos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return normalize(worldPosition.xyz - mvPos.xyz);
}

float getShadow(vec3 pos, vec3 normal, float bias) {

    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    #pragma unroll_loop
    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);
        lookup = shadowLookup(shadowMap[i], coords, shadowSize[i], coords.z - bias, pos);        
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(shadowLightPos[i], pos), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }
    #endif
    return shadow;
}

float getShadow(vec3 pos, vec3 normal) {
    return getShadow(pos, normal, 0.0);
}

float getShadow(vec3 pos, float bias) {
    return getShadow(pos, vec3(99999.0), bias);
}

float getShadow(vec3 pos) {
    return getShadow(pos, vec3(99999.0), 0.0);
}

float getShadowPCSS(vec3 pos, vec3 normal, float bias, PCSShadowConfig config) {    
    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    #pragma unroll_loop
    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);
        lookup = shadowLookupPCSS(shadowMap[i], coords, shadowSize[i], coords.z - bias, pos, config);
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(shadowLightPos[i], pos), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }
    #endif
    
    return shadow;
}

float getShadowPCSS(vec3 pos, vec3 normal, float bias) {
    PCSShadowConfig config = defaultPCSSShadowConfig();
    return getShadowPCSS(pos, normal, bias, config);
}
#endtest{@}fresnel.glsl{@}float getFresnel(vec3 normal, vec3 viewDir, float power) {
    float d = dot(normalize(normal), normalize(viewDir));
    return 1.0 - pow(abs(d), power);
}

float getFresnel(float inIOR, float outIOR, vec3 normal, vec3 viewDir) {
    float ro = (inIOR - outIOR) / (inIOR + outIOR);
    float d = dot(normalize(normal), normalize(viewDir));
    return ro + (1. - ro) * pow((1. - d), 5.);
}


//viewDir = -vec3(modelViewMatrix * vec4(position, 1.0));{@}FXAA.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMask;

#!VARYINGS
varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

#!SHADER: FXAA.vs

varying vec2 vUv;

void main() {
    vUv = uv;

    vec2 fragCoord = uv * resolution;
    vec2 inverseVP = 1.0 / resolution.xy;
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);

    gl_Position = vec4(position, 1.0);
}

#!SHADER: FXAA.fs

#require(conditionals.glsl)

#ifndef FXAA_REDUCE_MIN
    #define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
    #define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
    #define FXAA_SPAN_MAX     8.0
#endif

vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,
            vec2 v_rgbNW, vec2 v_rgbNE,
            vec2 v_rgbSW, vec2 v_rgbSE,
            vec2 v_rgbM) {
    vec4 color;
    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
              dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);

    color = vec4(rgbB, texColor.a);
    color = mix(color, vec4(rgbA, texColor.a), when_lt(lumaB, lumaMin));
    color = mix(color, vec4(rgbA, texColor.a), when_gt(lumaB, lumaMax));

    return color;
}

void main() {
    vec2 fragCoord = vUv * resolution;
    float mask = texture2D(tMask, vUv).r;
    if (mask < 0.5) {
        gl_FragColor = fxaa(tDiffuse, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
    } else {
        gl_FragColor = texture2D(tDiffuse, vUv);
    }
    gl_FragColor.a = 1.0;
}
{@}gaussianblur.fs{@}vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.411764705882353) * direction;
  vec2 off2 = vec2(3.2941176470588234) * direction;
  vec2 off3 = vec2(5.176470588235294) * direction;
  color += texture2D(image, uv) * 0.1964825501511404;
  color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
  color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
  color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
  color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
  color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
  color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
  return color;
}

vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3333333333333333) * direction;
  color += texture2D(image, uv) * 0.29411764705882354;
  color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
  color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
  return color;
}

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

vec4 gaussianblur(sampler2D image, vec2 uv, float steps, vec2 resolution, vec2 direction) {

  vec4 blend = vec4(0.);
  float sum = 1.;
  float m = 1.;
  float n = steps;

  for (float i = 0.; i < 100.; i += 1.) {
      if(i >= 2. * steps) break;
      float k = i;
      float j = i - 0.5 * steps;
      blend += m * texture2D(image, uv + j * direction / resolution);
      m *= (n - k) / (k + 1.);
      sum += m;
  }

  return blend / sum;

}{@}DefaultText.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS

varying vec2 vUv;

#!SHADER: DefaultText.vs

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: DefaultText.fs

#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha;
}
{@}msdf.glsl{@}float msdf(vec3 tex, vec2 uv) {
    // TODO: fallback for fwidth for webgl1 (need to enable ext)
    float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
    float d = fwidth(signedDist);
    float alpha = smoothstep(-d, d, signedDist);
    if (alpha < 0.01) discard;
    return alpha;
}

float msdf(sampler2D tMap, vec2 uv) {
    vec3 tex = texture2D(tMap, uv).rgb;
    return msdf( tex, uv );
}

float strokemsdf(sampler2D tMap, vec2 uv, float stroke, float padding) {
    vec3 tex = texture2D(tMap, uv).rgb;
    float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
    float t = stroke;
    float alpha = smoothstep(-t, -t + padding, signedDist) * smoothstep(t, t - padding, signedDist);
    return alpha;
}{@}GLUIBatch.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec2 scale;
attribute float rotation;
//attributes

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
//varyings

#!SHADER: Vertex

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}

void main() {
    vUv = uv;
    //vdefines

    vec3 pos = vec3(rotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(position, 1.0));
    pos.xy *= scale;
    pos.xyz += offset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(1.0);
}{@}GLUIBatchText.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec2 scale;
attribute float rotation;
//attributes

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
//varyings

#!SHADER: Vertex

mat4 lrotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}

void main() {
    vUv = uv;
    //vdefines

    vec3 pos = vec3(lrotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(position, 1.0));

    //custommain

    pos.xy *= scale;
    pos += offset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = v_uColor;
    gl_FragColor.a = alpha * v_uAlpha;
}
{@}GLUIColor.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: GLUIColor.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: GLUIColor.fs
void main() {
    vec2 uv = vUv;
    vec3 uvColor = vec3(uv, 1.0);
    gl_FragColor = vec4(mix(uColor, uvColor, 0.0), uAlpha);
}{@}GLUIObject.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: GLUIObject.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: GLUIObject.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a *= uAlpha;
}{@}gluimask.fs{@}uniform vec4 uMaskValues;

#require(range.glsl)

vec2 getMaskUV() {
    vec2 ores = gl_FragCoord.xy / resolution;
    vec2 uv;
    uv.x = range(ores.x, uMaskValues.x, uMaskValues.z, 0.0, 1.0);
    uv.y = 1.0 - range(1.0 - ores.y, uMaskValues.y, uMaskValues.w, 0.0, 1.0);
    return uv;
};{@}lodblur.fs{@}float lodweight(float t, float log2radius, float gamma) {
	return exp(-gamma*pow(log2radius-t,2.));
}


vec4 lodBlur(sampler2D tMap, vec2 uv, float radius, float gamma) {
	vec4 pix = vec4(0.);
	float norm = 0.;
	//weighted integration over mipmap levels
	for(float i = 0.; i < 10.; i += 0.5)
	{
		float k = lodweight(i, log2(radius), gamma);
		pix += k*textureLod(tMap, uv, i);
		norm += k;
	}
	//nomalize, and a bit of brigtness hacking
	return pix*pow(norm,-0.99);
}
{@}luma.fs{@}float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}{@}lut.fs{@}vec4 lookup(in vec4 textureColor, in sampler2D lookupTable) {
    mediump float blueColor = textureColor.b * 63.0;

    mediump vec2 quad1;
    quad1.y = floor(floor(blueColor) / 8.0);
    quad1.x = floor(blueColor) - (quad1.y * 8.0);

    mediump vec2 quad2;
    quad2.y = floor(ceil(blueColor) / 8.0);
    quad2.x = ceil(blueColor) - (quad2.y * 8.0);

    highp vec2 texPos1;
    texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);
    texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);

    texPos1.y = 1.0-texPos1.y;

    highp vec2 texPos2;
    texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);
    texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);

    texPos2.y = 1.0-texPos2.y;

    lowp vec4 newColor1 = texture2D(lookupTable, texPos1);
    lowp vec4 newColor2 = texture2D(lookupTable, texPos2);

    lowp vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
    return newColor;
}

vec3 lookup(vec3 textureColor, sampler2D lookupTable) {
    return lookup(vec4(textureColor, 1.0), lookupTable).rgb;
}
{@}matcap.vs{@}vec2 reflectMatcap(vec3 position, mat4 modelViewMatrix, mat3 normalMatrix, vec3 normal) {
    vec4 p = vec4(position, 1.0);
    
    vec3 e = normalize(vec3(modelViewMatrix * p));
    vec3 n = normalize(normalMatrix * normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
        pow(r.x, 2.0) +
        pow(r.y, 2.0) +
        pow(r.z + 1.0, 2.0)
    );
    
    vec2 uv = r.xy / m + .5;
    
    return uv;
}

vec2 reflectMatcap(vec3 position, mat4 modelViewMatrix, vec3 normal) {
    vec4 p = vec4(position, 1.0);
    
    vec3 e = normalize(vec3(modelViewMatrix * p));
    vec3 n = normalize(normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
                         pow(r.x, 2.0) +
                         pow(r.y, 2.0) +
                         pow(r.z + 1.0, 2.0)
                         );
    
    vec2 uv = r.xy / m + .5;
    
    return uv;
}

vec2 reflectMatcap(vec4 mvPos, vec3 normal) {
    vec3 e = normalize(vec3(mvPos));
    vec3 n = normalize(normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
                         pow(r.x, 2.0) +
                         pow(r.y, 2.0) +
                         pow(r.z + 1.0, 2.0)
                         );

    vec2 uv = r.xy / m + .5;

    return uv;
}{@}normalmap.glsl{@}vec3 unpackNormal( vec3 eye_pos, vec3 surf_norm, sampler2D normal_map, float intensity, float scale, vec2 uv ) {
    surf_norm = normalize(surf_norm);
    
    vec3 q0 = dFdx( eye_pos.xyz );
    vec3 q1 = dFdy( eye_pos.xyz );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );
    
    vec3 S = normalize( q0 * st1.t - q1 * st0.t );
    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
    vec3 N = normalize( surf_norm );
    
    vec3 mapN = texture2D( normal_map, uv * scale ).xyz * 2.0 - 1.0;
    mapN.xy *= intensity;
    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * mapN );
}

//mvPosition.xyz, normalMatrix * normal, normalMap, intensity, scale, uv{@}PBR.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: Vertex

#require(pbr.vs)

void main() {
    vec3 pos = position;
    setupPBR(pos);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(pbr.fs)

void main() {
    gl_FragColor = getPBR();
}
{@}pbr.fs{@}uniform sampler2D tBaseColor;
uniform sampler2D tMRO;
uniform sampler2D tNormal;
uniform sampler2D tLUT;

uniform sampler2D tEnvDiffuse;
uniform sampler2D tEnvSpecular;

uniform sampler2D tLightmap;
uniform float uUseLightmap;
uniform float uLightmapIntensity;
uniform float uUseLinearOutput;

uniform vec3 uTint;
uniform vec2 uTiling;
uniform vec2 uOffset;
uniform vec4 uMRON;
uniform vec3 uEnv;

uniform float uHDR;

varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vV;
varying vec3 vWorldNormal;

vec3 unpackNormalPBR( vec3 eye_pos, vec3 surf_norm, sampler2D normal_map, float intensity, float scale, vec2 uv ) {
    surf_norm = normalize(surf_norm);

    vec3 q0 = dFdx( eye_pos.xyz );
    vec3 q1 = dFdy( eye_pos.xyz );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );

    vec3 S = q0 * st1.t - q1 * st0.t;
    vec3 T = -q0 * st1.s + q1 * st0.s;
    vec3 N = surf_norm;

    if (length(S) >= 0.00001) { S = normalize(S); }
    if (length(T) >= 0.00001) { T = normalize(T); }
    if (length(N) >= 0.00001) { N = normalize(N); }

    vec3 mapN = texture2D( normal_map, uv * scale ).xyz * 2.0 - 1.0;
    mapN.xy *= intensity;
    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * mapN );
}

const vec2 INV_ATAN = vec2(0.1591, 0.3183);
const float LN2 = 0.6931472;
const float ENV_LODS = 7.0;

struct PBRConfig {
    float reflection;
    float clearcoat;
    vec3 color;
    vec3 lightColor;
    vec3 envReflection;
    bool overrideMRO;
    vec3 mro;
};

vec3 fresnelSphericalGaussianRoughness(float cosTheta, vec3 F0, float roughness) {
    return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(2.0, (-5.55473 * cosTheta - 6.98316) * cosTheta);
}

vec2 sampleSphericalMap(vec3 v)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= INV_ATAN;
    uv += 0.5;

    uv.x = fract(uv.x + uEnv.z);

    return uv;
}

vec4 SRGBtoLinear(vec4 srgb) {
    vec3 linOut = pow(srgb.xyz, vec3(2.2));
    return vec4(linOut, srgb.w);
}

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(0.4545454545454545));
}

vec4 linearToSRGB(vec4 color) {
    return vec4(pow(color.rgb, vec3(0.4545454545454545)), 1.0);
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec4 autoToLinear(vec4 texel, float uHDR) {
    vec4 color = RGBMToLinear(texel);
    if (uHDR < 0.001) { color = SRGBtoLinear(texel); }
    return color;
}

vec3 uncharted2Tonemap(vec3 x) {
    float A = 0.15;
    float B = 0.50;
    float C = 0.10;
    float D = 0.20;
    float E = 0.02;
    float F = 0.30;
    return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - E / F;
}

vec3 uncharted2(vec3 color) {
    const float W = 11.2;
    float exposureBias = 2.0;
    vec3 curr = uncharted2Tonemap(exposureBias * color);
    vec3 whiteScale = 1.0 / uncharted2Tonemap(vec3(W));
    return curr * whiteScale;
}

vec4 getIBLContribution(float NdV, vec4 baseColor, vec4 MRO, vec3 R, vec3 V, vec3 N, sampler2D tLUT, sampler2D tEnvDiffuse, sampler2D tEnvSpecular, PBRConfig config) {
    float metallic = clamp(MRO.x + uMRON.x - 1.0, 0.0, 1.0);
    float roughness = clamp(MRO.y + uMRON.y - 1.0, 0.0, 1.0);
    float ao = mix(1.0, MRO.z, uMRON.z);

    if (config.overrideMRO) {
        metallic = config.mro.x;
        roughness = config.mro.y;
        ao *= config.mro.z;
    }

    vec2 lutUV = vec2(NdV, roughness);
    vec2 diffuseUV = sampleSphericalMap(N);

    vec3 brdf = SRGBtoLinear(texture2D(tLUT, lutUV)).rgb;
    vec3 diffuse = autoToLinear( texture2D(tEnvDiffuse, diffuseUV ), uHDR).rgb;

    vec3 lightmap = vec3(1.0);

    if (uUseLightmap > 0.0) {
        lightmap = texture2D(tLightmap, vUv2).rgb;
        lightmap.rgb = pow(lightmap.rgb, vec3(2.2)) * uLightmapIntensity;
        diffuse.rgb *= lightmap.rgb;
    }

    diffuse *= baseColor.rgb;

    float level = floor(roughness * ENV_LODS);
    vec2 specUV = sampleSphericalMap(R);

    specUV.y /= 2.0;
    specUV /= pow(2.0, level);
    specUV.y += 1.0 - exp(-LN2 * level);

    vec3 specular = autoToLinear(texture2D(tEnvSpecular, specUV), uHDR).rgb;

    // fake stronger specular highlight
    specular += pow(specular, vec3(2.2)) * uEnv.y;

    if (uUseLightmap > 0.0) {
        specular *= lightmap;
    }

    vec3 F0 = vec3(0.04);
    F0 = mix(F0, baseColor.rgb, metallic);

    vec3 F = fresnelSphericalGaussianRoughness(NdV, F0, roughness);

    vec3 diffuseContrib = 1.0 - F;
    specular = specular.rgb * (F * brdf.x + brdf.y);

    diffuseContrib *= 1.0 - metallic;

    float alpha = baseColor.a;

    return vec4((diffuseContrib * diffuse + specular + (config.envReflection*0.01)) * ao * uEnv.x, alpha);
}

vec3 getNormal() {
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    return unpackNormalPBR(V, N, tNormal, uMRON.w, 1.0, vUv).xyz;
}

vec4 getPBR(vec3 baseColor, PBRConfig config) {
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    vec3 worldNormal = getNormal();
    vec3 R = reflect(V, worldNormal);
    float NdV = abs(dot(worldNormal, V));
    vec4 baseColor4 = SRGBtoLinear(vec4(baseColor, 1.0));

    vec4 MRO = texture2D(tMRO, vUv);
    vec4 color = getIBLContribution(NdV, baseColor4, MRO, R, V, worldNormal, tLUT, tEnvDiffuse, tEnvSpecular, config);

    if (uUseLinearOutput < 0.5) {
        color.rgb = uncharted2(color.rgb);
        color = linearToSRGB(color);
    }

    return color;
}

vec4 getPBR(vec3 baseColor) {
    PBRConfig config;
    return getPBR(baseColor, config);
}

vec4 getPBR() {
    vec4 baseColor = texture2D(tBaseColor, vUv);
    vec4 color = getPBR(baseColor.rgb * uTint);
    color.a *= baseColor.a;
    return color;
}
{@}pbr.vs{@}attribute vec2 uv2;

uniform sampler2D tBaseColor;
uniform vec2 uTiling;
uniform vec2 uOffset;

varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vNormal;
varying vec3 vWorldNormal;
varying vec3 vV;

void setupPBR(vec3 p0) { //inlinemain
    vUv = uv * uTiling + uOffset;
    vUv2 = uv2;
    vec4 worldPos = modelMatrix * vec4(p0, 1.0);
    vV = worldPos.xyz - cameraPosition;
    vNormal = normalMatrix * normal;
    vWorldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal;
}

void setupPBR(vec3 p0, vec3 n) {
    vUv = uv * uTiling + uOffset;
    vUv2 = uv2;
    vec4 worldPos = modelMatrix * vec4(p0, 1.0);
    vV = worldPos.xyz - cameraPosition;
    vNormal = normalMatrix * n;
    vWorldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * n;
}
{@}range.glsl{@}

float range(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    vec3 sub = vec3(oldValue, newMax, oldMax) - vec3(oldMin, newMin, oldMin);
    return sub.x * sub.y / sub.z + newMin;
}

vec2 range(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    vec2 oldRange = oldMax - oldMin;
    vec2 newRange = newMax - newMin;
    vec2 val = oldValue - oldMin;
    return val * newRange / oldRange + newMin;
}

vec3 range(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    vec3 oldRange = oldMax - oldMin;
    vec3 newRange = newMax - newMin;
    vec3 val = oldValue - oldMin;
    return val * newRange / oldRange + newMin;
}

float crange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

vec2 crange(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

vec3 crange(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

float rangeTransition(float t, float x, float padding) {
    float transition = crange(t, 0.0, 1.0, -padding, 1.0 + padding);
    return crange(x, transition - padding, transition + padding, 1.0, 0.0);
}
{@}rgb2hsv.fs{@}vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}{@}rgbshift.fs{@}vec4 getRGB(sampler2D tDiffuse, vec2 uv, float angle, float amount) {
    vec2 offset = vec2(cos(angle), sin(angle)) * amount;
    vec4 r = texture2D(tDiffuse, uv + offset);
    vec4 g = texture2D(tDiffuse, uv);
    vec4 b = texture2D(tDiffuse, uv - offset);
    return vec4(r.r + g.r*amount, g.g + r.b*amount, b.b + b.g*amount, g.a);
}{@}roundedBorder.glsl{@}float roundedBorder(float thickness, float radius, vec2 uv, vec2 resolution, out float inside) {
    // Get square-pixel coordinates in range -1.0 .. 1.0
    float multiplier = max(resolution.x, resolution.y);
    vec2 ratio = resolution / multiplier;
    vec2 squareUv = (2.0 * uv - 1.0) * ratio; // -1.0 .. 1.0

    float squareThickness = (thickness / multiplier);
    float squareRadius = 2.0 * (radius / multiplier);
    vec2 size = ratio - vec2(squareRadius + squareThickness);


    vec2 q = abs(squareUv) - size;
    float d = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - squareRadius;
    float dist = abs(d);
    float delta = fwidth(dist);
    float border = 1.0 - smoothstep(-delta, delta, dist - squareThickness);

    delta = fwidth(d);
    float limit = squareThickness * 0.5;
    inside = 1.0 - smoothstep(-delta, delta, d - limit);

    return border;
}

float roundedBorder(float thickness, float radius, vec2 uv, vec2 resolution) {
    float inside;
    return roundedBorder(thickness, radius, uv, resolution, inside);
}
{@}ScreenQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: ScreenQuad.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: ScreenQuad.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
}{@}simplenoise.glsl{@}float getNoise(vec2 uv, float time) {
    float x = uv.x * uv.y * time * 1000.0;
    x = mod(x, 13.0) * mod(x, 123.0);
    float dx = mod(x, 0.01);
    float amount = clamp(0.1 + dx * 100.0, 0.0, 1.0);
    return amount;
}

#test Device.mobile
float sinf(float x) {
    x*=0.159155;
    x-=floor(x);
    float xx=x*x;
    float y=-6.87897;
    y=y*xx+33.7755;
    y=y*xx-72.5257;
    y=y*xx+80.5874;
    y=y*xx-41.2408;
    y=y*xx+6.28077;
    return x*y;
}
#endtest

#test !Device.mobile
    #define sinf sin
#endtest

highp float getRandom(vec2 co) {
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt = dot(co.xy, vec2(a, b));
    highp float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
}

float cnoise(vec3 v) {
    float t = v.z * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += (sinf(v.x * 0.9 / s + t * 10.0) + sinf(v.x * 2.4 / s + t * 15.0) + sinf(v.x * -3.5 / s + t * 4.0) + sinf(v.x * -2.5 / s + t * 7.1)) * 0.3;
    noise += (sinf(v.y * -0.3 / s + t * 18.0) + sinf(v.y * 1.6 / s + t * 18.0) + sinf(v.y * 2.6 / s + t * 8.0) + sinf(v.y * -2.6 / s + t * 4.5)) * 0.3;
    return noise;
}

float cnoise(vec2 v) {
    float t = v.x * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += (sinf(v.x * 0.9 / s + t * 10.0) + sinf(v.x * 2.4 / s + t * 15.0) + sinf(v.x * -3.5 / s + t * 4.0) + sinf(v.x * -2.5 / s + t * 7.1)) * 0.3;
    noise += (sinf(v.y * -0.3 / s + t * 18.0) + sinf(v.y * 1.6 / s + t * 18.0) + sinf(v.y * 2.6 / s + t * 8.0) + sinf(v.y * -2.6 / s + t * 4.5)) * 0.3;
    return noise;
}

float fbm(vec3 x, int octaves) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100);

    for (int i = 0; i < 10; ++i) {
        if (i >= octaves){ break; }

        v += a * cnoise(x);
        x = x * 2.0 + shift;
        a *= 0.5;
    }

    return v;
}

float fbm(vec2 x, int octaves) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));

    for (int i = 0; i < 10; ++i) {
        if (i >= octaves){ break; }

        v += a * cnoise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }

    return v;
}
{@}transformUV.glsl{@}vec2 translateUV(vec2 uv, vec2 translate) {
    return uv - translate;
}

vec2 rotateUV(vec2 uv, float r, vec2 origin) {
    float c = cos(r);
    float s = sin(r);
    mat2 m = mat2(c, -s,
                  s, c);
    vec2 st = uv - origin;
    st = m * st;
    return st + origin;
}

vec2 scaleUV(vec2 uv, vec2 scale, vec2 origin) {
    vec2 st = uv - origin;
    st /= scale;
    return st + origin;
}

vec2 rotateUV(vec2 uv, float r) {
    return rotateUV(uv, r, vec2(0.5));
}

vec2 scaleUV(vec2 uv, vec2 scale) {
    return scaleUV(uv, scale, vec2(0.5));
}

vec2 skewUV(vec2 st, vec2 skew) {
    return st + st.gr * skew;
}

vec2 transformUV(vec2 uv, float a[9]) {

    // Array consists of the following
    // 0 translate.x
    // 1 translate.y
    // 2 skew.x
    // 3 skew.y
    // 4 rotate
    // 5 scale.x
    // 6 scale.y
    // 7 origin.x
    // 8 origin.y

    vec2 st = uv;

    //Translate
    st -= vec2(a[0], a[1]);

    //Skew
    st = st + st.gr * vec2(a[2], a[3]);

    //Rotate
    st = rotateUV(st, a[4], vec2(a[7], a[8]));

    //Scale
    st = scaleUV(st, vec2(a[5], a[6]), vec2(a[7], a[8]));

    return st;
}{@}module.json{@}{
  "gl": ["transformUV"]
}{@}uvgrid.glsl{@}#require(transformUV.glsl)

vec2 getUVForGrid(vec2 uv, float xr, float yr, float x, float y) {
    return translateUV(scaleUV(uv, vec2(xr, yr), vec2(0.0)), -vec2(x / xr, y / yr));
}
{@}BaseSceneShader.fs{@}uniform sampler2D tFrom;
uniform sampler2D tTo;

uniform vec2 uMouseMove;
uniform float uBend;
uniform float uVelocity;

uniform float uFirst;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    vec3 color = vec3(0.);

    if (uBend > 0.) {
        vec2 center = vec2(0.5, 0.); 
        vec2 offset = uv - center;
        float distance = length(offset);
        float bend = max(uBend, 0.) * 2.;
        float distortion = bend * pow(distance, 2.0);
        uv.y += distortion * (1.0 - center.y);
    }

    uv.y -= uVelocity * smoothstep(0.8, 0.05, length(uMouseMove-uv)) * 0.002 * smoothstep(0.499, 0.3, abs(0.5-uv.y));
    
    color = texture2D(tFrom, uv).rgb;

    if (uFirst > 0.5) color = vec3(16./255.);
    gl_FragColor = vec4(color, 1.0);

}
{@}ButtermaxVFX.fs{@}
uniform float uRGBStrength;
uniform float uExposure;
uniform float uVelocity;
uniform vec2 uMouseMove;
uniform float uBloomStrength;
uniform sampler2D uRT;
uniform vec3 uPeakColor;

#require(UnrealBloom.fs)
#require(simplenoise.glsl)
#require(HydraBloom.glsl)
#require(rgbshift.fs)
#require(rgb2hsv.fs)
#require(transformUV.glsl)
#require(blendmodes.glsl)

vec3 uncharted2Tonemap(vec3 x) {
  float A = 0.15;
  float B = 0.50;
  float C = 0.10;
  float D = 0.20;
  float E = 0.02;
  float F = 0.30;
  return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - E / F;
}

vec3 uncharted2(vec3 color) {
  const float W = 11.2;
  float exposureBias = 10.0;
  vec3 curr = uncharted2Tonemap(exposureBias * color);
  vec3 whiteScale = 1.0 / uncharted2Tonemap(vec3(W));
  return curr * whiteScale;
}

vec3 unreal(vec3 x) {
  return x / (x + 0.155) * 1.019;
}

vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 czm_saturation(vec3 rgb, float adjustment)
{
    // Algorithm from Chapter 16 of OpenGL Shading Language
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}


void main() {
    vec2 uv = vUv;
    uv = scaleUV(uv, vec2(1.0 + abs(uVelocity) * 0.001));
    float warp = - uVelocity * smoothstep(0.8, 0.05, abs(uMouseMove.x-uv.x)) * 0.0025;

    vec2 warpUV = uv;
    warpUV.y += uVelocity * 0.02;
    warp += sin(length(uMouseMove-warpUV) * 30.0 * smoothstep(0.0, 1.0, length(uMouseMove-warpUV))) * 0.0002 * abs(uVelocity) * (1.0-smoothstep(1.4, 0.5, length(uMouseMove-warpUV)));
    uv.y += warp;

    //float edges = smoothstep(0.5, 0.45, abs(vUv.y-0.5));
    //uv = mix(uv, vUv, 1.0-edges);]

    float edges = step(0.51, abs(uv.y-0.5));
    //edges = max(edges, step(0.5, abs(uv.x-0.5)));
    //uv.x = mix(uv.x, 1.0-uv.x, edges);
    
    uv = scaleUV(uv, vec2(mix(1.0, 1.15, edges)));
    uv.y += mod(uv.y + sin(uv.x * 5.0 + time * 0.5) * 0.01, (resolution.y * 0.000008)) * edges * abs(uVelocity);

    vec4 color = getRGB(tDiffuse, uv, mix(radians(-90.0), 0.0, edges), 0.0002 + warp * 0.1 + edges * 0.002 + uVelocity * 0.00005);
    
  
    //color.rgb *= mix(1.0, 0.8, edges);


    // vec3 bloom = getUnrealBloom(vUv).rgb;
    // color.rgb = pow(color.rgb, vec3(2.2));
    // color.rgb += pow(bloom, vec3(2.2)) * uBloomStrength;
    // color.rgb = pow(color.rgb, vec3(0.45));

    // float top = 1.0-step(warp, uv.y);
    // float bottom = 1.0-step(warp, uv.y);
    // float peak = bottom;//mix(top, bottom, step(0.0, uVelocity));
    color.rgb = mix(color.rgb, uPeakColor, edges);

    //color.rgb += (0.5-getNoise(vUv, time)) * 0.03;

    gl_FragColor = color;

    #test Tests.debugHitarea()
      vec4 rt = texture2D(uRT, gl_FragCoord.xy / resolution);
      gl_FragColor = color;
      gl_FragColor += rt;
    #endtest
    
    gl_FragColor.a = 1.0;
}{@}GLUITransitionShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uTransition;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    vec3 color = vec3(16./255.);
    gl_FragColor = vec4(color, uTransition);   
}{@}SceneTransition.fs{@}uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform sampler2D tDraw;

uniform vec3 uPointerColor;
uniform vec2 uMousePosition;
uniform vec2 uMouseMove;

uniform float uTransition;
uniform float uPointerAlpha;
uniform float uBend;
uniform float uFirst;

uniform float uBlur;
uniform float uSize2;
uniform float uZoom;
uniform float uVelocity;

varying vec2 vUv;

#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)

float createDot(vec2 uv, vec2 transition, float size, float blur) {
    vec2 repeat = vec2(3., 3.);
    vec2 uvMod = mod(uv + transition, repeat) - repeat*0.5;
    return 1. - smoothstep(size - blur - 0.02, size + blur + 0.02, length(uvMod));
}

float circleExp(vec2 position, float scale) {
    vec2 normalizedScreen = vec2(resolution.x/resolution.y, 1.0);
    vec2 uv = gl_FragCoord.xy/resolution.y;
    vec2 offset = vec2(position.x, 1. - position.y) * normalizedScreen;
    vec2 circleCenter = offset;
    float circleRadius = 0.2 * scale;
    float distanceToCenter = length(uv - circleCenter);
    float edgeSmoothness = 0.8;
    float circle = 1.0 - smoothstep(circleRadius - edgeSmoothness, circleRadius, distanceToCenter);
    return circle;
}


vec2 applyCRTEffect(vec2 uv, float barrelAmount, float pincushionAmount)
{
    if (barrelAmount > 0. || pincushionAmount > 0.) { 
        uv = 2.0 * uv - 1.0;
        uv *= 1.0 + length(uv) * barrelAmount;
        uv = 0.5 * (uv + 1.0);

        uv = uv * 2.0 - 1.0;
        uv *= 1.0 + uv.x * uv.x * pincushionAmount;
        uv = 0.5 * (uv + 1.0);
    }

    return uv;
}

vec3 rgbShift(sampler2D tDiffuse, vec2 uv, float angle, float amount) {
    vec2 offset = vec2(cos(angle), sin(angle)) * amount;
    float r = texture2D(tDiffuse, uv + offset).r;
    float g = texture2D(tDiffuse, uv).g;
    float b = texture2D(tDiffuse, uv - offset).b;
    return vec3(r, g, b);
}

void main() {
    vec3 color;
    const float uTimeWithTransition = 1.0;
    const float uTimeStrength = 0.5;
    const float uSize = 1.;
    const float uSize0 = 0.35;
    const float uSize1 = 0.35;
    const float uBlur0 = 0.55;
    const float uBlur1 = 0.55;
    const float uBlur2 = 0.;
    const float uSwing = 0.;
    const float uSwingX = 0.;
    const float uSwingY = 0.;
    const float uSwingXY = 0.;
    const float uSwingBlur = 0.;

    vec2 screenUV = (gl_FragCoord.xy / resolution.xy);
    float ratio = resolution.x / resolution.y;
    vec2 squareUV = vUv / vec2(1., ratio);
    vec2 uv = vUv;
    color = vec3(0.);

    vec2 mousePos = uMousePosition;//mix(uMousePosition, vec2(0.5), smoothstep(0.3, 0.5, abs(length(0.5-uTransition))));
    mousePos = mix(mousePos, vec2(0.5), uFirst);

    // Dot Transition
    float zoom = uZoom;
    float dots = -0.1;
    vec2 dotUV = scaleUV(squareUV, vec2(1.0 + uTransition * 1.0), mousePos);
    vec2 uvMod = mix(applyCRTEffect(squareUV, .1, -.1), dotUV, uTransition) * zoom;
    float dotx = 0.;
    float iTime = mix(sin(time * uTimeStrength), uTransition * uTimeStrength, uTimeWithTransition);
    float size = uSize;
    size = uSize * crange(uTransition, 0., 1., 0., 2.0);
    dotx = circleExp(mousePos, crange(uTransition, 0.,1., 0., 15.));
    float sizeDotX =size * dotx;
    float bb1 = uBlur0 * uBlur;
    float bb2 = uBlur1 * uBlur;
    float bb3 = uBlur2 * uBlur;
    float size1 = uSize0 *sizeDotX;
    float size2 = uSize1 *sizeDotX;
    float size3 = uSize2 *sizeDotX;

    for(float i = 0.0; i < 3.; i++) {
        vec2 PLEASE_TAKE_CARE_OF_REPETITIONS = uvMod + vec2(i, 0.);
        dots += createDot(PLEASE_TAKE_CARE_OF_REPETITIONS, vec2(0., i), size1, bb1);
        dots += createDot(PLEASE_TAKE_CARE_OF_REPETITIONS, vec2(1., i), size2, bb2);
        dots += createDot(PLEASE_TAKE_CARE_OF_REPETITIONS, vec2(2. , i), size3, bb3);
    }

    dots *= smoothstep(1.0, 0.6, uTransition);

    vec2 scaleOrigin = mousePos;
    scaleOrigin = mix(scaleOrigin, vec2(0.5), 0.2);
    scaleOrigin.y += 0.2 - uTransition * 0.5;

    vec2 uvFrom = mix(uv, applyCRTEffect(uv, 0.1, -.1), uTransition);
    uvFrom = scaleUV(uvFrom, vec2(1.0 + uTransition * 1.2), scaleOrigin);
    uvFrom = rotateUV(uvFrom, -uTransition*mousePos.x*0.3);

    vec2 uvTo = mix(applyCRTEffect(uv, -0.1, 0.1), uv, uTransition);
    scaleOrigin.y -= uTransition * 0.5;
    uvTo = scaleUV(uvTo, vec2(0.6 + uTransition * 0.4), scaleOrigin);
    uvTo = rotateUV(uvTo, (1.0-uTransition)*mousePos.x*0.3);

    vec3 rgbFrom = rgbShift(tFrom, uvFrom, radians(90.0), 0.01*uTransition + uVelocity * 0.0001);
    vec3 rgbTo = texture2D(tTo, uvTo).rgb;

    vec3 from = rgbFrom;
    if (from.rgb == vec3(0.0)) from.rgb = vec3(16./300.);
    vec3 to = rgbTo;

    #test !Device.mobile
        vec3 rainbow = vec3(1.0, 0.15, 0.15);
        rainbow = rgb2hsv(rainbow);
        rainbow.x += (0.5 + sin(time*0.2 - length(screenUV-mousePos) * 6.0 + uTransition * 5.0 + dots * 8.0 + dotx * 2.0));
        rainbow = hsv2rgb(rainbow);

        float offsetRainbow = mix(0.15, 0.1, smoothstep(0.2, 1.0, length(screenUV-mousePos)));
        float fadeRainbow = smoothstep(0.52, 0.2, uTransition);

        to = mix(to, rainbow, (1.0-step(0.5+offsetRainbow*fadeRainbow, dots + dotx * 0.5)));
    #endtest
    color = mix(from, to, step(0.5, dots + dotx * 0.5));
    
    gl_FragColor = vec4(color, 1.0);
}{@}ScrollSceneTransition.fs{@}uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform sampler2D tDraw;

uniform vec3 uPointerColor;
uniform vec2 uMousePosition;
uniform vec2 uMouseMove;

uniform float uTransition;
uniform float uPointerAlpha;
uniform float uBend;
uniform float uFirst;

uniform float uBlur;
uniform float uSize2;
uniform float uZoom;
uniform float uVelocity;

varying vec2 vUv;

#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)

float createDot(vec2 uv, vec2 transition, float size, float blur) {
    vec2 repeat = vec2(3., 3.);
    vec2 uvMod = mod(uv + transition, repeat) - repeat*0.5;
    return 1. - smoothstep(size - blur - 0.02, size + blur + 0.02, length(uvMod));
}

float circleExp(vec2 position, float scale) {
    vec2 normalizedScreen = vec2(resolution.x/resolution.y, 1.0);
    vec2 uv = gl_FragCoord.xy/resolution.y;
    vec2 offset = vec2(position.x, 1. - position.y) * normalizedScreen;
    vec2 circleCenter = offset;
    float circleRadius = 0.2 * scale;
    float distanceToCenter = length(uv - circleCenter);
    float edgeSmoothness = 0.8;
    float circle = 1.0 - smoothstep(circleRadius - edgeSmoothness, circleRadius, distanceToCenter);
    return circle;
}


vec2 applyCRTEffect(vec2 uv, float barrelAmount, float pincushionAmount)
{
    if (barrelAmount > 0. || pincushionAmount > 0.) { 
        uv = 2.0 * uv - 1.0;
        uv *= 1.0 + length(uv) * barrelAmount;
        uv = 0.5 * (uv + 1.0);

        uv = uv * 2.0 - 1.0;
        uv *= 1.0 + uv.x * uv.x * pincushionAmount;
        uv = 0.5 * (uv + 1.0);
    }

    return uv;
}

vec3 rgbShift(sampler2D tDiffuse, vec2 uv, float angle, float amount) {
    vec2 offset = vec2(cos(angle), sin(angle)) * amount;
    float r = texture2D(tDiffuse, uv + offset).r;
    float g = texture2D(tDiffuse, uv).g;
    float b = texture2D(tDiffuse, uv - offset).b;
    return vec3(r, g, b);
}

void main() {
    vec3 color;
    const float uTimeWithTransition = 1.0;
    const float uTimeStrength = 0.5;
    const float uSize = 1.;
    const float uSize0 = 0.35;
    const float uSize1 = 0.35;
    const float uBlur0 = 0.55;
    const float uBlur1 = 0.55;
    const float uBlur2 = 0.;
    const float uSwing = 0.;
    const float uSwingX = 0.;
    const float uSwingY = 0.;
    const float uSwingXY = 0.;
    const float uSwingBlur = 0.;

    vec2 screenUV = (gl_FragCoord.xy / resolution.xy);
    float ratio = resolution.x / resolution.y;
    vec2 squareUV = vUv / vec2(1., ratio);
    vec2 uv = vUv;
    color = vec3(0.);

    vec2 mousePos = uMousePosition;//mix(uMousePosition, vec2(0.5), smoothstep(0.3, 0.5, abs(length(0.5-uTransition))));
    mousePos = mix(mousePos, vec2(0.5), uFirst);

    // Dot Transition
    float zoom = uZoom;
    float dots = -0.1;
    vec2 dotUV = scaleUV(squareUV, vec2(1.0 + uTransition * 1.0), mousePos);
    vec2 uvMod = mix(applyCRTEffect(squareUV, .1, -.1), dotUV, uTransition) * zoom;
    float dotx = 0.;
    float iTime = mix(sin(time * uTimeStrength), uTransition * uTimeStrength, uTimeWithTransition);
    float size = uSize;
    size = uSize * crange(uTransition, 0., 1., 0., 2.0);
    dotx = circleExp(mousePos, crange(uTransition, 0.,1., 0., 15.));
    float sizeDotX =size * dotx;
    float bb1 = uBlur0 * uBlur;
    float bb2 = uBlur1 * uBlur;
    float bb3 = uBlur2 * uBlur;
    float size1 = uSize0 *sizeDotX;
    float size2 = uSize1 *sizeDotX;
    float size3 = uSize2 *sizeDotX;

    for(float i = 0.0; i < 3.; i++) {
        vec2 PLEASE_TAKE_CARE_OF_REPETITIONS = uvMod + vec2(i, 0.);
        dots += createDot(PLEASE_TAKE_CARE_OF_REPETITIONS, vec2(0., i), size1, bb1);
        dots += createDot(PLEASE_TAKE_CARE_OF_REPETITIONS, vec2(1., i), size2, bb2);
        dots += createDot(PLEASE_TAKE_CARE_OF_REPETITIONS, vec2(2. , i), size3, bb3);
    }

    dots *= smoothstep(1.0, 0.6, uTransition);

    vec2 scaleOrigin = mousePos;
    scaleOrigin = mix(scaleOrigin, vec2(0.5), 0.2);
    scaleOrigin.y += 0.2 - uTransition * 0.5;

    vec2 uvFrom = mix(uv, applyCRTEffect(uv, 0.1, -.1), uTransition);
    uvFrom = scaleUV(uvFrom, vec2(1.0 + uTransition * 1.2), scaleOrigin);
    uvFrom = rotateUV(uvFrom, -uTransition*mousePos.x*0.3);

    vec2 uvTo = mix(applyCRTEffect(uv, -0.1, 0.1), uv, uTransition);
    scaleOrigin.y -= uTransition * 0.5;
    uvTo = scaleUV(uvTo, vec2(0.6 + uTransition * 0.4), scaleOrigin);
    uvTo = rotateUV(uvTo, (1.0-uTransition)*mousePos.x*0.3);

    vec3 rgbFrom = rgbShift(tFrom, uvFrom, radians(90.0), 0.01*uTransition + uVelocity * 0.0001);
    vec3 rgbTo = texture2D(tTo, uvTo).rgb;

    vec3 from = rgbFrom;
    if (from.rgb == vec3(0.0)) from.rgb = vec3(16./300.);
    vec3 to = rgbTo;

    #test !Device.mobile
        vec3 rainbow = vec3(1.0, 0.15, 0.15);
        rainbow = rgb2hsv(rainbow);
        rainbow.x += (0.5 + sin(time*0.2 - length(screenUV-mousePos) * 6.0 + uTransition * 5.0 + dots * 8.0 + dotx * 2.0));
        rainbow = hsv2rgb(rainbow);

        float offsetRainbow = mix(0.15, 0.1, smoothstep(0.2, 1.0, length(screenUV-mousePos)));
        float fadeRainbow = smoothstep(0.52, 0.2, uTransition);

        to = mix(to, rainbow, (1.0-step(0.5+offsetRainbow*fadeRainbow, dots + dotx * 0.5)));
    #endtest
    
    color = mix(from, to, step(0.5, dots + dotx * 0.5));
    
    gl_FragColor = vec4(color, 1.0);
}{@}MotionVectorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tDiffuse;
uniform sampler2D tAlpha;
uniform sampler2D tMotion;
uniform sampler2D tPosition;
uniform sampler2D tData;
uniform sampler2D tDraw;
uniform sampler2D tReel;
uniform sampler2D tGlass;
uniform sampler2D tImage1;
uniform sampler2D tImage2;

uniform float uTransition;
uniform float uColumns;
uniform float uRows;
uniform float uRandom;
uniform float uDisplacementStrength;
uniform vec2 uMouse;
uniform vec3 uTransitionColor;
uniform vec3 uColor;
uniform float uStrengthColor;
uniform float uStrength;
uniform float uStrengthSoftBody;
uniform float uStrengthNoise;
uniform float uStrengthDraw;
uniform sampler2D tNoise;
uniform float uTransitionSmooth;
uniform float uTransitionThreshold;
uniform vec3 uMaps;
uniform vec2 uClickUv;
uniform float uClickTime;
uniform float uInside;
uniform vec3 uPositionScale;
uniform vec3 uPositionOffset;
uniform float uSmall;

uniform float uUseImagesMask;
uniform vec3 uPositionScaleImage;
uniform vec3 uPositionOffsetImage;

uniform float uMouseLight;
uniform vec3 uLightColor;
uniform float uLightColorStr;

uniform float glass_uGridSize;
uniform float glass_uDisplacementStrength;
uniform float glass_uStrength;

uniform float uUseMask;
uniform float uRTMask;
uniform float uVelocity;


#!VARYINGS
varying vec2 vUv;
varying vec4 vPosition;
varying float vNoise;

#!SHADER: Vertex

float getNoise(sampler2D tex, vec2 uv, float time, float noiseFrequency, float noiseAmplitude, float noiseSpeed) {
    vec2 timerScaler = vec2(time * 0.5, 0.) * noiseSpeed;
    return (
        texture2D(tex, (uv - timerScaler ) * noiseFrequency).r + 
        texture2D(tex, (uv + timerScaler) * noiseFrequency).g + 
        texture2D(tex, (uv + timerScaler.yx) * noiseFrequency).b) * 0.33 * noiseAmplitude;
}

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, s, -s, c);
	return m * v;
}


void main() {
    vUv = uv;
    vNoise = getNoise(tNoise, position.xy, 1., 1.4, 1., 0.3);

    vec3 pos = position;

    //scale
    float speed = 0.4;

    float timerScaler = time * speed;

    pos.xy += vec2(-0.5, 0.5);
    pos.xy *= 1. - (1. - uTransition ) * 0.3 + cos(timerScaler + uRandom) * 0.02;
    pos.xy -= vec2(-0.5, 0.5);
    pos.y -= (1. - uTransition ) * 0.4;

    pos.x += sin(timerScaler * 0.6 + uRandom) * 0.015;
    pos.x += sin(timerScaler + uRandom) * 0.01;
    pos.y += sin(timerScaler * 0.85 + cos(time) + uRandom) * 0.01;
    pos.y += sin(timerScaler * 1.05 + uRandom) * 0.01;
    pos.xy = rotate(pos.xy, sin(time * speed * 0.9 + uRandom) * 0.04 + (1. - uTransition ) * 0.1);

    vPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * vPosition;
}

#!SHADER: Fragment
#require(range.glsl)
#require(blendmodes.glsl)
#require(rgb2hsv.fs)
#require(rgbshift.fs)
#require(simplenoise.glsl)
#require(transformUV.glsl)

vec2 getSubUV(vec2 _dimensions, vec2 _uv, float _index) {
    
    float index = _index * (1.0 / _dimensions.x);
    vec2 uv = _uv;
    uv /= _dimensions;
    uv.y += (1.0 / _dimensions.y) * (_dimensions.y - 1.0);
    uv.x += floor(fract(index) * _dimensions.x) / _dimensions.x;
    uv.y -= floor(fract(index / _dimensions.y) * _dimensions.y) / _dimensions.y;

    return uv;
}

vec2 remap(vec2 _displacement, float displacementStrength) {
    vec2 displacement;
    displacement.rg = crange(_displacement.rg, vec2(0.0), vec2(1.0), vec2(-1.0), vec2(1.0));
    return displacement * displacementStrength;
}

vec4 getMap(sampler2D _tMap, float _blend, vec2 _subUv, vec2 _subUvNext, vec2 _displacement, vec2 _displacementNext) {
    vec4 color = texture2D(_tMap, _subUv - _displacement * _blend);
    vec4 colorNext = texture2D(_tMap, _subUvNext + _displacementNext * (1.0 - _blend));
    return mix(color, colorNext, _blend);
}

vec2 getDisplacement(sampler2D _tMotion, vec2 _uv, float _displacement) {
    vec2 displacement = texture2D(_tMotion, _uv).rg;
    return remap(displacement, _displacement);
}

vec2 applyCRTEffect(vec2 uv, float barrelAmount, float pincushionAmount)
{
    uv = 2.0 * uv - 1.0;
    uv *= 1.0 + length(uv) * barrelAmount;
    uv = 0.5 * (uv + 1.0);

    uv = uv * 2.0 - 1.0;
    uv *= 1.0 + uv.x * uv.x * pincushionAmount;
    uv = 0.5 * (uv + 1.0);

    return uv;
}

void main() {
    vec4 color = vec4(0.);

    vec2 dimensions = vec2(uColumns, uRows);
    float MAX_INDEX = uColumns * uRows - 1.0;

    float controller = mix(smoothstep(0.1, 0.4, uTransition), uMouse.x, smoothstep(0.2, 1.0, uTransition));
    float index = crange(controller, 0.0, 1.0, 1.0, MAX_INDEX);
    float blend = fract(index);

    vec2 uv = vUv;
    
    vec2 subUv = getSubUV( dimensions, uv, index);
    vec2 subUvNext = getSubUV( dimensions, uv, index + 1.0);

    float displacementStrength = uDisplacementStrength * 0.01;   

    vec2 displacement = getDisplacement(tMotion, subUv, displacementStrength);
    vec2 displacementNext = getDisplacement(tMotion, subUvNext, displacementStrength);

    if (uRTMask > 0.0) {
        color.rgb = vec3(1.0, 0.0, 0.0);
        color.a = getMap(tAlpha, blend, subUv, subUvNext, displacement,  displacementNext).r;
        gl_FragColor = color;
        return;
    }

    float draw = 0.0;
    vec2 drawer = vec2(0.0);
    vec2 st = (gl_FragCoord.xy / resolution.xy);
    
    #test Tests.useFluids()
        drawer = texture2D(tDraw, st).rg;
        draw = drawer.r + drawer.g;
        draw = smoothstep(0.0, 1.0, draw);
    #endtest
    
    float noise = vNoise;
    vec3 position = getMap(tPosition, blend, subUv, subUvNext, displacement,  displacementNext).rgb;

    float depth = crange(position.z, -0.3, 1., 0., 1.);
    float depthY = 1.;

    float pulse = 0.;
    float tD = (1. -  uTransition);
    float v = 0.;

    //This should go away in mobile
    float driver, t, gradient;
    vec4 clickPos;

    driver = 1.0 - clamp(uClickTime * 0.7, 0.0, 1.0);
    t = -pow(driver, 4.0) * 4.0;
    v = smoothstep(0.0, 1.0, position.y + sin(position.x*4.0+time+tD*6.0) * mix(0.3, 0.1, abs(0.5-position.x)) * 0.5 * smoothstep(0.0, 0.2, tD) + (1.0 - tD * 2.0));



    #test !Device.mobile
        if (uInside > 0.0) {
            vec2 baseClickUv = mix(uClickUv, vec2(0.5), uSmall);

            vec2 clickUv = getSubUV( dimensions, uClickUv, index);
            vec2 clickUvNext = getSubUV( dimensions, uClickUv, index + 1.0);




            // clickPos = texture2D(tPosition, clickUv - displacement * blend);
            // vec4 clickPosNext = texture2D(tPosition, clickUvNext + displacement * (1.0 - blend));
            // clickPos = mix(clickPos, clickPosNext, blend);

            clickPos = getMap(tPosition, blend, clickUv, clickUvNext, displacement,  displacementNext);
            gradient = length(position - clickPos.xyz) * mix(.35, 0.31, uSmall);
            pulse = sin(gradient * 15.0 - t + 3.8) * 0.5 + 0.5;

            float powMulti = mix(10.0, 6.0, uSmall);
            pulse = pow(pulse, powMulti - driver * powMulti);
            pulse += pow(pulse, (powMulti*3.0) - driver * (powMulti*1.5));
            pulse *= driver;
            pulse *= 1.0 - smoothstep(0.9, 1.0, driver);
            pulse *= 1.0 - clamp(length(gradient) * 3.0, 0.0, 1.0);
            pulse *= 12.0;
            pulse *= dot(color.rgb, vec3(1.)) * 0.5 + 0.15;
            pulse += (1. - v);
        }
    #endtest

    pulse *= uInside;
    //pulse *= smoothstep(0.9, 1.0, uTransition);
    
    float pixellation = 400.;
    float maskAlpha = getMap(tAlpha, blend, subUv, subUvNext, displacement,  displacementNext).r;
    float uvMix = pulse * 3. + (1.0-v) * 50.0;
    uvMix = mix(0.0, uvMix, maskAlpha);
    uvMix *= step(0.02, uClickTime);
    uvMix *= 1.1;
    subUv = mix(subUv, floor(subUv * pixellation) / pixellation, uvMix);
    subUvNext = mix(subUvNext, floor(subUvNext * pixellation) / pixellation, uvMix);
    color = getMap(tDiffuse, blend, subUv, subUvNext, displacement,  displacementNext);
   
    vec3 drawColor = ((draw * uStrengthDraw) * uColor * uStrengthColor);// * specular * uStrength * light;
    color.a = color.a * mix(1.0, pow(v, 5.0) + 0.2, step(0.2, 1.0-uTransition)) * maskAlpha;

    if (uMaps.x > 0.5) {
        // glass
        float GLASS_MAX_INDEX = glass_uGridSize * glass_uGridSize - 1.0;
        float glass_index = crange(uMouse.x, 0.0, 1.0, 1.0, GLASS_MAX_INDEX);

        float glass_blend = fract(glass_index);

        vec2 glass_subUv = getSubUV( vec2(glass_uGridSize), uv, glass_index);
        vec2 glass_subUvNext = getSubUV( vec2(glass_uGridSize), uv, glass_index + 1.0);

        // blend from one frame to the next
        vec3 glass_color = texture2D(tGlass, glass_subUv).rgb;
        vec3 glass_colorNext = texture2D(tGlass, glass_subUvNext).rgb;
        vec3 glass = mix(glass_color, glass_colorNext, glass_blend);

        color.rgb = pow(color.rgb, vec3(glass_uStrength));
        glass = pow(glass, vec3(glass_uStrength));
        color.rgb += glass;
        color.rgb = pow(color.rgb, vec3(0.45));
    }
    

        // Add pulse effect, remove on mobile.
    vec3 pulseColor = vec3(0.);
    #test !Device.mobile
        if (uInside > 0.) {
            pulse *= dot(color.rgb, vec3(1.)) * 0.5 + 0.5;
            vec3 pulseColor = rgb2hsv(vec3(1.0, 0.5, 0.0));//rgb2hsv(uLightColor);
            pulseColor.x += (-0.5+smoothstep(0.4, 1.0, pulse)) * 0.1 - 0.08;
            pulseColor = hsv2rgb(pulseColor);
            pulseColor = mix(pulseColor, vec3(1.0), subUvNext.x * subUvNext.y * subUv.x * subUv.y);
            pulseColor = pow(pulse, 3.0) * pulseColor;
            color.rgb = pow(color.rgb, vec3(2.2));
            color.rgb += pulseColor * mix(1.0, 0.15, uSmall);
            color.rgb *= mix(1.0, 2.0, pow(pulse, 4.0));
            color.rgb = pow(color.rgb, vec3(0.45));
        }
    #endtest

    vec3 hueShift = rgb2hsv(color.rgb);//rgb2hsv(uLightColor);
    hueShift.x += color.a * 2.0;
    color.rgb = hsv2rgb(hueShift);


    //Simplify this part with the reel section without RGB shift for mobile
    if (uUseMask > 0.5) {
        float maskValue = getMap(tData, blend, subUv, subUvNext, displacement,  displacementNext).r;
        vec2 maskedUV = st;
        maskedUV = scaleUV(maskedUV, vec2(0.8));

        maskedUV.x += (-0.5 + uMouse.x) * 0.2;
        maskedUV.y -= 0.05;
        maskedUV += draw * 0.3;
        maskedUV.y += mod(maskedUV.y, 0.012) * uVelocity * 0.9;

        uvMix = pulse * 1. + (1.0-v) * 30.0;
        uvMix += draw * 0.4;
        pixellation *= 0.2;
        maskedUV = mix(maskedUV, floor(maskedUV * pixellation) / pixellation, uvMix * 5.0);
        maskedUV *= 1.0 + pulse * 0.5;

        vec3 reel = getRGB(tReel, maskedUV, 0.2, 0.003 + smoothstep(0.5, 0.0, abs(draw-0.5)) * 0.005 + uVelocity * 0.0005 + pulse * 0.02).rgb;
        reel *= mix(0.0, 1.0, smoothstep(0.0, 0.5, abs(0.5-maskValue)));
        reel *= mix(0.5, 1.0, smoothstep(1.5, 0.0, length(position.rg-0.5)));
        reel *= 0.9 + pow(pulse, 4.0) * 0.05 + smoothstep(0.5, 0.0, abs(draw-0.5)) * 0.4;

        reel = rgb2hsv(reel);
        reel.x += smoothstep(0.6, 0.5, draw) * smoothstep(0.0, 0.5, draw) * 2.0;
        reel=  hsv2rgb(reel);

        reel += maskedUV.x*maskedUV.y * 0.1;

        color.rgb = mix(color.rgb, reel, smoothstep(0.0, 0.2, maskValue));
        color.rgb *= 1.0 + reel.r * 0.1;
    }

    if (uUseImagesMask > 0.5) {
        float maskValue = getMap(tData, blend, subUv, subUvNext, displacement,  displacementNext).r;

        vec2 imageUV = scaleUV(vUv, vec2(0.9, 0.4));
        imageUV = scaleUV(imageUV, uPositionScaleImage.xy);
        imageUV += uPositionOffsetImage.xy;

        vec2 image1Uv = imageUV;
        image1Uv.r -= mod(image1Uv.r - image1Uv.g * 0.1, 0.02) * smoothstep(0.0, 1.0, uMouse.x) * 5.0;
        image1Uv.x += (-0.5 + uMouse.x) * 0.3;

        vec3 image1 = getRGB(tImage1, image1Uv, 0.1, -0.05 * smoothstep(0.0, 1.0, uMouse.x)).rgb;

        vec2 image2Uv = imageUV;
        image2Uv.r += mod(image2Uv.r + image2Uv.g * 0.1, 0.02) * smoothstep(1.0, 0.0, uMouse.x + pulse * 0.05) * 5.0;
        image2Uv.x += (-0.5 + uMouse.x) * 0.3;

        vec3 image2 = getRGB(tImage2, image2Uv.rg, 0.1, 0.05 * smoothstep(1.0, 0.0, uMouse.x) + pulse * 0.05).rgb;

        vec3 images = mix(image1, image2, smoothstep(0.3, 0.7, uMouse.x));
        images *= mix(1.0, 1.1, smoothstep(0.15, 0.0, abs(0.5-uMouse.x)));
        images *= 1.0 + pow(pulse, 4.0) * 0.02;

        color.rgb = mix(color.rgb, images, smoothstep(0.0, 0.2, maskValue));
    }

    float lightMove = sin(vUv.x * 2.0 - uMouse.x * 6.0 - time * 0.1 + uRandom) + sin(vUv.y*5.0+time * 0.1 + uRandom)*0.5;
    float lightStrength = 0.5 + smoothstep(1.0, 0.0, (vUv.x-lightMove)) * 0.5;

    //Leep this for the light effect
    color.rgb = blendOverlay(color.rgb, vec3(1.0), pow(lightStrength, 5.0) * 0.5);
    color.rgb *= mix(10.0, 1.0, smoothstep(0.0, 1.0, color.a));
    color.rgb += pulseColor * smoothstep(0.2, 0.5, color.a) * smoothstep(0.8, 0.5, color.a);

    #test !Device.mobile
        vec3 rainbow = vec3(1.0, 0.15, 0.15);
        rainbow = rgb2hsv(rainbow);
        rainbow.x += pulse * 10.0 + v * 10.0 - vUv.x * 1.0 - tD * 10.0 - time;
        rainbow = hsv2rgb(rainbow);
        color.rgb = mix(color.rgb, rainbow, smoothstep(0.5, 0.0, abs(0.5-color.a)) * tD);
    #endtest

    //Keep this for the background blend
    color.rgb = blendSoftLight(color.rgb, uLightColor, min(uLightColorStr, step(0.2, drawer.r + drawer.g)) * 1.0);
    //color.rgb *= mix(1.0, 2.2, smoothstep(0.0, 0.2, uClickTime) * smoothstep(1.0, 0.0, uClickTime) * smoothstep(0.5, 0.2, length(vUv-baseClickUv)));

    color.a *= smoothstep(0.1, 0.3, uTransition);

    gl_FragColor = color;

}{@}SpritesheetShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);

    vUv = uv;
}

#!SHADER: Fragment

#require(uvgrid.glsl)

void main() {
    vec2 uv = vUv;

    float gridWidth = 8.0;
    float gridHeight = 8.0;

    float index =  mod(time * 25., gridWidth * gridHeight);
    index = floor(index);

    float xOffset = mod(index, gridHeight);
    float yOffset = floor(index / gridHeight); 

    yOffset = gridHeight - 1.0 - yOffset;

    uv = getUVForGrid(uv, gridWidth, gridHeight, xOffset, yOffset);

    vec3 color = texture2D(tMap, uv).rgb;

    gl_FragColor = vec4(color, 1.);
}{@}BaseVideoShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uBGColor;
uniform float uAlpha; 
uniform sampler2D tDraw;
uniform float uScroll;
uniform sampler2D tMap;
uniform bool uFixed;
uniform float uVelocity;
uniform vec2 uMouseMove;
uniform float uDiscard;
uniform float uShadowed;
uniform vec2 uResolution;
uniform vec2 uMapResolution;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vUv = uv;
}

#!SHADER: Fragment

#require(range.glsl)
#require(rgbshift.fs)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(transformUV.glsl)

void main() {
    vec2 uv = vUv;
    vec3 drawer;
    float fluid = 0.;

    float velocity = uVelocity;//pow(uVelocity, 3.0);

    #test Tests.useFluids()
        drawer = texture2D(tDraw, gl_FragCoord.xy / resolution.xy).rgb;
        fluid = drawer.g;
        // fluid = drawer.r; // trail pointer
        // fluid = drawer.g; // fluid simulation
        // fluid = drawer.b; // pointer
    #endtest

    uv.y -= uVelocity * smoothstep(0.8, 0.05, length(uMouseMove-uv)) * 0.002 * smoothstep(0.499, 0.3, abs(0.5-uv.y));
    uv.y -= velocity * mod(uv.y, (resolution.y * 0.00001)) * 0.1 * smoothstep(0.48, 0.45, abs(0.5-uv.y));

    //uv = scaleUV(uv, vec2(1.0 + velocity * 0.001));

    vec2 baseUV = uv;
    // vec2 oUV = uv;

    vec2 stR = uResolution.xy / uMapResolution.xy;
    float m = max(stR.x , stR.y);
    uv = baseUV - 0.5;
    uv *= stR;
    uv *= 1.0 / m;
    uv += 0.5;

    vec4 color = vec4(1.0);
    vec2 scaledUV = uv;

    #test !Device.mobile
        if(uShadowed > 0.0) {
            baseUV.x = 1.0-baseUV.x;
        }
    #endtest
    baseUV.y += uVelocity * smoothstep(0.8, 0.05, length(uMouseMove-uv)) * 0.02 * smoothstep(0.499, 0.3, abs(0.5-uv.y));

    baseUV += fluid * 0.05;//smoothstep(1.0, -1.0, length(uv-0.5));
    baseUV.y += fluid * 0.05 - mod(uv.y + sin(uv.x * 5.0 + time * 0.5) * 0.5 + fluid + sin(time * 0.3) * 2.5, (resolution.y * 0.00001)) * fluid;

    vec2 scalar = vec2(1.);
    if(uShadowed > 0.0) {
        scalar = vec2(1.2);
    }
    #test Device.mobile
        scalar = vec2(1.0);
    #endtest
    color = getRGB(tMap, scaleUV(baseUV, scalar), radians(90.0), - velocity * 0.0004 + fluid * 0.003);

    #test Device.mobile
        gl_FragColor = color;
        gl_FragColor.a *= uAlpha;

        return;
    #endtest

    vec3 noiseTex = vec3(getNoise(uv, time));

    vec2 innerUV = scaledUV;
    innerUV.y += uVelocity * 0.005;

    innerUV -= fluid * 0.05;//smoothstep(1.0, -1.0, length(uv-0.5));
    innerUV.y -= fluid * 0.15 - mod(uv.y + sin(uv.x * 5.0 + time * 0.5) * 0.5 + fluid + sin(time * 0.3) * 2.5, (resolution.y * 0.00001)) * fluid;

    innerUV.x += 0.015;

    vec2 scale = vec2(1.0);
    vec4 inner = getRGB(tMap, scaleUV(innerUV, scale), radians(90.0), velocity * 0.0006 + fluid * 0.003);

    if(uShadowed > 0.0) {
        color.rgb *= mix(0.5, 0.0, smoothstep(0.65, 0.2, length(innerUV-0.5)));
        color.rgb = mix(color.rgb, inner.rgb, step(0.12, innerUV.x) * step(0.12, 1.0-innerUV.x) * step(0.12, innerUV.y) * step(0.12, 1.0-innerUV.y));
        color.rgb *= mix(1.0, 0.98, fluid);
        color.rgb = blendOverlay(color.rgb, noiseTex, abs(velocity)*0.02 + step(0.5, fluid) * 4.0);
    }

    gl_FragColor = color;
    gl_FragColor.a *= uAlpha;
}{@}LogoShapeShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha; 
uniform float uScroll; 
uniform vec2 uResolution;
uniform vec3 uColor;
uniform sampler2D tDraw;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex

void main() {
    vec3 pos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment

#require(rgb2hsv.fs)

void main() {
    #test Tests.useFluids()
        vec4 draw = texture2D(tDraw, gl_FragCoord.xy / resolution.xy);
        vec2 scaledUV = vUv + (draw.rr * 0.01);

        // scaledUV.x *= 0.5;
        scaledUV -= 0.5;
        scaledUV.y *= 0.25;
        scaledUV += 0.5;

        vec4 tex = texture2D(tMap, scaledUV + vec2(0.,  -uScroll));


        vec3 rainbow = vec3(1.0, 0.15, 0.15);
        rainbow = rgb2hsv(rainbow);
        rainbow.x += (0.5 + sin(time*10.0 + draw.r * 20.0 + draw.g * 20.0 + gl_FragCoord.x/resolution.x) * 6.0) * 0.08;
        rainbow = hsv2rgb(rainbow);

        tex.rgb = mix(uColor, rainbow, step(0.4, draw.g));
        tex.rgb = mix(tex.rgb, vec3(1.0), step(0.5, draw.g));

        // tex.rg = scaledUV;
        // tex.ba = scaledUV;

        // tex.rgb = mix(tex.rgb, uColor * 0.3, step(0.01, draw.g));
        // tex.rgb = mix(tex.rgb, uColor * 0.4, step(0.03, draw.g));
        // tex.rgb = mix(tex.rgb, uColor * 0.5, step(0.05, draw.g));
        // tex.rgb = mix(tex.rgb, uColor * 0.6, step(0.07, draw.g));
        // tex.rgb = mix(tex.rgb, uColor * 0.7, step(0.1, draw.g));
        // tex.rgb = mix(tex.rgb, uColor , step(0.5, draw.g + draw.r));
    #endtest

    #test !Tests.useFluids()
        vec4 tex = texture(tMap, vUv + vec2(0.0, -uScroll));
    #endtest

    vec4 color = tex;

    gl_FragColor = color;
    gl_FragColor.a *= uAlpha;
}{@}TaglineShapeShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha; 
uniform float uScroll; 
uniform vec2 uResolution;
uniform vec3 uColor;
uniform sampler2D tDraw;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex

void main() {
    vec3 pos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment

#require(rgb2hsv.fs)

void main() {
    #test Tests.useFluids()
        vec4 draw = texture2D(tDraw, gl_FragCoord.xy / resolution.xy);
        vec2 scaledUV = vUv + (draw.rr * 0.01);

        // scaledUV.x *= 0.5;
        // scaledUV -= 0.5;
        // scaledUV.y *= 0.25;
        // scaledUV += 0.5;

        vec4 tex = texture2D(tMap, scaledUV + vec2(0.,  -uScroll));


        vec3 rainbow = vec3(1.0, 0.15, 0.15);
        rainbow = rgb2hsv(rainbow);
        rainbow.x += (0.5 + sin(time*10.0 + draw.r * 20.0 + draw.g * 20.0 + gl_FragCoord.x/resolution.x) * 6.0) * 0.08;
        rainbow = hsv2rgb(rainbow);

        tex.rgb = mix(uColor, rainbow, step(0.4, draw.g));
        tex.rgb = mix(tex.rgb, vec3(1.0), step(0.5, draw.g));

        // tex.rg = scaledUV;
        // tex.ba = scaledUV;

        // tex.rgb = mix(tex.rgb, uColor * 0.3, step(0.01, draw.g));
        // tex.rgb = mix(tex.rgb, uColor * 0.4, step(0.03, draw.g));
        // tex.rgb = mix(tex.rgb, uColor * 0.5, step(0.05, draw.g));
        // tex.rgb = mix(tex.rgb, uColor * 0.6, step(0.07, draw.g));
        // tex.rgb = mix(tex.rgb, uColor * 0.7, step(0.1, draw.g));
        // tex.rgb = mix(tex.rgb, uColor , step(0.5, draw.g + draw.r));
    #endtest

    #test !Tests.useFluids()
        vec4 tex = texture(tMap, vUv + vec2(0.0, -uScroll));
    #endtest

    // tex = texture2D(tMap, vUv);
    vec4 color = tex;


    gl_FragColor = color;
    gl_FragColor.a *= uAlpha;
}{@}VideoShaderScreen.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 pixelCoverage;
uniform float uBrightness;
uniform float uPow;
uniform sampler2D tFluid;
uniform sampler2D tFluidMask;

#!VARYINGS
varying vec2 vUv;
varying vec4 vScreenUV;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vScreenUV = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment.fs

#require(rgbshift.fs)

vec2 getFluidVelocity() {
    vec2 suv = gl_FragCoord.xy / resolution.xy;
    float fluidMask = smoothstep(0.1, 0.7, texture2D(tFluidMask, suv).r);
    return texture2D(tFluid, suv).xy * fluidMask;
}

vec3 getFluidVelocityMask() {
    vec2 suv = gl_FragCoord.xy / resolution.xy;
    float fluidMask = smoothstep(0.1, 0.7, texture2D(tFluidMask, suv).r);
    return vec3(texture2D(tFluid, suv).xy * fluidMask, fluidMask);
}

float sdRoundedBox( in vec2 f, in vec2 b, in vec4 r )
{
    vec2 c= vec2(1.);
    vec2 p = mod(f+0.5*c,c)-0.5*c;

    r.xy = (p.x>0.0)?r.xy : r.zw;
    r.x  = (p.y>0.0)?r.x  : r.y;
    vec2 q = abs(p)-b+r.x;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r.x;
}

void main() {
    vec2 st = pixelCoverage.x * vUv;
    float _x = floor(st.x + 0.5);
    float m = mod(_x, 3.);
    vec3 multiplier = vec3(float(m == 0.), float(m == 1.), float(m == 2.));
    float val = sdRoundedBox(st, pixelCoverage.y * vec2(-0.1, -0.02), vec4(-0.2));

    vec2 screenUV = vScreenUV.xy * 0.15 + 0.5;
    screenUV.y += 0.2;

    vec3 fluidVel = texture2D(tFluid, screenUV).rgb;
    float fluidMask = texture2D(tFluidMask, screenUV).r;
    fluidMask = 1.0 - pow(1.0 - fluidMask, 6.2);

    vec2 videoUV = vUv;
    videoUV += fluidVel.xy * 0.02;

    vec4 tex = getRGB(tMap, videoUV, 0.1, fluidVel.x * 0.002);

    tex.rgb *= step(val, 0.5) * multiplier * uBrightness;
    tex.rgb = pow(tex.rgb, vec3(uPow));

    tex.a *= 0.9;

    //tex.a *= smoothstep(0.0, 0.2, tex.r);

    gl_FragColor = tex;
}{@}advectionManualFilteringShader.fs{@}varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform vec2 dyeTexelSize;
uniform float dt;
uniform float dissipation;
vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
    vec2 st = uv / tsize - 0.5;
    vec2 iuv = floor(st);
    vec2 fuv = fract(st);
    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}
void main () {
    vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
    gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);
    gl_FragColor.a = 1.0;
}{@}advectionShader.fs{@}varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;
void main () {
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    gl_FragColor = dissipation * texture2D(uSource, coord);
    gl_FragColor.a = 1.0;
}{@}backgroundShader.fs{@}varying vec2 vUv;
uniform sampler2D uTexture;
uniform float aspectRatio;
#define SCALE 25.0
void main () {
    vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
    float v = mod(uv.x + uv.y, 2.0);
    v = v * 0.1 + 0.8;
    
    gl_FragColor = vec4(vec3(v), 1.0);
}{@}clearShader.fs{@}varying vec2 vUv;
uniform sampler2D uTexture;
uniform float value;
void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
}{@}colorShader.fs{@}uniform vec4 color;
void main () {
    gl_FragColor = color;
}{@}curlShader.fs{@}varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;
void main () {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    float vorticity = R - L - T + B;
    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
}{@}displayShader.fs{@}varying vec2 vUv;
uniform sampler2D uTexture;
void main () {
    vec3 C = texture2D(uTexture, vUv).rgb;
    float a = max(C.r, max(C.g, C.b));
    gl_FragColor = vec4(C, a);
}{@}divergenceShader.fs{@}varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;
void main () {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    vec2 C = texture2D(uVelocity, vUv).xy;
//    if (vL.x < 0.0) { L = -C.x; }
//    if (vR.x > 1.0) { R = -C.x; }
//    if (vT.y > 1.0) { T = -C.y; }
//    if (vB.y < 0.0) { B = -C.y; }
    float div = 0.5 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}{@}fluidBase.vs{@}varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform vec2 texelSize;

void main () {
    vUv = uv;
    vL = vUv - vec2(texelSize.x, 0.0);
    vR = vUv + vec2(texelSize.x, 0.0);
    vT = vUv + vec2(0.0, texelSize.y);
    vB = vUv - vec2(0.0, texelSize.y);
    gl_Position = vec4(position, 1.0);
}{@}gradientSubtractShader.fs{@}varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
vec2 boundary (vec2 uv) {
    return uv;
    // uv = min(max(uv, 0.0), 1.0);
    // return uv;
}
void main () {
    float L = texture2D(uPressure, boundary(vL)).x;
    float R = texture2D(uPressure, boundary(vR)).x;
    float T = texture2D(uPressure, boundary(vT)).x;
    float B = texture2D(uPressure, boundary(vB)).x;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity.xy -= vec2(R - L, T - B);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
}{@}pressureShader.fs{@}varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
vec2 boundary (vec2 uv) {
    return uv;
    // uncomment if you use wrap or repeat texture mode
    // uv = min(max(uv, 0.0), 1.0);
    // return uv;
}
void main () {
    float L = texture2D(uPressure, boundary(vL)).x;
    float R = texture2D(uPressure, boundary(vR)).x;
    float T = texture2D(uPressure, boundary(vT)).x;
    float B = texture2D(uPressure, boundary(vB)).x;
    float C = texture2D(uPressure, vUv).x;
    float divergence = texture2D(uDivergence, vUv).x;
    float pressure = (L + R + B + T - divergence) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}{@}splatShader.fs{@}varying vec2 vUv;
uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 color;
uniform vec3 bgColor;
uniform vec2 point;
uniform vec2 prevPoint;
uniform float radius;
uniform float canRender;
uniform float uAdd;

float blendScreen(float base, float blend) {
    return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
    return vec3(blendScreen(base.r, blend.r), blendScreen(base.g, blend.g), blendScreen(base.b, blend.b));
}

float l(vec2 uv, vec2 point1, vec2 point2) {
    vec2 pa = uv - point1, ba = point2 - point1;
    pa.x *= aspectRatio;
    ba.x *= aspectRatio;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
}

float cubicOut(float t) {
    float f = t - 1.0;
    return f * f * f + 1.0;
}

void main () {
    vec3 splat = (1.0 - cubicOut(clamp(l(vUv, prevPoint.xy, point.xy) / radius, 0.0, 1.0))) * color;
    vec3 base = texture2D(uTarget, vUv).xyz;
    base *= canRender;

    vec3 outColor = mix(blendScreen(base, splat), base + splat, uAdd);
    gl_FragColor = vec4(outColor, 1.0);
}{@}vorticityShader.fs{@}varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;
void main () {
    float L = texture2D(uCurl, vL).x;
    float R = texture2D(uCurl, vR).x;
    float T = texture2D(uCurl, vT).x;
    float B = texture2D(uCurl, vB).x;
    float C = texture2D(uCurl, vUv).x;
    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
    force /= length(force) + 0.0001;
    force *= curl * C;
    force.y *= -1.0;
//    force.y += 400.3;
    vec2 vel = texture2D(uVelocity, vUv).xy;
    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
}{@}Blit.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
void main() {
    #drawbuffer Color gl_FragColor = texture2D(tMap, vUv);
    #drawbuffer BloomMask gl_FragColor = vec4(1.0);
}
{@}BloomLuminosityPass.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tDiffuse;
uniform vec3 defaultColor;
uniform float defaultOpacity;
uniform float luminosityThreshold;
uniform float smoothWidth;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

    #!SHADER: Fragment.fs

    #require(luma.fs)

void main() {
    vec4 texel = texture2D(tDiffuse, vUv);
    float v = luma(texel.xyz);
    vec4 outputColor = vec4(defaultColor.rgb, defaultOpacity);
    float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
    gl_FragColor = mix(outputColor, texel, alpha);
}
{@}DownSample.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uResolution;
uniform float uRadius;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
void main() {

    vec2 c = vUv;
    vec2 pxSize = 1.0 / uResolution;
    vec2 halfPixel = 0.5 / uResolution;
    vec3 sum = vec3(0.0);

    vec3 weights = vec3(0.03125, 0.0625, 0.125);

    vec2 br = vUv - halfPixel;
    vec2 bl = vUv + vec2(halfPixel.x, -halfPixel.y);
    vec2 tr = vUv + halfPixel;
    vec2 tl = vUv + vec2(-halfPixel.x, halfPixel.y);

    vec3 A = texture2D(tMap, vUv + vec2(-1.0, -1.0) * pxSize).xyz * weights.x;
    vec3 B = texture2D(tMap, vUv + vec2(0.0, -1.0) * pxSize).xyz * weights.y;
    vec3 C = texture2D(tMap, vUv + vec2(1.0, -1.0) * pxSize).xyz * weights.x;

    vec3 D = texture2D(tMap, br).xyz * weights.z;
    vec3 E = texture2D(tMap, bl).xyz * weights.z;
    vec3 F = texture2D(tMap, vUv + vec2(-1.0, 0.0) * pxSize).xyz * weights.y;

    vec3 G = texture2D(tMap, vUv).xyz * weights.z;

    vec3 H = texture2D(tMap, vUv + vec2(1.0, 0.0) * pxSize).xyz * weights.y;
    vec3 I = texture2D(tMap, tl).xyz * weights.z;
    vec3 J = texture2D(tMap, tr).xyz * weights.z;

    vec3 K = texture2D(tMap, vUv + vec2(-1.0, 1.0) * pxSize).xyz * weights.x;
    vec3 L = texture2D(tMap, vUv + vec2(0.0, 1.0) * pxSize).xyz * weights.y;
    vec3 M = texture2D(tMap, vUv + vec2(1.0, 1.0) * pxSize).xyz * weights.x;

    sum = A + B + C + D + E + F + G + H + I + J + K + L + M;

    gl_FragColor = vec4(sum, 1.0);
}
{@}HydraBloom.glsl{@}uniform sampler2D tHydraBloom;

vec3 getHydraBloom(vec2 uv) {
    return texture2D(tHydraBloom, uv).rgb;
}
{@}HydraBloomPass.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tDiffuse;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
    #require(HydraBloom.glsl)
void main() {

    vec3 color = texture2D(tDiffuse, vUv).xyz;
    vec3 bloom = getHydraBloom(vUv);

    gl_FragColor = vec4(color + bloom, 1.0);
}
{@}UpSample.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tNext;
uniform vec2 uResolution;
uniform float uRadius;
uniform float uIntensity;
uniform vec3 uTint;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
void main() {
    vec2 c = vUv;
    vec2 texelSize = (1.0 / uResolution) * uRadius;
    vec3 sum = vec3(0.0);

    sum += texture2D(tMap, vUv - texelSize).xyz * 0.0625;
    sum += texture2D(tMap, vUv + vec2(0.0, -texelSize.y)).xyz * 0.125;
    sum += texture2D(tMap, vUv + vec2(texelSize.x, -texelSize.y)).xyz * 0.0625;

    sum += texture2D(tMap, vUv - vec2(texelSize.x, 0.0)).xyz * 0.125;
    sum += texture2D(tMap, vUv).xyz * 0.25;
    sum += texture2D(tMap, vUv + vec2(texelSize.x, 0.0)).xyz * 0.125;

    sum += texture2D(tMap, vUv + texelSize).xyz * 0.0625;
    sum += texture2D(tMap, vUv + vec2(0.0, texelSize.y)).xyz * 0.125;
    sum += texture2D(tMap, vUv + vec2(-texelSize.x, texelSize.y)).xyz * 0.0625;

    vec3 next = texture2D(tNext, vUv).xyz;
    next += min(vec3(1.0), sum * uIntensity) * uTint;

    gl_FragColor = vec4(next, 1.0);
}
{@}AreaLights.glsl{@}mat3 transposeMat3(  mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/
vec2 LTC_Uv(  vec3 N,  vec3 V,  float roughness ) {
	float LUT_SIZE  = 64.0;
	float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	float LUT_BIAS  = 0.5 / LUT_SIZE;
	float dotNV = clamp( dot( N, V ), 0.0, 1.0 );
	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}

float LTC_ClippedSphereFormFactor(  vec3 f ) {
	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}

vec3 LTC_EdgeVectorFormFactor(  vec3 v1,  vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}

vec3 LTC_Evaluate(  vec3 N,  vec3 V,  vec3 P,  mat3 mInv,  vec3 rectCoords[ 4 ] ) {
	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system
	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

	return vec3( result );
}{@}Lighting.glsl{@}#!ATTRIBUTES

#!UNIFORMS
struct LightConfig {
    vec3 normal;
    bool phong;
    bool areaToPoint;
    float phongAttenuation;
    float phongShininess;
    vec3 phongColor;
    vec3 lightColor;
    bool overrideColor;
};

uniform sampler2D tLTC1;
uniform sampler2D tLTC2;

#!VARYINGS
varying vec3 vPos;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vViewDir;

#!SHADER: lighting.vs

void setupLight(vec3 p0, vec3 p1) { //inlinemain
    vPos = p0;
    vNormal = normalize(normalMatrix * p1);
    vWorldPos = vec3(modelMatrix * vec4(p0, 1.0));
    vViewDir = -vec3(modelViewMatrix * vec4(p0, 1.0));
}

#test !window.Metal
void setupLight(vec3 p0) {
    setupLight(p0, normal);
}
#endtest

#!SHADER: lighting.fs

#require(LightingCommon.glsl)

void setupLight() {

}
vec3 getCombinedColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w < 1.0) continue;

        if (lProps.w < 1.1) {
            color += lightDirectional(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        } else if (lProps.w < 2.1) {
            color += lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        } else if (lProps.w < 3.1) {
            color += lightCone(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        } else if (lProps.w < 4.1) {
            color += lightArea(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
        }
    }

    return lclamp(color);
}

vec3 getCombinedColor(LightConfig config) {
    #test !window.Metal
    return getCombinedColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
    #endtest
    return vec3(0.0);
}

vec3 getCombinedColor() {
    LightConfig config;
    config.normal = vNormal;
    return getCombinedColor(config);
}

vec3 getCombinedColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getCombinedColor(config);
}

vec3 getCombinedColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    LightConfig config;
    config.normal = normal;
    return getCombinedColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
}

vec3 getPointLightColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w > 1.9 && lProps.w < 2.1) {
            color += lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        }
    }

    return lclamp(color);
}

vec3 getPointLightColor(LightConfig config) {
    #test !window.Metal
    return getPointLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
    #endtest
    return vec3(0.0);
}

vec3 getPointLightColor() {
    LightConfig config;
    config.normal = vNormal;
    return getPointLightColor(config);
}

vec3 getPointLightColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getPointLightColor(config);
}

vec3 getPointLightColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    LightConfig config;
    config.normal = normal;
    return getPointLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
}

vec3 getAreaLightColor(float roughness, LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    vec3 color = vec3(0.0);

    #test Lighting.fallbackAreaToPointTest()
    config.areaToPoint = true;
    #endtest

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        lData.w *= roughness;

        if (lProps.w > 3.9 && lProps.w < 4.1) {
            if (config.areaToPoint) {
                color += lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
            } else {
                color += lightArea(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
            }
        }
    }

    return lclamp(color);
}

vec3 getAreaLightColor(float roughness, LightConfig config) {
    #test !window.Metal
    return getAreaLightColor(roughness, config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
    #endtest
    return vec3(0.0);
}


vec3 getAreaLightColor(float roughness) {
    LightConfig config;
    config.normal = vNormal;
    return getAreaLightColor(roughness, config);
}

vec3 getAreaLightColor() {
    LightConfig config;
    config.normal = vNormal;
    return getAreaLightColor(1.0, config);
}

vec3 getAreaLightColor(LightConfig config) {
    return getAreaLightColor(1.0, config);
}

vec3 getAreaLightColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getAreaLightColor(1.0, config);
}

vec3 getAreaLightColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    LightConfig config;
    config.normal = normal;
    return getAreaLightColor(1.0, config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
}


vec3 getSpotLightColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w > 2.9 && lProps.w < 3.1) {
            color += lightCone(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        }
    }

    return lclamp(color);
}

vec3 getSpotLightColor(LightConfig config) {
    #test !window.Metal
    return getSpotLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
    #endtest
    return vec3(0.0);
}

vec3 getSpotLightColor() {
    LightConfig config;
    config.normal = vNormal;
    return getSpotLightColor(config);
}

vec3 getSpotLightColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getSpotLightColor(config);
}

vec3 getSpotLightColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    LightConfig config;
    config.normal = normal;
    return getSpotLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
}


vec3 getDirectionalLightColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w > 0.9 && lProps.w < 1.1) {
            color += lightDirectional(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        }
    }

    return lclamp(color);
}

vec3 getDirectionalLightColor(LightConfig config) {
    #test !window.Metal
    return getDirectionalLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
    #endtest
    return vec3(0.0);
}

vec3 getDirectionalLightColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getDirectionalLightColor(config);
}

vec3 getDirectionalLightColor() {
    LightConfig config;
    config.normal = vNormal;
    return getDirectionalLightColor(config);
}

vec3 getDirectionalLightColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    LightConfig config;
    config.normal = vNormal;
    return getDirectionalLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
}

vec3 getStandardColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w < 1.0) continue;

        if (lProps.w < 1.1) {
            color += lightDirectional(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        } else if (lProps.w < 2.1) {
            color += lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        }
    }

    return lclamp(color);
}

vec3 getStandardColor(LightConfig config) {
    #test !window.Metal
    return getStandardColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
    #endtest
    return vec3(0.0);
}

vec3 getStandardColor() {
    LightConfig config;
    config.normal = vNormal;
    return getStandardColor(config);
}

vec3 getStandardColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getStandardColor(config);
}

vec3 getStandardColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    LightConfig config;
    config.normal = normal;
    return getStandardColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
}{@}LightingCommon.glsl{@}#require(AreaLights.glsl)

vec3 lworldLight(vec3 lightPos, vec3 localPos, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec4 mvPos = modelViewMatrix * vec4(localPos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(lightPos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}

float lrange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    vec3 sub = vec3(oldValue, newMax, oldMax) - vec3(oldMin, newMin, oldMin);
    return sub.x * sub.y / sub.z + newMin;
}

vec3 lclamp(vec3 v) {
    return clamp(v, vec3(0.0), vec3(1.0));
}

float lcrange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(lrange(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));
}

#require(Phong.glsl)

vec3 lightDirectional(LightConfig config, vec3 lColor, vec3 lPos, vec4 lData, vec4 lData2, vec4 lData3, vec4 lProps, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 lDir = lworldLight(lPos, vPos, modelViewMatrix, viewMatrix);
    float volume = dot(normalize(lDir), config.normal);

    return lColor * lcrange(volume, 0.0, 1.0, lProps.z, 1.0);
}

vec3 lightPoint(LightConfig config, vec3 lColor, vec3 lPos, vec4 lData, vec4 lData2, vec4 lData3, vec4 lProps, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    float dist = length(vWorldPos - lPos);
    if (dist > lProps.y) return vec3(0.0);

    vec3 color = vec3(0.0);

    vec3 lDir = lworldLight(lPos, vPos, modelViewMatrix, viewMatrix);
    float falloff = pow(lcrange(dist, 0.0, lProps.y, 1.0, 0.0), 2.0);

    if (config.phong) {
        color += falloff * phong(lProps.x, lColor, config.phongColor, config.phongShininess, config.phongAttenuation, config.normal, normalize(lDir), vViewDir, lProps.z);
    } else {
        float volume = dot(normalize(lDir), config.normal);
        volume = lcrange(volume, 0.0, 1.0, lProps.z, 1.0);
        color += lColor * volume * lProps.x * falloff;
    }

    return color;
}

vec3 lightCone(LightConfig config, vec3 lColor, vec3 lPos, vec4 lData, vec4 lData2, vec4 lData3, vec4 lProps, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    float dist = length(vWorldPos - lPos);
    if (dist > lProps.y) return vec3(0.0);

    vec3 lDir = lworldLight(lPos, vPos, modelViewMatrix, viewMatrix);
    vec3 sDir = degrees(-lData.xyz);
    float radius = lData.w;
    vec3 surfacePos = vWorldPos;
    vec3 surfaceToLight = normalize(lPos - surfacePos);
    float lightToSurfaceAngle = degrees(acos(dot(-surfaceToLight, normalize(sDir))));
    float attenuation = 1.0;

    vec3 nColor = lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);

    float featherMin = 1.0 - lData2.x*0.1;
    float featherMax = 1.0 + lData2.x*0.1;

    attenuation *= smoothstep(lightToSurfaceAngle*featherMin, lightToSurfaceAngle*featherMax, radius);

    nColor *= attenuation;
    return nColor;
}

vec3 lightArea(LightConfig config, vec3 lColor, vec3 lPos, vec4 lData, vec4 lData2, vec4 lData3, vec4 lProps, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    float dist = length(vWorldPos - lPos);
    if (dist > lProps.y) return vec3(0.0);

    vec3 color = vec3(0.0);

    vec3 normal = config.normal;
    vec3 viewDir = normalize(vViewDir);
    vec3 position = -vViewDir;
    float roughness = lData.w;
    vec3 mPos = lData.xyz;
    vec3 halfWidth = lData2.xyz;
    vec3 halfHeight = lData3.xyz;

    float falloff = pow(lcrange(dist, 0.0, lProps.y, 1.0, 0.0), 2.0);

    vec3 rectCoords[ 4 ];
    rectCoords[ 0 ] = mPos + halfWidth - halfHeight;
    rectCoords[ 1 ] = mPos - halfWidth - halfHeight;
    rectCoords[ 2 ] = mPos - halfWidth + halfHeight;
    rectCoords[ 3 ] = mPos + halfWidth + halfHeight;

    vec2 uv = LTC_Uv( normal, viewDir, roughness );

    #test !!window.Metal
    uv.y = 1.0 - uv.y;
    #endtest

    vec4 t1 = texture2D(tLTC1, uv);
    vec4 t2 = texture2D(tLTC2, uv);

    mat3 mInv = mat3(
    vec3( t1.x, 0, t1.y ),
    vec3(    0, 1,    0 ),
    vec3( t1.z, 0, t1.w )
    );

    vec3 fresnel = ( lColor * t2.x + ( vec3( 1.0 ) - lColor ) * t2.y );
    color += lColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords ) * falloff * lProps.x;
    color += lColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords ) * falloff * lProps.x;

    return color;
}{@}LitMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

#require(lighting.vs)

void main() {
    vUv = uv;
    vPos = position;
    setupLight(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(lighting.fs)
#require(shadows.fs)

void main() {
    setupLight();

    vec3 color = texture2D(tMap, vUv).rgb;
    color *= getShadow(vPos);

    color += getCombinedColor();

    gl_FragColor = vec4(color, 1.0);
}{@}Phong.glsl{@}float pclamp(float v) {
    return clamp(v, 0.0, 1.0);
}

float dPhong(float shininess, float dotNH) {
    return (shininess * 0.5 + 1.0) * pow(dotNH, shininess);
}

vec3 schlick(vec3 specularColor, float dotLH) {
    float fresnel = exp2((-5.55437 * dotLH - 6.98316) * dotLH);
    return (1.0 - specularColor) * fresnel + specularColor;
}

vec3 calcBlinnPhong(vec3 specularColor, float shininess, vec3 normal, vec3 lightDir, vec3 viewDir) {
    vec3 halfDir = normalize(lightDir + viewDir);
    
    float dotNH = pclamp(dot(normal, halfDir));
    float dotLH = pclamp(dot(lightDir, halfDir));

    vec3 F = schlick(specularColor, dotLH);
    float G = 0.85;
    float D = dPhong(shininess, dotNH);
    
    return F * G * D;
}

vec3 calcBlinnPhong(vec3 specularColor, float shininess, vec3 normal, vec3 lightDir, vec3 viewDir, float minTreshold) {
    vec3 halfDir = normalize(lightDir + viewDir);

    float dotNH = pclamp(dot(normal, halfDir));
    float dotLH = pclamp(dot(lightDir, halfDir));

    dotNH = lrange(dotNH, 0.0, 1.0, minTreshold, 1.0);
    dotLH = lrange(dotLH, 0.0, 1.0, minTreshold, 1.0);

    vec3 F = schlick(specularColor, dotLH);
    float G = 0.85;
    float D = dPhong(shininess, dotNH);

    return F * G * D;
}

vec3 phong(float amount, vec3 diffuse, vec3 specular, float shininess, float attenuation, vec3 normal, vec3 lightDir, vec3 viewDir, float minThreshold) {
    float cosineTerm = pclamp(lrange(dot(normal, lightDir), 0.0, 1.0, minThreshold, 1.0));
    vec3 brdf = calcBlinnPhong(specular, shininess, normal, lightDir, viewDir, minThreshold);
    return brdf * amount * diffuse * attenuation * cosineTerm;
}{@}LottieShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uSolidColor;
uniform vec3 uSecondColor;
uniform float uSharp;
uniform float uSharpEdge;
uniform float uUseSolidColor;
uniform float uScale;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex

void main() {
  vec3 pos = position * uScale;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vUv = uv;
}

#!SHADER: Fragment
float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

void main() {
  vec4 color = texture2D(tMap, vUv);

  if (uSharp > 0.5) {
    color.a *= aastep(uSharpEdge, color.a);
  }

  if (uUseSolidColor > 0.5) {
    float cut = aastep(0.5, length(color.rgb));
    color.rgb = mix(uSolidColor, uSecondColor, cut);
  }

  color = vec4(1.0);
  gl_FragColor = color;
}{@}LayeredMVShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tMapSpecular;
uniform sampler2D tMotion;
uniform float uProgress;
uniform float uColumns;
uniform float uRows;
uniform float uColumnsSpecular;
uniform float uRowsSpecular;
uniform float uDisplacementStrength;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)

vec2 getSubUV(sampler2D _tMap, vec2 _dimensions, vec2 _uv, float _index) {
    float index = _index * (1.0 / _dimensions.x);
    vec2 uv = _uv;
    uv /= _dimensions;
    uv.y += (1.0 / _dimensions.y) * (_dimensions.y - 1.0);
    uv.x += floor(fract(index) * _dimensions.x) / _dimensions.x;
    uv.y -= floor(fract(index / _dimensions.y) * _dimensions.y) / _dimensions.y;
    return uv;
}

vec2 remap(vec2 _displacement, float displacementStrength) {
    vec2 displacement;
    displacement.r = crange(_displacement.r, 0.0, 1.0, -1.0, 1.0);
    displacement.g = crange(_displacement.g, 0.0, 1.0, -1.0, 1.0);
    return displacement * displacementStrength;
}

void main() {
    float MAX_INDEX = uColumns * uRows - 1.0;
    float index = crange(uProgress, 0.0, 1.0, 1.0, MAX_INDEX);

    float blend = fract(index);
    float displacementStrength = uDisplacementStrength * 0.01;

    vec2 dimensions = vec2(uColumns, uRows);
    vec2 subUv = getSubUV(tMap, dimensions, vUv, index);
    vec2 subUvNext = getSubUV(tMap, dimensions, vUv, index + 1.0);

    vec2 displacement = texture2D(tMotion, subUv).rg;
    displacement = remap(displacement, displacementStrength);

    vec2 displacementNext = texture2D(tMotion, subUvNext).rg;
    displacementNext = remap(displacementNext, displacementStrength);

    vec3 color = texture2D(tMap, subUv - displacement * blend).rgb;
    vec3 colorNext = texture2D(tMap, subUvNext + displacementNext * (1.0 - blend)).rgb;
    color = mix(color, colorNext, blend);

    // specular layer
    float specMaxIndex = uColumnsSpecular * uRowsSpecular - 1.0;
    float specIndex = crange(uProgress, 0.0, 1.0, 1.0, specMaxIndex);

    float specBlend = fract(specIndex);

    vec2 dimensionsSpecular = vec2(uColumnsSpecular, uRowsSpecular);
    vec2 specSubUV = getSubUV(tMap, dimensionsSpecular, vUv, specIndex);
    vec2 specSubUVNext = getSubUV(tMap, dimensionsSpecular, vUv, specIndex + 1.0);

    // blend from one frame to the next
    vec3 specColor = texture2D(tMapSpecular, specSubUV).rgb;
    vec3 specColorNext = texture2D(tMapSpecular, specSubUVNext).rgb;
    specColor = mix(specColor, specColorNext, specBlend);

    color = pow(color, vec3(2.2));
    specColor = pow(specColor, vec3(2.2));
    color += specColor;
    color = pow(color, vec3(0.45));

    gl_FragColor = vec4(color, 1.0);
}{@}MVShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tMotion;
uniform float uProgress;
uniform float uColumns;
uniform float uRows;
uniform float uDisplacementStrength;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)

vec2 getSubUV(sampler2D _tMap, vec2 _dimensions, vec2 _uv, float _index) {
    float index = _index * (1.0 / _dimensions.x);
    vec2 uv = _uv;
    uv /= _dimensions;
    uv.y += (1.0 / _dimensions.y) * (_dimensions.y - 1.0);
    uv.x += floor(fract(index) * _dimensions.x) / _dimensions.x;
    uv.y -= floor(fract(index / _dimensions.y) * _dimensions.y) / _dimensions.y;
    return uv;
}

vec2 remap(vec2 _displacement, float displacementStrength) {
    vec2 displacement;
    displacement.r = crange(_displacement.r, 0.0, 1.0, -1.0, 1.0);
    displacement.g = crange(_displacement.g, 0.0, 1.0, -1.0, 1.0);
    return displacement * displacementStrength;
}

void main() {
    float MAX_INDEX = uColumns * uRows - 1.0;
    float index = crange(uProgress, 0.0, 1.0, 1.0, MAX_INDEX);

    float blend = fract(index);
    float displacementStrength = uDisplacementStrength * 0.01;

    vec2 dimensions = vec2(uColumns, uRows);
    vec2 subUv = getSubUV(tMap, dimensions, vUv, index);
    vec2 subUvNext = getSubUV(tMap, dimensions, vUv, index + 1.0);

    vec2 displacement = texture2D(tMotion, subUv).rg;
    displacement = remap(displacement, displacementStrength);

    vec2 displacementNext = texture2D(tMotion, subUvNext).rg;
    displacementNext = remap(displacementNext, displacementStrength);

    vec4 color = texture2D(tMap, subUv - displacement * blend);
    vec4 colorNext = texture2D(tMap, subUvNext + displacementNext * (1.0 - blend));
    color = mix(color, colorNext, blend);

    #ifdef LOOP
        index = crange(fract(time * 0.25), 0.0, 1.0, 1.0, MAX_INDEX);

        blend = fract(index);

        subUv = getSubUV(tMap, dimensions, vUv, index);
        subUvNext = getSubUV(tMap, dimensions, vUv, index + 1.0);

        displacement = texture2D(tMotion, subUv).rg;
        displacement = remap(displacement, displacementStrength);

        displacementNext = texture2D(tMotion, subUvNext).rg;
        displacementNext = remap(displacementNext, displacementStrength);

        color = texture2D(tMap, subUv - displacement * blend);
        colorNext = texture2D(tMap, subUvNext + displacementNext * (1.0 - blend));
        color = mix(color, colorNext, blend);
    #endif

    #ifdef LOOPFRAMES
        index = crange(fract(time * 0.25), 0.0, 1.0, 1.0, MAX_INDEX);

        subUv = getSubUV(tMap, dimensions, vUv, index);
        color = texture2D(tMap, subUv);
    #endif

    #ifdef LOOPCROSSFADE
        index = crange(fract(time * 0.25), 0.0, 1.0, 1.0, MAX_INDEX);

        blend = fract(index);

        subUv = getSubUV(tMap, dimensions, vUv, index);
        subUvNext = getSubUV(tMap, dimensions, vUv, index + 1.0);

        color = texture2D(tMap, subUv);
        colorNext = texture2D(tMap, subUvNext);
        color = color * (1.0 - blend) + colorNext * (blend);
    #endif

    #ifdef LOOPMOTIONVECTORS
        index = crange(fract(time * 0.25), 0.0, 1.0, 1.0, MAX_INDEX);

        subUv = getSubUV(tMotion, dimensions, vUv, index);
        color = texture2D(tMotion, subUv);
    #endif


    gl_FragColor = color;
}{@}mousefluid.fs{@}uniform sampler2D tFluid;
uniform sampler2D tFluidMask;

vec2 getFluidVelocity() {
    float fluidMask = smoothstep(0.1, 0.7, texture2D(tFluidMask, vUv).r);
    return texture2D(tFluid, vUv).xy * fluidMask;
}

vec3 getFluidVelocityMask() {
    float fluidMask = smoothstep(0.1, 0.7, texture2D(tFluidMask, vUv).r);
    return vec3(texture2D(tFluid, vUv).xy * fluidMask, fluidMask);
}{@}SceneLayout.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a *= uAlpha;
    gl_FragColor.rgb /= gl_FragColor.a;
}{@}TweenUILPathFallbackShader.glsl{@}#!ATTRIBUTES
attribute float speed;

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uOpacity;

#!VARYINGS
varying vec3 vColor;

#!SHADER: Vertex

void main() {
    vColor = mix(uColor, uColor2, speed);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(vColor, uOpacity);
}
{@}TweenUILPathShader.glsl{@}#!ATTRIBUTES
attribute float speed;

#!UNIFORMS
uniform vec3 uColor2;

#!VARYINGS

#!SHADER: Vertex

void main() {
    vColor = mix(uColor, uColor2, speed);
}

void customDirection() {
    // Use screen space coordinates for final position, so line thickness is
    // independent of camera.
    finalPosition = vec4(currentP.x / aspect, currentP.y, min(0.0, finalPosition.z), 1.0);
}

#!SHADER: Fragment
float tri(float v) {
    return mix(v, 1.0 - v, step(0.5, v)) * 2.0;
}

void main() {
    float signedDist = tri(vUv.y) - 0.5;
    gl_FragColor.a *= clamp(signedDist/fwidth(signedDist) + 0.5, 0.0, 1.0);
}
{@}UnrealBloom.fs{@}uniform sampler2D tUnrealBloom;

vec3 getUnrealBloom(vec2 uv) {
    return texture2D(tUnrealBloom, uv).rgb;
}{@}UnrealBloomComposite.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D blurTexture1;
uniform float bloomStrength;
uniform float bloomRadius;
uniform vec3 bloomTintColor;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

float lerpBloomFactor(const in float factor) {
    float mirrorFactor = 1.2 - factor;
    return mix(factor, mirrorFactor, bloomRadius);
}

void main() {
    gl_FragColor = bloomStrength * (lerpBloomFactor(1.0) * vec4(bloomTintColor, 1.0) * texture2D(blurTexture1, vUv));
}{@}UnrealBloomGaussian.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D colorTexture;
uniform vec2 texSize;
uniform vec2 direction;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

float gaussianPdf(in float x, in float sigma) {
    return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;
}

void main() {
    vec2 invSize = 1.0 / texSize;
    float fSigma = float(SIGMA);
    float weightSum = gaussianPdf(0.0, fSigma);
    vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
    for(int i = 1; i < KERNEL_RADIUS; i ++) {
        float x = float(i);
        float w = gaussianPdf(x, fSigma);
        vec2 uvOffset = direction * invSize * x;
        vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
        vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
        diffuseSum += (sample1 + sample2) * w;
        weightSum += 2.0 * w;
    }
    gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
}{@}UnrealBloomLuminosity.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tDiffuse;
uniform vec3 defaultColor;
uniform float defaultOpacity;
uniform float luminosityThreshold;
uniform float smoothWidth;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

#require(luma.fs)

void main() {
    vec4 texel = texture2D(tDiffuse, vUv);
    float v = luma(texel.xyz);
    vec4 outputColor = vec4(defaultColor.rgb, defaultOpacity);
    float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
    gl_FragColor = mix(outputColor, texel, alpha);
}{@}UnrealBloomPass.fs{@}#require(UnrealBloom.fs)

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    color.rgb += getUnrealBloom(vUv);
    gl_FragColor = color;
}{@}luma.fs{@}float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}{@}DrawShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tSource;
uniform vec2 uPosition;
uniform vec2 uResolution;
uniform float uSharp;
uniform float uSize;
uniform float uTrail;
uniform float uVelocity;
uniform vec2 uMouseMove;

uniform sampler2D tFluidMask;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xx;

    vec2 uv2 = vUv;
    uv2.y += uVelocity * smoothstep(0.8, 0.05, length(uMouseMove-uv)) * 0.004;

    float fluidMask = 0.;

    #test Tests.useFluids()
        fluidMask = texture2D(tFluidMask, uv2).r;
    #endtest

    float trail = texture2D(tSource, uv2).r * uTrail;

    vec2 mousePos = vec2(uPosition.x, uResolution.y - uPosition.y) / uResolution.xx;

    float sharp = uSharp * 0.5;
    float circleDist = smoothstep(0. + sharp, 1. - sharp, min(distance(mousePos, uv ) / uSize * 20., 1.));

    gl_FragColor = vec4(vec3(1. - circleDist), 1.);

    gl_FragColor.r += trail;
    gl_FragColor.g = fluidMask;
}{@}GLUIDetailMediaShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tDraw;
uniform float uParallax;
uniform float uScale;
uniform float uMouseMove;
uniform float uVelocity;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    pos.y -= uVelocity * 0.005;


    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment

#require(rgbshift.fs)
#require(range.glsl)

void main() {
    vec2 uv = vUv;

    vec3 drawer;
    float fluid;
    #test Tests.useFluids()
        drawer = texture2D(tDraw, gl_FragCoord.xy / resolution.xy).rgb;
        fluid = drawer.r + drawer.g;
        // fluid = drawer.r; // trail pointer
        // fluid = drawer.g; // fluid simulation
        // fluid = drawer.b; // pointer
    #endtest

    fluid = smoothstep(0.3, 0.5, fluid);

    if (uScale > 0.5) {
        uv += smoothstep(0.5, 0.4, abs(0.5-fluid)) * 0.1;
        uv.y += uVelocity * smoothstep(0.8, 0.05, length(uMouseMove-uv)) * 0.002 * smoothstep(0.499, 0.3, abs(0.5-uv.y));
        uv.y -= uVelocity * mod(uv.x, 0.01) * 0.2;

        uv += fluid * 0.02;//smoothstep(1.0, -1.0, length(uv-0.5));
        uv.y += fluid * 0.05 - mod(uv.y + sin(uv.x * 5.0 + time * 0.2) * 0.5 + fluid + sin(time * 0.15) * 2.5, 0.01 + fluid * 0.03) * fluid;
    }

    vec4 color = getRGB(tMap, uv, radians(90.0), uVelocity * 0.001 + fluid * 0.015);
    color *= 1.0 + fluid * 0.1;
    
    gl_FragColor = vec4(color.rgb, 1.0);
}{@}GLUIMarqueeMSDF.glsl{@}precision highp float;
#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMSDF;
uniform vec2 uResolution;
uniform vec2 uMapResolution;
uniform sampler2D tDraw;
uniform float uRotation;
uniform float uHorizontal;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vUv = uv;
  vPos = pos;
}

#!SHADER: Fragment
#require(transformUV.glsl)
#require(roundedBorder.glsl)
#require(rgb2hsv.fs)
#require(msdf.glsl)

void main() {
    float fluid = 0.;
    #test Tests.useFluids()
        vec3 drawer = texture2D(tDraw, gl_FragCoord.xy / resolution.xy).rgb;
        fluid = drawer.r + drawer.g;
        // fluid = drawer.r; // trail pointer
        // fluid = drawer.g; // fluid simulation
        // fluid = drawer.b; // pointer
    #endtest


    vec2 stR = uResolution.xy / uMapResolution;
    float m = max(stR.x, stR.y);
    vec2 uv = vUv - 0.5;
    uv *= stR;
    uv *= 1.0 / m;
    uv += 0.5;

    // uv = mod(uv, 0.33333);
    if (uHorizontal > 0.) {
      uv.x += time * 0.2;
    } else {
      uv.y += -time * 0.2;
    }

    uv = scaleUV(uv, vec2(1.5));
    uv = rotateUV(uv, uRotation);

    vec3 color = vec3(16.0 / 255.0);

    #test Tests.useFluids()
      color = mix(color, vec3(1.0, 214.0 / 255.0, 0.0), step(0.5, fluid * 2.));
        // alpha = step(0.5, fluid * 2. * inside);
    #endtest


    float alpha = msdf(tMSDF, uv);

    gl_FragColor = vec4(color, alpha);
}{@}GLUIMaskShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec4 uMaskValues;

#!VARYINGS

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)

vec2 getMaskUV() {
    vec2 ores = gl_FragCoord.xy / resolution;
    vec2 uv;
    uv.x = range(ores.x, uMaskValues.x, uMaskValues.z, 0.0, 1.0);
    uv.y = 1.0 - range(1.0 - ores.y, uMaskValues.y, uMaskValues.w, 0.0, 1.0);
    return uv;
}

void main() {
    vec2 uv = getMaskUV();
    if(uv.x > 1.0) discard;
    gl_FragColor = vec4(uv, 1.0, 1.0);
}{@}GLUIMobileBG.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

uniform vec2 uMousePosition;
uniform float uTransition;

uniform float uBlur;
uniform float uSize2;

varying vec2 vUv;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    
    vUv = uv;
}

#!SHADER: Fragment

#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)

float createDot(vec2 uv, vec2 transition, float size, float blur) {
    vec2 repeat = vec2(3., 3.);
    vec2 uvMod = mod(uv + transition, repeat) - repeat*0.5;
    return 1. - smoothstep(size - blur - 0.02, size + blur + 0.02, length(uvMod));
}

float circleExp(vec2 position, float scale) {
    vec2 normalizedScreen = vec2(resolution.x/resolution.y, 1.0);
    vec2 uv = gl_FragCoord.xy/resolution.y;
    vec2 offset = vec2(position.x, 1. - position.y) * normalizedScreen;
    vec2 circleCenter = offset;
    float circleRadius = 0.2 * scale;
    float distanceToCenter = length(uv - circleCenter);
    float edgeSmoothness = 0.8;
    float circle = 1.0 - smoothstep(circleRadius - edgeSmoothness, circleRadius, distanceToCenter);
    return circle;
}


vec2 applyCRTEffect(vec2 uv, float barrelAmount, float pincushionAmount)
{
    if (barrelAmount > 0. || pincushionAmount > 0.) { 
        uv = 2.0 * uv - 1.0;
        uv *= 1.0 + length(uv) * barrelAmount;
        uv = 0.5 * (uv + 1.0);

        uv = uv * 2.0 - 1.0;
        uv *= 1.0 + uv.x * uv.x * pincushionAmount;
        uv = 0.5 * (uv + 1.0);
    }

    return uv;
}

void main() {
    vec3 color;
    const vec2 uMousePosition = vec2(0.5);
    const float uTimeWithTransition = 1.0;
    const float uTimeStrength = 0.5;
    const float uSize = 1.;
    const float uSize0 = 0.35;
    const float uSize1 = 0.35;
    const float uBlur0 = 0.55;
    const float uBlur1 = 0.55;
    const float uBlur2 = 0.;
    const float uSwing = 0.;
    const float uSwingX = 0.;
    const float uSwingY = 0.;
    const float uSwingXY = 0.;
    const float uSwingBlur = 0.;
    const float zoom = 8.;

    vec2 screenUV = (gl_FragCoord.xy / resolution.xy);
    float ratio = resolution.x / resolution.y;
    vec2 squareUV = vUv / vec2(1., ratio);
    vec2 uv = vUv;
    color = vec3(0.);

    vec2 mousePos = uMousePosition;//mix(uMousePosition, vec2(0.5), smoothstep(0.3, 0.5, abs(length(0.5-uTransition))));
    
    // Dot Transition
    float dots = -0.1;
    vec2 dotUV = scaleUV(squareUV, vec2(1.0 + uTransition * 1.0), mousePos);
    vec2 uvMod = mix(applyCRTEffect(squareUV, .1, -.1), dotUV, uTransition) * zoom;
    float dotx = 0.;
    float iTime = mix(sin(time * uTimeStrength), uTransition * uTimeStrength, uTimeWithTransition);
    float size = uSize;
    size = uSize * crange(uTransition, 0., 1., 0., 2.0);
    dotx = circleExp(mousePos, crange(uTransition, 0.,1., 0., 15.));
    float sizeDotX =size * dotx;
    float bb1 = uBlur0 * uBlur;
    float bb2 = uBlur1 * uBlur;
    float bb3 = uBlur2 * uBlur;
    float size1 = uSize0 *sizeDotX;
    float size2 = uSize1 *sizeDotX;
    float size3 = uSize2 *sizeDotX;

    for(float i = 0.0; i < 3.; i++) {
        vec2 PLEASE_TAKE_CARE_OF_REPETITIONS = uvMod + vec2(i, 0.);
        dots += createDot(PLEASE_TAKE_CARE_OF_REPETITIONS, vec2(0., i), size1, bb1);
        dots += createDot(PLEASE_TAKE_CARE_OF_REPETITIONS, vec2(1., i), size2, bb2);
        dots += createDot(PLEASE_TAKE_CARE_OF_REPETITIONS, vec2(2. , i), size3, bb3);
    }
    
    // gl_FragColor = vec4(uColor, 1.0);
    gl_FragColor = vec4(uColor, mix(0.0, 1.0, 1.0- step(0.5, dots + dotx * 0.5)));
}{@}GLUIProfileIllustration.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tDraw;
uniform float uParallax;
uniform vec2 uResolution;
uniform float uScale;
uniform float uMouseMove;
uniform float uVelocity;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    pos.y -= uVelocity * 0.005;


    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment

#require(rgbshift.fs)
#require(transformUV.glsl)
#require(range.glsl)

void main() {
    vec2 uv = vUv;

    uv -= 0.5;
    uv *= uResolution.xy / uResolution.y;
    uv += 0.5;

    vec3 drawer;
    float fluid;
    #test Tests.useFluids()
        drawer = texture2D(tDraw, gl_FragCoord.xy / resolution.xy).rgb;
        fluid = drawer.r + drawer.g;
        // fluid = drawer.r; // trail pointer
        // fluid = drawer.g; // fluid simulation
        // fluid = drawer.b; // pointer
    #endtest

    fluid = smoothstep(0.3, 0.5, fluid);

    vec4 color = getRGB(tMap, uv, radians(90.0), fluid * 0.015);
    color *= 1.0 + fluid * 0.1;

    gl_FragColor = vec4(vec3(1.0 - fluid), color.a);
}{@}GLUIShapeBridgeShader.glsl{@}precision highp float;
#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uResolution;
uniform vec2 uMapResolution;
uniform vec2 uBorder; // r: thickness g: radius
uniform vec3 uColor;
uniform vec3 uColor2;
uniform vec3 uBorderColor;
uniform float uAlpha; 
uniform float uBorderAlpha; 
uniform vec3 uAlphaValues; // r: AlphaBg g:ImageAlpha 
uniform sampler2D tDraw;
uniform float uType;
uniform float uTransition;
uniform float uActive;
uniform float uVelocity;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vUv = uv;
  vPos = pos;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(rgb2hsv.fs)

void main() {
    float fluid = 0.;
    #test Tests.useFluids()
        vec3 drawer = texture2D(tDraw, gl_FragCoord.xy / resolution.xy).rgb;
        fluid = drawer.r + drawer.g;
        // fluid = drawer.r; // trail pointer
        // fluid = drawer.g; // fluid simulation
        // fluid = drawer.b; // pointer
    #endtest

    vec2 stR = uResolution.xy / uMapResolution;
    float m = max(stR.x, stR.y);
    vec2 uv = vUv - 0.5;
    uv *= stR;
    uv *= 1.0 / m;
    uv += 0.5;


    if(uType == 3.0) {
        
    }

    vec4 tex = texture2D(tMap, uv);
    vec3 color = vec3(uColor);

    #test Tests.useFluids()
        color = mix(uColor, uColor2, step(0.5, fluid * 2.0) );
    #endtest

    float inside = 1.0;
    float alpha = 1.0;
    if (uAlphaValues.g > 0.) {
            alpha = tex.a;
        }

    if (uBorder.x > 0.0 || uBorder.y > 0.0) {
        float border = roundedBorder(uBorder.x, uBorder.y, vUv, uResolution, inside);
        if(uType == 4.0) {
            vec2 innerUv = vUv;
            innerUv.y = innerUv.y;
            float tempBorder = border;
            border += max(step(innerUv.y, uTransition), border);
            border -= tempBorder;
        }

        vec3 borderColor = mix(uBorderColor, uColor, step(0.5, fluid * 2.));
        color = mix(color, borderColor, border * uBorderAlpha);

        if (uBorderAlpha < 1. && border == 1.0) {
            alpha = uBorderAlpha;
        } else {
            alpha = mix(border, inside, uAlphaValues.r);
            alpha = mix(alpha * uAlpha, tex.a * uAlpha, uAlphaValues.g);
        }

        #test Tests.useFluids()
            alpha += step(0.5, fluid * 2. * inside);
        #endtest
    } else {
        alpha = mix(uAlphaValues.r * uAlpha, tex.a * uAlpha, uAlphaValues.g);

        #test Tests.useFluids()
            alpha += step(0.5, fluid * 2.);
        #endtest
    }

    color = mix(color, tex.rgb, uAlphaValues.b);
    if (uType == 1.) {
        #test Tests.useFluids()
            color = mix(color, uBorderColor, step(0.5, fluid * 2.));

            // alpha = step(0.5, fluid * 2. * inside);
        #endtest
    }

    if(uType == 2.0 || uType == 3.0) {
        color = mix(uColor, uColor2, uActive);
        #test Tests.useFluids()
            color = mix(uColor, uColor2, step(0.5, fluid * 2.0) * tex.a);
        #endtest
        alpha = tex.a;
    }

    if (uTransition < .99) {
        // alpha *= uTransition;
    }

    if (uActive > 0.5) {
        color = uColor2;
        alpha = inside;
    }

    // vec2 peakUV = vUv;
    // vec3 rainbow = vec3(1.0, 0.15, 0.15);
    // rainbow = rgb2hsv(rainbow);
    // rainbow.x += sin(uVelocity * 0.02 + peakUV.y * 20.0);
    // rainbow = hsv2rgb(rainbow);
    // float peak = step(1.0-abs(uVelocity)*0.001, peakUV.y) + step(1.0-abs(uVelocity)*0.001, 1.0-peakUV.y);
    // color = mix(color, rainbow, peak);

    gl_FragColor = vec4(color, alpha);
}{@}GLUITextBridgeShader.glsl{@}#!ATTRIBUTES
attribute vec2 local;

#!UNIFORMS

uniform sampler2D tMap;
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uAlpha;
uniform sampler2D tDraw;
uniform vec2 uBounds;
uniform float uOverflow;
uniform float uDPR;
uniform float uTranslate;
uniform float uTransition;
uniform float uType;
uniform float uActive;

#!VARYINGS
varying vec2 vUv;
varying vec2 vLocal;

#!SHADER: Vertex

void main() {
    vec3 pos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vLocal = local;
}

#!SHADER: Fragment

#require(msdf.glsl)
#require(rgb2hsv.fs)

void main() {
   vec2 st = gl_FragCoord.xy * (1.0 / uDPR);

    if (uOverflow > 0.0) {
         if (st.x < uBounds.x || st.x > uBounds.y) discard;
    }
    
    gl_FragColor.rgb = uColor;

    bool showRainbow = true;
    
    #test Device.mobile
        showRainbow = false;
    #endtest
    
    #test Tests.useFluids()
        vec3 color = uColor;
        vec2 drawer = texture2D(tDraw, gl_FragCoord.xy / resolution.xy).rg;

        float fluid = drawer.r + drawer.g;
        float stepFluid = smoothstep(0.8, 1.0, fluid * 2.);
        float stepFluid2 = step(0.5, fluid * 2.);
        float stepFluid3 = step(0.8, fluid * 2.);

        if (showRainbow) {
            vec3 rainbow = rgb2hsv(vec3(1.0, 0.2, 0.2));
            rainbow.x -= time * 2.0 + fluid * 2.0 + st.x * 4.0;
            rainbow = hsv2rgb(rainbow);
            rainbow = mix(rainbow, vec3(1.0), stepFluid3);
            color = mix(uColor, rainbow, stepFluid2);
        }
    
        gl_FragColor.rgb = mix(color, uColor2, stepFluid);
    #endtest
    
    float alpha = msdf(tMap, vUv);
    if(uTransition < .99) { alpha *= uTransition; }

    // gl_FragColor.rgb = mix(uColor, uColor2, stepFluid);
    gl_FragColor.a = alpha * uAlpha;
}
{@}GLUITrailMediaShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D tMap;
uniform sampler2D tDraw;
uniform vec2 uMouseMove;
uniform vec2 uResolution;
uniform vec2 uMapResolution;

uniform float uTrail;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    vec3 pos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vPos = pos;
}

#!SHADER: Fragment

#require(range.glsl)
#require(rgbshift.fs)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(transformUV.glsl)

void main() {
    vec3 drawer;
    float fluid = 0.;
    
    #test Tests.useFluids()
        drawer = texture2D(tDraw, gl_FragCoord.xy / resolution.xy).rgb;
        fluid = drawer.g;
    #endtest

    vec2 stR = uResolution.xy / uMapResolution;
    float m = max(stR.x, stR.y);
    vec2 uv = vUv - 0.5;
    uv *= stR;
    uv *= 1.0 / m;
    uv += 0.5;
    vec4 tex = texture2D(tMap, uv);
    
    vec2 baseUV = uv;
    vec4 color = vec4(1.0);
    baseUV.x = 1.0-baseUV.x;
    
    baseUV += fluid * 0.05;//smoothstep(1.0, -1.0, length(uv-0.5));
    baseUV.y += fluid * 0.05 - mod(uv.y + sin(uv.x * 5.0 + time * 0.5) * 0.5 + fluid + sin(time * 0.3) * 2.5, (resolution.y * 0.00001)) * fluid;

    color = getRGB(tMap, scaleUV(baseUV, vec2(1.0 + 0.2 * uAlpha)), 0.0, fluid * 0.015);
    
    vec3 noiseTex = vec3(getNoise(uv, time));
    
    // vec2 innerUV = uv;
    // innerUV += uMouseMove;

    // innerUV -= fluid * 0.15;//smoothstep(1.0, -1.0, length(uv-0.5));
    // innerUV.y -= fluid * 0.15 - mod(uv.y + sin(uv.x * 5.0 + time * 0.5) * 0.5 + fluid + sin(time * 0.3) * 2.5, (resolution.y * 0.00001)) * fluid;

    // vec4 inner = getRGB(tMap, scaleUV(innerUV, vec2(0.8)), radians(90.0), fluid * 0.003);

    // color.rgb *= mix(0.5, 0.0, smoothstep(0.65, 0.2, length(innerUV-0.5)));
    // color.rgb = mix(color.rgb, inner.rgb, step(0.1, innerUV.x) * step(0.1, 1.0-innerUV.x) * step(0.1, innerUV.y) * step(0.1, 1.0-innerUV.y));
    color.rgb *= mix(1.0, 0.98, fluid);
    //color.rgb = blendOverlay(color.rgb, noiseTex, fluid * 1.0);

    if (uTrail >= 0.0 && uTrail < 1.0) {
        vec2 position = vUv - vec2(0.5);           
        float dist =  length(position * vec2(resolution.x/resolution.y, 1.0));

        float radius = uTrail;
        float mask = step(radius, dist);

        if (mask > 0.0) discard;
    }

    gl_FragColor.rgb = color.rgb;
    gl_FragColor.a = uAlpha;
}{@}BackgroundShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uVelocity;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

void main() {
    // vec2 st = vUv;

    vec3 color = uColor;


    color += uVelocity * 0.1;

    gl_FragColor = vec4(uColor, 1.0);
}{@}MSDFTextureShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(msdf.glsl)

void main() {
    vec2 st = vUv;

    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = 1.0 * uAlpha;
}{@}MaskedText.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec4 uBounds;
uniform vec3 uColor;
uniform float uAlpha;
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(msdf.glsl)

void main() {
    if (gl_FragCoord.x < uBounds.x || gl_FragCoord.x > uBounds.z) {
        discard;
        return;
    }
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = 1.0 * uAlpha;
}{@}TestShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS
varying vec3 vPos;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vPos = position;
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4( vPos * 0.5 + 0.5, 1.0);
}