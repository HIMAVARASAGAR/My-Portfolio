import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

type Project = { number: string; title: string; category: string; year: string; description: string; tone: string; url?: string };

const projects: Project[] = [
  { number: "01", title: "Soteria", category: "Developer tools", year: "2026", description: "A multi-provider coding agent with a terminal interface and a headless gRPC runtime.", tone: "lime", url: "https://github.com/HIMAVARASAGAR" },
  { number: "02", title: "Universal Cognitive Engine", category: "Autonomous systems", year: "2025", description: "A reasoning architecture for task routing, persistent context, and long-running execution.", tone: "lilac", url: "https://github.com/HIMAVARASAGAR" },
  { number: "03", title: "Aegis", category: "Clinical decision support", year: "2026", description: "A multi-agent readiness workflow with isolated tools and clinician review gates.", tone: "coral", url: "https://github.com/HIMAVARASAGAR" },
  { number: "04", title: "MIPS, single cycle", category: "Digital hardware", year: "2024", description: "A 32-bit processor architecture designed in Verilog and verified with RTL simulation.", tone: "blue", url: "https://github.com/HIMAVARASAGAR" },
  { number: "05", title: "Graphene MIMO antenna", category: "Research · THz", year: "2025", description: "A reconfigurable two-element antenna study with 6.92 dBi peak gain and isolation below −20 dB.", tone: "ink" },
];

const skillGroups = [
  { title: "Web & interaction", skills: ["React", "TypeScript", "GSAP"] },
  { title: "Software systems", skills: ["Developer tooling", "gRPC", "Multi-agent systems"] },
  { title: "Digital design", skills: ["Verilog", "RTL simulation", "Processor architecture"] },
  { title: "RF & THz", skills: ["Antenna design", "MIMO systems", "Graphene devices"] },
];

