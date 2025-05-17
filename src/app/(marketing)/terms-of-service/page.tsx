'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                
                <p className="text-muted-foreground mb-8">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                    <p>
                        By accessing and using Durga Fire Control&apos;s website and services,
                        you agree to be bound by these terms. If you don&apos;t agree with
                        any part of these terms, you may not use our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Products and Services</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>All products comply with Nepal&apos;s fire safety standards and regulations</li>
                        <li>Product specifications and prices are subject to change without notice</li>
                        <li>Installation services are provided by certified professionals</li>
                        <li>Regular maintenance is required as per manufacturer guidelines</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Payment must be made in full before product delivery or service completion</li>
                        <li>We accept bank transfers, cash, and approved purchase orders</li>
                        <li>For large orders, installment payments may be arranged</li>
                        <li>All prices are in Nepali Rupees (NPR)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Warranty and Returns</h2>
                    <p>
                        Our products come with manufacturer warranties as per Nepal&apos;s consumer protection laws. Specific warranty terms vary by product type and are provided at the time of purchase.
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Manufacturing defects are covered under warranty</li>
                        <li>Improper use or modification voids warranty</li>
                        <li>Returns must be initiated within 7 days of purchase</li>
                        <li>Products must be unused and in original packaging</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Service Agreements</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Annual Maintenance Contracts (AMC) terms are binding for the specified period</li>
                        <li>Emergency services are available 24/7</li>
                        <li>Service schedules must be followed for warranty validity</li>
                        <li>Cancellation requires 30 days notice</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. Liability</h2>
                    <p>
                        While we ensure the highest quality of products and services, our liability is limited to:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Product replacement under warranty terms</li>
                        <li>Service rectification for installation issues</li>
                        <li>Compliance with Nepal&apos;s consumer protection laws</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>
                    <p>
                        Any disputes will be resolved through:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Direct negotiation</li>
                        <li>Mediation under Nepali law</li>
                        <li>Legal proceedings in Kathmandu courts</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                    <p>
                        For questions about these terms, please contact us at:
                    </p>
                    <ul className="list-none pl-6 mb-4">
                        <li>Email: legal@durgafirecontrol.com</li>
                        <li>Phone: +977-1-1234567</li>
                        <li>Address: Thulo Kharibot, New Baneshwor, Kathmandu, Nepal</li>
                    </ul>
                </section>
            </motion.div>
        </div>
    );
} 