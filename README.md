# VAPR — Vape Brand Landing

A modern marketing landing page for a vape brand, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Brand

- Primary: `#E22A2A` (Alizarin Crimson)
- Background: `#FFF3E2` (Sazerac cream)
- Ink: `#1A0606`
- Display font: Bagel Fat One — Body font: Inter

## Sections

1. 21+ age-verification gate (persists choice in `localStorage`)
2. Sticky navbar with mobile slide-over
3. Hero with 7-card 3D fan carousel
4. Feature strip (3 cells)
5. Products grid (6 cards)
6. Flavor showcase ("Alizarin Crimson & Sazerac")
7. About / story + stats
8. Newsletter CTA
9. Red footer with nicotine + Prop 65 warnings

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Notes

- Product images come from Unsplash (whitelisted in `next.config.mjs`). Swap to real photos in `src/lib/products.ts`.
- The newsletter form is UI-only — wire it to your provider of choice (Mailchimp, Beehiiv, etc).
- The "VAPR" name is a placeholder. Update `src/lib/site.ts` to brand-replace.
