# Startup Journey: Cxntradict

## 1. Current Snapshot

- **Project name:** Cxntradict
- **Local folder:** `/Users/joshuadavis/startups/cxntradict`
- **Live URL:** https://cxntradict.noaerth.com (portfolio subdomain pattern)
- **Live site status:** HTTP **200**
- **Product:** Content narrative analysis — inspect messaging and positioning with structured outputs; interactive `/analyze` flow
- **Framework:** Next.js App Router (`src/app`), TypeScript, Tailwind 4, Supabase client utilities
- **Build command:** `pnpm build`
- **Local review command:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (2026-05-14)
- **GitHub remote:** https://github.com/M4G3LL4N0/cxntradict.git
- **GitHub push status:** Not run this loop
- **Deployment:** **Not run** this loop
- **Last updated:** 2026-05-14

## 2. Portfolio Score

| Dimension | Score (0–10) | Notes |
|-----------|----------------|-------|
| Product clarity | 8 | “Contradictions in narrative” angle is memorable |
| MVP reality | 7 | `/analyze` + API path; checkout hooks present |
| Visual quality | 8 | Hero + feature grid; editorial tone |
| Build health | 8 | **PASS** — stable App Router build |
| Customer urgency | 7 | Teams polishing pitch / landing copy |
| Market potential | 7 | Messaging QA adjacent to brand agencies |
| Monetization potential | 7 | Checkout route scaffolding |
| Growth potential | 8 | Shareable analysis summaries |
| Investor story | 8 | Clarifies positioning debt before spend |
| Local review readiness | 8 | `/` → `/analyze` on desktop and mobile |

- **Total score:** **75 / 100**
- **Classification:** **Promising venture** — sharp wedge; deepen proof and packaging
- **Best next loop type:** **Product loop** (analysis presets, export) + **Growth loop** (case snippet)

## 3. 10-Second Startup Explanation

- **What this startup is:** A narrative analysis surface that surfaces tensions and gaps in how content talks about itself.
- **Who it is for:** Founders, marketers, and creators who need sober feedback before publishing or pitching.
- **What pain it solves:** Everyone ships copy that contradicts earlier claims — hard to see your own framing drift.
- **What the user can do:** Run analysis on `/analyze` and review structured results.
- **Why it matters:** Tight narrative reduces churn, refunds, and confused buyers.
- **Primary CTA:** Run analysis (`/analyze`)

## 4. Founder Thesis

- **Core belief:** Narrative quality is measurable enough to operationalize — not purely subjective.
- **Why this should exist:** LLMs plus pattern checks catch inconsistency faster than committee edits.
- **Why now:** Every company publishes more surface area than ever; consistency is rare.
- **Market wedge:** “Contradiction report” before launch week.
- **Expansion path:** Team workspaces, templates by industry, API for CMS pipelines.
- **What this can become:** Default narrative QA layer for marketing stacks.
- **1000x opportunity:** Aggregate anonymized contradiction classes → category benchmarks.
- **Biggest strategic risk:** Perceived as “another AI critique” without flagship outcomes.
- **Next founder decision:** Ship one public before/after example + tighten analyze UX.

## 5. Live Website Diagnosis

Based on live site (HTTP **200**):

- **Status code or load status:** **200**
- **What visitors currently see:** Positioning hero, feature grid, path into analysis.
- **Current headline:** Verify live hero against repo `hero.tsx` / home.
- **Current CTA:** Begin analysis / deeper product exploration.
- **What works:** Clear category; `/analyze` route live; mobile `SiteHeader` drawer this loop; build **PASS**.
- **What feels weak:** Proof density — needs labeled case snapshots.
- **What feels generic:** “AI insights” framing if hero leans buzzword-heavy.
- **What feels confusing:** How deep the analysis goes on first visit — set expectations above the fold.
- **What feels unfinished:** Export/share loop for teams.
- **What feels premium:** Structured result cards if present in UI.
- **What is missing:** Obvious “what I get in 60 seconds” strip on home.
- **Highest leverage live-site fix:** One marquee contradiction example with redacted inputs.

## 6. Local Codebase Diagnosis

