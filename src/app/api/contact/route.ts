import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    // Check for email configuration
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.error('Missing email configuration')
        return NextResponse.json(
            { error: 'Email service not configured' },
            { status: 500 }
        )
    }

    try {
        const body = await request.json()

        // Create email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        // Destructure form data
        const {
            firstName,
            lastName,
            email,
            phone,
            enquiryType,
            customSubject,
            message,
        } = body

        // Configure email subject
        const subject =
            enquiryType === 'other'
                ? customSubject
                : `${enquiryType.charAt(0).toUpperCase() + enquiryType.slice(1)} Inquiry from ${firstName} ${lastName}`

        // Configure email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: subject,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Inquiry Type:</strong> ${enquiryType}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </div>
            `,
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Failed to send email:', error)
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        )
    }
}
