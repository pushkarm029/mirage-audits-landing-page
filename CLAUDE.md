# Mirage Audits Landing Page - Development Notes

## Project Overview
Modern, professional landing page for Mirage Audits - a Web3 security firm specializing in fast, affordable audits for Solana, Sui, Cardano & L2 projects.

## Design System & Styling Conventions

### Typography
- **Headlines**: Space Grotesk (space-themed, futuristic)
- **Technical/Badge Text**: JetBrains Mono (developer/security aesthetic)
- **Body Text**: Inter (clean, professional readability)
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Color Palette
- **Primary Background**: Black (#000000)
- **Text Colors**: 
  - Primary: White
  - Secondary: white/70 opacity
  - Badge/Accent: blue-300 (#93C5FD)
  - Headlines Accent: blue-200 (#BFDBFE)
- **Network Icons**: Use brand colors with 20% opacity backgrounds
- **Buttons**: White background with subtle blue scanning effect

### Component Patterns

#### Hero Section
- **Background**: Space image (/new-bg.jpg) positioned at `center 30%`
- **Overlay**: `bg-black/50` for text readability
- **Structure**: Badge → Headline → Network Icons → Benefits → CTAs
- **Spacing**: 
  - Top padding: `pt-16 md:pt-24`
  - Benefits to CTAs: `mb-16`

#### Button Styling
- **Primary CTA**: White background, subtle scanning animation (`animate-scan`)
- **Secondary CTA**: Glass-morphism style with `bg-white/5`
- **Size**: `h-12 px-6 text-base` (professional, not oversized)
- **No hover effects** - clean and minimal

#### Network Icons
- **Size**: 48px circles (`w-12 h-12`)
- **Symbol**: JetBrains Mono font, bold
- **Colors**: Brand colors with transparency
- **Placeholder**: Dashed circles for "coming soon"

#### Benefit Cards
- **Background**: `bg-white/5` with `border-white/10`
- **Padding**: `p-6` 
- **Grid**: 1 column mobile, 3 columns desktop
- **Max Width**: `max-w-6xl` for wider containers

### Animations
```css
@keyframes scan {
  0% { opacity: 0; transform: translateX(-100%); }
  50% { opacity: 0.3; }
  100% { opacity: 0; transform: translateX(100%); }
}
```
- **Scanning Effect**: 2s duration, suggests security scanning
- **Marquee**: For supported chains section
- **No hover animations** - keeps it professional

### Code Conventions

#### Next.js Best Practices
- Use semantic HTML (`<section>`, `<h1>`)
- Constants extracted to module level
- Responsive design with mobile-first approach
- Clean import order and organization

#### Component Structure
```jsx
// 1. Imports
import ComponentA from "./ComponentA";

// 2. Constants
const DATA = [...];

// 3. Component
export default function Component() {
  return (
    <section className="...">
      {/* Comments for sections */}
    </section>
  );
}
```

#### Tailwind Conventions
- Use utility classes in logical order: `position display flex grid sizing colors spacing typography`
- Custom animations defined in `globals.css` and `tailwind.config.mjs`
- Responsive design: `text-sm md:text-base lg:text-lg`
- Opacity patterns: `/10`, `/20`, `/50`, `/70` for consistency

### Content Strategy
- **Value-focused messaging** (not competitor comparisons)
- **Concrete numbers**: "20+ protocols", "$10M+ prevented"
- **Anti-enterprise positioning**: Fast, affordable, builder-focused
- **Multi-chain expertise**: Prominent network display

### File Structure
```
src/
├── app/
│   ├── layout.js (fonts, metadata)
│   ├── page.js (main page)
│   └── globals.css (animations, utilities)
├── components/
│   ├── Hero.jsx (main hero section)
│   ├── SupportedChains.jsx (marquee effect)
│   ├── AuditComparison.jsx (terminal demo)
│   └── ui/ (reusable components)
```

## Key Learnings
- **Space theme** works better than abstract geometric patterns
- **Professional > flashy** - subtle effects, clean design
- **Less padding** on buttons looks more modern
- **White CTAs** stand out better against dark background
- **Scanning animation** reinforces security messaging
- **Network icons** provide instant credibility

## Development Commands
- **Dev server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint` (run before commits)