"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup } from "@/components/Reveal";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/data/news";

export function NewsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="News & Promotions"
            title={
              <>
                What&apos;s new at <span className="text-volt">VLT Motors</span>
              </>
            }
          />
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-volt"
          >
            All news
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((p) => (
            <NewsCard key={p.slug} post={p} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
