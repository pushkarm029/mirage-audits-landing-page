import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Blog - Mirage Audits | Web3 Security Insights & Analysis",
  description: "Stay updated with the latest Web3 security insights, vulnerability analysis, and blockchain security best practices from Mirage Audits experts.",
  keywords: "Web3 security blog, smart contract vulnerabilities, DeFi security, Solana security, Cardano security, blockchain security analysis",
  openGraph: {
    title: "Blog - Mirage Audits",
    description: "Expert insights on Web3 security, smart contract vulnerabilities, and blockchain security best practices.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogList />;
}