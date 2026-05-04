"use client";

import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollContext } from "@/app/page";
import NorrisText from "./NorrisText";
import styles from "./ProjectsGallery.module.css";

const projects = [
  {
    num: "01",
    title: "Universal Cognitive Engine",
    subtitle: "AI Agents — 2025",
    description: "Designed a multi-agent cognitive system with agents for reasoning, planning, and multi-step execution."
  },
  {
    num: "02",
    title: "Graphene MIMO Antenna",
    subtitle: "RF Systems — 2025",
    description: "Reconfigurable THz ring antenna for MIMO applications. Designed at NIT Calicut."
  },
  {
    num: "03",
    title: "Intelligence in Motion",
    subtitle: "Digital Experience — 2024",
    description: "A cinematic, scroll-driven portfolio exploring the intersection of engineering and design."
  }
];

export default function ProjectsGallery() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const { masterTimeline } = useContext(ScrollContext);

  useEffect(() => {
    if (!masterTimeline) return;

    const ctx = gsap.context(() => {
      const tl = masterTimeline;
      const start = 0.42;

      const items = gsap.utils.toArray(`.${styles.projectItem}`);

      // 1. Entrance (Explicit fromTo)
      tl.fromTo(sectionRef.current, 
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.01 },
        start
      );

      // 2. Slow Parallax Drift
      tl.fromTo(listRef.current, 
        { y: "5%" },
        { y: "-5%", duration: 0.2, ease: "none" },
        start
      );

      // 3. Item Reveal
      items.forEach((item, i) => {
        tl.fromTo(item, 
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.03, ease: "power2.out" },
          start + 0.01 + (i * 0.02)
        );
      });

      // 4. Stability Hold (0.50 - 0.60)

      // 5. Exit
      tl.to(sectionRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.03,
        ease: "power2.in"
      }, start + 0.19);

      tl.to(sectionRef.current, {
        autoAlpha: 0,
        duration: 0.01
      }, start + 0.22);

    }, sectionRef);

    return () => ctx.revert();
  }, [masterTimeline]);

  return (
    <section className={styles.section} id="projects" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.line} />
            <NorrisText text="Selected Work" tag="span" className={styles.labelText} />
          </div>
        </div>

        <div className={styles.list} ref={listRef}>
          {projects.map((project, i) => (
            <div key={i} className={styles.projectItem}>
              <div className={styles.meta}>
                <span className={styles.num}>{project.num}</span>
                <span className={styles.subtitle}>{project.subtitle}</span>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}