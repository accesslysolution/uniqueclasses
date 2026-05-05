import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, current_standard, message, type } = body;

    const isAST = type === "AST";
    const themeColor = isAST ? "#E03B3C" : "#2E358D"; // CTA Red for AST, Primary Blue for Contact
    const leadTitle = isAST ? "AST Scholarship Registration" : "General Course Enquiry";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #334155; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
            .header { background-color: #0f172a; padding: 30px; text-align: center; color: white; border-bottom: 4px solid ${themeColor}; }
            .header h1 { margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; }
            .content { padding: 40px; background-color: #ffffff; }
            .badge { display: inline-block; padding: 4px 12px; background: ${themeColor}15; color: ${themeColor}; border-radius: 20px; font-size: 12px; font-weight: 800; margin-bottom: 20px; text-transform: uppercase; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #94a3b8; margin-bottom: 4px; }
            .value { font-size: 17px; font-weight: 600; color: #0f172a; margin-bottom: 20px; }
            .message-box { background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 3px solid ${themeColor}; font-style: italic; }
            .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
            .button { display: inline-block; padding: 12px 24px; background-color: ${themeColor}; color: white !important; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>UNIQUE CLASSES</h1>
            </div>
            <div class="content">
              <div class="badge">${leadTitle}</div>
              
              <div class="label">Student Name</div>
              <div class="value">${name}</div>

              <div class="label">Phone / WhatsApp</div>
              <div class="value">${phone}</div>

              <div class="label">Current Class</div>
              <div class="value">${current_standard}</div>

              ${isAST ? `
                <div class="message-box">
                  Note: This student has registered for the Admission Cum Scholarship Test (AST) 2026-27.
                </div>
              ` : `
                <div class="label">Message</div>
                <div class="message-box">${message || "No message provided."}</div>
              `}

              <div style="text-align: center;">
                <a href="tel:${phone}" class="button">Call Student Now</a>
              </div>
            </div>
            <div class="footer">
              Lead generated via Website by Lupa Entertainment<br/>
              © 2026 Unique Classes Pune
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Unique Classes Leads <onboarding@resend.dev>',
      to: ['accesslysolution@gmail.com'],
      subject: `${isAST ? '🏆 AST REGISTRATION' : '📩 NEW ENQUIRY'}: ${name}`,
      html: emailHtml,
    });

    if (error) return NextResponse.json({ error }, { status: 400 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}