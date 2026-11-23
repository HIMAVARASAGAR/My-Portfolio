import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/** One restrained pointer language shared by navigation, work and contact. */
export default function ExperiencePointer() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!media.matches || !ref.current) return;
    const el = ref.current;
    let x = -100, y = -100, tx = x, ty = y, visible = false;
    const move = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY; visible = true;
      const target = (e.target as Element).closest('button, a');
      el.dataset.active = target ? 'true' : 'false';
      el.dataset.project = target?.classList.contains('bento-tile') ? 'true' : 'false';
    };
    const leave = () => { visible = false; };
    const tick = () => {
      const dx = tx-x, dy=ty-y;
      x += dx*.25; y += dy*.25;
      const stretch = Math.min(Math.hypot(dx,dy)/160,.45);
      el.style.opacity = visible ? '1' : '0';
      el.style.transform = `translate3d(${x}px,${y}px,0) rotate(${Math.atan2(dy,dx)}rad) scale(${1+stretch},${1-stretch*.5})`;
    };
    document.addEventListener('pointermove',move); document.documentElement.addEventListener('pointerleave',leave);
    gsap.ticker.add(tick);
    return () => { gsap.ticker.remove(tick); document.removeEventListener('pointermove',move); document.documentElement.removeEventListener('pointerleave',leave); };
  },[]);
  return <div ref={ref} className="experience-pointer" aria-hidden="true"><span /></div>;
}
