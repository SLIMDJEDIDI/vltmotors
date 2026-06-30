"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NewsCard } from "./NewsCard";
import { news, type NewsKind } from "@/data/news";

const kinds: ("All" | NewsKind)[] = [
  "All",
  "Launch",
  "Promotion",
  "Event",
  "Community",
];

export function NewsBrowser() {
  const [kind, setKind] = useState<(typeof kinds)[number]>("All");

  const filtered = useMemo(
    () =>
      [...news]
        .filter((n) => kind === "All" || n.kind === kind)
        .sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    [kind]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {kinds.map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              kind === k
                ? "border-volt bg-volt/15 text-volt"
                : "border-white/15 text-white/60 hover:border-white/30"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <NewsCard post={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
