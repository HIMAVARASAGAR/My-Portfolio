import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function usePageChoreography(root: RefObject<HTMLDivElement>) {
  useLayoutEffect(() => {
    const media=gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)',()=>{
      gsap.from('.hero-bottom, .site-nav',{opacity:0,y:12,duration:1,delay:.35,stagger:.15,clearProps:'all'});
      gsap.to('.masthead-surface',{scale:.8,yPercent:-18,opacity:.18,ease:'none',scrollTrigger:{trigger:'#top',start:'top top',end:'bottom 30%',scrub:.6}});
      gsap.utils.toArray<HTMLElement>('.bento-tile').forEach(tile=>{
        gsap.from(tile,{y:80,clipPath:'inset(12% 0 0 0 round 7px)',duration:1.1,ease:'power3.out',clearProps:'transform,clipPath',scrollTrigger:{trigger:tile,start:'top 96%',once:true}});
        gsap.fromTo(tile.querySelector('.tile-art'),{yPercent:8},{yPercent:-8,ease:'none',scrollTrigger:{trigger:tile,start:'top bottom',end:'bottom top',scrub:.5}});
      });
      gsap.from('.skills-heading h2',{yPercent:45,opacity:0,duration:1,ease:'power3.out',clearProps:'all',scrollTrigger:{trigger:'#skills',start:'top 70%',once:true}});
      gsap.utils.toArray<HTMLElement>('.skill-panel').forEach(panel=>gsap.from(panel.querySelectorAll('h3, .skill-inventory, .skill-applications'),{y:25,opacity:0,stagger:.1,duration:.8,clearProps:'all',scrollTrigger:{trigger:panel,start:'top 86%',once:true}}));
      gsap.fromTo('.about-statement span',{opacity:.2},{opacity:1,stagger:.18,ease:'none',scrollTrigger:{trigger:'.about-statement',start:'top 78%',end:'bottom 45%',scrub:.4}});
      gsap.from('.about-fact',{y:45,opacity:0,stagger:.2,duration:.9,clearProps:'all',scrollTrigger:{trigger:'.about-facts',start:'top 86%',once:true}});
      gsap.from('.contact-heading h2',{yPercent:25,opacity:0,duration:1.3,ease:'expo.out',clearProps:'all',scrollTrigger:{trigger:'#contact',start:'top 75%',once:true}});
    },root);
    media.add('(pointer:fine) and (prefers-reduced-motion:no-preference)',()=>{
      const cleanups:(()=>void)[]=[];
      root.current?.querySelectorAll<HTMLElement>('.bento-tile').forEach(tile=>{
        const art=tile.querySelector('.project-visual');if(!art)return;
        const x=gsap.quickTo(art,'x',{duration:.8,ease:'power3.out'}), y=gsap.quickTo(art,'y',{duration:.8,ease:'power3.out'});
        const move=(e:PointerEvent)=>{const r=tile.getBoundingClientRect();x((e.clientX-r.left-r.width/2)*.09);y((e.clientY-r.top-r.height/2)*.06);};
        const reset=()=>{x(0);y(0);};tile.addEventListener('pointermove',move);tile.addEventListener('pointerleave',reset);
        cleanups.push(()=>{tile.removeEventListener('pointermove',move);tile.removeEventListener('pointerleave',reset);x.tween.kill();y.tween.kill();});
      });return()=>cleanups.forEach(fn=>fn());
    },root);
    let alive=true;document.fonts.ready.then(()=>{if(alive)ScrollTrigger.refresh();});
    return()=>{alive=false;media.revert();};
  },[root]);
}
