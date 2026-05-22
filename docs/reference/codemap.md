# Codemap

How the technical systems work and interconnect.

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19, TypeScript, Tailwind CSS 4, Motion (Framer) |
| Build | Vite 7 + SWC, Critters (critical CSS) |
| Routing | React Router 7 (client + SSR-aware) |
| Backend API | Vercel Edge Functions |
| Chat LLM | Claude Sonnet 4.6 (streaming) |
| Re-ranking | Claude Haiku 4.5 |
| Embeddings | OpenAI text-embedding-3-small (1536 dims) |
| Database | Supabase PostgreSQL + pgvector |
| Observability | Langfuse (traces, prompt management, LLM-as-Judge) |
| Analytics | GoatCounter (privacy-friendly, no cookies) |
| Hosting | Vercel (static + Edge), cv.brentbeckwith.com |

## File Structure

```
cv-bb/
├── api/                        # Vercel Edge Functions
│   ├── chat.js                 # Chatbot endpoint (POST /api/chat)
│   ├── ops/                    # Operational data
│   │   ├── _eval-results.json  # Latest eval run results
│   │   └── _eval-results.js    # JS export of same
│   └── _shared/
│       ├── rag.js              # RAG: embed, search, rerank, format
│       └── prompt.js           # System prompt loader (Langfuse → fallback)
├── src/
│   ├── main.tsx                # Router + entry point + hydration
│   ├── App.tsx                 # Home page (~2100 lines, complex animations)
│   ├── FloatingChat.tsx        # Chat UI (~1200 lines)
│   ├── GlobalNav.tsx           # Top nav + theme toggle
│   ├── AboutPage.tsx           # About page
│   ├── PrivacyPolicy.tsx       # Privacy page
│   ├── VoiceOrb.tsx            # Voice mode indicator
│   ├── MusicToggle.tsx         # Ambient music toggle
│   ├── i18n.ts                 # Home page content strings
│   ├── about-i18n.ts           # About page content strings
│   ├── useVoiceMode.ts         # Voice mode hook (~800 lines)
│   ├── useAudioAnalyser.ts     # Audio visualization
│   ├── tech-icons.ts           # Tech name → icon SVG map
│   ├── index.css               # Tailwind + custom theme + animations
│   └── articles/
│       ├── registry.ts         # Article metadata + lazy component imports
│       ├── components.tsx       # Reusable article content blocks
│       ├── content-types.tsx    # Editor mode + heading components
│       ├── json-ld.ts          # Article structured data generation
│       └── use-article-seo.ts  # Meta tag injection hook
├── scripts/
│   ├── prerender.tsx           # SSR all pages post-build
│   ├── ingest-rag.ts           # Embed chunks → Supabase
│   ├── export-chunks.ts        # Extract article text → chunks
│   ├── generate-sitemap.ts     # Build sitemap.xml from registry + git
│   ├── validate-articles.ts    # Check article metadata
│   ├── validate-prerender.ts   # Verify prerendered HTML
│   ├── validate-llms-txt.ts    # Check llms.txt format
│   ├── sync-prompt-to-langfuse.ts
│   ├── prompt-regression.ts    # Re-run evals against new prompts
│   ├── evaluate-traces.ts      # Score Langfuse traces with LLM Judge
│   ├── adversarial-test.ts     # Jailbreak resistance test
│   ├── diagnose-rag.ts         # Debug RAG search pipeline
│   ├── gsc-request-indexing.py # Google indexing API
│   ├── gsc-submit-sitemap.py   # Google Search Console sitemap submit
│   └── supabase-setup.sql      # Database schema (pgvector + hybrid search)
├── evals/
│   ├── runner.ts               # Eval harness
│   ├── assertions.ts           # Deterministic checks
│   ├── llm-judge.ts            # LLM-as-Judge scoring
│   └── datasets/               # 11 test datasets (JSON)
├── chatbot-prompt.txt          # System prompt fallback
├── cv.md                       # Markdown CV (RAG source)
├── index.html                  # SPA entry + meta + JSON-LD + theme script
├── vite.config.ts              # Build config
├── vercel.json                 # Headers, redirects, rewrites
└── public/
    ├── llms.txt, humans.txt, robots.txt, .well-known/security.txt
    └── (static assets: fonts, images)
```

