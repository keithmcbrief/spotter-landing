# Spotter Digital landing site

Static site, no build step. Deployed by Vercel from GitHub: `main` is production, other branches get preview deployments unless switched off in `vercel.json`.

## Pages
- `index.html`: the root page. Still the v1 design and the performance-basis offer. Not changed by the brand kit v2 work.
- `40-calls.html` (served at `/40-calls`): the new landing page, built on brand kit v2. Headline: We'll book you 100 sales calls with decision makers in your market. In 90 days, or you don't pay. It states the promise only; how that is settled, the price and payment are explained on the call, not on the page. The path still carries the old number.
- `results.html` (served at `/results`) and `roi-calculator.html`: older pages on the v1 inline styles.

## Brand kit
- `assets/spotter-brand-kit/spotter.css`: the one stylesheet for new pages. Tokens, components and section patterns.
- `assets/spotter-brand-kit/README.md`: the written rules.
- `assets/spotter-brand-kit/index.html`: every token and component rendered.
- `assets/spotter-brand-kit/logo`, `social`, `favicon`: logo files.

## Before `/40-calls` goes live
Copy that is not final is wrapped in `<span class="sd-ph" data-ph="...">`, and a draft banner sits across the top. List what is left:

```bash
grep -o 'data-ph="[^"]*"' 40-calls.html | sort | uniq -c
```

The new VSL goes in the hero of `40-calls.html`; the comment there shows the embed. The page also needs a 2 to 3 minute walkthrough video of the flowchart and two founder facts (background, location). It embeds the Calendly inline widget with the same link the root page uses, and every button scrolls to it.

## Run locally
```bash
python3 -m http.server 8801
```

Then open `http://localhost:8801/40-calls.html`.

## Old and reference only (not linked, not maintained)
- `index-legacy.html`: the "editorial teal" design from before v1.
- `process-option-3.html`, `process-option-4.html`: alternate "How it works" explorations for v1.
