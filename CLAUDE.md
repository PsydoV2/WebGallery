# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page Next.js gallery site (posters & wallpapers portfolio) for Sebastian Falter, deployed as a fully static export to `gallery.sfalter.de`.

## Commands

```bash
npm run dev     # Start dev server (localhost:3000)
npm run build   # Static export build (writes to /out, per next.config.ts `output: "export"`)
npm run start   # Serve production build
npm run lint    # ESLint (flat config: eslint-config-next core-web-vitals + typescript)
```

There is no test runner configured in this repo (no test script, no test files).

## Architecture

- **Next.js 16 App Router**, but the app is effectively a single route: `src/app/page.tsx` composes five components in a fixed vertical stack — `Navbar` → `Hero` → `Introduction` → `Gallery` → `Footer`. There is no client-side routing between pages.
- **Static export mode**: `next.config.ts` sets `output: "export"` and `images.unoptimized: true`. Do not introduce features that require a Node.js server at runtime (API routes, `next/image` optimization, ISR, middleware, dynamic routes with server-side data fetching) — they won't work under static export.
- **Gallery data and assets are decoupled**: `src/data/gallery.json` is the sole content source for gallery items (`id`, `title`, `filename`, `type`: `poster`|`wallpaper`, `orientation`: `vertical`|`horizontal`). The actual image/PDF files are **not** in this repo — `Gallery.tsx` builds URLs against an external host (`https://www.sfalter.de/FileHosting/Gallery/`), appending `.png` for previews/downloads and `.pdf` for the print download. Adding a gallery item means adding an entry to `gallery.json` *and* uploading `{filename}.png` / `{filename}.pdf` to that external host — nothing to add locally.
- **Filtering is client-only state**: `Gallery.tsx` (`"use client"`) holds `filterType`/`filterOri` in `useState` and filters `gallery.json` in-memory; there's no URL param sync or server filtering.
- **Styling is CSS Modules, not Tailwind** (the README's tech-stack section is stale — no Tailwind is installed). Each component has a matching module in `src/styles/` (e.g. `Gallery.tsx` ↔ `Gallery.module.css`). `Navbar` is the exception: it has no module and instead is styled via bare `nav`/`div`/`h1` selectors in `globals.css`, so any change to Navbar markup must be reflected there, not in a new module.
- **Animation**: `framer-motion` drives page-load stagger animations (`Hero`, `Introduction`) and layout/filter transitions (`Gallery`'s `AnimatePresence`/`layout` on the grid). Components using motion are marked `"use client"`.
- **Known gap**: several stylesheets (`globals.css`, `Hero.module.css`, `Introduction.module.css`, `Footer.module.css`) reference `var(--font-la-belle)` for headings, but no font is actually loaded anywhere (no `next/font` call, no `@font-face`) — it silently falls back to `cursive`. If asked to fix heading fonts, this is why they look wrong.
- **Metadata/SEO** (title, OpenGraph, Twitter card, icons) is centralized in `src/app/layout.tsx`. `public/sitemap.xml` is a static, hand-maintained file (not generated) — update it manually if routes/anchors change.
