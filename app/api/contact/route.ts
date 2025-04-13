import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.error('Missing email configuration')
        return NextResponse.json(
            { error: 'Email service not configured' },
            { status: 500 }
        )
    }

    try {
        const body = await request.json()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        const {
            firstName,
            lastName,
            email,
            phone,
            enquiryType,
            customSubject,
            message,
        } = body
        const subject =
            enquiryType === 'other'
                ? customSubject
                : `${enquiryType.charAt(0).toUpperCase() + enquiryType.slice(1)} Inquiry from ${firstName} ${lastName}`

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: subject,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                    <h1 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">New Contact Form Submission</h1>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; width: 120px;"><strong>Name:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #007bff; text-decoration: none;">${phone}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Inquiry Type:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${enquiryType.charAt(0).toUpperCase() + enquiryType.slice(1)}</td>
                        </tr>
                    </table>

                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 20px;">
                        <h2 style="color: #333; margin-top: 0; font-size: 18px;">Message:</h2>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 0; white-space: pre-wrap;">${message}</p>
                    </div>

                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
                        <p>This email was sent from your website's contact form. You can reply directly to this email to respond to ${firstName}.</p>
                    </div>
                </div>
            `,
        }

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error)
                    reject(error)
                } else {
                    console.log('Email sent successfully:', info.response)
                    resolve(info)
                }
            })
        })

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
