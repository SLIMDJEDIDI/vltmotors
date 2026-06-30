import { Hero } from "@/components/sections/Hero";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedModels } from "@/components/sections/FeaturedModels";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { FinancingTeaser } from "@/components/sections/FinancingTeaser";
import { AfterSales } from "@/components/sections/AfterSales";
import { DealersSection } from "@/components/sections/DealersSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { NewsSection } from "@/components/sections/NewsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedModels />
      <WhyChoose />
      <FinancingTeaser />
      <AfterSales />
      <DealersSection />
      <Testimonials />
      <NewsSection />
      <CtaSection />
    </>
  );
}
