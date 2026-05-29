'use client'

const spices = [
  'Coriander', 'Cumin', 'Kashmiri Chilli', 'Turmeric', 'Black Pepper',
  'Star Anise', 'Cloves', 'Cinnamon', 'Cardamom', 'Bay Leaves',
  'Fenugreek', 'Dried Ginger', 'Mustard Seeds', 'Fennel', 'Asafoetida',
]

const Dot = () => (
  <span className="mx-5 text-turmeric/50 text-xl select-none">·</span>
)

const Row = ({ reversed = false }: { reversed?: boolean }) => (
  <div className="overflow-hidden py-2">
    <div
      className={`flex whitespace-nowrap ${reversed ? '[animation-direction:reverse]' : ''} animate-marquee`}
    >
      {[...spices, ...spices].map((spice, i) => (
        <span key={i} className="flex items-center">
          <span
            className="text-xl font-semibold text-ivory/80 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {spice}
          </span>
          <Dot />
        </span>
      ))}
    </div>
  </div>
)

export default function IngredientsMarquee() {
  return (
    <section className="bg-forest py-24 overflow-hidden relative">
      {/* Background circle accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{ background: '#D4780A' }}
      />

      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turmeric/70 mb-3">
              Pure. Natural. Real.
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-ivory"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We know every spice by name.
            </h2>
          </div>
          <p className="text-ivory/50 text-sm max-w-xs text-right hidden md:block">
            Every ingredient is selected for purity.<br />
            No fillers, no additives, no shortcuts.
          </p>
        </div>
      </div>

      {/* Two-row marquee */}
      <div className="space-y-1">
        <Row />
        <Row reversed />
      </div>

      <p className="text-ivory/40 text-sm text-center mt-8 px-6 md:hidden">
        Every ingredient is selected for purity. No fillers, no additives, no shortcuts.
      </p>
    </section>
  )
}
