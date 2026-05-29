import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Link from 'next/link'

const values = [
  {
    title: 'Only real ingredients',
    body: 'Every spice is selected for purity and provenance. If it isn\'t natural, it doesn\'t make the cut.',
  },
  {
    title: 'Transparent labelling',
    body: 'You should be able to read and understand everything on our label. No hidden additives. No vague "flavour" entries.',
  },
  {
    title: 'No preservatives, ever',
    body: 'What goes in the packet is what goes in your food. Nothing to extend shelf life at the cost of your health.',
  },
]

const upcoming = ['Anda Curry', 'Veg All-in-One', 'Chhole Masala', 'Fish Curry', 'Dal Tadka', 'Keema Masala']

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ivory pt-32 pb-24 px-6 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #D4780A 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric mb-5">
              Our Story
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-brown leading-tight mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              "Khadya" means food.
              <br />
              <span className="text-turmeric">"Kranti"</span> means revolution.
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl">
              We didn't pick that name lightly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The problem we saw */}
      <section className="bg-forest py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p
              className="text-2xl md:text-3xl text-ivory leading-relaxed"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Indian cooking is one of the world's greatest culinary traditions —
              built over centuries, shaped by thousands of ingredients, and
              defined by a depth of flavour that is simply unmatched.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-8">
            <p className="text-ivory/60 text-lg leading-relaxed max-w-2xl">
              But somewhere along the way, it became inaccessible. Too
              time-consuming. Too intimidating. Too dependent on a specific
              kitchen and a specific person who knows all the secrets. And then,
              as convenience became the priority, chemicals became the shortcut.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.35} className="mt-8">
            <p
              className="text-turmeric text-xl font-semibold italic"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We think that's wrong. And we're changing it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our belief */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric mb-5">
                What We Believe
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-brown mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Healthy food shouldn't require a degree in chemistry.
              </h2>
              <p className="text-muted text-base leading-relaxed mb-5">
                Look at the ingredient list on most packaged food. Can you pronounce
                them? Do you know where they came from? Do you know what they do
                to your body?
              </p>
              <p className="text-muted text-base leading-relaxed mb-5">
                We built Khadyakranti on a single promise: if we wouldn't feed it
                to our own family, we won't sell it to yours.
              </p>
              <p className="text-brown font-semibold text-base">
                100% natural ingredients. No preservatives. No artificial colours
                or flavours. No compromise on taste.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-5">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-ivory-dark rounded-xl p-6 flex gap-5"
                  >
                    <div className="w-8 h-8 rounded-full bg-turmeric/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brown mb-1">{v.title}</p>
                      <p className="text-muted text-sm leading-relaxed">{v.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The name's meaning */}
      <section className="bg-charcoal py-24 px-6 relative overflow-hidden">
        {/* AI background image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/generated/about-mortar.jpg"
            alt=""
            fill
            className="object-cover opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div
              className="text-8xl md:text-9xl font-bold text-turmeric/70 mb-0 leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              क्रांती
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 -mt-4 mb-10">
              Revolution · क्रांती · Kranti
            </p>
            <p
              className="text-2xl md:text-3xl text-ivory/80 italic leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              "Great Indian food belongs to everyone —
              not just to those with hours to spare
              or a grandmother nearby."
            </p>
            <p className="text-white/30 text-sm mt-6">The Khadyakranti Philosophy</p>
          </AnimatedSection>
        </div>
      </section>

      {/* The future */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric mb-4">
              What's Next
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-brown mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              This is just the beginning.
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
              We're starting with four iconic Maharashtrian flavours. But our vision
              is bigger — every Indian dish that deserves to be made fresh, quickly,
              and without shortcuts.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center">
              {upcoming.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 border border-turmeric/20 rounded-full text-sm text-muted bg-surface"
                >
                  {item}
                </span>
              ))}
              <span className="px-4 py-2 border border-turmeric/20 rounded-full text-sm text-turmeric bg-turmeric/5">
                and many more…
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-turmeric py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to taste the revolution?
            </h2>
            <p className="text-white/70 mb-8">
              Explore our first range — launching very soon.
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-white text-turmeric font-bold rounded-full hover:bg-ivory transition-all text-sm"
            >
              See the Products →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
