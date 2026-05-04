"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NorrisText from "./NorrisText";
import styles from "./Skills.module.css";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  { label: "Core Languages", skills: "Python, MATLAB, C/C++, JavaScript" },
  { label: "AI & Agents", skills: "Google ADK, Multi-Agent Systems, Tool-Reasoning" },
  { label: "Hardware & RF", skills: "CST Microwave, Vivado, THz Antennas, VLSI" },
  { label: "Web Systems", skills: "React, Next.js, GSAP, Tailwind, Node.js" }
];

export default function Skills() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray(`.${styles.skillBlock}`);
      
      blocks.forEach((block, i) => {
        gsap.fromTo(block, 
          { 
            opacity: 0, 
            filter: "blur(30px)", 
            y: 100,
            x: i % 2 === 0 ? -40 : 40 
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            x: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 90%",
              end: "top 40%",
              scrub: 1,
            }
          }
        );
      });

      // Atmospheric fade out
      gsap.to(containerRef.current, {
        opacity: 0.1,
        filter: "blur(20px)",
        y: -150,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 60%",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
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
    </div>
  );
}