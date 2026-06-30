import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { DealersMap } from "@/components/DealersMap";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VLT Motors — phone, WhatsApp, email and showroom locations across Tunisia. Book a test ride or request a quote today.",
};

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${site.whatsapp}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title={
          <>
            Let&apos;s get you <span className="text-volt">riding</span>
          </>
        }
        description="Questions, quotes, test rides or service — our team is here to help. Reach out however suits you best."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 sm:py-20">
        <div className="container-px grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-white">
              Get in touch
            </h2>
            <p className="text-white/60">
              Prefer to talk? Call us or message us on WhatsApp — we typically
              reply within minutes during business hours.
            </p>

            <div className="space-y-3 pt-2">
              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                label="Call us"
                value={site.phoneDisplay}
                href={`tel:${site.phoneHref}`}
              />
              <ContactRow
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                value={site.whatsappDisplay}
                href={whatsappLink}
                external
              />
              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactRow
                icon={<MapPin className="h-5 w-5" />}
                label="Head office"
                value={site.address}
              />
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/[0.03] p-6">
              <p className="flex items-center gap-2 text-sm font-bold text-white">
                <Clock className="h-4 w-4 text-volt" /> Business hours
              </p>
              <dl className="mt-4 space-y-2 text-sm">
                {site.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between"
                  >
                    <dt className="text-white/55">{h.day}</dt>
                    <dd className="font-medium text-white">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Form */}
          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Locations"
            title="Find your nearest showroom"
          />
          <Reveal className="mt-12">
            <DealersMap />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-volt/30">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-volt/15 text-volt">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-white/40">{label}</p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="block"
    >
      {content}
    </a>
  );
}
