import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // VLT Motors brand system
        ink: {
          DEFAULT: "#0A0E14",
          50: "#f4f5f7",
          900: "#0A0E14",
          950: "#05070B",
        },
        volt: {
          DEFAULT: "#00E0A4", // electric teal-green — the "voltage" accent
          50: "#e6fff8",
          100: "#b3ffe9",
          200: "#66ffd1",
          300: "#1affbb",
          400: "#00e0a4",
          500: "#00b885",
          600: "#009168",
          700: "#006b4d",
          800: "#004533",
          900: "#00221a",
        },
        ember: {
          DEFAULT: "#FF6B2C", // warm accent for gasoline / promotions
          400: "#ff8b5c",
          500: "#FF6B2C",
          600: "#e0541a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(0, 224, 164, 0.45)",
        card: "0 24px 60px -24px rgba(0, 0, 0, 0.6)",
        soft: "0 10px 40px -12px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        shimmer: "shimmer 2s infinite",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
