import Image from '@/components/ui/AppImage'
import AnimatedSection from '@/components/ui/AnimatedSection'

const steps = [
  {
    num: '01',
    title: 'Boil water.\nAdd the masala packet.',
    desc: 'Open the packet. Add it to boiling water. That\'s the hardest part — and it takes 30 seconds.',
  },
  {
    num: '02',
    title: 'Add your cooked\nchicken, mutton,\neg or vegetables.',
    desc: 'Pre-cooked protein or veggies go straight in. No marinating. No measuring spices. No mess.',
  },
  {
    num: '03',
    title: 'Simmer 10 minutes.\nServe.\nTake the compliments.',
    desc: 'The masala does the rest. In 10 minutes, you\'ll have a dish that tastes like it took hours.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-charcoal py-28 px-6 relative overflow-hidden">
      {/* Background food image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/generated/howitworks-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric/70 mb-4">
            How It Works
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-ivory"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            10 minutes.
            <br />
            <span className="text-turmeric italic">That's the whole secret.</span>
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px border-t border-dashed border-turmeric/30" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.18} direction="up">
              <div className="relative flex flex-col items-center text-center px-8 pb-12 md:pb-0">
                {/* Number badge */}
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-turmeric/40 flex items-center justify-center mb-8 bg-charcoal">
                  <span
                    className="text-2xl font-bold text-turmeric"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-ivory mb-4 whitespace-pre-line leading-snug"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.55} className="text-center mt-16 pt-12 border-t border-white/10">
          <p className="text-white/40 text-sm tracking-wide">
            No grinding. No measuring. No cooking expertise required.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
