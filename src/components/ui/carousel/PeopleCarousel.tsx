'use client'

import { useState } from 'react'

const people = [
  {
    name: 'Person 1',
    role: 'Fire Technician',
    image: 'https://via.placeholder.com/120',
  },
  {
    name: 'Person 2',
    role: 'Inspector',
    image: 'https://via.placeholder.com/120',
  },
  {
    name: 'Person 3',
    role: 'Trainer',
    image: 'https://via.placeholder.com/120',
  },
  {
    name: 'Person 4',
    role: 'Safety Auditor',
    image: 'https://via.placeholder.com/120',
  },
  {
    name: 'Person 5',
    role: 'Field Engineer',
    image: 'https://via.placeholder.com/120',
  },
]

export default function PeopleCarousel() {
  const [current, setCurrent] = useState(0)
  const total = people.length

  const next = () => setCurrent((prev) => (prev + 1) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden bg-white rounded-xl shadow">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)`, width: `${total * 100}%` }}
      >
        {people.map((person, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-6 flex flex-col items-center text-center"
          >
            <img src={person.image} alt={person.name} className="w-28 h-28 rounded-full mb-4" />
            <h3 className="text-xl font-bold">{person.name}</h3>
            <p className="text-gray-500">{person.role}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
      >
        &#10094;
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
      >
        &#10095;
      </button>
    </div>
  )
} 