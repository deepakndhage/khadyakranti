interface Props {
  children: React.ReactNode
  variant?: 'gold' | 'green' | 'spice' | 'outline' | 'coming-soon'
  className?: string
}

export default function Badge({ children, variant = 'gold', className = '' }: Props) {
  const styles: Record<string, string> = {
    gold: 'bg-turmeric text-white',
    green: 'bg-forest text-white',
    spice: 'bg-spice text-white',
    outline: 'border border-turmeric text-turmeric',
    'coming-soon': 'bg-ivory-dark text-brown border border-turmeric/30',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
