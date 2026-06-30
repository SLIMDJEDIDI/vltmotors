"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { StaggerGroup, staggerItem } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { financingPlans } from "@/data/financing";

export function FinancingPlans() {
  return (
    <StaggerGroup className="grid gap-5 lg:grid-cols-3">
      {financingPlans.map((p) => (
        <motion.div
          key={p.slug}
          variants={staggerItem}
          className={`relative flex flex-col rounded-4xl border p-7 ${
            p.popular
              ? "border-volt/40 bg-gradient-to-b from-volt/[0.12] to-transparent"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          {p.popular && (
            <span className="absolute -top-3 left-7 flex items-center gap-1 rounded-full bg-volt px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-950">
              <Star className="h-3 w-3 fill-ink-950" /> Most popular
            </span>
          )}
          <h3 className="text-xl font-bold text-white">{p.name}</h3>
          <p className="mt-1 text-sm text-white/50">via {p.partner}</p>

          <div className="mt-5 flex items-end gap-1">
            <span className="text-4xl font-extrabold text-volt">{p.apr}%</span>
            <span className="mb-1 text-sm text-white/50">APR</span>
          </div>
          <p className="mt-1 text-sm font-medium text-white/70">{p.highlight}</p>

          <ul className="mt-6 flex-1 space-y-3">
            {p.perks.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-3 text-sm text-white/75"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-volt/15 text-volt">
                  <Check className="h-3 w-3" />
                </span>
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <MagneticButton
              href="/contact"
              variant={p.popular ? "primary" : "ghost"}
              className="w-full"
            >
              Apply for {p.name}
            </MagneticButton>
          </div>
        </motion.div>
      ))}
    </StaggerGroup>
  );
}
