import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from '@/components/MDXComponents';
import { notFound } from 'next/navigation';

async function getCaseStudy(slug) {
  try {
    const studyFilePath = path.join(process.cwd(), 'src', 'content', 'case-studies', `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(studyFilePath)) {
      return null;
    }
    
    const source = fs.readFileSync(studyFilePath, 'utf8');
    const { content, data } = matter(source);
    
    return { 
      content, 
      meta: {
        id: data.id || Math.random(),
        slug: data.slug || slug,
        title: data.title || 'Untitled Case Study',
        client: data.client || 'Anonymous Client',
        description: data.description || data.excerpt || '',
        category: data.category || 'Security Audit',
        blockchain: data.blockchain || 'Multi-chain',
        date: data.date || new Date().toISOString().split('T')[0],
        highlights: data.highlights || [],
        metrics: data.metrics || {},
        image: data.image || '',
        logo: data.logo || '',
        ...data
      }
    };
  } catch (error) {
    console.error('Error loading case study:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  
  if (!study) {
    return {
      title: 'Case Study Not Found - Mirage Audits',
      description: 'The requested case study could not be found.'
    };
  }

  return {
    title: `${study.meta.title} - Mirage Audits`,
    description: study.meta.description,
    openGraph: {
      title: study.meta.title,
      description: study.meta.description,
      type: 'article',
      publishedTime: study.meta.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: study.meta.title,
      description: study.meta.description,
    },
  };
}

export default async function CaseStudyPost({ params }) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const { content, meta } = study;

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Noise background - repeatable */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'url(/noise-bg.png)',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <a
          href="/case-studies"
          className="mb-8 flex items-center text-blue-300 hover:text-blue-200 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Case Studies
        </a>

        {/* Case Study Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              {meta.category}
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
              {meta.blockchain}
            </span>
            <span className="text-white/60 text-sm">
              {meta.date}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {meta.title}
          </h1>
          
          <div className="text-xl text-blue-300 mb-6">
            Client: {meta.client}
          </div>

          {/* Metrics Grid */}
          {meta.metrics && Object.keys(meta.metrics).length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {meta.metrics.duration && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-white/60 text-sm">Duration</div>
                  <div className="text-white font-semibold">{meta.metrics.duration}</div>
                </div>
              )}
              {meta.metrics.vulnerabilities && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-white/60 text-sm">Issues Found</div>
                  <div className="text-white font-semibold">{meta.metrics.vulnerabilities}</div>
                </div>
              )}
              {meta.metrics.severity && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-white/60 text-sm">Max Severity</div>
                  <div className="text-red-400 font-semibold">{meta.metrics.severity}</div>
                </div>
              )}
              {meta.metrics.tvlSecured && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-white/60 text-sm">TVL Secured</div>
                  <div className="text-green-400 font-semibold">{meta.metrics.tvlSecured}</div>
                </div>
              )}
            </div>
          )}

          {/* Highlights */}
          {meta.highlights && meta.highlights.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Key Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {meta.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Case Study Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <MDXRemote source={content} components={MDXComponents} />
        </div>

        </div>
      </div>
    </section>
  );
}