"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup, staggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { MagneticButton } from "@/components/MagneticButton";
import { afterSales } from "@/data/services";

export function AfterSales() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Image collage */}
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-4xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80"
                  alt="VLT Motors professional workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-2 w-48 rounded-3xl border border-white/10 bg-ink-900/90 p-5 backdrop-blur-xl sm:-right-6"
              >
                <p className="text-3xl font-extrabold text-volt">24h</p>
                <p className="mt-1 text-xs text-white/60">
                  Average express service turnaround
                </p>
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">After-Sales</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                A workshop you can <span className="text-volt">trust</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-white/60">
                Factory-trained technicians, genuine parts and advanced
                diagnostics keep your vehicle performing at its best — for years.
              </p>
            </Reveal>

            <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2">
              {afterSales.map((s) => (
                <motion.div
                  key={s.title}
                  variants={staggerItem}
                  className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-volt/15 text-volt">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>

            <Reveal delay={0.3}>
              <div className="mt-8">
                <MagneticButton href="/services" variant="ghost">
                  Discover our services
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
