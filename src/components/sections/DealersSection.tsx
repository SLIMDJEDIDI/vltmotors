"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DealersMap } from "@/components/DealersMap";

export function DealersSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Find Us"
          title={
            <>
              Nine locations <span className="text-volt">across Tunisia</span>
            </>
          }
          description="Showrooms, service centers and authorized dealers — find your nearest VLT Motors point of contact."
        />
        <Reveal className="mt-12" delay={0.1}>
          <DealersMap />
        </Reveal>
      </div>
    </section>
  );
}
