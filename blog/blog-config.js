// Blog configuration for SEO-optimized static generation

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const now = new Date();
const dateMinusDays = (days) => {
  const d = new Date(now);
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
};

const baseKeywords = [
  'talking head video',
  'video editing',
  'content repurposing',
  'YouTube marketing',
  'LinkedIn content',
  'AI agencies',
  'high-ticket coaches',
];

// Image helper function - generates specific Unsplash images based on exact blog content
const getHeroImage = (title, category) => {
  // Specific image mapping for each unique blog post title
  const specificImages = {
    // TOFU Posts - Getting Started
    'Why Talking Head Videos Are Essential for AI Automation Agencies in 2025': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop', // AI/tech
    'How High-Ticket Coaches Can Use Video Content to Build Authority and Trust': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop', // Authority/presentation
    '5 Common Video Mistakes Coaches Make and How to Avoid Them': 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&h=600&fit=crop', // Mistakes/learning
    'The Ultimate Guide to Repurposing One Talking Head Video Into Multiple Social Media Clips': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop', // Social media content
    'Top Video Content Trends for Coaches and AI Agencies You Need to Know': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop', // Trends/analytics
    'How Professional Video Editing Boosts Engagement on YouTube and LinkedIn': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop', // YouTube/LinkedIn
    'Why Your Talking Head Videos Aren\'t Converting (And How Editing Fixes That)': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop', // Marketing conversion
    'How AI Agencies Can Leverage Short-Form Videos to Generate Leads': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop', // Lead generation
    'The Psychology Behind Effective Talking Head Videos for High-Ticket Sales': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop', // Psychology/brain
    '5 Tips to Make Your Talking Head Videos More Engaging and Persuasive': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop', // Engagement/speaking
    
    // TOFU Special Posts
    '5 Talking Head Video Editing Tips for AI Automation Agency Founders': 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=600&fit=crop', // Video editing
    'How High-Ticket Coaches Turn One Video into 10 Marketing Assets': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop', // Content multiplication
    'Why AI Agencies Should Invest in High-Quality Talking Head Videos': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop', // Investment/ROI
    
    // MOFU Posts - Strategy & Tips  
    'How High-Quality Animations Can Elevate Your Coaching Videos': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop', // Animation/graphics
    'What to Expect When You Hire a Talking Head Video Editor: Step-by-Step': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop', // Process/workflow  
    'Long Form vs Short Form Video: Which Is Best for Your Coaching Business?': 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=600&fit=crop', // Comparison/choice
    'Case Study: How Professional Video Editing Helped a Coach Triple Their Client Inquiries': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop', // Success/growth chart
    'How to Plan Your Talking Head Video Content for Maximum Impact': 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=600&fit=crop', // Planning/strategy
    'The Importance of Color Correction and Audio Balancing in Professional Videos': 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=600&fit=crop', // Technical/audio
    'How to Choose the Right Video Editing Package for Your Business Needs': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop', // Decision making
    '5 Reasons AI Automation Agencies Should Invest in Talking Head Video Editing': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop', // Benefits/reasons
    
    // BOFU Posts - Services
    'Why Our Complete Video Editing Package Is the Best Choice for Coaches and AI Agencies': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop', // Service/professional
    'How to Book a Free Content Strategy Call and What You\'ll Get': 'https://images.unsplash.com/photo-1556761175-4dc5f0c87da7?w=1200&h=600&fit=crop', // Call/consultation
    
    // Philadelphia Posts
    'How Real Estate Agencies in Philadelphia Can Grow Their Business Using YouTube': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop', // Real estate
    'Top 5 YouTube Marketing Strategies for Philadelphia Business Coaches': 'https://images.unsplash.com/photo-1609799794828-a7a78b7b6b42?w=1200&h=600&fit=crop', // Philadelphia skyline
    'Why Philadelphia Startups Should Invest in Video Content to Scale Fast': 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&h=600&fit=crop', // Startup/growth
    'How to Use YouTube Shorts to Attract Clients for Philadelphia Luxury Realtors': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop', // Luxury real estate
    'Building a Personal Brand on YouTube: A Guide for Philadelphia Consultants': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop', // Personal branding
    
    // Austin Posts  
    'How Austin Tech Startups Can Explode Growth with YouTube Marketing': 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&h=600&fit=crop', // Austin cityscape
    'The Best YouTube Content Ideas for Business Coaches in Austin': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop', // Creative ideas
    'Why Austin Agencies Are Winning More Clients Using Video Marketing': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop', // Agency success
    'How to Use YouTube to Build Trust and Authority as an Austin Consultant': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop', // Trust building
    'Top Tips for Austin Entrepreneurs to Grow Their YouTube Channel Fast': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop', // YouTube growth
    
    // Miami Posts
    'Growing Your Miami Real Estate Agency with YouTube: Proven Tips': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop', // Miami skyline  
    'How Miami Health Clinics Can Use YouTube to Attract High-Paying Clients': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop', // Healthcare/medical
    'Best Video Marketing Strategies for Miami Business Coaches': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop', // Business coaching
    'Using YouTube Shorts to Boost Your Miami Luxury Brand Presence': 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=1200&h=600&fit=crop', // Luxury lifestyle
    'How Miami Consultants Can Leverage YouTube to Grow Their Client Base': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop', // Consulting
    
    // Denver Posts
    'How Denver SaaS Companies Can Gain More Customers Through YouTube': 'https://images.unsplash.com/photo-1619856699906-09e1f58c98b1?w=1200&h=600&fit=crop', // Denver mountains
    'YouTube Marketing Tips for Denver Business Coaches and Consultants': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop', // Professional meeting
    'Growing Your Denver Consulting Firm Using Video Content Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop', // Growth marketing
    'Why Denver Entrepreneurs Should Invest in YouTube Shorts Today': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop', // YouTube mobile
    'How Denver Startups Can Use YouTube to Build Authority and Attract Leads': 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&h=600&fit=crop', // Startup authority
    
    // Charlotte Posts
    'YouTube Marketing for Charlotte Financial Advisors: A Step-by-Step Guide': 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&h=600&fit=crop', // Charlotte financial district
    'How Charlotte Real Estate Agents Can Close More Deals with Video': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop', // Real estate deals
    'Why Charlotte Business Coaches Should Focus on YouTube for Lead Generation': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop', // Lead generation
    'Using YouTube Shorts to Build Your Charlotte Coaching Brand Quickly': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop', // Quick branding
    'How Charlotte Consultants Can Use YouTube to Grow Their High-Ticket Services': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop' // High-ticket consulting
  };
  
  // Return specific image if exists, otherwise fallback to generic video image
  return specificImages[title] || 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=600&fit=crop';
};

