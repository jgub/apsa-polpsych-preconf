# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Site Is

A personal academic website for Joshua R. Gubler, Associate Professor of Political Science at BYU. Built with **Astro** (a static site generator), **Tailwind CSS v4** for styling, and **TypeScript** for type safety. The site has no backend or database — all content lives directly in source files as code/data.

## Who Uses This

The site owner is not a software developer. He will typically:
- Upload an updated CV (a LaTeX `.tex` file) and ask you to update the site to match it.
- Ask to add new pages, features, or edit existing content.

When he provides an updated CV, **carefully diff it against the current data files** to find what changed — new publications, updated citations (volume/issue/pages added), new roles, contact info changes, new education entries, etc. Update all relevant data files and pages to match.

## Commands

```bash
npm run dev        # Start local dev server at localhost:4321 (live-reloads on save)
npm run build      # Build production site to ./dist/
npm run preview    # Preview the production build locally
```

There are no tests or linters configured. Always run `npm run build` after making changes to verify nothing is broken.

## Architecture

### How Pages Work

Astro uses **file-based routing**: every `.astro` file in `src/pages/` automatically becomes a page on the site.

| File | URL | What it shows |
|------|-----|---------------|
| `src/pages/index.astro` | `/` | Home — headshot, bio, research interests, 3 recent publications |
| `src/pages/about.astro` | `/about` | Education history, contact info, research interests |
| `src/pages/research.astro` | `/research` | All publications (peer-reviewed, book chapters, other works, in-progress) |
| `src/pages/current-projects.astro` | `/current-projects` | Ongoing research projects |

### How Pages Are Structured

Every page wraps its content in `BaseLayout` (from `src/layouts/BaseLayout.astro`), which provides the shared HTML skeleton: `<head>` tags, fonts, the navigation bar (`Nav` component), and the footer (`Footer` component). Pages pass a `title` and optional `description` prop to `BaseLayout`.

```
BaseLayout (head, nav, footer)
  └── Page content (hero, sections, cards, etc.)
```

### Where Content Lives

There is no CMS. All editable content lives in `src/data/` as TypeScript files:

- **`src/data/publications.ts`** — All publications, organized into several exported arrays:
  - `publications` — Peer-reviewed journal articles grouped by year (the main list). Each entry has `title`, `authors`, `journal` (optional), and optional `paperUrl`/`replicationUrl`.
  - `forthcoming` — Accepted papers not yet published.
  - `bookChapters` — Book chapter contributions.
  - `otherWorks` — Non-peer-reviewed items (arXiv preprints, working papers, book reviews).
  - `inProgress` — Manuscripts currently under review (title and authors only, no journal).
  - `recentPublications(n)` — Helper that returns the N most recent peer-reviewed publications (used on the home page).
- **`src/data/projects.ts`** — Current research project titles and descriptions.
- **`src/data/education.ts`** — Education history (degree, field, year, institution).
- **`src/data/links.ts`** — CV download URL and social media links (Google Scholar, LinkedIn) with their SVG icon path data.
- **`src/components/ResearchInterests.astro`** — The list of research interest tags is defined inline in this component (just 4 short strings, so it lives in the component rather than a data file).

### Components

All in `src/components/`:

- **`Nav.astro`** — Top navigation bar. Links are defined in an array at the top of the file. Automatically highlights the current page. Has separate desktop and mobile layouts (mobile uses a hamburger menu toggle).
- **`Footer.astro`** — Site footer with contact info and social links.
- **`EmailLink.astro`** — Renders an email link with spam-scraping protection. The address is assembled from parts (`jgub` + `byu.edu`) in client-side JS so it never appears in the HTML source. Used in both Footer and About page.
- **`ThemeToggle.astro`** — Dark/light mode toggle button. Saves preference to `localStorage`.
- **`PublicationCard.astro`** — Renders a single publication entry (title, authors, journal, links).
- **`PublicationSection.astro`** — Renders a titled group of PublicationCards. Has a `category` prop for top-level sections (Book Chapters, etc.) vs year subsections.
- **`ProjectCard.astro`** — Renders a single project card (title and description).
- **`ResearchInterests.astro`** — Renders research interest tags as rounded badges.

### Styling System

