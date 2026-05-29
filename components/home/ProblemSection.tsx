import AnimatedSection from '@/components/ui/AnimatedSection'

const cards = [
  {
    icon: '🕘',
    title: 'Home after 9 PM.\nHungry family.\nNo energy to cook.',
    detail:
      'And when the cook doesn\'t show up — or the food they make just never tastes the way home should — dinner still has to happen.',
    label: 'For the working woman who does it all',
  },
  {
    icon: '✈️',
    title: 'Craving Aai\'s chicken rassa.\nThousands of miles\nfrom home.',
    detail:
      'Wherever you study or work, Indian food should taste exactly like it should. Like home. Not like a restaurant\'s interpretation of it.',
    label: 'For students & professionals abroad',
  },
  {
    icon: '📱',
    title: 'Another Swiggy order.\nAgain.',
    detail:
      'You deserve a home-cooked meal. Even if this is the first time you\'re standing in front of a stove. No experience needed.',
    label: 'For the bachelor who deserves better',
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-forest py-24 px-6 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #FDF5E6 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ivory-dark/50 mb-4">
            We Hear You
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-ivory"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Sound familiar?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <AnimatedSection key={i} delay={i * 0.15} direction="up">
              <div className="bg-surface rounded-2xl p-8 h-full flex flex-col shadow-xl shadow-charcoal/30">
                <span className="text-4xl mb-6 block">{card.icon}</span>
                <h3
                  className="text-xl font-bold text-brown mb-4 whitespace-pre-line leading-snug"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {card.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{card.detail}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-turmeric">
                  {card.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.45} className="text-center mt-16">
          <p
            className="text-xl md:text-2xl text-ivory/80 italic"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            "We built Khadyakranti for all three of you."
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
