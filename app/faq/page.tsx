'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const faqCategories = [
    {
        title: "Product Information",
        icon: "🔥",
        questions: [
            {
                question: "What types of fire safety equipment do you sell?",
                answer: "We sell fire extinguishers, smoke detectors, fire alarms, fire blankets, hose reels, sprinkler systems, safety signs, and more."
            },
            {
                question: "What's the difference between fire extinguisher types (A, B, C, D, K)?",
                answer: "Each type targets a specific fire class:\n- A: Paper, wood\n- B: Flammable liquids\n- C: Gases\n- D: Metals\n- K: Cooking oils"
            },
            {
                question: "Do you offer multi-purpose fire extinguishers?",
                answer: "Yes, we offer ABC-rated extinguishers that work on Class A, B, and C fires, ideal for general use."
            },
            {
                question: "Are your products certified?",
                answer: "All products are certified under ISI, BIS, CE, and UL standards, ensuring safety and compliance."
            },
            {
                question: "Do you have eco-friendly options?",
                answer: "Yes, we carry water mist and clean agent extinguishers that are non-toxic and environmentally safe."
            },
            // ... add remaining product information questions
        ]
    },
    {
        title: "Orders & Shipping",
        icon: "🛒",
        questions: [
            {
                question: "Do you offer bulk order discounts?",
                answer: "Yes. Discounts apply for orders of 10 or more units. Contact sales for custom pricing."
            },
            {
                question: "How long does delivery take?",
                answer: "Standard shipping is 3–7 business days. Express options are available at checkout."
            },
            {
                question: "Can I track my order?",
                answer: "Yes, tracking details are sent via email/SMS once your order ships."
            },
            // ... add remaining shipping questions
        ]
    },
    {
        title: "Installation & Maintenance",
        icon: "🧯",
        questions: [
            {
                question: "Do you offer installation services?",
                answer: "Yes, professional installation is available in most cities. Schedule it during checkout or via support."
            },
            {
                question: "How often should extinguishers be serviced?",
                answer: "Basic inspections: monthly. Professional servicing: annually or as per local regulations."
            },
            {
                question: "Do you offer Annual Maintenance Contracts (AMC)?",
                answer: "Yes! We provide AMC plans for residential, commercial, and industrial clients."
            },
            // ... add remaining maintenance questions
        ]
    }
]

export default function FAQPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Frequently Asked Questions
                </h1>
                <p className="text-lg text-muted-foreground">
                    Find answers to common questions about our products and services
                </p>
            </motion.div>

            {faqCategories.map((category, categoryIndex) => (
                <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-6">
                        {category.icon} {category.title}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`${categoryIndex}-${index}`}
                                className="bg-card border rounded-lg px-6"
                            >
                                <AccordionTrigger className="text-left text-lg font-medium py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6 whitespace-pre-line">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            ))}
        </div>
    )
}