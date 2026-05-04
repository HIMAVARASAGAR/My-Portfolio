"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NorrisText from "./NorrisText";
import styles from "./ProjectsGallery.module.css";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(`.${styles.projectItem}`);

      items.forEach((item) => {
        gsap.fromTo(item, 
          { opacity: 0, filter: "blur(20px)", scale: 0.95 },
          {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            }
          }
        );

        // Individual parallax for titles
        const title = item.querySelector(`.${styles.title}`);
        gsap.to(title, {
          y: -40,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Global section fade out
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
      <section className={styles.section} id="projects">
        <div className="container">
          <div className={styles.header}>
            <div className={styles.label}>
              <span className={styles.line} />
              <NorrisText text="Selected Work" tag="span" className={styles.labelText} />
            </div>
          </div>

          <div className={styles.list}>
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
    </div>
  );
}