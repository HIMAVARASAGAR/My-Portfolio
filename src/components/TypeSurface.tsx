import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/** The typography itself is the interactive surface, without a decorative 3D object. */
export default function TypeSurface() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node=host.current;
    if (!node || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let disposed=false, cleanup=()=>{};
    Promise.all([import('three'), document.fonts.ready]).then(([THREE]) => {
      if(disposed) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer=new THREE.WebGLRenderer({alpha:true,antialias:true}); } catch { return; }
      renderer.setPixelRatio(Math.min(devicePixelRatio,2));
      renderer.setClearColor(0,0); node.appendChild(renderer.domElement);
      const source=document.createElement('canvas'); const ctx=source.getContext('2d')!;
      const texture=new THREE.CanvasTexture(source);
      const points=Array.from({length:8},()=>new THREE.Vector3(-10,-10,0));
      const uniforms={map:{value:texture},points:{value:points},aspect:{value:1},intro:{value:0}};
      const material=new THREE.ShaderMaterial({transparent:true,uniforms,
        vertexShader:`varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,
        fragmentShader:`precision highp float; varying vec2 vUv; uniform sampler2D map; uniform vec3 points[8]; uniform float aspect; uniform float intro; void main(){vec2 uv=vUv; for(int i=0;i<8;i++){vec2 delta=uv-points[i].xy;delta.x*=aspect;float influence=exp(-dot(delta,delta)*65.); uv.x+=sin(delta.y*12.)*influence*points[i].z*.018;uv.y+=cos(delta.x*12.)*influence*points[i].z*.009;} uv.y=.5+(uv.y-.5)/max(.01,intro);vec4 c=texture2D(map,uv); if(uv.y<0.||uv.y>1.) c.a=0.;gl_FragColor=vec4(c.rgb,c.a*intro);}`});
      const scene=new THREE.Scene(); const geometry=new THREE.PlaneGeometry(2,2); scene.add(new THREE.Mesh(geometry,material)); const camera=new THREE.Camera();
      const resize=()=>{
        const r=node.getBoundingClientRect(); renderer.setSize(r.width,r.height); uniforms.aspect.value=r.width/r.height;
        source.width=Math.round(r.width*2); source.height=Math.round(r.height*2); ctx.clearRect(0,0,source.width,source.height);
        ctx.textAlign='center';ctx.textBaseline='alphabetic';
        const size=Math.min(source.width/4.25,source.height*.52);
        ctx.fillStyle='#17172b';ctx.font=`600 ${size}px "Bricolage Grotesque"`;ctx.fillText('Himavara',source.width*.5,source.height*.43);
        ctx.fillStyle='#4353f4';ctx.font=`italic ${size*1.12}px "Instrument Serif"`;ctx.fillText('Sagar',source.width*.5,source.height*.79);
        texture.needsUpdate=true;
      };
      let px=-10,py=-10,energy=0,previousX=0,previousY=0;
      const move=(e:PointerEvent)=>{const r=node.getBoundingClientRect();px=(e.clientX-r.left)/r.width;py=1-(e.clientY-r.top)/r.height;energy=Math.min(1,energy+Math.hypot(e.clientX-previousX,e.clientY-previousY)*.015);previousX=e.clientX;previousY=e.clientY;};
      const observer=new ResizeObserver(resize);observer.observe(node);resize();
      const tick=()=>{for(let i=7;i>0;i--)points[i].lerp(points[i-1],.3);points[0].set(px,py,energy);energy*=.94;const r=node.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)renderer.render(scene,camera);};
      gsap.ticker.add(tick);window.addEventListener('pointermove',move,{passive:true});
      node.parentElement?.classList.add('type-ready');
      const entrance=gsap.to(uniforms.intro,{value:1,duration:1.5,ease:'expo.out',delay:.15});
      cleanup=()=>{entrance.kill();observer.disconnect();window.removeEventListener('pointermove',move);gsap.ticker.remove(tick);texture.dispose();geometry.dispose();material.dispose();renderer.dispose();renderer.domElement.remove();node.parentElement?.classList.remove('type-ready');};
    }).catch(()=>{});
    return()=>{disposed=true;cleanup();};
  },[]);
  return <div className="type-surface" ref={host} aria-hidden="true" />;
}
