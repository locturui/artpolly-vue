# ArtPolly - Nuxt 3 Art Studio Website

A modern, responsive art studio website built with Nuxt 3, featuring classes, workshops, shop, and more.

## ✨ Features

- **Built with Nuxt 3** - Composition API, file-based routing, auto-imports
- **Built-in Nitro API** - Backend with mock data, optional external proxy
- **Fully Responsive** - Beautiful on all devices with modern mobile nav
- **Smooth Animations** - Carousels, transitions, hover effects
- **Events & Schedule** - Dynamic content from API
- **Contact Form** - Modal with form submission
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Full type safety

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production
pnpm preview
```

## Pages

- `/` - Home with hero, about, classes, events, schedule, contact
- `/classes` - Detailed class information
- `/shop` - Product categories and items
- `/offering` - Coworking, lectures, gift certificates
- `/schedule` - Schedule placeholder

## API Endpoints

Built-in Nitro API with mock data:

- `GET /api/class` - Class categories
- `GET /api/event` - Upcoming events
- `GET /api/schedule` - Weekly schedule
- `GET /api/contacts` - Contact information
- `GET /api/shop` - Shop products
- `POST /api/form` - Contact form submission

## Tech Stack

- **Framework**: Nuxt 3.19.3
- **Backend**: Nitro (built-in)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.4
- **Package Manager**: pnpm 10.10
- **Utilities**: VueUse
- **Carousel**: vue3-carousel

## Configuration

### Environment Variables

Optional external backend:

```env
NUXT_EXTERNAL_API_URL=
```

Leave empty to use built-in mock data.

## Client-Only Components

Components with `.client.vue` suffix render only on client (no SSR):

- `classes/section.client.vue` - Uses carousel + window sizing
- `events/section.client.vue` - Uses carousel
- `schedule/week-schedule.client.vue` - Uses carousel

## Deployment

### Build
```bash
pnpm build
```

### Preview
```bash
pnpm preview
```

### Deploy
Compatible with:
- Vercel
- Netlify
- Any Node.js hosting

## 📄 License

See LICENSE.md

---

Built with ❤️ using Nuxt 3
