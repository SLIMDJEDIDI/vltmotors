"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { FinancingCalculator } from "@/components/FinancingCalculator";

const points = [
  "Flexible plans from leading partner banks",
  "0% interest promotions on selected models",
  "Decision in as little as 48 hours",
  "Tailored fleet & business financing",
];

export function FinancingTeaser() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Financing</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Own your ride, <span className="text-volt">your way</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-white/60">
                Spread the cost with installment plans built around your budget.
                Simulate your monthly payment in seconds — no commitment.
              </p>
            </Reveal>
            <ul className="mt-7 space-y-3">
              {points.map((p, i) => (
                <Reveal key={p} delay={0.15 + i * 0.07}>
                  <li className="flex items-center gap-3 text-sm text-white/75">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-volt/15 text-volt">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.4}>
              <div className="mt-9">
                <MagneticButton href="/financing">
                  Simulate Your Financing
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1}>
            <FinancingCalculator defaultPrice={12900} compact />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
