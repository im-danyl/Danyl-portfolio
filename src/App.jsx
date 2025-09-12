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

  console.log("heroReelOpen", heroReelOpen);

  return (
    <div className="bg-black text-white selection:bg-white/20">
      {/* ... existing code ... */}

          {/* Big Reel Player */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur">
            {CONFIG.heroVideo ? (
              <Dialog.Root open={heroReelOpen} onOpenChange={setHeroReelOpen}>
                <HeroReel id={CONFIG.heroVideo} onOpen={() => setHeroReelOpen(true)} />
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                  <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
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

      {/* ... existing code ... */}
    </div>
  );
}
