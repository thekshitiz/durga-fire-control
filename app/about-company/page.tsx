import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Zap, PackageCheck, Users } from 'lucide-react'
import { WhyChooseUsItem } from '@/components/about/why-choose-us-item'

export default function AboutCompany() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            {/* Hero Section */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-primary">
                About Durga Fire Control
            </h1>

            {/* Introduction Section */}
            <section className="mb-12 md:mb-16">
                <p className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto">
                    Welcome to Durga Fire Control, your trusted partner in fire
                    safety and protection since 1995. We are dedicated to
                    safeguarding lives and property through comprehensive fire
                    safety solutions for businesses, industries, and homes
                    across Nepal.
                </p>
            </section>

            {/* Grid for Mission, History, Values */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
                        Our Mission
                    </h2>
                    <p className="text-muted-foreground">
                        To be the leading provider of reliable and innovative
                        fire safety solutions, ensuring the highest standards of
                        protection and peace of mind for our clients through
                        quality products and exceptional service.
                    </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
                        Our History
                    </h2>
                    <p className="text-muted-foreground">
                        Founded in 1995, Durga Fire Control has grown from a
                        small supplier to a recognized leader in the fire safety
                        industry. Our commitment to quality and customer
                        satisfaction has been the cornerstone of our success for
                        nearly three decades.
                    </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
                        Our Values
                    </h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Safety First</li>
                        <li>Integrity & Trust</li>
                        <li>Customer Focus</li>
                        <li>Quality & Reliability</li>
                        <li>Continuous Improvement</li>
                    </ul>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <section className="mb-12 md:mb-16 bg-secondary/50 p-8 rounded-lg">
                <h2 className="text-3xl font-semibold mb-6 text-center">
                    Why Choose Durga Fire Control?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <WhyChooseUsItem
                        icon={ShieldCheck}
                        title="Expertise"
                        description="Decades of experience in fire safety assessment, installation, and maintenance."
                    />
                    <WhyChooseUsItem
                        icon={PackageCheck}
                        title="Quality Products"
                        description="Offering a wide range of certified and reliable fire safety equipment."
                    />
                    <WhyChooseUsItem
                        icon={Zap}
                        title="Comprehensive Solutions"
                        description="From consultation to after-sales support, we cover all your fire safety needs."
                    />
                    <WhyChooseUsItem
                        icon={Users}
                        title="Customer Support"
                        description="Dedicated team ready to assist you with prompt and professional service."
                    />
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Secure Your Safety Today
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Don't wait for an emergency. Contact us for a consultation
                    or explore our range of fire safety products.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/catalog">View Products</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
