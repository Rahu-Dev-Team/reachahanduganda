import { motion } from "framer-motion";

export default function AnimatedBackground({ className = "" }) {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
      {/* Circle */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="w-20 h-20 bg-blue-300 rounded-full absolute top-4 left-4 opacity-30"
      />

      {/* Arrow */}
      <motion.div
        animate={{ x: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="w-16 h-16 rotate-45 border-l-4 border-t-4 border-green-400 absolute bottom-4 right-4 opacity-30"
      />

      {/* Cube */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="w-16 h-16 bg-purple-500 absolute top-[40%] left-[40%] rotate-12 opacity-20"
      />
    </div>
  );
}
