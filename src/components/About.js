"use client";

import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollContext } from "@/app/page";
import NorrisText from "./NorrisText";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const scanlineRef = useRef(null);
  const { masterTimeline } = useContext(ScrollContext);

  const bio = "I am an Electronics and Communication Engineering graduate from NIT Calicut. My work bridges theory and implementation—from graphene-based THz antenna design to multi-agent AI systems, frontend architecture, and hardware circuits built from first principles.";

  useEffect(() => {
    if (!masterTimeline) return;

    const ctx = gsap.context(() => {
      const tl = masterTimeline;
      const start = 0.12;
      
      const container = sectionRef.current.querySelector('.container');

      // 1. Entrance: Kinetic Slice
      tl.fromTo(sectionRef.current, 
        { autoAlpha: 0, clipPath: "inset(100% 0 0 0)" },
        { autoAlpha: 1, clipPath: "inset(0% 0 0 0)", duration: 0.05, ease: "power4.out" },
        start
      );

      tl.fromTo(container, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.04, ease: "expo.out" },
        start + 0.01
      );

      // 2. Stability Hold (0.17 - 0.23)

      // 3. Exit: Upward Slice
      tl.to(container, {
        y: -100,
        opacity: 0,
        duration: 0.04,
        ease: "expo.in"
      }, start + 0.12);

      tl.to(sectionRef.current, {
        clipPath: "inset(0 0 100% 0)",
        autoAlpha: 0,
        duration: 0.04,
        ease: "power4.in"
      }, start + 0.12);

    }, sectionRef);

    return () => ctx.revert();
  }, [masterTimeline]);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.label}>
            <span className={styles.line} />
            <NorrisText text="The Profile" tag="span" className={styles.labelText} />
          </div>

          <p className={styles.bigText}>
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
}