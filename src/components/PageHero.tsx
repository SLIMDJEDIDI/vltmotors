import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  image: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-[72px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/30" />
      <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-30 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />

      <div className="container-px relative z-10 pb-14 pt-10">
        {breadcrumb && (
          <nav className="mb-5 flex items-center gap-1.5 text-xs text-white/50">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-1.5">
                {b.href ? (
                  <Link href={b.href} className="hover:text-volt">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && (
                  <ChevronRight className="h-3 w-3" />
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-white/65 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
