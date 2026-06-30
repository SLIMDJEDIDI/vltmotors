"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export function CtaSection() {
  return (
    <section className="relative py-12">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=2000&q=80"
              alt="Open road"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/40" />
            <div className="absolute -right-20 top-0 h-full w-1/2 bg-volt/10 blur-[100px]" />

            <div className="relative px-7 py-16 sm:px-14 sm:py-24 lg:px-20">
              <span className="eyebrow">Ready when you are</span>
              <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Your next ride is one test ride away
              </h2>
              <p className="mt-5 max-w-lg text-white/65">
                Visit a showroom, book a free test ride, or talk to an advisor
                today. The VLT Motors team is ready to help you find the perfect
                vehicle.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <MagneticButton href="/contact">Book a Test Ride</MagneticButton>
                <MagneticButton href="/vehicles" variant="ghost">
                  Browse the range
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
