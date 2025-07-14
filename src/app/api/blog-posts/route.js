import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');
    
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return Response.json([]);
    }

    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
      .filter(filename => filename.endsWith('.mdx') || filename.endsWith('.md'))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data: meta, content } = matter(fileContents);

        return {
          id: meta.id || Math.random(),
          slug: meta.slug || filename.replace(/\.(mdx|md)$/, ''),
          title: meta.title || 'Untitled',
          excerpt: meta.excerpt || '',
          content: content,
          category: meta.category || 'General',
          date: meta.date || new Date().toISOString().split('T')[0],
          author: meta.author || 'Mirage Audits',
          readingTime: meta.readingTime || '5 min read',
          featured: meta.featured || false,
          blockchain: meta.blockchain || '',
          tags: meta.tags || [],
          ...meta
        };
      });

    // Sort posts by date in descending order
    const sortedPosts = posts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    return Response.json(sortedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Response.json([]);
  }
}