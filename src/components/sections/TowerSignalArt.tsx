"use client";

import { motion, useReducedMotion } from "motion/react";
import { duration, easeOut } from "@/lib/motion";

export function TowerSignalArt() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-square w-full" aria-hidden>
      <motion.div
        className="absolute inset-[8%] rounded-full border border-border-subtle/60"
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: duration.slow, ease: easeOut, delay: 0.15 }}
      />

      {[0, 1.3, 2.6].map((delay) =>
        reduce ? (
          <div
            key={delay}
            className="absolute inset-[18%] rounded-full border border-accent/25 opacity-25"
          />
        ) : (
          <motion.div
            key={delay}
            className="absolute inset-[18%] rounded-full border border-accent/40"
            initial={{ scale: 0.55, opacity: 0.55 }}
            animate={{ scale: 1.35, opacity: 0 }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ),
      )}

      <svg
        viewBox="0 0 320 320"
        className="relative z-10 h-full w-full"
        role="img"
        aria-label="Kule silüeti ve sinyal halkaları"
      >
        <defs>
          <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <motion.line
          x1="40"
          y1="260"
          x2="280"
          y2="260"
          stroke="rgba(229,231,235,0.15)"
          strokeWidth="1"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
        />
        <motion.line
          x1="160"
          y1="40"
          x2="160"
          y2="280"
          stroke="rgba(245,158,11,0.12)"
          strokeWidth="1"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.28 }}
        />

        <motion.path
          d="M160 48 L168 48 L188 248 L132 248 Z"
          fill="rgba(26,34,52,0.85)"
          stroke="url(#towerGrad)"
          strokeWidth="1.5"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.slow, ease: easeOut, delay: 0.35 }}
        />

        <motion.g
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration.base, delay: 0.55 }}
        >
          <path
            d="M148 100 H172 M142 140 H178 M136 180 H184 M130 220 H190"
            stroke="rgba(245,158,11,0.45)"
            strokeWidth="1"
          />
          <path
            d="M150 100 L170 140 M170 100 L150 140 M144 140 L176 180 M176 140 L144 180"
            stroke="rgba(229,231,235,0.25)"
            strokeWidth="1"
          />
        </motion.g>

        <motion.g
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: duration.base, delay: 0.7, ease: easeOut }}
          style={{ transformOrigin: "160px 70px" }}
        >
          <path d="M160 48 L160 28" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="160" cy="26" r="3.5" fill="#F59E0B" />
          <path
            d="M160 70 L120 92 M160 70 L200 92"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M160 110 L112 138 M160 110 L208 138"
            stroke="rgba(245,158,11,0.7)"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </motion.g>

        {!reduce ? (
          <motion.circle
            cx="160"
            cy="26"
            r="3.5"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.4, opacity: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: "160px 26px" }}
          />
        ) : null}

        <motion.rect
          x="118"
          y="248"
          width="84"
          height="10"
          rx="2"
          fill="rgba(245,158,11,0.25)"
          stroke="#F59E0B"
          strokeWidth="1"
          initial={reduce ? false : { opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: duration.base, delay: 0.6, ease: easeOut }}
          style={{ transformOrigin: "160px 253px" }}
        />

        <motion.text
          x="160"
          y="290"
          textAnchor="middle"
          fill="rgba(156,163,175,0.9)"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: duration.base }}
        >
          SITE · RF · TOWER
        </motion.text>
      </svg>
    </div>
  );
}
