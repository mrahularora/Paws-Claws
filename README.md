# PawsClaws

Professional React storefront for a pet care shop. The site includes home, shop, about, and contact pages with responsive styling, product filtering, cart interactions, and Netlify deployment support.

## Features

- Responsive pet shop homepage with services, mission/vision, and blog section.
- Product shop with category filters, search, price range, sorting, pagination, wishlist, and cart summary.
- Product-specific generated images stored locally in `src/assets/products`.
- About and contact pages with richer business content.
- Netlify SPA routing via `netlify.toml`.

## Tech Stack

- React 18
- Create React App / `react-scripts`
- React Router v6
- Bootstrap
- Lucide React icons

## Scripts

```bash
npm start
npm test -- --watchAll=false
npm run build
```

## Local Setup

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

The production output is created in `build/`.

## Netlify Deploy

Netlify can use the checked-in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "build"
```

The redirect rule in `netlify.toml` supports client-side routes such as `/about`, `/shop`, and `/contact`.
