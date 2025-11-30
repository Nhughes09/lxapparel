# 🔥 LX APPAREL

**Viral Memes. Premium Tees. Unmatched Vibes.**

A stunning Next.js e-commerce site featuring December 2025's hottest meme shirt drops, built with cyberpunk aesthetics and auto-deployed via Cloudflare Pages.

## ✨ Features

- 🎨 **Premium Design**: Dark theme with neon cyan/magenta gradients and glassmorphism
- 🛍️ **5 Viral Products**: December 2025 meme shirt collection
- ⚡ **Lightning Fast**: Static export optimized for Cloudflare Pages
- 📱 **Fully Responsive**: Perfect on mobile, tablet, and desktop
- 🎭 **Smooth Animations**: Float, glow, and slide-up effects
- 🔗 **TikTok Shop Ready**: Easy integration for product links

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create static export
npm run build

# Preview build locally  
npm run start
```

## 📦 Product Lineup (December 2025)

1. **Santa's Crypto Wallet** - Pixel art Santa with Bitcoin bling ($34.99)
2. **New Year, New Me (Same Phone)** - Phone addiction reality check ($32.99)
3. **Cyber Monday Survivor** - Shopping cart warrior ($36.99)
4. **Ugly Sweater 404** - Error message holiday vibes ($33.99)
5. **Main Character Energy 2025** - Own the spotlight ($35.99)

## 🌐 Cloudflare Pages Deployment

This site is configured for auto-deployment via Cloudflare Pages:

### Setup Instructions

1. **Connect GitHub**: 
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Click "Create a project" → "Connect to Git"
   - Select this repository: `Nhughes09/lxapparel`

2. **Configure Build**:
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variables: `NODE_VERSION=18`

3. **Deploy**: 
   - Click "Save and Deploy"
   - Cloudflare will auto-deploy on every push to `main`

### Custom Domain

Add your domain (e.g., `lxapparel.love`) in Cloudflare Pages settings → Custom domains

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + Custom CSS
- **TypeScript**: Full type safety
- **Deployment**: Cloudflare Pages (static export)
- **Fonts**: Inter from Google Fonts

## 📝 Adding New Products

Edit `data/products.json`:

```json
{
  "id": 6,
  "name": "Your Product Name",
  "price": 29.99,
  "description": "Product description",
  "image": "/products/your-image.png",
  "tiktokShopUrl": "https://tiktok.com/shop/your-link"
}
```

Add product images to `public/products/`

## 🎨 Design System

- **Colors**: Neon cyan, magenta, purple on dark backgrounds
- **Effects**: Glassmorphism, glow animations, smooth transitions
- **Layout**: Responsive grid, mobile-first approach
- **Typography**: Inter font with bold headings

## 📄 License

© 2025 LX Apparel. All rights reserved.

## 🔥 Built With

Designed and developed with the internet's finest memes in mind. December 2025 drops live now!

---

**Follow us:**
- 🎵 [TikTok](https://tiktok.com/@lxapparel)
- 📷 [Instagram](https://instagram.com/lxapparel)
- 🐦 [Twitter](https://twitter.com/lxapparel)
