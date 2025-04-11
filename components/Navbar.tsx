'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Flame, Menu, X, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '/Products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  
]

const aboutItems = [
    { href: '/about-company', label: 'About Us' },
    { href: '/about-ceo', label: 'About CEO' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-background border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Flame className="h-8 w-8 text-red-600" />
                            <span className="font-bold text-xl">
                                Durga Fire Control
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-foreground/80 hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
                                About <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {aboutItems.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground p-2"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        {/* Mobile About Menu Items */}
                        <div className="px-3 py-2 text-base font-medium text-foreground/80">
                            About
                        </div>
                        {aboutItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-6 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