- **Framework:** Next.js App Router under `src/app`, TypeScript, Tailwind 4
- **App structure:** Marketing home + analyze experience + API routes (`/api/analyze`, `/api/checkout`)
- **Current routes:** `/`, `/analyze`
- **Current pages:** Home (marketing), analyze (form + results pattern)
- **Current components:** `SiteHeader` (mobile drawer this loop), `Hero`, `AnalyzeForm`, `AnalysisResult`, `FeatureGrid`, `Footer`, `CtaBand`
- **Current data files:** Types and mock/analysis helpers under `src/lib`
- **Current styling system:** Tailwind utility composition
- **Technical risks:** Third-party / env keys for OpenAI and Supabase if enabled in production paths
- **Build risks:** **PASS** today
- **Env var risks:** OpenAI + Supabase secrets for live analyze pipeline
- **API risks:** Rate limits and abuse on `/api/analyze`
- **Mobile risks:** Mitigated via `SiteHeader` drawer navigation
- **GitHub risks:** Remote exists; push not run this loop
- **Local review risks:** Validate analyze happy path + empty states on small screens

## 7. Company Role Analysis

### CEO / Founder

- **Thesis:** Own “narrative QA” wedge, not generic copy assistant.
- **Wedge:** Contradiction-first report with actionable rewrite hints.
- **Biggest opportunity:** Sell to launch-week marketing pods.
- **Biggest risk:** Output quality variance without guardrails.
- **Next decision:** Publish one flagship case study on home.

### Chief Product Officer

- **MVP:** `/` + `/analyze` + supporting API routes.
- **Primary workflow:** Paste or upload narrative → structured findings → next edit list.
- **Dashboard:** Backlog — team review surface.
- **Onboarding:** Explain inputs, limits, and time-to-result on `/analyze`.
- **Retention loop:** Save runs; compare versions week over week.

### Customer Researcher

- **Buyer:** Head of marketing, solo founder, agency lead.
- **User:** Person who owns external narrative.
- **Pain:** Ship-and-pray copy; inconsistent claims across pages.
- **Alternatives:** Agencies, peer review, generic LLM chat.
- **Objections:** “Will it understand our industry jargon?”
- **Trust builders:** Show methodology; cite example contradict classes.

### JTBD Strategist

- **Job-to-be-done:** “Catch embarrassing narrative holes before prospects do.”
- **Trigger:** Site relaunch, pricing change, controversial announcement.
- **Desired outcome:** Coherent storyline across hero, pricing, FAQ.
- **Old way:** Manual read-throughs.
- **New way:** Structured pass with prioritized fixes.

### UX Designer

- **UX issue:** Mobile reach to `/analyze` — **addressed** via `SiteHeader` drawer.
- **Homepage flow:** Hero → credibility → analyze CTA.
- **App flow:** Analyze form → loading → results scaffolding.
- **Mobile flow:** Drawer + thumb-friendly form layout.
- **Friction removed:** Hidden deep link on phone (improved).

### Visual Design Director

- **Visual identity:** Sharp, analytical — not playful meme aesthetic.
- **Type:** Strong headline hierarchy on marketing shell.
- **Color:** Restrained palette with accent for warnings/contradictions.
- **Motion:** Subtle — avoid distracting from text-heavy results.
- **Component style:** Shared cards for features and analysis blocks.

### Brand Strategist

- **Category:** Narrative intelligence / positioning QA.
- **Enemy:** Confident tone hiding structural inconsistency.
- **Memorable phrase:** “Say one thing — everywhere.”
- **Voice:** Direct, surgical, respectful of craft.

### Copy Chief

- **Headline:** Lead with contradiction diagnosis, not “AI magic.”
- **Subheadline:** What inputs, what outputs, how fast.
- **CTA:** “Analyze narrative” / “See sample report.”
- **Copy rules:** No absolute performance claims without evidence.

### Staff Engineer

- **Architecture:** Next App Router + route handlers for analysis.
- **Build:** **PASS**
- **Env strategy:** Secrets in host only; `.env.example` for local.
- **Dependency plan:** Pin model + JSON schema stability for analyze responses.

### Frontend Engineer

- **Pages:** Home, analyze.
- **Components:** `SiteHeader` mobile improvements this loop.
- **Interactions:** Form submit, results display, optional copy helpers.
- **Mobile fixes:** Drawer navigation; validate form ergonomics.

### Full-Stack Architect

- **Data:** Supabase optional for persistence; audit actual usage paths.
- **Future database:** Run history per workspace.
- **Future auth:** Org accounts with shared libraries of analyses.
- **Future API:** Headless analyze for CMS webhooks.
- **Future billing:** Seat-based + metered analyze credits.

### AI Product Architect

