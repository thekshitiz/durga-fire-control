import { Flame } from 'lucide-react';

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
              <li><a href="/about-company" className="hover:text-primary">About Company</a></li>
              <li><a href="/catalog" className="hover:text-primary">Products</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Safety Street</li>
              <li>Mumbai, Maharashtra</li>
              <li>India - 400001</li>
              <li>Tel: +91 22 1234 5678</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Durga Fire Control and Suppliers Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}