'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
    ShieldCheck,
    Zap,
    PackageCheck,
    Users,
    Clock,
    Star,
    Award,
    ArrowRight,
    FlameKindling,
} from 'lucide-react'
import { WhyChooseUsItem } from '@/components/about/why-choose-us-item'

// Animation variants
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

const timelineItems = [
    {
        year: '1995',
        title: 'Our Beginning',
        description:
            'Founded with a vision to revolutionize fire safety in Nepal.',
        icon: FlameKindling,
    },
    {
        year: '2005',
        title: 'Market Leadership',
        description:
            'Became the leading provider of fire safety solutions in Kathmandu.',
        icon: Star,
    },
    {
        year: '2015',
        title: 'National Recognition',
        description:
            'Expanded operations nationwide, serving major institutions.',
        icon: Award,
    },
    {
        year: '2025',
        title: 'Innovation Hub',
        description:
            'Pioneering smart fire safety solutions for the digital age.',
        icon: Clock,
    },
]

const leadershipTeam = [
    {
        name: 'Rajesh Kumar',
        position: 'Chief Executive Officer',
        image: '/team/ceo.jpg',
        bio: 'With over 25 years of experience in fire safety, Rajesh leads our mission to protect lives and properties across Nepal.',
    },
    {
        name: 'Priya Sharma',
        position: 'Technical Director',
        image: '/team/technical-director.jpg',
        bio: 'An expert in fire safety systems with international certifications, ensuring the highest standards in all our installations.',
    },
    {
        name: 'Arun Thapa',
        position: 'Operations Head',
        image: '/team/operations-head.jpg',
        bio: 'Leading our service teams to deliver excellence in installation and maintenance across the country.',
    },
]

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
                    Protecting Lives Since 1995
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    At Durga Fire Control, we don't just sell fire safety
                    equipment – we provide peace of mind. For over 25 years,
                    we've been the trusted guardian of Nepal's homes,
                    businesses, and communities.
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

            {/* Timeline Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-12"
            >
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Journey of Growth
                </h2>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

                    {/* Timeline items */}
                    <div className="space-y-16">
                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -50 : 50,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                className={`flex items-center ${
                                    index % 2 === 0 ? 'flex-row-reverse' : ''
                                }`}
                            >
                                <div className="w-1/2 px-6">
                                    <div
                                        className={`bg-card p-6 rounded-xl border shadow-sm ${
                                            index % 2 === 0
                                                ? 'text-right'
                                                : 'text-left'
                                        }`}
                                    >
                                        <span className="text-primary font-bold text-xl">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                                    <item.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Leadership Team Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-12"
            >
                <h2 className="text-3xl font-bold text-center mb-12">
                    Meet Our Leadership
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leadershipTeam.map((member) => (
                        <motion.div
                            key={member.name}
                            whileHover={{ y: -5 }}
                            className="bg-card rounded-xl overflow-hidden border shadow-sm"
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-medium mt-1">
                                    {member.position}
                                </p>
                                <p className="text-muted-foreground mt-3">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

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

            {/* Enhanced Call to Action Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 bg-primary/5 rounded-3xl p-12"
            >
                <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Let's Protect What Matters Most
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Every minute counts when it comes to fire safety. Join
                        the thousands of businesses and families who trust Durga
                        Fire Control to protect their most valuable assets.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="text-base">
                        <Link href="/contact">
                            Schedule a Free Safety Assessment{' '}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="text-base"
                    >
                        <Link href="/catalog">Browse Our Safety Solutions</Link>
                    </Button>
                </div>
            </motion.section>
        </div>
    )
}
