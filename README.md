# 🛍️ ShopCart

A full-featured, multi-page e-commerce shopping cart application built with React. Final capstone project for the Nexus Front-End Boot Camp — React phase.

**Live demo:** [shopping-cart-lilac-ten.vercel.app](https://shopping-cart-lilac-ten.vercel.app)

## Features

### Pages & Navigation
- Home page with hero banner, category grid, and featured products
- Shop page with all products in a responsive grid
- Product Detail page via dynamic route (`/shop/:id`)
- Cart page with quantity controls and order summary
- Wishlist page for saved products
- Custom 404 page

### Shop
- Filter products by category (fetched dynamically from the Fake Store API)
- Sort by price (low/high), name, and rating
- Instant client-side search by product title
- Skeleton loading cards while products fetch
- Error state with retry button on failed requests

### Cart
- Add to cart from both the product card and product detail page
- Quantity stepper (increment/decrement, minimum quantity of 1)
- Remove individual items or clear the entire cart (with confirmation)
- Live cart item count in the navbar
- Order summary: item count, subtotal, 15% tax, and total
- Empty cart state with a link back to the shop
- Persisted to `localStorage` — survives page refresh

### Bonus features
- **Wishlist** — save/remove products independently of the cart, persisted to `localStorage`
- **Recently Viewed** — tracks the last 6 viewed products, shown on the Home page
- **Toast notifications** — confirmation toast when an item is added to the cart

## Tech stack

- **React** (Vite)
- **React Router** — client-side routing
- **Context API + useReducer** — global cart and wishlist state
- **Custom hooks** — data fetching (`useProducts`, `useProduct`, `useCategories`), state access (`useCart`, `useWishlist`, `useToast`, `useRecentlyViewed`)
- **Fake Store API** — [fakestoreapi.com](https://fakestoreapi.com/)
- Plain CSS with CSS custom properties (design tokens) — no CSS framework

## State architecture

Only cart and wishlist data live in global Context, since they're the only pieces of state multiple unrelated components (Navbar badge, Cart page, Wishlist page, product cards) all need to read and write. Product data is fetched locally by whichever page needs it. Filter, search, and sort state is local to the Shop page.
src/
├── context/
│ ├── CartContext.js / CartProvider.jsx / cartReducer.js
│ └── WishlistContext.js / WishlistProvider.jsx / wishlistReducer.js
├── hooks/
│ ├── useCart.js / useWishlist.js / useToast.js
│ └── useProducts.js / useProduct.js / useCategories.js / useRecentlyViewed.js
├── pages/
├── components/
│ ├── layout/
│ ├── product/
│ ├── shop/
│ └── cart/
└── App.jsx

## Running locally

```bash
git clone https://github.com/senusutuma-cell/shopping-cart.git
cd shopping-cart
npm install
npm run dev
```

The app will be running at `http://localhost:5173`.

## Building for production

```bash
npm run build
npm run preview
```

## Deployment

Deployed on [Vercel](https://vercel.com), connected to this repository's `main` branch. A `vercel.json` rewrite rule handles client-side routing so nested routes (like `/shop/5`) work correctly on page refresh.

## Author

Built by [Sena Sutuma] as a capstone project for the Nexus Front-End Boot Camp.