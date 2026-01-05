import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, country, inquiry, message } = body;

        // Validate required fields
        if (!name || !email || !country || !inquiry || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Format the email content
        const emailContent = `
New Contact Form Submission from Goodok Website

Name: ${name}
Email: ${email}
Phone/WhatsApp: ${phone || "Not provided"}
Country: ${country}
Inquiry Type: ${inquiry}

Message:
${message}

---
This message was sent from the contact form at goodokshop.com
    `.trim();

        // Send email using Resend API (you need to add RESEND_API_KEY to environment variables)
        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
            console.error("RESEND_API_KEY not configured");
            // Fallback: just log the submission and return success
            console.log("Contact form submission:", emailContent);
            return NextResponse.json({
                success: true,
                message: "Message received (email service not configured)"
            });
        }

        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
                from: "Goodok Website <noreply@goodokshop.com>",
                to: ["info@goodokshop.com"],
                reply_to: email,
                subject: `[Website Inquiry] ${inquiry} - ${name} from ${country}`,
                text: emailContent,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Resend API error:", errorData);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Message sent successfully"
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
