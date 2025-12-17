import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  delay?: number;
}

export function GlassCard({ children, className = "", gradient, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-[2rem] backdrop-blur-2xl border border-white/20 shadow-xl overflow-hidden ${className}`}
      style={{
        background: gradient || "rgba(255, 255, 255, 0.7)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  from: string;
  to: string;
  delay?: number;
}

export function GradientCard({ children, className = "", from, to, delay = 0 }: GradientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-[2rem] backdrop-blur-xl border border-white/30 shadow-2xl overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
