import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { name, phone, email, message } = req.body

        // Create a transporter using SMTP
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        try {
            // Send email
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: "rafal-test@gmail.com",
                subject: "New Contact Form Submission",
                text: `
          Name: ${name}
          Phone: ${phone}
          Email: ${email}
          Message: ${message}
        `,
                html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
            })

            res.status(200).json({ message: 'Email sent successfully' })
        } catch (error) {
            console.error('Error sending email:', error)
            res.status(500).json({ message: 'Error sending email' })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}