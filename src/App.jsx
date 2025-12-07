import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Linkedin, Menu, X } from "lucide-react";
import { useLenis } from "./hooks/useLenis.js";
import ProjectCarousel from "./components/ProjectCarousel.jsx";
import SkillsBand from "./components/SkillsBand.jsx";
import BackgroundOrbits from "./components/BackgroundOrbits.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import emailjs from "emailjs-com";

// full-width sections, no borders
const sectionOuter = "w-full py-16 md:py-20";
const sectionInner = "w-full px-4 sm:px-6 md:px-10 lg:px-16";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// -----------------------
// Sections
// -----------------------

function Hero() {
  return (
    <section id="home" className={sectionOuter}>
      <div className={`${sectionInner} flex flex-col gap-10`}>
        <div className="space-y-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-500 shadow-sm ring-1 ring-slate-200/80"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Frontend · Agents · ECE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
              Hima Vara&nbsp;Sagar
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="text-sm md:text-[15px] text-slate-600 leading-relaxed"
          >
            I&apos;m an ECE undergrad at NIT Calicut who treats the browser like
            a sandbox — building bright, app-like interfaces with React,
            motion-heavy layouts, and the occasional AI/agent experiment running
            in the background.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.4 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <button
              className="rounded-full bg-sky-500 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-sky-500/30 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View featured projects
            </button>

            <a
              href="#contact"
              className="rounded-full bg-white/80 px-5 py-2.5 text-xs md:text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Skills band – seamless ambient motion */}
        <SkillsBand />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className={sectionOuter}>
      <div className={sectionInner}>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="text-2xl md:text-3xl font-semibold mb-4 text-slate-900"
        >
          About me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-3xl"
        >
          I&apos;m an Electronics &amp; Communication Engineering student at NIT
          Calicut who likes mixing clean UI with slightly overkill interactions.
          Most of what I build lives in the frontend: React + Vite + Tailwind +
          Framer Motion, with smooth scroll and tiny details that make a page
          feel like an application instead of a static site.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-3 text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-3xl"
        >
          On the &quot;brains&quot; side, I enjoy playing with LLM agents,
          tools, and multi-step reasoning flows — like the Universal Cognitive
          Engine project built for a Kaggle agents competition. On the ECE side,
          I&apos;ve worked on RF/antenna modeling and simulation, tying theory
          back to actual designs.
        </motion.p>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className={sectionOuter}>
      <div className={sectionInner}>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="text-2xl md:text-3xl font-semibold mb-6 text-slate-900 flex items-center justify-between"
        >
          Featured projects
          <span className="text-[11px] font-normal text-slate-500">
            Focus on one at a time · use arrows
          </span>
        </motion.h2>

        <ProjectCarousel />
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) return;

    const time = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message, time }
      )
      .then((res) => {
        console.log("EmailJS success:", res);
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 2500);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 2500);
      });
  };

  const buttonLabel =
    status === "sending"
      ? "Sending..."
      : status === "success"
      ? "Sent ✓"
      : status === "error"
      ? "Failed — try again"
      : "Send message";

  const buttonColor =
    status === "success"
      ? "bg-emerald-500"
      : status === "error"
      ? "bg-rose-500"
      : "bg-sky-500";

  return (
    <section id="contact" className={sectionOuter}>
      <div className={`${sectionInner} relative`}>
        {/* subtle colored ambient glow */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" />
          <div className="absolute bottom-0 right-20 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="relative flex flex-col lg:flex-row gap-10 lg:gap-14 items-start"
        >
          {/* Left: text + CTA */}
          <div className="space-y-4 flex-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-500 shadow-sm ring-1 ring-slate-200/80"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.08, duration: 0.45 }}
              className="text-2xl md:text-3xl font-semibold text-slate-900"
            >
              Let&apos;s build something playful together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.12, duration: 0.45 }}
              className="text-sm md:text-[15px] text-slate-600 max-w-xl"
            >
              Open to collaborations, experiments, and anything that involves
              interactive frontends or intelligent systems. If you&apos;ve got
              an idea that needs motion, structure, or a bit of weirdness,
              send it over.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="mailto:your.email@domain.com"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-sky-500/30 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                <Mail size={14} />
                Email me
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: soft-glass quick message form with EmailJS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.16, duration: 0.45 }}
            className="w-full max-w-md space-y-3"
          >
            <p className="text-[11px] font-medium text-slate-500">
              Quick message
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-3 rounded-3xl bg-white/40 backdrop-blur-md px-4 py-4 shadow-sm shadow-slate-200/60 border border-white/40"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="h-9 w-full rounded-xl bg-white/50 px-3 text-xs md:text-sm text-slate-700 placeholder-slate-400 shadow-sm shadow-slate-200/60 outline-none focus:ring-2 focus:ring-sky-400/60 focus:bg-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="h-9 w-full rounded-xl bg-white/50 px-3 text-xs md:text-sm text-slate-700 placeholder-slate-400 shadow-sm shadow-slate-200/60 outline-none focus:ring-2 focus:ring-sky-400/60 focus:bg-white"
              />

              <textarea
                name="message"
                placeholder="Tell me about your idea..."
                required
                rows={4}
                className="w-full rounded-xl bg-white/50 px-3 py-2 text-xs md:text-sm text-slate-700 placeholder-slate-400 shadow-sm shadow-slate-200/60 resize-none outline-none focus:ring-2 focus:ring-sky-400/60 focus:bg-white"
              />

              <div className="space-y-1">
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className={`h-9 w-full rounded-full ${buttonColor} text-white text-xs md:text-sm font-medium shadow-md shadow-slate-900/10 flex items-center justify-center`}
                  animate={
                    status === "sending"
                      ? { scaleX: 1.03, scaleY: 0.96 }
                      : status === "success"
                      ? { scale: [1, 1.04, 1] }
                      : status === "error"
                      ? { x: [0, -4, 4, -3, 3, 0] }
                      : { scaleX: 1, scaleY: 1, x: 0 }
                  }
                  transition={{ duration: 0.25 }}
                >
                  {buttonLabel}
                </motion.button>

                {/* progress underline */}
                <div className="relative h-1 w-full rounded-full bg-slate-200/60 overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-sky-500 via-emerald-400 to-amber-400"
                    initial={{ scaleX: 0 }}
                    animate={
                      status === "sending"
                        ? { scaleX: 1 }
                        : status === "success"
                        ? { scaleX: 1 }
                        : { scaleX: 0 }
                    }
                    style={{ originX: 0 }}
                    transition={
                      status === "sending"
                        ? { duration: 1.4, ease: "easeInOut" }
                        : { duration: 0.35 }
                    }
                  />
                </div>
              </div>
            </form>

            <p className="text-[10px] text-slate-400">
              Messages are sent securely via EmailJS · no page reloads.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-8">
      <div
        className={`${sectionInner} flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] md:text-xs text-slate-500`}
      >
        <span>© {new Date().getFullYear()} Hima Vara Sagar</span>
        <span className="text-slate-400">
          Built with React, Vite, Tailwind &amp; a bit of motion.
        </span>
      </div>
    </footer>
  );
}

