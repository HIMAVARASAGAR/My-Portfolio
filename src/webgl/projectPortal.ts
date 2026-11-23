import * as THREE from 'three';
import gsap from 'gsap';
type Rect = { left: number; top: number; width: number; height: number };
export function createProjectPortal(canvas: HTMLCanvasElement, source: Rect, target: Rect, image: HTMLImageElement, color: string, complete: () => void, cover: () => void) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const width = innerWidth, height = innerHeight;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.setSize(width, height);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(2 * Math.atan(height / 1200) * 180 / Math.PI, width / height, 1, 2000);
  camera.position.z = 600;
  const texture = new THREE.Texture(image); texture.needsUpdate = true;
  const uniforms = {
    uMap: { value: texture }, uColor: { value: new THREE.Color(color).convertLinearToSRGB() },
    uSize: { value: new THREE.Vector2(source.width, source.height) },
    uImage: { value: new THREE.Vector2(image.naturalWidth, image.naturalHeight) },
    uReveal: { value: 0 }, uBend: { value: 0 }, uRadius: { value: 22 },
  };
  const material = new THREE.ShaderMaterial({ transparent: true, uniforms,
    vertexShader: `varying vec2 vUv; uniform vec2 uSize; uniform float uBend;
      void main(){vUv=uv; vec3 p=position; p.xy*=uSize;
      p.z=sin(uv.x*3.14159265)*sin(uv.y*3.14159265)*uBend;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`,
    fragmentShader: `precision highp float; varying vec2 vUv;
      uniform sampler2D uMap; uniform vec3 uColor; uniform vec2 uSize; uniform vec2 uImage;
      uniform float uReveal; uniform float uRadius;
      void main(){
        float aspect=uSize.x/uSize.y; float imageAspect=uImage.x/uImage.y;
        vec2 cover=vec2(min(aspect/imageAspect,1.0),min(imageAspect/aspect,1.0));
        vec3 photo=texture2D(uMap,(vUv-0.5)*cover+0.5).rgb;
        vec2 q=abs((vUv-0.5)*uSize)-(uSize*0.5-uRadius);
        float d=length(max(q,0.0))+min(max(q.x,q.y),0.0)-uRadius;
        gl_FragColor=vec4(mix(uColor,photo,uReveal),1.0-smoothstep(-1.0,1.0,d));
      }`,
  });
  const geometry = new THREE.PlaneGeometry(1, 1, 48, 32);
  const mesh = new THREE.Mesh(geometry, material); scene.add(mesh);
  const state = { ...source, reveal: 0, bend: 0, radius: 22 };
  const draw = () => {
    mesh.position.set(state.left + state.width / 2 - width / 2, height / 2 - state.top - state.height / 2, 0);
    uniforms.uSize.value.set(state.width, state.height); uniforms.uReveal.value = state.reveal;
    uniforms.uBend.value = state.bend; uniforms.uRadius.value = state.radius;
    renderer.render(scene, camera);
  };
  draw();
  let timeline = gsap.timeline({ onUpdate: draw, onComplete: complete });
  timeline.to(state, { left: 0, top: 0, width, height, reveal: 1, radius: 0, duration: 0.85, ease: 'power3.inOut' })
    .call(cover)
    .to(state, { ...target, duration: 0.5, ease: 'power3.inOut' });

  return {
    close(_rect: Rect, done: () => void) {
      canvas.style.opacity = '1';
      timeline.eventCallback('onReverseComplete', done);
      timeline.reverse();
    },
    dispose() { timeline.kill(); texture.dispose(); material.dispose(); geometry.dispose(); renderer.dispose(); },
  };
}
