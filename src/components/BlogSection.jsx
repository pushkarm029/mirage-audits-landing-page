'use client';

import { useState, useEffect } from 'react';
import { usePostHog } from 'posthog-js/react';

export default function BlogSection() {
  const [blogArticles, setBlogArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const posthog = usePostHog();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog-posts');
        const data = await response.json();
        // Get top 3 latest blog posts
        const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogArticles(sortedPosts.slice(0, 3));
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleBlogClick = (article) => {
    posthog?.capture('blog_post_clicked', {
      post_id: article.id,
      post_title: article.title,
      post_slug: article.slug,
      category: article.category,
      reading_time: article.readingTime,
      location: 'homepage_blog'
    });
  };

  return (
    <section className="relative bg-black text-white py-16 sm:py-20" style={{ backgroundImage: 'url(/noise-bg.png)' }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Header - Halborn style */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Blockchain Security</span> Insights
          </h2>
          <p className="font-inter text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Stay informed with the latest security research, threat analysis, and best practices from our expert team
          </p>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {loading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, index) => (
              <article key={index} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden animate-pulse">
                <div className="aspect-video bg-white/10"></div>
                <div className="p-6">
                  <div className="h-4 bg-white/10 rounded mb-4"></div>
                  <div className="h-6 bg-white/10 rounded mb-3"></div>
                  <div className="h-16 bg-white/10 rounded mb-4"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                </div>
              </article>
            ))
          ) : (
            blogArticles.map((article) => (
              <a
                key={article.id}
                href={`/blog/${article.slug}`}
                onClick={() => handleBlogClick(article)}
                className="group bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-300 block"
              >
                {/* Cover Image */}
                <div className="aspect-video relative overflow-hidden">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <span className="text-lg font-bold text-white">
                            {article.category?.slice(0, 2).toUpperCase() || 'BL'}
                          </span>
                        </div>
                        <div className="text-xs text-white/70">
                          {article.category}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex px-3 py-1 text-xs font-medium uppercase tracking-wider bg-blue-600/20 text-blue-300 rounded-full border border-blue-400/20">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-inter text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-sm text-white/70 mb-4 leading-relaxed line-clamp-3">
                    {article.description}
                  </p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span className="font-inter">{new Date(article.date).toLocaleDateString()}</span>
                    <span className="font-inter">{article.readingTime || '5 min read'}</span>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* View All Blog Posts CTA - Halborn style */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm h-12 px-8 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200"
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