function Cursor(){
  const cursor=useRef<HTMLDivElement>(null); const label=useRef<HTMLSpanElement>(null);
  useEffect(()=>{
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el=cursor.current, text=label.current; if(!el||!text) return;
    const x=gsap.quickTo(el,"x",{duration:.24,ease:"power3.out"}),y=gsap.quickTo(el,"y",{duration:.24,ease:"power3.out"});
    const move=(event:PointerEvent)=>{el.style.opacity="1";x(event.clientX);y(event.clientY);};
    const over=(event:Event)=>{const target=(event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");if(!target)return;el.dataset.mode=target.dataset.cursor||"";text.textContent=target.dataset.cursorText||"";};
    const out=(event:Event)=>{if((event.target as HTMLElement).closest("[data-cursor]")){delete el.dataset.mode;text.textContent="";}};
    window.addEventListener("pointermove",move,{passive:true});document.addEventListener("pointerover",over);document.addEventListener("pointerout",out);
    return()=>{window.removeEventListener("pointermove",move);document.removeEventListener("pointerover",over);document.removeEventListener("pointerout",out);};
  },[]);
  return <div className="cursor" ref={cursor} aria-hidden="true"><span ref={label}/></div>;
}

function useMagnetic(){
  useEffect(()=>{
    if(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets=Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const cleanups=targets.map((target)=>{
      const move=(event:PointerEvent)=>{const rect=target.getBoundingClientRect();const x=(event.clientX-rect.left-rect.width/2)*.18;const y=(event.clientY-rect.top-rect.height/2)*.18;gsap.to(target,{x,y,duration:.45,ease:"power3.out"});};
      const leave=()=>gsap.to(target,{x:0,y:0,duration:.8,ease:"elastic.out(1,.45)"});
      target.addEventListener("pointermove",move);target.addEventListener("pointerleave",leave);
      return()=>{target.removeEventListener("pointermove",move);target.removeEventListener("pointerleave",leave);};
    });
    return()=>cleanups.forEach((cleanup)=>cleanup());
  },[]);
}

export default function App(){
  const [menuOpen,setMenuOpen]=useState(false); const [selected,setSelected]=useState<Project|null>(null);
  useMagnetic();
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis=new Lenis({ duration:1.18, easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t)), smoothWheel:true, wheelMultiplier:.88 });
    const onTick=(time:number)=>lenis.raf(time*1000);
    lenis.on("scroll",ScrollTrigger.update); gsap.ticker.add(onTick); gsap.ticker.lagSmoothing(0); ScrollTrigger.refresh();
    return()=>{lenis.destroy();gsap.ticker.remove(onTick);};
  },[]);
  useEffect(()=>{
    const ctx=gsap.context(()=>{
      if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        const split=new SplitType(".hero-title",{types:"chars"});
        gsap.timeline({defaults:{ease:"power4.out"}}).fromTo(".site-nav",{y:-28,opacity:0},{y:0,opacity:1,duration:.9}).fromTo(split.chars,{yPercent:116,rotate:4,opacity:0},{yPercent:0,rotate:0,opacity:1,duration:1.1,stagger:.028},"-=.42").fromTo(".hero-info",{opacity:0,y:24},{y:0,opacity:1,duration:.85},"-=.72");
        gsap.utils.toArray<HTMLElement>(".reveal:not(.kinetic-heading)").forEach((el)=>gsap.fromTo(el,{y:34,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%",once:true}}));
        gsap.fromTo(".experience-route",{scaleY:0},{scaleY:1,duration:1.25,ease:"power3.inOut",transformOrigin:"top",scrollTrigger:{trigger:".experience",start:"top 76%",once:true}});
        gsap.fromTo(".experience > div",{x:-42,opacity:0},{x:0,opacity:1,duration:.75,stagger:.13,ease:"power3.out",scrollTrigger:{trigger:".experience",start:"top 74%",once:true}});
        gsap.fromTo(".about-scene",{yPercent:23,scale:.91,rotate:2},{yPercent:0,scale:1,rotate:0,ease:"none",scrollTrigger:{trigger:".about",start:"top bottom",end:"top 18%",scrub:.85,invalidateOnRefresh:true}});
        gsap.fromTo(".contact-scene",{yPercent:24,scale:.9,rotate:-2},{yPercent:0,scale:1,rotate:0,ease:"none",scrollTrigger:{trigger:".contact",start:"top bottom",end:"top 18%",scrub:.85,invalidateOnRefresh:true}});
        gsap.utils.toArray<HTMLElement>(".kinetic-heading").forEach((heading)=>{
          const split=new SplitType(heading,{types:"chars"});
          gsap.fromTo(split.chars,{fontWeight:260,letterSpacing:".1em"},{fontWeight:760,letterSpacing:"-.08em",ease:"none",stagger:{each:.015,from:"start"},scrollTrigger:{trigger:heading,start:"top 92%",end:"top 38%",scrub:.65}});
        });
        if(window.innerWidth>920){
          const section=document.querySelector<HTMLElement>(".work");
          const track=document.querySelector<HTMLElement>(".project-track");
          const viewport=document.querySelector<HTMLElement>(".work-stage");
          if(section&&track&&viewport){
            const travel=()=>Math.max(0,track.scrollWidth-viewport.clientWidth);
            const gallery=gsap.timeline({scrollTrigger:{trigger:section,start:"top top",end:()=>`+=${travel()*1.8}`,pin:section,scrub:1,anticipatePin:1,invalidateOnRefresh:true}});
            gallery
              .to({}, {duration:.55})
              .to(track,{x:()=>-travel(),duration:2.5,ease:"none"})
              .to({}, {duration:.55})
              .to(".gallery-scene",{yPercent:-16,scale:.9,rotate:-2,opacity:0,transformOrigin:"50% 0",duration:.75,ease:"power2.inOut"})
              .fromTo(".skills-stage",{yPercent:108,rotate:3,opacity:1},{yPercent:0,rotate:0,duration:.85,ease:"power3.out"},"<")
              .fromTo(".skills-stage .skills-head",{y:50},{y:0,duration:.55,ease:"power3.out"},"<+=.16")
              .fromTo(".skills-stage .skill-group",{y:80,opacity:0},{y:0,opacity:1,duration:.45,stagger:.1,ease:"power3.out"},"<+=.14");
          }
        }
      }
    });return()=>ctx.revert();
  },[]);
  useEffect(()=>{
    const title=document.querySelector<HTMLElement>(".hero-title");
    if(!title||window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars=Array.from(title.querySelectorAll<HTMLElement>(".char")).filter((char)=>!char.closest("em"));
    const move=(event:PointerEvent)=>{
      chars.forEach((char)=>{
        const rect=char.getBoundingClientRect(); const dx=event.clientX-(rect.left+rect.width/2); const dy=event.clientY-(rect.top+rect.height/2); const distance=Math.hypot(dx,dy); const force=Math.max(0,1-distance/210);
        gsap.to(char,{fontWeight:520+force*340,color:force>.08?"#4353f4":"#17172b",duration:.28,ease:"power2.out",overwrite:"auto"});
      });
    };
    const reset=()=>gsap.to(chars,{fontWeight:520,color:"#17172b",duration:.62,stagger:{each:.018,from:"random",ease:"power2.inOut"},ease:"power3.out",overwrite:"auto"});
    title.addEventListener("pointermove",move,{passive:true});title.addEventListener("pointerleave",reset);
    return()=>{title.removeEventListener("pointermove",move);title.removeEventListener("pointerleave",reset);gsap.killTweensOf(chars);};
  },[]);
  useEffect(()=>{ document.body.classList.toggle("menu-open",menuOpen); return()=>document.body.classList.remove("menu-open"); },[menuOpen]);
  useEffect(()=>{
    if(!menuOpen) return;
    const tl=gsap.timeline({defaults:{ease:"power4.out"}});
    tl.fromTo(".menu-overlay .eyebrow",{y:14,opacity:0},{y:0,opacity:1,duration:.45,delay:.28})
      .fromTo(".menu-links button",{yPercent:115,rotate:3,opacity:0},{yPercent:0,rotate:0,opacity:1,duration:.8,stagger:.09},"-=.15");
    return()=>{tl.kill();};
  },[menuOpen]);
  useEffect(()=>{
    if(!selected) return;
    const ctx=gsap.context(()=>{
      gsap.timeline({defaults:{ease:"power4.out"}})
        .fromTo(".modal-number",{y:35,opacity:0},{y:0,opacity:.2,duration:.85,delay:.15})
        .fromTo(".modal-copy .eyebrow,.modal-copy h2,.modal-copy p,.modal-link",{y:34,opacity:0},{y:0,opacity:1,duration:.72,stagger:.1},"-=.55")
        .fromTo(".modal-index-art",{scale:.72,rotate:-8,opacity:0},{scale:1,rotate:0,opacity:.2,duration:1.1},"-=.7");
    });
    return()=>ctx.revert();
  },[selected]);
  const go=(id:string)=>{setMenuOpen(false);document.querySelector(id)?.scrollIntoView({behavior:"smooth"});};
  return <main>
    <Cursor/>
    <div className="top-progress" aria-hidden="true"/>
    <section className="hero" id="top">
      <header className="site-nav"><a className="wordmark" href="#top" data-cursor="small" data-magnetic>HS<span>®</span></a><div className="nav-desktop"><button onClick={()=>go("#selected")} data-cursor="small" data-magnetic>Projects</button><button onClick={()=>go("#skills")} data-cursor="small" data-magnetic>Skills</button><button onClick={()=>go("#about")} data-cursor="small" data-magnetic>About</button><button onClick={()=>go("#contact")} className="nav-pill" data-cursor="small" data-magnetic>Let’s talk <b>↗</b></button></div><button className="menu-button" onClick={()=>setMenuOpen(true)} aria-label="Open menu" data-cursor="small" data-magnetic><i/><i/></button></header>
      <div className="hero-layout"><div className="hero-copy"><h1 className="hero-title" data-cursor="drag" data-cursor-text="MOVE">Himavara<br/><em>Sagar.</em></h1><div className="hero-info"><p>Electronics &amp; Communication Engineering.<br/>NIT Calicut.</p><button className="round-cta" onClick={()=>go("#selected")} data-cursor="small" data-magnetic aria-label="View projects">↓</button></div></div></div>
      <div className="hero-footer"><span>BASED IN INDIA</span><button onClick={()=>go("#selected")} data-cursor="small">SCROLL TO EXPLORE <b>↓</b></button><span>© 2026</span></div>
    </section>

    <section className="work" id="selected"><div className="gallery-scene"><div className="work-heading"><div><span className="eyebrow">SELECTED PROJECTS</span><h2 className="kinetic-heading">Selected <em>work.</em></h2></div></div><div className="work-stage"><div className="project-track">{projects.map((project)=><button className={`project-card tone-${project.tone}`} key={project.number} onClick={()=>setSelected(project)} data-cursor="open" data-cursor-text="OPEN"><span className="project-number">{project.number}</span><span className="project-arc" aria-hidden="true"/><span className="project-name">{project.title}</span><span className="project-open">↗</span></button>)}</div></div><div className="work-footer"><span>01 — 05</span></div></div><section className="skills skills-stage" id="skills"><div className="skills-head"><div><span className="eyebrow">02 / CAPABILITIES</span><h2 className="kinetic-heading">Capabilities<em>.</em></h2></div><p>Tools and technical areas<br/>used across projects.</p></div><div className="skills-grid">{skillGroups.map((group,index)=><article className="skill-group" key={group.title}><span className="skill-index">0{index+1}</span><h3>{group.title}</h3><div className="skill-list">{group.skills.map((skill)=><button className="skill-name" key={skill} data-cursor="small">{skill}</button>)}</div><span className="skill-rule" aria-hidden="true"/></article>)}</div></section></section>

    <section className="about" id="about"><div className="about-scene"><div className="about-head reveal"><span className="eyebrow">03 / PROFILE</span><span>2021 — 2025</span></div><div className="about-layout"><div><h2 className="kinetic-heading">About<em>.</em></h2><span className="about-stamp">NITC / ECE</span></div><div className="about-copy reveal"><p>I studied Electronics &amp; Communication Engineering at NIT Calicut.</p><p>I build software and digital hardware.</p><button className="text-link" onClick={()=>go("#contact")} data-cursor="small" data-magnetic>Contact <i>↗</i></button></div></div><div className="experience reveal"><span className="experience-route" aria-hidden="true"/><div data-cursor="small"><span className="experience-node" aria-hidden="true"/><span>2021 — 2025</span><strong>B.Tech, Electronics &amp; Communication</strong><span>NIT Calicut</span><i>01</i></div><div data-cursor="small"><span className="experience-node" aria-hidden="true"/><span>2023 — 2024</span><strong>Workshop Committee Senior Executive</strong><span>Tathva · NIT Calicut</span><i>02</i></div></div></div></section>

    <footer className="contact" id="contact"><div className="contact-scene"><div className="contact-top"><span className="eyebrow">04 / CONTACT</span><span>✳</span></div><div className="contact-main"><h2 className="kinetic-heading">Contact<em>.</em></h2><a className="reveal" href="mailto:himavarasagar6675@gmail.com" data-cursor="open" data-cursor-text="EMAIL" data-magnetic>himavarasagar6675@gmail.com <b>↗</b></a></div><div className="contact-bottom"><a href="https://github.com/HIMAVARASAGAR" target="_blank" rel="noreferrer" data-cursor="small" data-magnetic>GITHUB ↗</a><a href="https://linkedin.com/in/kakihimavarasagar" target="_blank" rel="noreferrer" data-cursor="small" data-magnetic>LINKEDIN ↗</a><button onClick={()=>go("#top")} data-cursor="small" data-magnetic>BACK TO TOP ↑</button><span>© 2026</span></div></div></footer>

    <div className={`menu-overlay ${menuOpen?"is-open":""}`} aria-hidden={!menuOpen}><button className="menu-close" onClick={()=>setMenuOpen(false)} aria-label="Close menu" data-cursor="small"><i/><i/></button><span className="eyebrow">NAVIGATION / 2026</span><div className="menu-links"><button onClick={()=>go("#top")}>Home <b>01</b></button><button onClick={()=>go("#selected")}>Projects <b>02</b></button><button onClick={()=>go("#skills")}>Skills <b>03</b></button><button onClick={()=>go("#about")}>About <b>04</b></button><button onClick={()=>go("#contact")}>Contact <b>05</b></button></div></div>
    {selected && <div className={`project-modal tone-${selected.tone}`} role="dialog" aria-modal="true" aria-label={selected.title}><button className="modal-close" onClick={()=>setSelected(null)} data-cursor="small">CLOSE <b>×</b></button><div className="modal-number">{selected.number}</div><div className="modal-copy"><span className="eyebrow">{selected.category} / {selected.year}</span><h2>{selected.title}</h2><p>{selected.description}</p>{selected.url&&<a href={selected.url} target="_blank" rel="noreferrer" className="modal-link" data-cursor="open" data-cursor-text="VISIT">Open project <b>↗</b></a>}</div><div className="modal-index-art" aria-hidden="true">{selected.number}</div></div>}
  </main>;
}
