# Spotter Digital brand kit (v3, 2026-11-12)

One stylesheet, `spotter.css`, is the source of truth for new pages on the marketing site. `index.html` in this folder renders every token and component from it. The guaranteed calls landing page (`/100-calls.html`, served at `/100-calls`; the path still carries the old number) has no styles of its own: it composes the classes documented here.

Change a color, size or spacing value in `spotter.css` and nowhere else.

The root page (`/index.html`), `results.html` and `roi-calculator.html` still carry the v1 styles inline (`vk-*` classes, Tailwind CDN, sharp 2px corners). They have not been migrated.

## The idea

Yuri asked for a full redesign that feels premium, in the family of anevo.com, leadbird.io, pipeline.tech, varickagents.com and scalestack.ai (2026-11-12). What those pages share: two neutrals and one accent, a lot of empty space, large tight type, small mono labels, soft cards, and one dark section used for weight. v3 does that in Spotter's own terms:

- White and cool grey grounds, deep navy ink, navy falling to near black for dark sections.
- One accent, cobalt. It marks the one phrase that matters on a screen, the primary button and small tinted chips. Nothing else.
- A dot grid with one dot lit up. It stands for one buyer picked out of the market, and it sits behind the hero, the dark sections, the video frame and the figures.
- Labels in a mono face.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#0A1430` | Text, the top of dark sections |
| `--night` | `#050A1C` | The bottom of dark sections, footer, video screen |
| `--muted` | `#56607A` | Secondary text (6.2:1 on white) |
| `--white` | `#FFFFFF` | Page ground, cards |
| `--mist` / `--mist-deep` | `#F5F7FB` / `#EBEFF7` | Alternate section ground, inset panels, tags |
| `--line` / `--line-strong` | `#E3E8F1` / `#CBD3E2` | Borders |
| `--accent` | `#2447F9` | The accent. Primary button, emphasized phrase, links |
| `--accent-strong` | `#1634D1` | Button hover |
| `--accent-300` / `--accent-100` / `--accent-50` | `#A9BBFF` / `#E7EDFF` / `#F3F6FF` | Tints: outlines, chips, our column in the comparison table |
| `--accent-on-dark` | `#8EA6FF` | The accent on navy |
| `--on-dark` / `--on-dark-muted` | `#F4F6FC` / `#A5B0CC` | Text on navy |

- The accent appears at most once per screen in a heading. If it is everywhere it means nothing.
- Amber is reserved for placeholders (`.sd-ph`, `.sd-draft`). It is not a brand color.
- Two other palettes (Ember, Evergreen) are drawn on the kit page for comparison only. They are not in `spotter.css`.

### Surface modes

| Class | Ground | What changes |
| --- | --- | --- |
| (none) | mist | Cards are white |
| `.sd-section--white` | white | Cards are white with a border and a soft shadow |
| `.sd-section--navy` | navy to near black, accent glow, dot grid | Text flips to light, the accent turns pale, the primary button turns white, cards turn to glass |
| `.sd-section--ink` | same as navy | Used for the booking section |

Components read `--fg`, `--fg-muted`, `--rule`, `--surface`, `--inset`, `--tint`, `--tint-fg`, `--accent-text` and `--label-accent`, never a raw color.

## Type

| Role | Class | Face | Size | Weight and tracking |
| --- | --- | --- | --- | --- |
| Display | `.sd-display` | Geist | 40 to 72px, fluid | 600, -0.04em, line-height 1.02 |
| Heading 2 | `.sd-h2` | Geist | 30 to 50px, fluid | 600, -0.035em, 1.08 |
| Heading 3 | `.sd-h3` | Geist | 19 to 22px | 600, -0.02em, 1.25 |
| Lead | `.sd-lead` | Geist | 17 to 19px | 400, line-height 1.55 |
| Body | `.sd-body` | Geist | 16px | 400, line-height 1.6 |
| Small | `.sd-small` | Geist | 15px | 400 |
| Label | `.sd-label`, `.sd-eyebrow` | Geist Mono | 12px | 500, uppercase, +0.06 to +0.08em |
| Figures | `.sd-num` | Geist Mono | inherits | tabular numerals |

