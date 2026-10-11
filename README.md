# The Royal Atelier — React Boutique Website

A responsive luxury boutique website concept built with React, Vite, Framer Motion, Swiper, and Lucide icons.

## Features
- Royal black, ivory, and gold visual theme
- Responsive mobile navigation
- Autoplay hero slideshow with fade transitions
- Filterable collection grid
- Product detail modal
- Tailoring/craft storytelling section
- Fashion lookbook gallery
- Expandable FAQ
- Appointment form that prepares a WhatsApp message
- Floating WhatsApp enquiry link
- Newsletter demo form
- Responsive layouts for mobile, tablet, and desktop

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production build is created in `dist/`.

## Customise before using for a real boutique
1. Change the brand name, address, product names and starting prices in `src/App.jsx`.
2. Replace the demo Unsplash photo URLs with approved boutique/product photos.
3. Replace generic WhatsApp links (`https://wa.me/?text=...`) with the boutique's WhatsApp number, using international digits only, e.g. `https://wa.me/919876543210`.
4. Connect the newsletter form to an email marketing service if subscriptions are needed.
5. Confirm all displayed pricing, availability, contact details and service descriptions before publishing.

## Notes
- This is a frontend demo; no database, payment processing, or admin dashboard is included.
- Product imagery is loaded from Unsplash over the internet, so image display requires connectivity.
- The appointment form opens WhatsApp with a prefilled message. The customer must send it manually.
- Newsletter submission is a demo alert only; it does not store email addresses.
