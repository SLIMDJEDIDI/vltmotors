"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { staggerItem } from "./Reveal";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-volt/30"
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-volt/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-volt/15 text-volt ring-1 ring-inset ring-volt/20">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/55">{description}</p>
    </motion.div>
  );
}

export function ProcessCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={staggerItem}
      className="relative rounded-4xl border border-white/10 bg-white/[0.03] p-7"
    >
      <span className="text-4xl font-extrabold text-volt/30">{step}</span>
      <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/55">{description}</p>
    </motion.div>
  );
}
