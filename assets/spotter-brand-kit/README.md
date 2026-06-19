# Spotter Digital — Brand Kit

## Colors

The brand runs on a teal system. The logo mark carries the deepest teal; the website UI uses a slightly brighter teal as its primary accent, on white with a neutral support set.

| Role | Hex | RGB | Where it's used |
|------|-----|-----|------|
| Brand Teal (primary) | `#004F4D` | `0, 79, 77` | Buttons, links, highlights, accents, active states |
| Deep Teal | `#003837` | `0, 56, 55` | Dark panels, footer, large feature surfaces |
| Logo Mark Teal | `#023E3E` | `2, 62, 62` | The teal baked into the logo PNGs (do not restyle) |
| Ink | `#202020` | `32, 32, 32` | Headings and body text |
| Steel | `#5F5F5F` | `95, 95, 95` | Secondary / supporting text |
| Mist | `#F4F4F4` | `244, 244, 244` | Tinted section backgrounds, input fills |
| Line | `#E2E2E2` | `226, 226, 226` | Borders and dividers |
| White | `#FFFFFF` | `255, 255, 255` | Primary background |

CSS tokens (as used in the site): `--brand:#004F4D`, `--navy:#003837` (deep teal), `--deep:#00302F` (darkest shade), `--ink:#202020`, `--steel:#5F5F5F`, `--mist:#F4F4F4`, `--line:#E2E2E2`.

**Accent tints** — teal `#004F4D` at low opacity carries component surfaces and depth:
- `rgba(0,79,77,0.08)` icon-chip fill · `rgba(0,79,77,0.18)` icon-chip border
- `rgba(0,79,77,0.45)` card-hover border · `rgba(0,79,77,0.12)` illustration fill
- soft shadows tinted with deep teal `rgba(0,56,55,0.35)`

**On dark teal panels** — emphasis + chrome accents:
- `#7FB8B2` light-teal accent (emphasis words on the deep-teal panel)
- `#CFE3E0` soft-teal accent (emphasis on the bright-teal guarantee panel)
- white overlays: `rgba(255,255,255,0.08)` fills, `0.2`–`0.35` borders

## Typography

| Role | Typeface | Weights | Use |
|------|----------|---------|-----|
| Display & body | **Switzer** | 400, 500, 600, 700 | Headlines (500, tracking ≈ −0.04em), body copy, UI |
| Mono / labels | **Chivo Mono** | 400, 500, 600 | Eyebrows, micro-labels, data figures, code |

Load both:

```html
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

- **Display headings** — Switzer 500, tracking ≈ −0.04em, line-height 1.0; set a key phrase in Brand Teal for emphasis (`em`, not italic).
- **Sub-headings** — Switzer 500, tracking ≈ −0.02em, line-height 1.1.
- **Body** — Switzer 400; default text color is Steel, headings are Ink.
- **Labels / eyebrows** — Chivo Mono, uppercase, ~12px.

## Components & patterns

The site is built from a small set of reusable classes (`vk-*`). Everything uses **sharp 2px corners** and the teal system above.

### Eyebrow pills (`vk-pill`)
Mono label above a heading. 1px Line border, 2px radius, `7px 12px` padding, Chivo Mono 12px uppercase, with a 7×7px Brand Teal **square** dot. On dark panels use the light variant: white text, `rgba(255,255,255,0.35)` border, white dot.

### Buttons (`vk-btn`)
Sharp 2px rectangles, Switzer 500. Signature hover: a fill **rises from the bottom** (0.42s ease) while the trailing arrow nudges up-right. Variants:
- **Primary** — Brand Teal bg, rises to Deep Teal
- **Navy** — Deep Teal bg, rises to Brand Teal
- **Light** — white bg / teal text (for dark panels), rises to Brand Teal with text flipping white
- **Outline** — transparent / Ink border, rises to Ink

### Cards / tiles (`vk-tile`)
White, 1px Line border, 2px radius. On hover the border turns teal (`rgba(0,79,77,0.45)`) and a soft deep-teal shadow lifts it.

### Icon chips (`vk-ico`)
48×48, 2px radius. Light surfaces: teal-tint fill + teal border + teal stroke icon. Dark panels: white-overlay fill + white icon. Icons are stroke SVGs, ~1.7px weight.

### Layout & rhythm
- Content column `max-w-7xl` with `px-5 md:px-10` padding; hero column `max-w-5xl`.
- Section vertical padding `py-20 md:py-28`.
- Sections alternate **white → mist → deep-teal** panels for rhythm.

### Motion
- **Scroll reveal** — elements fade in and rise 16px as they enter view; honors `prefers-reduced-motion`.
- **Button fill** rises from the bottom on hover; the **logo marquee** auto-scrolls with an edge fade mask.
- Illustrations animate subtly on reveal (drift / float / bars grow / check draws).

### Shadows & corners
- Corners: **2px** across the UI (the one exception is the email-mockup cards, which use 14px).
- Shadows are soft and far, tinted with deep teal — e.g. `0 26px 50px -34px rgba(0,56,55,0.35)`.

## Files

### /logo
- `spotter-logo-full.png` — mark + wordmark, transparent. Use for website headers, email signatures, documents.
- `spotter-logo-full-white-bg.png` — same logo on white. Use when a transparent background won't render well (some email clients, some social platforms).
- `spotter-mark.png` — mark only, transparent. Use when the logo needs to be small or the brand is already established in context.
- `spotter-mark-white-bg.png` — mark only on white.
- `spotter-mark-black.png` — monochrome black. Use for single-color printing (stamps, merch, receipts, faxes).
- `spotter-mark-white.png` — monochrome white. Use on dark backgrounds.

### /social
- `spotter-avatar-1000.png` — 1000×1000 square avatar on white. Use for Google Business Profile, LinkedIn company page, Instagram, Facebook, Twitter/X.
- `spotter-avatar-1000-transparent.png` — same avatar, transparent background.

### /favicon
Everything you need for the website favicon. See implementation snippet below.
- `favicon.ico` — multi-resolution (16/32/48), legacy browsers
- `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png` — modern browsers
- `favicon-192x192.png`, `favicon-512x512.png` — large previews
- `apple-touch-icon.png` — 180×180, iOS home screen
- `android-chrome-192x192.png`, `android-chrome-512x512.png` — Android home screen
- `site.webmanifest` — PWA/home-screen metadata

## Favicon implementation

Upload the `/favicon` folder contents to the root of your domain, then add this to the `<head>` of every page:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#004F4D">
```

For Framer: Site Settings → General → upload `favicon.ico` as the favicon, and `apple-touch-icon.png` as the Apple touch icon.

## Usage rules

**Do**
- Maintain clear space around the mark equal to the height of the circuit node (the small circles)
- Use the full logo (mark + wordmark) first time Spotter appears in a document or page
- Use the mark alone once brand is established in context

**Don't**
- Stretch, skew, or rotate the logo
- Change the colors outside of the two monochrome variants provided
- Place the color logo on backgrounds that clash with the teal — use the monochrome white version on dark/photographic backgrounds instead
- Put the logo on a teal background (pick the black or white version)

## Note on scaling

All files are raster PNGs derived from the original 1254×1254 source. They scale down beautifully for any digital use. For print or merch larger than ~6 inches wide, regenerate the logo as an SVG (vector) for sharpest output at any size.
