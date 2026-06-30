"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { financingPlans, computeMonthlyPayment } from "@/data/financing";
import { formatPrice } from "@/data/vehicles";

export function FinancingCalculator({
  defaultPrice = 12000,
  compact = false,
}: {
  defaultPrice?: number;
  compact?: boolean;
}) {
  const [price, setPrice] = useState(defaultPrice);
  const [downPct, setDownPct] = useState(20);
  const [term, setTerm] = useState(36);
  const [planSlug, setPlanSlug] = useState(financingPlans[0].slug);

  const plan = financingPlans.find((p) => p.slug === planSlug)!;

  const { monthly, principal, totalCost, totalInterest, down } = useMemo(() => {
    const effectiveDown = Math.max(downPct, plan.minDownPct);
    const downAmount = (price * effectiveDown) / 100;
    const principalAmount = price - downAmount;
    const m = computeMonthlyPayment(principalAmount, plan.apr, term);
    const total = m * term + downAmount;
    return {
      monthly: m,
      principal: principalAmount,
      totalCost: total,
      totalInterest: total - price,
      down: downAmount,
    };
  }, [price, downPct, term, plan]);

  return (
    <div
      className={`card-surface overflow-hidden ${compact ? "p-6" : "p-7 sm:p-9"}`}
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Inputs */}
        <div className="space-y-7">
          <Slider
            label="Vehicle price"
            value={price}
            min={2000}
            max={30000}
            step={100}
            display={formatPrice(price)}
            onChange={setPrice}
          />
          <Slider
            label={`Down payment (min ${plan.minDownPct}%)`}
            value={downPct}
            min={plan.minDownPct}
            max={70}
            step={5}
            display={`${downPct}% · ${formatPrice(down)}`}
            onChange={setDownPct}
          />
          <Slider
            label="Term"
            value={term}
            min={plan.minTerm}
            max={plan.maxTerm}
            step={6}
            display={`${term} months`}
            onChange={setTerm}
          />

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
              Financing plan
            </p>
            <div className="flex flex-wrap gap-2">
              {financingPlans.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => {
                    setPlanSlug(p.slug);
                    if (downPct < p.minDownPct) setDownPct(p.minDownPct);
                    if (term < p.minTerm) setTerm(p.minTerm);
                    if (term > p.maxTerm) setTerm(p.maxTerm);
                  }}
                  className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors ${
                    planSlug === p.slug
                      ? "border-volt bg-volt/15 text-volt"
                      : "border-white/15 text-white/60 hover:border-white/30"
                  }`}
                >
                  {p.name} · {p.apr}%
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-volt/15 to-transparent p-6 ring-1 ring-inset ring-volt/20">
          <div>
            <p className="text-sm text-white/60">Estimated monthly payment</p>
            <motion.p
              key={Math.round(monthly)}
              initial={{ opacity: 0.5, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-4xl font-extrabold text-white"
            >
              {formatPrice(Math.round(monthly))}
              <span className="text-base font-medium text-white/50">/mo</span>
            </motion.p>
            <p className="mt-1 text-xs text-white/50">
              via {plan.partner} · {plan.apr}% APR
            </p>
          </div>

          <dl className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-sm">
            <Row label="Amount financed" value={formatPrice(Math.round(principal))} />
            <Row label="Down payment" value={formatPrice(Math.round(down))} />
            <Row
              label="Total interest"
              value={formatPrice(Math.max(0, Math.round(totalInterest)))}
            />
            <Row
              label="Total cost"
              value={formatPrice(Math.round(totalCost))}
              strong
            />
          </dl>
          <p className="mt-4 text-[11px] leading-relaxed text-white/40">
            Illustrative estimate only. Final terms are subject to bank approval.
          </p>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-white/70">{label}</label>
        <span className="text-sm font-bold text-volt">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-volt [&::-webkit-slider-thumb]:shadow-glow"
        style={{
          background: `linear-gradient(to right, #00E0A4 ${pct}%, rgba(255,255,255,0.12) ${pct}%)`,
        }}
      />
    </div>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-white/50">{label}</dt>
      <dd className={strong ? "font-bold text-white" : "text-white/80"}>
        {value}
      </dd>
    </div>
  );
}
