"use client";

import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollContext } from "@/app/page";
import NorrisText from "./NorrisText";
import styles from "./Skills.module.css";

const skillGroups = [
  { label: "Core Languages", skills: "Python, MATLAB, C/C++, JavaScript" },
  { label: "AI & Agents", skills: "Google ADK, Multi-Agent Systems, Tool-Reasoning" },
  { label: "Hardware & RF", skills: "CST Microwave, Vivado, THz Antennas, VLSI" },
  { label: "Web Systems", skills: "React, Next.js, GSAP, Tailwind, Node.js" }
];

export default function Skills() {
  const sectionRef = useRef(null);
  const { masterTimeline } = useContext(ScrollContext);

  useEffect(() => {
    if (!masterTimeline) return;

    const ctx = gsap.context(() => {
      const tl = masterTimeline;
      const start = 0.27;

      const gridRef = sectionRef.current.querySelector(`.${styles.grid}`);
      const headerRef = sectionRef.current.querySelector(`.${styles.header}`);
      const blocks = gsap.utils.toArray(`.${styles.skillBlock}`);
      
      // 1. Entrance: Global Clip Slice
      tl.fromTo(sectionRef.current, 
        { autoAlpha: 0, clipPath: "inset(0 100% 0 0)" },
        { autoAlpha: 1, clipPath: "inset(0 0% 0 0)", duration: 0.05, ease: "power4.out" },
        start
      );

      // 2. Header Snap
      tl.fromTo(headerRef, 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.04, ease: "expo.out" },
        start + 0.01
      );

      // 3. Block Slam: Each block slams in with its own momentum
      blocks.forEach((block, i) => {
        tl.fromTo(block, 
          { x: i % 2 === 0 ? -40 : 40, opacity: 0, clipPath: "inset(0 100% 0 0)" },
          { x: 0, opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 0.06, ease: "power3.out" },
          start + 0.02 + (i * 0.01)
        );
      });

      // 4. Stability Hold (0.32 - 0.38)

      // 5. Exit: Rapid Dissolve
      tl.to(sectionRef.current, {
        opacity: 0,
        x: 100,
        filter: "blur(20px)",
        duration: 0.04,
        ease: "power2.in"
      }, start + 0.12);

      tl.to(sectionRef.current, {
        autoAlpha: 0,
        duration: 0.01
      }, start + 0.14);

    }, sectionRef);

    return () => ctx.revert();
  }, [masterTimeline]);

  return (
    <section className={styles.skills} id="skills" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.line} />
            <NorrisText text="Expertise" tag="span" className={styles.labelText} />
          </div>
          <h2 className={styles.title}>Technological Foundations</h2>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <div key={i} className={styles.skillBlock}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <p className={styles.groupSkills}>{group.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}