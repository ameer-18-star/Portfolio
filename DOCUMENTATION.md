# Content Editing Guide

How to add, edit, or remove content in every section of the site. Every
section is driven by a plain JS data file under `src/data/`, imported by
both the home-page component and (where one exists) the dedicated full
page, so editing one file updates everywhere it's used.

No section requires editing JSX to add an entry, only the matching data
file, unless noted otherwise.

---

## 1. Core Tooling (`10 // CORE TOOLING`, "My Core Skills")

**Data file:** `src/data/tools.js`
**Rendered by:** `src/components/tooling/CoreTooling.jsx` + `ToolCard.jsx`
**Logo assets:** `src/assets/tools/*.png`

### Add a tool logo

1. Drop a PNG at `src/assets/tools/<toolname>.png` (square works best;
   `ToolCard` fits it with `object-contain`, so any aspect ratio is safe).

### Add a tool to the grid

Open `src/data/tools.js`. `toolCategories` is an array of category objects:

```js
{
  title: "Security Tools",       // category heading
  tools: [
    { name: "Nmap", logo: nmap, fallbackIcon: faMagnifyingGlass },
    // ...
  ],
}
```

To add a new tool:

```js
import burpsuite2 from "../assets/tools/burpsuite2.png";
// ...
{ name: "New Tool", logo: burpsuite2, fallbackIcon: faWrench },
```

- `logo` must be an **imported** image (not a string path), so Vite
  hashes/optimizes it.
- `fallbackIcon` is a FontAwesome icon (import from
  `@fortawesome/free-solid-svg-icons` or `free-brands-svg-icons`). It only
  renders if the PNG fails to load (`ToolCard.jsx` catches the `onError`
  event), so the section never shows a broken-image icon.
- To add a whole new category, add another `{ title, tools }` object to the
  `toolCategories` array; no component changes needed.

---

## 2. Credentials & Badges (`13 // CREDENTIALS`, "Verified Badges & Certs")

**Data file:** `src/data/credentials.js`
**Rendered by:** `src/components/credentials/Credentials.jsx` + `BadgeModal.jsx`
**Assets:** badge icons in `src/assets/badges/*.png`, certificate renders in
`src/assets/certificates/*.png`

### The status system

Every credential's displayed status is **derived**, not set manually, by
`deriveStatus()` in `credentials.js`:

| Status | Shown when | Label |
|---|---|---|
| `verified` | `item.verifyUrl` is set | "Verified Integrity Check" |
| `certificate-on-file` | no `verifyUrl`, but a certificate image exists | "Certificate on File" |
| `in-progress` | `item.inProgress` is `true` | "In Progress" |
| `pending` | none of the above | "Verification Pending" |

This exists so a credential can never accidentally display as "Verified"
just because you added an image. Don't hardcode a status anywhere else;
if a credential needs a different status, change `verifyUrl`,
`certificateImage`, or `inProgress` and the label follows automatically.

### Add a new credential group

```js
{
  id: "unique-slug",
  title: "Group Title",
  issuer: "Issuing Organization",
  icon: faShieldHalved,        // fallback FontAwesome icon if no badgeIcon
  badgeIcon: someBadgePng,      // imported from src/assets/badges/, or omit
  certificateImage: someCertPng,// imported from src/assets/certificates/, or omit
  items: [
    item("Credential Name", "credly-badge-id"),       // has a real Credly link
    item("Credential Name", null, { kind: "..." }),   // no public link yet
  ],
},
```

