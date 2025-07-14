# MirageAudits Landing Page

> Professional security audits for early-stage builders specializing in non-EVM ecosystems.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Analyze bundle (optional)
npm run analyze
```

## 📦 Current Setup: Dynamic Next.js App Router

This site uses modern **Next.js App Router** with dynamic server-side rendering:

- ✅ **Real-time content updates** without rebuilds
- ✅ **Full API route capabilities** for dynamic features
- ✅ **Server-side MDX processing** with proper rendering
- ✅ **Automatic deployment** on push to main
- ✅ **Modern Next.js 15** with React 19

### Build Output
- Dynamic API routes for content serving
- Server-side rendering with optimal performance
- Real-time content updates

## 🔄 Daily Content Updates

### Current Workflow
1. Edit content in components (Hero.jsx, PricingSection.jsx, etc.)
2. Push to git: `git push origin main`
3. Vercel automatically rebuilds and deploys
4. Changes live in ~2-3 minutes

### Content Locations
```
src/components/
├── Hero.jsx              # Main headline, pricing, benefits
├── CredibilitySection.jsx # Stats, expertise areas
├── PricingSection.jsx     # Pricing info, timeline
├── Featuresection.jsx     # Problems, process, final CTA
├── Navbar.jsx            # Navigation links
└── NewFooter.jsx         # Contact info, expertise list
```

## 🎯 Performance Features

- **Static Export**: Pure HTML/CSS/JS served from CDN
- **Font Optimization**: Display swap + fallbacks for Core Web Vitals
- **Bundle Optimization**: Tree shaking, minification, compression
- **Aggressive Caching**: 1-year cache for static assets
- **Image Optimization**: Next.js Image component with lazy loading

## 🔧 When to Switch from Static Export

### Keep Static Export If:
- ✅ Content changes only through code/git
- ✅ No user interactions (forms, auth, database)
- ✅ Maximum performance is priority
- ✅ Simple deployment workflow

### Switch to SSG/SSR When You Need:
- 🔄 Contact forms
- 🔄 User authentication
- 🔄 Database integration
- 🔄 Dynamic content from CMS
- 🔄 API routes

## 📋 Migration Guide: Static → Dynamic

When you're ready to add dynamic features:

### Step 1: Remove Static Export
```javascript
// next.config.mjs - Remove this line:
output: 'export',

// Keep all other optimizations
```

### Step 2: Add Dynamic Features
```javascript
// Example: API route for contact form
// pages/api/contact.js or app/api/contact/route.js
export async function POST(request) {
  // Handle form submission
}
```

### Step 3: Choose Rendering Method
- **SSG**: `getStaticProps` for pre-rendered pages
- **SSR**: `getServerSideProps` for request-time rendering
- **ISR**: `revalidate` for periodic regeneration

## 🏗️ Project Structure

```
mirage-audits-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout, fonts, metadata
│   │   ├── page.js            # Main page component structure
│   │   └── globals.css        # Global styles, animations
│   └── components/
│       ├── Hero.jsx           # Landing hero section
│       ├── CredibilitySection.jsx  # About/stats section
│       ├── PricingSection.jsx      # Pricing information
│       ├── Featuresection.jsx      # Problems/process sections
│       ├── Navbar.jsx         # Navigation header
│       ├── NewFooter.jsx      # Footer with contact info
│       └── magicui/
│           └── particles.jsx  # Background animation
├── public/
│   ├── logo.png              # Company logo
│   ├── new-bg.jpg            # Hero background image
│   ├── .htaccess             # Apache caching rules
│   └── _headers              # Netlify caching rules
├── next.config.mjs           # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Design System

### Typography
- **Headlines**: Space Grotesk (space-themed, futuristic)
- **Technical/Badge Text**: JetBrains Mono (developer aesthetic)
- **Body Text**: Inter (clean, professional)

