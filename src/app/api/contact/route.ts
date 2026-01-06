import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { user_type, name, company, email, phone, message } = body;

        // Logging the submission
        console.log("Contact Form Submission:", {
            user_type,
            name,
            company,
            email,
            phone,
            message,
            timestamp: new Date().toISOString()
        });

        const recipientEmail = process.env.RECIPIENT_EMAIL || "info@connectantalya.com";

        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: "Travel Connect <onboarding@resend.dev>", // Replace with verified domain in production
                to: recipientEmail,
                subject: `Yenİ Kayıt: ${name} (${user_type})`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #6d28d9; border-bottom: 2px solid #6d28d9; padding-bottom: 10px;">Yeni İletişim Formu</h2>
                        <p><strong>Kayıt Türü:</strong> ${user_type}</p>
                        <p><strong>Ad Soyad:</strong> ${name}</p>
                        <p><strong>Firma:</strong> ${company || "Belirtilmedi"}</p>
                        <p><strong>E-Posta:</strong> ${email}</p>
                        <p><strong>Telefon:</strong> ${phone || "Belirtilmedi"}</p>
                        <div style="margin-top: 20px; padding: 15px; bg-color: #f9f9f9; border-radius: 5px;">
                            <strong>Mesaj:</strong><br/>
                            ${message || "Mesaj yok."}
                        </div>
                        <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
                        <p style="font-size: 12px; color: #999;">Bu email Travel Connect Antalya web sitesi üzerinden gönderilmiştir.</p>
                    </div>
                `
            });
        }

        return NextResponse.json({
            success: true,
            message: "Submission received successfully"
        });
    } catch (error) {
        console.error("Contact Form Error:", error);
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
走项目竣工!
