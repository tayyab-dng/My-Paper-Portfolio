# Niccolò Miranda — The Paper Portfolio Clone

A 100% pixel-perfect editorial replica of Niccolò Miranda's award-winning paper portfolio website, crafted with Next.js, React, Tailwind CSS, and custom typography.

## Features

- **Editorial Newspaper Aesthetic**: Vintage paper grain texture overlay with multiply blend mode, authentic serif typography (Canopee, Domaine Display, PPEditorialNew, UnifrakturCook), and hand-crafted graphic stamps.
- **Interactive Work Gallery (`/work`)**:
  - Horizontal mouse-wheel scroll translation (`deltaY` mapped to `scrollLeft`).
  - Fixed rotated vertical sidebar navigation matching `nav.work`.
  - 16 authentic project spines with vector brand SVG logotypes.
  - Interactive book accordion panels (`.book-wrap`) revealing case studies, tags, and high-resolution artwork.
- **About Page Hero (`/about`)**:
  - Giant solid black `ABOUT ME` masthead with custom font ligatures.
  - Amsterdam triple crosses (`ams-logo.svg`) and typography statement.
- **Fullscreen Navigation Modal**: Seamless navigation across `/` (Index), `/work` (Work), and `/about` (About) with dynamic active marker lines.
- **Micro-interactions & Animations**: Continuous newspaper marquees, interactive cursor-reactive artisan stamps, stacked testimonial cards, and custom minimal locomotive scrollbar.

## Tech Stack

- **Framework**: Next.js (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS
- **Fonts**: Canopee, Domaine Display, Editorial New, UnifrakturCook

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
