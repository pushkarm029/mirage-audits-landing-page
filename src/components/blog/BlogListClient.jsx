'use client';

import { useState } from 'react';
import { usePostHog } from 'posthog-js/react';
import Link from 'next/link';

export default function BlogListClient({ initialPosts }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const posthog = usePostHog();

  const categories = ['All', 'Security Guide', 'DeFi Security', 'Blockchain Security', 'Infrastructure Security'];

  const filteredPosts = initialPosts.filter(post => {
    const categoryMatch = filterCategory === 'All' || post.category === filterCategory;
    const searchMatch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

    return categoryMatch && searchMatch;
  });

  const featuredPosts = initialPosts.filter(post => post.featured);

  const handlePostClick = (post) => {
    posthog?.capture('blog_post_clicked', {
      post_id: post.id,
      post_title: post.title,
      category: post.category,
      tags: post.tags || []
    });
  };

  const handleFilterChange = (category) => {
    setFilterCategory(category);
    posthog?.capture('blog_filter_applied', {
      filter_category: category
    });
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {  // Only track searches longer than 2 chars
      posthog?.capture('blog_search_performed', {
        search_query: query
      });
    }
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background image - same as hero */}
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center hero-bg"></div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/backgrounds/noise-bg.png)',
          backgroundRepeat: 'repeat',
          opacity: 0.3
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Blog
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Expert insights on Web3 security, smart contract vulnerabilities, and blockchain security best practices.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50"
                />
              </div>

              {/* Category Filter */}
              <div className="md:w-64">
                <select
                  value={filterCategory}
                  onChange={(e) => handleFilterChange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-black">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    onClick={() => handlePostClick(post)}
                    className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer block"
                  >
                    {/* Thumbnail Image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-white/70 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span className="font-inter">{post.author}</span>
                        <span className="font-inter">{post.readingTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-white/60">No articles found matching your criteria.</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    onClick={() => handlePostClick(post)}
                    className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer block"
                  >
                    {/* Thumbnail Image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs">
                          {post.category}
                        </span>
                        <span className="text-white/60 text-xs">
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-white/70 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span className="font-inter">{post.author}</span>
                        <span className="font-inter">{post.readingTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
