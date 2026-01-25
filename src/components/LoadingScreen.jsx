import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50 select-none"
    >
      {/* Soft animated glow overlay with subtle motion */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: [0.95, 0.90, 0.98, 0.96, 0.92, 0.95],
          scale: [1, 1.04, 0.97, 1.02, 1],
        }}
        exit={{ opacity: 0.65, scale: 1.12 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(ellipse 75% 60% at 55% 38%, rgba(56,189,248,0.16), transparent 100%), " +
            "radial-gradient(ellipse 40% 34% at 35% 68%, rgba(16,185,129,0.11), transparent 100%), " +
            "radial-gradient(ellipse 40% 42% at 80% 68%, rgba(251,191,36,0.15), transparent 100%)",
          filter: "blur(0px)",
        }}
      />
      {/* Subtle white-top fade for "washed light" look */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.22 }}
        animate={{ opacity: [0.22, 0.19, 0.24, 0.17, 0.22] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "linear-gradient(180deg, #fff 0%, transparent 40%)" }}
      />
    </motion.div>
  );
}
