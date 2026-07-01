export type FinancingPlan = {
  slug: string;
  name: string;
  partner: string;
  apr: number; // annual percentage rate, %
  minTerm: number; // months
  maxTerm: number; // months
  minDownPct: number; // minimum down payment %
  highlight: string;
  perks: string[];
  popular?: boolean;
};

export const financingPlans: FinancingPlan[] = [
  {
    slug: "flex-easy",
    name: "VLT Flex Easy",
    partner: "Banque de l'Habitat",
    apr: 6.9,
    minTerm: 12,
    maxTerm: 48,
    minDownPct: 10,
    highlight: "Lowest monthly payments",
    perks: [
      "From 10% down payment",
      "Up to 48 months",
      "Free first service included",
      "Decision in 48 hours",
    ],
    popular: true,
  },
  {
    slug: "zero-plus",
    name: "VLT Zero Plus",
    partner: "VLT Finance",
    apr: 0,
    minTerm: 6,
    maxTerm: 18,
    minDownPct: 30,
    highlight: "0% interest, short term",
    perks: [
      "0% APR promotional rate",
      "30% down payment",
      "6 to 18 months",
      "Selected electric models",
    ],
  },
  {
    slug: "business-fleet",
    name: "VLT Business Fleet",
    partner: "Amen Bank",
    apr: 5.5,
    minTerm: 24,
    maxTerm: 60,
    minDownPct: 15,
    highlight: "Built for companies & fleets",
    perks: [
      "Fleet discounts from 3 units",
      "Up to 60 months",
      "Maintenance package available",
      "VAT-optimized leasing",
    ],
  },
];

// Simple flat amortization used by the on-site simulator (illustrative only).
export function computeMonthlyPayment(
  principal: number,
  annualRatePct: number,
  termMonths: number
): number {
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / termMonths;
  const factor = Math.pow(1 + r, termMonths);
  return (principal * r * factor) / (factor - 1);
}

export const financingPartners = [
  "Banque de l'Habitat",
  "Amen Bank",
  "Attijari Bank",
  "VLT Finance",
  "BIAT",
];
