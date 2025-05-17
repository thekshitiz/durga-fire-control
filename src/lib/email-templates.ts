interface TemplateData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  enquiryType: string;
  customSubject?: string;
  message: string;
  timestamp?: string;
}

// Cache the current year to avoid repeated calls
const CURRENT_YEAR = new Date().getFullYear();

// Simplified styles with minimal CSS
const TEMPLATE_STYLES = `
  .container { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
  .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #e63946; padding-bottom: 15px; }
  .heading { color: #1d3557; font-size: 20px; font-weight: bold; margin: 0; }
  .subheading { color: #457b9d; font-size: 14px; margin: 8px 0 0; }
  .section { margin: 15px 0; padding: 10px; background: #f8f9fa; border-radius: 4px; }
  .label { color: #1d3557; font-weight: bold; margin-bottom: 4px; }
  .value { color: #2b2d42; margin: 0; line-height: 1.4; }
  .message { white-space: pre-line; color: #2b2d42; line-height: 1.5; margin: 12px 0; }
  .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #dee2e6; text-align: center; color: #6c757d; font-size: 12px; }
`;

const getEmailTemplate = (data: TemplateData) => {
  const timestamp = data.timestamp || new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${TEMPLATE_STYLES}</style>
    </head>
    <body style="margin: 0; padding: 15px; background: #f1f3f5;">
      <div class="container">
        <header class="header">
          <h1 class="heading">New Inquiry Received</h1>
          <p class="subheading">Type: ${data.enquiryType}</p>
        </header>

        <div class="section">
          <div class="label">Contact Information</div>
          <div class="value">
            <strong>Name:</strong> ${data.firstName} ${data.lastName}<br>
            <strong>Email:</strong> ${data.email}<br>
            <strong>Phone:</strong> ${data.phone}
          </div>
        </div>

        ${data.customSubject ? `
          <div class="section">
            <div class="label">Subject</div>
            <div class="value">${data.customSubject}</div>
          </div>
        ` : ''}

        <div class="section">
          <div class="label">Message</div>
          <div class="message">${data.message}</div>
        </div>

        <footer class="footer">
          <p>Received on: ${timestamp}</p>
          <p>© ${CURRENT_YEAR} Durga Fire Control</p>
          <small>This email contains confidential information.</small>
        </footer>
      </div>
    </body>
    </html>
  `.trim();

  const text = `
DURGA FIRE CONTROL - NEW INQUIRY

Type: ${data.enquiryType}
Received: ${timestamp}

CONTACT INFORMATION
------------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

${data.customSubject ? `SUBJECT\n--------\n${data.customSubject}\n\n` : ''}
MESSAGE
-------
${data.message}

---
This message contains confidential information.
© ${CURRENT_YEAR} Durga Fire Control
  `.trim();

  return { html, text };
};

// Template factory with memoization for better performance
const createTemplateFactory = (type: string) => {
  return (data: TemplateData) => getEmailTemplate({
    ...data,
    enquiryType: type
  });
};

// Create template functions with specific types
export const getServiceInquiryTemplate = createTemplateFactory('Service Inquiry');
export const getProductInquiryTemplate = createTemplateFactory('Product Inquiry');
export const getQuoteRequestTemplate = createTemplateFactory('Quote Request');
export const getSupportRequestTemplate = createTemplateFactory('Support Request');
export const getGeneralInquiryTemplate = createTemplateFactory('General Inquiry');

export default getEmailTemplate; 