import nodemailer from 'nodemailer';

export type EmailConfig = {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  pool?: boolean;
  maxConnections?: number;
  maxMessages?: number;
};

export type EmailData = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

class EmailService {
  private transporter: nodemailer.Transporter;
  private defaultFrom: string;
  private isInitialized: boolean = false;
  private initPromise: Promise<void> | null = null;

  constructor(config: EmailConfig, defaultFrom: string) {
    this.transporter = nodemailer.createTransport({
      ...config,
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      rateDelta: 1000,
      rateLimit: 10,
      connectionTimeout: 3000,
      socketTimeout: 5000,
      tls: {
        rejectUnauthorized: true,
        minVersion: 'TLSv1.2'
      }
    });
    this.defaultFrom = defaultFrom;
  }

  private async initialize(): Promise<void> {
    if (!this.initPromise) {
      this.initPromise = (async () => {
        if (!this.isInitialized) {
          try {
            await this.transporter.verify();
            this.isInitialized = true;
            console.log('Email service initialized successfully');
          } catch (error) {
            this.initPromise = null;
            console.error('Failed to initialize email service:', error);
            throw error;
          }
        }
      })();
    }
    return this.initPromise;
  }

  async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const result = await this.transporter.sendMail({
        from: this.defaultFrom,
        to: emailData.to,
        subject: emailData.subject,
        text: emailData.text,
        html: emailData.html,
        headers: {
          'X-Priority': '3',
          'X-MSMail-Priority': 'Normal'
        }
      });

      return !!result.messageId;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.initialize();
      return true;
    } catch (error) {
      return false;
    }
  }
}

const emailConfig: EmailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASSWORD || '',
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
};

const defaultFrom = process.env.CONTACT_EMAIL || 'noreply@durgafirecontrol.com';

export const emailService = new EmailService(emailConfig, defaultFrom); 