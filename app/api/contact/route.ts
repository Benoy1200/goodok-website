import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // 检查 API Key 是否配置
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact us directly at info@goodokshop.com' },
                { status: 500 }
            );
        }

        // 动态导入 Resend 并在函数内创建实例
        const { Resend } = await import('resend');
        const resend: InstanceType<typeof Resend> = new Resend(process.env.RESEND_API_KEY);

        const { name, email, message, website_url, start_time } = await request.json();

        // 🛡️ Anti-Spam Check 1: Honeypot (蜜罐)
        if (website_url) {
            console.log('Spam detected: Honeypot filled');
            // Return success to fool the bot, but don't send anything
            return NextResponse.json({ success: true, message: 'Message sent' });
        }

        // 🛡️ Anti-Spam Check 2: Time Trap (时间陷阱)
        // If submission happens too fast (< 2 seconds), it's likely a bot
        const currentTime = Date.now();
        if (start_time && (currentTime - start_time < 2000)) {
            console.log('Spam detected: Too fast submission', currentTime - start_time);
            return NextResponse.json({ success: true, message: 'Message sent' });
        }

        // 🛡️ Anti-Spam Check 3: Content Logic (简单的内容逻辑校验)
        // Check for random strings (e.g. "sSRGbfFyypIRMUYezlCvw")
        // Rule: If message is single word > 15 chars, or message contains no spaces but is long
        if (message.length > 20 && !message.includes(' ')) {
             console.log('Spam detected: Random string message');
             return NextResponse.json({ success: true, message: 'Message sent' });
        }

        // 验证必填字段
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 发送邮件给网站管理员
        const { data, error } = await resend.emails.send({
            from: 'Goodok Website <noreply@goodokshop.com>',
            to: ['info@goodokshop.com'],
            replyTo: email,
            subject: `New Inquiry from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #0066cc, #004499); padding: 20px; text-align: center;">
                        <h1 style="color: white; margin: 0;">New Website Inquiry</h1>
                    </div>
                    <div style="padding: 30px; background: #f9fafb;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px; color: #374151;">Name</td>
                                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
                                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
                                    <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                                <td style="padding: 12px; color: #111827; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="background: #1f2937; padding: 20px; text-align: center;">
                        <p style="color: #9ca3af; margin: 0; font-size: 14px;">
                            This message was sent from <a href="https://www.goodokshop.com" style="color: #60a5fa;">goodokshop.com</a>
                        </p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        // 发送确认邮件给客户
        await resend.emails.send({
            from: 'Goodok Shopfitting <noreply@goodokshop.com>',
            to: [email],
            subject: 'Thank you for contacting Goodok Shopfitting',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #0066cc, #004499); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0;">Thank You!</h1>
                    </div>
                    <div style="padding: 30px; background: #ffffff;">
                        <p style="font-size: 16px; color: #374151; line-height: 1.8;">
                            Dear <strong>${name}</strong>,
                        </p>
                        <p style="font-size: 16px; color: #374151; line-height: 1.8;">
                            Thank you for reaching out to Goodok Shopfitting. We have received your inquiry and our team will get back to you within 6 hours.
                        </p>
                        <p style="font-size: 16px; color: #374151; line-height: 1.8;">
                            In the meantime, feel free to browse our products and solutions:
                        </p>
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="https://www.goodokshop.com/products" style="display: inline-block; background: #ff6b35; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                                Browse Products
                            </a>
                        </div>
                        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                        <p style="font-size: 14px; color: #6b7280;">
                            Your message:<br>
                            <em style="color: #9ca3af;">${message}</em>
                        </p>
                    </div>
                    <div style="background: #1f2937; padding: 20px; text-align: center;">
                        <p style="color: #9ca3af; margin: 0 0 10px 0; font-size: 14px;">
                            Goodok Shopfitting Co., Ltd.
                        </p>
                        <p style="color: #6b7280; margin: 0; font-size: 12px;">
                            Professional Retail Display Solutions | 15+ Years Experience
                        </p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json(
            { success: true, message: 'Email sent successfully', id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
