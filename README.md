# Durga Fire Control Website

This is the official website for Durga Fire Control, built with Next.js, TypeScript, and Tailwind CSS.

## Environment Variables Setup

The application requires certain environment variables to be set for the contact form email functionality. Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password

# Contact Form Configuration
CONTACT_EMAIL=contact@durgafirecontrol.com
```

### Gmail Setup Instructions

If using Gmail as your SMTP provider:

1. Enable 2-Step Verification:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled

2. Generate App Password:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Use the generated 16-character password as your `SMTP_PASSWORD`

### Alternative Email Providers

You can use any SMTP provider by updating the following variables:
- `SMTP_HOST`: Your provider's SMTP host
- `SMTP_PORT`: SMTP port (usually 587 for TLS or 465 for SSL)
- `SMTP_USER`: Your email username/address
- `SMTP_PASSWORD`: Your email password or app-specific password

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env.local` with the required environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Production Deployment

1. Set up environment variables on your hosting platform
2. Build and deploy:
   ```bash
   npm run build
   npm start
   ```

## Contact Form Configuration

The contact form is configured to:
- Use connection pooling for better performance
- Handle multiple inquiry types
- Send professionally formatted emails
- Include proper error handling
- Validate input data

## Security Notes

- Never commit `.env.local` to version control
- Always use app-specific passwords instead of main account passwords
- Regularly rotate email credentials
- Monitor email sending limits of your provider 