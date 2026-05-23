# cv-bb

My portfolio site, live at [cv.brentbeckwith.com](https://cv.brentbeckwith.com).

I adapted this from [cv-santiago](https://github.com/santifer/cv-santiago) by Santiago Fernández de Valderrama because it had a clean design and a modern stack I wanted to understand from the inside: React 19, TypeScript, Vite, Claude API, Langfuse observability, and Vercel Edge deployment. Adapting a real codebase taught me more than a tutorial would have.

## Why this stack

Most portfolio sites are static HTML or a basic React SPA. This one has a production AI system behind it, which is what made it worth studying:

- **Streaming LLM integration** — the chatbot calls Claude's API with streaming responses over Server-Sent Events, not a simple request/response. That's the same pattern production AI products use.
- **Langfuse observability** — every chat conversation is traced with cost tracking, prompt versioning, and LLM-as-Judge evaluation. This is how companies monitor AI in production. Having it on a personal site meant I could learn the ops side of AI, not just the API call.
- **Automated eval suite** — a test runner that hits the live chatbot, runs deterministic assertions and LLM-judged tone checks, and reports pass rates. Most developers skip this entirely.
- **SSR prerender pipeline** — the build doesn't just bundle JavaScript. It prerenders pages for SEO, generates a sitemap, validates articles, and syncs prompts to Langfuse. A real build pipeline, not just `vite build`.
- **Edge deployment** — the chat API runs on Vercel Edge Functions, not a traditional server. Serverless, low-latency, globally distributed.

The frontend runs on current releases across the board — React 19, Vite 7 with SWC, and Tailwind CSS 4 — so nothing here is legacy or outdated. But the AI infrastructure is what made this codebase worth learning from.

## What I actually did

The original is a bilingual Spanish/English portfolio with articles, voice mode, and an AI chatbot. I didn't redesign the architecture. I worked inside it:

**Simplified the system.** Removed the entire bilingual i18n layer (883 lines across 2 deleted components and 12+ modified files), updated the prerender pipeline and sitemap generation to match. The codebase is 1,080 lines smaller than the original.

**Hardened security.** Added rate limiting with memory management to the chat API, request shape validation, XSS prevention, prompt leak defenses, and patched 12 npm audit vulnerabilities. Updated Content-Security-Policy headers when swapping analytics providers.

**Engineered the chatbot prompt.** Rewrote the system prompt (212-line diff) with honest-mode verb rules,  safeguards, a transferable-skills bridging framework, anti-extraction defenses, and role-play rejection. This is behavioral system design, not just copy replacement.

**Fixed the build.** Resolved pre-existing TypeScript errors and made `npm run build` pass end-to-end after removing the i18n system.

**Improved the eval suite.** Modified the test runner with API rate limiting, skip-stale-tests logic, and tightened assertions. Rewrote all 9 test datasets.

**Swapped analytics.** Replaced @vercel/analytics with GoatCounter (cookie-free, privacy-friendly). Updated CSP directives and the privacy policy.

**Documented the system.** Wrote a codemap (273 lines), content-source-map (166 lines), and information architecture doc (97 lines).

## Stack

React 19 / TypeScript / Vite 7 / Tailwind CSS 4 / Claude Sonnet 4.6 (streaming) / Langfuse / GoatCounter / Vercel Edge Functions

## License

MIT. See [LICENSE](LICENSE) for attribution.
