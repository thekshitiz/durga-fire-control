'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Zap, PackageCheck, Users } from 'lucide-react'
import { WhyChooseUsItem } from '@/components/about/why-choose-us-item'

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

export default function AboutCompany() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 space-y-16 md:space-y-20 lg:space-y-24">
            {/* Hero Section */}
            <motion.div
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
                className="text-center space-y-6"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
                    About Durga Fire Control
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Since 1995, we've been at the forefront of fire safety in
                    Nepal, protecting lives and properties with unwavering
                    dedication and expertise.
                </p>
            </motion.div>

            {/* Mission, History, Values Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
            >
                <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">
                        Our Legacy
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        From our humble beginnings in 1995, we've grown into
                        Nepal's trusted leader in fire safety. Our journey is
                        marked by continuous innovation and an unwavering
                        commitment to excellence.
                    </p>
                </div>

                <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">
                        Our Mission
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        To pioneer innovative fire safety solutions that set
                        industry standards, ensuring unparalleled protection and
                        peace of mind through excellence in service and
                        technology.
                    </p>
                </div>

                <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">
                        Our Values
                    </h2>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                            <span>Unwavering Commitment to Safety</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                            <span>Excellence in Service</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                            <span>Innovation & Adaptation</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                            <span>Customer-First Approach</span>
                        </li>
                    </ul>
                </div>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-secondary/30 p-12 rounded-2xl"
            >
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Why Choose Durga Fire Control?
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <WhyChooseUsItem
                        icon={ShieldCheck}
                        title="Industry Expertise"
                        description="Three decades of excellence in fire safety assessment, installation, and maintenance."
                    />
                    <WhyChooseUsItem
                        icon={PackageCheck}
                        title="Premium Solutions"
                        description="Curated selection of internationally certified fire safety equipment."
                    />
                    <WhyChooseUsItem
                        icon={Zap}
                        title="End-to-End Service"
                        description="Comprehensive solutions from initial consultation to ongoing support."
                    />
                    <WhyChooseUsItem
                        icon={Users}
                        title="Dedicated Support"
                        description="Round-the-clock assistance from our experienced professional team."
                    />
                </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6"
            >
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Partner with Excellence
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Join the countless businesses and institutions that
                        trust Durga Fire Control for their fire safety needs.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="text-base">
                        <Link href="/contact">Schedule a Consultation</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="text-base"
                    >
                        <Link href="/catalog">Explore Our Solutions</Link>
                    </Button>
                </div>
            </motion.section>
        </div>
    )
}
