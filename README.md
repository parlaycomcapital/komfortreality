# 🏆 Komfort Reality — Ultra-Premium Real Estate Landing Page

A stunning, luxury real estate landing page built with Next.js 14, featuring cinematic animations, sophisticated design, and a premium user experience.

![Komfort Reality](./logo.png)

## ✨ Features

- **🎨 Luxury Design System** — Dark slate & gold color palette with Inter Tight & Inter typography
- **🎬 Cinematic Animations** — Smooth Framer Motion animations throughout
- **📱 Fully Responsive** — Optimized for all devices from mobile to 4K displays
- **⚡ Performance Optimized** — Built with Next.js 14 App Router for lightning-fast performance
- **🎯 SEO Ready** — Comprehensive metadata and semantic HTML
- **♿ Accessible** — WCAG compliant with proper focus states and ARIA labels

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Inter Tight & Inter (Google Fonts)
- **Language:** TypeScript

## 📦 Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
komfort-reality/
├── app/
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx         # Navigation with scroll effects
│   ├── Hero.tsx          # Hero section with search card
│   ├── FeaturedProperties.tsx  # Property showcase
│   ├── WhyChooseUs.tsx    # Stats & trust indicators
│   ├── Services.tsx       # Services overview
│   ├── Testimonials.tsx   # Client testimonials
│   ├── CTABanner.tsx      # Contact CTA section
│   └── Footer.tsx         # Footer with links
├── public/
│   └── logo.png          # Brand logo
├── DESIGNSYSTEM.json      # Complete design system tokens
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Design System

The entire design system is defined in `DESIGNSYSTEM.json` and includes:

- **Colors:** Dark slate backgrounds (#0D0F12) with premium gold accents (#E0B24F)
- **Typography:** Inter Tight for display, Inter for body text
- **Shadows:** Soft, subtle, and floating shadow variants
- **Borders:** Rounded corners from 6px to 24px
- **Gradients:** Hero backgrounds, primary buttons, and card highlights
- **Animations:** Fast (120ms), default (180ms), and emphasized (240ms) transitions

## 📄 Pages & Sections

### 1. Hero Section
- Cinematic full-screen intro
- Floating search card with property filters
- Trust indicators (10+ years, 500+ properties, 4.9★ rating)
- Animated scroll indicator

### 2. Featured Properties
- 6 luxury property cards with hover effects
- High-quality images with gradient overlays
- Property details (beds, baths, area)
- Bookmark functionality

### 3. Why Choose Us
- 4 key statistics with icons
- 3 feature cards (Trust, Selection, Expertise)
- Trust banner with 100% satisfaction guarantee

### 4. Services
- 6 comprehensive services (Buying, Selling, Legal, Valuation, Mortgage, Management)
- Icon-based cards with feature lists
- Hover animations and elevation effects

### 5. Testimonials
- 6 client testimonials with ratings
- Avatar initials on gradient backgrounds
- Trust badge with statistics

### 6. CTA Banner
- Dramatic gradient background
- Clear call-to-action buttons
- Contact information
- Trust indicators

### 7. Footer
- Brand information and logo
- Contact details with icons
- Navigation links (Company, Services, Resources, Legal)
- Social media links
- Back-to-top button

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## 🎯 Customization

### Update Colors

Edit `tailwind.config.ts` and `app/globals.css` to modify the color palette.

### Change Content

Each component is self-contained. Edit the respective file in `components/` to update content.

### Add New Sections

1. Create a new component in `components/`
2. Import it in `app/page.tsx`
3. Add it to the page layout

## 📝 Design Principles

This project follows these luxury design principles:

- **Luxury Minimalism** — Inspired by Apple, Aman Resorts, Sotheby's
- **Precision Engineering** — Tesla/SpaceX-level attention to detail
- **Visual Emotion First** — Every pixel speaks quality
- **Zero Clutter** — Generous whitespace and confident spacing
- **Cinematic Animations** — Smooth, graceful, expensive-looking transitions

## 📧 Contact

For questions or support:

- **Email:** info@komfort-reality.com
- **Phone:** +420 123 456 789
- **Address:** Pařížská 123/28, 110 00 Praha 1, Czech Republic

## 📜 License

© 2025 Komfort Reality. All rights reserved.

---

**Built with ✦ for excellence**

