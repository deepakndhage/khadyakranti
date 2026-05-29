'use client'
import { useState } from 'react'

const filters = ['All', 'Chicken', 'Mutton', 'Vegetarian', 'Egg']

interface Props {
  onFilterChange: (filter: string) => void
  activeFilter: string
}

export default function FilterBar({ onFilterChange, activeFilter }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            activeFilter === f
              ? 'bg-turmeric text-white shadow-md'
              : 'bg-ivory border border-ivory-dark text-brown/70 hover:border-turmeric/40 hover:text-turmeric'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
