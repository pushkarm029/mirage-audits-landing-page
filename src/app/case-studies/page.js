import CaseStudiesList from "@/components/case-studies/CaseStudiesList";

export const metadata = {
  title: "Security Case Studies - NEAR, Sui, Solana, Rust & Stellar Audits",
  description: "Real-world security audit case studies for NEAR, Sui, Solana, Rust & Stellar projects. See how we've prevented millions in potential losses.",
  keywords: "NEAR audit case study, Sui audit examples, Solana security review, Rust audit results, Stellar security case study, Move audit, Anchor audit, Soroban audit, next-gen chain audits",
  alternates: {
    canonical: 'https://mirageaudits.com/case-studies',
  },
  openGraph: {
    title: "Security Case Studies - Mirage Audits",
    description: "Real-world security successes across Web3 ecosystems. See how we've secured the future of blockchain technology.",
    type: "website",
    url: 'https://mirageaudits.com/case-studies',
    images: [
      {
        url: 'https://mirageaudits.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mirage Audits Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Security Case Studies - Mirage Audits",
    description: "Real-world security successes across Web3 ecosystems.",
    images: ['https://mirageaudits.com/logo.png'],
    creator: '@mirageaudits',
    site: '@mirageaudits',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesList />;
}