export type NewsKind = "Launch" | "Promotion" | "Event" | "Community";

export type NewsPost = {
  slug: string;
  title: string;
  kind: NewsKind;
  date: string; // ISO
  excerpt: string;
  cover: string;
  readingTime: number; // minutes
  body: string[]; // paragraphs
};

export const news: NewsPost[] = [
  {
    slug: "vlt-storm-r-launch",
    title: "The VLT Storm R arrives in Tunisia",
    kind: "Launch",
    date: "2026-06-10",
    excerpt:
      "Our flagship electric motorcycle is finally here — 160 km/h, 280 km of range and a launch price you won't want to miss.",
    cover:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1400&q=80",
    readingTime: 3,
    body: [
      "VLT Motors is proud to bring the VLT Storm R to Tunisia — the most advanced electric motorcycle we have ever offered. Tuned for North African roads, the Storm R delivers a 0–100 km/h sprint in just 3.4 seconds.",
      "With a 16 kWh liquid-cooled battery, riders enjoy up to 280 km of range and DC fast charging that takes the pack from 20% to 80% in 45 minutes. Three ride modes — plus a fully custom mode — adapt the machine to any journey.",
      "To celebrate the launch, the Storm R is available at a special introductory price across all VLT showrooms, with flexible financing from our banking partners. Book your test ride today and feel the future of mobility.",
    ],
  },
  {
    slug: "summer-electric-festival",
    title: "Summer Electric Festival: 0% financing on all e-scooters",
    kind: "Promotion",
    date: "2026-06-22",
    excerpt:
      "For a limited time, ride away on any electric scooter with 0% interest financing and a free helmet.",
    cover:
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1400&q=80",
    readingTime: 2,
    body: [
      "Summer is the perfect season to go electric. Throughout the VLT Summer Electric Festival, every electric scooter is available with 0% interest financing over 18 months and a complimentary premium helmet.",
      "Visit any of our nine showrooms across Tunisia, take a test ride, and our advisors will help you find the perfect model and plan. Offer valid while stocks last.",
    ],
  },
  {
    slug: "vlt-service-center-sfax",
    title: "New flagship service center opens in Sfax",
    kind: "Event",
    date: "2026-05-28",
    excerpt:
      "Our largest workshop yet brings certified diagnostics and genuine spare parts to the south.",
    cover:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1400&q=80",
    readingTime: 2,
    body: [
      "We're expanding. VLT Motors has opened a brand-new flagship service center in Sfax, equipped with certified diagnostic tooling, a full genuine spare-parts inventory and an expanded team of factory-trained technicians.",
      "The new center brings our total network to nine locations and reinforces our commitment to fast, professional after-sales support throughout Tunisia.",
    ],
  },
  {
    slug: "ride-clean-community-day",
    title: "Ride Clean: our first community day was a success",
    kind: "Community",
    date: "2026-05-12",
    excerpt:
      "Hundreds of riders joined us for a celebration of clean mobility, test rides and family fun.",
    cover:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=80",
    readingTime: 2,
    body: [
      "Thank you to the hundreds of riders and families who joined our first Ride Clean community day at Les Berges du Lac. Visitors enjoyed test rides across our full range, workshops on EV maintenance, and a celebration of sustainable mobility.",
      "We'll be hosting Ride Clean events across the country throughout the year — follow us on social media to find the next one near you.",
    ],
  },
  {
    slug: "adventure-400-now-available",
    title: "VLT Adventure 400: built to go further",
    kind: "Launch",
    date: "2026-04-30",
    excerpt:
      "Our new adventure-touring motorcycle is ready for the open roads of North Africa.",
    cover:
      "https://images.unsplash.com/photo-1591216105236-5ba2ba8c2b5e?auto=format&fit=crop&w=1400&q=80",
    readingTime: 3,
    body: [
      "The all-new VLT Adventure 400 is now available across our showrooms. With a torquey 398 cc parallel-twin, switchable off-road ABS and long-travel suspension, it's engineered to thrive on tarmac and trail alike.",
      "A 5-inch TFT display with turn-by-turn navigation, adjustable windscreen and standard crash protection make it the ideal companion for long journeys. Discover it today and book your test ride.",
    ],
  },
  {
    slug: "genuine-parts-guarantee",
    title: "Introducing our Genuine Parts Guarantee",
    kind: "Community",
    date: "2026-04-08",
    excerpt:
      "Every VLT repair now comes with certified genuine parts and a written warranty.",
    cover:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1400&q=80",
    readingTime: 2,
    body: [
      "Quality you can trust. Every service and repair performed at a VLT Motors workshop now uses certified genuine parts, backed by a written warranty. No surprises, no compromises.",
      "It's part of our commitment to giving every customer a premium ownership experience — long after the sale.",
    ],
  },
];

export const getPost = (slug: string) => news.find((n) => n.slug === slug);
