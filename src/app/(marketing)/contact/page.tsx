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
                                                        placeholder="Custom Subject"
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
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        'Sending...'
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:col-span-5"
                >
                    <div className="space-y-8">
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
                                            123 Fire Safety Street, Kathmandu, Nepal
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-muted-foreground">
                                            +977 1-1234567
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-muted-foreground">
                                            info@durgafirecontrol.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Business Hours</h3>
                                        <p className="text-muted-foreground">
                                            Mon - Fri: 9:00 AM - 6:00 PM
                                            <br />
                                            Sat: 9:00 AM - 1:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 