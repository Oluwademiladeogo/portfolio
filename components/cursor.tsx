"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export function CursorDot() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 600, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 600, damping: 30 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-[7px] w-[7px] rounded-full bg-white mix-blend-difference"
      style={{ left: x, top: y, translateX: "-50%", translateY: "-50%" }}
    />
  );
}
