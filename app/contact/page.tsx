'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        enquiryType: '',
        message: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Add your form submission logic here
        console.log(formData)
    }

    return (
        <div className="container mx-auto px-4 py-16 md:py-20">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Get In Touch
                </h1>
                <p className="text-lg text-muted-foreground">
                    We're here to help with any questions or concerns you may
                    have. Contact us via the form below and a member of our team
                    will get back to you promptly.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-12 items-start">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:col-span-7 bg-card p-8 rounded-lg shadow-sm"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        firstName: e.target.value,
                                    })
                                }
                                required
                            />
                            <Input
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        lastName: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                required
                            />
                            <Input
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phone: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <Select
                            onValueChange={(value) =>
                                setFormData({
                                    ...formData,
                                    enquiryType: value,
                                })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Enquiry Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="general">
                                    General Inquiry
                                </SelectItem>
                                <SelectItem value="sales">
                                    Sales Inquiry
                                </SelectItem>
                                <SelectItem value="support">
                                    Technical Support
                                </SelectItem>
                                <SelectItem value="partnership">
                                    Partnership
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Textarea
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            required
                            className="min-h-[150px]"
                        />
                        <Button type="submit" className="w-full">
                            Submit Enquiry
                        </Button>
                    </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:col-span-5 space-y-8"
                >
                    <div className="bg-card p-6 rounded-lg shadow-sm">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        Call Us
                                    </h3>
                                    <p className="text-muted-foreground">
                                        +977-9800000000
                                    </p>
                                    <p className="text-muted-foreground">
                                        +977-01-4000000
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        Email Us
                                    </h3>
                                    <p className="text-muted-foreground">
                                        info@durgafirecontrol.com
                                    </p>
                                    <p className="text-muted-foreground">
                                        support@durgafirecontrol.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        Visit Us
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Kbot
                                    </p>
                                    <p className="text-muted-foreground">
                                        Kathmandu, Bagmati
                                    </p>
                                    <p className="text-muted-foreground">
                                        Nepal - 44600
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-card rounded-lg shadow-sm overflow-hidden"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2400670687723!2d85.3103!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTgnMzcuMSJF!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
