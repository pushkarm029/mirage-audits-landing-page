import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/Analytics";

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
export const metadata = {
  metadataBase: new URL('https://mirageaudits.com'),
  title: {
    default: 'Mirage Audits - Ship Secure. Ship Fast.',
    template: '%s | Mirage Audits',
  },
  description: "Professional security for Solana, Sui, Cardano & L2 projects—without the enterprise price tag. Stop choosing between security and speed.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://mirageaudits.com",
      "name": "Mirage Audits",
      "description": "Web3 security firm specializing in Solana, Sui, Cardano & L2 projects. Professional security audits and monitoring without enterprise pricing.",
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Head is automatically managed by Next.js metadata API */}
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-black text-white`}
      >
        {/* Add GA component here - it will only render in production */} 
        <GoogleAnalytics GA_MEASUREMENT_ID="G-2ZG6WW5KNX" />
        {/* Navbar and Footer removed from here, should be in page.js or specific layouts */}
        <main>{children}</main>
      </body>
    </html>
  );
}
