# Proof screenshots

The pictures in the proof section of `100-calls.html` (`#proof`). They are screenshots from the chats we share with clients: booked calls, weekly numbers and client replies.

## Rules

- Built from the blurred set only. Names, companies, emails, phone numbers, websites and client faces are hidden in every source file. Never put an original here.
- No client or buyer name goes in the page text, the alt text or a file name.
- Every figure and quote on the page is copied from its screenshot. Do not round up, total or reword them.
- Two screenshots are left out until Yuri decides if their wording can show: the one about astrology learners and the one about jackets on TikTok Shop (2026-11-19).

## Files

- `<name>.webp`: the screenshot at full size, with stray edges cropped. Used in the four tiles and in the lightbox.
- `<name>-card.webp`: the same picture centered on a canvas of one fixed height, filled with the screenshot's own background. Used in the two moving rows, so every card in a row is the same height and the chat text is the same size.

There are 26 screenshots: 4 in the tiles, 12 in the first row, 10 in the second.

## Rebuild

`tools/build_proof_assets.py` makes every file here from the blurred screenshots. The crop boxes, the scale of each picture and the row heights are at the top of the script.

```bash
python3 tools/build_proof_assets.py /path/to/meeting-screenshots/blurred assets/proof
```

It prints the width and height of each file. Copy them into the `width` and `height` of the matching `img` tag if a picture changes size. To add a screenshot, blur it first, add a line to `SHOTS` in the script, run it, then add the `li` to the row in `100-calls.html` with alt text that names no one.
