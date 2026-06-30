import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { NewsBrowser } from "@/components/NewsBrowser";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "The latest from VLT Motors — new arrivals, promotions, events, product launches and community activities.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
        title={
          <>
            News, launches & <span className="text-volt">events</span>
          </>
        }
        description="Stay in the loop with everything happening at VLT Motors — from new model launches to community rides."
        image="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-16 sm:py-20">
        <div className="container-px">
          <NewsBrowser />
        </div>
      </section>
    </>
  );
}
