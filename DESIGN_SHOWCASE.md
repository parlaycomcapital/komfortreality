# 🎨 Komfort Reality — Design Showcase

## Visual Identity

### Color Palette

```
PRIMARY COLORS
├─ Gold: #E0B24F (Primary Gold)
├─ Light Gold: #F1D38A (Soft)
└─ Deep Gold: #BE8F2F (Deep)

BACKGROUNDS
├─ Base: #0D0F12 (Primary Background)
├─ Soft: #11141A (Sections)
├─ Surface: #171A1F (Cards)
└─ Elevated: #1D2028 (Hover States)

TEXT
├─ Primary: #F7F7F8 (Headlines)
├─ Secondary: #C4C4CC (Body)
└─ Muted: #9A9AA5 (Captions)

ACCENTS
├─ Teal: #7AB8A6 (Secondary Accent)
└─ Borders: #262A34 (Subtle Lines)
```

---

## Typography Scale

```
DISPLAY (Inter Tight)
├─ Display XL: 3.5rem / 56px — Hero Headlines
├─ Display: 3rem / 48px — Large Headlines
└─ H1: 2.4rem / 38px — Section Headers

HEADINGS (Inter Tight)
├─ H2: 1.9rem / 30px — Subsection Headers
├─ H3: 1.55rem / 25px — Card Titles
└─ H4: 1.3rem / 21px — Small Headers

BODY (Inter)
├─ Large: 1.05rem / 17px — Lead Paragraphs
├─ Body: 0.98rem / 16px — Standard Text
└─ Caption: 0.8rem / 13px — Small Text
```

---

## Component Patterns

### 🏷️ Badges / Eyebrows

```
Style: Pill-shaped with gold border
Background: rgba(224,178,79,0.12)
Border: 1px solid rgba(224,178,79,0.3)
Text: #E0B24F, 0.75rem, uppercase, tracking-[0.16em]
Padding: 0.25rem 0.875rem
```

### 🔘 Primary Button

```
Background: Linear gradient (Gold Soft → Primary → Gold Deep)
Text Color: #171717 (Dark on Gold)
Border Radius: 999px (Pill)
Padding: 0.6rem 1.6rem
Shadow: Subtle (default) → Soft (hover)
Hover: Scale 1.02 + Lighter gradient
```

### 🔘 Secondary Button

```
Background: #171A1F (Surface)
Text Color: #F7F7F8 (Primary Text)
Border: 1px solid #323743
Border Radius: 999px (Pill)
Hover: Border changes to Gold, Background to Surface Elevated
```

### 📦 Card Design

```
Background: #171A1F (Surface)
Border: 1px solid #262A34 (Subtle)
Border Radius: 18px (lg)
Padding: 1.6rem / 26px
Shadow: Subtle (default) → Soft (hover)
Hover: 
  - Translate Y: -2px
  - Scale: 1.015
  - Border: Gold at 65% opacity
  - Shadow: Soft
```

### 🖼️ Property Card Special

```
Image Overlay: Linear gradient (transparent → black 55%)
Badge Position: Top-left, 1rem margin
Bookmark: Top-right, circular button
Price Display: Bottom-left overlay, Display font
Property Details: Bottom section with Bed/Bath/Area icons
Hover Effect: Image scales to 1.1 (zoom in)
```

---

## Layout System

### Page Container

```
Max Width: 1240px
Padding: 
  - Desktop: 2.5rem (40px)
  - Tablet: 2rem (32px)
  - Mobile: 1.25rem (20px)
```

### Section Spacing

```
Hero: 6rem top/bottom (96px)
Standard: 4.5rem (72px)
Dense: 3.25rem (52px)
Footer: 3.5rem (56px)
```

### Grid Gaps

```
XL: 3rem (48px)
LG: 2.4rem (38px)
MD: 1.8rem (29px)
SM: 1.25rem (20px)
```

---

## Animation Timing

### Transitions

```
Fast: 120ms — Micro-interactions
Default: 180ms — Standard hover effects
Emphasized: 240ms — Important state changes
Easing: cubic-bezier(0.22, 0.61, 0.36, 1)
```

### Framer Motion Patterns

```javascript
// Fade In Up
{
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

// Stagger Children
{
  variants: containerVariants,
  staggerChildren: 0.1
}

// Hover Scale
{
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
}
```

---

## Shadow System

### Subtle

```css
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
```
**Used for:** Default cards, search inputs

### Soft

```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
```
**Used for:** Elevated cards, buttons on hover, header

### Floating

```css
box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
```
**Used for:** Modals, floating search card, dramatic elements

---

## Gradient Definitions

### Hero Background

```css
background: linear-gradient(
  135deg, 
  #0B0C10 0%, 
  #171A1F 45%, 
  #242938 100%
);
```

### Primary Button

```css
background: linear-gradient(
  90deg, 
  #F1D38A 0%, 
  #E0B24F 50%, 
  #BE8F2F 100%
);
```

### Card Highlight

```css
background: linear-gradient(
  135deg, 
  rgba(224,178,79,0.18) 0%, 
  rgba(12,16,22,0.0) 55%, 
  rgba(122,184,166,0.12) 100%
);
```

---

## Iconography

### Size Scale

```
Small: 16px — Inline icons
Medium: 20px — Default icons
Large: 24px — Section icons
XL: 32px — Feature icons
```

### Icon Colors

```
Primary Action: #E0B24F (Gold)
Navigation: #C4C4CC (Secondary Text)
Navigation Active: #F7F7F8 (Primary Text)
Muted: #9A9AA5
```

---

## Responsive Breakpoints

```
Mobile: < 768px
  - Single column layouts
  - Stacked navigation
  - Full-width cards

Tablet: 768px - 1024px
  - 2-column grids
  - Condensed spacing
  - Compact navigation

Desktop: 1024px - 1920px
  - 3-column grids
  - Full navigation
  - Optimal spacing

4K+: > 1920px
  - Max-width container (1240px)
  - Extra generous spacing
```

---

## Accessibility Features

✅ Focus visible states on all interactive elements
✅ Proper heading hierarchy (h1 → h6)
✅ ARIA labels on icon-only buttons
✅ Sufficient color contrast (WCAG AA)
✅ Keyboard navigation support
✅ Semantic HTML structure
✅ Alt text on all images

---

## Performance Optimizations

⚡ Next.js Image optimization
⚡ Lazy loading for images
⚡ Code splitting by route
⚡ Font display: swap
⚡ Minimal bundle size
⚡ Static generation where possible
⚡ Optimized animations (GPU accelerated)

---

## Design Inspirations

This design draws inspiration from:

- **Apple** — Minimalist precision, confident spacing
- **Aman Resorts** — Luxury without ostentation
- **Sotheby's Real Estate** — Premium positioning, trust
- **Porsche Design** — Engineering excellence, attention to detail
- **Airbnb** — User-centric experience, beautiful imagery

---

## Micro-Interactions

1. **Header**
   - Scrolls into view on load
   - Hides on scroll down
   - Shows on scroll up
   - Glass morphism on scroll

2. **Property Cards**
   - Image zooms on hover
   - Shadow deepens
   - Border glows gold
   - Lifts up slightly (-2px)

3. **Buttons**
   - Scales 1.02 on hover
   - Shadow intensifies
   - Icon slides right (arrows)
   - Gradient shifts lighter

4. **Stats**
   - Numbers count up (can be added)
   - Cards glow on hover
   - Icons animate

5. **Testimonials**
   - Cards lift on hover
   - Quote icon subtle pulse
   - Stars filled gold

---

**Every pixel tells a story of luxury.** ✦

