"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Search, Clock } from "lucide-react";
import { dealers, dealerCities, type Dealer } from "@/data/dealers";

// Geographic bounds of Tunisia used to project lat/lng onto the schematic map.
const BOUNDS = { minLng: 7.4, maxLng: 11.8, minLat: 30.0, maxLat: 37.7 };

function project(lat: number, lng: number) {
  const x = ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * 100;
  const y = ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * 100;
  return { x, y };
}

const typeColor: Record<Dealer["type"], string> = {
  Showroom: "#00E0A4",
  "Service Center": "#5BC2E7",
  "Authorized Dealer": "#FF6B2C",
};

export function DealersMap() {
  const [city, setCity] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | null>(dealers[0].id);

  const filtered = useMemo(() => {
    return dealers.filter((d) => {
      const matchCity = city === "All" || d.city === city;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.city.toLowerCase().includes(q) ||
        d.address.toLowerCase().includes(q);
      return matchCity && matchQuery;
    });
  }, [city, query]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      {/* List + filters */}
      <div className="flex flex-col">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by city or address…"
            className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:border-volt/50 focus:outline-none focus:ring-2 focus:ring-volt/20"
          />
        </div>

        <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
          {["All", ...dealerCities].map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                city === c
                  ? "border-volt bg-volt/15 text-volt"
                  : "border-white/15 text-white/60 hover:border-white/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="no-scrollbar mt-4 max-h-[420px] space-y-3 overflow-y-auto pr-1">
          {filtered.map((d) => (
            <button
              key={d.id}
              onMouseEnter={() => setActive(d.id)}
              onClick={() => setActive(d.id)}
              className={`w-full rounded-3xl border p-4 text-left transition-all ${
                active === d.id
                  ? "border-volt/50 bg-volt/[0.07]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/25"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-white">{d.name}</h3>
                <span
                  className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{
                    color: typeColor[d.type],
                    background: `${typeColor[d.type]}1a`,
                  }}
                >
                  {d.type}
                </span>
              </div>
              <p className="mt-2 flex items-start gap-2 text-xs text-white/55">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/40" />
                {d.address}
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/55">
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-white/40" /> {d.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-white/40" /> {d.hours}
                </span>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-white/50">
              No locations match your search.
            </p>
          )}
        </div>
      </div>

      {/* Schematic map */}
      <div className="relative min-h-[420px] overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950">
        <div className="absolute inset-0 bg-grid-faint bg-[size:36px_36px] opacity-50" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/10 blur-3xl" />

        {/* Stylized Tunisia silhouette */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-[0.13]"
          aria-hidden="true"
        >
          <path
            d="M55 4 C62 6 60 14 64 18 C70 23 66 30 70 36 C74 42 70 48 66 54 C64 60 60 64 58 72 C56 80 52 88 48 96 C44 92 42 84 40 78 C36 72 30 70 30 62 C30 54 34 50 32 44 C30 36 36 32 40 26 C44 20 44 12 50 8 C52 6 53 4 55 4 Z"
            fill="#00E0A4"
            stroke="#00E0A4"
            strokeWidth="0.5"
          />
        </svg>

        {/* Pins */}
        <div className="absolute inset-0">
          {dealers.map((d) => {
            const { x, y } = project(d.lat, d.lng);
            const isActive = active === d.id;
            return (
              <button
                key={d.id}
                onMouseEnter={() => setActive(d.id)}
                onClick={() => setActive(d.id)}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-label={d.name}
              >
                {isActive && (
                  <motion.span
                    layoutId="map-ping"
                    className="absolute -inset-3 rounded-full"
                    style={{ background: `${typeColor[d.type]}30` }}
                  />
                )}
                <span
                  className="relative block h-3 w-3 rounded-full ring-2 ring-ink-950 transition-transform group-hover:scale-150"
                  style={{ background: typeColor[d.type] }}
                />
                <span
                  className={`pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink-950/90 px-2 py-0.5 text-[10px] font-semibold text-white transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {d.city}
                </span>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-ink-950/70 px-3 py-2 backdrop-blur">
          {Object.entries(typeColor).map(([label, color]) => (
            <span
              key={label}
              className="flex items-center gap-1.5 text-[10px] font-medium text-white/70"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: color }}
              />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
