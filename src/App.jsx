import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import { Play, X, Briefcase, GraduationCap, ChevronDown, Menu } from 'lucide-react'
import { CONFIG } from './config.js'

const FAQS = [
  {
    q: 'What services do you offer?',
    a: 'I specialize in video editing for AI agencies and coaches - from talking head videos and YouTube content to social clips and complete content repurposing. Whether you need longform videos or shortform social content, I deliver professional edits that grow your influence.'
  },
  {
    q: 'What\'s included in your packages?',
    a: 'Growth Plus includes 8 short-form videos for $320. Authority Plus includes 4 long-form videos for $400. Profit Plus combines both - 4 long-form videos plus 8 short-form videos for $600. All packages include high-quality animations, script optimization, and fast delivery.'
  },
  {
    q: 'How do revisions work?',
    a: 'All packages include revisions to ensure your content meets your exact vision. I work closely with you throughout the process, so most clients need minimal adjustments after the first delivery.'
  },
  {
    q: 'What\'s your turnaround time?',
    a: 'All packages feature fast delivery timelines. Long-form videos typically deliver within 5-7 days, while short-form content delivers in 3-5 days. Rush delivery available for urgent projects.'
  },
  {
    q: 'How do I send you my footage?',
    a: 'Upload via Google Drive, Dropbox, WeTransfer, or your preferred platform. I\'ll send detailed instructions and handle the technical setup once we start working together.'
  },
  {
    q: 'Can I get custom packages?',
    a: 'Absolutely. If you need different video lengths, volumes, or specific deliverables, just reach out. I create tailored solutions that fit your exact content strategy and budget.'
  },
  {
    q: 'What makes your editing different?',
    a: 'I focus exclusively on content creators in the AI and coaching space. This specialization means I understand your audience, platform requirements, and what drives engagement in your niche.'
  },
  {
    q: 'Do you work with agencies?',
    a: 'Yes - I work with both individual coaches and agencies managing multiple creators. Volume discounts and streamlined workflows available for agency partners with ongoing content needs.'
  }
]

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 p-4 text-left text-white/90 select-none"
      >
        <span>{question}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="px-4 pb-4 text-white/70 text-sm">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function HeroReel({ id, onOpen }) {
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      className="group text-left rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-300/20 transition w-full"
      aria-label={`Play hero video`}
      onClick={onOpen}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <img src={thumb} alt={`Hero video - Professional video editing sample by Danyl Ahmed`} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white text-black shadow-lg opacity-95 group-hover:scale-105 transition">
            <Play size={18} />
            <span className="font-medium">Play Reel</span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroReelOpen, setHeroReelOpen] = useState(false);

  return (
    <div className="bg-black text-white selection:bg-white/20">
      {/* Subtle global radial gradients (with ice-blue accents) */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(255,255,255,0.08),transparent)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(600px_240px_at_0%_10%,rgba(34,211,238,0.08),transparent)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(600px_240px_at_100%_90%,rgba(59,130,246,0.06),transparent)]" />

      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="mx-auto max-w-5xl px-3 sm:px-6 py-2 md:py-4" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-3 sm:px-4 py-2 shadow-[0_0_40px_rgba(34,211,238,0.06)]">
            <a href="#" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <img src="/logo.png" alt="Danyl Ahmed - Professional Video Editor Logo" className="h-8 w-8 rounded-full border border-white/20" />
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="/blog/" target="_blank" rel="noopener" className="hover:text-white transition-colors">Blog</a>
              <motion.a
                href="#contact"
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
                  href="#testimonials" 
                  className="block py-3 text-white/80 hover:text-white transition-colors border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a 
                  href="#work" 
                  className="block py-3 text-white/80 hover:text-white transition-colors border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </a>
                <a 
                  href="#pricing" 
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
                  href="#contact" 
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
      {/* Hero */}
      <main>
      <section id="reel" className="relative min-h-[100svh] flex items-start md:items-end justify-center overflow-hidden pt-40 md:pt-32 pb-16 md:pb-20" role="banner">
        {/* Background texture and gradient */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.10),transparent)]" />

        {/* Copy top */}
        <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-8 md:mb-10"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Video Editor & Motion Designer<br className="hidden md:block" /> for <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">Global Creators & Corporate Leaders</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-4xl mx-auto px-2 leading-relaxed">
              Crafting premium video content and high-end motion design for international clients, corporate giants, and world-class podcasts.
            </p>
            <div className="mt-8 sm:mt-6 flex items-center justify-center gap-4">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 min-h-[48px] text-sm sm:text-base"
              >
                See Selected Work
              </motion.a>
            </div>
          </motion.div>

          {/* Big Reel Player */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur">
            {CONFIG.heroVideo ? (
              <Dialog.Root open={heroReelOpen} onOpenChange={setHeroReelOpen}>
                <HeroReel id={CONFIG.heroVideo} onOpen={() => setHeroReelOpen(true)} />
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" />
                  <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4 z-[100]">
                    <div className="relative w-full max-w-5xl aspect-video">
                      <iframe
                        className="h-full w-full rounded-xl border border-white/10"
                        src={heroReelOpen ? `https://www.youtube.com/embed/${CONFIG.heroVideo}?autoplay=1&rel=0` : ''}
                        title="Hero Reel"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <Dialog.Close asChild>
                        <button className="absolute -top-12 right-0 md:top-0 md:-right-12 p-2 rounded-full bg-white text-black shadow">
                          <X size={18} />
                        </button>
                      </Dialog.Close>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ) : (
              <video
                src="/intro.mp4"
                controls
                playsInline
                className="w-full h-full aspect-video object-cover"
                poster="/poster.jpg"
              />
            )}
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto min-h-[100svh] flex flex-col justify-center" id="testimonials" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 text-center">Client Feedback</h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 text-sm sm:text-base">Genuine words from people I've worked with.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {CONFIG.testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-0 rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-300/20 transition bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="relative">
                {t.type === 'youtube' ? (
                  <div className="relative w-full aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${t.id}?rel=0`}
                      title="Testimonial video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <video controls className="w-full aspect-video object-cover" poster={t.poster}>
                    <source src={t.src} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="p-5">
                <p className="text-base text-white/90">{t.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 font-medium"
          >
            Get Started
          </motion.a>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto min-h-[100svh] flex flex-col justify-center" id="work" aria-labelledby="work-heading">
        <h2 id="work-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 text-center">Featured Projects</h2>
        <p className="text-white/70 text-center mb-8 sm:mb-12 lg:mb-14 px-4 text-sm sm:text-base">Some of my favorite recent edits.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CONFIG.featuredVideos.map((video, i) => {
            const isInstagram = video.type === 'instagram';
            const watchUrl = isInstagram 
              ? video.url || `https://www.instagram.com/reel/${video.id}/`
              : `https://www.youtube.com/watch?v=${video.id}`;
            const thumb = isInstagram 
              ? null 
              : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

            return (
              <Dialog.Root key={video.id}>
                <Dialog.Trigger asChild>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.6 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group text-left rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-300/20 transition"
                    aria-label={`Play ${video.title}`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      {isInstagram ? (
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/80 via-pink-900/60 to-orange-900/40 flex flex-col items-center justify-center p-6 border-b border-white/5">
                          <svg className="w-12 h-12 text-white/80 mb-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                          <span className="text-[10px] text-white/50 uppercase tracking-widest font-semibold">Instagram Reel</span>
                        </div>
                      ) : (
                        <img src={thumb} alt={`${video.title} - Professional video editing sample by Danyl Ahmed`} className="h-full w-full object-cover" loading="lazy" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white text-black shadow-lg opacity-95 group-hover:scale-105 transition">
                          <Play size={18} />
                          <span className="font-medium">Play</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold">{video.title}</h3>
                        <a href={watchUrl} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white text-sm">
                          {isInstagram ? 'Watch on Instagram' : 'Watch on YouTube'}
                        </a>
                      </div>
                    </div>
                  </motion.button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" />
                  <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4 z-[100]">
                    {isInstagram ? (
                      <div className="relative w-full max-w-sm aspect-[9/16] h-[80vh] max-h-[700px] flex items-center justify-center">
                        <iframe
                          className="h-full w-full rounded-xl border border-white/10"
                          src={`https://www.instagram.com/reel/${video.id}/embed/`}
                          title={video.title}
                          allowTransparency="true"
                          allowFullScreen={true}
                          frameBorder="0"
                          scrolling="no"
                        />
                        <Dialog.Close asChild>
                          <button className="absolute -top-12 right-0 md:top-0 md:-right-12 p-2 rounded-full bg-white text-black shadow z-[101]">
                            <X size={18} />
                          </button>
                        </Dialog.Close>
                      </div>
                    ) : (
                      <div className="relative w-full max-w-5xl aspect-video">
                        <iframe
                          className="h-full w-full rounded-xl border border-white/10"
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                        <Dialog.Close asChild>
                          <button className="absolute -top-12 right-0 md:top-0 md:-right-12 p-2 rounded-full bg-white text-black shadow z-[101]">
                            <X size={18} />
                          </button>
                        </Dialog.Close>
                      </div>
                    )}
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 font-medium"
          >
            See More
          </motion.a>
        </div>
      </section>

      {/* Process (timeline) */}
      <section className="py-28 px-6 max-w-3xl mx-auto min-h-[100svh] flex flex-col justify-center" id="process">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Working process</h2>
        <p className="text-center text-white/70 mt-2 mb-12">Four clear steps. Fast iterations. No drama.</p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-300/30 via-white/15 to-transparent" />
          {[ 
            { title: 'Contact me', desc: 'Share your goals, audience, references, and timeline.' },
            { title: 'Research', desc: 'Review your brand, pick angles, plan hooks and pacing.' },
            { title: 'Work', desc: 'Edit, color, mix, tasteful motion. Deliver on schedule.' },
            { title: 'Test & results', desc: 'You review → we iterate → export and publish.' },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative pl-14 pb-10 group"
            >
              {/* node */}
              <div className="absolute left-1 top-1 flex items-center justify-center h-7 w-7 rounded-full bg-white text-black text-xs font-bold shadow ring-1 ring-cyan-300/40 group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              {/* card */}
              <div className="rounded-2xl border border-white/10 hover:border-cyan-300/20 transition bg-white/[0.05] backdrop-blur p-5">
                <h3 className="text-lg md:text-xl font-semibold mb-1.5">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 font-medium"
          >
            Ready to get started? Let's talk.
          </motion.a>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto min-h-[100svh] flex flex-col justify-center" id="pricing" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-3 text-center">Simple pricing. No hidden stuff.</h2>
        <p className="text-white/70 text-center mb-4 px-4 text-sm sm:text-base">Clear scope. No hidden fees.</p>
        <div className="text-center mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/20 max-w-fit mx-auto">
          <p className="text-white/90 text-xs sm:text-sm font-medium">Price increase coming soon - Lock in current rates now!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Growth Plus - $320 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative rounded-2xl p-8 border backdrop-blur bg-white/[0.04] border-white/10 hover:border-cyan-300/20 transition flex flex-col min-h-[440px]"
          >
            <h3 className="text-lg font-semibold">Growth Plus</h3>
            <div className="mt-3 text-4xl font-semibold">$320</div>
            <p className="text-xs text-white/40 mt-1">$40 per short-form video</p>
            <ul className="mt-4 text-white/85 text-sm space-y-2 list-disc ml-5">
              <li>8 Short-form Videos</li>
              <li>High-Quality Animations</li>
              <li>Script Optimization</li>
              <li>Captions + Posting</li>
              <li>Fast Delivery</li>
              <li>Detailed Analytics Report</li>
            </ul>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2 font-medium"
            >
              Get Growth Plus
            </motion.a>
          </motion.div>

          {/* Authority Plus - $400 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative rounded-2xl p-8 border backdrop-blur bg-white/[0.04] border-white/10 hover:border-cyan-300/20 transition flex flex-col min-h-[440px]"
          >
            <h3 className="text-lg font-semibold">Authority Plus</h3>
            <div className="mt-3 text-4xl font-semibold">$400</div>
            <p className="text-xs text-white/40 mt-1">$100 per long-form video</p>
            <ul className="mt-4 text-white/85 text-sm space-y-2 list-disc ml-5">
              <li>4 Long-form Videos</li>
              <li>High-Quality Animations</li>
              <li>Script Optimization</li>
              <li>SEO + Posting</li>
              <li>Fast Delivery</li>
              <li>Detailed Analytics Report</li>
            </ul>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2 font-medium"
            >
              Get Authority Plus
            </motion.a>
          </motion.div>

          {/* Profit Plus - $600 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative rounded-2xl p-8 border backdrop-blur bg-white/[0.06] border-white/20 hover:border-cyan-300/20 transition shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-visible flex flex-col min-h-[440px]"
          >
            <div className="absolute -top-3 right-4 text-[10px] px-2 py-1 rounded-full bg-white text-black">Popular</div>
            <h3 className="text-lg font-semibold">Profit Plus</h3>
            <div className="mt-3 text-4xl font-semibold">$600</div>
            <p className="text-xs text-white/40 mt-1">$80 per long-form • $35 per short-form</p>
            <ul className="mt-4 text-white/85 text-sm space-y-2 list-disc ml-5">
              <li>4 Long-form Videos</li>
              <li>8 Short-form Videos</li>
              <li>High-Quality Animations</li>
              <li>Script Optimization</li>
              <li>Captions + Posting</li>
              <li>Fast Delivery</li>
              <li>Detailed Analytics Report</li>
            </ul>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white via-blue-300 to-purple-300 text-black px-4 py-2 font-medium"
            >
              Get Profit Plus
            </motion.a>
          </motion.div>
        </div>

        <p className="text-center text-white/70 mt-10">Need something different? <motion.a whileHover={{ scale: 1.04, textShadow: '0 0 18px rgba(255,255,255,0.95)' }} href="#contact" className="text-white underline decoration-white/40">Contact me</motion.a> for a custom pack.</p>
      </section>

      {/* FAQ + CTA band above Contact */}
      <section className="py-28 px-6 max-w-6xl mx-auto min-h-[100svh] flex flex-col justify-center" id="faq">
        <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-center">Frequently Asked Questions</h2>
        <p className="text-white/70 text-center mb-10">If you have any other questions, just message me.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {FAQS.slice(0, 4).map((f) => (
              <FaqItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
          <div className="space-y-3">
            {FAQS.slice(4).map((f) => (
              <FaqItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start" id="about">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:sticky md:top-28 self-start"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/danyl.png"
              alt="Danyl Ahmed - Professional video editor for AI agencies and coaches"
              className="w-full h-full object-cover aspect-[4/5]"
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              onError={(e) => { e.currentTarget.src = '/placeholder-portrait.svg' }}
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-2">About Me</h2>
          <p className="text-white/70 mb-6">Get to know who I am and how I work.</p>

          <div className="space-y-6">
            {/* Summary */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold mb-2">Summary</h3>
              <p className="text-white/85 leading-relaxed text-sm md:text-base">Creative video editor helping executives build personal brands through social media content. Learning digital marketing while pursuing a Business Management degree to enhance strategic skills. Skilled in editing and repurposing videos for LinkedIn, YouTube, and Instagram.</p>
            </div>

            {/* Key Competencies as chips */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold mb-3">Key Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Video Editing',
                  'Content Strategy',
                  'Basic Motion Graphics',
                  'Client Collaboration',
                  'Adaptability & Learning',
                  'Digital Marketing Basics',
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/85 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience cards */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-2 mb-4 text-white/80"><Briefcase size={18} /><h3 className="text-lg font-semibold">Professional Experience</h3></div>

              {[
                {
                  company: 'Lead Control Media',
                  location: 'San Diego, USA',
                  dates: 'Apr 2023 — May 2024',
                  role: 'Video Editor',
                  bullets: [
                    'Worked with Hayato Nakamura, editing content for executive personal brands',
                    'Repurposed long‑form videos into short‑form for LinkedIn, YouTube, Instagram',
                    'Maintained brand consistency, clear storytelling, and strong hooks',
                    'Helped boost engagement and visibility for high‑level clients',
                  ],
                },
                {
                  company: 'YouTube Lead Launch',
                  location: 'Pennsylvania, USA',
                  dates: 'Dec 2024 — Jul 2025',
                  role: 'Video Editor',
                  bullets: [
                    'Worked with Rylee Maiden to launch her YouTube channel',
                    'Edited talking‑head coaching and real estate content',
                    'Shaped online brand presence and content strategy',
                  ],
                },
              ].map((job, idx) => (
                <div key={job.company} className={idx === 0 ? '' : 'mt-6 pt-6 border-t border-white/10'}>
                  <div>
                    <p className="text-white font-medium">{job.company} — <span className="text-white/80 font-normal">{job.location}</span></p>
                    <p className="text-white/50 text-xs mt-0.5">{job.dates}</p>
                  </div>
                  <p className="text-white/70 text-sm mt-1">{job.role}</p>
                  <ul className="list-disc ml-5 mt-3 text-white/85 space-y-2 text-sm leading-relaxed">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-2 mb-2 text-white/80"><GraduationCap size={18} /><h3 className="text-lg font-semibold">Education</h3></div>
              <p className="text-white/85">BMS (Hons) in Business Management — Open University of Sri Lanka</p>
              <p className="text-white/70 text-sm mt-1 leading-relaxed">Pursuing an Honours degree part-time through weekend classes, focusing on strategy, marketing, finance, and organizational behavior. Completed coursework in accounting, business law, and taxation. Expected graduation: Dec 2028.</p>
            </div>
          </div>
        </motion.div>
      </section>

      

      {/* Contact */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center min-h-[70svh] flex flex-col justify-center" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">Let's make something</h2>
        <p className="text-white/70 mb-6 sm:mb-8 px-4 text-sm sm:text-base">Whether you have raw footage or just an idea, let's talk.</p>
        <div className="flex justify-center">
          <motion.a
            href={`https://wa.me/${CONFIG.personal.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={{ scale: [1, 1.02, 1], boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 15px rgba(255,255,255,0.4)', '0 0 0 rgba(0,0,0,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-white via-blue-300 to-purple-300 text-black rounded-full font-medium min-h-[48px] text-sm sm:text-base"
          >
            Book a Call
          </motion.a>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4">
          <a href={`mailto:${CONFIG.personal.email}`} className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">{CONFIG.personal.email}</a>
          <div className="flex items-center justify-center gap-5 sm:gap-7 text-white/80">
            <a href={CONFIG.social.x} target="_blank" rel="noreferrer" className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-sm sm:text-base">X</a>
            <a href={CONFIG.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-sm sm:text-base">LinkedIn</a>
            <a href={CONFIG.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-sm sm:text-base">Instagram</a>
          </div>
        </div>
      </section>
      </main>
      {/* Floating CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 inline-flex items-center justify-center rounded-full bg-white text-black px-4 sm:px-5 py-3 font-medium shadow-[0_10px_30px_rgba(0,0,0,0.35)] text-sm sm:text-base min-h-[48px] min-w-[48px]"
        aria-label="Contact us to get started"
      >
        <span className="hidden sm:inline">Get Started</span>
        <span className="sm:hidden">💬</span>
      </motion.a>
      </div>
  )
}
