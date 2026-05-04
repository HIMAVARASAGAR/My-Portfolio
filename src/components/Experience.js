"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NorrisText from "./NorrisText";
import styles from "./Experience.module.css";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(`.${styles.item}`);

      items.forEach((item) => {
        gsap.fromTo(item, 
          { opacity: 0, filter: "blur(20px)", y: 100 },
          {
            opacity: 1, 
            filter: "blur(0px)",
            y: 0,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 45%",
              scrub: 1.2,
            }
          }
        );
      });

      // Atmospheric fade out
      gsap.to(containerRef.current, {
        opacity: 0.1,
        filter: "blur(20px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 60%",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <section className={styles.experience} id="experience">
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
    </div>
  );
}