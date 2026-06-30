export type Dealer = {
  id: string;
  name: string;
  type: "Showroom" | "Service Center" | "Authorized Dealer";
  city: string;
  address: string;
  phone: string;
  hours: string;
  // Approximate coordinates used to position pins on the schematic map.
  lat: number;
  lng: number;
};

export const dealers: Dealer[] = [
  {
    id: "tunis-lac",
    name: "VLT Motors — Tunis Lac (Flagship)",
    type: "Showroom",
    city: "Tunis",
    address: "Avenue Habib Bourguiba, Les Berges du Lac 2, Tunis 1053",
    phone: "+216 71 000 200",
    hours: "Mon–Sat 9:00–19:00",
    lat: 36.832,
    lng: 10.232,
  },
  {
    id: "tunis-centre",
    name: "VLT Motors — Tunis Centre",
    type: "Showroom",
    city: "Tunis",
    address: "Avenue de la Liberté, Tunis 1002",
    phone: "+216 71 000 210",
    hours: "Mon–Sat 9:00–18:30",
    lat: 36.806,
    lng: 10.181,
  },
  {
    id: "ariana",
    name: "VLT Motors — Ariana",
    type: "Service Center",
    city: "Ariana",
    address: "Route de Raoued km 4, Ariana 2080",
    phone: "+216 71 000 220",
    hours: "Mon–Sat 8:30–18:00",
    lat: 36.866,
    lng: 10.193,
  },
  {
    id: "sousse",
    name: "VLT Motors — Sousse",
    type: "Showroom",
    city: "Sousse",
    address: "Avenue Khézama, Sousse 4051",
    phone: "+216 73 000 230",
    hours: "Mon–Sat 9:00–18:30",
    lat: 35.844,
    lng: 10.6,
  },
  {
    id: "sfax",
    name: "VLT Motors — Sfax (Service Flagship)",
    type: "Service Center",
    city: "Sfax",
    address: "Route de Tunis km 3, Sfax 3000",
    phone: "+216 74 000 240",
    hours: "Mon–Sat 8:30–18:00",
    lat: 34.74,
    lng: 10.76,
  },
  {
    id: "nabeul",
    name: "VLT Motors — Nabeul",
    type: "Authorized Dealer",
    city: "Nabeul",
    address: "Avenue Habib Thameur, Nabeul 8000",
    phone: "+216 72 000 250",
    hours: "Mon–Sat 9:00–18:00",
    lat: 36.456,
    lng: 10.738,
  },
  {
    id: "bizerte",
    name: "VLT Motors — Bizerte",
    type: "Authorized Dealer",
    city: "Bizerte",
    address: "Avenue Taieb Mhiri, Bizerte 7000",
    phone: "+216 72 000 260",
    hours: "Mon–Sat 9:00–18:00",
    lat: 37.274,
    lng: 9.873,
  },
  {
    id: "gabes",
    name: "VLT Motors — Gabès",
    type: "Authorized Dealer",
    city: "Gabès",
    address: "Avenue Farhat Hached, Gabès 6000",
    phone: "+216 75 000 270",
    hours: "Mon–Sat 9:00–18:00",
    lat: 33.881,
    lng: 10.098,
  },
  {
    id: "djerba",
    name: "VLT Motors — Djerba",
    type: "Authorized Dealer",
    city: "Djerba",
    address: "Route touristique, Houmt Souk, Djerba 4180",
    phone: "+216 75 000 280",
    hours: "Mon–Sat 9:00–18:00",
    lat: 33.875,
    lng: 10.857,
  },
];

export const dealerCities = Array.from(new Set(dealers.map((d) => d.city)));
