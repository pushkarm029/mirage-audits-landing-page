import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from '@/components/blog/MDXComponents';
import { notFound } from 'next/navigation';

async function getPost(slug) {
  try {
    const postFilePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(postFilePath)) {
      return null;
    }
    
    const source = fs.readFileSync(postFilePath, 'utf8');
    const { content, data } = matter(source);
    
    return { 
      content, 
      meta: {
        id: data.id || Math.random(),
        slug: data.slug || slug,
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        category: data.category || 'General',
        date: data.date || new Date().toISOString().split('T')[0],
        author: data.author || 'Mirage Audits',
        readingTime: data.readingTime || '5 min read',
        featured: data.featured || false,
        blockchain: data.blockchain || '',
        tags: data.tags || [],
        ...data
      }
    };
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Mirage Audits',
      description: 'The requested blog post could not be found.'
    };
  }

  const imageUrl = post.meta.image
    ? `https://mirageaudits.com${post.meta.image}`
    : 'https://mirageaudits.com/logo.png';

  return {
    title: `${post.meta.title} - Mirage Audits`,
    description: post.meta.excerpt,
    alternates: {
      canonical: `https://mirageaudits.com/blog/${slug}`,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: 'article',
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      tags: post.meta.tags,
      url: `https://mirageaudits.com/blog/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [imageUrl],
      creator: '@mirageaudits',
      site: '@mirageaudits',
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { content, meta } = post;

  // Article Structured Data (JSON-LD)
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "description": meta.excerpt,
    "image": meta.image ? `https://mirageaudits.com${meta.image}` : "https://mirageaudits.com/logo.png",
    "datePublished": meta.date,
    "dateModified": meta.date,
    "author": {
      "@type": "Person",
      "name": meta.author,
      "url": "https://mirageaudits.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mirage Audits",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mirageaudits.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mirageaudits.com/blog/${slug}`
    },
    "keywords": meta.tags ? meta.tags.join(', ') : '',
    "articleSection": meta.category,
    "inLanguage": "en-US"
  };

  return (
    <>
      {/* Add structured data script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Noise background - repeatable */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'url(/images/backgrounds/noise-bg.png)',
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
          href="/blog"
          className="mb-8 flex items-center text-blue-300 hover:text-blue-200 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </a>

        {/* Article Header */}
        <article className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              {meta.category}
            </span>
            <span className="text-white/60 text-sm">
              {meta.date}
            </span>
            <span className="text-white/60 text-sm">
              {meta.readingTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {meta.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <img
                src="/images/pushkar-author.jpg"
                alt={meta.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <div>
                <div className="text-white font-medium">{meta.author}</div>
                <div className="text-white/60 text-sm">Security Expert</div>
              </div>
              {meta.authorTwitter && (
                <a
                  href={`https://x.com/${meta.authorTwitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-blue-400 transition-colors"
                  aria-label={`Follow ${meta.author} on X`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Tags */}
          {meta.tags && meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {meta.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <MDXRemote
            source={content}
            components={MDXComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    // @ts-ignore
                    (await import('rehype-highlight')).default,
                    {
                      languages: {
                        rust: (await import('highlight.js/lib/languages/rust')).default,
                        move: (await import('highlight.js/lib/languages/rust')).default,
                        bash: (await import('highlight.js/lib/languages/bash')).default,
                        json: (await import('highlight.js/lib/languages/json')).default,
                      }
                    }
                  ]
                ]
              }
            }}
          />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="text-white/60">
              Found this helpful? Share it with your team.
            </div>
            <div className="flex gap-4">
              <button className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
    </>
  );
}