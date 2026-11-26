"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import {
  duration,
  easeOut,
  fadeIn,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerFast,
} from "@/lib/motion";

type CommonProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: CommonProps & { direction?: "up" | "none" | "scale" }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const variants: Variants =
    direction === "scale" ? scaleIn : direction === "none" ? fadeIn : fadeUp;

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: duration.base, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={fast ? staggerFast : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger çocuğu — parent Stagger içinde kullanın */
export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "none" | "scale";
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const variants: Variants =
    direction === "scale" ? scaleIn : direction === "none" ? fadeIn : fadeUp;

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration: duration.base, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: duration.fast, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({
  children,
  className,
  delay = 0,
}: CommonProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.slow, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
