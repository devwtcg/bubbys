# Bubby's New York Bagels — site

Vite + React. Single-page marketing site for the bagel shop at 3035 Bathurst St, Toronto.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Deploy

Pushes to `main` auto-deploy to production via Vercel.
Live: <https://bubbys-mauve.vercel.app>

To deploy manually:
```bash
vercel              # preview deployment
vercel --prod       # production
```

## Code map

- `index.html` — entry shell with the inline preloader (dismisses on `document.fonts.ready`)
- `src/main.jsx`, `src/App.jsx` — boot + cart state
- `src/styles.css` — design tokens, base styles, mobile breakpoints
- `src/components/` — one file per section (TopBar, Hero, Method, BuildABagel, Sandwiches, Gallery, Catering, Story, Locations + Footer, CartDrawer) plus shared atoms/fun pieces
- `src/data/` — bagel + sandwich tables, photo URLs, hours
- `src/hooks/` — `useStoreOpen` (Toronto-time open/closed badge) and `useIsMobile` (matchMedia, `< 768px`)

## Editing the data

- **Hours / Shabbat:** `src/data/hours.js` — `BAGEL_SHOP_HOURS` (per-weekday slots) drives the live "OPEN NOW" badge; `HOURS_DISPLAY` is the text shown in the Locations card.
- **Catering cutoff:** also `src/data/hours.js` — `CATERING_CUTOFF` (defaults to Thursday 12:00 PM ET).
- **Bagels / schmears / sandwiches:** `src/data/menu.js`.
- **Photos:** `src/data/photos.js` — points at the Wix CDN URLs from bubbysbagels.com.

## Known TODOs

- Chag (Jewish holiday) closures — only Shabbat (Saturday) is detected; chagim need a Hebcal-style calendar feed.
- Catering tier prices and bagel menu are placeholders pulled from the design handoff. The real PDFs are linked in-page but the structured data in `src/data/menu.js` hasn't been reconciled with them yet.
