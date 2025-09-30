import BlogList from "@/components/blog/BlogList";

export const metadata = {
  title: "Security Blog - NEAR, Sui, Solana, Rust & Stellar Insights",
  description: "Expert security insights for NEAR, Sui, Solana, Rust & Stellar blockchains. Vulnerability analysis and security best practices for next-gen chains.",
  keywords: "NEAR security, Sui security, Solana security, Rust security, Stellar security, Move audit, Anchor audit, Soroban audit, next-gen blockchain security",
  alternates: {
    canonical: 'https://mirageaudits.com/blog',
  },
  openGraph: {
    title: "Security Blog - Mirage Audits",
    description: "Expert insights on Web3 security, smart contract vulnerabilities, and blockchain security best practices.",
    type: "website",
    url: 'https://mirageaudits.com/blog',
    images: [
      {
        url: 'https://mirageaudits.com/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Mirage Audits Security Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Security Blog - Mirage Audits",
    description: "Expert insights on Web3 security and blockchain security best practices.",
    images: ['https://mirageaudits.com/logo.webp'],
    creator: '@mirageaudits',
    site: '@mirageaudits',
  },
};

export default function BlogPage() {
  return <BlogList />;
}