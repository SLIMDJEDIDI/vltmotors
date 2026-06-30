"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { VehicleCard } from "@/components/VehicleCard";
import { featuredVehicles } from "@/data/vehicles";

export function FeaturedModels() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-volt/10 blur-[120px]" />
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Models"
            title={
              <>
                Flagship machines, <br className="hidden sm:block" />
                ready to ride
              </>
            }
          />
          <div className="flex items-center gap-3">
            <Link
              href="/vehicles"
              className="hidden text-sm font-semibold text-white/70 transition-colors hover:text-volt sm:block"
            >
              View all vehicles
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-volt/50 hover:text-volt"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-volt/50 hover:text-volt"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 sm:px-8 lg:px-12"
      >
        {featuredVehicles.map((v) => (
          <div
            key={v.slug}
            className="w-[300px] shrink-0 snap-start sm:w-[360px]"
          >
            <VehicleCard vehicle={v} />
          </div>
        ))}
        {/* Tail CTA card */}
        <Link
          href="/vehicles"
          className="group flex w-[300px] shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-4xl border border-dashed border-white/20 text-center transition-colors hover:border-volt/50 sm:w-[360px]"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-volt/15 text-volt transition-colors group-hover:bg-volt group-hover:text-ink-950">
            <ArrowRight className="h-6 w-6" />
          </span>
          <span className="text-lg font-bold text-white">Explore all models</span>
          <span className="text-sm text-white/50">Filter the full catalog</span>
        </Link>
      </div>
    </section>
  );
}
