'use client';

import Image from 'next/image';
import { usePostHog } from 'posthog-js/react';
import { useState, useEffect } from 'react';

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const posthog = usePostHog();

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch('/api/case-studies');
        const data = await response.json();
        // Get top 3 latest case studies
        const sortedStudies = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setCaseStudies(sortedStudies.slice(0, 3));
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const handleCaseStudyClick = (caseStudy) => {
    posthog?.capture('case_study_clicked', {
      case_study_id: caseStudy.id,
      case_study_title: caseStudy.title,
      case_study_slug: caseStudy.slug,
      client: caseStudy.client,
      category: caseStudy.category,
      blockchain: caseStudy.blockchain,
      location: 'homepage_case_studies'
    });
  };

  const handleViewAllClick = () => {
    posthog?.capture('view_all_case_studies_clicked', {
      location: 'case_studies_section'
    });
  };

  return (
    <section className="relative py-20 bg-black" id="case-studies" style={{ backgroundImage: 'url(/images/backgrounds/noise-bg.png)' }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real-world security successes across Web3 ecosystems. From DeFi protocols to gaming platforms,
            see how we've helped secure the future of blockchain technology.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading ? (
            // Loading skeleton
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden animate-pulse">
                <div className="h-48 bg-white/10"></div>
                <div className="p-6">
                  <div className="h-4 bg-white/10 rounded mb-4"></div>
                  <div className="h-6 bg-white/10 rounded mb-3"></div>
                  <div className="h-16 bg-white/10 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            caseStudies.map((caseStudy) => (
              <a
                key={caseStudy.id}
                href={`/case-studies/${caseStudy.slug}`}
                onClick={() => handleCaseStudyClick(caseStudy)}
                className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer block"
              >

                {/* Case Study Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold text-white">
                          {caseStudy.blockchain?.slice(0, 2).toUpperCase() || 'CS'}
                        </span>
                      </div>
                      <div className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full">
                        {caseStudy.category}
                      </div>
                    </div>
                  </div>

                  {/* Blockchain Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {caseStudy.blockchain || 'Multi-Chain'}
                    </div>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-6">

                  {/* Client Name */}
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-white">
                        {caseStudy.client.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm text-blue-300">
                      {caseStudy.client}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {caseStudy.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {caseStudy.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {caseStudy.highlights?.slice(0, 2).map((highlight, index) => (
                      <div key={index} className="flex items-center text-xs text-white/60">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    )) || (
                        <div className="space-y-2">
                          <div className="flex items-center text-xs text-white/60">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                            {caseStudy.readingTime || '5 min read'}
                          </div>
                          <div className="flex items-center text-xs text-white/60">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                            {new Date(caseStudy.date).toLocaleDateString()}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Read More Indicator */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs text-blue-300 group-hover:text-blue-200 transition-colors">
                      Read Case Study →
                    </span>
                  </div>

                </div>
              </a>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a href="/case-studies">
            <button
              onClick={handleViewAllClick}
              className="relative inline-flex items-center justify-center px-8 py-3 bg-white/5 text-white rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg border-2 border-blue-500/30 animate-pulse"></div>
              <span className="relative">View All Case Studies</span>
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}