# Creator Print — Website source

A responsive multi-page React + Vite website for Creator Print. The stack is React Router for separate page routes and Vite for a lightweight, deployable build. No backend is required for the WhatsApp-first workflow.

## Run locally

1. Install Node.js 20+ (or a current LTS release).
2. Extract the ZIP and open this folder in VS Code.
3. In a terminal, run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown by Vite (usually `http://localhost:5173`).
5. For a production build, run `npm run build`; preview it with `npm run preview`.

## Deploy

**Vercel:** Import the Git repository or upload the project to a repo. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

**Netlify:** New site from Git. Build command: `npm run build`; publish directory: `dist`. Add an SPA redirect so React Router routes work on refresh. Create `public/_redirects` with:
```
/* /index.html 200
```

## Edit services

All categories and service records live in `src/data/services.js`. Each service has `id`, `slug`, `category`, Arabic/English names, description, and image path. Add/edit records there; category ids must match one of `commercial`, `paper`, `signage`, `gifts`.

## Replace service images

Every service uses a 4:3 image slot. Put a real image at the exact path in the table below, or update that service's `image` value in `src/data/services.js`. Until a file exists, the UI automatically displays a branded placeholder. Category images use `category-<category-id>.jpg`.

| Service | Expected filename |
|---|---|
| فواتير | `invoices.jpg` |
| دفاتر يومية | `daily-notebooks.jpg` |
| إيصالات | `receipts.jpg` |
| أظرف | `envelopes.jpg` |
| شنط ورق | `paper-bags.jpg` |
| شنط قماش | `fabric-bags.jpg` |
| شنط كرتون | `carton-bags.jpg` |
| علب / ليبلز | `labels.jpg` |
| أكياس سندوتشات | `sandwich-bags.jpg` |
| ورق زبدة | `butter-paper.jpg` |
| كروت شخصية | `business-cards.jpg` |
| فلاير | `flyers.jpg` |
| بروشور | `brochures.jpg` |
| استيكر | `stickers.jpg` |
| منيو | `menus.jpg` |
| فولدر | `folders.jpg` |
| كتالوج | `catalogs.jpg` |
| كتب | `books.jpg` |
| لتر هيد | `letterheads.jpg` |
| لوحات بانر | `banners.jpg` |
| فلكس | `flex.jpg` |
| فينيل | `vinyl.jpg` |
| سي ثرو | `c-through.jpg` |
| أكريليك مضيء | `acrylic-lit.jpg` |
| أكريليك غير مضيء | `acrylic-unlit.jpg` |
| إضاءة خلفية | `backlit-panels.jpg` |
| يفط كلادينج وواجهات | `cladding-facades.jpg` |
| ديكورات | `decorations.jpg` |
| نتائج حائط | `wall-calendars.jpg` |
| نتائج مكتب | `desk-calendars.jpg` |
| أجندات | `agendas.jpg` |
| تيشرتات | `t-shirts.jpg` |
| أقلام | `pens.jpg` |
| مجّات | `mugs.jpg` |
| فلاشات USB | `usb-flashes.jpg` |
| تابلوهات | `tablets-boards.jpg` |
| أختام | `stamps.jpg` |
| كوستر أكريليك | `acrylic-coasters.jpg` |
| كوستر خشبي | `wooden-coasters.jpg` |
| Commercial category | `category-commercial.jpg` |
| Paper category | `category-paper.jpg` |
| Signage category | `category-signage.jpg` |
| Gifts category | `category-gifts.jpg` |

Gallery visuals are intentionally styled editorial placeholders in `src/pages/Gallery.jsx`; replace these with real portfolio images when available.

## WhatsApp number

The WhatsApp target is `201004071071` (Egypt country code +20 without the leading zero). Update the `phone` constant in `src/pages/Order.jsx`, and update the floating WhatsApp link and quick-quote link in `src/App.jsx` / `src/pages/Contact.jsx` if the number changes. Click-to-call numbers and email are in `src/components/Footer.jsx` and `src/pages/Contact.jsx`.

## Important order-flow note

The order form collects structured details and builds a unique order reference, then shows a review/confirmation step before opening WhatsApp with a prefilled Arabic message. Browsers do not permit a website to silently attach a local file to a WhatsApp message; the message includes the selected filename as a reminder, and the customer must attach the actual file manually in WhatsApp. Selected form data is persisted in localStorage; it is not sent to a server. The status timeline is informational, not live order tracking.

## Before going live

- Add real service and portfolio images.
- Confirm the shop's working hours and exact map pin.
- Test the phone/WhatsApp number and order message on Android and iOS.
- Add a backend/admin authentication only if you need shared order storage or remote service management; this frontend deliberately avoids exposing admin credentials.
- Connect analytics by adding your approved provider ID; no tracking script or cookie banner is enabled by default.
- Review SEO/social metadata and add a generated sitemap/robots file for the final domain.

## Features included

- Separate Home, Services, four category routes, Order, Gallery with filter/lightbox, About, Contact/Quick Quote, Privacy, and 404 routes.
- Arabic-first RTL with English/Arabic switch, optional dark mode, responsive sticky header and mobile menu.
- Search and category filters, service data centralized in one file, 4:3 image slots with branded fallback.
- Add-service modal with required validation, dimensions/custom size, quantity +/- controls, material, color, sides, finishing, deadline, design-service option, notes, and file picker guidance.
- Persistent cart, order review screen, unique order number, WhatsApp prefilled message, copy-message fallback.
- Floating WhatsApp and cart buttons, contact click-to-call, email links, Google Maps embed and directions search.
- Accessible labels for key controls, lazy-loaded images, semantic page structure, basic SEO/Open Graph tags, web manifest/PWA install metadata.
- Privacy-friendly analytics event hook (`creator-print:event`) is available in `src/lib/analytics.js`; connect your chosen analytics provider only after adding its approved ID/consent behavior. No third-party tracking is enabled by default.
- LocalBusiness structured data is included. Generate a sitemap with the final production domain before launch.
- No server-side secrets, and no claim that the order is submitted until the customer sends it through WhatsApp.
