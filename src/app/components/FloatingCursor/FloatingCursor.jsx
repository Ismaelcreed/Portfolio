"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import nuage from "../../assets/cloud.svg"; 

const FloatingCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorSize = 80;
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-multiply"
      style={{
        x: smoothX,
        y: smoothY,
        width: cursorSize,
        height: cursorSize,
        willChange: "transform",
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/cloud.svg" 
          alt="custom cursor" 
          width={50}
          height={50}
          className="opacity-90 pointer-events-none select-none drop-shadow-md origin-center"
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingCursor;