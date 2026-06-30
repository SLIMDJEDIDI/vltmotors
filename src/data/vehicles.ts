export type SpecGroup = {
  label: string;
  value: string;
};

export type ColorOption = {
  name: string;
  hex: string;
};

export type Vehicle = {
  slug: string;
  name: string;
  brand: string;
  category: string; // category slug
  powertrain: "electric" | "gasoline";
  tagline: string;
  description: string;
  price: number; // TND
  oldPrice?: number; // TND, when on promo
  featured: boolean;
  isNew: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  // Headline numeric specs used on cards & filters
  topSpeed: number; // km/h
  range: number; // km (for electric) or km/full tank (gasoline) — kept generic as "autonomy"
  motorPower: number; // kW (electric) or cc -> normalized; we store kW for electric, displacement for gas in `displacement`
  battery?: number; // kWh
  displacement?: number; // cc (gasoline)
  payload?: number; // kg (cargo/commercial)
  wheels: number;
  chargingTime?: string;
  intendedUse: ("urban" | "touring" | "delivery" | "leisure" | "fleet")[];
  colors: ColorOption[];
  features: string[];
  specs: SpecGroup[];
  image: string; // hero / card
  gallery: string[];
};

export const vehicles: Vehicle[] = [
  {
    slug: "voltrop-pulse-s",
    name: "Voltrop Pulse S",
    brand: "Voltrop",
    category: "electric-scooters",
    powertrain: "electric",
    tagline: "The smart city scooter, reinvented.",
    description:
      "The Pulse S is built for the modern commute — silent, swift and effortlessly connected. A removable battery charges anywhere, while the full-color TFT display and app integration keep you in control. Designed in-house by Voltrop Industries and serviced by VLT Motors' certified workshop.",
    price: 5490,
    featured: true,
    isNew: true,
    inStock: true,
    rating: 4.8,
    reviews: 126,
    topSpeed: 75,
    range: 110,
    motorPower: 4,
    battery: 2.5,
    wheels: 2,
    chargingTime: "3.5 h (0–100%)",
    intendedUse: ["urban", "leisure"],
    colors: [
      { name: "Voltrop Teal", hex: "#00E0A4" },
      { name: "Midnight", hex: "#0A0E14" },
      { name: "Pearl White", hex: "#EDEFF2" },
      { name: "Signal Red", hex: "#D62839" },
    ],
    features: [
      "Removable 2.5 kWh battery",
      "6.5\" color TFT display",
      "Smartphone app & GPS tracking",
      "Regenerative braking",
      "Keyless start & anti-theft alarm",
      "LED matrix lighting",
    ],
    specs: [
      { label: "Top speed", value: "75 km/h" },
      { label: "Range (WLTP)", value: "110 km" },
      { label: "Motor power", value: "4 kW peak" },
      { label: "Battery", value: "2.5 kWh removable" },
      { label: "Charging time", value: "3.5 h" },
      { label: "Weight", value: "92 kg" },
      { label: "Brakes", value: "Dual CBS discs" },
      { label: "Warranty", value: "3 years / battery 2 years" },
    ],
    image:
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "voltrop-storm-r",
    name: "Voltrop Storm R",
    brand: "Voltrop",
    category: "electric-motorcycles",
    powertrain: "electric",
    tagline: "Instant torque. Endless thrill.",
    description:
      "The Storm R is Voltrop's flagship electric motorcycle — a statement of performance and design. Instant torque delivers a 0–100 km/h sprint in 3.4 seconds, while a 16 kWh battery offers genuine touring range. Three ride modes adapt the machine to city, sport or eco riding.",
    price: 24900,
    oldPrice: 27500,
    featured: true,
    isNew: true,
    inStock: true,
    rating: 4.9,
    reviews: 84,
    topSpeed: 160,
    range: 280,
    motorPower: 60,
    battery: 16,
    wheels: 2,
    chargingTime: "45 min (fast DC 20–80%)",
    intendedUse: ["urban", "touring", "leisure"],
    colors: [
      { name: "Phantom Black", hex: "#0A0E14" },
      { name: "Volt Green", hex: "#00E0A4" },
      { name: "Storm Grey", hex: "#5A6472" },
    ],
    features: [
      "0–100 km/h in 3.4 s",
      "16 kWh liquid-cooled battery",
      "DC fast charging",
      "Three ride modes + custom",
      "Brembo brakes & USD forks",
      "Cornering ABS & traction control",
    ],
    specs: [
      { label: "Top speed", value: "160 km/h" },
      { label: "Range (WLTP)", value: "280 km" },
      { label: "Motor power", value: "60 kW (80 hp)" },
      { label: "0–100 km/h", value: "3.4 s" },
      { label: "Battery", value: "16 kWh" },
      { label: "Fast charge", value: "20–80% in 45 min" },
      { label: "Weight", value: "196 kg" },
      { label: "Warranty", value: "3 years / battery 5 years" },
    ],
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "voltrop-glide-e",
    name: "Voltrop Glide E",
    brand: "Voltrop",
    category: "electric-bicycles",
    powertrain: "electric",
    tagline: "Effortless miles, every day.",
    description:
      "The Glide E pairs a smooth mid-drive motor with a featherweight aluminium frame. Whether commuting or exploring, the torque sensor delivers natural, responsive assistance, and the integrated battery disappears into the downtube for a clean silhouette.",
    price: 3290,
    featured: false,
    isNew: false,
    inStock: true,
    rating: 4.7,
    reviews: 203,
    topSpeed: 25,
    range: 90,
    motorPower: 0.25,
    battery: 0.5,
    wheels: 2,
    chargingTime: "4 h",
    intendedUse: ["urban", "leisure"],
    colors: [
      { name: "Sand", hex: "#D7C7A8" },
      { name: "Forest", hex: "#2E4034" },
      { name: "Charcoal", hex: "#2A2E35" },
    ],
    features: [
      "Mid-drive torque-sensing motor",
      "Integrated 500 Wh battery",
      "Hydraulic disc brakes",
      "Backlit LCD display",
      "Puncture-resistant tires",
      "Only 19 kg",
    ],
    specs: [
      { label: "Assist speed", value: "25 km/h" },
      { label: "Range", value: "90 km" },
      { label: "Motor", value: "250 W mid-drive" },
      { label: "Battery", value: "500 Wh integrated" },
      { label: "Charging time", value: "4 h" },
      { label: "Weight", value: "19 kg" },
      { label: "Gears", value: "Shimano 9-speed" },
      { label: "Warranty", value: "2 years" },
    ],
    image:
      "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "voltrop-carry-3",
    name: "Voltrop Carry 3",
    brand: "Voltrop",
    category: "electric-tricycles",
    powertrain: "electric",
    tagline: "Stable, spacious, electric.",
    description:
      "The Carry 3 is a versatile electric tricycle for passengers or light cargo. Its low floor, reverse gear and wide stance make it ideal for accessible urban mobility, while the silent electric drivetrain keeps running costs minimal.",
    price: 9900,
    featured: false,
    isNew: false,
    inStock: true,
    rating: 4.6,
    reviews: 47,
    topSpeed: 55,
    range: 120,
    motorPower: 5,
    battery: 5,
    payload: 350,
    wheels: 3,
    chargingTime: "6 h",
    intendedUse: ["urban", "delivery"],
    colors: [
      { name: "Pearl White", hex: "#EDEFF2" },
      { name: "Voltrop Teal", hex: "#00E0A4" },
    ],
    features: [
      "350 kg payload",
      "Reverse gear",
      "Low-floor easy access",
      "Differential rear axle",
      "Weatherproof cabin option",
      "Hydraulic brakes",
    ],
    specs: [
      { label: "Top speed", value: "55 km/h" },
      { label: "Range", value: "120 km" },
      { label: "Motor power", value: "5 kW" },
      { label: "Battery", value: "5 kWh" },
      { label: "Payload", value: "350 kg" },
      { label: "Charging time", value: "6 h" },
      { label: "Wheels", value: "3" },
      { label: "Warranty", value: "3 years" },
    ],
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "vlt-roadster-250",
    name: "VLT Roadster 250",
    brand: "VLT Motors",
    category: "gas-motorcycles",
    powertrain: "gasoline",
    tagline: "Classic feel, modern reliability.",
    description:
      "The Roadster 250 blends timeless styling with a refined, fuel-efficient single-cylinder engine. Comfortable ergonomics, fuel injection and a generous tank make it the perfect companion for both city streets and weekend escapes.",
    price: 8490,
    featured: true,
    isNew: false,
    inStock: true,
    rating: 4.6,
    reviews: 158,
    topSpeed: 135,
    range: 380,
    motorPower: 18,
    displacement: 249,
    wheels: 2,
    intendedUse: ["urban", "touring"],
    colors: [
      { name: "Racing Green", hex: "#1F3D2B" },
      { name: "Matte Black", hex: "#1A1C20" },
      { name: "Chrome Silver", hex: "#C7CCD1" },
    ],
    features: [
      "249 cc fuel-injected engine",
      "Dual-channel ABS",
      "LED lighting throughout",
      "Digital-analog cluster",
      "USB charging port",
      "14 L fuel tank",
    ],
    specs: [
      { label: "Top speed", value: "135 km/h" },
      { label: "Displacement", value: "249 cc" },
      { label: "Power", value: "18 kW (24 hp)" },
      { label: "Range / tank", value: "~380 km" },
      { label: "Fuel system", value: "EFI" },
      { label: "Tank", value: "14 L" },
      { label: "Weight", value: "152 kg" },
      { label: "Warranty", value: "2 years" },
    ],
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1591216105236-5ba2ba8c2b5e?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "vlt-adventure-400",
    name: "VLT Adventure 400",
    brand: "VLT Motors",
    category: "gas-motorcycles",
    powertrain: "gasoline",
    tagline: "Built to go further.",
    description:
      "An adventure-touring machine that thrives on tarmac and trail alike. The Adventure 400 offers long-travel suspension, switchable ABS, and a torquey twin engine — ready for the open roads of North Africa and beyond.",
    price: 14900,
    featured: false,
    isNew: true,
    inStock: true,
    rating: 4.8,
    reviews: 62,
    topSpeed: 165,
    range: 420,
    motorPower: 30,
    displacement: 398,
    wheels: 2,
    intendedUse: ["touring", "leisure"],
    colors: [
      { name: "Desert Sand", hex: "#C9A66B" },
      { name: "Phantom Black", hex: "#0A0E14" },
      { name: "Rally Orange", hex: "#FF6B2C" },
    ],
    features: [
      "398 cc parallel-twin",
      "Switchable off-road ABS",
      "Long-travel suspension",
      "5\" TFT with navigation",
      "Adjustable windscreen",
      "Crash bars & skid plate",
    ],
    specs: [
      { label: "Top speed", value: "165 km/h" },
      { label: "Displacement", value: "398 cc" },
      { label: "Power", value: "30 kW (40 hp)" },
      { label: "Range / tank", value: "~420 km" },
      { label: "Ground clearance", value: "210 mm" },
      { label: "Tank", value: "18 L" },
      { label: "Weight", value: "178 kg" },
      { label: "Warranty", value: "2 years" },
    ],
    image:
      "https://images.unsplash.com/photo-1591216105236-5ba2ba8c2b5e?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591216105236-5ba2ba8c2b5e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "voltrop-hauler-x",
    name: "Voltrop Hauler X",
    brand: "Voltrop",
    category: "cargo-tricycles",
    powertrain: "electric",
    tagline: "Your business, fully charged.",
    description:
      "The Hauler X is a heavy-duty electric cargo tricycle engineered for relentless daily work. A 600 kg payload, reinforced steel bed and swappable batteries keep your operation moving with near-zero running costs.",
    price: 11900,
    featured: true,
    isNew: false,
    inStock: true,
    rating: 4.7,
    reviews: 38,
    topSpeed: 50,
    range: 100,
    motorPower: 6,
    battery: 6,
    payload: 600,
    wheels: 3,
    chargingTime: "7 h / swappable",
    intendedUse: ["delivery", "fleet"],
    colors: [
      { name: "Work White", hex: "#EDEFF2" },
      { name: "Safety Yellow", hex: "#F2C200" },
    ],
    features: [
      "600 kg payload",
      "Swappable battery packs",
      "Reinforced steel cargo bed",
      "Hydraulic dump option",
      "Reverse gear & parking brake",
      "Fleet telematics ready",
    ],
    specs: [
      { label: "Top speed", value: "50 km/h" },
      { label: "Range", value: "100 km" },
      { label: "Motor power", value: "6 kW" },
      { label: "Battery", value: "6 kWh swappable" },
      { label: "Payload", value: "600 kg" },
      { label: "Bed size", value: "1.8 × 1.2 m" },
      { label: "Wheels", value: "3" },
      { label: "Warranty", value: "3 years" },
    ],
    image:
      "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "voltrop-transit-van",
    name: "Voltrop Transit Van",
    brand: "Voltrop",
    category: "commercial-vehicles",
    powertrain: "electric",
    tagline: "Electrify your fleet.",
    description:
      "A compact electric utility van for last-mile logistics. The Transit Van combines a generous cargo volume with low total cost of ownership, fast charging and a comfortable, modern cabin your drivers will love.",
    price: 24900,
    featured: false,
    isNew: true,
    inStock: false,
    rating: 4.5,
    reviews: 19,
    topSpeed: 90,
    range: 220,
    motorPower: 70,
    battery: 42,
    payload: 1000,
    wheels: 4,
    chargingTime: "1 h (DC 20–80%)",
    intendedUse: ["delivery", "fleet"],
    colors: [
      { name: "Fleet White", hex: "#EDEFF2" },
      { name: "Steel Grey", hex: "#5A6472" },
    ],
    features: [
      "1,000 kg payload",
      "4.2 m³ cargo volume",
      "DC fast charging",
      "Heat-pump climate control",
      "Reversing camera & sensors",
      "Fleet management suite",
    ],
    specs: [
      { label: "Top speed", value: "90 km/h" },
      { label: "Range", value: "220 km" },
      { label: "Motor power", value: "70 kW" },
      { label: "Battery", value: "42 kWh" },
      { label: "Payload", value: "1,000 kg" },
      { label: "Cargo volume", value: "4.2 m³" },
      { label: "Fast charge", value: "20–80% in 1 h" },
      { label: "Warranty", value: "4 years / 100,000 km" },
    ],
    image:
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "voltrop-pulse-lite",
    name: "Voltrop Pulse Lite",
    brand: "Voltrop",
    category: "electric-scooters",
    powertrain: "electric",
    tagline: "Your first electric ride.",
    description:
      "An accessible, license-friendly electric scooter perfect for students and new riders. The Pulse Lite keeps things simple, affordable and fun without sacrificing Voltrop quality and safety.",
    price: 4990,
    oldPrice: 5490,
    featured: false,
    isNew: false,
    inStock: true,
    rating: 4.5,
    reviews: 211,
    topSpeed: 45,
    range: 70,
    motorPower: 2,
    battery: 1.5,
    wheels: 2,
    chargingTime: "3 h",
    intendedUse: ["urban"],
    colors: [
      { name: "Sky Blue", hex: "#5BC2E7" },
      { name: "Coral", hex: "#FF6B6B" },
      { name: "Midnight", hex: "#0A0E14" },
    ],
    features: [
      "License-friendly 45 km/h",
      "Removable 1.5 kWh battery",
      "LED display",
      "Under-seat storage",
      "Anti-theft alarm",
      "Only 78 kg",
    ],
    specs: [
      { label: "Top speed", value: "45 km/h" },
      { label: "Range", value: "70 km" },
      { label: "Motor power", value: "2 kW" },
      { label: "Battery", value: "1.5 kWh removable" },
      { label: "Charging time", value: "3 h" },
      { label: "Weight", value: "78 kg" },
      { label: "Brakes", value: "CBS discs" },
      { label: "Warranty", value: "2 years" },
    ],
    image:
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "vlt-commuter-125",
    name: "VLT Commuter 125",
    brand: "VLT Motors",
    category: "gas-motorcycles",
    powertrain: "gasoline",
    tagline: "Economy that never quits.",
    description:
      "The Commuter 125 is the dependable everyday workhorse — remarkably fuel-efficient, easy to ride and built to last. Low maintenance and even lower running costs make it Tunisia's smart daily choice.",
    price: 6490,
    featured: false,
    isNew: false,
    inStock: true,
    rating: 4.4,
    reviews: 287,
    topSpeed: 100,
    range: 450,
    motorPower: 8,
    displacement: 124,
    wheels: 2,
    intendedUse: ["urban"],
    colors: [
      { name: "Matte Black", hex: "#1A1C20" },
      { name: "Royal Blue", hex: "#1C3FAA" },
      { name: "Signal Red", hex: "#D62839" },
    ],
    features: [
      "124 cc fuel-injected engine",
      "Up to 2.2 L/100 km",
      "Front disc brake + CBS",
      "Tubeless tires",
      "Digital cluster",
      "Spacious dual seat",
    ],
    specs: [
      { label: "Top speed", value: "100 km/h" },
      { label: "Displacement", value: "124 cc" },
      { label: "Power", value: "8 kW (11 hp)" },
      { label: "Consumption", value: "2.2 L/100 km" },
      { label: "Range / tank", value: "~450 km" },
      { label: "Tank", value: "11 L" },
      { label: "Weight", value: "118 kg" },
      { label: "Warranty", value: "2 years" },
    ],
    image:
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

export const getVehicle = (slug: string) =>
  vehicles.find((v) => v.slug === slug);

export const getVehiclesByCategory = (categorySlug: string) =>
  vehicles.filter((v) => v.category === categorySlug);

export const featuredVehicles = vehicles.filter((v) => v.featured);

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("fr-TN", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value) + " TND";
