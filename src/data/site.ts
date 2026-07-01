// Central site configuration — edit these values to rebrand or update contact info.

export const site = {
  name: "VLT Motors",
  legalName: "VLT Motors SARL",
  tagline: "Ride the Future. Drive with Confidence.",
  description:
    "VLT Motors — premium electric and gasoline motorcycles, scooters, cargo tricycles and commercial vehicles in Tunisia.",
  url: "https://www.vltmotors.tn",
  locale: "en",
  currency: "TND",
  country: "Tunisia",
  email: "contact@vltmotors.tn",
  salesEmail: "sales@vltmotors.tn",
  phoneDisplay: "+216 71 000 200",
  phoneHref: "+21671000200",
  whatsappDisplay: "+216 50 000 200",
  whatsapp: "21650000200",
  address: "Avenue Habib Bourguiba, Les Berges du Lac 2, Tunis 1053, Tunisia",
  hours: [
    { day: "Monday – Friday", time: "09:00 – 19:00" },
    { day: "Saturday", time: "09:00 – 17:00" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com/vltmotors",
    instagram: "https://instagram.com/vltmotors",
    youtube: "https://youtube.com/@vltmotors",
    linkedin: "https://linkedin.com/company/vltmotors",
    tiktok: "https://tiktok.com/@vltmotors",
  },
  stats: [
    { value: 12, suffix: "+", label: "Years of expertise" },
    { value: 9, suffix: "", label: "Showrooms & service centers" },
    { value: 14000, suffix: "+", label: "Riders on the road" },
    { value: 98, suffix: "%", label: "Customer satisfaction" },
  ],
};

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Services", href: "/services" },

  { label: "Promotions", href: "/promotions" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
