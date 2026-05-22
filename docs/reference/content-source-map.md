# Content Source Map

Where every piece of visible content comes from, and what else you need to update when you change it.

## Quick Reference: "I want to change X"

| What you're changing | Primary file | Also update |
|---------------------|-------------|-------------|
| Work history / jobs | `cv.md` | `i18n.ts` (experience), `about-i18n.ts` (timeline), `chatbot-prompt.txt` (lines 68-123), `public/llms.txt` |
| Skills / tech stack | `cv.md` | `i18n.ts` (techStack), `chatbot-prompt.txt` (lines 88-95), `public/llms.txt`, `index.html` (JSON-LD knowsAbout) |
| Bio / about narrative | `about-i18n.ts` (bio) | `cv.md` (summary), `i18n.ts` (summary cards) |
| Home page sections | `src/i18n.ts` | `cv.md`, `about-i18n.ts` |
| Chat behavior / rules | `chatbot-prompt.txt` | Run evals to verify (`npm run evals`) |
| Job target roles | `i18n.ts` (roles, lines 59-67) | `about-i18n.ts` (roles, line 19) |
| Page titles / meta tags | `index.html` | `i18n.ts` (seo section) |
| About page content | `src/about-i18n.ts` | `i18n.ts`, `cv.md` |
| Privacy policy | `src/PrivacyPolicy.tsx` | Nothing (isolated) |
| Projects | `i18n.ts` (projects) | `about-i18n.ts` (projects), `cv.md` (Projects section), `public/llms.txt` |
| Education / certs | `i18n.ts` (education) | `about-i18n.ts` (certifications, education), `cv.md`, `public/llms.txt` |
| Contact info | **All files** (see below) | — |

## Contact Info (must match everywhere)

**Email:** `brent.beckwith@gmail.com`

| File | Location |
|------|----------|
| `index.html` | JSON-LD (line ~60) |
| `src/i18n.ts` | line 24 |
| `src/about-i18n.ts` | line 52 |
| `cv.md` | line 4 |
| `chatbot-prompt.txt` | lines 74, 107, 151 |
| `public/llms.txt` | line 10 |
| `public/humans.txt` | line 4 |
| `public/robots.txt` | line 3 |
| `public/.well-known/security.txt` | line 4 |
| `src/PrivacyPolicy.tsx` | line 47 |

**Location:** `Madison, OH` / `Madison, Ohio`

| File | Location |
|------|----------|
| `index.html` | JSON-LD (lines 75-76) |
| `src/i18n.ts` | line 58 |
| `src/about-i18n.ts` | line 11 |
| `cv.md` | line 3 |
| `chatbot-prompt.txt` | lines 73, 101 |
| `public/llms.txt` | line 9 |
| `public/humans.txt` | line 5 |

**GitHub:** `github.com/bbeckwith-dev`

| File | Location |
|------|----------|
| `index.html` | JSON-LD (line ~71) |
| `src/i18n.ts` | line 177 |
| `cv.md` | line 6 |
| `chatbot-prompt.txt` | line 76 |
| `public/llms.txt` | line 12 |
| `public/humans.txt` | line 7 |
| `src/AboutPage.tsx` | line 7 |

**LinkedIn:** `linkedin.com/in/brent-beckwith`

Same files as GitHub, similar line numbers.

## Key Career Metrics (must be consistent)

These numbers appear in multiple files. If one changes, all must change.

| Metric | Files |
|--------|-------|
| 5,000+ domain migrations, zero data loss | `cv.md`, `i18n.ts`, `chatbot-prompt.txt`, `public/llms.txt`, `index.html` (meta), `evals/datasets/factual.json` |
| $15,000/month cost savings | `cv.md`, `i18n.ts`, `chatbot-prompt.txt`, `evals/datasets/factual.json` |
| Q-Excellence award (singular, 600+ employees) | `cv.md`, `i18n.ts`, `chatbot-prompt.txt`, `public/llms.txt`, `evals/datasets/factual.json` |
| 95%+ customer satisfaction | `cv.md`, `i18n.ts`, `chatbot-prompt.txt` |
| Five ISP acquisitions | `cv.md`, `i18n.ts`, `chatbot-prompt.txt`, `public/llms.txt` |

