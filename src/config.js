// =========================================
// PORTFOLIO CONFIGURATION FILE
// =========================================
// Edit this file to update all your links, videos, and content easily

export const CONFIG = {
  // ========== PERSONAL INFO ==========
  personal: {
    name: 'Danyl Ahmed',
    email: 'thedanylahmed@gmail.com',
    whatsapp: '94773377082',
  },

  // ========== SOCIAL MEDIA LINKS ==========
  social: {
    x: 'https://x.com/danyl_ds',
    linkedin: 'https://www.linkedin.com/in/danyl-ahmed/',
    instagram: 'https://www.instagram.com/ds_danyl/',
  },

  // ========== MAIN HERO VIDEO ==========
  // This video shows in the main hero section
  heroVideo: 'LoIWGIfuzwc',

  // ========== FEATURED VIDEOS (Main Page) ==========
  // These show in the "Featured Projects" section on homepage
  featuredVideos: [
    { id: 'LoIWGIfuzwc', title: 'Sample Work 1' },
    { id: '9X99i386VKI', title: 'Sample Work 2' },
    { id: '6E_5aWYvdXw', title: 'Sample Work 3' },
    { id: 'HoD7VMfPvXc', title: 'Sample Work 4' },
    { id: 'ZR32xGU4UY4', title: 'Sample Work 5' },
    { id: 'AtT4JMnXtoo', title: 'Sample Work 6' },
  ],

  // ========== PORTFOLIO PAGE CONTENT ==========
  portfolio: {
    // Instagram Reels (Vertical videos)
    instagramReels: [
      { id: 'C4_-MWyuG0F', title: 'Instagram Reel 1', url: 'https://www.instagram.com/reel/C4_-MWyuG0F/' },
      { id: 'C14SZm6OPJp', title: 'Instagram Reel 2', url: 'https://www.instagram.com/reel/C14SZm6OPJp/' },
      { id: 'C2jAu5KO7rU', title: 'Instagram Reel 3', url: 'https://www.instagram.com/reel/C2jAu5KO7rU/' },
      { id: 'C19Zpnmu0eL', title: 'Instagram Reel 4', url: 'https://www.instagram.com/reel/C19Zpnmu0eL/' },
    ],

    // YouTube Long Form Videos
    youtubeLongForm: [
      { id: 'YOUTUBE_LONG_1', title: 'Long Form Video 1' },
      { id: 'YOUTUBE_LONG_2', title: 'Long Form Video 2' },
      { id: 'YOUTUBE_LONG_3', title: 'Long Form Video 3' },
      { id: 'YOUTUBE_LONG_4', title: 'Long Form Video 4' },
    ],

    // More Instagram Reels (Second section)
    instagramReels2: [
      { id: 'INSTAGRAM_REEL_5', title: 'Instagram Reel 5' },
      { id: 'INSTAGRAM_REEL_6', title: 'Instagram Reel 6' },
      { id: 'INSTAGRAM_REEL_7', title: 'Instagram Reel 7' },
      { id: 'INSTAGRAM_REEL_8', title: 'Instagram Reel 8' },
    ],

    // More YouTube Videos (Second section)
    youtubeVideos2: [
      { id: 'YOUTUBE_VIDEO_5', title: 'YouTube Video 5' },
      { id: 'YOUTUBE_VIDEO_6', title: 'YouTube Video 6' },
      { id: 'YOUTUBE_VIDEO_7', title: 'YouTube Video 7' },
      { id: 'YOUTUBE_VIDEO_8', title: 'YouTube Video 8' },
    ],
  },

  // ========== TESTIMONIALS ==========
  testimonials: [
    {
      type: 'youtube',
      id: '-zqzjf_fjU0',
      caption: 'Rylee Maiden — YouTube Lead Launch — Pennsylvania, USA',
    },
    {
      type: 'youtube',
      id: '9XghCEPDCPU',
      caption: 'Hayato Nakamura — Lead Control Media — San Diego, USA',
    },
  ],

  // ========== PRICING PACKAGES ==========
  pricing: {
    growthPlus: {
      name: 'Growth Plus',
      price: 320,
      perVideoCost: '$40 per short-form video',
      features: [
        '8 Short-form Videos',
        'High-Quality Animations', 
        'Script Optimization',
        'Captions + Posting',
        'Fast Delivery',
        'Detailed Analytics Report'
      ]
    },
    authorityPlus: {
      name: 'Authority Plus',
      price: 400,
      perVideoCost: '$100 per long-form video',
      features: [
        '4 Long-form Videos',
        'High-Quality Animations',
        'Script Optimization', 
        'SEO + Posting',
        'Fast Delivery',
        'Detailed Analytics Report'
      ]
    },
    profitPlus: {
      name: 'Profit Plus',
      price: 600,
      perVideoCost: '$80 per long-form • $35 per short-form',
      features: [
        '4 Long-form Videos',
        '8 Short-form Videos',
        'High-Quality Animations',
        'Script Optimization',
        'Captions + Posting', 
        'Fast Delivery',
        'Detailed Analytics Report'
      ],
      popular: true
    }
  }
}

// =========================================
// HOW TO UPDATE:
// =========================================
// 1. Change video IDs by replacing the YouTube video ID 
//    (the part after 'v=' in YouTube URLs)
// 2. Update titles to match your content
// 3. Save this file
// 4. Your website will automatically use the new content!
// =========================================