import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VehicleBrowser } from "@/components/VehicleBrowser";
import { getCategory } from "@/data/categories";

export const metadata: Metadata = {
  title: "Vehicles",
  description:
    "Browse the full VLT Motors range — electric and gasoline motorcycles, scooters, e-bikes, tricycles and commercial vehicles. Filter by price, range, power and more.",
};

export default function VehiclesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const cat = searchParams.category ? getCategory(searchParams.category) : null;

  return (
    <>
      <PageHero
        eyebrow="The Range"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Vehicles" }]}
        title={cat ? cat.name : "Find your perfect ride"}
        description={
          cat
            ? cat.description
            : "Explore our complete lineup of premium electric and gasoline mobility. Use the filters to find the vehicle that fits your life."
        }
        image="https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=2000&q=80"
      />
      <VehicleBrowser initialCategory={searchParams.category ?? "all"} />
    </>
  );
}
