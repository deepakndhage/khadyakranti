import Hero from '@/components/home/Hero'
import ProblemSection from '@/components/home/ProblemSection'
import PromiseSection from '@/components/home/PromiseSection'
import HowItWorks from '@/components/home/HowItWorks'
import AudienceSection from '@/components/home/AudienceSection'
import IngredientsMarquee from '@/components/home/IngredientsMarquee'
import ProductsTeaser from '@/components/home/ProductsTeaser'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <PromiseSection />
      <HowItWorks />
      <AudienceSection />
      <IngredientsMarquee />
      <ProductsTeaser />
    </>
  )
}
