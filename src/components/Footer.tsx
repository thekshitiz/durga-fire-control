'use client';

import { Flame } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Footer() {
  return (
    <footer className="bg-background border-t relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none" />
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center space-x-2">
              <Flame className="h-6 w-6 text-red-600" />
              <span className="font-bold text-lg">Durga Fire Control</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading provider of fire safety equipment and solutions since 1995.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", text: "Home" },
                { href: "/products", text: "Products" },
                { href: "/#services", text: "Services" },
                { href: "/about-company", text: "About Us" },
                { href: "/about-ceo", text: "About CEO" },
                { href: "/contact", text: "Contact Us" },
                { href: "/faq", text: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative inline-block group"
                  >
                    <span className="relative inline-block text-foreground/80 hover:text-foreground transition-colors">
                      {link.text}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/privacy-policy", text: "Privacy Policy" },
                { href: "/terms-of-service", text: "Terms of Service" },
                { href: "/refund-policy", text: "Refund Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative inline-block group"
                  >
                    <span className="relative inline-block text-foreground/80 hover:text-foreground transition-colors">
                      {link.text}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground/80">Thulo Kharibot, New Baneshwor</li>
              <li className="text-foreground/80">Kathmandu, Bagmati</li>
              <li className="text-foreground/80">Nepal - 44600</li>
              <li>
                <a href="tel:+977-1-1234567" className="relative inline-block group">
                  <span className="relative inline-block text-foreground/80 hover:text-foreground transition-colors">
                    Tel: +977-1-1234567
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@durgafirecontrol.com" className="relative inline-block group">
                  <span className="relative inline-block text-foreground/80 hover:text-foreground transition-colors">
                    Email: info@durgafirecontrol.com
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
                  </span>
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <ul className="space-y-1 text-sm text-foreground/80">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Durga Fire Control and Suppliers Pvt. Ltd. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
}