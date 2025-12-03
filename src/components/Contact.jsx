import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_minmax(0,1.4fr)] gap-12 md:gap-16 items-center">
          {/* LEFT: SIGNAL / META INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gray-500">
              FINAL NODE
            </p>

            <h3 className="font-display text-2xl md:text-3xl text-white">
              Let’s build something
              <br />
              <span className="text-accent">a little too ambitious.</span>
            </h3>

            <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed">
              I’m open to internships, collaborations and experiments around
              embedded systems, RF, simulation-heavy workflows and playful
              interfaces. If it needs both a schematic and a Figma frame, I’m
              probably interested.
            </p>

            <div className="mt-4 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between text-xs font-mono text-gray-400 bg-white/5">
              <span className="uppercase tracking-[0.2em]">Location</span>
              <span className="text-gray-100">Calicut, India (IST)</span>
            </div>
          </motion.div>

          {/* RIGHT: BIG CTA + SOCIALS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-start md:items-end gap-10"
          >
            {/* EMAIL CTA */}
            <div className="w-full text-left md:text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4">
                PRIMARY CHANNEL
              </p>

              <motion.a
                href="mailto:himavarasagarkaki@gmail.com"
                className="group inline-block cursor-hover"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="relative inline-block">
                  <span className="font-display text-[12vw] md:text-[6vw] leading-none text-white group-hover:text-accent transition-colors duration-300">
                    SAY HELLO
                  </span>
                  {/* underline */}
                  <span className="absolute left-0 right-0 -bottom-2 h-[2px] bg-gradient-to-r from-accent/0 via-accent to-accent/0 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                </div>
              </motion.a>

              <p className="mt-6 font-mono text-[11px] text-gray-500">
                Response window: usually within{" "}
                <span className="text-gray-200">24 hours</span>, unless I’m
                camping inside a lab.
              </p>
            </div>

            {/* SOCIAL ROW */}
            <div className="w-full flex flex-col gap-4 items-start md:items-end">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
                OTHER LINKS
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <a
                  href="https://linkedin.com/in/hima-vara-sagar-134046226"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover font-mono text-xs text-gray-300 hover:text-white transition-colors border border-white/10 hover:border-accent/60 rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/HIMAVARASAGAR"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover font-mono text-xs text-gray-300 hover:text-white transition-colors border border-white/10 hover:border-accent/60 rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  GitHub
                </a>
                <a
                  href="https://x.com/HimaVara"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover font-mono text-xs text-gray-300 hover:text-white transition-colors border border-white/10 hover:border-accent/60 rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
          <span>© 2025 Hima Vara Sagar — Built as an experiment log, not a landing page.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Live version: v0.1
          </span>
        </div>
      </div>
    </section>
  );
}