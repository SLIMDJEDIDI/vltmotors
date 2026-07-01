export type Testimonial = {
  name: string;
  role: string;
  city: string;
  rating: number;
  quote: string;
  avatar: string;
  vehicle?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Yassine Ben Salah",
    role: "Daily commuter",
    city: "Tunis",
    rating: 5,
    quote:
      "I switched to electric and never looked back. Charging at home costs almost nothing and the app makes everything effortless. The VLT showroom experience felt like buying a luxury car.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    vehicle: "VLT Pulse S",
  },
  {
    name: "Amira Trabelsi",
    role: "Architect",
    city: "Sousse",
    rating: 5,
    quote:
      "The Storm R is simply spectacular. The torque is addictive and the build quality rivals anything I've seen in Europe. The after-sales team is responsive and genuinely knowledgeable.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    vehicle: "VLT Storm R",
  },
  {
    name: "Mehdi Karoui",
    role: "Delivery business owner",
    city: "Sfax",
    rating: 5,
    quote:
      "We run four Hauler X cargo trikes now. Running costs dropped by more than half compared to our old gasoline fleet, and the swappable batteries keep us moving all day.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    vehicle: "VLT Hauler X",
  },
  {
    name: "Sonia Gharbi",
    role: "University student",
    city: "Tunis",
    rating: 4,
    quote:
      "My Pulse Lite was affordable and the financing made it easy. Staff explained everything clearly and the free first service was a lovely touch.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    vehicle: "VLT Pulse Lite",
  },
  {
    name: "Khaled Mansour",
    role: "Weekend rider",
    city: "Bizerte",
    rating: 5,
    quote:
      "The Adventure 400 took me across the north coast without a single complaint. VLT Motors prepped the bike perfectly and the warranty gives me real peace of mind.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    vehicle: "VLT Adventure 400",
  },
  {
    name: "Ines Bouaziz",
    role: "Marketing manager",
    city: "Nabeul",
    rating: 5,
    quote:
      "From the first test ride to delivery, everything was seamless and premium. This is how buying a vehicle should feel. Highly recommend the whole VLT team.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    vehicle: "VLT Glide E",
  },
];
