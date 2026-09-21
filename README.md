# Indian Art Atlas

**An Interactive Journey Through India's Artistic Heritage**

> College Assignment · CO1 · Interactive Art Map · Team Size: 5 · Due 16.09.2026

---

## Overview

Indian Art Atlas is an educational interactive web application exploring the geographic diversity of Indian art history. Built with React, TypeScript, Vite, and Tailwind CSS, it features an interactive Leaflet map of 25+ historically significant art locations across India.

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          — Sticky navigation
│   ├── Hero.tsx            — Landing/hero section
│   ├── MapView.tsx         — React-Leaflet interactive map
│   ├── FilterBar.tsx       — Region/art form/period/movement filters
│   ├── LocationPanel.tsx   — Location detail side panel
│   ├── SearchBar.tsx       — Global debounced search
│   ├── ImageGallery.tsx    — Image gallery with lightbox
│   ├── ArtFormCard.tsx     — Art form exploration cards
│   ├── PeriodTimeline.tsx  — Historical period timeline
│   ├── MovementCard.tsx    — Art movement cards
│   ├── ArtistCard.tsx      — Artist directory cards
│   └── Footer.tsx          — Site footer
├── data/
│   ├── locations.ts        — 25+ art locations dataset
│   ├── artists.ts          — 10 documented artists
│   ├── movements.ts        — 12 art movements
│   └── artForms.ts         — Art forms & historical periods
├── types/
│   └── art.ts              — TypeScript interfaces
├── pages/
│   ├── Home.tsx            — Main page assembly
│   └── About.tsx           — About/project info
└── utils/
    ├── search.ts           — Multi-entity search + debounce
    ├── filters.ts          — Location filtering logic
    └── map.ts              — Map constants and helpers
```

---

## Features

- **Interactive Map** — React-Leaflet with 25+ custom art-form markers
- **Search** — Debounced multi-entity search across locations, artists, movements
- **Filters** — Region, Art Form, Historical Period, Movement
- **Location Panels** — Full historical context, images, artists, artworks
- **Image Gallery** — Lightbox with attribution
- **Artistic Connections** — Toggle connection lines between related locations
- **Art Form Exploration** — Visual cards that filter the map
- **Historical Timeline** — Interactive period cards with major developments
- **Art Movements** — 12 documented movements with associated locations
- **Artist Directory** — 10 documented artists with portraits and works
- **Responsive** — Works at 375px, 768px, 1024px, 1440px+
- **Accessible** — ARIA labels, keyboard navigation, visible focus states

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v3 |
| Map | React-Leaflet + Leaflet |
| Map Tiles | CartoDB Positron (OpenStreetMap) |
| Icons | Lucide React |
| Fonts | Playfair Display + Inter |

---

## Data Sources

- Archaeological Survey of India (ASI)
- National Gallery of Modern Art (NGMA)
- Wikimedia Commons (CC licensed images)
- UNESCO World Heritage Centre
- National Museum, New Delhi
- Indian Museum, Kolkata

All historical information is presented for educational purposes. Approximate dates are indicated with "c."

---

## Team

- Team Member 1
- Team Member 2
- Team Member 3
- Team Member 4
- Team Member 5

*Created as an academic project — CO1, 2026*
