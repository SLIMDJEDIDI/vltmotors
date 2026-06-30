"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, BatteryCharging, Fuel, Star } from "lucide-react";
import { type Vehicle, formatPrice } from "@/data/vehicles";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const v = vehicle;
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]"
    >
      <Link href={`/vehicles/${v.slug}`} className="block">
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={v.image}
            alt={v.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute left-4 top-4 flex gap-2">
            {v.isNew && (
              <span className="rounded-full bg-volt px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-950">
                New
              </span>
            )}
            {v.oldPrice && (
              <span className="rounded-full bg-ember-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Promo
              </span>
            )}
            {!v.inStock && (
              <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                Pre-order
              </span>
            )}
          </div>

          <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-ink-950/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
            <Star className="h-3 w-3 fill-volt text-volt" /> {v.rating}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-volt-300">
              {v.brand}
            </p>
            <h3 className="mt-1 text-lg font-bold leading-tight text-white">
              {v.name}
            </h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
            {v.powertrain === "electric" ? "Electric" : "Gasoline"}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-white/55">{v.tagline}</p>

        {/* Mini specs */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
          <Spec
            icon={<Gauge className="h-4 w-4" />}
            label="Top speed"
            value={`${v.topSpeed}`}
            unit="km/h"
          />
          <Spec
            icon={
              v.powertrain === "electric" ? (
                <BatteryCharging className="h-4 w-4" />
              ) : (
                <Fuel className="h-4 w-4" />
              )
            }
            label={v.powertrain === "electric" ? "Range" : "Range"}
            value={`${v.range}`}
            unit="km"
          />
          <Spec
            icon={<span className="text-sm font-bold">⚙</span>}
            label="Power"
            value={
              v.powertrain === "electric"
                ? `${v.motorPower}`
                : `${v.displacement}`
            }
            unit={v.powertrain === "electric" ? "kW" : "cc"}
          />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            {v.oldPrice && (
              <p className="text-xs text-white/40 line-through">
                {formatPrice(v.oldPrice)}
              </p>
            )}
            <p className="text-xl font-extrabold text-white">
              {formatPrice(v.price)}
            </p>
          </div>
          <Link
            href={`/vehicles/${v.slug}`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-volt text-ink-950 transition-all group-hover:rotate-45 group-hover:shadow-glow"
            aria-label={`View ${v.name}`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function Spec({
  icon,
  label,
  value,
  unit,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-volt/80">{icon}</span>
      <span className="mt-1 text-sm font-bold text-white">
        {value}
        <span className="ml-0.5 text-[10px] font-normal text-white/40">
          {unit}
        </span>
      </span>
      <span className="text-[10px] uppercase tracking-wide text-white/40">
        {label}
      </span>
    </div>
  );
}
