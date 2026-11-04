import { motion, type HTMLMotionProps } from "framer-motion";

export function Reveal({ delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...props}
    />
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`tracking-[0.2em] text-beige ${className}`} aria-label="5 de 5 estrellas">
      ★★★★★
    </span>
  );
}
