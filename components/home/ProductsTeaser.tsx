import Image from '@/components/ui/AppImage'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'

const products = [
  {
    name: 'Chicken Rassa',
    tagline: 'Soul-warming Maharashtrian curry',
    image: '/images/chicken-rassa.jpeg',
    type: 'Rassa · Gravy',
  },
  {
    name: 'Chicken Sukka',
    tagline: 'Dry-roasted, intensely spiced',
    image: '/images/chicken-sukka.jpeg',
    type: 'Sukka · Dry',
  },
  {
    name: 'Mutton Rassa',
    tagline: 'The king of Indian curries',
    image: '/images/mutton-rassa-1.jpeg',
    type: 'Rassa · Gravy',
  },
  {
    name: 'Mutton Sukka',
    tagline: 'Crushed spices, tender mutton',
    image: '/images/mutton-sukka-1.jpeg',
    type: 'Sukka · Dry',
  },
]

export default function ProductsTeaser() {
  return (
    <section className="bg-surface py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric mb-4">
            10 Minute Magix™
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-brown mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Meet the range.
          </h2>
          <p className="text-muted text-base max-w-lg mx-auto">
            Four iconic Indian flavours — made the natural way, ready in 10 minutes.
            Almost here.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1} direction="up">
              <div className="group bg-ivory rounded-2xl overflow-hidden border border-ivory-dark hover:border-turmeric/30 hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <Badge variant="coming-soon">Coming Soon</Badge>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">{p.type}</p>
                  <h3
                    className="text-lg font-bold text-brown mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted">{p.tagline}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted">
                    <span>⏱ 10 min</span>
                    <span>·</span>
                    <span>👥 Serves 4</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-turmeric font-semibold text-sm hover:gap-4 transition-all"
          >
            See All Products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
