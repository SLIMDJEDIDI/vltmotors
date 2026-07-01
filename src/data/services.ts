export type Feature = {
  icon: string; // lucide icon name
  title: string;
  description: string;
};

// "Why choose VLT Motors" pillars
export const whyChoose: Feature[] = [
  {
    icon: "BadgeCheck",
    title: "Official Dealership",
    description:
      "Authorized dealer for selected premium mobility brands, with full manufacturer backing.",
  },
  {
    icon: "Cog",
    title: "Genuine Spare Parts",
    description:
      "Certified original parts in stock, backed by our written Genuine Parts Guarantee.",
  },
  {
    icon: "Wrench",
    title: "Professional Workshop",
    description:
      "Factory-trained technicians and certified diagnostic tooling across all service centers.",
  },
  {
    icon: "ShieldCheck",
    title: "Warranty Support",
    description:
      "Comprehensive warranties — up to 5 years on batteries — with hassle-free claims.",
  },
  {
    icon: "Landmark",
    title: "Financing Options",
    description:
      "Flexible installment plans from leading partner banks, including 0% promotional offers.",
  },
  {
    icon: "Users",
    title: "Expert Service Team",
    description:
      "Knowledgeable advisors who guide you from first test ride to long-term ownership.",
  },
  {
    icon: "Truck",
    title: "Fast Delivery",
    description:
      "Quick nationwide delivery and on-site registration assistance to get you riding sooner.",
  },
  {
    icon: "HeartHandshake",
    title: "Customer Care",
    description:
      "Dedicated support by phone, WhatsApp and live chat, with a 98% satisfaction rating.",
  },
];

// After-sales workshop services
export const afterSales: Feature[] = [
  {
    icon: "Wrench",
    title: "Maintenance",
    description:
      "Scheduled servicing, fluid and brake checks, software updates and seasonal tune-ups.",
  },
  {
    icon: "Hammer",
    title: "Repairs",
    description:
      "Mechanical and electrical repairs by certified technicians using genuine parts.",
  },
  {
    icon: "Activity",
    title: "Diagnostics",
    description:
      "Advanced computer diagnostics for both electric drivetrains and gasoline engines.",
  },
  {
    icon: "Cog",
    title: "Spare Parts",
    description:
      "Extensive in-stock inventory of original components, accessories and consumables.",
  },
  {
    icon: "ShieldCheck",
    title: "Warranty Services",
    description:
      "Fast, transparent warranty handling with manufacturer-backed coverage.",
  },
  {
    icon: "Headphones",
    title: "Technical Support",
    description:
      "Expert advice and troubleshooting by phone, WhatsApp or in person.",
  },
];

// Differentiators used on the homepage "process" / stats areas
export const process = [
  {
    step: "01",
    title: "Discover",
    description: "Browse the full range online or visit a showroom for a guided tour.",
  },
  {
    step: "02",
    title: "Test Ride",
    description: "Book a free test ride and experience your shortlisted models first-hand.",
  },
  {
    step: "03",
    title: "Finance",
    description: "Simulate and choose the installment plan that fits your budget.",
  },
  {
    step: "04",
    title: "Ride",
    description: "Fast delivery, registration help and lifelong after-sales support.",
  },
];
