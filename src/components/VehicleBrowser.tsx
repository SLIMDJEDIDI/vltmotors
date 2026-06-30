"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, Search } from "lucide-react";
import { VehicleCard } from "@/components/VehicleCard";
import { vehicles, formatPrice } from "@/data/vehicles";
import { categories } from "@/data/categories";

type Powertrain = "all" | "electric" | "gasoline";
type SortKey = "featured" | "price-asc" | "price-desc" | "speed" | "range";

const uses = ["urban", "touring", "delivery", "leisure", "fleet"] as const;

export function VehicleBrowser({
  initialCategory = "all",
}: {
  initialCategory?: string;
}) {
  const [category, setCategory] = useState(initialCategory);
  const [powertrain, setPowertrain] = useState<Powertrain>("all");
  const [maxPrice, setMaxPrice] = useState(30000);
  const [minSpeed, setMinSpeed] = useState(0);
  const [minRange, setMinRange] = useState(0);
  const [activeUses, setActiveUses] = useState<string[]>([]);
  const [wheels, setWheels] = useState<number | "all">("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleUse = (u: string) =>
    setActiveUses((prev) =>
      prev.includes(u) ? prev.filter((x) => x !== u) : [...prev, u]
    );

  const reset = () => {
    setCategory("all");
    setPowertrain("all");
    setMaxPrice(30000);
    setMinSpeed(0);
    setMinRange(0);
    setActiveUses([]);
    setWheels("all");
    setQuery("");
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = vehicles.filter((v) => {
      if (category !== "all" && v.category !== category) return false;
      if (powertrain !== "all" && v.powertrain !== powertrain) return false;
      if (v.price > maxPrice) return false;
      if (v.topSpeed < minSpeed) return false;
      if (v.range < minRange) return false;
      if (wheels !== "all" && v.wheels !== wheels) return false;
      if (
        activeUses.length > 0 &&
        !activeUses.some((u) => v.intendedUse.includes(u as never))
      )
        return false;
      if (q && !`${v.name} ${v.brand}`.toLowerCase().includes(q)) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "speed":
          return b.topSpeed - a.topSpeed;
        case "range":
          return b.range - a.range;
        default:
          return Number(b.featured) - Number(a.featured);
      }
    });
    return list;
  }, [
    category,
    powertrain,
    maxPrice,
    minSpeed,
    minRange,
    wheels,
    activeUses,
    query,
    sort,
  ]);

  const filters = (
    <div className="space-y-7">
      <div>
        <FilterLabel>Category</FilterLabel>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip active={category === "all"} onClick={() => setCategory("all")}>
            All
          </Chip>
          {categories
            .filter((c) => c.slug !== "accessories")
            .map((c) => (
              <Chip
                key={c.slug}
                active={category === c.slug}
                onClick={() => setCategory(c.slug)}
              >
                {c.name}
              </Chip>
            ))}
        </div>
      </div>

      <div>
        <FilterLabel>Powertrain</FilterLabel>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {(["all", "electric", "gasoline"] as Powertrain[]).map((p) => (
            <button
              key={p}
              onClick={() => setPowertrain(p)}
              className={`rounded-2xl border px-3 py-2.5 text-xs font-semibold capitalize transition-colors ${
                powertrain === p
                  ? "border-volt bg-volt/15 text-volt"
                  : "border-white/15 text-white/60 hover:border-white/30"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <RangeFilter
        label="Max price"
        value={maxPrice}
        min={2000}
        max={30000}
        step={500}
        display={formatPrice(maxPrice)}
        onChange={setMaxPrice}
      />
      <RangeFilter
        label="Min top speed"
        value={minSpeed}
        min={0}
        max={160}
        step={5}
        display={`${minSpeed} km/h`}
        onChange={setMinSpeed}
      />
      <RangeFilter
        label="Min range"
        value={minRange}
        min={0}
        max={400}
        step={10}
        display={`${minRange} km`}
        onChange={setMinRange}
      />

      <div>
        <FilterLabel>Wheels</FilterLabel>
        <div className="mt-3 flex gap-2">
          {(["all", 2, 3, 4] as const).map((w) => (
            <Chip key={w} active={wheels === w} onClick={() => setWheels(w)}>
              {w === "all" ? "All" : w}
            </Chip>
          ))}
        </div>
      </div>

      <div>
        <FilterLabel>Intended use</FilterLabel>
        <div className="mt-3 flex flex-wrap gap-2">
          {uses.map((u) => (
            <Chip
              key={u}
              active={activeUses.includes(u)}
              onClick={() => toggleUse(u)}
            >
              <span className="capitalize">{u}</span>
            </Chip>
          ))}
        </div>
      </div>

      <button
        onClick={reset}
        className="w-full rounded-2xl border border-white/15 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
      >
        Reset filters
      </button>
    </div>
  );

  return (
    <div className="container-px py-14">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-4xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-5 flex items-center gap-2 text-sm font-bold text-white">
              <SlidersHorizontal className="h-4 w-4 text-volt" /> Filters
            </p>
            {filters}
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search models…"
                className="w-full rounded-full border border-white/15 bg-white/5 py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:border-volt/50 focus:outline-none focus:ring-2 focus:ring-volt/20"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDrawerOpen(true)}
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-full border border-white/15 bg-ink-900 px-4 py-2.5 text-sm font-medium text-white focus:border-volt/50 focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="speed">Top speed</option>
                <option value="range">Range</option>
              </select>
            </div>
          </div>

          <p className="mt-5 text-sm text-white/50">
            {results.length} vehicle{results.length !== 1 && "s"} found
          </p>

          <motion.div
            layout
            className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {results.map((v) => (
                <motion.div
                  key={v.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <VehicleCard vehicle={v} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {results.length === 0 && (
            <div className="mt-16 rounded-4xl border border-dashed border-white/15 py-16 text-center">
              <p className="text-lg font-semibold text-white">
                No vehicles match your filters
              </p>
              <button
                onClick={reset}
                className="btn-ghost btn-sm mt-5"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className="fixed inset-x-0 bottom-0 z-[70] max-h-[85vh] overflow-y-auto rounded-t-4xl border-t border-white/10 bg-ink-950 p-6 lg:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="flex items-center gap-2 text-base font-bold text-white">
                  <SlidersHorizontal className="h-4 w-4 text-volt" /> Filters
                </p>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close filters"
                  className="rounded-full p-1.5 text-white/60 hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {filters}
              <button
                onClick={() => setDrawerOpen(false)}
                className="btn-primary mt-6 w-full"
              >
                Show {results.length} results
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
      {children}
    </p>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
        active
          ? "border-volt bg-volt/15 text-volt"
          : "border-white/15 text-white/60 hover:border-white/30"
      }`}
    >
      {children}
    </button>
  );
}

function RangeFilter({
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
        <FilterLabel>{label}</FilterLabel>
        <span className="text-xs font-bold text-volt">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-volt"
        style={{
          background: `linear-gradient(to right, #00E0A4 ${pct}%, rgba(255,255,255,0.12) ${pct}%)`,
        }}
      />
    </div>
  );
}
