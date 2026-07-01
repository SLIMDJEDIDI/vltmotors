import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/Reveal";
import { VehicleCard } from "@/components/VehicleCard";
import { NewsCard } from "@/components/NewsCard";
import { MagneticButton } from "@/components/MagneticButton";
import { vehicles, formatPrice } from "@/data/vehicles";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Promotions",
  description:
    "Current promotions, special offers and limited-time deals on electric and gasoline vehicles at VLT Motors.",
};

export default function PromotionsPage() {
  const onSale = vehicles.filter((v) => v.oldPrice);
  const promoNews = news.filter((n) => n.kind === "Promotion");

  return (
    <>
      <PageHero
        eyebrow="Limited Time"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Promotions" }]}
        title={
          <>
            Offers worth <span className="text-volt">riding for</span>
          </>
        }
        description="Discover our current promotions and special deals. Hurry — these offers won't last long."
        image="https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Featured promo banner */}
      <section className="py-16">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-5xl border border-volt/20 bg-gradient-to-r from-volt/15 via-ink-900 to-ink-900 p-8 sm:p-12">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-volt/20 blur-3xl" />
              <div className="relative max-w-xl">
                <span className="eyebrow">Summer Electric Festival</span>
                <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                  0% financing on all electric scooters
                </h2>
                <p className="mt-4 text-white/65">
                   Ride away on any electric scooter with 0% interest over 18
                  months — plus a complimentary premium helmet. While stocks last.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <MagneticButton href="/vehicles?category=electric-scooters">
                    Shop e-scooters
                  </MagneticButton>
                  <MagneticButton href="/contact" variant="ghost">
                    Contact us
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* On sale */}
      <section className="py-12">
        <div className="container-px">
          <SectionHeading
            eyebrow="Price drops"
            title="Vehicles on promotion"
            description="Selected models at exclusive prices for a limited time."
          />
          {onSale.length > 0 ? (
            <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {onSale.map((v) => (
                <div key={v.slug} className="relative">
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-ember-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                    Save {formatPrice((v.oldPrice ?? v.price) - v.price)}
                  </span>
                  <VehicleCard vehicle={v} />
                </div>
              ))}
            </StaggerGroup>
          ) : (
            <p className="mt-8 text-white/50">No active price promotions right now.</p>
          )}
        </div>
      </section>

      {/* Promo news */}
      {promoNews.length > 0 && (
        <section className="py-16 pb-28">
          <div className="container-px">
            <SectionHeading eyebrow="Campaigns" title="Promotional events" />
            <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {promoNews.map((p) => (
                <NewsCard key={p.slug} post={p} />
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}
    </>
  );
}
