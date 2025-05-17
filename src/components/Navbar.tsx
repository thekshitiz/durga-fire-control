"use client";

import { useState, useEffect } from "react";
import { ContactModal } from "@/components/ContactModal";
import Link from "next/link";
import { Flame, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Products", href: "/products" },
  // { name: "FAQ", href: "/faq" },

];

const aboutItems = [
  { href: "/about-company", label: "About Us" },
  { href: "/about-ceo", label: "About CEO" },
];

const ContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="default"
        className="bg-red-600 hover:bg-red-700 text-white relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <span className="flex items-center gap-2">
          Contact
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </span>
      </Button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const NavDropdown = () => {
  return (
    <div className="group relative">
      <button className="relative text-foreground/80 group-hover:text-foreground transition-colors py-2 flex items-center gap-1">
        About 
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
      </button>

      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-md py-1 min-w-[160px]">
          {aboutItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-red-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/80 border-b",
        "transition-all duration-300"
      )}
      style={{ 
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Flame className="h-8 w-8 text-red-600" />
              <span className="font-bold text-xl">Durga Fire Control</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground/80 hover:text-foreground transition-colors group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
              </Link>
            ))}
            <NavDropdown />
            <ContactButton />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background/80 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile About Menu Items */}
              <div className="px-3 py-2 text-base font-medium text-foreground/80">
                About
              </div>
              {aboutItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <ContactButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
