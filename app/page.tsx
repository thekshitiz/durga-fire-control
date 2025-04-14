// /home/khicha/Documents/projects/durga-fire-control/app/page.tsx
'use client' // Add this line because we'll use framer-motion hooks/components

import { HeroSection } from '@/components/HeroSection'
import { Button } from '@/components/ui/button'
import {
    Shield,
    Users,
    Trophy,
    Clock,
    FlameKindling, // Icon for Extinguishers
    Siren, // Icon for Alarms
    SprayCan, // Icon for Suppression (alternative: ShieldCheck)
    Network, // Icon for Hydrant Systems (representing network/infrastructure)
    Presentation, // Icon for Training
    ClipboardCheck, // Icon for Assessment/Audit
} from 'lucide-react'
import { motion } from 'framer-motion' // Import motion
import PeopleCarousel from './PeopleCarousel'

// Existing features data
const features = [
    {
        icon: Shield,
        title: 'Quality Assurance',
        description:
            'All our products meet international safety standards and certifications.',
    },
    {
        icon: Users,
        title: 'Expert Team',
        description:
            'Highly trained professionals with years of industry experience.',
    },
    {
        icon: Trophy,
        title: 'Industry Leader',
        description: 'Trusted by top businesses across Nepal for over 25 years.',
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description:
            'Round-the-clock emergency support and maintenance services.',
    },
]

// New services data
const services = [
    {
        icon: FlameKindling,
        title: 'Fire Extinguisher Services',
        description:
            'Comprehensive installation, inspection, refilling, and maintenance for all types of fire extinguishers.',
    },
    {
        icon: Siren,
        title: 'Fire Alarm Systems',
        description:
            'Design, installation, and regular maintenance of advanced fire detection and alarm systems.',
    },
    {
        icon: SprayCan, // Using SprayCan for Suppression Systems
        title: 'Fire Suppression Systems',
        description:
            'Specialized suppression solutions for kitchens, server rooms, and industrial applications.',
    },
    {
        icon: Network, // Using Network for Hydrant Systems
        title: 'Fire Hydrant Systems',
        description:
            'Installation, testing, and upkeep of internal and external fire hydrant infrastructure.',
    },
    {
        icon: Presentation, // Using Presentation for Training
        title: 'Fire Safety Training',
        description:
            'Engaging training programs and drills to empower your staff with essential fire safety knowledge.',
    },
    {
        icon: ClipboardCheck,
        title: 'Risk Assessment & Audits',
        description:
            'Thorough fire risk assessments and safety audits to ensure compliance and identify potential hazards.',
    },
]

// Animation variants for staggering children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger delay between items
        },
    },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
}

export default function Home() {
    return (
        <div>
            <HeroSection />

            {/* Features Section (Existing) */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Why Choose Durga Fire Control?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Leading the industry with innovation, quality, and
                            reliability since 1995.
                        </p>
                    </div>

                    {/* Use motion.div for container animation */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
                    >
                        {features.map((feature, index) => (
                            // Use motion.div for item animation
                            <motion.div
                                key={index}
                                className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm" // Added subtle shadow
                                variants={itemVariants} // Apply item animation variants
                            >
                                <feature.icon className="h-10 w-10 text-red-600 mb-4" />
                                <h3 className="text-lg font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Section (New) */}
            <section id="services" className="py-24 bg-secondary/20"> {/* Slightly different background */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Our Comprehensive Services
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Providing end-to-end fire safety solutions tailored
                            to your needs.
                        </p>
                    </div>

                    {/* Use motion.div for container animation */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // 3 columns on large screens
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
                    >
                        {services.map((service, index) => (
                            // Use motion.div for item animation
                            <motion.div
                                key={index}
                                className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col items-start text-left h-full" // Align items start, full height
                                variants={itemVariants} // Apply item animation variants
                            >
                                <service.icon className="h-10 w-10 text-red-600 mb-4" />
                                <h3 className="text-lg font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground flex-grow"> {/* flex-grow to push content down if cards vary slightly */}
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                </section>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-8">Meet Our Experts</h2>
                        <PeopleCarousel />
                </div>
            </section>

            {/* CTA Section (Existing) */}
            <section className="py-24 bg-red-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6"> {/* Reduced margin bottom slightly */}
                        Ready to Enhance Your Fire Safety?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto"> {/* Adjusted text size */}
                        Contact us today for a free consultation and quote. Our
                        experts are ready to help you create a comprehensive
                        fire safety solution.
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="text-red-600 font-semibold" // Made text bold
                    >
                        Get Started Today
                    </Button>
                </div>
            </section>
        </div>
    )
}

