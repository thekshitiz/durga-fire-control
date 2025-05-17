'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Prakash Shrestha',
    role: 'Hotel Manager',
    company: 'Grand Hotel Kathmandu',
    rating: 5,
    testimonial: 'Durga Fire Control has been instrumental in ensuring our hotel&apos;s safety. Their professional team and prompt service give us peace of mind.',
    image: '/testimonials/hotel-manager.jpg'
  },
  {
    name: 'Sarita Maharjan',
    role: 'Factory Director',
    company: 'Nepal Textile Industries',
    rating: 5,
    testimonial: 'Outstanding service! They helped us implement a comprehensive fire safety system that perfectly meets our industrial requirements.',
    image: '/testimonials/factory-director.jpg'
  },
  {
    name: 'Ram Adhikari',
    role: 'Building Manager',
    company: 'City Center Mall',
    rating: 4.5,
    testimonial: 'Regular maintenance and quick response times. Their team is always professional and knowledgeable about the latest safety standards.',
    image: '/testimonials/building-manager.jpg'
  },
  {
    name: 'Anjali Gurung',
    role: 'School Principal',
    company: 'Modern Academy',
    rating: 5,
    testimonial: 'The training sessions they conducted for our staff were excellent. They made fire safety easy to understand and implement.',
    image: '/testimonials/principal.jpg'
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="w-5 h-5 fill-current" />}
    </div>
  )
}

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative max-w-5xl mx-auto px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-card h-full rounded-xl p-6 shadow-lg border hover:border-red-200 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-24 h-24 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-red-600">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <StarRating rating={testimonial.rating} />
                  
                  <p className="text-lg italic mb-4">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-red-600' : 'bg-gray-300 hover:bg-red-300'
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 