# Spotter Digital — Brand Kit

## Colors

| Role | Hex | RGB |
|------|-----|-----|
| Primary Teal | `#023E3E` | `2, 62, 62` |
| Black | `#141419` | `20, 20, 25` |
| Background | `#FFFFFF` | `255, 255, 255` |

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
<meta name="theme-color" content="#023E3E">
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
