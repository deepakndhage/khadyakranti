import Image from '@/components/ui/AppImage'
import AnimatedSection from '@/components/ui/AnimatedSection'

const audiences = [
  {
    image: '/images/generated/audience-woman.jpg',
    gradient: 'from-amber-50 to-orange-100',
    accentColor: '#D4780A',
    persona: 'The Working Woman',
    quote: '"She feeds a family after feeding a boardroom."',
    body: 'After a long day, the cook didn\'t show, the food doesn\'t taste right, and yet — dinner still has to happen. Khadyakranti makes it taste like home. Every single time.',
  },
  {
    image: '/images/generated/audience-student.jpg',
    gradient: 'from-emerald-50 to-teal-100',
    accentColor: '#1B4332',
    persona: 'The Student or Professional Abroad',
    quote: '"Home is a flavour. We bottled it."',
    body: 'Wherever you study or work, Indian food should taste exactly the way it did at home. Not adjusted for local tastes. Not a compromise. The real thing.',
  },
  {
    image: '/images/generated/audience-bachelor.jpg',
    gradient: 'from-stone-50 to-amber-50',
    accentColor: '#8B1A1A',
    persona: 'The Working Bachelor',
    quote: '"First time cooking? You\'ll still nail it."',
    body: 'No experience needed. No mess, no guesswork. Khadyakranti turns anyone — yes, anyone — into someone who can cook a proper Indian meal.',
  },
]

export default function AudienceSection() {
  return (
    <section className="bg-ivory py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric mb-4">
            Who We Made This For
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-brown"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            For every Indian,{' '}
            <span className="text-forest italic">everywhere.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((a, i) => (
            <AnimatedSection key={i} delay={i * 0.15} direction="up">
              <div className="rounded-2xl overflow-hidden h-full flex flex-col border border-ivory-dark shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image header */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.persona}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient overlay at bottom of image */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50`}
                  />
                </div>
                {/* Text content */}
                <div className={`bg-gradient-to-br ${a.gradient} p-7 flex flex-col flex-1`}>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: a.accentColor }}
                  >
                    {a.persona}
                  </p>
                  <p
                    className="text-xl font-bold text-brown mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {a.quote}
                  </p>
                  <p className="text-muted text-sm leading-relaxed flex-1">{a.body}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
