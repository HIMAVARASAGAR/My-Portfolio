import React, { useEffect, useRef, useState } from "react";
import Scene3D from "./components/Scene3D";
import AnimatedCursor from "./components/AnimatedCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import { SpeedInsights } from "@vercel/speed-insights/react"
/**
 * Scrambling nav link like a glitchy rebuild.
 */
const ScrambleLink = ({ href, label }) => {
  const [text, setText] = useState(label);
  const rafRef = useRef(null);
  const animStateRef = useRef({ running: false });

  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@∆";
  const DURATION = 650;
  const CHAOS_PHASE = 0.45;

  const scrambleFrame = (startTime) => {
    const now = performance.now();
    const elapsed = now - startTime;
    const t = Math.min(elapsed / DURATION, 1);
    const length = label.length;

    if (t < CHAOS_PHASE) {
      setText(
        Array.from({ length })
          .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
          .join("")
      );
    } else {
      const progress = (t - CHAOS_PHASE) / (1 - CHAOS_PHASE);
      setText(
        label
          .split("")
          .map((char, i) => {
            const lock = progress + i / (length * 1.8);
            return lock >= 1 || Math.random() < lock
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
    }

    if (t < 1 && animStateRef.current.running) {
      rafRef.current = requestAnimationFrame(() => scrambleFrame(startTime));
    } else {
      animStateRef.current.running = false;
      setText(label);
    }
  };

  const handleMouseEnter = () => {
    if (animStateRef.current.running) return;
    animStateRef.current.running = true;
    const startTime = performance.now();
    rafRef.current = requestAnimationFrame(() => scrambleFrame(startTime));
  };

  const handleMouseLeave = () => {
    animStateRef.current.running = false;
    cancelAnimationFrame(rafRef.current);
    setText(label);
  };

  const handleClick = (e) => {
    if (!href) return;

    // HOME
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const offsetY = window.scrollY + rect.top - 80;

      window.scrollTo({
        top: offsetY,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="
        cursor-hover 
        text-[10px] md:text-[11px]
        uppercase tracking-[0.3em]
        text-primary hover:text-accent
        transition-colors
        inline-block
      "
      style={{ whiteSpace: "nowrap" }}
    >
      {text}
    </a>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // prevent browser restoring scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* LOADER OVERLAY: stays until particles + slide are done */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="app-loader" onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      <div className="relative w-screen min-h-screen bg-[#A0A5B1] font-sans overflow-x-hidden">
        {/* 3D Layer */}
        <Scene3D />

        {/* Custom cursor */}
        <AnimatedCursor />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full px-8 py-8 flex justify-between items-start z-50 pointer-events-none">
          {/* Left brand block */}
          <div className="pointer-events-auto flex flex-col gap-1">
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="text-left"
            >
              <h1 className="text-sm font-bold tracking-widest uppercase text-primary">
                Hima Vara Sagar
                <br />
                <span className="text-[10px] font-normal opacity-60">
                  Creative Engineer ©2025
                </span>
              </h1>
            </button>
          </div>

          {/* Right nav links */}
          <div className="pointer-events-auto flex flex-col items-end gap-2 text-right">
            <ScrambleLink href="#home" label="Home" />
            <ScrambleLink href="#work" label="Selected Work" />
            <ScrambleLink href="#about" label="Profile" />
            <ScrambleLink href="#contact" label="Contact" />
          </div>
        </nav>

        {/* Content */}
        <main className="relative z-10">
          <Hero />
          <Projects />
          <About />
          <Contact />
          <SpeedInsights />
        </main>
      </div>
    </>
  );
}