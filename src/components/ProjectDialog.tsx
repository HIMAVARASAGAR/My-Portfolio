import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import type { Project } from '../data/projects';
import { projectMedia } from '../data/projectMedia';
import ProjectVisual from './ProjectVisual';

export default function ProjectDialog({ project, trigger, onClose }: { project: Project; trigger: HTMLElement; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null), canvas = useRef<HTMLCanvasElement>(null), closeButton = useRef<HTMLButtonElement>(null);
  const closeAction = useRef<() => void>(() => {});
  const media = projectMedia(project);
  useLayoutEffect(() => {
    const el = panel.current!, surface = canvas.current!;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const overflow = document.body.style.overflow;
    const previous = trigger.getAttribute('data-dialog-source');
    const sourceRect = trigger.getBoundingClientRect();
    const color = getComputedStyle(trigger).backgroundColor;
    const rect = (r: DOMRect) => ({ left: r.left, top: r.top, width: r.width, height: r.height });
    let disposed = false, closing = false, revealed = false;
    let portal: ReturnType<typeof import('../webgl/projectPortal')['createProjectPortal']> | undefined;
    document.body.style.overflow = 'hidden';
    trigger.setAttribute('data-dialog-source', '');
    const image = el.querySelector<HTMLImageElement>('.project-photo img')!;
    const reveal = () => {
      if (disposed || closing) return;
      revealed = true;
      gsap.to(el, { opacity: 1, duration: reduced ? 0 : 0.25 });
      gsap.to(surface, { opacity: 0, duration: 0.25 });
      closeButton.current?.focus({ preventScroll: true });
    };
    el.style.opacity = '0';
    const fallback = setTimeout(reveal, 1800);
    if (reduced) reveal();
    else Promise.all([import('../webgl/projectPortal'), image.decode()]).then(([module]) => {
      if (disposed || closing || revealed) return;
      clearTimeout(fallback);
      portal = module.createProjectPortal(surface, rect(sourceRect), rect(image.getBoundingClientRect()), image, color === 'rgba(0, 0, 0, 0)' ? '#f8f6ed' : color, reveal, () => { if (!disposed && !closing) gsap.to(el, { opacity: 1, duration: 0.3 }); });
    }).catch(reveal);
    closeAction.current = () => {
      if (closing) return;
      closing = true;
      clearTimeout(fallback);
      const done = () => { onClose(); requestAnimationFrame(() => trigger.isConnected && trigger.focus({ preventScroll: true })); };
      if (reduced || !portal || !trigger.isConnected) { done(); return; }
      gsap.killTweensOf(surface); gsap.killTweensOf(el);
      gsap.to(el, { opacity: 0, duration: 0.2 });
      portal.close(rect(trigger.getBoundingClientRect()), done);
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); closeAction.current(); }
      if (event.key !== 'Tab') return;
      const controls = Array.from(el.querySelectorAll<HTMLElement>('button, a[href], input')).filter(e => !e.hasAttribute('disabled'));
      const first = controls[0], last = controls[controls.length - 1];
      if (!el.contains(document.activeElement) || (event.shiftKey && document.activeElement === first)) { event.preventDefault(); (event.shiftKey ? last : first)?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const resize = () => { portal?.dispose(); portal = undefined; surface.style.opacity = '0'; if (closing) onClose(); else reveal(); };
    document.addEventListener('keydown', key); window.addEventListener('resize', resize);
    return () => {
      disposed = true; clearTimeout(fallback); portal?.dispose();
      gsap.killTweensOf(el); gsap.killTweensOf(surface);
      if (previous === null) trigger.removeAttribute('data-dialog-source'); else trigger.setAttribute('data-dialog-source', previous);
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', key); window.removeEventListener('resize', resize);
    };
  }, [project, trigger, onClose]);
  return createPortal(
    <div className="project-experience">
      <canvas className="project-portal" ref={canvas} aria-hidden="true" />
      <div ref={panel} className="project-page" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <button ref={closeButton} className="project-page-close pill" onClick={() => closeAction.current()} aria-label="Close project">Back to projects <span>×</span></button>
        <figure className="project-photo">
          <img src={media.src} alt={media.alt} />
          <figcaption>{media.caption}{media.credit && <> · <a href={media.url} target="_blank" rel="noreferrer">{media.credit} ↗</a></>}</figcaption>
        </figure>
        <div className="project-page-body">
          <div className="dialog-meta"><span>{project.category}</span><span>{project.year}</span></div>
          <h2 id="dialog-title">{project.title}</h2>
          <div className="project-details">
            <div className="project-story"><p className="project-overview">{project.overview}</p>{project.details.map(text => <p key={text}>{text}</p>)}
              {project.link && <a className="project-external" href={project.link.url} target="_blank" rel="noreferrer">{project.link.label}<span>↗</span></a>}
            </div>
            <aside className="project-tools"><h3>Built with</h3>{project.tools.map(tool => <span key={tool}>{tool}</span>)}</aside>
          </div>
          <ProjectVisual project={project} detail />
        </div>
      </div>
    </div>, document.body,
  );
}