## Build Pipeline

`npm run build` executes this sequence:

```
1. rag:export      → scripts/export-chunks.ts → scripts/chunks/
2. rag:ingest      → scripts/ingest-rag.ts → Supabase pgvector
3. prompt:sync     → scripts/sync-prompt-to-langfuse.ts → Langfuse
4. embed-evals     → scripts/embed-evals.ts → Langfuse
5. tsc -b          → TypeScript type check
6. vite build      → dist/ (bundled + code-split)
7. generate-sitemap → dist/sitemap.xml
8. validate-articles
9. validate-llms-txt
10. prerender.tsx   → SSR all pages into dist/
11. validate-prerender
12. indexnow-ping  → notify search engines (if INDEXNOW_ENABLED=true)
```

## Chat System

### Request flow

```
User types in FloatingChat
  → POST /api/chat { messages, lang, sessionId, currentPage }
  → Validate input (50KB max body, 2000 char message limit)
  → Rate limit (20 req/60s per IP, in-memory)
  → Classify intent (jailbreak? extraction?)
  → If RAG enabled:
      → Embed query (OpenAI text-embedding-3-small)
      → Hybrid search Supabase (70% vector + 30% BM25)
      → Rerank with Haiku (top-10 → top-5)
      → Diversify by article (at least 1 slot per distinct article)
  → Stream response via Claude Sonnet (SSE)
  → Filter source badges to articles actually mentioned (max 3)
  → Log to Langfuse (cost, tokens, intent, sources)
  ← SSE chunks + final { sources: [...] } JSON
  → FloatingChat renders markdown + source badges
  → Persist conversation to localStorage (key: 'bb-chat')
```

### Key files

| File | Role |
|------|------|
| `src/FloatingChat.tsx` | Chat UI: panel, messages, streaming, source badges, quick prompts |
| `api/chat.js` | Edge Function: validation, security, RAG, LLM call, Langfuse trace |
| `api/_shared/rag.js` | RAG pipeline: embedQuery, searchDocuments, rerankChunks, formatChunksForContext, extractSources |
| `api/_shared/prompt.js` | Loads system prompt from Langfuse (300s cache) with `chatbot-prompt.txt` fallback |
| `chatbot-prompt.txt` | System prompt: honest-mode rules, career data, chat constraints |
| `cv.md` | RAG source document (indexed into Supabase) |

### Security (6-layer defense)

1. Keyword blacklist — flags jailbreak keywords
2. Canary tokens — fake API keys that trigger alerts if repeated
3. Fingerprinting — user behavior anomaly detection
4. Anti-extraction rules — blocks credential scraping patterns
5. Online scoring — optional ML model
6. Adversarial checks — confirms model identity

## RAG Pipeline

### Ingestion (build-time)

```
Article registry + i18n content
  → scripts/export-chunks.ts
  → scripts/chunks/ (JSON files, max 1000 chars, 200 overlap)
  → scripts/ingest-rag.ts
  → Change detection (skip unchanged articles via content hashes)
  → Optional: Haiku contextual summary prepended
  → OpenAI embedding (batched by 20)
  → Upsert to Supabase documents table
```

### Database schema (`scripts/supabase-setup.sql`)

- **Table:** `documents` — id, content, metadata (jsonb), embedding (vector 1536), fts (tsvector)
- **Function:** `hybrid_search()` — vector similarity + BM25 keyword match, configurable weights
- **Indices:** IVFFlat (cosine), GIN (full-text), GIN (metadata)

### Retrieval (runtime)

```
User query
  → OpenAI embed (text-embedding-3-small)
  → Supabase hybrid_search RPC (top 10)
  → Haiku rerank (top 10 → top 5)
  → Diversify by article
  → Format as context for Claude
  → Extract source badges (article_id, section_id, anchor)
```

