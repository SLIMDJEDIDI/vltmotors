"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import { type Category } from "@/data/categories";
import { staggerItem } from "./Reveal";

export function CategoryCard({
  category,
  large = false,
}: {
  category: Category;
  large?: boolean;
}) {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Link
        href={`/vehicles?category=${category.slug}`}
        className={`group relative block h-full overflow-hidden rounded-4xl border border-white/10 ${
          large ? "min-h-[420px]" : "min-h-[260px]"
        }`}
      >
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent transition-opacity duration-500 group-hover:from-ink-950/95" />

        <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-ink-950/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
          {category.powertrain === "electric"
            ? "Electric"
            : category.powertrain === "gasoline"
              ? "Gasoline"
              : "Electric & Gas"}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-volt/15 text-volt ring-1 ring-volt/30 backdrop-blur transition-colors group-hover:bg-volt group-hover:text-ink-950">
            <Icon name={category.icon} className="h-5 w-5" />
          </span>
          <h3
            className={`mt-4 font-extrabold leading-tight text-white ${
              large ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {category.name}
          </h3>
          <p className="mt-2 max-w-md text-sm text-white/60">
            {large ? category.description : category.short}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-volt opacity-0 transition-all duration-300 group-hover:opacity-100">
            Explore range{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
