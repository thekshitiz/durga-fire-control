'use client'

import { motion } from 'framer-motion'
import {
    Mail,
    MapPin,
    Phone,
    Clock,
    CheckCircle,
    Send,
    AlertCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z
        .string()
        .regex(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            'Please enter a valid phone number'
        ),
    enquiryType: z.string().min(1, 'Please select an enquiry type'),
    customSubject: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showCustomSubject, setShowCustomSubject] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            enquiryType: '',
            customSubject: '',
            message: '',
        },
    })

    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
    
            // Check if response is empty
            const text = await response.text()
            let result
            try {
                result = text ? JSON.parse(text) : {}
            } catch (e) {
                throw new Error('Invalid response from server')
            }
    
            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message')
            }
    
            toast.success("Message sent successfully! We'll get back to you soon.", {
                icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                duration: 5000,
                className: 'bg-background border-border',
            })
            form.reset()
            setShowCustomSubject(false)
        } catch (error: any) {
            toast.error(error.message || 'Failed to send message. Please try again.', {
                icon: <AlertCircle className="h-5 w-5 text-red-500" />,
                duration: 5000,
                className: 'bg-background border-border',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-16 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Let's Start a Conversation
                </h1>
                <p className="text-lg text-muted-foreground">
                    Whether you need fire safety solutions, technical support,
                    or just want to learn more about our services - we're ready
                    to help you every step of the way.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:col-span-7"
                >
                    <div className="bg-card p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] backdrop-blur-sm border border-muted/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(handleSubmit)}
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        placeholder="First Name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Last Name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="Email Address"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type="tel"
                                                        placeholder="Phone Number"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="enquiryType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select
                                                onValueChange={(value) => {
                                                    field.onChange(value)
                                                    setShowCustomSubject(
                                                        value === 'other'
                                                    )
                                                }}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Enquiry Type" />
                                                    </SelectTrigger>
                                                </FormControl>
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
                                                    <SelectItem value="other">
                                                        Other
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {showCustomSubject && (
                                    <FormField
                                        control={form.control}
                                        name="customSubject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your subject"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Your Message"
                                                    className="min-h-[150px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full relative group"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex items-center justify-center space-x-2"
                                        >
                                            <span className="loading loading-spinner loading-sm"></span>
                                            <span>Sending...</span>
                                        </motion.div>
                                    ) : (
                                        <span className="flex items-center justify-center space-x-2">
                                            <span>Send Message</span>
                                            <Send className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:col-span-5 space-y-8"
                >
                    <div className="bg-card p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] backdrop-blur-sm border border-muted/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
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
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
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
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
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
                </motion.div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="col-span-full mt-12"
                >
                    <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
                        Find Us Here
                    </h2>
                    <div className="relative overflow-hidden rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-muted/50">
                        <div className="absolute top-4 left-4 z-10 bg-background/95 px-4 py-2 rounded-lg backdrop-blur-sm border border-muted/50">
                            <h3 className="font-semibold">Our Location</h3>
                            <p className="text-sm text-muted-foreground">
                                Kbot, Kathmandu
                            </p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2400670687723!2d85.3103!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTgnMzcuMSJF!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale hover:grayscale-0 transition-all duration-300"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
