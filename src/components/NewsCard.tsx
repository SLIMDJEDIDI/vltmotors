"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { type NewsPost } from "@/data/news";
import { staggerItem } from "./Reveal";

const kindColor: Record<string, string> = {
  Launch: "text-volt bg-volt/15",
  Promotion: "text-ember-400 bg-ember-500/15",
  Event: "text-[#5BC2E7] bg-[#5BC2E7]/15",
  Community: "text-purple-300 bg-purple-400/15",
};

export function NewsCard({ post }: { post: NewsPost }) {
  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.article variants={staggerItem} className="h-full">
      <Link
        href={`/news/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/25"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
              kindColor[post.kind] ?? "text-white bg-white/15"
            }`}
          >
            {post.kind}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs text-white/45">
            <span>{date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readingTime} min read
            </span>
          </div>
          <h3 className="mt-3 text-lg font-bold leading-snug text-white transition-colors group-hover:text-volt">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm text-white/55">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-volt">
            Read more
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