const createPost = (title, category, dayOffset = 0, extraKeywords = []) => {
  const slug = slugify(title);
  const desc = `${title}. Actionable strategies, examples, and a clear call-to-action for ${category.toLowerCase()} audiences.`;
  const keywords = [...baseKeywords, title, category, ...extraKeywords].join(', ');
  const heroImage = getHeroImage(title, category);
  
  return {
    slug,
    title,
    description: desc,
    keywords,
    publishDate: dateMinusDays(dayOffset),
    category,
    readTime: '7–10 min read',
    heroImage,
  };
};

// Content groups
const TOFU = [
  'Why Talking Head Videos Are Essential for AI Automation Agencies in 2025',
  'How High-Ticket Coaches Can Use Video Content to Build Authority and Trust',
  '5 Common Video Mistakes Coaches Make and How to Avoid Them',
  'The Ultimate Guide to Repurposing One Talking Head Video Into Multiple Social Media Clips',
  'Top Video Content Trends for Coaches and AI Agencies You Need to Know',
  'How Professional Video Editing Boosts Engagement on YouTube and LinkedIn',
  'Why Your Talking Head Videos Aren’t Converting (And How Editing Fixes That)',
  'How AI Agencies Can Leverage Short-Form Videos to Generate Leads',
  'The Psychology Behind Effective Talking Head Videos for High-Ticket Sales',
  '5 Tips to Make Your Talking Head Videos More Engaging and Persuasive',
];

const MOFU = [
  'How High-Quality Animations Can Elevate Your Coaching Videos',
  'What to Expect When You Hire a Talking Head Video Editor: Step-by-Step',
  'Long Form vs Short Form Video: Which Is Best for Your Coaching Business?',
  'Case Study: How Professional Video Editing Helped a Coach Triple Their Client Inquiries',
  'How to Plan Your Talking Head Video Content for Maximum Impact',
  'The Importance of Color Correction and Audio Balancing in Professional Videos',
  'How to Choose the Right Video Editing Package for Your Business Needs',
  '5 Reasons AI Automation Agencies Should Invest in Talking Head Video Editing',
];

const BOFU = [
  'Why Our Complete Video Editing Package Is the Best Choice for Coaches and AI Agencies',
  'How to Book a Free Content Strategy Call and What You’ll Get',
];

