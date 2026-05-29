'use client'
import { useState } from 'react'
import ProductCard from '@/components/products/ProductCard'
import FilterBar from '@/components/products/FilterBar'
import AnimatedSection from '@/components/ui/AnimatedSection'

const allProducts = [
  {
    name: 'Chicken Rassa',
    tagline: 'Soul-warming Maharashtrian curry',
    description:
      'A deeply spiced, rich curry with bold red gravy — the kind that makes you close your eyes on the first bite. Rooted in Maharashtrian tradition, now ready in your kitchen in 10 minutes.',
    image: '/images/chicken-rassa.jpeg',
    type: 'Maharashtrian Rassa · Gravy',
    category: 'Chicken',
    prepTime: '10 minutes',
    serves: 'Serves 4',
  },
  {
    name: 'Chicken Sukka',
    tagline: 'Dry-roasted, intensely spiced',
    description:
      'Dry-roasted chicken coated in a fragrant, crushed masala blend. Bold, smoky, and completely addictive. The restaurant favourite, made at home — effortlessly.',
    image: '/images/chicken-sukka.jpeg',
    type: 'Sukka · Dry Masala',
    category: 'Chicken',
    prepTime: '10 minutes',
    serves: 'Serves 4',
  },
  {
    name: 'Mutton Rassa',
    tagline: 'The king of Indian curries',
    description:
      'Bone-in mutton in a deep, peppery red gravy that tastes like it took hours to cook. It doesn\'t. The masala does the work — you take the credit.',
    image: '/images/mutton-rassa-1.jpeg',
    type: 'Maharashtrian Rassa · Gravy',
    category: 'Mutton',
    prepTime: '10 minutes',
    serves: 'Serves 4',
  },
  {
    name: 'Mutton Sukka',
    tagline: 'Tender mutton, crushed spices, fresh herb finish',
    description:
      'A dry preparation that demands attention at the table. Tender mutton, whole crushed spices, fresh herb finish. No cooking experience required to make it perfectly.',
    image: '/images/mutton-sukka-1.jpeg',
    type: 'Sukka · Dry Masala',
    category: 'Mutton',
    prepTime: '10 minutes',
    serves: 'Serves 4',
  },
]

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Header */}
      <section className="bg-forest pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 70% 50%, #D4780A 0%, transparent 60%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric mb-4">
              Khadyakranti Presents
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-ivory mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              10 Minute Magix™
            </h1>
            <p className="text-ivory/60 text-lg max-w-xl mx-auto">
              100% natural. No preservatives. No chemicals. Iconic Indian flavours —
              ready in 10 minutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter */}
          <AnimatedSection className="mb-12">
            <FilterBar onFilterChange={setActiveFilter} activeFilter={activeFilter} />
          </AnimatedSection>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted">
              <p className="text-xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Coming Soon
              </p>
              <p className="text-sm">These products are in the works — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((product, i) => (
                <AnimatedSection key={product.name} delay={i * 0.1} direction="up">
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Future products hint */}
          <AnimatedSection delay={0.3} className="mt-16 text-center">
            <div className="bg-forest/5 border border-forest/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <p
                className="text-lg font-bold text-forest mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                More flavours coming soon
              </p>
              <p className="text-muted text-sm">
                Anda Curry · Veg All-in-One · Chhole Masala · and much more.
                The revolution is just getting started.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