- **AI use:** Model-backed narrative extraction and contradiction surfacing.
- **Safe boundaries:** Analytical assistant — not legal, medical, or HR adjudication.
- **Future plan:** Few-shot libraries per vertical with human-reviewed templates.

### Data Moat Strategist

- **Data loop:** Aggregate contradiction types (opt-in telemetry).
- **Feedback loop:** Thumbs on usefulness per finding.
- **Benchmark:** Category typicality scores.

### Growth Marketer

- **Hook:** “Your pricing page disagrees with your hero — screenshot inside.”
- **SEO:** narrative analysis, positioning audit, messaging consistency.
- **Distribution:** Newsletter drops with redacted fixes.
- **Share loop:** One-click PDF / public link for a run.

### Sales Operator

- **Buyer pain:** Embarrassing contradictions caught by prospects on calls.
- **Proof:** Live **200** site + downloadable sample artifact.
- **Pricing:** Checkout path exists — align packaging copy.
- **Objections:** Privacy — clarify data retention policy on site.

### Pricing Strategist

- **Model:** Credits per analysis + team tier.
- **Free tier:** Limited runs / lighter models.
- **Paid tier:** Depth, history, exports.
- **Upgrade trigger:** Launch calendar with multiple stakeholders.

### Investor Analyst

- **Venture thesis:** Narrative QA becomes standard pre-publish checklist.
- **Market:** Every SMB with a web presence is TAM — crowded generic AI layer.
- **Expansion:** Agencies white-label reports.
- **Moat:** Proprietary contradiction taxonomy + UX workflow.
- **Metrics:** Analyze completion rate, paid conversion, weekly active workspaces.

### Competitive Intelligence Analyst

- **Category pattern:** Generic AI editors vs structured QA reports.
- **Differentiation:** Contradiction framing + UX tuned for edits.

### Experiment Designer

- **Tests:** Homepage flagship example vs minimalist hero only.
- **Success metric:** `/analyze` starts per session.
- **Feedback loop:** Post-run micro-survey.

### QA Engineer

- **Build:** **PASS**
- **Routes:** `/`, `/analyze`, API handlers smoke-tested locally.
- **Mobile:** `SiteHeader` drawer + form usability.
- **Regression:** Schema changes on analyze API responses.

### Security / Trust Reviewer

- **Risks:** Sensitive pasted strategy in prompts — retention policy clarity.
- **Disclaimers:** Not legal advice; editorial tool.
- **Data handling:** Minimize logs; configurable zero-retention mode (backlog).

### Legal / Policy Framing Reviewer

- **Risk category:** Medium if implied compliance certification.
- **Safe framing:** Editing assistant producing opinions, not certifications.
- **Required disclaimers:** Users responsible for published claims.

### GitHub Release Operator

- **Remote:** https://github.com/M4G3LL4N0/cxntradict.git
- **Commit / push:** Not run this loop

### Local Review Director

- **Command:** `cd /Users/joshuadavis/startups/cxntradict && pnpm dev`
- **URL:** http://localhost:3000
- **Test flow:** `/` → open drawer on mobile width → `/analyze` → submit sample

### Speed / Token Efficiency Operator

- **Scope:** Mobile `SiteHeader` + stable build; docs this loop.
- **Blockers:** Need flagship artifact to reduce repeated explanations.

### Taste Reviewer

- **Quality diagnosis:** Concept strong; hero must feel bespoke not template.
- **Premium fix:** Typographic restraint + one ruthless sample contradiction.

### Contrarian Strategist

- **Angle:** B2B only — sell to PE portcos standardizing positioning pre-close.
- **Wedge:** “48-hour narrative diligence” SKU.

### Community / Ecosystem Builder

- **Community:** Agency partners contributing vertical phrasebooks.
- **Public artifact:** “Contradiction pattern library” microsite.

### Automation Architect

- **Safe automation:** CI `pnpm build` on PR after secrets mocked.
- **Future:** Scheduled re-analysis when marketing repo changes (opt-in webhook).

## 8. Product Strategy

- **MVP definition:** Home + `/analyze` + reliable JSON-shaped analysis UX.
- **Primary workflow:** Input → analyze → actionable fixes list.
- **Input:** Paste text / structured fields per form implementation.
- **Output:** Structured contradiction and recommendation blocks.
- **First aha moment:** User sees a contradiction they genuinely missed.
- **Dashboard purpose:** Future team history and compares.
- **Retention loop:** Re-run after each major messaging change.
- **Monetization path:** Credits, teams, exports.