### Color Palette
- **Background**: Black (#000000)
- **Primary Text**: White
- **Secondary Text**: white/70 opacity
- **Accent**: blue-300 (#93C5FD)
- **Highlights**: blue-200 (#BFDBFE)

### Component Patterns
- **Glass-morphism**: `bg-white/5` with `border-white/10`
- **Cards**: `p-6` padding with `rounded-xl`
- **Animations**: Subtle scanning effects, no hover animations
- **Spacing**: `max-w-6xl mx-auto px-6 py-20` for sections

## 📊 Performance Metrics

### Current Scores (Static Export)
- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 1.2s
- **Bundle Size**: ~100KB (optimized)

### Future Considerations
- Static export will maintain these scores
- Adding dynamic features may impact performance
- Monitor Core Web Vitals after any changes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Auto-deploys on push to `main`
3. Preview deployments for branches
4. Zero configuration needed

### Manual Deployment
```bash
npm run build
# Upload /out folder to any static hosting
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Development server
- `npm run build` - Production build + sitemap
- `npm run start` - Start production server (not needed for static)
- `npm run lint` - ESLint checking
- `npm run analyze` - Bundle size analysis

### Environment
- **Node.js**: 18+
- **Next.js**: 15.1.6
- **React**: 19.0.0

## 📝 Content Management

### Markdown-Based CMS ⚡ **Simple "Drop File and It Appears" System**

The site uses a dynamic file-based markdown system for blog posts and case studies. Simply add `.mdx` files to content directories and they appear immediately via API routes.

#### 📄 Adding a New Blog Post

1. **Create the file** in `src/content/blog/`:
```bash
# Create new blog post
nano src/content/blog/my-new-post.mdx
```

2. **Add frontmatter and content**:
```markdown
---
id: 7
title: "Your Blog Post Title"
slug: "your-blog-post-slug"
excerpt: "Brief description for listings and SEO"
author: "Your Name"
date: "2025-01-15"
category: "Security Guide"  # Options: Security Guide, DeFi Security, Blockchain Security, Infrastructure Security
tags: ["Solana", "Security", "Smart Contracts"]  # Array of tags
readingTime: "8 min read"
featured: true  # Set to true for featured posts
blockchain: "Solana"  # Optional: Solana, Ethereum, Cardano, Sui, etc.
---

# Your Content Here

Write your blog post content using standard markdown formatting.

## Code Examples
```solidity
// Your code here
```

**Bold text**, *italic text*, and [links](https://example.com) work as expected.
```

3. **Content appears immediately**:
```bash
# No build needed! Content appears instantly via API routes
# Just refresh the page or restart dev server
npm run dev
```

#### 🏆 Adding a New Case Study

1. **Create the file** in `src/content/case-studies/`:
```bash
# Create new case study
nano src/content/case-studies/my-case-study.mdx
```

2. **Add frontmatter and content**:
```markdown
---
id: 7
title: "Your Case Study Title"
client: "Client Name"
description: "Brief description for listings"
category: "DeFi"  # Options: DeFi, Infrastructure, Gaming, NFT
blockchain: "Solana"  # Solana, Ethereum, Cardano, Sui, Polygon, Multi-chain
date: "2024-07"
highlights:
  - "Key achievement 1"
  - "Key achievement 2"
  - "Key achievement 3"
metrics:
  duration: "3 weeks"
  vulnerabilities: 8
  severity: "Critical"
  tvlSecured: "$25M+"
---

Your case study content here with **markdown formatting**.

**Challenge:**
Describe the security challenges...

**Our Approach:**
- Bullet point 1
- Bullet point 2

**Results:**
The outcomes and impact...
```

3. **Content appears immediately**:
```bash
# No build needed! Content appears instantly via API routes
# Just refresh the page or restart dev server
npm run dev
```

#### 📁 Content Directory Structure
```
src/content/
├── blog/
│   ├── solana-smart-contract-security-guide.mdx
│   ├── defi-flash-loan-attacks-prevention.mdx
│   ├── cardano-plutus-security-utxo-best-practices.mdx
│   ├── sui-move-security-resource-oriented-programming.mdx
│   ├── cross-chain-bridge-security-multi-chain-assets.mdx
│   └── web3-security-audit-checklist-comprehensive-guide.mdx
└── case-studies/
    ├── solana-defi-protocol-security-audit.mdx
    ├── layer-2-bridge-security-assessment.mdx
    ├── cardano-dapp-security-review.mdx
    ├── sui-gaming-protocol-audit.mdx
    ├── multi-chain-yield-farming-protocol.mdx
    └── nft-marketplace-security-assessment.mdx
```

#### ✨ Content Features
- **Automatic Sorting**: Posts sorted by date (newest first)
- **Search & Filter**: Built-in search and category filtering
- **Featured Posts**: Set `featured: true` to highlight posts
- **SEO Optimized**: Automatic metadata generation from frontmatter
- **Analytics**: PostHog tracking integrated for user interactions
- **Responsive Design**: Mobile-first design maintained

#### 🔧 Content Workflow
```bash
# Quick workflow for adding content:

# 1. Add new file
echo "---
title: 'Security Alert: New Vulnerability'
date: '$(date +%Y-%m-%d)'
category: 'Security Guide'
featured: true
---
Content here..." > src/content/blog/new-alert.mdx

# 2. Build and deploy
npm run build
git add . && git commit -m "Add new security alert"
git push origin main
# Auto-deploys to Vercel in ~2 minutes
```

### Legacy Content (Component-Based)
Quick content changes for other sections can still be made by editing constants at the top of components:

```javascript
// Hero.jsx
const BENEFITS = [
  {
    title: "Non-EVM specialists",
    description: "Deep expertise in Solana, Cardano, Fuel, Sui, Starknet"
  },
  // ...
];

// CredibilitySection.jsx  
const credibilityStats = [
  {
    title: "Exploits Prevented",
    description: "Real security that saves real money",
    highlight: "$100M+"
  },
  // ...
];
```

### SEO & Metadata
```javascript
// app/layout.js
export const metadata = {
  title: "MirageAudits - Professional Security Audits",
  description: "Professional security for non-EVM ecosystems at $1K/week",
  // Update as needed
};
```

## 🛠️ Troubleshooting

### Font Loading Issues
If Google Fonts fail during build:
- Fallback fonts are configured
- Build will complete successfully
- Fonts load from CDN in browser

### Static Export Limitations
- No API routes
- No server-side features
- No dynamic imports with SSR

### Build Failures
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 🎯 Future Features (from TODO)

- [ ] Add scramble text animation to hero section (badge and main headline)
  - Text animation that scrambles letters before revealing the final text
  - Should work with existing fonts and sizes
  - Only shows on initial load using Framer Motion
- [ ] Add animated numbers section like Nautilus Trader
  - Show key metrics as large animated numbers in title format
  - Implement counting up effect on scroll/load
  - Display stats like protocols audited, vulnerabilities found, etc.

---

**Built for builders who can't wait.** ⚡