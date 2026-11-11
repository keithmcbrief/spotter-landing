# Spotter Digital landing site

Static site, no build step. Deployed by Vercel from GitHub: `main` is production, other branches get preview deployments unless switched off in `vercel.json`.

## Live pages
- `index.html`: the landing page. Built on brand kit v2 around the guaranteed-meetings offer (a set number of qualified meetings a month, paid up front, refund for every meeting that falls short). The number is a placeholder, set once as `data-guarantee` on the `<html>` tag.
- `results.html` (served at `/results`) and `roi-calculator.html`: older pages, still on the v1 inline styles and the retired performance-basis wording. Not linked from the landing page until they are reworded.

## Brand kit
- `assets/spotter-brand-kit/spotter.css`: the one stylesheet. Tokens, components and section patterns.
- `assets/spotter-brand-kit/README.md`: the written rules.
- `assets/spotter-brand-kit/index.html`: every token and component rendered.
- `assets/spotter-brand-kit/logo`, `social`, `favicon`: logo files.

## Before the landing page goes live
Copy that is not final is wrapped in `<span class="sd-ph" data-ph="...">`. List what is left:

```bash
grep -o 'data-ph="[^"]*"' index.html | sort | uniq -c
```

The new VSL goes in the `#video` section of `index.html`; the comment there shows the embed.

## Run locally
```bash
python3 -m http.server 8801
```

## Old and reference only (not linked, not maintained)
- `index-legacy.html`: the "editorial teal" design from before v1.
- `process-option-3.html`, `process-option-4.html`: alternate "How it works" explorations for v1.
- The v1 landing page (performance-basis offer, Tailwind CDN) is in git history before the brand kit v2 commit.
