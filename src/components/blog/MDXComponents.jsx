// Custom MDX components for rendering markdown content with Mirage Audits styling

const MDXComponents = {
  // Headings
  h1: (props) => (
    <h1 
      className="text-3xl md:text-4xl font-bold text-white mb-6" 
      {...props} 
    />
  ),
  h2: (props) => (
    <h2 
      className="text-2xl md:text-3xl font-semibold text-white mb-4" 
      {...props} 
    />
  ),
  h3: (props) => (
    <h3 
      className="text-xl md:text-2xl font-semibold text-white mb-3" 
      {...props} 
    />
  ),
  h4: (props) => (
    <h4 
      className="text-lg md:text-xl font-medium text-white mb-3" 
      {...props} 
    />
  ),
  h5: (props) => (
    <h5 
      className="text-base md:text-lg font-medium text-white mb-2" 
      {...props} 
    />
  ),
  h6: (props) => (
    <h6 
      className="text-sm md:text-base font-medium text-white mb-2" 
      {...props} 
    />
  ),

  // Paragraphs and text
  p: (props) => (
    <p 
      className="text-white/80 mb-4 leading-relaxed text-base" 
      {...props} 
    />
  ),

  // Lists
  ul: (props) => (
    <ul 
      className="text-white/80 mb-4 space-y-2 list-disc list-inside" 
      {...props} 
    />
  ),
  ol: (props) => (
    <ol 
      className="text-white/80 mb-4 space-y-2 list-decimal list-inside" 
      {...props} 
    />
  ),
  li: (props) => (
    <li 
      className="text-white/80 leading-relaxed" 
      {...props} 
    />
  ),

  // Links
  a: (props) => (
    <a 
      className="text-blue-300 hover:text-blue-200 underline transition-colors" 
      target="_blank"
      rel="noopener noreferrer"
      {...props} 
    />
  ),

  // Code - inline code vs code blocks
  code: ({ className, children, ...props }) => {
    // Check if this is a code block (has language class from rehype-highlight)
    const isCodeBlock = className && className.startsWith('hljs');

    if (isCodeBlock) {
      // This is a code block - preserve highlighting classes
      return (
        <code
          className={`${className} font-mono`}
          {...props}
        >
          {children}
        </code>
      );
    }

    // This is inline code
    return (
      <code
        className="bg-white/10 text-blue-300 px-2 py-1 rounded text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    );
  },

  pre: ({ children, ...props }) => (
    <pre
      className="bg-[#0d1117] border border-white/10 p-4 rounded-lg overflow-x-auto mb-6 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),

  // Blockquotes
  blockquote: (props) => (
    <blockquote 
      className="border-l-4 border-blue-300 bg-white/5 pl-4 py-2 mb-4 italic text-white/90" 
      {...props} 
    />
  ),

  // Tables
  table: (props) => (
    <div className="overflow-x-auto mb-6">
      <table 
        className="w-full border-collapse border border-white/20 text-sm" 
        {...props} 
      />
    </div>
  ),
  thead: (props) => (
    <thead 
      className="bg-white/10" 
      {...props} 
    />
  ),
  tbody: (props) => (
    <tbody 
      {...props} 
    />
  ),
  tr: (props) => (
    <tr 
      className="border-b border-white/10" 
      {...props} 
    />
  ),
  th: (props) => (
    <th 
      className="border border-white/20 px-4 py-2 text-left font-semibold text-white" 
      {...props} 
    />
  ),
  td: (props) => (
    <td 
      className="border border-white/20 px-4 py-2 text-white/80" 
      {...props} 
    />
  ),

  // Emphasis
  strong: (props) => (
    <strong 
      className="font-semibold text-white" 
      {...props} 
    />
  ),
  em: (props) => (
    <em 
      className="italic text-white/90" 
      {...props} 
    />
  ),

  // Horizontal rule
  hr: (props) => (
    <hr 
      className="border-white/20 my-8" 
      {...props} 
    />
  ),

  // Images
  img: (props) => (
    <Image 
      className="rounded-lg mb-4 max-w-full h-auto" 
      {...props} 
    />
  ),
};

export default MDXComponents;