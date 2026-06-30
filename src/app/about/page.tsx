import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/Reveal";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MagneticButton } from "@/components/MagneticButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VLT Motors is the official dealership for Voltrop Industries — on a mission to make premium electric and gasoline mobility accessible across Tunisia and North Africa.",
};

const values = [
  {
    icon: "Zap",
    title: "Innovation first",
    description:
      "We champion the latest mobility technology, bringing tomorrow's vehicles to today's riders.",
  },
  {
    icon: "ShieldCheck",
    title: "Trust & transparency",
    description:
      "Honest pricing, genuine parts and real warranties. No surprises — ever.",
  },
  {
    icon: "HeartHandshake",
    title: "Customer obsession",
    description:
      "Every decision starts with the rider. A 98% satisfaction rating keeps us honest.",
  },
  {
    icon: "Truck",
    title: "Sustainable mobility",
    description:
      "We believe clean, efficient transport should be the obvious choice for everyone.",
  },
];

const timeline = [
  { year: "2014", text: "VLT Motors opens its first showroom in Tunis." },
  { year: "2018", text: "Becomes official dealership for Voltrop Industries." },
  { year: "2021", text: "Launches its certified electric service network." },
  { year: "2024", text: "Expands to nine locations nationwide." },
  { year: "2026", text: "Begins regional expansion across North Africa." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        title={
          <>
            Driving the future of <span className="text-volt">mobility</span>
          </>
        }
        description="We're more than a dealership. We're a team obsessed with making premium, sustainable mobility accessible to everyone in Tunisia and beyond."
        image="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80"
                alt="VLT Motors showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="From a single showroom to a national network"
            />
            <div className="mt-6 space-y-4 text-white/65">
              <p>
                Founded in 2014, VLT Motors set out with a simple belief: buying
                a motorcycle or scooter should feel as premium as buying a luxury
                car. We obsessed over every detail — from the showroom experience
                to the after-sales workshop.
              </p>
              <p>
                As the official dealership for Voltrop Industries, we now offer
                the most complete range of electric and gasoline mobility in the
                country, supported by certified technicians and genuine parts.
              </p>
              <p>
                Today we&apos;re proud to serve more than 14,000 riders across nine
                locations — and we&apos;re just getting started.
              </p>
            </div>
            <div className="mt-8">
              <MagneticButton href="/vehicles">Explore our range</MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-12">
        <div className="container-px">
          <Reveal>
            <div className="grid gap-6 rounded-5xl border border-white/10 bg-gradient-to-r from-volt/[0.08] to-transparent p-10 sm:grid-cols-2 lg:grid-cols-4">
              {site.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-4xl font-extrabold text-volt sm:text-5xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="Our values"
          />
          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <FeatureCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                description={v.description}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 pb-28">
        <div className="container-px">
          <SectionHeading align="center" eyebrow="Our journey" title="Milestones" />
          <Reveal className="mx-auto mt-12 max-w-2xl">
            {timeline.map((t) => (
              <TimelineRow key={t.year} year={t.year} text={t.text} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function TimelineRow({ year, text }: { year: string; text: string }) {
  return (
    <div className="relative flex gap-6 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <span className="flex h-3 w-3 shrink-0 rounded-full bg-volt ring-4 ring-volt/20" />
        <span className="mt-1 w-px flex-1 bg-white/10" />
      </div>
      <div className="-mt-1 pb-2">
        <p className="text-lg font-extrabold text-volt">{year}</p>
        <p className="mt-1 text-white/65">{text}</p>
      </div>
    </div>
  );
}
