# Imtiaz Ahammad — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

> **"Building intelligent systems that see, think, and act."**  
> Personal portfolio website of **Imtiaz Ahammad** — AI Engineer & Team Lead specializing in Computer Vision, Edge AI, LLM multi-agent meshes, and production ML pipelines.

---

## 🌟 Features & Design Aesthetic

- **Hero Section**: Sky background with moving atmospheric clouds and parallax avatar cutout. Fully responsive across phone and desktop viewports.
- **Paper & Glass Aesthetic**: Tactile polaroid cards, paperclip accents, handwritten calligraphic accents (`Caveat`), and sleek floating glassmorphism navigation.
- **Projects Stack**: Interactive stacked scroll card animation showcasing high-concurrency Computer Vision & LLM projects.
- **Interactive Experience Timeline**: Horizontal scrolling work history timeline with custom company branding.
- **Testimonials & Recommendations**: Paper card recommendation grid highlighting team feedback.
- **Static Export Optimized**: Built specifically for GitHub Pages deployment using Next.js static HTML export (`output: "export"`).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with custom inline theme configuration
- **Animations**: Framer Motion (entrance/layout animations) + GSAP with ScrollTrigger
- **Typography**: Local font optimization via `next/font/local`:
  - `Inter`: Primary display & body text
  - `Caveat`: Handwritten accents
  - `Geist Mono`: Monospace accents
  - `Zalando Sans Expanded`: Display hero headers & footer watermark
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ImtiazAhammad/ImtiazAhammad.github.io.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Scripts

| Script | Command | Description |
| --- | --- | --- |
| **Dev** | `npm run dev` | Runs the local development server at `http://localhost:3000` |
| **Build** | `npm run build` | Builds the static export production bundle into the `out/` folder |
| **Lint** | `npm run lint` | Runs ESLint for Next.js core web vitals & TypeScript checking |

---

## 📄 Deployment

This site is configured for automatic static deployment to **GitHub Pages**.

Whenever commits are pushed to the `main` branch, the GitHub Action workflow (`.github/workflows/deploy.yml`) automatically builds the project (`npm run build`) and deploys the generated `out/` directory.

---

## 📧 Contact & Links

- **Website**: [imtiazahammad.github.io](https://imtiazahammad.github.io)
- **LinkedIn**: [linkedin.com/in/imtiaz-shoaib](https://www.linkedin.com/in/imtiaz-shoaib)
- **GitHub**: [github.com/ImtiazAhammad](https://github.com/ImtiazAhammad)
- **Email**: imtiaz.shoaib746@gmail.com
