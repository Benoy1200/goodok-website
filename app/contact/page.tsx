"use client";

import { useState } from "react";

const contactMethods = [
    {
        icon: "💬",
        title: "WhatsApp",
        description: "Fastest response - usually within 1 hour",
        value: "+86 138 2210 2050",
        href: "https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20want%20to%20inquire%20about%20your%20products",
        cta: "Chat on WhatsApp",
        primary: true,
    },
    {
        icon: "📧",
        title: "Email",
        description: "For detailed inquiries and documentation",
        value: "info@goodokshop.com",
        href: "mailto:info@goodokshop.com",
        cta: "Send Email",
        primary: false,
    },
    {
        icon: "📞",
        title: "Phone",
        description: "Monday - Saturday, 9AM - 6PM (GMT+8)",
        value: "+86 138 2210 2050",
        href: "tel:+8613822102050",
        cta: "Call Now",
        primary: false,
    },
];

const officeInfo = {
    address: "Guangdong Province, China",
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM (GMT+8)",
    response: "WhatsApp: 1 hour | Email: 24 hours",
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        inquiry: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    country: "",
                    inquiry: "",
                    message: "",
                });
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Let&apos;s Talk About Your Store
                        </h1>
                        <p className="text-xl text-gray-600">
                            Whether you have questions about our products, need a custom
                            solution, or want to get started with a free 3D design —
                            we&apos;re here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method) => (
                            <div
                                key={method.title}
                                className={`rounded-2xl p-8 ${method.primary
                                        ? "bg-green-50 border-2 border-green-200"
                                        : "bg-white border border-gray-200"
                                    }`}
                            >
                                <div className="text-4xl mb-4">{method.icon}</div>
                                <h2 className="text-xl font-bold mb-2">{method.title}</h2>
                                <p className="text-gray-600 mb-4">{method.description}</p>
                                <p className="font-semibold text-lg mb-6">{method.value}</p>
                                <a
                                    href={method.href}
                                    target={method.href.startsWith("http") ? "_blank" : undefined}
                                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className={`btn w-full ${method.primary ? "btn-whatsapp" : "btn-secondary"
                                        }`}
                                >
                                    {method.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Inquiry Form */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                            <p className="text-gray-600">
                                Fill out the form below and we&apos;ll get back to you within 24
                                hours.
                            </p>
                        </div>

                        {submitStatus === "success" && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center">
                                <p className="text-green-800 font-medium">
                                    ✅ Message sent successfully! We&apos;ll get back to you within 24 hours.
                                </p>
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-center">
                                <p className="text-red-800 font-medium">
                                    ❌ Failed to send message. Please try WhatsApp or email directly.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="John Smith"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Phone / WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Country *
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        required
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="United States"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="inquiry"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    What are you looking for? *
                                </label>
                                <select
                                    id="inquiry"
                                    name="inquiry"
                                    required
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                >
                                    <option value="">Select an option</option>
                                    <option value="3d-design">Free 3D Store Design</option>
                                    <option value="gondola">Gondola Shelving</option>
                                    <option value="display-cases">Display Cases</option>
                                    <option value="custom">Custom Fixtures</option>
                                    <option value="full-fitout">Complete Store Fit-out</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                                    placeholder="Tell us about your project, store dimensions, or any questions you have..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            <p className="text-center text-gray-500 text-sm mt-4">
                                For faster response, contact us directly on{" "}
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 font-medium hover:underline"
                                >
                                    WhatsApp
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Office Info */}
            <section className="py-16">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl mb-4">📍</div>
                            <h3 className="font-semibold mb-2">Location</h3>
                            <p className="text-gray-600">{officeInfo.address}</p>
                        </div>
                        <div>
                            <div className="text-3xl mb-4">🕐</div>
                            <h3 className="font-semibold mb-2">Business Hours</h3>
                            <p className="text-gray-600">{officeInfo.hours}</p>
                        </div>
                        <div>
                            <div className="text-3xl mb-4">⚡</div>
                            <h3 className="font-semibold mb-2">Response Time</h3>
                            <p className="text-gray-600">{officeInfo.response}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
