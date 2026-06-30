import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, StaggerGroup } from "@/components/Reveal";
import { FeatureCard, ProcessCard } from "@/components/FeatureCard";
import { MagneticButton } from "@/components/MagneticButton";
import { afterSales, whyChoose, process } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & After-Sales",
  description:
    "Maintenance, repairs, diagnostics, genuine spare parts, warranty services and technical support from VLT Motors' certified workshops across Tunisia.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={
          <>
            Expert care, <span className="text-volt">for the long run</span>
          </>
        }
        description="From routine maintenance to complex repairs, our factory-trained technicians keep your vehicle performing at its best — backed by genuine parts and real warranties."
        image="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Workshop services */}
      <section className="py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Workshop"
            title="Everything your vehicle needs"
            description="One trusted destination for the full lifecycle of your mobility."
          />
          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {afterSales.map((s) => (
              <FeatureCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Process */}
      <section className="py-12">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="From discovery to the open road"
          />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <ProcessCard
                key={p.step}
                step={p.step}
                title={p.title}
                description={p.description}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Our promise"
            title="Why thousands of riders trust VLT Motors"
          />
          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((f) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-px">
          <Reveal>
            <div className="card-surface flex flex-col items-center gap-6 p-10 text-center sm:p-14">
              <h2 className="max-w-xl text-2xl font-extrabold text-white sm:text-3xl">
                Need a service or repair? Book your appointment today.
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton href="/contact">Book a service</MagneticButton>
                <MagneticButton href="/contact" variant="ghost">
                  Talk to the workshop
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
