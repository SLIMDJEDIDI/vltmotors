import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { VehicleDetail } from "@/components/VehicleDetail";
import {
  vehicles,
  getVehicle,
  getVehiclesByCategory,
  formatPrice,
} from "@/data/vehicles";
import { getCategory } from "@/data/categories";
import { site } from "@/data/site";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const v = getVehicle(params.slug);
  if (!v) return { title: "Vehicle not found" };
  return {
    title: v.name,
    description: `${v.name} — ${v.tagline} ${v.description.slice(0, 120)}`,
    openGraph: {
      title: `${v.name} · ${site.name}`,
      description: v.tagline,
      images: [{ url: v.image, width: 1400, height: 900, alt: v.name }],
    },
  };
}

export default function VehiclePage({
  params,
}: {
  params: { slug: string };
}) {
  const v = getVehicle(params.slug);
  if (!v) notFound();

  const category = getCategory(v.category);
  const related = getVehiclesByCategory(v.category)
    .filter((x) => x.slug !== v.slug)
    .concat(vehicles.filter((x) => x.category !== v.category && x.featured))
    .slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: v.name,
    description: v.tagline,
    brand: { "@type": "Brand", name: v.brand },
    image: v.image,
    offers: {
      "@type": "Offer",
      priceCurrency: "TND",
      price: v.price,
      availability: v.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: v.rating,
      reviewCount: v.reviews,
    },
  };

  return (
    <div className="pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="container-px pt-6">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
          <Link href="/" className="hover:text-volt">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/vehicles" className="hover:text-volt">
            Vehicles
          </Link>
          <ChevronRight className="h-3 w-3" />
          {category && (
            <>
              <Link
                href={`/vehicles?category=${category.slug}`}
                className="hover:text-volt"
              >
                {category.name}
              </Link>
              <ChevronRight className="h-3 w-3" />
            </>
          )}
          <span className="text-white/80">{v.name}</span>
        </nav>
      </div>

      <VehicleDetail vehicle={v} related={related} />
    </div>
  );
}
