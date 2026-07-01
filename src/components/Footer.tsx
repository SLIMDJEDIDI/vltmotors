"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
} from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/data/site";
import { categories } from "@/data/categories";

const socials = [
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Instagram, href: site.social.instagram, label: "Instagram" },
  { icon: Youtube, href: site.social.youtube, label: "YouTube" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
];

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "News & Events", href: "/news" },
      { label: "Promotions", href: "/promotions" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Maintenance & Repairs", href: "/services" },
      { label: "Spare Parts", href: "/services" },
      { label: "Warranty Support", href: "/services" },
      { label: "Warranty Support", href: "/services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/contact" },
      { label: "Terms of Sale", href: "/contact" },
      { label: "Warranty Terms", href: "/services" },
      { label: "Cookies", href: "/contact" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-950">
      {/* Newsletter band */}
      <div className="container-px">
        <div className="card-surface relative -mt-32 mb-16 overflow-hidden rounded-5xl p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-volt/20 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Join the VLT community
              </h3>
              <p className="mt-3 max-w-md text-white/60">
                Be the first to know about new arrivals, exclusive promotions and
                events. No spam — just great mobility.
              </p>
            </div>
            <form onSubmit={subscribe} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-volt/50 focus:outline-none focus:ring-2 focus:ring-volt/30"
              />
              <button type="submit" className="btn-primary shrink-0">
                {subscribed ? (
                  <>
                    <Check className="h-4 w-4" /> Subscribed
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Subscribe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-px pb-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {site.description}
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-volt/40 hover:text-volt"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Vehicle categories */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Vehicles
            </h4>
            <ul className="mt-4 space-y-2.5">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/vehicles?category=${c.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-volt"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/60 transition-colors hover:text-volt"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
          >
            <Phone className="h-4 w-4 text-volt" /> {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
          >
            <Mail className="h-4 w-4 text-volt" /> {site.email}
          </a>
          <span className="flex items-center gap-3 text-sm text-white/70">
            <MapPin className="h-4 w-4 text-volt" /> {site.address}
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            Premium Mobility Dealership · Made in {site.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
