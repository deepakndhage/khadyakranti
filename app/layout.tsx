import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Khadyakranti — Real Food. Real Revolution.',
  description: 'Khadyakranti brings 100% natural, chemical-free, preservative-free Indian masalas to your kitchen. Cook authentic Indian food in 10 minutes with 10 Minute Magix.',
  keywords: ['natural Indian masala', 'chemical free food', 'ready to cook', 'Indian cooking', 'Khadyakranti', '10 Minute Magix'],
  openGraph: {
    title: 'Khadyakranti — Real Food. Real Revolution.',
    description: 'Authentic Indian flavours. 100% natural. Ready in 10 minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
