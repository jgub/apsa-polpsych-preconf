# Project Notes

This repository contains the website for the 2026 APSA Political Psychology Pre-Conference.

## Stack

- Astro
- Tailwind CSS v4
- TypeScript

## Key Commands

```bash
npm run dev
npm run build
npm run preview
```

Always run `npm run build` after making changes.

## Main Files

- `src/pages/index.astro` — main page layout and section order
- `src/data/conference.ts` — editable conference content, dates, links, schedule, and submission guidance
- `src/components/Nav.astro` — top navigation
- `src/components/Footer.astro` — footer
- `src/layouts/BaseLayout.astro` — page shell and metadata

## Editing Guidance

- This site is now a single-page conference site.
- Prefer editing `src/data/conference.ts` for content changes.
- Keep links, dates, and deadlines consistent across the page.
- If you change layout or copy, verify the site still looks good on wide and narrow screens.
