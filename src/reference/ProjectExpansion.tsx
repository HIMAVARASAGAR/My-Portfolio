import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import { projects, type Project } from '../data/projects';
import { projectMedia } from '../data/projectMedia';

const fromPath = () => projects.find(item => location.pathname.replace(/\/$/, '') === '/projects/' + item.id) || null;
const tones: Record<string,string> = {lime:'#dbfa58',lilac:'#dcd7fa',ink:'#dcd7fa',coral:'#ff806b',blue:'#c4c6fa',paper:'#f8f6ed'};
function Roll({children}:{children:string}) {
  return <span className="detail-roll" aria-label={children}>{Array.from(children).map((char,i)=><span aria-hidden="true" key={i} style={{'--i':i} as CSSProperties}><i>{char===' '?'\u00a0':char}</i><i>{char===' '?'\u00a0':char}</i></span>)}</span>;
}
function ProjectExpansion() {
  const dialog = useRef<HTMLDialogElement>(null);
  const source = useRef<HTMLAnchorElement | null>(null);
  const animations = useRef<Animation[]>([]);
  const returnPath = useRef('/');
  const pushed = useRef(false);
  const closing = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const closeRef = useRef<() => void>(() => {});
  const [project, setProject] = useState<Project | null>(fromPath);

  useEffect(() => {
    const select = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent && event.key !== 'Enter') return;
      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.origin !== location.origin || (event instanceof MouseEvent && event.button !== 0) || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const selected = projects.find(item => link.hash === '#project-' + item.id || link.pathname.replace(/\/$/, '') === '/projects/' + item.id);
      if (!selected) return;
      event.preventDefault(); event.stopImmediatePropagation();
      source.current = link; returnPath.current = location.pathname + location.hash;
      history.pushState({...history.state, portfolioProject:selected.id},'', '/projects/' + selected.id);
      pushed.current = true; setProject(selected);
    };
    const pop = () => { if (!fromPath()) closeRef.current(); else setProject(fromPath()); };
    window.addEventListener('click',select,true); window.addEventListener('keydown',select,true); window.addEventListener('popstate',pop);
    return () => { window.removeEventListener('click',select,true); window.removeEventListener('keydown',select,true); window.removeEventListener('popstate',pop); clearTimeout(closeTimer.current); };
  }, []);

  useEffect(() => {
    const panel = dialog.current;
    if (!project || !panel) return;
    closing.current = false;
    document.title = `${project.title} — Himavara Sagar`;
    if (!panel.open) panel.showModal();
    panel.scrollTop = 0;
    panel.querySelector<HTMLButtonElement>(".work-close")?.focus({preventScroll:true});
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 0 : 820;
    const rect = source.current?.getBoundingClientRect();
    const inset = rect ? [Math.max(0,rect.top),Math.max(0,innerWidth-rect.right),Math.max(0,innerHeight-rect.bottom),Math.max(0,rect.left)] : [0,0,0,0];
    const list = [panel.animate([{clipPath:`inset(${inset.map(n=>n+'px').join(' ')} round 0px)`},{clipPath:'inset(0px round 0px)'}],{duration,easing:'cubic-bezier(.76,0,.24,1)',fill:'both'})];
    const heading = panel.querySelector<HTMLElement>('h1');
    const label = source.current?.querySelector<HTMLElement>('[class*="item--label"]');
    if (heading && label && rect) {
      const start = label.getBoundingClientRect(), end = heading.getBoundingClientRect();
      const scale = Math.min(1,Math.max(.15,start.height/end.height));
      list.push(heading.animate([{transform:`translate(${start.left-end.left}px,${start.top-end.top}px) scale(${scale})`},{transform:'translate(0,0) scale(1)'}],{duration,easing:'cubic-bezier(.76,0,.24,1)',fill:'both'}));
    }
    panel.querySelectorAll<HTMLElement>('[data-detail-enter]').forEach((element,index)=>list.push(element.animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:reduced?0:430,delay:reduced?0:350+index*65,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'})));
    animations.current = list;
    return () => list.forEach(animation=>animation.cancel());
  }, [project]);

  function reverseClose() {
    if (closing.current || !dialog.current?.open) return;
    closing.current = true;
    const finish = () => {
      dialog.current?.close(); setProject(null); document.title='Himavara Sagar';
      source.current?.focus({preventScroll:true}); pushed.current=false;
    };
    if (!source.current) { location.assign('/#projects'); return; }
    animations.current.forEach(animation=>animation.reverse());
    closeTimer.current = setTimeout(finish, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 850);
  }
  closeRef.current = reverseClose;
  const close = () => { if (pushed.current && fromPath()) history.back(); else reverseClose(); };
  const media = project && projectMedia(project);
  const projectIndex = project ? projects.findIndex(item=>item.id===project.id)+1 : 0;
  return <dialog className="work-expansion" ref={dialog} aria-labelledby="expanded-title" style={{'--detail-tone':project ? tones[project.tone] : '#dbfa58'} as CSSProperties}
    onCancel={event=>{event.preventDefault();close();}} onWheel={event=>event.stopPropagation()} onTouchMove={event=>event.stopPropagation()}>
    {project && media && <>
      <header className="detail-nav"><a href="/" aria-label="Himavara Sagar home"><img src="/hs-mark.svg" alt=""/></a><span>Project {String(projectIndex).padStart(2,'0')} / 11</span><button className="work-close" autoFocus onClick={close}><Roll>Back to projects ×</Roll></button></header>
      <article className="detail-article"><div className="detail-meta" data-detail-enter><span>{project.category}</span><span>{project.year || 'Independent project'}</span></div>
        <h1 id="expanded-title">{project.title}</h1>
        <div className="detail-intro" data-detail-enter><p>{project.overview}</p><a className="detail-primary-link" href={project.link?.url || `mailto:himavarasagar6675@gmail.com?subject=${encodeURIComponent(project.title)}`} target={project.link ? '_blank' : undefined} rel={project.link ? 'noreferrer' : undefined}><Roll>{project.link ? 'View source ↗' : 'Ask about this project ↗'}</Roll></a></div>
        <div className="detail-body" data-detail-enter><aside><span className="detail-eyebrow">Built with</span><ul>{project.tools.map(tool=><li key={tool}>{tool}</li>)}</ul></aside><section><h2>Inside the project.</h2>{project.details.map((detail,index)=><div className="detail-paragraph" key={detail}><span>{String(index+1).padStart(2,'0')}</span><p>{detail}</p></div>)}</section></div>
        <figure className="detail-media" data-detail-enter><img src={media.src} alt={media.alt}/><figcaption>{media.caption}{media.credit && <> · <a href={media.url} target="_blank" rel="noreferrer">{media.credit}</a></>}</figcaption></figure>
        <footer className="detail-footer"><span>Himavara Sagar / {project.category}</span><button onClick={close}><Roll>Back to all projects ↗</Roll></button></footer>
      </article>
    </>}
  </dialog>;
}
const host = document.createElement('div');
document.body.append(host);
createRoot(host).render(<ProjectExpansion />);
