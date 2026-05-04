"use client";

import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollContext } from "@/app/page";
import styles from "./Atmosphere.module.css";

export default function Atmosphere() {
  const meshRef = useRef(null);
  const { masterTimeline } = useContext(ScrollContext);

  useEffect(() => {
    // 1. High-performance Mouse Parallax
    const xTo = gsap.quickTo(meshRef.current, "xPercent", { duration: 1.5, ease: "power3" });
    const yTo = gsap.quickTo(meshRef.current, "yPercent", { duration: 1.5, ease: "power3" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 15; // 15% range
      const yPos = (clientY / window.innerHeight - 0.5) * 15;
      xTo(xPos);
      yTo(yPos);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 2. Scroll-driven evolution (Reversible)
    if (!masterTimeline) return;

    const ctx = gsap.context(() => {
      masterTimeline.fromTo(meshRef.current, 
        { scale: 1, opacity: 0.8, rotation: 0 },
        {
          scale: 1.5,
          opacity: 0.9,
          rotation: 45,
          ease: "none",
        }, 
        0
      );
    });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [masterTimeline]);

  return (
    <div className={styles.atmosphere}>
      <div className={styles.grain} />
      <div ref={meshRef} className={styles.mesh} />
      <div className={styles.vignette} />
    </div>
  );
}