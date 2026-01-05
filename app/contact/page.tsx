import type { Metadata } from "next";
import Image from "next/image";

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
    address: "No. 15, Kantou Industrial Zone, Songshi Road, Songgang Subdistrict, Bao'an District, Shenzhen, Guangdong Province, China 518110",
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
            <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 text-white">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Let&apos;s Talk About Your Store
                        </h1>
                        <p className="text-xl text-gray-300">
                            Your privacy is fully protected. We&apos;ll get back to you within 6 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content: Form + Company Info */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left: Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold mb-2">Leave us a message</h2>
                                <p className="text-gray-500 mb-8">
                                    Your privacy is fully protected. We&apos;ll get back to you within 6 hours.
                                </p>

                                <form
                                    action="https://formsubmit.co/henry879128@gmail.com"
                                    method="POST"
                                >
                                    {/* FormSubmit Configuration */}
                                    <input type="hidden" name="_subject" value="New Inquiry from Goodok Website" />
                                    <input type="hidden" name="_next" value="https://www.goodokshop.com/contact?success=true" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />

                                    <div className="mb-6">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Email (Required)
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Message (Required)
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                                            placeholder="Tell us about your project, store dimensions, or any questions you have..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                                    >
                                        Quick Response
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right: Company Info Card */}
                        <div className="lg:col-span-2">
                            <div className="bg-gray-800 text-white rounded-2xl p-8 h-full">
                                <h3 className="text-lg font-semibold text-gray-400 mb-6">
                                    Contact Goodok Shopfitting
                                </h3>

                                <div className="space-y-5">
                                    {/* Company Name */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">🏢</span>
                                        <span className="text-white">{companyInfo.name}</span>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">📞</span>
                                        <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="text-white hover:text-orange-400 transition">
                                            {companyInfo.phone}
                                        </a>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">✉️</span>
                                        <div className="flex flex-col">
                                            <a href={`mailto:${companyInfo.email}`} className="text-white hover:text-orange-400 transition">
                                                {companyInfo.email}
                                            </a>
                                            <a href={`mailto:${companyInfo.designEmail}`} className="text-white hover:text-orange-400 transition">
                                                {companyInfo.designEmail}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">📍</span>
                                        <span className="text-gray-300 text-sm leading-relaxed">{companyInfo.address}</span>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">🕐</span>
                                        <span className="text-gray-300">{companyInfo.hours}</span>
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

            {/* WhatsApp CTA Section */}
            <section className="py-12 bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Prefer to Chat Directly?</h2>
                        <p className="text-gray-600 mb-6">
                            Get instant responses on WhatsApp. We&apos;re available 7 days a week.
                        </p>
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-6 h-6 fill-white"
                            >
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                            Start WhatsApp Chat
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Info Strip */}
            <section className="py-8 bg-gray-100">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="flex items-center justify-center gap-3">
                            <span className="text-2xl">⚡</span>
                            <span className="text-gray-700">WhatsApp: Response within 1 hour</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <span className="text-2xl">📧</span>
                            <span className="text-gray-700">Email: Response within 24 hours</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <span className="text-2xl">🎨</span>
                            <span className="text-gray-700">Free 3D Store Design Available</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
