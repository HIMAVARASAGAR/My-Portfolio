"use client";

import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollContext } from "@/app/page";
import NorrisText from "./NorrisText";
import styles from "./Experience.module.css";

const experiences = [
  {
    period: "2021 — 2025",
    title: "B.Tech, Electronics & Communication",
    org: "NIT Calicut",
    detail: "Core foundations in information theory, VLSI design, and communication systems."
  },
  {
    period: "2023 — 2024",
    title: "Senior Workshop Executive",
    org: "Tathva Tech Fest",
    detail: "Orchestrated technical workshop logistics and attendee flow for south India's largest fest."
  },
  {
    period: "2025",
    title: "AI Agents Intensive",
    org: "Google ADK",
    detail: "Focused on multi-agent cognitive design and tool-oriented reasoning systems."
  }
];

export default function Experience() {
  const sectionRef = useRef(null);
  const { masterTimeline } = useContext(ScrollContext);

  useEffect(() => {
    if (!masterTimeline) return;

    const ctx = gsap.context(() => {
      const tl = masterTimeline;
      const start = 0.65;

      const items = gsap.utils.toArray(`.${styles.item}`);
      const container = sectionRef.current.querySelector('.container');

      // 1. Entrance (Explicit fromTo)
      tl.fromTo(sectionRef.current, 
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.01 },
        start
      );

      // 2. Slow, stable drift
      tl.fromTo(container, 
        { y: 20 },
        { y: -20, duration: 0.22, ease: "none" },
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

      // 4. Stable Reading Window (0.75 - 0.85)

      // 5. Exit
      tl.to(sectionRef.current, {
        opacity: 0,
        duration: 0.03,
        ease: "power2.in"
      }, start + 0.23);

      tl.to(sectionRef.current, {
        autoAlpha: 0,
        duration: 0.01
      }, start + 0.26);

    }, sectionRef);

    return () => ctx.revert();
  }, [masterTimeline]);

  return (
    <section className={styles.experience} id="experience" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.line} />
            <NorrisText text="The Journey" tag="span" className={styles.labelText} />
          </div>
        </div>

        <div className={styles.list}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.left}>
                <h3 className={styles.period}>{exp.period}</h3>
                <div className={styles.org}>{exp.org}</div>
              </div>
              <div className={styles.right}>
                <h4 className={styles.title}>{exp.title}</h4>
                <p className={styles.desc}>{exp.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}