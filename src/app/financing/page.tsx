import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FinancingCalculator } from "@/components/FinancingCalculator";
import { FinancingPlans } from "@/components/FinancingPlans";
import { FaqAccordion, type Faq } from "@/components/FaqAccordion";
import { financingPartners } from "@/data/financing";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Flexible financing and installment plans from leading partner banks. Simulate your monthly payment and apply online with VLT Motors.",
};

const faqs: Faq[] = [
  {
    q: "Who can apply for financing?",
    a: "Any resident of Tunisia with a stable income can apply. You'll typically need a national ID, proof of income (payslips or bank statements) and proof of address. Our advisors will guide you through the exact documents for your chosen plan.",
  },
  {
    q: "How long does approval take?",
    a: "Most applications receive a decision within 48 hours. The VLT Zero Plus in-house plan can often be approved on the same day for eligible customers.",
  },
  {
    q: "Can I pay off my loan early?",
    a: "Yes. All our partner plans allow early repayment. Depending on the bank, a small administrative fee may apply — your advisor will explain the terms before you sign.",
  },
  {
    q: "Do you finance businesses and fleets?",
    a: "Absolutely. The VLT Business Fleet plan is designed for companies, with fleet discounts from three units, VAT-optimized leasing and optional maintenance packages.",
  },
  {
    q: "Is the simulator's estimate final?",
    a: "The on-site simulator gives a close illustrative estimate. Final monthly payments, rates and fees are confirmed by the partner bank after your application is approved.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Financing" }]}
        title={
          <>
            Drive now, <span className="text-volt">pay your way</span>
          </>
        }
        description="Spread the cost of your new vehicle with flexible installment plans from Tunisia's leading banks — including 0% interest promotions."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Calculator */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Simulator"
            title="Simulate your monthly payment"
            description="Move the sliders to see exactly what your ride could cost each month. No commitment, no credit check."
          />
          <Reveal className="mt-10">
            <FinancingCalculator defaultPrice={12900} />
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Plans"
            title="Choose the plan that fits"
          />
          <div className="mt-12">
            <FinancingPlans />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container-px">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Our banking & finance partners
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {financingPartners.map((p) => (
              <span
                key={p}
                className="text-lg font-bold tracking-tight text-white/40 transition-colors hover:text-white/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 pb-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Financing, explained"
          />
          <Reveal className="mt-10">
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
