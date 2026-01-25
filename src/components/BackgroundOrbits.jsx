// Soft animated background blobs, tied to classes in index.css
import { motion } from "framer-motion";

export default function BackgroundOrbits() {
  return (
    <motion.div
      className="bg-orbit"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div className="blob blob-1" animate={{ scale: [1, 1.09, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="blob blob-2" animate={{ scale: [1, 0.98, 1.04, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="blob blob-3" animate={{ scale: [1, 1.06, 0.94, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
    </motion.div>
  );
}