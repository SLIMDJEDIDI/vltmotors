# VLT Motors — Premium Mobility Dealership

A turnkey, premium dealership website for **VLT Motors**, official dealer for Voltrop Industries and selected mobility brands in Tunisia.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis**.

---

## 🚀 Quick start

```bash
npm install      # already done
npm run dev      # start the dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

That's it — the site ships fully seeded with vehicles, prices, news, dealers, testimonials and financing data. No database or API keys required to run.

---

## ✨ What's included

- **Cinematic homepage** — animated hero, category grid, featured-models carousel, "why choose", financing simulator, after-sales, dealer map, testimonials, news.
- **Vehicle catalog** (`/vehicles`) — live filtering by category, powertrain, price, top speed, range, wheels and intended use, with sorting and a mobile filter drawer.
- **Vehicle detail pages** (`/vehicles/[slug]`) — gallery, color picker, spec/feature tabs, financing calculator, quote/test-ride dialogs, related models, Product structured data.
- **Financing** (`/financing`) — interactive monthly-payment simulator, plan cards, partner banks, FAQ accordion.
- **Services, Promotions, News (list + article), About, Contact** — all fully designed.
- **Premium UX** — Lenis smooth scroll, scroll-reveal animations, magnetic buttons, animated counters, page transitions, branded loading screen, glassmorphism, floating WhatsApp/contact dock.
- **SEO** — dynamic metadata, Open Graph, JSON-LD (Organization, Product, NewsArticle), `sitemap.xml`, `robots.txt`, web manifest, favicon.
- **Accessibility & performance** — semantic markup, focus states, reduced-motion support, `next/image` optimization, mostly static pre-rendering.

---

## 🗂 Where the content lives (your CMS)

All editable content is in plain TypeScript files under [`src/data/`](src/data). Update these to change what appears on the site — no code knowledge required beyond editing text and numbers:

| File | Controls |
|------|----------|
| `src/data/site.ts` | Brand name, contact details, social links, business hours, headline stats, navigation |
| `src/data/categories.ts` | Vehicle categories shown on the homepage and filters |
| `src/data/vehicles.ts` | The full vehicle catalog — names, prices (TND), specs, colors, features, images |
| `src/data/financing.ts` | Financing plans, rates and the simulator formula |
| `src/data/news.ts` | News, launches, promotions and events |
| `src/data/dealers.ts` | Showroom / service-center locations and the map pins |
| `src/data/testimonials.ts` | Customer reviews |
| `src/data/services.ts` | "Why choose us", after-sales services, process steps |

> **Images** are loaded from Unsplash (a free, stable CDN) via remote URLs configured in `next.config.mjs`. To use your own photos, drop them in `public/` and reference them as `/your-photo.jpg`, or add your host to `images.remotePatterns`.

---

## 🔧 Going further (optional next steps)

- **Wire up forms** — the contact form, quote and test-ride dialogs currently simulate submission. Connect them to an email API (e.g. Resend), a CRM, or Supabase in `ContactForm.tsx` / `QuoteDialog.tsx`.
- **Real CMS / admin dashboard** — for non-technical editing with a database, the recommended path is **Supabase** (tables for vehicles, news, dealers, etc.) plus a simple admin route guarded by auth. The data files above map 1:1 to such tables.
- **Real map** — swap the schematic dealer map for Google Maps / Mapbox / Leaflet if you want live navigation.
- **Deploy** — push to GitHub and import into **Vercel** for zero-config hosting (recommended for Next.js). `npm run build` is already passing.

---

## 🎨 Brand system

- **Background:** near-black `#05070b` / `#0A0E14`
- **Accent (“Volt”):** electric teal-green `#00E0A4`
- **Secondary (“Ember”):** warm orange `#FF6B2C` (gasoline / promos)
- **Fonts:** Sora (display) + Inter (body), self-hosted via `next/font`

Edit the palette in `tailwind.config.ts`.