## 9. Roadmap

### Loop 1: Make It Understandable

- Clarify expectations on `/analyze` above the fold — **iterate**.

### Loop 2: Make It Real

- Mobile `SiteHeader` drawer — **done** this loop.

### Loop 3: Make It Premium

- Designed results PDF / share card.

### Loop 4: Make It Useful

- Templates by page type — pricing, hero, FAQ.

### Loop 5: Make It Monetizable

- Align checkout copy with actual packages.

### Loop 6: Make It Fundable

- Cohort metrics: repeat analyzes per account.

### Loop 7: Make It Compound

- Workspace history + diff between runs.

### Loop 8: Make It Defensible

- Private contradiction taxonomy dataset.

### Loop 9: Make It Distributable

- Agency partner kit with co-brand option.

### Loop 10: Make It Operationally Scalable

- Abuse controls, observability on API, cost caps per tenant.

## 10. Work Completed This Loop

### Loop Entry: 2026-05-14

- **Loop type:** Mobile navigation + journey documentation
- **Loop goal:** Mobile `SiteHeader` drawer for core routes; maintain **PASS** build; record journey
- **Changes made:** Client `SiteHeader` with mobile menu / drawer pattern for small screens.
- **Files changed:** `src/components/site-header.tsx`, layout wiring as applicable
- **Routes added:** none
- **Routes improved:** Reachability of `/analyze` from mobile header
- **Components added:** none
- **Components improved:** `SiteHeader`
- **MVP interactions added:** Mobile navigation affordance
- **Demo data added:** none
- **Copy improved:** none major this loop
- **Design improved:** Mobile nav shell consistency
- **Mobile improved:** Drawer-based `SiteHeader`
- **Engineering fixed:** Build remains **PASS**
- **Build result:** **PASS**
- **GitHub commit:** Not run
- **GitHub push result:** Not run
- **Deployment:** **Not run**
- **Local review command:** `pnpm dev`
- **Local review URL:** http://localhost:3000
- **What improved:** Mobile IA toward `/analyze`
- **What still needs work:** Case study content; export/share; push to GitHub

## 11. Next Loop Plan

- **Highest leverage next move:** Publish one flagship before/after example; add export.
- **Product:** Save last run locally; preset page-type templates.
- **Design:** Results readability pass on small screens.
- **Engineering:** Rate limits + structured logging on `/api/analyze`.
- **Growth:** Founder LinkedIn teardown post with redacted artifact.
- **Sales:** Stripe price table alignment with actual SKUs.
- **Monetization:** Credit meter UX.
- **Investor story:** Repeat usage + narrow wedge metrics.
- **Trust/safety:** Data retention copy on `/analyze`.
- **GitHub:** Commit mobile header; push to origin.
- **Biggest risk:** Outputs feel noisy — tighten schema and prompting.
- **Suggested next command:** `cd /Users/joshuadavis/startups/cxntradict && pnpm dev`

## 12. 1000x Backlog

### Product

- Team workspaces; version diff; CMS integrations

### Design

- Shareable report layout; print stylesheet

### Engineering

- Abuse detection; background jobs for long analyses

### Growth

- Vertical landing pages (SaaS, devtools, agencies)

### Sales

- Pilot bundle for launch-week teams

### Monetization

- Enterprise SSO backlog

### Investor Narrative

- “Narrative QA infrastructure”

### Data Moat

- Contradiction pattern frequencies by industry

### Automation

- GitHub Action posting analyze summary on docs PRs (opt-in)

### Partnerships

- Agencies; brand studios

### SEO / Content

- Glossary of contradiction types

### User Retention

- Email recap after material site changes

### Demo Quality

- Interactive sample with synthetic brand

### Mobile Experience

- Sticky CTA on analyze page

### Trust and Safety

- Zero-retention mode; SOC2 path

### Real API Integrations

- Webflow / Framer export hooks

### Enterprise Features

- Audit logs; roles

### Future AI Features

- Grounded quotes with source spans from uploaded HTML

### Community

- Public pattern library contributions

### Distribution

- Embeddable widget for Notion handoffs

### Templates

- Sales deck narrative checklist

### Analytics

- Funnel: home → analyze start → completion

### Internal Tools

- Prompt / schema playground behind auth

### Public Artifacts

- Methodology one-pager PDF