The `item(name, credlyId, extra)` helper at the top of the file builds the
common shape. Pass a real Credly badge ID (the UUID in the badge's public
URL) as the second argument for an automatically-built verify link, or
`null` if there isn't one. `extra` can override `issuer`, `platform`,
`kind`, `inProgress`, or give that specific item its own `certificateImage`
(overrides the group's).

### Add a badge icon / certificate image

1. Drop the PNG at `src/assets/badges/<name>.png` or
   `src/assets/certificates/<name>.png`.
2. Import it at the top of `credentials.js`.
3. Reference it as `badgeIcon` / `certificateImage` on the group (or a
   specific item, via `item()`'s `extra` argument).

### Modal size

`BadgeModal.jsx` renders via the shared `Modal` component with `size="xl"`
(`92vw`, capped at `1200x900px`, see `.modal-xl` in `src/index.css`). Don't
change this to the default `maxWidth` prop unless you also shrink the
certificate image styling inside `ItemHero`, it's sized to fill the large
layout.

---

## 3. Remote Cybersecurity Internships (`06 // INDUSTRY EXPERIENCE`)

**Data file:** `src/data/internships.js`
**Rendered by:** `src/components/internship/Internship.jsx`,
`InternshipCard.jsx`, `CertificateModal.jsx`, `TaskBreakdownModal.jsx`

Each entry in the `internships` array has `type: "scored"` (category/points
style, like Parry Security) or `type: "weekly"` (week-by-week, like
VortexTech). The UI picks the right breakdown layout automatically based on
this field.

### Add/edit a scored category and its tasks

```js
categories: [
  {
    title: "Category Name",
    tasks: [
      { name: "Task Name", earned: 20, total: 20 },
    ],
  },
],
```

The progress bar and `earned/total` text render automatically; no other
changes needed. `TaskBreakdownModal.jsx`'s search box filters on `name`.

### Add/edit a weekly breakdown

```js
weeks: [
  {
    week: "Week 5",
    title: "What this week covered",
    tasks: "One paragraph describing the work.",
    tools: ["Tool A", "Tool B"],
    artifacts: [{ label: "report.pdf", href: "https://github.com/..." }],
  },
],
```

### Certificate image

Set `certificate.image` (an imported PNG from `src/assets/certificates/`)
and `certificate.verifyUrl` (a real URL, or leave `null` to show the
disabled "Verification link pending" state). **There is no PDF option**:
`CertificateModal.jsx` only renders the PNG, with a direct image download
and the verify link.

### New metric tiles / badge text

`metrics` is an array of `{ label, value, icon }` shown as the four tiles
on the card; `badge` / `badgeColor` ("red" or "emerald") is the small pill
in the card's top-right corner.

---

## 4. Projects (`07 // CODE SHIPPED` + `/projects`)

**Data file:** `src/data/projects.js`
**Rendered by:** home's `Portfolio.jsx` (featured only) and the full
`src/pages/AllProjectsPage.jsx` (everything, with category filters)
**Screenshots:** `src/assets/images/portfolio-images/*.png`

### Add a project

```js
{
  id: "unique-slug",
  featured: true,                    // show on home page? omit/false to skip
  title: "Project Name",
  category: "Offensive Security",    // must match an entry in projectCategories
  status: "LIVE TOOL",                // "LIVE TOOL" | "ACTIVE REPO" | "LAB DEMO"
  image: cardN,                       // imported from portfolio-images/
  stack: ["Python", "SQLite"],
  summary: "One or two sentences for the card.",
  writeup: "Longer paragraph for the modal / full page.",
  architecture: ["Step 1", "Step 2", "Step 3"],  // renders as a flow diagram
  repo: "https://github.com/...",    // or null if there isn't one
  demo: null,                         // only set this to a REAL hosted URL
},
```

Add it to the `projects` array. `featuredProjects` (used on the home page)
is auto-derived by filtering `featured: true`, no separate list to keep in
sync.

To add a new filter category, add the string to `projectCategories` at the
top of the file, then use it as a project's `category`.

### Replace a screenshot

Swap the file at the same path under
`src/assets/images/portfolio-images/`, no code change needed, since the
import already points there.

---

## 5. Blog & Research Write-Ups (`14 // WRITE-UPS & REPOS` + `/blog`)

**Data file:** `src/data/blogPosts.js`
**Rendered by:** home's `Blog.jsx` (first 4 only) and the full
`src/pages/AllBlogsPage.jsx` (everything, with search + category filters)
**Thumbnails:** `src/assets/images/blog/*.jpg`

```js
{
  id: "unique-slug",
  title: "Post Title",
  category: "Security Research",   // becomes a filter tab automatically
  readTime: 12,                     // minutes, shown as "~12 min read"
  repo: "repo-name-on-your-github", // combined with GH_USER to build `url`
  tags: ["Tag One", "Tag Two"],
  excerpt: "One or two sentences shown on the card.",
  body: ["Paragraph one.", "Paragraph two."],  // shown in the read-overlay modal
},
```

Add it to the `raw` array near the top of the file. `blogPosts` (with
`image` and `url` attached) and `blogCategories` (the filter tab list) are
both auto-derived, don't edit them directly.

---

## 6. Testimonials (`16 // TESTIMONIALS & SOCIAL PROOF`)

**Rendered by:** `src/components/testimonial/Testimonial.jsx` +
`TestimonialCard.jsx`
**Data location:** the `testimonialData` array directly inside
`Testimonial.jsx` (small, fixed list, no separate data file)

```js
{
  quote: "The full recommendation text.",
  name: "Full Name",
  role: "Their Title",
  org: "Their Organization",
},
```

- Quotes longer than 180 characters automatically truncate on the card
  with a "Read full recommendation" button that opens the full text in a
  modal, no extra field needed to enable this.
- No avatar image system: each card shows an initials badge generated from
  `name` (see `initials()` in `TestimonialCard.jsx`). To use real photos
  instead, add an `avatar` field (an imported image) and update
  `TestimonialCard.jsx` to render it in place of the initials div.
- The star rating is **decorative** (every card shows 5, it isn't tied to
  a real review platform score). Remove the `<Stars />` usage in
  `TestimonialCard.jsx` if that's misleading for your use case.
- **Placeholder entries:** two slots exist for a Parry Security and a
  VortexTech endorsement, marked `placeholder: true`. Nobody has actually
  given these quotes yet, so the text is a visible placeholder, not a
  fabricated endorsement. Fill in the real `quote` and `name`, then
  **delete the `placeholder: true` line** so the card loses its dashed
  border and placeholder styling.

---

## Conventions used throughout (read before adding content)

- **Never hand-write a "Verified" label.** Credentials derive their status
  from data (`verifyUrl` / `certificateImage` / `inProgress`); internships
  and the Google Contact Form button follow the same pattern: a `null`
  value renders a disabled/pending state instead of a dead or fake link.
- **Don't mark something in-progress as complete** by adding an asset for
  it. CEH v13 and the Google Cybersecurity Professional Certificate both
  have generated placeholder images sitting unused in `src/assets/` for
  exactly this reason; wiring in an image doesn't change the `inProgress`
  flag, you'd have to do that deliberately once actually earned.
- **Generated placeholder assets** (anything whose image literally says
  "PLACEHOLDER" on it: avatar, logo, project screenshots, blog thumbnails,
  certificates, resume, OG image) should be replaced at the same filename;
  nothing else needs to change when you do.