Both faces load from Google Fonts (Geist 400, 500, 600, 700; Geist Mono 400, 500). Both are open source (SIL OFL):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
```

- Headings are sentence case and end with a period when they are a sentence. No all caps headings.
- Text columns stop at `--measure` (60 characters).
- Emphasis inside a heading is the accent color (`.sd-hl`), never italics. In the hero the key phrase (`.sd-hero__big .sd-hl`) is the accent color at the same size and weight as the rest of the headline.

## Space, shape, depth

- Spacing scale, 4px base: `--s-1` 4, `--s-2` 8, `--s-3` 12, `--s-4` 16, `--s-5` 24, `--s-6` 32, `--s-7` 48, `--s-8` 64, `--s-9` 96.
- `--gutter`: 20 to 40px side padding. `--container`: 1160px. `--section-y`: 72 to 128px vertical section padding.
- Radius: `--r-sm` 8, `--r-md` 14 (cards), `--r-lg` 22 (large cards, steps, video), `--r-pill` (eyebrows, chips, tags). Buttons are 12px.
- Three shadows: `--shadow-xs` (every card, a hairline of depth), `--shadow-card` (raised cards, steps, the open FAQ item), `--shadow-lift` (video frame, founder photo). `--glow` is the accent-colored shadow under primary buttons.
- The dot grid: `--dots` and `--dots-on-dark`, 26px step.

## Components

| Component | Classes | Notes |
| --- | --- | --- |
| Button | `.sd-btn` + `--primary`, `--invert`, `--ghost`, `--sm`, `--lg` | Rounded rectangle (12px), 50px tall (40px small, 60px large). Primary is the accent on light and white on dark, automatically. Ghost is white with a border. One primary button per section |
| Text link | `.sd-link` | Accent color, underlined, 1px |
| Eyebrow | `.sd-eyebrow` | A small pill with the accent dot in front. One per section header |
| Chip | `.sd-chip` | Small bordered fact |
| Placeholder | `.sd-ph` + `data-ph="key"`, `--bare`; `.sd-draft` | Dashed amber box for copy that is not final. `--bare` keeps a heading's type. `.sd-draft` is the banner across the top. See below |
| Card | `.sd-card` + `--lg`, `--raised`, `--dark`, `--outline` | `.sd-card__title` for the heading |
| Fit list | `.sd-fit` + `--yes` or `--no`, `.sd-fit__mark` | Who it is for and who it is not for |
| FAQ | `.sd-faq`, `.sd-faq__item`, `.sd-faq__icon`, `.sd-faq__answer` | Native `details` and `summary`. No script |
| Video frame | `.sd-video-wrap`, `.sd-video`, `.sd-video__slot`, `.sd-video__play` | 16:9. Holds the VSL embed; shows a labelled slot until it exists |
| Formula | `.sd-formula`, `.sd-formula__term`, `--result`, `.sd-formula__op` | The market count written out |
| Check list | `.sd-checks` | One small card per line, with a tinted round check |
| Pain card | `.sd-card.sd-pain` | Mono label, a bold lead line, one or two sentences |
| Points | `.sd-points`, `.sd-points__num`, `.sd-points__body` | One card per point with a tinted number. The why-us list |
| Included list | `.sd-included` | Every tangible thing we do, one cell each. Never an item called "research" |
| Flowchart | `.sd-flow`, `.sd-flow__title`, `.sd-flow__lane`, `.sd-flow__stage`, `.sd-flow__nodes`, `.sd-flow__node`, `--result` | The system, stage by stage, labeled with its name. Rows with right arrows on desktop, one column with down arrows on phones |
| Comparison table | `.sd-compare` | A real `table`. The last column is ours: a tinted, outlined panel. Each `td` carries `data-label` so rows stack under 800px |
| Founder | `.sd-founder`, `.sd-founder__photo`, `.sd-founder__copy` | Photo one side, three or four short lines the other |
| Calendar embed | `.sd-embed`, `.sd-embed__fallback`, `.sd-book`, `.sd-book__foot` | White panel that holds the Calendly inline widget |
| Large button | `.sd-btn--lg` | The one big button after the included list |
| Mock panel | `.sd-mock`, `.sd-mock__row`, `--accent`; `.sd-tag` | A small made-up piece of screen that shows what a thing looks like. It always carries the `Example` tag and never holds a result number, a client name or a person's name |

## Section patterns

| Pattern | Classes | Use |
| --- | --- | --- |
| Container | `.sd-container` | Every section's inner wrapper |
| Section | `.sd-section` + surface modifier, `--tight`, `--flush-top` | Vertical rhythm |
| Section header | `.sd-head`, `--left` | Eyebrow, heading, optional lead. Centered, max 780px wide. `--left` aligns it left |
| Nav | `.sd-nav`, `.sd-nav__inner`, `.sd-brand`, `.sd-nav__links` | A floating bar: rounded, bordered, blurred white, 12px from the top. Links hide under 900px; the button stays. `.sd-brand` holds the inline mark and the name |
| Hero | `.sd-hero`, `.sd-hero__copy`, `.sd-hero__headline` (with `.sd-hero__line` and `.sd-hero__big` for the one key phrase, picked out by color only), `.sd-hero__promise`, `.sd-hero__actions`, `.sd-hero__buttons`, `.sd-hero__covered`; `.sd-hero--center` or `.sd-hero__grid` | Centered (copy, then the video frame under it) is what the `/100-calls` page uses. `.sd-hero__grid` is the two-column variant: copy left, one object right, stacking under 1000px |
| Steps | `.sd-steps`, `.sd-step`, `.sd-step__num`, `.sd-step__title`, `.sd-step__figure` | Numbered rows, copy and a figure. Numbers only where order is real |
| Split | `.sd-split`, `.sd-split__aside` | Sticky heading left, content right. FAQ |
| Two-up | `.sd-grid-2` | Two equal columns from 860px |
| Three-up | `.sd-grid-3` | Three equal columns from 860px |
| Section button | `.sd-section__cta` | One centered button under a section, with an optional line above or below. Every major section ends with one; labels vary |
| CTA band | `.sd-cta` | Centered block: eyebrow, display heading, lead, one button. Not used on the `/100-calls` page at the moment |
| Footer | `.sd-footer`, `.sd-footer__inner`, `.sd-footer__links` | Night |

Section order on the `/100-calls` page follows the long-form order for cold email traffic (business repo, `brain/topics/marketing-vsl-landing-pages.md`):

1. Hero: audience pill, outcome headline, the guarantee on its own line, sub-headline, two buttons (book, watch the video), a row of what we handle, VSL
2. Pain points: what they already tried
3. Why us: the market count
4. How it works: three steps
5. Everything included, then the large button
6. The system: walkthrough video over the labeled flowchart. This stands in for case studies until there are client results we are cleared to show
7. Comparison table
8. Who it is for, and who it is not for
9. Founder
10. Book the call: the calendar embedded on the page
11. FAQ

Surfaces run white (hero), mist, white, mist, white, navy, white, mist, white, navy, mist. Every button on the page scrolls to the calendar (`#book`).

