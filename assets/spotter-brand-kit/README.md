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

- **Headlines** — Switzer, weight 500, tight tracking (≈ −0.04em); set a key phrase in Brand Teal for emphasis.
- **Labels / eyebrows** — Chivo Mono, uppercase, small.
- **Corners** — the UI uses sharp 2px corners throughout, not rounded pills.

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
