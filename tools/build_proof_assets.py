#!/usr/bin/env python3
"""Build the landing page proof assets from the BLURRED screenshots only.

Usage: python3 tools/build_proof_assets.py <blurred_dir> assets/proof

For each screenshot it writes:
  <slug>.webp        the screenshot, edge clutter cropped, full resolution (lightbox, feature tiles)
  <slug>-card.webp   wall rows only: the same picture centered on a canvas of one fixed
                     height, filled with the screenshot's own background, so every card in
                     a row is the same height and the chat text is the same size.
Prints the width and height of every file as JSON, for the <img> tags.
"""
import json
import sys
from collections import Counter
from pathlib import Path

from PIL import Image

SRC, OUT = Path(sys.argv[1]), Path(sys.argv[2])
OUT.mkdir(parents=True, exist_ok=True)

# slug: (source file, crop box or None, group)
# group: "feature" = bento tile, "short" = wall row 1, "tall" = wall row 2
SHOTS = {
    "client-18k-revenue":      ("folder-03.png", (0, 24, 1848, 282), "feature"),
    "client-both-calls-good":  ("upload-02.png", (0, 12, 678, 196), "feature"),
    "weekly-9520":             ("upload-04.png", None, "feature"),
    "client-sending-proposal": ("upload-09.png", (0, 322, 1446, 544), "feature"),

    "booked-chief-creative":   ("folder-08.png", None, "short"),
    "weekly-3750-3":           ("folder-09.png", None, "short"),
    "rebooked-pmm":            ("upload-03.png", (0, 26, 1596, 338), "short"),
    "weekly-1966":             ("folder-12.png", (52, 12, 676, 215), "short"),
    "booked-vp-marketing":     ("upload-05.png", (0, 60, 2600, 218), "short"),
    "weekly-8418":             ("upload-13.png", None, "short"),
    "booked-ceo-noon":         ("folder-04.png", (22, 0, 822, 290), "short"),
    "booked-firm-invite":      ("upload-06.png", None, "short"),
    "weekly-5396":             ("folder-07.png", None, "short"),
    "booked-ceo-google-meet":  ("folder-01.png", (0, 26, 1620, 450), "short"),
    "weekly-3750-2":           ("folder-10.png", None, "short"),
    "booked-today-4pm":        ("upload-16.png", (0, 16, 932, 345), "short"),

    "client-verbal-close":     ("telegram-01.png", None, "tall"),
    "confirmed-nov-23":        ("upload-01.png", (0, 16, 1198, 868), "tall"),
    "booked-co-ceo":           ("upload-14.png", None, "tall"),
    "scheduled-sep-9":         ("folder-06.png", None, "tall"),
    "booked-oct-13":           ("upload-08.png", (0, 40, 1544, 824), "tall"),
    "booked-workers-comp":     ("folder-02.png", (0, 14, 824, 576), "tall"),
    "confirmed-nov-4":         ("upload-15.png", (0, 14, 1314, 884), "tall"),
    "booked-oct-8":            ("upload-10.png", None, "tall"),
    "booked-oct-19":           ("upload-07.png", (0, 22, 968, 365), "tall"),
    "booked-sep-10":           ("folder-05.png", (0, 12, 852, 802), "tall"),
    "booked-oct-5":            ("upload-11.png", (0, 28, 1780, 740), "tall"),
}

# Wall rows: canvas height (2x of the CSS height), inner padding, and the scale applied
# to a screenshot before it is fitted (1.0 = Slack text at its real size on a 2x screen).
ROWS = {
    "short": {"h": 440, "pad_y": 16, "pad_x": 28, "scale": 1.0},
    "tall":  {"h": 720, "pad_y": 24, "pad_x": 30, "scale": 0.8},
}
# Per-screenshot scale: text-only screenshots in the tall row keep full size, and the
# phone chat app sets bigger type than Slack, so it is brought down to match.
SCALE = {
    "client-verbal-close": 0.55,
    "booked-co-ceo": 1.0, "booked-oct-19": 1.0, "booked-workers-comp": 1.0,
    "booked-chief-creative": 0.86, "weekly-3750-3": 0.86, "weekly-5396": 0.86, "weekly-3750-2": 0.86,
}
# Cropped part way down an embedded picture: fade the bottom edge into the background.
FADE_BOTTOM = {"confirmed-nov-23", "confirmed-nov-4"}


def edge_color(im):
    """Most common color along the left and right edges: the chat background."""
    w, h = im.size
    px = im.load()
    counts = Counter()
    for y in range(0, h, 2):
        for x in (1, 2, 3, w - 4, w - 3, w - 2):
            counts[px[x, y]] += 1
    return counts.most_common(1)[0][0]


def fade_bottom(im, color, depth=110):
    """Blend the last `depth` rows into `color`."""
    w, h = im.size
    mask = Image.new("L", (w, h), 0)
    for i in range(depth):
        mask.paste(round(255 * (i + 1) / depth), (0, h - depth + i, w, h - depth + i + 1))
    return Image.composite(Image.new("RGB", (w, h), color), im, mask)


sizes = {}
for slug, (name, box, group) in SHOTS.items():
    im = Image.open(SRC / name).convert("RGB")
    if box:
        im = im.crop(box)
    bg = edge_color(im)
    if slug in FADE_BOTTOM:
        im = fade_bottom(im, bg)
    im.save(OUT / f"{slug}.webp", "WEBP", quality=84, method=6)
    sizes[slug] = {"w": im.width, "h": im.height, "group": group}
    if group == "feature":
        continue
    row = ROWS[group]
    scale = SCALE.get(slug, row["scale"])
    fit = (row["h"] - 2 * row["pad_y"]) / im.height
    scale = min(scale, fit)
    small = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    canvas = Image.new("RGB", (small.width + 2 * row["pad_x"], row["h"]), bg)
    canvas.paste(small, (row["pad_x"], (row["h"] - small.height) // 2))
    canvas.save(OUT / f"{slug}-card.webp", "WEBP", quality=84, method=6)
    sizes[slug].update({"cw": canvas.width, "ch": canvas.height})

print(json.dumps(sizes, indent=1))
