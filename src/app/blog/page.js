import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Security Blog - NEAR, Sui, Solana, Rust & Stellar Insights",
  description: "Expert security insights for NEAR, Sui, Solana, Rust & Stellar blockchains. Vulnerability analysis and security best practices for next-gen chains.",
  keywords: "NEAR security, Sui security, Solana security, Rust security, Stellar security, Move audit, Anchor audit, Soroban audit, next-gen blockchain security",
  openGraph: {
    title: "Blog - Mirage Audits",
    description: "Expert insights on Web3 security, smart contract vulnerabilities, and blockchain security best practices.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogList />;
}