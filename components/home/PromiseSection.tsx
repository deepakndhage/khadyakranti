import Image from '@/components/ui/AppImage'
import AnimatedSection from '@/components/ui/AnimatedSection'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-3 5-3 9s3 9 3 9m0-18c0 0 3 5 3 9s-3 9-3 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
      </svg>
    ),
    title: '100% Natural Ingredients',
    body: 'Every spice, every herb — sourced from nature. Nothing synthetic, nothing artificial, ever.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'No Added Preservatives',
    body: 'What goes in the packet is what goes in your food. Nothing more. We believe your family deserves that.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 0 1 0 4.5m0-4.5h-15m15 0a2.25 2.25 0 0 0 0 4.5m-15-4.5a2.25 2.25 0 0 0 0 4.5M4.2 19.5h15.6" />
      </svg>
    ),
    title: 'Zero Chemicals',
    body: 'We read every label. We know every ingredient. If it isn\'t natural, it doesn\'t go in — full stop.',
  },
]

export default function PromiseSection() {
  return (
    <section className="relative bg-ivory py-28 px-6 overflow-hidden">
      {/* Background image — fades left→right */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/generated/promise-spices.jpg"
          alt=""
          fill
          className="object-cover object-right"
          sizes="100vw"
        />
        {/* Left-to-right: ivory covers the text side, reveals image on the right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #FDF5E6 30%, rgba(253,245,230,0.75) 52%, rgba(253,245,230,0.1) 75%)',
          }}
        />
        {/* Bottom fade: keeps pillars legible */}
        <div
          className="absolute inset-x-0 bottom-0 h-72"
          style={{
            background: 'linear-gradient(to top, #FDF5E6 55%, transparent 100%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Headline — left-aligned, sits on ivory side */}
        <AnimatedSection direction="left" className="mb-24 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric mb-5">
            Our Promise
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            "Kranti" means{' '}
            <span className="text-turmeric">Revolution.</span>
            <br />
            <span className="text-forest">We're starting one</span>
            <br />— in your kitchen.
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Indian cooking has been one of the world's great culinary traditions
            for millennia. But somewhere along the way, convenience became an
            excuse for chemicals. We're changing that. Permanently.
          </p>
        </AnimatedSection>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-ivory-dark pt-16">
          {pillars.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.15} direction="up">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-turmeric/10 flex items-center justify-center text-turmeric">
                  {p.icon}
                </div>
                <h3
                  className="text-xl font-bold text-brown"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {p.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
