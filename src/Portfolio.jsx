import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Menu, X } from 'lucide-react'
import { CONFIG } from './config.js'

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="bg-black text-white selection:bg-white/20">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(255,255,255,0.08),transparent)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(600px_240px_at_0%_10%,rgba(34,211,238,0.08),transparent)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(600px_240px_at_100%_90%,rgba(59,130,246,0.06),transparent)]" />

      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="mx-auto max-w-5xl px-3 sm:px-6 py-2 md:py-4" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-3 sm:px-4 py-2 shadow-[0_0_40px_rgba(34,211,238,0.06)]">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Danyl Ahmed - Professional Video Editor Logo" className="h-8 w-8 rounded-full border border-white/20" />
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              <a href="/#work" className="hover:text-white transition-colors">Work</a>
              <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="/blog/" target="_blank" rel="noopener" className="hover:text-white transition-colors">Blog</a>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white via-blue-300 to-purple-300 text-black px-4 py-2 font-medium"
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu size={20} className="text-white" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 right-0 mx-3 mt-2 rounded-2xl bg-black/95 backdrop-blur-md border border-white/10 overflow-hidden"
            >
              <div className="px-4 py-2">
                <a 
                  href="/" 
                  className="block py-3 text-white/80 hover:text-white transition-colors border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/#testimonials" 
                  className="block py-3 text-white/80 hover:text-white transition-colors border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a 
                  href="/#work" 
                  className="block py-3 text-white/80 hover:text-white transition-colors border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </a>
                <a 
                  href="/#pricing" 
                  className="block py-3 text-white/80 hover:text-white transition-colors border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="/blog/" 
                  target="_blank" 
                  rel="noopener" 
                  className="block py-3 text-white/80 hover:text-white transition-colors border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </a>
                <a 
                  href="/#contact" 
                  className="block mt-3 mb-2 text-center py-3 rounded-full bg-gradient-to-r from-white via-blue-300 to-purple-300 text-black font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.10),transparent)]" />
          
          <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <a 
                href="/" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft size={18} />
                Back to Home
              </a>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight text-white leading-tight">
                Portfolio Showcase
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto px-2 leading-relaxed">
                Explore my latest work across Instagram Reels and YouTube content - from viral short-form videos to engaging long-form content.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Instagram Reels */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-center">Instagram Reels</h2>
            <p className="text-white/70 text-center mb-8 sm:mb-12 px-4 text-sm sm:text-base">
              Vertical short-form content designed for maximum engagement
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {CONFIG.portfolio.instagramReels.map((reel, i) => {
                const ReelComponent = reel.url ? 'a' : 'div';
                const reelProps = reel.url ? {
                  href: reel.url,
                  target: '_blank',
                  rel: 'noreferrer'
                } : {};
                
                return (
                  <motion.div
                    key={reel.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-300/20 transition group"
                  >
                    <ReelComponent {...reelProps} className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:bg-gradient-to-br hover:from-purple-400/30 hover:to-pink-400/30 transition-colors">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-white/60">Instagram Reel</p>
                        <p className="text-sm font-medium text-white/90 mt-1">{reel.title}</p>
                        {reel.url && (
                          <p className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            View on Instagram
                          </p>
                        )}
                      </div>
                    </ReelComponent>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Section 2: YouTube Long Form */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-center">YouTube Long Form</h2>
            <p className="text-white/70 text-center mb-8 sm:mb-12 px-4 text-sm sm:text-base">
              In-depth content that builds authority and drives conversions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {CONFIG.portfolio.youtubeLongForm.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-300/20 transition group"
                >
                  {/* Placeholder for YouTube embed */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-orange-500/20">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-white/60">YouTube Video</p>
                      <p className="text-base font-medium text-white/90 mt-2">{video.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 3: More Instagram Reels */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-center">More Instagram Reels</h2>
            <p className="text-white/70 text-center mb-8 sm:mb-12 px-4 text-sm sm:text-base">
              Additional vertical content showcasing diverse editing styles
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {CONFIG.portfolio.instagramReels2.map((reel, i) => {
                const ReelComponent = reel.url ? 'a' : 'div';
                const reelProps = reel.url ? {
                  href: reel.url,
                  target: '_blank',
                  rel: 'noreferrer'
                } : {};
                
                return (
                  <motion.div
                    key={reel.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-300/20 transition group"
                  >
                    <ReelComponent {...reelProps} className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:bg-gradient-to-br hover:from-purple-400/30 hover:to-pink-400/30 transition-colors">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-white/60">Instagram Reel</p>
                        <p className="text-sm font-medium text-white/90 mt-1">{reel.title}</p>
                        {reel.url && (
                          <p className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            View on Instagram
                          </p>
                        )}
                      </div>
                    </ReelComponent>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Section 4: More YouTube Videos */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-center">More YouTube Content</h2>
            <p className="text-white/70 text-center mb-8 sm:mb-12 px-4 text-sm sm:text-base">
              Additional YouTube content demonstrating versatility and expertise
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {CONFIG.portfolio.youtubeVideos2.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-300/20 transition group"
                >
                  {/* Placeholder for YouTube embed */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-orange-500/20">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-white/60">YouTube Video</p>
                      <p className="text-base font-medium text-white/90 mt-2">{video.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-white/70 mb-8 px-4 text-sm sm:text-base max-w-2xl mx-auto">
              Let's turn your content ideas into engaging videos that grow your audience and build your brand authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href={`https://wa.me/${CONFIG.personal.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-white via-blue-300 to-purple-300 text-black rounded-full font-medium min-h-[48px] text-sm sm:text-base"
              >
                Book a Call
              </motion.a>
              <motion.a
                href={`mailto:${CONFIG.personal.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors min-h-[48px] text-sm sm:text-base"
              >
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Danyl Ahmed Logo" className="h-8 w-8 rounded-full border border-white/20" />
              <p className="text-white/70 text-sm">© 2025 Danyl. Professional Video Editor</p>
            </div>
            <div className="flex items-center gap-6 text-white/70">
              <a href={CONFIG.social.x} target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-sm">X</a>
              <a href={CONFIG.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href={CONFIG.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}