- **Tailwind CSS v4** via Vite plugin (configured in `astro.config.mjs`, not PostCSS).
- **Custom color palette** defined in `src/styles/global.css` — a navy blue scale (`navy-50` through `navy-950`) plus `accent`, `accent-hover`, `surface`, and `surface-alpha` colors.
- **Dark mode** works by swapping all the navy color values via `.dark` class on `<html>`. The inline script in `BaseLayout.astro` checks `localStorage` before paint to avoid a flash.
- **Fonts**: Inter (body/UI) and Lora (headings), loaded from Google Fonts.
- **Layout pattern**: Content areas use `max-w-4xl mx-auto px-6` for consistent width and padding.

## Updating the Site from a CV

When the user provides an updated CV (`.tex` file), compare it against the current data files and update everything that changed. Here's what to check:

1. **Publications** (`src/data/publications.ts`): New papers, updated citations (volume/issue/pages now available), new URLs, papers moving from `forthcoming`/`inProgress` to a year group.
2. **Education** (`src/data/education.ts`): New degrees or fellowships.
3. **Contact info**: Phone number or office address changes — update both `src/pages/about.astro` (contact section) and `src/components/Footer.astro`.
4. **Titles/roles** on the home page (`src/pages/index.astro`): e.g., new appointments, lab directorships.
5. **External links** (`src/data/links.ts`): Updated CV URL, new social profiles.
6. **Research interests** (`src/components/ResearchInterests.astro`): New or changed research areas.
7. **Current projects** (`src/data/projects.ts`): New or retired projects.

The CV is a LaTeX file. Key sections to look for: `\section{Academic Appointments}`, `\section{Education}`, `\subsection*{Peer-reviewed Journal Articles}`, `\subsection*{Book Chapters}`, `\subsection*{Other}`, `\subsection*{Manuscripts in Progress}`, and contact info in the header.

## Common Tasks

### Adding a New Publication

Edit `src/data/publications.ts`. For a **peer-reviewed article**, find the correct year group in the `publications` array (or add a new year group) and add an object:

```typescript
{
  title: "Your Paper Title",
  authors: "Author One, Author Two, Author Three",
  journal: "Journal Name, Volume(Issue): Pages",
  paperUrl: "https://...",           // optional — link to the paper
  replicationUrl: "https://...",     // optional — link to replication files
},
```

For **other types**, add to the appropriate array: `forthcoming`, `bookChapters`, `otherWorks`, or `inProgress`.

Peer-reviewed publications are displayed newest-first. The home page automatically shows the 3 most recent via `recentPublications(3)`.

### Adding a New Page

1. Create `src/pages/your-page.astro`
2. Use this template:
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="Page Title — Joshua R. Gubler">
  <section class="max-w-4xl mx-auto px-6 pt-16 pb-12">
    <h1 class="font-serif text-3xl font-bold text-navy-900">Page Title</h1>
    <!-- Your content here -->
  </section>
</BaseLayout>
```
3. Add a navigation link by editing the `links` array at the top of `src/components/Nav.astro`.

### Adding a New Navigation Link

Edit `src/components/Nav.astro` and add to the `links` array:
```typescript
{ href: "/your-page", label: "Display Name" },
```

### Updating External Links (CV, Google Scholar, LinkedIn)

Edit `src/data/links.ts`. The `cvUrl` is a Dropbox link to the CV PDF. Social links include their SVG icon path data.

### Updating Research Interests

Edit the `interests` array in `src/components/ResearchInterests.astro`.

### Updating Current Projects

Edit the `projects` array in `src/data/projects.ts`.

### Updating Education

Edit the `education` array in `src/data/education.ts`.

## Key Conventions

- **No JavaScript frameworks** (React, Vue, etc.) — the site uses only Astro components and vanilla JS for interactivity (theme toggle, mobile menu, email obfuscation).
- **Static assets** (images, favicons) go in `public/` and are referenced with absolute paths like `/headshot.jpg`.
- **Astro component files** (`.astro`) have two sections separated by `---` fences: TypeScript logic on top (the "frontmatter"), HTML template below.
- **Email obfuscation**: Use the `EmailLink` component anywhere an email link is needed. It handles the spam protection automatically.
- **After any changes**, run `npm run build` to make sure the site compiles without errors.

## Deployment

The site is deployed on **Vercel** as a static site. If the GitHub repo is connected to Vercel, pushing to `main` triggers an automatic deploy — no manual steps needed.

For manual CLI deploys: `npm run build && npx vercel deploy --prebuilt`.

No SSR adapter is needed. Astro's default static output works natively with Vercel.
