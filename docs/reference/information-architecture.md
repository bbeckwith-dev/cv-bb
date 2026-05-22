# Information Architecture

Site map, page inventory, and navigation flow for cv.brentbeckwith.com.

## Pages

| Route | Page | Content source | Indexed |
|-------|------|---------------|---------|
| `/` (or `/en`) | Home | `src/App.tsx` + `src/i18n.ts` | Yes |
| `/about` | About | `src/AboutPage.tsx` + `src/about-i18n.ts` | No (noindex) |
| `/privacy` | Privacy Policy | `src/PrivacyPolicy.tsx` (hardcoded) | No (noindex) |
| `/{article-slug}` | Article (dynamic) | `src/articles/registry.ts` → lazy component | Yes |
| `*` | 404 | `src/main.tsx` (lines 123-150) | No |

## Home Page Sections (scroll order)

| Section | Content from | What it shows |
|---------|-------------|---------------|
| Hero | `i18n.ts` greeting, greetingRoles | Animated tagline + rotating job titles (typewriter) |
| Beam Pills | `i18n.ts` pillLabels | Trait badges: Trusted, Analytical, Versatile, Resourceful |
| Story | `i18n.ts` story.* | Reflective typewriter → story reveal with skills |
| Summary | `i18n.ts` summary | Professional summary cards with key achievements |
| Core Competencies | `i18n.ts` coreCompetencies | 6 competency cards with descriptions |
| Tech Stack | `i18n.ts` techStack | Grid of tech by category (AI, Languages, Systems, etc.) |
| Experience | `i18n.ts` experience | Work history timeline: AmTrust → Cinergy |
| Projects | `i18n.ts` projects | Project cards with tech + links (whisper-notes, Portfolio) |
| Education | `i18n.ts` education | Schools, degrees, certifications |
| Skills | `i18n.ts` skills | Soft skills list |
| CTA | `i18n.ts` cta | Call-to-action (contact) |

## About Page Sections

| Section | Content from |
|---------|-------------|
| Heading + manifesto | `about-i18n.ts` heading, manifesto |
| Bio | `about-i18n.ts` bio (3 paragraphs) |
| Seeking roles | `about-i18n.ts` seeking, roles |
| Timeline | `about-i18n.ts` timeline (4 entries) |
| Projects | `about-i18n.ts` projects |
| Certifications | `about-i18n.ts` certifications |
| Education | `about-i18n.ts` education |
| FAQ | `about-i18n.ts` faq (4 Q&A pairs) |

## Global UI Components

| Component | File | Present on |
|-----------|------|-----------|
| Top navigation | `src/GlobalNav.tsx` | All pages (hidden on `/ops/*`) |
| Floating chat | `src/FloatingChat.tsx` | All pages (lazy-loaded) |
| Music toggle | `src/MusicToggle.tsx` | All pages (lazy-loaded) |
| Table of contents | `src/App.tsx` (inline) | Home only — sticky sidebar (desktop 2xl+) or floating drawer (mobile) |
| Theme toggle | Inside `GlobalNav.tsx` | All pages — dark/light via localStorage |

## Navigation Flow

```
Home (/)
├── Scroll sections (TOC links)
├── Nav links → About, Privacy
├── Project links → external GitHub repos
├── Chat bubble → opens FloatingChat panel
└── Article links (from registry) → /{slug}

About (/about)
├── Nav link → Home
├── LinkedIn / GitHub → external
└── Project links → external

Article (/{slug})
├── Nav breadcrumb → Home
├── TOC (article sections)
└── Footer bio → links

Privacy (/privacy)
├── Nav link → Home
└── Email link (mailto)
```

## Static Files (non-page, publicly served)

| File | Purpose | Audience |
|------|---------|----------|
| `public/llms.txt` | AI-readable CV | LLM crawlers |
| `public/humans.txt` | Site metadata | Developers |
| `public/robots.txt` | Crawl rules | Search bots |
| `public/.well-known/security.txt` | Security policy | Security researchers |
| `dist/sitemap.xml` | Page index | Search engines |

## Prerendered Pages

All pages are server-side rendered at build time via `scripts/prerender.tsx`. The client hydrates the pre-rendered DOM on load (zero layout shift). Pages rendered:

- `/` → `dist/index.html`
- `/about` → `dist/about/index.html`
- `/privacy` → `dist/privacy/index.html`
- Each article → `dist/{slug}/index.html`
- 404 → `dist/404.html`
