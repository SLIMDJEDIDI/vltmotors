import {
  Zap,
  Bike,
  Truck,
  Flame,
  ShoppingBag,
  BadgeCheck,
  Cog,
  Wrench,
  ShieldCheck,
  Landmark,
  Users,
  HeartHandshake,
  Hammer,
  Activity,
  Headphones,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Zap,
  Bike,
  Truck,
  Flame,
  ShoppingBag,
  BadgeCheck,
  Cog,
  Wrench,
  ShieldCheck,
  Landmark,
  Users,
  HeartHandshake,
  Hammer,
  Activity,
  Headphones,
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Zap;
  return <Cmp className={className} />;
}
