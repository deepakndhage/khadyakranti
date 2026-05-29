import AnimatedSection from '@/components/ui/AnimatedSection'

const moments = [
  {
    headline: 'Dinner is on the table.',
    body: 'Not at 9. Not reheated. Not ordered in. On the table, hot, the way it should be — every single night.',
  },
  {
    headline: 'The family actually eats together.',
    body: 'No one is still cooking. No one is still waiting. Everyone sits down at the same time, to a meal that tastes like it took hours.',
  },
  {
    headline: 'The rest of the evening is yours.',
    body: 'Help with homework. Call your parents. Watch something. Sleep early. The kitchen is done. Your time has started.',
  },
]

export default function TimeSection() {
  return (
    <section className="bg-forest py-28 px-6 overflow-hidden relative">
      {/* Decorative glow */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4780A 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <AnimatedSection className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric/70 mb-5">
            What 10 Minutes Gives You
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            It doesn't just save time.
            <br />
            <span className="text-turmeric italic">It creates it.</span>
          </h2>
          <p className="text-ivory/50 text-base max-w-xl mx-auto leading-relaxed">
            Every minute you don't spend grinding, measuring, and guessing
            is a minute that belongs to you and the people you love.
          </p>
        </AnimatedSection>

        {/* Three evening moments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ivory/10 rounded-2xl overflow-hidden">
          {moments.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.15} direction="up">
              <div className="bg-forest p-8 lg:p-10 h-full flex flex-col">
                <h3
                  className="text-xl lg:text-2xl font-bold text-ivory mb-4 leading-snug"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {m.headline}
                </h3>
                <p className="text-ivory/55 text-sm leading-relaxed flex-1">{m.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom line */}
        <AnimatedSection delay={0.5} className="text-center mt-14">
          <p
            className="text-ivory/30 text-sm uppercase tracking-[0.2em]"
          >
            10 Minute Magix™ — because your time is the real ingredient.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
