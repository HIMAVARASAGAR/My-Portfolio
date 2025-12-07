import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-50/90 backdrop-blur select-none"
    >
      {/* big breathing gradient glow */}
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sky-300 via-emerald-300 to-amber-300 blur-[100px] opacity-70"
        animate={{
          scale: [1, 1.15, 0.92, 1.08, 1],
          rotate: [0, 15, -10, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* core orb */}
      <motion.div
        className="relative h-40 w-40 rounded-full bg-slate-900/90 shadow-xl shadow-slate-900/30 flex items-center justify-center"
        animate={{
          scale: [1, 1.06, 0.97, 1.03, 1],
          borderRadius: ["50%", "46%", "54%", "48%", "50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* inner pulse */}
        <motion.div
          className="absolute h-24 w-24 rounded-full bg-white/15 blur-xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}