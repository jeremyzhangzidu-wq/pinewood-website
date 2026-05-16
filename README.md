# Pinewood Academy · 松灵学院

Bespoke academic mentorship for ambitious high schoolers, undergrads, and graduate students.
Faculty-led research, small seminars, custom subject tutoring, and international essay competitions.

→ **探未知之境，启未来之光**
→ *Explore the unknown, light the future.*

## Pages

- [`index.html`](index.html) — 中文版
- [`english.html`](english.html) — English version

A header language switcher links the two. Footer also links across.

## Stack

Pure static — HTML + CSS + a tiny JS sprinkle. No build step, no server, no database.

```
pinewood-website/
├── index.html         # Chinese homepage
├── english.html       # English homepage
├── styles.css         # shared stylesheet
├── script.js          # nav + reveal-on-scroll
└── assets/
    ├── logo-original.png
    ├── hero-science.png
    ├── about-photo.jpg
    ├── p-1v1.jpg, p-class.jpg, p-tutor.jpg, p-essay.jpg
    └── wechat-qr.png     # ← replace with the real QR
```

## Local preview

Any static server works:

```bash
# Python 3
python -m http.server 5577

# Node
npx serve .
```

Then open <http://localhost:5577>.

## Deploy

Drop the whole folder onto any static host:

- **GitHub Pages** — Settings → Pages → Deploy from `main` branch, root.
- **Vercel / Netlify / Cloudflare Pages** — drag-and-drop the folder, or connect this repo.

## Contact

- Email: joycelyn@pinewood.top
- WeChat: PineWood0502
