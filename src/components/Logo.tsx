import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vltGrad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#1affbb" />
          <stop offset="100%" stopColor="#00b885" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="13"
        fill="#0A0E14"
        stroke="url(#vltGrad)"
        strokeWidth="1.5"
      />
      {/* Stylized "V" lightning bolt */}
      <path
        d="M14 13L22.5 33L24 24L26 33L34 13"
        stroke="url(#vltGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="37" r="1.8" fill="#00E0A4" />
    </svg>
  );
}

export function Logo({
  className = "",
  withText = true,
}: {
  className?: string;
  withText?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="VLT Motors — home"
    >
      <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:rotate-[-6deg]" />
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            VLT<span className="text-volt"> MOTORS</span>
          </span>
          <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Mobility Reinvented
          </span>
        </span>
      )}
    </Link>
  );
}
