"use client";

import { useEffect, useRef, useCallback } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const textRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const scale = useRef(1);
  const targetScale = useRef(1);
  const visible = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        pos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onOver = (e) => {
      const el = e.target.closest("[data-cursor]");
      if (el) {
        const type = el.getAttribute("data-cursor");
        targetScale.current = type === "lg" ? 3 : type === "xl" ? 5 : 2;
        if (textRef.current) {
          textRef.current.textContent = el.getAttribute("data-cursor-text") || "";
          textRef.current.style.opacity = el.getAttribute("data-cursor-text") ? 1 : 0;
        }
      }
    };

    const onOut = (e) => {
      const el = e.target.closest("[data-cursor]");
      if (el) {
        targetScale.current = 1;
        if (textRef.current) {
          textRef.current.style.opacity = 0;
        }
      }
    };

    let raf;
    const loop = () => {
      const lerp = 0.12;
      pos.current.x += (target.current.x - pos.current.x) * lerp;
      pos.current.y += (target.current.y - pos.current.y) * lerp;
      scale.current += (targetScale.current - scale.current) * 0.15;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) scale(${scale.current})`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${target.current.x}px, ${target.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className={styles.outer}>
        <span ref={textRef} className={styles.cursorText} />
      </div>
      <div ref={innerRef} className={styles.inner} />
    </>
  );
}
