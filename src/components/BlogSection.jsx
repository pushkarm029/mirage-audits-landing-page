'use client';

export default function BlogSection() {
  // Blog articles data - matching the exact Halborn articles you specified
  const blogArticles = [
    {
      id: 1,
      title: "Securing the Blockchain Against Quantum Computing",
      slug: "securing-the-blockchain-against-quantum-computing",
      description: "As quantum computing advances, the blockchain must evolve to stay secure. Learn about the threats quantum computers pose to current cryptographic methods and the quantum-resistant solutions being developed.",
      category: "Blockchain Security",
      categorySlug: "blockchain-security",
      author: "Rob Behnke",
      publishDate: "07.09.2025",
      coverImage: "https://cdn.halbornmainframe.com/Securing_the_Blockchain_Against_Quantum_Computing_f53c0587b2.jpg"
    },
    {
      id: 2,
      title: "Top Risks of Investing in Internet Capital Markets",
      slug: "top-risks-of-investing-in-internet-capital-markets", 
      description: "Internet capital markets offer exciting investment opportunities but come with unique risks. Learn about the top security, regulatory, and technical risks investors should consider.",
      category: "Enterprise",
      categorySlug: "enterprise",
      author: "Rob Behnke",
      publishDate: "07.08.2025",
      coverImage: "https://cdn.halbornmainframe.com/Top_Risks_of_Investing_in_Internet_Capital_Markets_a132b49cce.jpg"
    },
    {
      id: 3,
      title: "Month in Review: Top DeFi Hacks of June 2025",
      slug: "month-in-review-top-defi-hacks-of-june-2025",
      description: "Halborn recaps the biggest DeFi hacks that occurred in June 2025.",
      category: "Month in Review",
      categorySlug: "defi-hacks",
      author: "Rob Behnke", 
      publishDate: "07.01.2025",
      coverImage: "https://cdn.halbornmainframe.com/Biggest_De_Fi_Hacks_in_June_2025_d747324540.jpg"
    }
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Halborn style */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Blockchain Security</span> Insights
          </h2>
          <p className="font-inter text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Stay informed with the latest security research, threat analysis, and best practices from our expert team
          </p>
        </div>

        {/* Blog Articles Grid - exact Halborn structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogArticles.map((article) => (
            <article 
              key={article.id}
              className="group bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-300"
            >
              {/* Cover Image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex px-3 py-1 text-xs font-jetbrains-mono font-medium uppercase tracking-wider bg-blue-600/20 text-blue-300 rounded-full border border-blue-400/20">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-sm text-white/70 mb-4 leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span className="font-inter">{article.publishDate}</span>
                  <span className="font-inter">{article.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blog Posts CTA - Halborn style */}
        <div className="text-center mt-12 sm:mt-16">
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 font-inter font-bold uppercase tracking-wider text-sm h-12 px-8 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200"
          >
            View All Articles
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}