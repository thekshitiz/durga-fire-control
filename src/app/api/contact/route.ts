import { NextResponse } from 'next/server'
import { emailService } from '@/lib/email'
import { z } from 'zod'
import {
    getServiceInquiryTemplate,
    getProductInquiryTemplate,
    getQuoteRequestTemplate,
    getSupportRequestTemplate,
    getGeneralInquiryTemplate,
} from '@/lib/email-templates'

// Cache the validation schema
const contactSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters').trim(),
    lastName: z.string().min(2, 'Last name must be at least 2 characters').trim(),
    email: z.string().email('Please enter a valid email address').toLowerCase().trim(),
    phone: z.string().regex(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        'Please enter a valid phone number'
    ).trim(),
    enquiryType: z.enum([
        'service',
        'product',
        'quote',
        'support',
        'partnership',
        'other'
    ], {
        errorMap: () => ({ message: 'Please select a valid inquiry type' })
    }),
    customSubject: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters').trim(),
})

// Template mapping for better performance
const TEMPLATE_MAP = {
    service: getServiceInquiryTemplate,
    product: getProductInquiryTemplate,
    quote: getQuoteRequestTemplate,
    support: getSupportRequestTemplate,
    other: getGeneralInquiryTemplate,
    partnership: getGeneralInquiryTemplate,
} as const;

export async function POST(request: Request) {
    try {
        // Parse JSON with error handling
        let body;
        try {
            body = await request.json()
        } catch (e) {
            return NextResponse.json(
                { error: 'Invalid JSON payload' },
                { status: 400 }
            )
        }
        
        // Validate the request body
        const validatedData = contactSchema.parse(body)

        // Get template function from map
        const getTemplate = TEMPLATE_MAP[validatedData.enquiryType]
        const template = getTemplate(validatedData)

        // Send the email with proper subject formatting
        const success = await emailService.sendEmail({
            to: process.env.CONTACT_EMAIL || 'contact@durgafirecontrol.com',
            subject: `[${validatedData.enquiryType.toUpperCase()}] New Inquiry from ${validatedData.firstName} ${validatedData.lastName}`,
            text: template.text,
            html: template.html,
        })

        if (!success) {
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Invalid form data', details: error.errors },
                { status: 400 }
            )
        }

        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
