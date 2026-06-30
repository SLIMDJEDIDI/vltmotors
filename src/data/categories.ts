export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  icon: string; // lucide icon name
  powertrain: "electric" | "gasoline" | "mixed";
  startingPrice: number;
};

// Curated Unsplash imagery (free to use, stable CDN).
export const categories: Category[] = [
  {
    slug: "electric-scooters",
    name: "Electric Scooters",
    short: "City-ready electric scooters",
    description:
      "Silent, agile and zero-emission scooters built for the daily urban commute with smart connectivity and fast charging.",
    image:
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
    icon: "Zap",
    powertrain: "electric",
    startingPrice: 4990,
  },
  {
    slug: "electric-motorcycles",
    name: "Electric Motorcycles",
    short: "High-performance electric bikes",
    description:
      "Instant torque, refined handling and long range. Performance electric motorcycles for riders who want it all.",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
    icon: "Bike",
    powertrain: "electric",
    startingPrice: 12900,
  },
  {
    slug: "electric-bicycles",
    name: "Electric Bicycles",
    short: "Pedal-assist e-bikes",
    description:
      "Effortless pedal-assist e-bikes for commuting, leisure and fitness — light, foldable and beautifully engineered.",
    image:
      "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&w=1200&q=80",
    icon: "Bike",
    powertrain: "electric",
    startingPrice: 2790,
  },
  {
    slug: "electric-tricycles",
    name: "Electric Tricycles",
    short: "Stable 3-wheel mobility",
    description:
      "Comfortable, stable three-wheelers for passengers and light delivery — accessible mobility for everyone.",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
    icon: "Truck",
    powertrain: "electric",
    startingPrice: 8900,
  },
  {
    slug: "gas-motorcycles",
    name: "Gas Motorcycles",
    short: "Proven gasoline performance",
    description:
      "Reliable, fuel-efficient gasoline motorcycles for every journey — from city streets to open highways.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    icon: "Flame",
    powertrain: "gasoline",
    startingPrice: 6490,
  },
  {
    slug: "cargo-tricycles",
    name: "Cargo Tricycles",
    short: "3-wheel cargo workhorses",
    description:
      "Heavy-duty cargo tricycles engineered for businesses that move goods every day with maximum payload.",
    image:
      "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=1200&q=80",
    icon: "Truck",
    powertrain: "mixed",
    startingPrice: 9900,
  },
  {
    slug: "commercial-vehicles",
    name: "Commercial Vehicles",
    short: "Utility & fleet vehicles",
    description:
      "Versatile commercial utility vehicles for fleets, logistics and last-mile delivery with low running costs.",
    image:
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=1200&q=80",
    icon: "Truck",
    powertrain: "mixed",
    startingPrice: 18900,
  },
  {
    slug: "accessories",
    name: "Accessories & Parts",
    short: "Genuine gear & spare parts",
    description:
      "Helmets, chargers, batteries, apparel and genuine spare parts — everything to personalize and maintain your ride.",
    image:
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
    icon: "ShoppingBag",
    powertrain: "mixed",
    startingPrice: 49,
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
