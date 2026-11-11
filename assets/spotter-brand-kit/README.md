# Spotter Digital brand kit (v2, 2026-11-11)

One stylesheet, `spotter.css`, is the source of truth for new pages on the marketing site. `index.html` in this folder renders every token and component from it. The 40 calls landing page (`/40-calls.html`, served at `/40-calls`) has no styles of its own: it composes the classes documented here.

Change a color, size or spacing value in `spotter.css` and nowhere else.

The root page (`/index.html`), `results.html` and `roi-calculator.html` still carry the v1 styles inline (`vk-*` classes, Tailwind CDN, sharp 2px corners). They have not been migrated.

## The idea

The pitch is arithmetic: count the market, then promise a number it can support. The kit borrows from a marked-up agreement, quietly:

- Warm paper, green-black ink, the logo teal for dark surfaces.
- One accent, a highlighter. It marks the one phrase that matters on a screen. Nothing else.
- Figures and labels in a mono face.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| `--ink` | `#0B1B1A` | Text, primary button, final CTA band, footer |
| `--muted` | `#5B6866` | Secondary text (5.3:1 on paper) |
| `--paper` | `#F6F4EE` | Default page background |
| `--paper-deep` | `#EDEAE1` | Reserved for tinted fills |
| `--white` | `#FFFFFF` | Cards on paper; alternate section background |
| `--line` / `--line-strong` | `#DFDBD0` / `#C6C1B3` | Borders and rules |
| `--teal-900` | `#04302F` | Video frame, deepest surface |
| `--teal-800` | `#023E3E` | The teal in the logo files. Dark sections and dark cards |
| `--teal-700` | `#004F4D` | Interactive teal on light: eyebrows, focus ring, button hover |
| `--teal-300` / `--teal-100` | `#8FBDB7` / `#E1ECE9` | Tints |
| `--highlight` | `#DCF36A` | The accent. Highlighter stroke, primary button on dark |
| `--on-dark` / `--on-dark-muted` | `#F3F6F1` / `#A9C2BE` | Text on teal and ink |

Rules:

- The highlighter appears at most once per screen in a heading. If it is everywhere it means nothing.
- No gradients as decoration, no second accent color, no pure black.
- Placeholder amber (`.sd-ph`) is not a brand color. It exists so unfinished copy cannot ship unnoticed.

### Surface modes

Sections set the surface; components adapt. Add one modifier to `.sd-section`:

| Class | Background | Notes |
| --- | --- | --- |
| (none) | paper | Cards are white |
| `.sd-section--white` | white | Cards are paper |
| `.sd-section--teal` | teal 800 | Text flips to light, accent text and primary button become the highlighter |
| `.sd-section--ink` | ink | Same as teal, darker. Used for the final CTA |

Components read `--fg`, `--fg-muted`, `--rule`, `--surface`, `--accent-text` and `--label-accent`, never a raw color. On dark surfaces eyebrows use teal 300, so the highlighter stays reserved for the phrase and the button. `.sd-card--dark` applies the teal mode to a single card.

## Type

| Role | Class | Face | Size | Weight / tracking |
| --- | --- | --- | --- | --- |
| Display | `.sd-display` | Switzer | 40 to 72px, fluid | 500, -0.04em, line-height 1.02 |
| Heading 2 | `.sd-h2` | Switzer | 32 to 60px, fluid | 500, -0.035em, 1.05 |
| Heading 3 | `.sd-h3` | Switzer | 21 to 24px | 600, -0.018em, 1.2 |
| Lead | `.sd-lead` | Switzer | 18 to 20px | 400, line-height 1.55 |
| Body | `.sd-body` | Switzer | 17px | 400, line-height 1.6 |
| Small | `.sd-small` | Switzer | 15px | 400 |
| Label | `.sd-label`, `.sd-eyebrow` | Chivo Mono | 12px | 500, uppercase, +0.12em |
| Figures | `.sd-num` | Chivo Mono | inherits | tabular numerals |

Fonts load from Fontshare (Switzer 400, 500, 600, 700) and Google Fonts (Chivo Mono 400, 500):