## File-by-File Detail

### `cv.md` — Source of truth for career facts
- Full work history with dates, titles, bullet points
- Skills, projects, education
- Fed into RAG pipeline (indexed into Supabase pgvector via `scripts/ingest-rag.ts`)
- Copied verbatim into `chatbot-prompt.txt` lines 68-123

### `src/i18n.ts` — Home page content (all sections)
- SEO title/description (lines 1-7)
- Hero tagline + rotating roles (lines 11-17)
- Professional summary cards (lines 68-91)
- Core competencies (lines 92-120)
- Tech stack grid (lines 121-164)
- Project cards (lines 165-214)
- Work experience timeline (lines 226-308)
- Education (lines 369-403)
- Chat UI text (lines 439-487)
- Consumed by `src/App.tsx`

### `src/about-i18n.ts` — About page content
- Heading, manifesto, subtitle, location (lines 8-12)
- Bio paragraphs (lines 13-16)
- Target roles (line 19)
- Abbreviated timeline (lines 21-26)
- Projects, certifications, education (lines 28-39)
- FAQ section (lines 45-50)
- Consumed by `src/AboutPage.tsx`

### `chatbot-prompt.txt` — Chat system prompt
- Honest-mode rules: verb restrictions,  (lines 3-32)
- Transferable skills frameworks (lines 34-66)
- Full career profile (lines 68-123) — copy of `cv.md`
- Chat constraints: 150-word max, tone, format (lines 124-216)
- Loaded at runtime by `api/_shared/prompt.js` (Langfuse primary, this file as fallback)

### `index.html` — Meta tags + structured data
- `<title>` and `<meta description>` (lines 14-36)
- OG/Twitter card tags
- JSON-LD Person schema: name, email, jobTitle, knowsAbout, sameAs (lines 50-81)

### `public/llms.txt` — AI model discovery file
- Standalone markdown version of the full CV
- Bio, mindset, competencies, work history, projects, education
- Not generated — manually maintained, must stay in sync

### `public/humans.txt` — Site metadata (humans.txt standard)
- Owner name, role, email, location, GitHub, LinkedIn
- Stack info, quality metrics

### `public/robots.txt` — Search engine metadata
- Attribution comment with email
- Stack credit line

### `public/.well-known/security.txt` — RFC 9116 security policy
- Contact email, security implementation notes

### `src/PrivacyPolicy.tsx` — Privacy page (isolated)
- Hardcoded content object (not from i18n)
- Email address on line 47

### `evals/datasets/factual.json` — Chatbot accuracy tests
- Tests that the chatbot returns correct career metrics
- Assertions must match the actual data in cv.md/chatbot-prompt.txt

## Content Rules

### Anti-ageism (critical)
Never state career length as "20+ years," "two decades," or similar. Use "broad experience" or leave vague. Enforced in `chatbot-prompt.txt` lines 21-24. Tested by `evals/datasets/factual.json` (exp-years test).

### Verb calibration
Use "Spearheaded" for migrations, "Pioneered" for rollouts, "Coordinated" for team efforts. Never "Led" or "Participated in." See `chatbot-prompt.txt` line 16 and memory file `feedback_verb-strength.md`.

## Generated Files (do NOT edit)

| File | Generated by |
|------|-------------|
| `dist/*` | `npm run build` (from `public/` and `src/`) |
| `dist/sitemap.xml` | `scripts/generate-sitemap.ts` (from article registry + git dates) |
| `api/ops/_eval-results.json` | `evals/runner.ts` |
| Supabase pgvector embeddings | `scripts/ingest-rag.ts` (from `cv.md` + articles) |

## After Any Major Edit

1. Run evals: `npm run evals`
2. Build: `npm run build`
3. Spot-check dev server for the pages you changed
4. Verify chatbot still returns correct facts
