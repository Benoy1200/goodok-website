import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Checkout Counters | Retail POS Systems | Goodok",
    description: "Modern checkout counters and POS systems for retail stores. Durable, functional, and stylish checkout solutions.",
    keywords: [
        "checkout counters",
        "retail POS systems",
        "cash register counters",
        "store checkout furniture",
        "supermarket checkout",
    ],
};

const features = [
    {
        title: "Durable Construction",
        description: "Built with high-quality materials to withstand daily retail operations.",
        icon: "🏗️",
    },
    {
        title: "Integrated POS Space",
        description: "Designed to accommodate modern POS systems and payment terminals.",
        icon: "💻",
    },
    {
        title: "Storage Solutions",
        description: "Built-in drawers and compartments for bags, receipts, and supplies.",
        icon: "📦",
    },
    {
        title: "Customizable Design",
        description: "Available in various sizes, colors, and configurations to match your store.",
        icon: "🎨",
    },
];

const applications = [
    {
        name: "Supermarkets",
        description: "High-volume checkout solutions for busy supermarkets.",
    },
    {
        name: "Retail Stores",
        description: "Stylish counters for fashion boutiques and specialty stores.",
    },
    {
        name: "Convenience Stores",
        description: "Compact designs optimized for smaller retail spaces.",
    },
    {
        name: "Pharmacies",
        description: "Professional counters with secure storage for medications.",
    },
];

export default function CheckoutCountersPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-900 to-indigo-700 text-white py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Checkout Counters
                        </h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Modern, durable, and functional checkout solutions for retail stores of all sizes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/free-3d-design" className="btn bg-white text-blue-900 hover:bg-blue-50">
                                Get Free 3D Design
                            </Link>
                            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-900">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <div key={feature.title} className="bg-gray-50 rounded-xl p-6 text-center">
                                <span className="text-4xl mb-4 block">{feature.icon}</span>
                                <h3 className="font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Applications</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {applications.map((app) => (
                            <div key={app.name} className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold mb-2 text-blue-600">{app.name}</h3>
                                <p className="text-gray-600 text-sm">{app.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Checkout Counters</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <span className="text-3xl">✅</span>
                                <div>
                                    <h3 className="font-bold mb-1">Factory Direct Pricing</h3>
                                    <p className="text-gray-600">Get competitive prices by working directly with the manufacturer.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-3xl">✅</span>
                                <div>
                                    <h3 className="font-bold mb-1">Customizable Options</h3>
                                    <p className="text-gray-600">Choose from various sizes, materials, and configurations.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-3xl">✅</span>
                                <div>
                                    <h3 className="font-bold mb-1">Quick Production</h3>
                                    <p className="text-gray-600">Fast turnaround times to get your store operational quickly.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-3xl">✅</span>
                                <div>
                                    <h3 className="font-bold mb-1">Global Shipping</h3>
                                    <p className="text-gray-600">We ship to over 50 countries with secure packaging.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Get Your Custom Checkout Counter
                    </h2>
                    <p className="text-blue-200 mb-8">
                        Free 3D design within 24 hours. Factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-blue-900 hover:bg-blue-50">
                        Get Free 3D Design
                    </Link>
                </div>
            </section>
        </div>
    );
}
