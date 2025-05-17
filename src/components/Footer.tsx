import { Flame } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flame className="h-6 w-6 text-red-600" />
              <span className="font-bold text-lg">Durga Fire Control</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading provider of fire safety equipment and solutions since 1995.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary">Products</Link></li>
              <li><Link href="/#services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/about-company" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/about-ceo" className="hover:text-primary">About CEO</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="hover:text-primary">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Thulo Kharibot, New Baneshwor</li>
              <li>Kathmandu, Bagmati</li>
              <li>Nepal - 44600</li>
              <li>Tel: +977-1-1234567</li>
              <li>Email: info@durgafirecontrol.com</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <ul className="space-y-1 text-sm">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Durga Fire Control and Suppliers Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}