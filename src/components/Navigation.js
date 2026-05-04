"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import NorrisText from "./NorrisText";
import styles from "./Navigation.module.css";

const links = [
  { label: "About", target: "#about", num: "01" },
  { label: "Skills", target: "#skills", num: "02" },
  { label: "Work", target: "#projects", num: "03" },
  { label: "Journey", target: "#experience", num: "04" },
  { label: "Contact", target: "#contact", num: "05" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
          hour12: false,
        }) + " IST"
      );
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.0,
        ease: "power3.inOut",
      });
      gsap.from(linksRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.4,
      });
    } else {
      gsap.to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.8,
        ease: "power3.inOut",
      });
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleClick = (target) => {
    setIsOpen(false);
    setTimeout(() => {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -40, duration: 1.5 });
      }
    }, 600);
  };

  return (
    <>
      {/* Top bar */}
      <header className={styles.header}>
        <a
          href="#"
          className={styles.logo}
          data-cursor="lg"
          onClick={(e) => {
            e.preventDefault();
            window.lenis?.scrollTo(0, { duration: 1.5 });
          }}
        >
          <NorrisText text="Sagar" tag="span" />
          <span className={styles.logoDot}>.</span>
        </a>

        <div className={styles.headerRight}>
          <span className={styles.headerTime}>{time}</span>
          <button
            className={`${styles.menuBtn} ${isOpen ? styles.open : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            data-cursor="lg"
            data-cursor-text={isOpen ? "Close" : "Menu"}
            aria-label="Toggle menu"
          >
            <div className={styles.menuLines}>
              <span />
              <span />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen overlay */}
      <div ref={overlayRef} className={styles.overlay}>
        <div className={styles.overlayContent}>
          <nav className={styles.nav}>
            {links.map((link, i) => (
              <div
                key={link.label}
                className={styles.navItem}
                ref={(el) => (linksRef.current[i] = el)}
              >
                <span className={styles.navNum}>{link.num}</span>
                <NorrisText
                  text={link.label}
                  tag="a"
                  href="#"
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.target);
                  }}
                />
              </div>
            ))}
          </nav>

          <div className={styles.overlayFooter}>
            <div className={styles.overlayCol}>
              <p className={styles.overlayLabel}>Email</p>
              <NorrisText
                text="himavarasagar6675@gmail.com"
                tag="a"
                href="mailto:himavarasagar6675@gmail.com"
                className={styles.overlayLink}
              />
            </div>
            <div className={styles.overlayCol}>
              <p className={styles.overlayLabel}>Socials</p>
              <div className={styles.overlaySocials}>
                <NorrisText
                  text="GitHub"
                  tag="a"
                  href="https://github.com/kakihimavarasagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayLink}
                />
                <NorrisText
                  text="LinkedIn"
                  tag="a"
                  href="https://linkedin.com/in/kakihimavarasagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
