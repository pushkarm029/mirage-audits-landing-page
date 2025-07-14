'use client';

import { useState, useEffect } from 'react';
import { usePostHog } from 'posthog-js/react';
import { getCaseStudies } from '@/lib/content';
import Link from 'next/link';

export default function CaseStudiesList() {
  const [allCaseStudies, setAllCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterBlockchain, setFilterBlockchain] = useState('All');
  const posthog = usePostHog();

  // Load case studies from markdown files
  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        const studies = await getCaseStudies();
        setAllCaseStudies(studies);
      } catch (error) {
        console.error('Error loading case studies:', error);
        setAllCaseStudies([]);
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudies();
  }, []);

  if (loading) {
    return (
      <div className="py-20 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-white/60 font-inter">Loading case studies...</div>
          </div>
        </div>
      </div>
    );
  }

  const categories = ['All', 'DeFi', 'Infrastructure', 'Gaming', 'NFT'];
  const blockchains = ['All', 'Solana', 'Ethereum', 'Cardano', 'Sui', 'Polygon', 'Multi-chain'];

  const filteredStudies = allCaseStudies.filter(study => {
    const categoryMatch = filterCategory === 'All' || study.category === filterCategory;
    const blockchainMatch = filterBlockchain === 'All' || study.blockchain === filterBlockchain;
    return categoryMatch && blockchainMatch;
  });

  const handleStudyClick = (study) => {
    posthog?.capture('case_study_clicked', {
      study_id: study.id,
      study_title: study.title,
      client: study.client,
      category: study.category,
      blockchain: study.blockchain
    });
  };

  const handleFilterChange = (type, value) => {
    if (type === 'category') {
      setFilterCategory(value);
    } else if (type === 'blockchain') {
      setFilterBlockchain(value);
    }
    posthog?.capture('case_study_filter_applied', {
      filter_type: type,
      filter_value: value
    });
  };


  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
            Case Studies
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter">
            Real-world security successes across Web3 ecosystems. From DeFi protocols to gaming platforms, 
            see how we've helped secure the future of blockchain technology.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={filterCategory}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50 font-inter"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-black">
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Blockchain Filter */}
            <div className="md:w-64">
              <select
                value={filterBlockchain}
                onChange={(e) => handleFilterChange('blockchain', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50 font-inter"
              >
                {blockchains.map(blockchain => (
                  <option key={blockchain} value={blockchain} className="bg-black">
                    {blockchain === 'All' ? 'All Blockchains' : blockchain}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        {filteredStudies.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-white/60 font-inter">No case studies found matching your criteria.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                onClick={() => handleStudyClick(study)}
                className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer block"
              >
                
                {/* Case Study Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold text-white font-jetbrains-mono">
                          {study.blockchain.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full font-jetbrains-mono">
                        {study.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Blockchain Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-jetbrains-mono">
                      {study.blockchain}
                    </div>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-6">
                  
                  {/* Client Name */}
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-white font-jetbrains-mono">
                        {study.client.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm text-blue-300 font-jetbrains-mono">
                      {study.client}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors font-space-grotesk">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-3 font-inter">
                    {study.description}
                  </p>

                  {/* Highlights */}
                  {study.highlights && study.highlights.length > 0 && (
                    <div className="space-y-2">
                      {study.highlights.slice(0, 2).map((highlight, index) => (
                        <div key={index} className="flex items-center text-xs text-white/60">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Read More Indicator */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs text-blue-300 font-jetbrains-mono group-hover:text-blue-200 transition-colors">
                      Read Case Study →
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

