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
    Loader2,
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

const inquiryTypes = [
    { value: 'service', label: 'Service Inquiry' },
    { value: 'product', label: 'Product Inquiry' },
    { value: 'quote', label: 'Quote Request' },
    { value: 'support', label: 'Support Request' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'other', label: 'Other' },
] as const

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
    enquiryType: z.enum(['service', 'product', 'quote', 'support', 'partnership', 'other'], {
        errorMap: () => ({ message: 'Please select a valid inquiry type' })
    }),
    customSubject: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showCustomSubject, setShowCustomSubject] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            enquiryType: undefined,
            customSubject: '',
            message: '',
        },
    })

    const handleSubmit = async (data: FormValues) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
    
            const text = await response.text()
            let result
            try {
                result = text ? JSON.parse(text) : {}
            } catch (e) {
                console.error('Failed to parse server response:', e)
                throw new Error('Invalid response from server')
            }
    
            if (!response.ok) {
                if (result.details) {
                    // Handle validation errors from the server
                    result.details.forEach((error: { path: string[]; message: string }) => {
                        form.setError(error.path[0] as keyof FormValues, {
                            type: 'server',
                            message: error.message,
                        })
                    })
                }
                throw new Error(result.error || 'Failed to send message')
            }
    
            toast.success("Message sent successfully! We&apos;ll get back to you soon.", {
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
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Let&apos;s Start a Conversation
                </h1>
                <p className="text-lg text-muted-foreground">
                    Whether you need fire safety solutions, technical support,
                    or want to explore partnership opportunities - we&apos;re ready
                    to help you every step of the way.
                </p>
            </motion.div>

            {/* Main Content */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Contact Form */}
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
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="First Name"
                                                        {...field}
                                                        disabled={isSubmitting}
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
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Last Name"
                                                        {...field}
                                                        disabled={isSubmitting}
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
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="Email Address"
                                                        {...field}
                                                        disabled={isSubmitting}
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
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="tel"
                                                        placeholder="Phone Number"
                                                        {...field}
                                                        disabled={isSubmitting}
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
                                            <FormLabel>Inquiry Type</FormLabel>
                                            <FormControl>
                                                <Select
                                                    value={field.value}
                                                    onValueChange={(value) => {
                                                        field.onChange(value);
                                                        setShowCustomSubject(value === 'other');
                                                    }}
                                                    disabled={isSubmitting}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select inquiry type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {inquiryTypes.map((type) => (
                                                            <SelectItem 
                                                                key={type.value} 
                                                                value={type.value}
                                                            >
                                                                {type.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
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
                                                <FormLabel>Custom Subject</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter subject"
                                                        {...field}
                                                        disabled={isSubmitting}
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
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Your Message"
                                                    className="min-h-[150px]"
                                                    {...field}
                                                    disabled={isSubmitting}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:col-span-5"
                >
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="bg-card p-6 rounded-xl border">
                            <h2 className="text-xl font-semibold mb-4">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Address</h3>
                                        <p className="text-muted-foreground">
                                            Thulo Kharibot, New Baneshwor
                                            <br />
                                            Kathmandu, Nepal
                                        </p>
                                        <a
                                            href="https://www.google.com/maps?q=Thulo+Kharibot+,+New+Baneshwor+Kathmandu,+Nepal"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-primary hover:underline mt-1 inline-block"
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <a
                                            href="tel:+97711234567"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +977 1-1234567
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <a
                                            href="mailto:info@durgafirecontrol.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            info@durgafirecontrol.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Business Hours</h3>
                                        <p className="text-muted-foreground">
                                            Monday - Friday: 9:00 AM - 6:00 PM
                                            <br />
                                            Saturday: 9:00 AM - 2:00 PM
                                            <br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="bg-card rounded-xl border overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8767235499095!2d85.34027137575298!3d27.690204776192385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19fba8c7e259%3A0x3391e319b117599d!2sThulo%20Kharibot!5e0!3m2!1sen!2snp!4v1747459794813!5m2!1sen!2snp"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 