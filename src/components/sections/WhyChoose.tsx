"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, staggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { whyChoose } from "@/data/services";

export function WhyChoose() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Why VLT Motors"
          title={
            <>
              The premium dealership <span className="text-volt">experience</span>
            </>
          }
          description="More than a sale — a partnership. Here's what sets VLT Motors apart from anyone else in the region."
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((f) => (
            <motion.div
              key={f.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-volt/30"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-volt/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-volt/15 text-volt ring-1 ring-inset ring-volt/20">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {f.description}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
