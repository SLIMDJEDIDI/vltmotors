"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Check,
  Gauge,
  BatteryCharging,
  Fuel,
  Zap,
  Download,
  MessageCircle,
  Phone,
  Share2,
} from "lucide-react";
import { VehicleGallery } from "./VehicleGallery";
import { FinancingCalculator } from "./FinancingCalculator";
import { QuoteDialog, type QuoteIntent } from "./QuoteDialog";
import { VehicleCard } from "./VehicleCard";
import { type Vehicle, formatPrice } from "@/data/vehicles";
import { site } from "@/data/site";

const tabs = ["Overview", "Specifications", "Features"] as const;

export function VehicleDetail({
  vehicle,
  related,
}: {
  vehicle: Vehicle;
  related: Vehicle[];
}) {
  const v = vehicle;
  const [color, setColor] = useState(0);
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");
  const [dialog, setDialog] = useState<QuoteIntent | null>(null);

  const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello VLT Motors, I'm interested in the ${v.name}.`
  )}`;

  return (
    <div className="container-px py-12">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: gallery + tabs */}
        <div>
          <VehicleGallery images={v.gallery} name={v.name} />

          {/* Tabs */}
          <div className="mt-10">
            <div className="flex gap-2 border-b border-white/10">
              {tabs.map((tb) => (
                <button
                  key={tb}
                  onClick={() => setTab(tb)}
                  className={`relative px-4 py-3 text-sm font-semibold transition-colors ${
                    tab === tb ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {tb}
                  {tab === tb && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-volt"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="py-7">
              {tab === "Overview" && (
                <div className="space-y-5">
                  <p className="text-base leading-relaxed text-white/70">
                    {v.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <Highlight
                      icon={<Gauge className="h-5 w-5" />}
                      label="Top speed"
                      value={`${v.topSpeed} km/h`}
                    />
                    <Highlight
                      icon={
                        v.powertrain === "electric" ? (
                          <BatteryCharging className="h-5 w-5" />
                        ) : (
                          <Fuel className="h-5 w-5" />
                        )
                      }
                      label="Range"
                      value={`${v.range} km`}
                    />
                    <Highlight
                      icon={<Zap className="h-5 w-5" />}
                      label="Power"
                      value={
                        v.powertrain === "electric"
                          ? `${v.motorPower} kW`
                          : `${v.displacement} cc`
                      }
                    />
                    <Highlight
                      icon={<span className="text-lg">⚙</span>}
                      label="Wheels"
                      value={`${v.wheels}`}
                    />
                  </div>
                </div>
              )}

              {tab === "Specifications" && (
                <dl className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                  {v.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between border-b border-white/8 py-3.5"
                    >
                      <dt className="text-sm text-white/55">{s.label}</dt>
                      <dd className="text-sm font-semibold text-white">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {tab === "Features" && (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {v.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt/15 text-volt">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Right: sticky buy rail */}
        <div>
          <div className="lg:sticky lg:top-24">
            <div className="card-surface p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-volt-300">
                  {v.brand}
                </span>
                <span className="flex items-center gap-1 text-sm text-white/70">
                  <Star className="h-4 w-4 fill-volt text-volt" /> {v.rating}
                  <span className="text-white/40">({v.reviews})</span>
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold text-white">
                {v.name}
              </h1>
              <p className="mt-1 text-white/55">{v.tagline}</p>

              <div className="mt-5 flex items-end gap-3">
                {v.oldPrice && (
                  <span className="text-base text-white/40 line-through">
                    {formatPrice(v.oldPrice)}
                  </span>
                )}
                <span className="text-3xl font-extrabold text-white">
                  {formatPrice(v.price)}
                </span>
              </div>
              <p className="mt-1 text-xs text-white/45">
                or from{" "}
                <span className="font-semibold text-volt">
                  {formatPrice(Math.round((v.price * 0.9) / 36))}/mo
                </span>{" "}
                with VLT Flex Easy
              </p>

              {/* Stock */}
              <div className="mt-5 flex items-center gap-2 text-sm">
                <span
                  className={`h-2 w-2 rounded-full ${
                    v.inStock ? "bg-volt" : "bg-ember-500"
                  }`}
                />
                <span className={v.inStock ? "text-volt" : "text-ember-400"}>
                  {v.inStock ? "In stock — ready to deliver" : "Available for pre-order"}
                </span>
              </div>

              {/* Colors */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Color · {v.colors[color].name}
                </p>
                <div className="mt-3 flex gap-3">
                  {v.colors.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(i)}
                      aria-label={c.name}
                      className={`h-9 w-9 rounded-full ring-2 ring-offset-2 ring-offset-ink-900 transition-all ${
                        color === i ? "ring-volt" : "ring-transparent"
                      }`}
                      style={{ background: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-7 space-y-3">
                <button
                  onClick={() => setDialog("test-ride")}
                  className="btn-primary w-full"
                >
                  Book a Test Ride
                </button>
                <button
                  onClick={() => setDialog("quote")}
                  className="btn-ghost w-full"
                >
                  Request a Quote
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-semibold text-white transition-colors hover:border-volt/40"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
                  </a>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-semibold text-white transition-colors hover:border-volt/40"
                  >
                    <Phone className="h-4 w-4 text-volt" /> Call
                  </a>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                <button
                  onClick={() => setDialog("quote")}
                  className="flex items-center gap-2 text-white/60 hover:text-white"
                >
                  <Download className="h-4 w-4" /> Brochure
                </button>
                <button className="flex items-center gap-2 text-white/60 hover:text-white">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-white/40">
              Free delivery nationwide · {v.specs.find((s) => s.label === "Warranty")?.value ?? "Manufacturer warranty"}
            </p>
          </div>
        </div>
      </div>

      {/* Financing */}
      <div className="mt-20">
        <h2 className="mb-6 text-2xl font-extrabold text-white">
          Finance the {v.name}
        </h2>
        <FinancingCalculator defaultPrice={v.price} />
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-20">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-white">
              You may also like
            </h2>
            <Link
              href="/vehicles"
              className="text-sm font-semibold text-white/60 hover:text-volt"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rv) => (
              <VehicleCard key={rv.slug} vehicle={rv} />
            ))}
          </div>
        </div>
      )}

      <QuoteDialog
        open={dialog !== null}
        onClose={() => setDialog(null)}
        intent={dialog ?? "quote"}
        vehicleName={v.name}
      />
    </div>
  );
}

function Highlight({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <span className="text-volt">{icon}</span>
      <p className="mt-2 text-lg font-bold text-white">{value}</p>
      <p className="text-xs text-white/45">{label}</p>
    </div>
  );
}