// -----------------------
// App root
// -----------------------

export default function App() {
  useLenis();

  // init EmailJS with public key from env
  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const [activeNav, setActiveNav] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // fake loading delay
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  // update active nav based on visible section
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // scroll progress + navbar shadow state
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 24);

      // close mobile menu when scrolling
      if (window.scrollY > 20) setIsMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen app-bg relative overflow-hidden">
      {/* animated, reactive background */}
      <BackgroundOrbits />

      {/* loading overlay */}
      {isLoading && <LoadingScreen />}

      {/* main content fades in after loader */}
      <div
        className={`relative z-10 transition-opacity duration-500 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* navbar – animated, floating */}
        <header className="sticky top-0 z-20 pointer-events-none">
          <div className="relative">
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between text-xs md:text-sm py-3 md:py-3.5 pointer-events-auto"
            >
              {/* Brand pill */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => handleNavClick("home")}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                himavarasagar.dev
              </motion.button>

              {/* Desktop nav (pill) */}
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.35, ease: "easeOut" }}
                className={`relative hidden md:flex items-center gap-1 rounded-full bg-white/70 backdrop-blur px-1.5 py-1 shadow-sm ${
                  isScrolled ? "shadow-slate-300/60" : "shadow-slate-200/40"
                }`}
              >
                {NAV_ITEMS.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium transition-colors ${
                      activeNav === item.id
                        ? "text-slate-900"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {activeNav === item.id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-slate-900/6"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.button>
                ))}
              </motion.div>

              {/* Mobile menu button */}
              <button
                className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setIsMenuOpen((v) => !v)}
              >
                {isMenuOpen ? (
                  <X size={16} className="text-slate-700" />
                ) : (
                  <Menu size={16} className="text-slate-700" />
                )}
              </button>
            </motion.nav>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden absolute right-4 left-4 sm:left-auto sm:right-6 top-[calc(100%-0.5rem)] z-10"
                >
                  <div className="rounded-2xl bg-white/95 backdrop-blur shadow-lg shadow-slate-900/10 border border-slate-200/70 px-2 py-1.5 flex flex-col">
                    {NAV_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-[12px] font-medium transition-colors ${
                          activeNav === item.id
                            ? "bg-slate-900/5 text-slate-900"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* scroll progress bar */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-sky-500 via-emerald-400 to-amber-400"
              style={{ scaleX: scrollProgress }}
            />
          </div>
        </header>

        <main>
          <Hero />
          <About />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}