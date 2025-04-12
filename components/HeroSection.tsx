'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
    return (
        <div className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-red-500/10 to-orange-500/10">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1578495577326-6f18756c500d?auto=format&fit=crop&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Protecting Lives Through
                        <span className="text-red-600">
                            {' '}
                            Advanced Fire Safety
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                        Your trusted partner in comprehensive fire safety
                        solutions and equipment. Serving businesses across Nepal
                        since 1995.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg">
                            View Our Products
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg">
                            Contact Us
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
