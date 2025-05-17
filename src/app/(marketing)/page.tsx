'use client'

import { HeroSection } from '@/components/HeroSection'
import { Button } from '@/components/ui/button'
import {
    Shield,
    Users,
    Trophy,
    Clock,
    FlameKindling,
    Siren,
    SprayCan,
    Network,
    Presentation,
    ClipboardCheck,
    ChevronRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { TestimonialsCarousel } from '@/components/ui/carousel/PeopleCarousel'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Link } from '@/components/ui/link'

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
        icon: SprayCan,
        title: 'Fire Suppression Systems',
        description:
            'Specialized suppression solutions for kitchens, server rooms, and industrial applications.',
    },
    {
        icon: Network,
        title: 'Fire Hydrant Systems',
        description:
            'Installation, testing, and upkeep of internal and external fire hydrant infrastructure.',
    },
    {
        icon: Presentation,
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
            staggerChildren: 0.1,
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

            {/* Features Section */}
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

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
                                variants={itemVariants}
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

            {/* Services Section */}
            <section id="services" className="py-24 bg-secondary/20">
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

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col items-start text-left h-full"
                                variants={itemVariants}
                            >
                                <service.icon className="h-10 w-10 text-red-600 mb-4" />
                                <h3 className="text-lg font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground flex-grow">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-secondary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">
                            What Our Clients Say
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Don&apos;t just take our word for it - hear from some of our satisfied clients about their experience with Durga Fire Control.
                        </p>
                    </div>
                    <TestimonialsCarousel />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-red-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Enhance Your Fire Safety?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and quote. Our
                        experts are ready to help you create a comprehensive
                        fire safety solution.
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="text-red-600 font-semibold"
                    >
                        Get Started Today
                    </Button>
                </div>
            </section>

            {/* FAQ Preview Section */}
            <section className="py-24 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Common Questions
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Quick answers to frequently asked questions about our services
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 mb-8">
                        <AccordionItem
                            value="1"
                            className="bg-card border rounded-lg px-6"
                        >
                            <AccordionTrigger className="text-left text-lg font-medium py-6">
                                What types of fire safety equipment do you sell?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-6">
                                We sell fire extinguishers, smoke detectors, fire alarms, fire blankets, hose reels, sprinkler systems, safety signs, and more.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="2"
                            className="bg-card border rounded-lg px-6"
                        >
                            <AccordionTrigger className="text-left text-lg font-medium py-6">
                                Do you offer installation services?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-6">
                                Yes, professional installation is available in most cities. Schedule it during checkout or via support.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="3"
                            className="bg-card border rounded-lg px-6"
                        >
                            <AccordionTrigger className="text-left text-lg font-medium py-6">
                                Do you offer Annual Maintenance Contracts (AMC)?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-6">
                                Yes! We provide AMC plans for residential, commercial, and industrial clients.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="text-center">
                        <Button
                            variant="outline"
                            size="lg"
                            className="gap-2"
                            asChild
                        >
                            <Link href="/faq">
                                View All FAQs
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
} 