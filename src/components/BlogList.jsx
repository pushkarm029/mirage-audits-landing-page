import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogListClient from './BlogListClient';

async function getAllBlogPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
      .filter(filename => filename.endsWith('.mdx') || filename.endsWith('.md'))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data: meta } = matter(fileContents);

        return {
          id: meta.id || Math.random(),
          slug: meta.slug || filename.replace(/\.(mdx|md)$/, ''),
          title: meta.title || 'Untitled',
          excerpt: meta.excerpt || '',
          category: meta.category || 'General',
          date: meta.date || new Date().toISOString().split('T')[0],
          author: meta.author || 'Mirage Audits',
          authorTwitter: meta.authorTwitter || '',
          readingTime: meta.readingTime || '5 min read',
          featured: meta.featured || false,
          blockchain: meta.blockchain || '',
          tags: meta.tags || [],
          image: meta.image || ''
        };
      });

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export default async function BlogList() {
  const allBlogPosts = await getAllBlogPosts();
  return <BlogListClient initialPosts={allBlogPosts} />;
}