```html
<link href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Rules:

- Large type is medium weight and tightly tracked. Small headings (heading 3, step titles) are semibold.
- Headings are sentence case and end with a period when they are a sentence. No all caps headings.
- Text columns stop at `--measure` (62 characters).
- Emphasis inside a heading is the highlighter (`.sd-hl`), never italics or a color change. On dark surfaces `.sd-hl` becomes highlighter-colored text.

## Space, shape, depth

- Spacing scale, 4px base: `--s-1` 4, `--s-2` 8, `--s-3` 12, `--s-4` 16, `--s-5` 24, `--s-6` 32, `--s-7` 48, `--s-8` 64, `--s-9` 96.
- `--gutter`: 20 to 40px side padding. `--container`: 1180px. `--section-y`: 72 to 136px vertical section padding.
- Radius: `--r-sm` 6 (chips, bars), `--r-md` 14 (cards, figures), `--r-lg` 24 (large cards, steps, video), `--r-pill` (buttons).
- Two shadows only: `--shadow-card` for a raised white card, `--shadow-lift` for the dark hero card and the video frame. Most cards have a border and no shadow.

## Components

| Component | Classes | Notes |
| --- | --- | --- |
| Button | `.sd-btn` + `--primary`, `--accent`, `--ghost`, `--sm` | Pill, 52px tall (42px small). Primary is ink on light and highlighter on dark, automatically. One primary button per section |
| Text link | `.sd-link` | Underlined, 1px, offset 5px |
| Eyebrow | `.sd-eyebrow` | Mono label with a short rule in front. One per section header |
| Chip | `.sd-chip` | Small bordered fact |
| Placeholder | `.sd-ph` + `data-ph="key"`, `--bare`; `.sd-draft` | Dashed amber box for copy that is not final. `--bare` keeps a heading's type. `.sd-draft` is the banner across the top. See below |
| Card | `.sd-card` + `--lg`, `--raised`, `--dark`, `--outline` | `.sd-card__title` for the heading |
| Fit list | `.sd-fit` + `--yes` or `--no`, `.sd-fit__mark` | Who it is for and who it is not for |
| FAQ | `.sd-faq`, `.sd-faq__item`, `.sd-faq__icon`, `.sd-faq__answer` | Native `details` and `summary`. No script |
| Video frame | `.sd-video-wrap`, `.sd-video`, `.sd-video__slot`, `.sd-video__play` | 16:9. Holds the VSL embed; shows a labelled slot until it exists |
| Formula | `.sd-formula`, `.sd-formula__term`, `--result`, `.sd-formula__op` | The market count written out |
| Check list | `.sd-checks` | Plain list with teal checks |

## Section patterns

| Pattern | Classes | Use |
| --- | --- | --- |
| Container | `.sd-container` | Every section's inner wrapper |
| Section | `.sd-section` + surface modifier, `--tight`, `--flush-top` | Vertical rhythm |
| Section header | `.sd-head`, `--center` | Eyebrow, heading, optional lead. Max 820px wide |
| Nav | `.sd-nav`, `.sd-nav__inner`, `.sd-brand`, `.sd-nav__links` | Sticky, blurred paper. Links hide under 900px; the button stays |
| Hero | `.sd-hero`, `.sd-hero__copy`, `.sd-hero__actions`; `.sd-hero--center` or `.sd-hero__grid` | Centered (copy, then the video frame under it) is what the 40 calls page uses. `.sd-hero__grid` is the two-column variant: copy left, one object right, stacking under 1000px |
| Steps | `.sd-steps`, `.sd-step`, `.sd-step__num`, `.sd-step__title`, `.sd-step__figure` | Numbered rows, copy and a figure. Numbers only where order is real |
| Split | `.sd-split`, `.sd-split__aside` | Sticky heading left, content right. FAQ |
| Two-up | `.sd-grid-2` | Two equal columns from 860px |
| CTA band | `.sd-cta` | Centered block: eyebrow, display heading, lead, one button. The guarantee band and the final call to action |
| Footer | `.sd-footer`, `.sd-footer__inner`, `.sd-footer__links` | Ink |

Section order on the 40 calls page: hero with the video, how it works, who it is for, the guarantee band, FAQ, final call to action. Surfaces run paper, white, paper, teal, white, ink.

## Motion

- `.sd-reveal`: fade and 18px rise on scroll, once. `--delay` staggers a neighbor.
- Buttons: color change and a 3px arrow nudge. FAQ icon: plus turns to minus.
- Everything is off under `prefers-reduced-motion`, and nothing is hidden when JavaScript is off.

## Placeholders

Anything not final on the page is wrapped like this:

```html
<span class="sd-ph" data-ph="price">PLACEHOLDER: price</span>
```

List every one before a deploy:

```bash
grep -o 'data-ph="[^"]*"' 40-calls.html | sort | uniq -c
```

Current keys: `draft-banner`, `vsl`. The page must not go live while any remain.

## Voice

- First person plural, plain words, specific numbers. Short sentences.
- No proof we cannot source: no client logos, testimonials, case studies or result numbers unless `offer/current_offer.md` in the business repo approves the claim.
- The page states the promise and nothing about how the guarantee is settled. Refund terms, price and payment are explained on the call, not on the site (Yuri, 2026-11-11).
- No emojis. No em dashes or en dashes.

## Logo

Files are in `logo/`, `social/` and `favicon/`, unchanged from v1.

- `logo/spotter-mark.png`: color mark, transparent. Nav on paper or white.
- `logo/spotter-mark-white.png`: white mark. Footer and any ink or teal surface.
- `logo/spotter-mark-black.png`: one-color print.
- `logo/spotter-logo-full.png`, `logo/spotter-logo-full-white-bg.png`: mark with wordmark, for documents and email signatures.
- `social/spotter-avatar-1000.png`: square avatar for profiles.

Do:

- Keep clear space around the mark equal to the height of its small circuit node.
- Use the mark with the "Spotter Digital" wordmark set in Switzer 700 in the nav and footer (`.sd-brand`).

Do not:

- Stretch, rotate or recolor the mark.
- Put the color mark on teal or ink. Use the white mark there.
- Put the mark on the highlighter color.

All logo files are raster PNGs from a 1254px source. For print larger than about 6 inches, redraw the mark as a vector first.

## Favicon

```html
<link rel="icon" type="image/png" sizes="32x32" href="assets/spotter-brand-kit/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/spotter-brand-kit/favicon/favicon-16x16.png">
<link rel="shortcut icon" href="assets/spotter-brand-kit/favicon/favicon.ico">
<link rel="apple-touch-icon" href="assets/spotter-brand-kit/favicon/apple-touch-icon.png">
<link rel="manifest" href="assets/spotter-brand-kit/favicon/site.webmanifest">
<meta name="theme-color" content="#f6f4ee">
```
