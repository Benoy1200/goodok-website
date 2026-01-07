import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Free 3D Store Design - Get Your Layout in 24 Hours",
    description:
        "Get a professional 3D store design absolutely free. Send us your store dimensions and receive a complete layout with shelving plan, lighting optimization, and display recommendations within 24 hours.",
    keywords: [
        "free store design",
        "3D store layout",
        "retail space planning",
        "store layout design",
        "shop interior design",
    ],
};

const benefits = [
    {
        icon: "🎨",
        title: "Professional 3D Visualization",
        description: "See exactly how your store will look before placing any orders",
    },
    {
        icon: "📐",
        title: "Complete Layout Plan",
        description: "Optimized product placement for maximum sales and customer flow",
    },
    {
        icon: "💡",
        title: "Lighting Recommendations",
        description: "Strategic lighting to highlight products and create ambiance",
    },
    {
        icon: "📦",
        title: "Product Specifications",
        description: "Detailed list of all fixtures with dimensions and quantities",
    },
    {
        icon: "💰",
        title: "Transparent Pricing",
        description: "Complete cost breakdown with no hidden fees",
    },
    {
        icon: "🚚",
        title: "Shipping Estimate",
        description: "Delivery timeline and logistics planning for your location",
    },
];

const process = [
    {
        step: "1",
        title: "Share Your Space",
        description:
            "Send us your store dimensions, photos, and any design preferences via WhatsApp or email.",
        time: "5 minutes",
    },
    {
        step: "2",
        title: "We Design",
        description:
            "Our team creates a professional 3D layout optimized for your specific needs and products.",
        time: "12-24 hours",
    },
    {
        step: "3",
        title: "Review & Refine",
        description:
            "Review the design, request changes, and we'll refine until you're 100% satisfied.",
        time: "Free revisions",
    },
    {
        step: "4",
        title: "Order & Deliver",
        description:
            "Approve the final design, place your order, and we handle production and shipping.",
        time: "2-4 weeks",
    },
];

export default function Free3DDesignPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="gradient-hero py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                100% Free - No Obligation
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Get Your FREE
                                <span className="text-[#f8f9fa]"> 3D Store Design</span>
                            </h1>

                            <p className="text-xl text-gray-300 mb-8">
                                Transform your empty space into a stunning retail environment.
                                Our design team will create a complete 3D layout 鈥?delivered
                                within 24 hours.
                            </p>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                                <h3 className="text-white font-semibold mb-4">
                                    What You&apos;ll Get:
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Professional 3D store visualization",
                                        "Complete fixture layout plan",
                                        "Product placement optimization",
                                        "Detailed quotation with pricing",
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-3 text-gray-200"
                                        >
                                            <svg
                                                className="w-5 h-5 text-green-400 flex-shrink-0"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20a%203D%20store%20design.%20My%20store%20size%20is:"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp text-lg px-8 py-4 gap-3"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Send Store Size on WhatsApp
                            </a>
                        </div>

                        {/* Visual placeholder for 3D preview */}
                        <div className="hidden lg:block">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div className="aspect-video bg-gradient-to-br from-[#004499]/50 to-[#0066cc]/50 rounded-xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">馃彧</div>
                                        <p className="text-white/60">Your 3D Design Preview</p>
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-3 gap-4">
                                    <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                                        <span className="text-3xl">馃搻</span>
                                    </div>
                                    <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                                        <span className="text-3xl">馃洅</span>
                                    </div>
                                    <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                                        <span className="text-3xl">馃挕</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What&apos;s Included in Your Free Design
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A comprehensive store design package that helps you visualize and
                            plan your perfect retail space.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            How It Works
                        </h2>
                        <p className="text-gray-600 text-lg">
                            From your store dimensions to a complete 3D design in 4 simple steps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <div key={item.step} className="relative">
                                {/* Connector line */}
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#f8f9fa]"></div>
                                )}

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-[#004499] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-2">{item.description}</p>
                                    <span className="text-sm text-[var(--accent)] font-medium">
                                        {item.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Need From You */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                What We Need From You
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Just a few simple details to get started
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <ul className="space-y-6">
                                {[
                                    {
                                        icon: "馃搹",
                                        title: "Store Dimensions",
                                        desc: "Length, width, and height of your space (meters or feet)",
                                    },
                                    {
                                        icon: "馃摳",
                                        title: "Photos (Optional)",
                                        desc: "Photos of your current space help us understand the layout",
                                    },
                                    {
                                        icon: "馃彧",
                                        title: "Store Type",
                                        desc: "What will you be selling? (clothing, jewelry, grocery, etc.)",
                                    },
                                    {
                                        icon: "馃挱",
                                        title: "Design Preferences",
                                        desc: "Any specific style, colors, or requirements you have in mind",
                                    },
                                ].map((item) => (
                                    <li key={item.title} className="flex gap-4">
                                        <div className="text-3xl">{item.icon}</div>
                                        <div>
                                            <h4 className="font-semibold">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20a%203D%20store%20design.%0A%0AMy%20store%20size%20is:%0ALength:%0AWidth:%0AHeight:%0A%0AStore%20type:"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-whatsapp text-lg px-8 py-4 gap-3"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Start Your Free Design Now
                                </a>
                                <p className="text-gray-500 text-sm mt-4">
                                    Or email us at{" "}
                                    <a
                                        href="mailto:design@goodokshop.com"
                                        className="text-[var(--accent)] hover:underline"
                                    >
                                        design@goodokshop.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "Is the 3D design really free?",
                                    a: "Yes, 100% free with no obligation to purchase. We believe in earning your business by showing you the value we can provide.",
                                },
                                {
                                    q: "How long does it take to receive my design?",
                                    a: "Most designs are completed within 15-24 hours of receiving your store information.",
                                },
                                {
                                    q: "What if I want to make changes to the design?",
                                    a: "Revisions are free! We work with you until you're completely satisfied with the layout.",
                                },
                                {
                                    q: "Do you ship to my country?",
                                    a: "We ship worldwide to over 50 countries. Shipping costs and timelines will be included in your quote.",
                                },
                                {
                                    q: "What payment methods do you accept?",
                                    a: "We accept bank transfer (T/T), PayPal, and other secure payment methods. A deposit is required to begin production.",
                                },
                            ].map((faq) => (
                                <div key={faq.q} className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                                    <p className="text-gray-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}



