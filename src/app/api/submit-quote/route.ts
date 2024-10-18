import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Create a transporter object using your email service
    const transporter = nodemailer.createTransport({
      host: 'mail.techformia.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // 'info@techformia.com'
        pass: process.env.EMAIL_PASS, // Email account's password
      },
    });

    // Set up email data
    const mailOptions = {
      from: '"Techformia" <info@techformia.com>', // Sender address
      to: 'info@techformia.com', // List of recipients
      subject: 'New Quote Request', // Subject line
      text: `Name: ${body.name}\nEmail: ${body.email}\nProject Details: ${body.projectDetails}`, // Plain text body
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ success: true, message: 'Quote submitted successfully!' });
  } catch (error) {
    console.error('Error in POST /api/submit-quote:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
