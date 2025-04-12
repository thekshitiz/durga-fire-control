import { HeroSection } from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Shield, Users, Trophy, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'All our products meet international safety standards and certifications.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Highly trained professionals with years of industry experience.'
  },
  {
    icon: Trophy,
    title: 'Industry Leader',
    description: 'Trusted by top businesses across Nepal for over 25 years.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock emergency support and maintenance services.'
  }
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose Durga Fire Control?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Leading the industry with innovation, quality, and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card text-card-foreground"
              >
                <feature.icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Enhance Your Fire Safety?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts are ready to help you create a comprehensive fire safety solution.
          </p>
          <Button size="lg" variant="secondary" className="text-red-600">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}