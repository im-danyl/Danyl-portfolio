import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogConfig, generateBlogMeta } from './blog-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure output directories exist
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Read template files
const readTemplate = (templateName) => {
  const templatePath = path.join(__dirname, 'templates', templateName);
  return fs.readFileSync(templatePath, 'utf-8');
};

// Generate individual blog post HTML
const generateBlogPost = (post, postContent) => {
  const template = readTemplate('blog-template.html');
  const meta = generateBlogMeta(post);
  
  // Map internal categories to display-friendly names
  const displayCategory = (category) => {
    const categoryMap = {
      'TOFU': 'Getting Started',
      'MOFU': 'Strategy & Tips', 
      'BOFU': 'Services',
      'Philadelphia, Pennsylvania': 'Philadelphia',
      'Austin, Texas': 'Austin',
      'Miami, Florida': 'Miami', 
      'Denver, Colorado': 'Denver',
      'Charlotte, North Carolina': 'Charlotte'
    };
    return categoryMap[category] || category;
  };
  
  // Generate related posts (exclude current post)
  const relatedPosts = blogConfig.posts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)
    .map(p => `
      <div class="p-6 rounded-xl card-bg group">
        <div class="mb-2">
          <span class="text-accent text-sm font-medium">${displayCategory(p.category)}</span>
        </div>
        <h4 class="text-xl font-semibold mb-2 group-hover:text-accent-primary transition">${p.title}</h4>
        <p class="text-secondary text-sm mb-4">${p.description.substring(0, 120)}...</p>
        <div class="flex items-center justify-between">
          <span class="text-muted text-sm">${p.readTime}</span>
          <a href="/blog/${p.slug}/" class="text-accent hover:text-accent-primary text-sm font-medium">Read more →</a>
        </div>
      </div>
    `).join('');

  return template
    .replace(/{{title}}/g, meta.title)
    .replace(/{{description}}/g, meta.description)
    .replace(/{{keywords}}/g, meta.keywords)
    .replace(/{{canonical}}/g, meta.canonical)
    .replace(/{{ogTitle}}/g, meta.openGraph.title)
    .replace(/{{ogDescription}}/g, meta.openGraph.description)
    .replace(/{{ogType}}/g, meta.openGraph.type)
    .replace(/{{ogUrl}}/g, meta.openGraph.url)
    .replace(/{{ogImage}}/g, meta.openGraph.image)
    .replace(/{{publishedTime}}/g, meta.openGraph.publishedTime)
    .replace(/{{author}}/g, meta.openGraph.author)
    .replace(/{{structuredData}}/g, JSON.stringify(meta.structuredData, null, 2))
    .replace(/{{category}}/g, displayCategory(post.category))
    .replace(/{{publishDate}}/g, new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
    .replace(/{{readTime}}/g, post.readTime)
    .replace(/{{heroImage}}/g, post.heroImage || 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=600&fit=crop')
    .replace(/{{content}}/g, postContent)
    .replace(/{{relatedPosts}}/g, relatedPosts);
};

// Generate blog index HTML
const generateBlogIndex = () => {
  const template = readTemplate('blog-index-template.html');
  
  // Generate post HTML helper function
  const generatePostHTML = (post) => {
    // Map internal categories to display-friendly names
    const displayCategory = (category) => {
      const categoryMap = {
        'TOFU': 'Getting Started',
        'MOFU': 'Strategy & Tips', 
        'BOFU': 'Services',
        'Philadelphia, Pennsylvania': 'Philadelphia',
        'Austin, Texas': 'Austin',
        'Miami, Florida': 'Miami', 
        'Denver, Colorado': 'Denver',
        'Charlotte, North Carolina': 'Charlotte'
      };
      return categoryMap[category] || category;
    };

    const thumbnailImage = post.heroImage ? post.heroImage.replace('w=1200&h=600', 'w=400&h=200') : 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=200&fit=crop';
    
    return `
    <article class="group cursor-pointer">
      <a href="/blog/${post.slug}/" class="block rounded-xl card-bg hover:border-color-accent transition h-full overflow-hidden">
        <div class="aspect-video overflow-hidden">
          <img src="${thumbnailImage}" alt="${post.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
        </div>
        <div class="p-6">
          <div class="mb-3">
            <span class="text-accent text-sm font-medium">${displayCategory(post.category)}</span>
          </div>
          <h2 class="text-xl font-semibold mb-3 group-hover:text-accent-primary transition">${post.title}</h2>
          <p class="text-secondary mb-4 line-clamp-3">${post.description}</p>
          <div class="flex items-center justify-between text-sm">
            <span class="text-muted">${new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span class="text-muted">${post.readTime}</span>
          </div>
        </div>
      </a>
    </article>
  `;
  };

  // Group posts by category
  const tofuPosts = blogConfig.posts.filter(post => post.category === 'TOFU').map(generatePostHTML).join('');
  const mofuPosts = blogConfig.posts.filter(post => post.category === 'MOFU').map(generatePostHTML).join('');
  const bofuPosts = blogConfig.posts.filter(post => post.category === 'BOFU').map(generatePostHTML).join('');
  
  // Group location posts by location
  const locationPosts = ['Philadelphia, Pennsylvania', 'Austin, Texas', 'Miami, Florida', 'Denver, Colorado', 'Charlotte, North Carolina']
    .map(location => {
      const posts = blogConfig.posts.filter(post => post.category === location);
      if (posts.length === 0) return '';
      
      return `
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4 location-header">${location}</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${posts.map(generatePostHTML).join('')}
          </div>
        </div>
      `;
    }).join('');

  return template
    .replace(/{{blogPostsTOFU}}/g, tofuPosts)
    .replace(/{{blogPostsMOFU}}/g, mofuPosts)
    .replace(/{{blogPostsBOFU}}/g, bofuPosts)
    .replace(/{{blogPostsLocations}}/g, locationPosts);
};

// Generate sitemap.xml (site root + blog index + blog posts)
const generateSitemapXml = () => {
  const urls = [
    '/',
    `${blogConfig.blogPath}/`,
    ...blogConfig.posts.map((p) => `${blogConfig.blogPath}/${p.slug}/`),
  ];
  const urlset = urls
    .map((u) => `  <url>\n    <loc>${blogConfig.siteUrl}${u}</loc>\n  </url>`) 
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const sitemapUrl = `${blogConfig.siteUrl}/sitemap.xml`;
  return `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
};

// Generate a simple RSS feed for the blog
const generateRssFeed = () => {
  const items = blogConfig.posts
    .map((p) => {
      const link = `${blogConfig.siteUrl}${blogConfig.blogPath}/${p.slug}/`;
      return `  <item>\n    <title><![CDATA[${p.title}]]></title>\n    <link>${link}</link>\n    <guid>${link}</guid>\n    <pubDate>${new Date(p.publishDate).toUTCString()}</pubDate>\n    <description><![CDATA[${p.description}]]></description>\n  </item>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title><![CDATA[Danyl Blog]]></title>\n  <link>${blogConfig.siteUrl}${blogConfig.blogPath}</link>\n  <description><![CDATA[${blogConfig.description}]]></description>\n  <language>en-us</language>\n${items}\n</channel>\n</rss>\n`;
};

// Main build function
const buildBlog = async () => {
  console.log('🚀 Building blog...');
  
  // Ensure output directories exist
  ensureDir(path.join(__dirname, '../public/blog'));
  
  // Generate blog index
  const indexHTML = generateBlogIndex();
  fs.writeFileSync(path.join(__dirname, '../public/blog/index.html'), indexHTML);
  console.log('✅ Generated blog index');
  
  // Generate individual blog posts
  for (const post of blogConfig.posts) {
    // Read post content (we'll create these next)
    const postPath = path.join(__dirname, 'posts', `${post.slug}.md`);
    let postContent = '';
    
    if (fs.existsSync(postPath)) {
      postContent = fs.readFileSync(postPath, 'utf-8');
      // Remove the first top-level markdown title to avoid duplicate H1
      postContent = postContent.replace(/^(\uFEFF)?\s*#\s+.*(?:\r?\n)+/, '');
      // Convert markdown to HTML (basic conversion)
      postContent = postContent
        .replace(/^# (.*$)/gim, '<h2>$1</h2>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^\* (.*$)/gim, '<li>$1</li>')
        .replace(/^(\d+)\. (.*$)/gim, '<li>$1. $2</li>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^([^<].*$)/gim, '<p>$1</p>')
        .replace(/<p><\/p>/g, '')
        .replace(/<p><li>/g, '<ul><li>')
        .replace(/<\/li><\/p>/g, '</li></ul>');
    } else {
      postContent = `
        <p>This blog post is coming soon! We're working on creating high-quality content about ${post.title.toLowerCase()}.</p>
        <p>In the meantime, feel free to <a href="/#contact">book a strategy call</a> to discuss how professional video editing can help your ${post.category.toLowerCase().includes('ai') ? 'AI automation agency' : 'coaching business'}.</p>
      `;
    }
    
    const postHTML = generateBlogPost(post, postContent);
    
    // Create post directory and write HTML
    const postDir = path.join(__dirname, '../public/blog', post.slug);
    ensureDir(postDir);
    fs.writeFileSync(path.join(postDir, 'index.html'), postHTML);
    
    console.log(`✅ Generated blog post: ${post.slug}`);
  }
  
  // Write sitemap.xml at site root
  const sitemapXml = generateSitemapXml();
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapXml);
  console.log('🗺️  Generated sitemap.xml');

  // Write robots.txt at site root
  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxt);
  console.log('🤖 Generated robots.txt');

  // Write RSS feed under /blog
  const rssXml = generateRssFeed();
  fs.writeFileSync(path.join(__dirname, '../public/blog/feed.xml'), rssXml);
  console.log('📰 Generated blog RSS feed');
  
  console.log('🎉 Blog build complete!');
};

// Run the build
buildBlog().catch(console.error);