## Eval System

### Running evals

```bash
npm run evals          # full suite
```

### Structure

| Component | File |
|-----------|------|
| Runner | `evals/runner.ts` — loads datasets, calls chat API, checks assertions |
| Assertions | `evals/assertions.ts` — contains, notContains, minWords, maxWords, regex, language |
| LLM Judge | `evals/llm-judge.ts` — Haiku evaluates tone/quality |
| Results | `api/ops/_eval-results.json` — pass rate, failed tests, categories |

### Datasets (11 files in `evals/datasets/`)

| Dataset | Tests |
|---------|-------|
| `factual.json` | Career facts: dates, metrics, tech stack |
| `persona.json` | Voice: first person, no servile language, professional tone |
| `safety.json` | Jailbreak rejection, hallucination prevention |
| `rag.json` | RAG tool use correctness |
| `boundaries.json` | Scope: doesn't answer non-Brent questions |
| `multi-turn.json` | Conversation coherence |
| `languages.json` | Language handling (EN only) |
| `quality.json` | Response quality (word count, clarity) |
| `source-badges.json` | Correct article citations + section anchors |
| `voice.json` | Voice mode tests |
| `custom.json` | Project-specific tests |

## Prerender System

Post-build SSR via `scripts/prerender.tsx`:
- Uses React 19 `renderToString()` + StaticRouter
- Renders all pages to static HTML in `dist/`
- Injects JSON-LD per page
- Critters inlines critical CSS
- Client hydrates with `hydrateRoot()` (zero layout shift)

## Voice Mode

| File | Role |
|------|------|
| `src/useVoiceMode.ts` | WebSocket client, mic input, audio playback, state machine |
| `src/VoiceOrb.tsx` | Visual indicator (animated circle) |
| `src/useAudioAnalyser.ts` | Frequency/energy extraction for visualization |

State machine: idle → connecting → listening → thinking → speaking → error. Session timeout: 120s.

## Deployment

- **Host:** Vercel (Git push → auto deploy)
- **Static:** `dist/` served from CDN
- **Edge Functions:** `api/` routes (chat endpoint)
- **Domain:** cv.brentbeckwith.com (CNAME)

### Environment variables

| Variable | Purpose |
|----------|---------|
| `ANTHROPIC_API_KEY` | Claude API (chat + reranking) |
| `OPENAI_API_KEY` | Embeddings |
| `SUPABASE_URL` | RAG database |
| `SUPABASE_SERVICE_ROLE_KEY` | RAG write access |
| `LANGFUSE_PUBLIC_KEY` | Observability |
| `LANGFUSE_SECRET_KEY` | Observability |
| `LANGFUSE_BASE_URL` | Observability |

### Vercel config (`vercel.json`)

- Asset caching: 1 year immutable for `/assets/*` and `/fonts/*`
- CSP: strict whitelist (self, Vercel Live, GoatCounter, OpenAI, Pusher)
- HSTS: 2 years with preload
- Microphone permission: self (for voice mode)
- Trailing slash removal (permanent redirect)
- Rewrites: `/about`, `/privacy`, article slugs → prerendered HTML

## Observability

| System | Purpose | Dashboard |
|--------|---------|-----------|
| Langfuse | Chat traces, cost tracking, prompt versioning, LLM-as-Judge | us.cloud.langfuse.com |
| Vercel | Hosting, edge functions, deployments | vercel.com/dashboard |
| GoatCounter | Page views (privacy-friendly, no cookies) | cv-bb.goatcounter.com |
| Console easter egg | `window.__brent` object with stack info | Browser DevTools |

## Model Costs (tracked in `api/_shared/rag.js`)

| Model | Input | Output |
|-------|-------|--------|
| claude-sonnet-4-6 | $3/M tokens | $15/M tokens |
| claude-haiku-4-5 | $0.25/M tokens | $1.25/M tokens |
| text-embedding-3-small | $0.02/M tokens | — |
