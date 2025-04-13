import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        const subject =
            data.enquiryType === 'other'
                ? data.customSubject
                : `New ${data.enquiryType} Inquiry from ${data.firstName} ${data.lastName}`

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'info@durgafirecontrol.com',
            replyTo: data.email,
            subject: subject,
            text: `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Enquiry Type: ${data.enquiryType}
${data.customSubject ? `Custom Subject: ${data.customSubject}\n` : ''}

Message:
${data.message}
            `,
            html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">New Contact Form Submission</h2>
    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td>
        </tr>
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Enquiry Type:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.enquiryType}</td>
        </tr>
        ${
            data.customSubject
                ? `
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Custom Subject:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.customSubject}</td>
        </tr>
        `
                : ''
        }
    </table>
    <div style="margin-top: 20px;">
        <h3 style="color: #333;">Message:</h3>
        <p style="white-space: pre-line; background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message}</p>
    </div>
</div>
            `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        )
    }
}
