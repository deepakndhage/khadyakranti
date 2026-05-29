'use client'
import { motion } from 'framer-motion'
import Image from '@/components/ui/AppImage'
import Link from 'next/link'

const SpiceLeaf = ({ className, style }: { className: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 40 60" className={className} style={style} fill="currentColor">
    <path d="M20 2 C8 14, 4 28, 8 42 C10 50, 16 56, 20 58 C24 56, 30 50, 32 42 C36 28, 32 14, 20 2Z" opacity="0.6" />
    <line x1="20" y1="8" x2="20" y2="54" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="14" y1="24" x2="26" y2="32" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    <line x1="12" y1="34" x2="28" y2="42" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
  </svg>
)

const StarAnise = ({ className, style }: { className: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 50 50" className={className} style={style} fill="currentColor">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <ellipse
        key={i}
        cx="25"
        cy="14"
        rx="3"
        ry="9"
        transform={`rotate(${angle} 25 25)`}
        opacity="0.5"
      />
    ))}
    <circle cx="25" cy="25" r="4" opacity="0.7" />
  </svg>
)

const words = ['Real', 'Flavours.', 'Real', 'Ingredients.']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory pt-20">
      {/* AI-generated background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Image
          src="/images/generated/hero-spices.jpg"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay — only enough to keep centre text readable */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(253,245,230,0.75) 0%, rgba(253,245,230,0.35) 70%, rgba(253,245,230,0.1) 100%)',
          }}
        />
      </div>

      {/* Background gradient blob (fallback / layered) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #D4780A 0%, #F09A2C 30%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating spice decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <SpiceLeaf className="absolute top-[15%] left-[8%] w-10 h-14 text-forest/30 animate-float" />
        <SpiceLeaf className="absolute top-[20%] right-[10%] w-8 h-12 text-turmeric/25 animate-float-slow" style={{ animationDelay: '2s' } as React.CSSProperties} />
        <StarAnise className="absolute bottom-[30%] left-[12%] w-12 h-12 text-turmeric/20 animate-float-slow" style={{ animationDelay: '1s' } as React.CSSProperties} />
        <StarAnise className="absolute top-[35%] right-[6%] w-10 h-10 text-forest/20 animate-float" style={{ animationDelay: '3s' } as React.CSSProperties} />
        <SpiceLeaf className="absolute bottom-[20%] right-[14%] w-7 h-10 text-spice/20 animate-float" style={{ animationDelay: '1.5s' } as React.CSSProperties} />
        {/* Dot clusters */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-turmeric/20"
            style={{
              top: `${20 + i * 12}%`,
              left: `${5 + i * 15}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric mb-6"
        >
          The Food Revolution Is Here
        </motion.p>

        {/* Main headline — word by word */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-brown"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.13,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`inline-block mr-4 ${i === 2 ? 'text-turmeric' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
          className="text-lg md:text-xl text-muted mb-2 italic"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          No chemicals. No preservatives. No compromise.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
          className="text-base md:text-lg text-brown/60 mb-10"
        >
          Just honest Indian cooking — ready in 10 minutes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/about"
            className="px-8 py-4 bg-turmeric text-white font-semibold rounded-full hover:bg-turmeric-light transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm"
          >
            Discover Our Story →
          </Link>
          <Link
            href="/products"
            className="px-8 py-4 border-2 border-brown/20 text-brown font-medium rounded-full hover:border-turmeric hover:text-turmeric transition-all text-sm"
          >
            See Products
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-turmeric/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
