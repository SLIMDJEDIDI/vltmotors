import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-volt/10 blur-[120px]" />
      <LogoMark className="h-16 w-16" />
      <p className="mt-8 text-7xl font-extrabold text-white sm:text-8xl">404</p>
      <h1 className="mt-3 text-2xl font-bold text-white">
        This road doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-md text-white/55">
        The page you&apos;re looking for may have moved or never existed. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" /> Back home
        </Link>
        <Link href="/vehicles" className="btn-ghost">
          <ArrowLeft className="h-4 w-4" /> Browse vehicles
        </Link>
      </div>
    </div>
  );
}
