"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Zap } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { site } from "@/data/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Cinematic background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2000&q=80"
          alt="Rider on an urban highway at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/70 to-ink-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
      <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-volt/20 blur-[120px]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container-px relative z-10 pt-24"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="eyebrow">
              <Zap className="h-3.5 w-3.5" /> Premium Mobility Dealership · Tunisia
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Ride the Future.
            <br />
            <span className="text-volt-gradient">Drive with Confidence.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Discover a complete range of electric and gasoline motorcycles,
            scooters and commercial vehicles — designed for performance,
            reliability and everyday mobility.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/vehicles" variant="primary">
              Explore Vehicles
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              <Play className="h-4 w-4" /> Book a Test Ride
            </MagneticButton>
          </motion.div>

          {/* Inline stats */}
          <motion.div
            variants={item}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {site.stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs leading-tight text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
