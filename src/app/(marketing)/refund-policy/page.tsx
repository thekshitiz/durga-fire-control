'use client';

import { motion } from 'framer-motion';

export default function RefundPolicy() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-8">Refund & Return Policy</h1>
                
                <p className="text-muted-foreground mb-8">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
                    <p>
                        At Durga Fire Control, we stand behind the quality of our products and services. This refund policy outlines Durga Fire Control&apos;s procedures
                        and conditions for refunds on our products and services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Product Returns</h2>
                    <h3 className="text-xl font-medium mb-3">2.1 Eligible Products</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Unused fire safety equipment in original packaging</li>
                        <li>Products with manufacturing defects</li>
                        <li>Incorrect items received</li>
                        <li>Damaged products (reported within 24 hours of delivery)</li>
                    </ul>

                    <h3 className="text-xl font-medium mb-3">2.2 Return Period</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>7 days from the date of delivery for unused products</li>
                        <li>15 days for manufacturing defects</li>
                        <li>24 hours for shipping damage claims</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Non-Returnable Items</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Used or installed equipment</li>
                        <li>Custom-ordered products</li>
                        <li>Products with removed or damaged safety seals</li>
                        <li>Consumable items (once opened)</li>
                        <li>Services already rendered</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Refund Process</h2>
                    <ol className="list-decimal pl-6 mb-4">
                        <li className="mb-2">Contact our customer service team</li>
                        <li className="mb-2">Obtain a Return Merchandise Authorization (RMA) number</li>
                        <li className="mb-2">Return the product with original packaging and documentation</li>
                        <li className="mb-2">Quality inspection by our technical team</li>
                        <li className="mb-2">Refund processing (7-14 business days)</li>
                    </ol>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Refund Methods</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Original payment method reversal</li>
                        <li>Bank transfer (for cash payments)</li>
                        <li>Store credit (optional)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. Service Cancellations</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Installation services: Full refund if cancelled 24 hours before scheduled time</li>
                        <li>AMC contracts: Pro-rated refund minus service rendered</li>
                        <li>Training programs: 50% refund if cancelled 48 hours prior</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">7. Shipping Costs</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Return shipping costs borne by customer for non-defective returns</li>
                        <li>Company covers shipping for defective products</li>
                        <li>Original shipping charges non-refundable unless error on our part</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                    <p>
                        For refund requests or questions about this policy, please contact:
                    </p>
                    <ul className="list-none pl-6 mb-4">
                        <li>Email: returns@durgafirecontrol.com</li>
                        <li>Phone: +977-1-1234567</li>
                        <li>Address: Thulo Kharibot, New Baneshwor, Kathmandu, Nepal</li>
                    </ul>
                </section>
            </motion.div>
        </div>
    );
} 