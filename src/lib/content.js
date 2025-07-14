// Content loading via API routes for dynamic Next.js app

// Read all blog posts from API
export async function getBlogPosts() {
  try {
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : process.env.NEXT_PUBLIC_BASE_URL || '';
    
    const response = await fetch(`${baseUrl}/api/blog-posts`, {
      cache: 'no-cache' // Ensure fresh data
    });
    
    if (!response.ok) {
      console.warn('Blog posts API not found, using empty array');
      return [];
    }
    const posts = await response.json();
    return posts || [];
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

// Read all case studies from API
export async function getCaseStudies() {
  try {
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : process.env.NEXT_PUBLIC_BASE_URL || '';
    
    const response = await fetch(`${baseUrl}/api/case-studies`, {
      cache: 'no-cache' // Ensure fresh data
    });
    
    if (!response.ok) {
      console.warn('Case studies API not found, using empty array');
      return [];
    }
    const caseStudies = await response.json();
    return caseStudies || [];
  } catch (error) {
    console.error('Error loading case studies:', error);
    return [];
  }
}

// Get a single blog post by slug
export async function getBlogPost(slug) {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}

// Get a single case study by slug
export async function getCaseStudy(slug) {
  const caseStudies = await getCaseStudies();
  return caseStudies.find(study => study.slug === slug);
}

// Get featured blog posts
export async function getFeaturedBlogPosts(limit = 3) {
  const posts = await getBlogPosts();
  return posts.filter(post => post.featured).slice(0, limit);
}

// Get blog posts by category
export async function getBlogPostsByCategory(category) {
  const posts = await getBlogPosts();
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Get case studies by blockchain
export async function getCaseStudiesByBlockchain(blockchain) {
  const caseStudies = await getCaseStudies();
  return caseStudies.filter(study => study.blockchain.toLowerCase() === blockchain.toLowerCase());
}

// Search function for blog posts
export async function searchBlogPosts(query) {
  const posts = await getBlogPosts();
  const searchTerm = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.category.toLowerCase().includes(searchTerm) ||
    post.fullContent.toLowerCase().includes(searchTerm) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
  );
}

// Search function for case studies
export async function searchCaseStudies(query) {
  const caseStudies = await getCaseStudies();
  const searchTerm = query.toLowerCase();
  
  return caseStudies.filter(study => 
    study.title.toLowerCase().includes(searchTerm) ||
    study.description.toLowerCase().includes(searchTerm) ||
    study.client.toLowerCase().includes(searchTerm) ||
    study.blockchain.toLowerCase().includes(searchTerm) ||
    study.category.toLowerCase().includes(searchTerm)
  );
}