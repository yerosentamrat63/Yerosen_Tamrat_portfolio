"use client";

import { motion } from "framer-motion";
import { revealProps } from "@/lib/reveal";
import BlurText from "@/components/ui/BlurText";

export default function Footer() {
  return (
    <motion.footer {...revealProps()} className="flex flex-col items-start justify-between gap-2 border-t border-[rgba(154,212,214,0.08)] px-4 py-4 font-mono text-[10px] text-[#232e42] sm:px-6 sm:py-[22px] sm:text-[11px] lg:flex-row lg:items-center lg:px-14">
      <span><BlurText text="© 2025 Yerosen Tamrat. All rights reserved." delay={20} animateBy="words" direction="top" /></span>
      <span className="tracking-[0.05em] sm:tracking-[0.06em]"><BlurText text="FRONTEND DEVELOPER · A2SV MEMBER · ADDIS ABABA" delay={20} animateBy="words" direction="top" /></span>
    </motion.footer>
  );
}
