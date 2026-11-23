import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

export default function useSmoothScroll(paused: boolean) {
  const instance = useRef<Lenis | null>(null);
  const locked = useRef(paused);
  locked.current = paused;
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: no-preference) and (pointer: fine)');
    let tick: ((time: number) => void) | undefined;
    const update = () => {
      if (tick) gsap.ticker.remove(tick);
      instance.current?.destroy(); instance.current = null;
      if (!media.matches) return;
      const lenis = new Lenis({ lerp: 0.095, smoothWheel: true, syncTouch: false, autoRaf: false, prevent: node => !!node.closest('[role="dialog"]') });
      instance.current = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      tick = time => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      if (locked.current) lenis.stop();
    };
    update(); media.addEventListener('change', update);
    return () => { media.removeEventListener('change', update); if (tick) gsap.ticker.remove(tick); instance.current?.destroy(); instance.current = null; };
  }, []);
  useEffect(() => { if (paused) instance.current?.stop(); else instance.current?.start(); }, [paused]);
  return instance;
}
