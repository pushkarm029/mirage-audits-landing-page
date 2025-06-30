import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/Analytics";

// import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define base metadata for the site
export const metadata = {
  metadataBase: new URL('https://getgame9.com'),
  title: { // Add a template for titles on other pages
    default: 'Game9 - Next Generation Cloud Gaming', // Default title for homepage or if page doesn't specify
    template: '%s | Game9', // Template for other pages (e.g., "About Us | Game9")
  },
  description: "Experience the future of cloud gaming with Game9. Instant access to a vast library, zero downtime, and no waiting queues. Join the beta today!", // Default description
  // Basic icons setup (Next.js automatically handles favicon.ico in /app)
  icons: {
    icon: '/favicon.ico', // Explicitly link favicon
    apple: '/apple-touch-icon.png', // Standard Apple touch icon
  },
  // Add WebSite JSON-LD schema
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://getgame9.com",
      "name": "Game9",
      "description": "Next generation cloud gaming platform offering instant access, zero downtime, and no waiting queues.",
      // Potential Search Action - uncomment if you add site search
      // "potentialAction": {
      //   "@type": "SearchAction",
      //   "target": "https://getgame9.com/search?q={search_term_string}",
      //   "query-input": "required name=search_term_string"
      // }
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Head is automatically managed by Next.js metadata API */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        // Updated body classes to match Hero section for consistency
      >
        {/* Add GA component here - it will only render in production */} 
        <GoogleAnalytics GA_MEASUREMENT_ID="G-2ZG6WW5KNX" />
        {/* Navbar and Footer removed from here, should be in page.js or specific layouts */}
        <main>{children}</main>
      </body>
    </html>
  );
}
