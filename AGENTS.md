# Agent Instructions — Portfolio

## Stack

- **Next.js 16.2.10** + **React 19** — bleeding edge. APIs may differ from your training data. Check `node_modules/next/dist/docs/` before writing new Next.js code.
- **Static export only** — `output: "export"` + `trailingSlash: true` in `next.config.ts`. No server-side features (no API routes, no middleware, no image optimization).
- **GSAP** for scroll-triggered animations (ScrollTrigger). **Framer Motion** for entrance/exit/layout animations. Both coexist — don't remove one for the other.
- **Tailwind CSS v4** — uses `@tailwindcss/postcss` plugin. Config in `app/globals.css` with `@theme inline` for design tokens (not `tailwind.config.js`).
- **TypeScript strict** — path alias `@/*` → project root.

## Commands

```bash
npm run dev          # dev server (port 3000)
npm run build        # production build → outputs to `out/`
npm run lint         # eslint (next core-web-vitals + typescript)
```

No test framework is configured. There are no tests to run.

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Push to `main` → builds `out/` → deploys. The `out/` directory is the deployment artifact.

## Fonts

Loaded via `next/font/local` in `app/layout.tsx`. Four CSS variables:

| Variable | Font | Usage |
|----------|------|-------|
| `--font-inter-display` | Inter (local) | Body, headings, UI |
| `--font-caveat` | Caveat (local) | Handwritten accents |
| `--font-geist-mono` | Geist Mono (local) | Monospace |
| `--font-zalando` | Zalando Sans Expanded (local) | Hero display text, footer watermark |

Reference via `font-[family-name:var(--font-caveat)]` in Tailwind or `var(--font-caveat)` in inline styles.

## Gotchas

- **Framer Motion ease tuples** — TypeScript requires `[number, number, number, number]` cast for cubic-bezier arrays: `ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number]`
- **Lucide React lacks brand icons** — GitHub/LinkedIn use inline SVGs, not Lucide.
- **No image optimization** — `images: { unoptimized: true }` because of static export. Use `loading="lazy"` manually where needed.
- **Single-page app** — all sections in `app/page.tsx`. No routing.

## Architecture

```
app/
  layout.tsx      — root layout, fonts, metadata
  page.tsx        — assembles all sections
  globals.css     — Tailwind v4 config, design tokens, custom CSS
components/
  Hero.tsx        — full-viewport hero with parallax
  AboutMe.tsx     — paper-aesthetic about section
  About.tsx       — services section (sticky backgrounds + glass cards)
  ProjectsStack.tsx — stacked-scroll project cards
  Experience.tsx  — horizontal-scroll experience timeline
  Testimonials.tsx — paper-card testimonials
  Footer.tsx      — gradient footer
  Navbar.tsx      — glassmorphism floating nav
  Loader.tsx      — entrance animation
  SectionSeparator.tsx — line + plus icon divider
lib/
  data.ts         — all content (siteConfig, stats, timeline, projects, navItems)
  projects.ts     — project data with images
```

## Reference Site

`sanjaymenon.framer.website` — the design reference being cloned section by section. Framer-built, light theme (`#f9fdff`), blue accent (`#0281e0`). Fetched HTML is available for analysis when needed.
