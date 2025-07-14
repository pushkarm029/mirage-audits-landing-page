'use client';

import { useState, useEffect } from 'react';
import { usePostHog } from 'posthog-js/react';
import { getBlogPosts } from '@/lib/content';
import Link from 'next/link';

export default function BlogList() {
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const posthog = usePostHog();

  // Load blog posts from markdown files
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setAllBlogPosts(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setAllBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="py-20 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-white/60 font-inter">Loading blog posts...</div>
          </div>
        </div>
      </div>
    );
  }

  const categories = ['All', 'Security Guide', 'DeFi Security', 'Blockchain Security', 'Infrastructure Security'];

  const filteredPosts = allBlogPosts.filter(post => {
    const categoryMatch = filterCategory === 'All' || post.category === filterCategory;
    const searchMatch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    return categoryMatch && searchMatch;
  });

  const featuredPosts = allBlogPosts.filter(post => post.featured);

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
    posthog?.capture('blog_search_performed', {
      search_query: query
    });
  };


  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
            Security Blog
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter">
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
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 font-inter"
              />
            </div>
            
            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={filterCategory}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50 font-inter"
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
            <h2 className="text-2xl font-bold text-white mb-8 font-space-grotesk">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  onClick={() => handlePostClick(post)}
                  className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer block"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-jetbrains-mono">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-jetbrains-mono">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors font-space-grotesk line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-4 line-clamp-3 font-inter">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span className="font-inter">{post.author}</span>
                      <span className="font-jetbrains-mono">{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 font-space-grotesk">All Articles</h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-white/60 font-inter">No articles found matching your criteria.</div>
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
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-jetbrains-mono">
                        {post.category}
                      </span>
                      <span className="text-white/60 text-xs font-jetbrains-mono">
                        {post.date}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors font-space-grotesk line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-4 line-clamp-3 font-inter">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span className="font-inter">{post.author}</span>
                      <span className="font-jetbrains-mono">{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

