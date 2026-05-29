import Image from '@/components/ui/AppImage'
import Badge from '@/components/ui/Badge'

interface Product {
  name: string
  tagline: string
  description: string
  image: string
  type: string
  category: string
  prepTime: string
  serves: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-surface rounded-2xl overflow-hidden border border-ivory-dark hover:border-turmeric/40 hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
        {/* Badges */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <Badge variant="coming-soon">Coming Soon</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-turmeric uppercase tracking-widest font-semibold mb-2">
          {product.type}
        </p>
        <h3
          className="text-2xl font-bold text-brown mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {product.name}
        </h3>
        <p className="text-muted text-sm italic mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {product.tagline}
        </p>
        <p className="text-brown/70 text-sm leading-relaxed flex-1">{product.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-ivory-dark text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {product.prepTime}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            {product.serves}
          </span>
        </div>
      </div>
    </div>
  )
}
