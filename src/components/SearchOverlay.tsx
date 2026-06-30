"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { vehicles, formatPrice } from "@/data/vehicles";
import { categories } from "@/data/categories";

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return vehicles.slice(0, 4);
    return vehicles
      .filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.brand.toLowerCase().includes(q) ||
          v.category.replace(/-/g, " ").includes(q) ||
          v.powertrain.includes(q)
      )
      .slice(0, 6);
  }, [query]);

  const popular = categories.slice(0, 5);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-ink-950/80 px-4 pt-24 backdrop-blur-md sm:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-2xl overflow-hidden rounded-4xl border border-white/10 bg-ink-900/95 shadow-card"
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <Search className="h-5 w-5 text-white/40" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search vehicles, brands, categories…"
                className="w-full bg-transparent text-base text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-3">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/40">
                {query ? "Results" : "Popular models"}
              </p>
              {results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-white/50">
                  No vehicles match “{query}”.
                </p>
              )}
              <ul>
                {results.map((v) => (
                  <li key={v.slug}>
                    <Link
                      href={`/vehicles/${v.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-white/5"
                    >
                      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-white/5">
                        <Image
                          src={v.image}
                          alt={v.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-white">
                          {v.name}
                        </p>
                        <p className="text-xs capitalize text-white/50">
                          {v.powertrain} · {v.category.replace(/-/g, " ")}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-volt">
                        {formatPrice(v.price)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {!query && (
                <div className="mt-2 flex flex-wrap gap-2 border-t border-white/10 p-3">
                  {popular.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/vehicles?category=${c.slug}`}
                      onClick={onClose}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-volt/40 hover:text-white"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
