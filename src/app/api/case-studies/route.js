import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  try {
    const studiesDirectory = path.join(process.cwd(), 'src', 'content', 'case-studies');
    
    // Check if directory exists
    if (!fs.existsSync(studiesDirectory)) {
      return Response.json([]);
    }

    const filenames = fs.readdirSync(studiesDirectory);

    const studies = filenames
      .filter(filename => filename.endsWith('.mdx') || filename.endsWith('.md'))
      .map((filename) => {
        const filePath = path.join(studiesDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data: meta, content } = matter(fileContents);

        return {
          id: meta.id || Math.random(),
          slug: meta.slug || filename.replace(/\.(mdx|md)$/, ''),
          title: meta.title || 'Untitled Case Study',
          client: meta.client || 'Anonymous Client',
          description: meta.description || meta.excerpt || '',
          content: content,
          category: meta.category || 'Security Audit',
          blockchain: meta.blockchain || 'Multi-chain',
          date: meta.date || new Date().toISOString().split('T')[0],
          highlights: meta.highlights || [],
          metrics: meta.metrics || {},
          image: meta.image || '',
          logo: meta.logo || '',
          ...meta
        };
      });

    // Sort studies by date in descending order
    const sortedStudies = studies.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    return Response.json(sortedStudies);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return Response.json([]);
  }
}