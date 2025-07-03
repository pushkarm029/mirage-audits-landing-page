import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/Analytics";
import { PostHogProvider } from "@/components/PostHogProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: 'swap',
  fallback: ['monospace']
});

// Define base metadata for the site
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://mirageaudits.com'),
  title: {
    default: 'Mirage Audits - Ship Secure. Ship Fast.',
    template: '%s | Mirage Audits',
  },
  description: "Professional smart contract audits for Solana, Sui, Cardano & L2 projects at $1K/week. Non-EVM security specialists preventing exploits for early-stage builders.",
  keywords: ['smart contract audit', 'blockchain security', 'Solana audit', 'Cardano security', 'crypto audit', 'DeFi security', 'Web3 audit', 'security review', 'smart contract security', 'blockchain audit'],
  authors: [{ name: 'Mirage Audits', url: 'https://mirageaudits.com' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Mirage Audits - Smart Contract Security Audits at $1K/week',
    description: 'Professional smart contract audits for Solana, Sui, Cardano & L2 projects. Non-EVM security specialists preventing exploits for early-stage builders.',
    url: 'https://mirageaudits.com',
    siteName: 'Mirage Audits',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirage Audits - Smart Contract Security Audits at $1K/week',
    description: 'Professional smart contract audits for Solana, Sui, Cardano & L2 projects. Non-EVM security specialists preventing exploits for early-stage builders.',
  },
  other: {
    'script[type="application/ld+json"]': JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://mirageaudits.com/#website",
        "url": "https://mirageaudits.com",
        "name": "Mirage Audits",
        "description": "Professional smart contract audits for Solana, Sui, Cardano & L2 projects at $1K/week.",
        "publisher": {
          "@id": "https://mirageaudits.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://mirageaudits.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://mirageaudits.com/#organization",
        "name": "Mirage Audits",
        "url": "https://mirageaudits.com",
        "logo": "https://mirageaudits.com/logo.png",
        "description": "Non-EVM security specialists providing professional smart contract audits for Solana, Cardano, Fuel, Sui, and Starknet at $1K/week.",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "security@mirageaudits.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://t.me/mirageaudits"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Smart Contract Audit Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Smart Contract Security Audit",
                "description": "Comprehensive security review of smart contracts for vulnerabilities and exploits"
              },
              "price": "1000",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "1000",
                "priceCurrency": "USD",
                "billingIncrement": "P1W"
              }
            }
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When should I get a security audit while building my project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Security audits should be conducted early in the development process, ideally before mainnet deployment. For early-stage builders, getting an audit during testnet phase helps identify vulnerabilities before they become exploitable. This prevents costly exploits and builds user trust from day one."
            }
          },
          {
            "@type": "Question",
            "name": "Why do early-stage projects need security audits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Early-stage projects are prime targets for exploits because they often have limited security resources. A security audit is essential for: preventing loss of user funds, building credibility with investors, ensuring code quality before scaling, and avoiding reputation damage from security incidents."
            }
          },
          {
            "@type": "Question",
            "name": "How much do smart contract audits cost for startups?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our smart contract audits cost $1K per week, designed specifically for early-stage builders. Most audits complete in 1-4 weeks (total cost $1K-4K), which is 80% cheaper than traditional enterprise audits that charge $10K+ minimums."
            }
          },
          {
            "@type": "Question",
            "name": "What should I look for when building a Web3 project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When building Web3 projects, prioritize: 1) Security audit before mainnet deployment, 2) Non-EVM expertise if building on Solana/Cardano/Sui, 3) Affordable audit options that don't consume your entire budget, 4) Quick turnaround to maintain development momentum. Security should be integrated into your development process, not an afterthought."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a smart contract audit take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most smart contract audits take 1-4 weeks depending on complexity. We start within days, unlike traditional firms with 8+ week backlogs that can delay your project launch."
            }
          },
          {
            "@type": "Question",
            "name": "What blockchains do you audit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We specialize in non-EVM blockchains including Solana (Anchor), Cardano (Plutus), Fuel (Sway), Sui (Move), and Starknet (Cairo). We are blockchain security specialists, not generic EVM auditors."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Build a Secure Web3 Project: Essential Steps for Early-Stage Builders",
        "description": "A comprehensive guide for early-stage builders on integrating security into Web3 project development from the start.",
        "totalTime": "P2W",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "1000-4000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Phase 1: Secure Development Planning",
            "text": "Before writing code, plan your security approach. Choose frameworks with built-in security features and allocate 10-15% of budget for security auditing. For non-EVM projects (Solana, Cardano, Sui), ensure your team understands blockchain-specific vulnerabilities.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Phase 2: Security-First Development",
            "text": "Implement security best practices during development: use established patterns, conduct peer reviews, implement comprehensive testing, and document all functions. Security should be built-in, not bolt-on.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Phase 3: Pre-Deployment Security Audit",
            "text": "CRITICAL: Get a professional security audit before mainnet deployment. For early-stage projects, choose affordable options like Mirage Audits ($1K/week) that specialize in your blockchain. This prevents exploits and builds user trust.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Phase 4: Post-Audit Implementation",
            "text": "Fix all identified vulnerabilities before launch. A reputable audit firm will help verify fixes. Publish audit results to build credibility with users and investors.",
            "position": 4
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Security Audit Service",
            "requiredQuantity": 1
          }
        ],
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Professional Security Audit",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "1000-4000"
            }
          }
        ]
      }
    ]),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-black text-white`}
      >
        <PostHogProvider>
          {/* Add GA component here - it will only render in production */}
          <GoogleAnalytics GA_MEASUREMENT_ID="G-2ZG6WW5KNX" />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}