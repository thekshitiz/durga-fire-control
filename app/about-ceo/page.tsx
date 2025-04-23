'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { AwardIcon, TargetIcon, UsersIcon, BookOpenIcon } from "lucide-react";

export default function AboutCEO() {
    const achievements = [
        {
            Icon: UsersIcon,
            title: "Leadership",
            description: "Built and leads a dedicated team of fire safety professionals"
        },
        {
            Icon: AwardIcon,
            title: "Experience",
            description: "25+ years of expertise in fire safety and protection"
        },
        {
            Icon: TargetIcon,
            title: "Vision",
            description: "Pioneering innovative fire safety solutions across Nepal"
        },
        {
            Icon: BookOpenIcon,
            title: "Knowledge",
            description: "Industry-recognized expertise and certifications"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                        <Image
                            src="/about-ceo/kamal_ojha.jpg"
                            alt="Kamal Ojha - CEO"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Kamal Ojha</h1>
                        <p className="text-primary text-xl font-semibold mb-6">
                            Chief Executive Officer
                        </p>
                        <div className="prose max-w-none text-muted-foreground">
                            <p className="text-lg mb-4">
                                With over 25 years of experience in fire safety, Kamal Ojha
                                has been instrumental in establishing Durga Fire Control as
                                a leading provider of fire safety solutions in Nepal.
                            </p>
                            <p className="text-lg mb-4">
                                Under his visionary leadership, the company has expanded its
                                operations nationwide, serving major institutions and
                                pioneering innovative approaches to fire safety and protection.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Leadership & Achievements
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((item, index) => {
                            const Icon = item.Icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-card p-6 rounded-xl border shadow-sm"
                                >
                                    <Icon className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 text-center bg-primary/5 rounded-3xl p-12"
                >
                    <h2 className="text-3xl font-bold mb-6">Our Vision Forward</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        "My commitment is to continue innovating and expanding our services,
                        ensuring that every business and household in Nepal has access to
                        the best fire safety solutions. Together, we're building a safer
                        future for all."
                    </p>
                    <p className="text-primary font-semibold mt-4">- Kamal Ojha</p>
                </motion.div>
            </motion.div>
        </div>
    );
}