## Motion

- `.sd-reveal`: fade and 18px rise on scroll, once. `--delay` staggers a neighbor.
- Buttons: color change, a 1px lift and a 3px arrow nudge. FAQ icon: plus turns to minus.
- Everything is off under `prefers-reduced-motion`, and nothing is hidden when JavaScript is off.

## Placeholders

Anything not final on the page is wrapped like this:

```html
<span class="sd-ph" data-ph="price">PLACEHOLDER: price</span>
```

List every one before a deploy:

```bash
grep -o 'data-ph="[^"]*"' 100-calls.html | sort | uniq -c
```

Current keys: `draft-banner`, `vsl`, `walkthrough-video`, `founder-background`, `founder-location`. The page must not go live while any remain.

## Voice

- First person plural, plain words, specific numbers. Short sentences.
- No proof we cannot source: no client logos, testimonials, case studies or result numbers unless `offer/current_offer.md` in the business repo approves the claim.
- The page states the promise, "We'll book you 100 sales calls with decision makers in your market. In 90 days, or you don't pay.", and nothing about how that is settled. Terms, price and payment are explained on the call, not on the site (Yuri, 2026-11-11).
- The promise number and the 90 days are written in four places only: the `title`, the meta description, `og:title` and the `h1`. The guarantee line ("In 90 days, or you don't pay.") sits under the `h1` as `.sd-hero__promise`, so the 90 days is written there and not in the `h1`. Everywhere else the page says "the number", so a change to the promise is a four-line edit.
- Below the hero, every line says the actual thing we do or the actual thing the client gets. Short sentences, common words, one idea per sentence. No clever headings, no slogans. Sixth grade reading level or lower (Yuri, 2026-11-11). The banned word list is in the business repo: `skills/spotter/cold-email-generator/references/WRITING_RULES.md`, Style.
- No emojis. No em dashes or en dashes.

## Logo

New in v3. Yuri picked this mark on 2026-11-12 from a round of concepts. The old PNG files are still in `logo/` and the root page still uses them.

The mark is a disc cut by one slash, with the two halves slipped apart so they read as an S. Files are in `logo/v3/`, all vector, the wordmark is outlines (no font needed):

- `spotter-lockup.svg`, `spotter-lockup-white.svg`: mark and the name "Spotter" in Geist 700.
- `spotter-mark.svg`, `spotter-mark-white.svg`: the mark alone.
- `spotter-icon.svg`: the mark in white on a navy tile, for favicons and avatars.

On pages the mark is inline SVG inside `.sd-brand`, so it takes the text color on light and dark. The name next to it is "Spotter"; the full company name "Spotter Digital" stays in running text and the footer line.

Do:

- Keep clear space of half the mark's height around the logo.
- Use the white lockup on navy.

Do not:

- Recolor the two halves differently, close the slash, stretch the mark, or set the name in another face.
- Use the mark smaller than 16px. Under 24px use `spotter-icon.svg`.

The concept came from an image model and was redrawn by hand as a vector. Before it goes on anything public beyond this site, check it is not close to an existing company's mark.

The files are built by a script (Geist outlines through fontTools, favicons through Pillow); it is not in the repo. Ask for it if the logo needs to change.

## Favicon

`favicon/v3/` holds PNGs of the icon at 16, 32, 48, 180, 192 and 512px. The old favicons in `favicon/` are still used by the root page, `results.html` and `roi-calculator.html`.

```html
<link rel="icon" type="image/svg+xml" href="assets/spotter-brand-kit/logo/v3/spotter-icon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="assets/spotter-brand-kit/favicon/v3/icon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/spotter-brand-kit/favicon/v3/icon-16.png">
<link rel="apple-touch-icon" href="assets/spotter-brand-kit/favicon/v3/icon-180.png">
<meta name="theme-color" content="#ffffff">
```
