import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Security Blog - Starknet, Sui, Solana, Rust & Stellar Insights",
  description: "Expert security insights for Starknet, Sui, Solana, Rust & Stellar blockchains. Vulnerability analysis and security best practices for next-gen chains.",
  keywords: "Starknet security, Sui security, Solana security, Rust security, Stellar security, Cairo audit, Move audit, next-gen blockchain security",
  openGraph: {
    title: "Blog - Mirage Audits",
    description: "Expert insights on Web3 security, smart contract vulnerabilities, and blockchain security best practices.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogList />;
}