import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Khadyakranti"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Khadyakranti™
                </p>
                <p className="text-white/50 text-xs italic mt-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                  Real Food. Real Revolution.
                </p>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              100% natural Indian masalas — no chemicals, no preservatives,
              no compromise on taste.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:items-end gap-3">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Navigation</p>
            {[
              { href: '/', label: 'Home' },
              { href: '/products', label: 'Products' },
              { href: '/about', label: 'Our Story' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Khadyakranti™. All rights reserved. Trademarked in India.</p>
          <p>10 Minute Magix™ is a product range by Khadyakranti.</p>
        </div>
      </div>
    </footer>
  )
}
