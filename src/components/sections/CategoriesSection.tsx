"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { StaggerGroup } from "@/components/Reveal";
import { categories } from "@/data/categories";

export function CategoriesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The Range"
            title={
              <>
                A vehicle for every <span className="text-volt">journey</span>
              </>
            }
            description="From silent city scooters to heavy-duty cargo trikes — explore our full lineup of electric and gasoline mobility."
          />
        </div>

        {/* Editorial grid: two large + six standard */}
        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-1 lg:col-span-2 lg:row-span-2">
            <CategoryCard category={categories[1]} large />
          </div>
          <CategoryCard category={categories[0]} />
          <CategoryCard category={categories[4]} />
          <CategoryCard category={categories[2]} />
          <CategoryCard category={categories[5]} />
          <div className="md:col-span-1 lg:col-span-2">
            <CategoryCard category={categories[6]} large />
          </div>
          <CategoryCard category={categories[3]} />
          <CategoryCard category={categories[7]} />
        </StaggerGroup>
      </div>
    </section>
  );
}
