'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                
                <p className="text-muted-foreground mb-8">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                    <p>
                        Durga Fire Control (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data in accordance with Nepal&apos;s privacy laws and international best practices. This Privacy Policy describes how your personal information is collected,
                        used, and shared when you visit or make a purchase from Durga Fire Control&apos;s
                        website (&ldquo;the Site&rdquo;).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Contact information (name, email, phone number, address)</li>
                        <li>Business information for commercial clients</li>
                        <li>Service history and preferences</li>
                        <li>Payment information</li>
                        <li>Technical data (IP address, browser type, device information)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>To provide and maintain our services</li>
                        <li>To process and fulfill orders</li>
                        <li>To send service notifications and updates</li>
                        <li>To improve our products and services</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
                    <p>
                        We do not sell or rent your personal information to third parties. We may share your information with:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Service providers who assist in our operations</li>
                        <li>Law enforcement when required by law</li>
                        <li>Professional advisers (lawyers, auditors, etc.)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures comply with Nepal&apos;s data protection requirements.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                    <p>Under Nepali law, you have the right to:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your information</li>
                        <li>Object to processing of your information</li>
                        <li>Withdraw consent</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                    <p>
                        For any questions about this privacy policy or our privacy practices, please contact us at:
                    </p>
                    <ul className="list-none pl-6 mb-4">
                        <li>Email: privacy@durgafirecontrol.com</li>
                        <li>Phone: +977-1-1234567</li>
                        <li>Address: Thulo Kharibot, New Baneshwor, Kathmandu, Nepal</li>
                    </ul>
                </section>
            </motion.div>
        </div>
    );
} 