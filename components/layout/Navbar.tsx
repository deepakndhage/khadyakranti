'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  const links = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'Our Story' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-ivory/50 backdrop-blur-md border-b border-ivory-dark transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
            <Image
              src="/images/logo.png"
              alt="Khadyakranti"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span
            className="text-lg font-bold tracking-tight text-brown hidden sm:block"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Khadyakranti
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-turmeric'
                  : 'text-brown/70 hover:text-brown'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/products"
            className="px-5 py-2 bg-turmeric text-white text-sm font-semibold rounded-full hover:bg-turmeric-light transition-colors"
          >
            Explore Products
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-brown transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brown transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brown transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-ivory-dark px-6 py-6 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium text-brown"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/products"
            className="mt-2 px-5 py-3 bg-turmeric text-white text-sm font-semibold rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Explore Products
          </Link>
        </div>
      )}
    </nav>
  )
}
