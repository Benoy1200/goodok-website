import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gondola Shelving Wholesale | Double-Sided Retail Shelving | Goodok",
    description:
        "Factory-direct gondola shelving for supermarkets and retail stores. Double-sided units, customizable sizes, and competitive wholesale pricing.",
    keywords: [
        "gondola shelving",
        "gondola shelving wholesale",
        "double-sided shelving",
        "supermarket shelving",
        "retail gondola racks",
    ],
};

const features = [
    {
        title: "Double-Sided Display",
        description: "Maximize product exposure with accessible shelving from both sides.",
        icon: "🏪",
    },
    {
        title: "Adjustable Shelves",
        description: "Customize shelf heights to fit any product size.",
        icon: "📐",
    },
    {
        title: "Heavy-Duty Steel",
        description: "1.0mm+ steel construction for lasting durability.",
        icon: "🔩",
    },
    {
        title: "Modular Design",
        description: "Connect multiple units to create endless aisle configurations.",
        icon: "🔧",
    },
];

const specs = [
    { label: "Height", value: "1200mm - 2400mm" },
    { label: "Width", value: "600mm - 1200mm" },
    { label: "Depth", value: "300mm - 500mm" },
    { label: "Steel Thickness", value: "0.7mm - 1.2mm" },
    { label: "Shelf Load", value: "50kg - 150kg per shelf" },
    { label: "Finish", value: "Powder Coated / Galvanized" },
];

export default function GondolaShelvingPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#004499] to-[#0066cc] text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#F0E1C3] text-sm font-medium">Products / Gondola Shelving</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Gondola Shelving
                            </h1>
                            <p className="text-xl text-[#F8F1E3] mb-8">
                                The essential double-sided shelving system for supermarkets, convenience stores,
                                and retail spaces. Factory-direct wholesale pricing.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-[var(--primary)] hover:bg-[#f8f9fa]">
                                    Get Free Quote
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20gondola%20shelving%20quote"
                                    className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]"
                                >
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-[#0066cc]/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">🏪</span>
                            </div>
                            <p className="text-center text-[#F4E7CF] mt-4 text-sm">
                                [Product Image Placeholder]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl">
                                <span className="text-4xl mb-4 block">{feature.icon}</span>
                                <h3 className="font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Specifications
                        </h2>
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <table className="w-full">
                                <tbody>
                                    {specs.map((spec, index) => (
                                        <tr key={spec.label} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                                            <td className="px-6 py-4 font-medium">{spec.label}</td>
                                            <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center text-gray-500 mt-4 text-sm">
                            * Custom sizes available upon request
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Perfect For
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Supermarkets", icon: "🏪" },
                            { name: "Convenience Stores", icon: "🏪" },
                            { name: "Pharmacies", icon: "💊" },
                            { name: "Grocery Stores", icon: "🥬" },
                            { name: "Hardware Stores", icon: "🔧" },
                            { name: "General Retail", icon: "🏬" },
                        ].map((item) => (
                            <div key={item.name} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#004499] text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Get Wholesale Pricing
                    </h2>
                    <p className="text-[#F4E7CF] mb-8 max-w-2xl mx-auto">
                        Factory-direct pricing. Free 3D store layout included with every quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn bg-white text-[var(--primary)] hover:bg-[#f8f9fa]">
                            Request Quote
                        </Link>
                        <Link href="/products" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
