# Spotter Digital landing site

Static site, no build step. Deployed by Vercel from GitHub: `main` is production, other branches get preview deployments unless switched off in `vercel.json`.

## Pages
- `old.html` (served at `/old`, noindex): the previous root page, v1 design and the performance-basis offer. Moved from `index.html` on 2026-11-17.
- `100-calls.html` (served at `/` and at `/100-calls`; there is no `index.html`, so `vercel.json` rewrites `/` to it): the new landing page, built on brand kit v3. Headline: We'll book you 100 sales calls with decision makers in your market. In 90 days, or you don't pay. It states the promise only; how that is settled, the price and payment are explained on the call, not on the page. The path still carries the old number. Right under the hero is the proof section (`#proof`, added 2026-11-19): real screenshots from client chats with names hidden. Its pictures and rules are in `assets/proof/README.md`.
- `results.html` (served at `/results`) and `roi-calculator.html`: older pages on the v1 inline styles.

## Brand kit
- `assets/spotter-brand-kit/spotter.css`: the one stylesheet for new pages. Tokens, components and section patterns.
- `assets/spotter-brand-kit/README.md`: the written rules.
- `assets/spotter-brand-kit/index.html`: every token and component rendered.
- `assets/spotter-brand-kit/logo`, `social`, `favicon`: logo files.

## `/100-calls` launch state (2026-11-17)
Launched without the two videos: the VSL slot, the "Watch the video" button and the walkthrough video were removed because neither video exists yet. The founder section names both co-founders, Yuri and Tristan, using Yuri's published facts only. When the VSL is ready, add it back in the hero as a Wistia embed. The page embeds the Calendly inline widget with the same link the root page uses, and every button scrolls to it.

## Run locally
```bash
python3 -m http.server 8801
```

Then open `http://localhost:8801/100-calls.html`.

## Old and reference only (not linked, not maintained)
- `index-legacy.html`: the "editorial teal" design from before v1.
- `process-option-3.html`, `process-option-4.html`: alternate "How it works" explorations for v1.
