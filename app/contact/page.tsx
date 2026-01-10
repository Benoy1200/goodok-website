import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Get a Free Quote | Goodok Shopfitting",
    description: "Contact Goodok for retail display solutions. Get a free 3D store design, request quotes for gondola shelving, display cases, and custom fixtures. WhatsApp: +86 138 2210 2050",
    keywords: ["contact goodok", "retail fixtures quote", "store design consultation", "display solutions inquiry"],
};

const WHATSAPP_LINK = "https://wa.me/message/BUYXXY5BWYOWE1";

const companyInfo = {
    name: "Goodok Shopfitting Co., Ltd.",
    phone: "+86 138 2210 2050",
    email: "info@goodokshop.com",
    designEmail: "design@goodokshop.com",
    address: "NO. 15, KANTOU INDUSTRIAL ZONE, SONGSHI ROAD, SONGGANG SUB-DISTRICT, SHISHAN TOWN, NANHAI DISTRICT, FOSHAN CITY, GUANGDONG PROVINCE, CHINA",
    hours: "Monday - Saturday: 9:00 AM - 10:00 PM (GMT+8)",
};

const socialLinks = [
    { name: "YouTube", icon: "📺", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "WhatsApp", icon: "💬", href: WHATSAPP_LINK },
];

export default function ContactPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-white py-16 border-b">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Let&apos;s Talk About Your Store
                        </h1>
                        <p className="text-xl text-gray-600">
                            Your privacy is fully protected. We&apos;ll get back to you within 6 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content: Form + Company Info */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left: Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold mb-2">Leave us a message</h2>
                                <p className="text-gray-500 mb-8">
                                    Your privacy is fully protected. We&apos;ll get back to you within 6 hours.
                                </p>

                                <ContactForm />
                            </div>
                        </div>

                        {/* Right: Company Info Card */}
                        <div className="lg:col-span-2">
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full">
                                <h3 className="text-lg font-semibold text-gray-500 mb-6">
                                    Contact Goodok Shopfitting
                                </h3>

                                <div className="space-y-5">
                                    {/* Company Name */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">🏢</span>
                                        <span className="text-gray-900 font-medium">{companyInfo.name}</span>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">📞</span>
                                        <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="text-gray-900 hover:text-[var(--accent)] transition">
                                            {companyInfo.phone}
                                        </a>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">✉️</span>
                                        <div className="flex flex-col">
                                            <a href={`mailto:${companyInfo.email}`} className="text-gray-900 hover:text-[var(--accent)] transition">
                                                {companyInfo.email}
                                            </a>
                                            <a href={`mailto:${companyInfo.designEmail}`} className="text-gray-900 hover:text-[var(--accent)] transition">
                                                {companyInfo.designEmail}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">📍</span>
                                        <span className="text-gray-600 text-sm leading-relaxed">{companyInfo.address}</span>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">🕐</span>
                                        <span className="text-gray-600">{companyInfo.hours}</span>
                                    </div>
                                </div>

                                {/* QR Code */}
                                <div className="mt-8 flex justify-center">
                                    <div className="bg-white p-4 rounded-xl">
                                        <Image
                                            src="/images/whatsapp-qr.png"
                                            alt="Scan to chat on WhatsApp"
                                            width={150}
                                            height={150}
                                            className="rounded"
                                        />
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-8">
                                    <p className="text-gray-400 text-sm mb-4">Follow Us</p>
                                    <div className="flex gap-4">
                                        {socialLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-xl transition"
                                                aria-label={link.name}
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
