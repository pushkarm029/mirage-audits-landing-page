import CaseStudiesList from "@/components/CaseStudiesList";

export const metadata = {
  title: "Case Studies - Mirage Audits | Web3 Security Success Stories",
  description: "Explore real-world Web3 security audits by Mirage Audits. See how we've secured Solana, Sui, Cardano & Layer 2 protocols, preventing millions in potential losses.",
  keywords: "case studies, Web3 security audit results, smart contract audit examples, Solana audit case study, Cardano security review, DeFi audit success",
  openGraph: {
    title: "Case Studies - Mirage Audits",
    description: "Real-world security successes across Web3 ecosystems. See how we've secured the future of blockchain technology.",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesList />;
}