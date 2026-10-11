# Ali Ameer: IT & Cybersecurity Portfolio

A React + Vite, multi-page portfolio with a red-team/offensive-security
themed design system (obsidian background, cyan/emerald/indigo accents,
working light mode), a custom cursor, scroll-in animations, and dedicated
`/projects` and `/blog` pages.

## Getting Started

```bash
npm install
npm run dev
```

Vite serves the app under `/portfolio/` locally (see "Base path" below), so
open the URL the terminal prints, not bare `localhost:5173/`.

## Build & Deploy (GitHub Pages)

```bash
npm run build
npm run deploy
```

`npm run deploy` runs the build and pushes `dist/` to a `gh-pages` branch via
the `gh-pages` package. Turn on Pages for that branch in your repo's
Settings, "Pages" tab.

### Base path

Set `VITE_REPO_NAME` in `.env.local` to your exact GitHub repo name (e.g.
`portfolio`). Vite builds every asset URL against `/that-name/`, so getting
it wrong is the #1 cause of a blank page with 404s in the console after
deploying.

## Routes

| Path         | Renders                                                   |
|--------------|------------------------------------------------------------|
| `/`          | The full single-page portfolio (all sections below)        |
| `/projects`  | All projects, filterable by category, full write-ups       |
| `/blog`      | All write-ups/repos, with search and category filters      |
| anything else| Themed 404 page                                            |

Nav links on `/projects`, `/blog`, and the 404 page navigate back to `/` and
scroll to the right section (via router state), since those sections only
exist on the home page.

### Deep-links on GitHub Pages

GitHub Pages has no server-side rewrites, so a direct visit or refresh on
`/portfolio/projects` would normally hit GitHub's generic 404 before React
even loads. This is handled by the standard
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick:
`public/404.html` redirects to `index.html` with the path encoded in the
query string, and a decode script in `index.html`'s `<head>` restores it
before the router mounts. Don't remove either half.

## Structure

```
src/
  components/
    common/         navbar, footer, loading, modal, cursor, theme, reveal, socialMedia
    hero/           Hero.jsx (canvas mesh background, typewriter, terminal card)
    profile/        About section
    happyClients/    Animated impact counters
    profession/     Focus areas, career journey, experience log
    internship/     Internship cards + certificate/task-breakdown modals
    portfolio/      Featured projects grid + project modal
    workProcess/    Methodology, skills radar/pills, Core Skills tile grid, Currently Learning
    workTogether/   Interactive terminal
    credentials/    Verified badges/certs + badge modal
    blog/           Blog cards + read-overlay modal
    faq/            FAQ accordion (with FAQPage JSON-LD)
    testimonial/    Swiper carousel
    contact/        Contact form + method cards
  data/             projects.js, blogPosts.js, credentials.js, internships.js
                    (single source of truth, imported by both the home
                    sections and the dedicated /projects and /blog pages)
  pages/            Home.jsx, AllProjectsPage.jsx, AllBlogsPage.jsx, NotFound.jsx
  routes/Router.jsx
```

Every distinct section on the home page is wrapped in `.sec .sec-<name>` in
`Home.jsx`, which gives it its own background color and SVG/gradient grid
pattern (defined in `src/index.css`). Sections also fade in on scroll via
the `Reveal` component (pure CSS keyframes, respects
`prefers-reduced-motion`).

## Light/dark mode

`ThemeToggle.jsx` sets `data-theme="light"|"dark"` on `<html>` (plus a
`.dark` class, for anything that wants to key off it) and persists the
choice to `localStorage`. All colors are CSS variables in `src/index.css`,
redefined under `:root[data-theme="light"]`, so no component needs
theme-aware conditional classes.

## Custom cursor

`CustomCursor.jsx` only activates on fine-pointer devices (`hover: hover and
pointer: fine`), so touchscreens keep the native cursor untouched. It renders
a small dot plus an eased outer ring that expands over anything matching
`a, button, input, textarea, select, label, summary` or a `.cursor-hover`
class.

## Data-driven content

`src/data/*.js` are the single source of truth for projects, blog posts,
credentials, and internships. Both the home-page sections and the dedicated
`/projects` and `/blog` pages import from the same files, so adding a
project or post in one place updates it everywhere.

## Generated placeholder assets

The following files are **programmatically generated placeholders**, clearly
labeled as such on the image/PDF itself, so nothing links to a 404 while you
gather the real files:

- `src/assets/avatar.png`, `src/assets/logo.png`, `src/assets/BG.jpg`
- `src/assets/images/portfolio-images/card-1.png` through `card-6.png`
- `src/assets/images/blog/blog-1.jpg` through `blog-4.jpg`
- `src/assets/certificates/*-cert.png` and `public/certificates/*-cert.pdf`
- `public/Ali_Ameer_Resume.pdf`
- `public/og-image.png` (1200x630 social preview)

Replace each with the real file at the same path and filename; nothing else
needs to change.

## SEO / AEO

- `index.html` has full meta tags, Open Graph/Twitter cards, and static
  JSON-LD (`Person`, `WebSite`) so crawlers that don't execute JS still see
  structured data, plus a `<noscript>` fallback with the core bio.
- `Faq.jsx` emits `FAQPage` JSON-LD client-side.
- `public/llms.txt` is a fact-checked, plain-text summary written for AI
  answer engines, including an explicit note not to claim certifications
  that aren't actually held.
- `public/robots.txt` and `public/sitemap.xml` are included.
- Update the placeholder domain (`https://ameer-18-star.github.io/portfolio/`)
  in `index.html`, `public/robots.txt`, `public/sitemap.xml`, and
  `public/llms.txt` to match your real deployed URL.

## Honesty notes (read before deploying)

- Each internship's `certificate.verifyUrl` in `src/data/internships.js` is
  `null`. The UI renders this as a disabled "Verification link pending"
  state, never a fake or dead link. Fill in the real URL once you have it.
- `src/data/credentials.js` keeps a credential's `verifyUrl` as `null`
  wherever the original source material didn't include a working Credly
  link, or (for "Ethical Hacker") where it referenced a wrong badge ID.
  These render as "Verification Pending", not as verified.
- CEH v13 is marked `inProgress: true` throughout. Don't change this to a
  held certification until it's actually earned.

## Other notes

- `vite.config.js` was rewritten from scratch. The original file supplied
  during this build had obfuscated code appended after the Vite config
  export; that code was **not** carried over. If you have the original file
  elsewhere, treat it as compromised and don't reintroduce that tail.
- Chart.js powers the skills radar chart; Swiper powers the testimonial
  carousel; react-router-dom handles the three routes.
- This project builds and lints clean (`npm run build`, `npx eslint .`) and
  was smoke-tested end-to-end (theme toggle, terminal commands, every modal,
  category filters, search, footer navigation from sub-pages, and the 404
  route) with zero JavaScript runtime errors.
