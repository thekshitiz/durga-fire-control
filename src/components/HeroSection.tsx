'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const AnimatedButton = ({ children, href, variant = "default" }: { children: React.ReactNode, href: string, variant?: "default" | "outline" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Button
          size="lg"
          variant={variant}
          className={`text-lg relative overflow-hidden group ${
            variant === "default" ? "bg-red-600 hover:bg-red-700" : ""
          }`}
        >
          <motion.span
            className="relative z-10 flex items-center gap-2"
            animate={{
              x: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
          <motion.div
            className={`absolute inset-0 ${
              variant === "default" ? "bg-red-700" : "bg-accent"
            }`}
            initial={{ x: "100%" }}
            animate={{ x: isHovered ? "0%" : "100%" }}
            transition={{ duration: 0.2 }}
          />
        </Button>
      </motion.div>
    </Link>
  );
};

export function HeroSection() {
    return (
        <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-r from-red-500/10 to-orange-500/10">
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
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Protecting Lives Through
                        <motion.span 
                            className="text-red-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {' '}
                            Advanced Fire Safety
                        </motion.span>
                    </motion.h1>

                    <motion.p 
                        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Your trusted partner in comprehensive fire safety
                        solutions and equipment. Serving businesses across Nepal
                        since 1995.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <AnimatedButton href="/products">
                            View Our Products
                            <ArrowRight className="h-5 w-5" />
                        </AnimatedButton>
                        <AnimatedButton href="/contact" variant="outline">
                            Contact Us
                        </AnimatedButton>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
