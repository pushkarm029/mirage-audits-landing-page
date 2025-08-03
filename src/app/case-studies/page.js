import CaseStudiesList from "@/components/CaseStudiesList";

export const metadata = {
  title: "Security Case Studies - Starknet, Sui, Solana, Rust & Stellar Audits",
  description: "Real-world security audit case studies for Starknet, Sui, Solana, Rust & Stellar projects. See how we've prevented millions in potential losses.",
  keywords: "Starknet audit case study, Sui audit examples, Solana security review, Rust audit results, Stellar security case study, next-gen chain audits",
  openGraph: {
    title: "Case Studies - Mirage Audits",
    description: "Real-world security successes across Web3 ecosystems. See how we've secured the future of blockchain technology.",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesList />;
}