const LOCATIONS = {
  'Philadelphia, Pennsylvania': [
    'How Real Estate Agencies in Philadelphia Can Grow Their Business Using YouTube',
    'Top 5 YouTube Marketing Strategies for Philadelphia Business Coaches',
    'Why Philadelphia Startups Should Invest in Video Content to Scale Fast',
    'How to Use YouTube Shorts to Attract Clients for Philadelphia Luxury Realtors',
    'Building a Personal Brand on YouTube: A Guide for Philadelphia Consultants',
  ],
  'Austin, Texas': [
    'How Austin Tech Startups Can Explode Growth with YouTube Marketing',
    'The Best YouTube Content Ideas for Business Coaches in Austin',
    'Why Austin Agencies Are Winning More Clients Using Video Marketing',
    'How to Use YouTube to Build Trust and Authority as an Austin Consultant',
    'Top Tips for Austin Entrepreneurs to Grow Their YouTube Channel Fast',
  ],
  'Miami, Florida': [
    'Growing Your Miami Real Estate Agency with YouTube: Proven Tips',
    'How Miami Health Clinics Can Use YouTube to Attract High-Paying Clients',
    'Best Video Marketing Strategies for Miami Business Coaches',
    'Using YouTube Shorts to Boost Your Miami Luxury Brand Presence',
    'How Miami Consultants Can Leverage YouTube to Grow Their Client Base',
  ],
  'Denver, Colorado': [
    'How Denver SaaS Companies Can Gain More Customers Through YouTube',
    'YouTube Marketing Tips for Denver Business Coaches and Consultants',
    'Growing Your Denver Consulting Firm Using Video Content Marketing',
    'Why Denver Entrepreneurs Should Invest in YouTube Shorts Today',
    'How Denver Startups Can Use YouTube to Build Authority and Attract Leads',
  ],
  'Charlotte, North Carolina': [
    'YouTube Marketing for Charlotte Financial Advisors: A Step-by-Step Guide',
    'How Charlotte Real Estate Agents Can Close More Deals with Video',
    'Why Charlotte Business Coaches Should Focus on YouTube for Lead Generation',
    'Using YouTube Shorts to Build Your Charlotte Coaching Brand Quickly',
    'How Charlotte Consultants Can Use YouTube to Grow Their High-Ticket Services',
  ],
};

// Seed posts list
const posts = [];
let dayOffset = 0;
TOFU.forEach((t) => posts.push(createPost(t, 'TOFU', dayOffset++)));
MOFU.forEach((t) => posts.push(createPost(t, 'MOFU', dayOffset++)));
BOFU.forEach((t) => posts.push(createPost(t, 'BOFU', dayOffset++)));
Object.entries(LOCATIONS).forEach(([loc, titles]) => {
  titles.forEach((t) => posts.push(createPost(t, loc, dayOffset++, [loc])));
});

// Keep the three original pillar posts at the top as well
posts.unshift(
  {
    slug: 'talking-head-video-tips-ai-automation-agencies',
    title: '5 Talking Head Video Editing Tips for AI Automation Agency Founders',
    description:
      'Master talking head videos for your AI automation agency. 5 professional editing tips that turn boring footage into client-attracting content. Real examples included.',
    keywords:
      'talking head video editing tips for ai agencies, ai automation agency video content, professional video editing for ai companies',
    publishDate: dateMinusDays(dayOffset++),
    category: 'TOFU',
    readTime: '7 min read',
  },
  {
    slug: 'video-repurposing-high-ticket-coaches',
    title: 'How High-Ticket Coaches Turn One Video into 10 Marketing Assets',
    description:
      'Learn how successful coaches multiply their content reach. Step-by-step guide to repurposing one talking head video into 10 powerful marketing assets.',
    keywords:
      'video repurposing for high-ticket coaches, content marketing for coaches, video marketing strategy for coaches',
    publishDate: dateMinusDays(dayOffset++),
    category: 'TOFU',
    readTime: '8 min read',
  },
  {
    slug: 'ai-agencies-talking-head-video-investment',
    title: 'Why AI Agencies Should Invest in High-Quality Talking Head Videos',
    description:
      'Discover why top AI automation agencies invest in professional video content. ROI data, client case studies, and conversion metrics included.',
    keywords:
      'why ai agencies need video content, ai automation agency marketing, professional video content roi',
    publishDate: dateMinusDays(dayOffset++),
    category: 'TOFU',
    readTime: '6 min read',
  }
);

export const blogConfig = {
  siteUrl: 'https://danyl-portfolio.netlify.app', // Update with your actual domain
  blogPath: '/blog',
  author: 'Danyl',
  description: 'Video editing insights for AI agencies and high-ticket coaches',
  posts,
};

export const generateBlogMeta = (post) => {
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    canonical: `${blogConfig.siteUrl}${blogConfig.blogPath}/${post.slug}/`,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishDate,
      author: blogConfig.author,
      url: `${blogConfig.siteUrl}${blogConfig.blogPath}/${post.slug}/`,
      image: `${blogConfig.siteUrl}/danyl.png`,
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.description,
      "author": {
        "@type": "Person",
        "name": blogConfig.author,
      },
      "datePublished": post.publishDate,
      "dateModified": post.publishDate,
      "image": `${blogConfig.siteUrl}/danyl.png`,
      "publisher": {
        "@type": "Person",
        "name": blogConfig.author,
      },
    },
  };
};