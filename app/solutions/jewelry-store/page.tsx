import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Jewelry Store Fixtures | Display Cases & Showcases | Goodok",
    description:
        "Premium jewelry store fixtures and display cases. Glass showcases, LED lighting, security features, and elegant design.",
    keywords: [
        "jewelry store fixtures",
        "jewelry display cases",
        "jewelry showcase",
        "jewelry store design",
        "glass display case",
    ],
};

const products = [
    { name: "Counter Cases", desc: "Eye-level jewelry display", icon: "💍" },
    { name: "Tower Cases", desc: "360° viewing displays", icon: "🗼" },
    { name: "Wall Cases", desc: "Wall-mounted showcases", icon: "📋" },
    { name: "Watch Displays", desc: "Specialized watch cases", icon: "⌚" },
];

const caseStudies = [
    {
        name: "Luxury Gems Boutique",
        location: "Singapore",
        description: "A premium 100㎡ jewelry store with high-security display cases and elegant LED lighting.",
        highlights: ["Tempered glass cases", "LED strip lighting", "Security locks"],
        href: "#",
    },
];

export default function JewelryStoreSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-900 to-yellow-700 text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-white text-sm font-medium">Solutions / Jewelry Store</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Jewelry Store
                            </h1>
                            <p className="text-xl text-white mb-8">
                                Create an elegant showcase for precious jewelry and watches.
                                Premium displays with security and lighting features.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-amber-900 hover:bg-amber-50">
                                    Get Free 3D Design
                                </Link>
                                <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-amber-900">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-amber-800/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">💎</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-4">Store Case Studies</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        See how we&apos;ve helped jewelry store owners create stunning retail spaces
                    </p>
                    <div className="max-w-2xl mx-auto">
                        {caseStudies.map((study) => (
                            <div key={study.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center">
                                    <span className="text-6xl">💍</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold">{study.name}</h3>
                                        <span className="text-sm text-gray-500">{study.location}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{study.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {study.highlights.map((h) => (
                                            <span key={h} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Recommended Products
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.name} className="bg-white rounded-xl p-6 text-center shadow-sm">
                                <span className="text-4xl mb-4 block">{product.icon}</span>
                                <h3 className="font-bold mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm">{product.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Premium Features</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">💡</span>
                                <h3 className="font-bold mb-2">LED Lighting</h3>
                                <p className="text-gray-600 text-sm">Highlight the sparkle of gems</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🔐</span>
                                <h3 className="font-bold mb-2">Security</h3>
                                <p className="text-gray-600 text-sm">High-security locking systems</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">✨</span>
                                <h3 className="font-bold mb-2">Elegance</h3>
                                <p className="text-gray-600 text-sm">Premium materials and finishes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-amber-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Create Your Luxury Jewelry Store
                    </h2>
                    <p className="text-amber-200 mb-8">
                        Free 3D design and factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-amber-900 hover:bg-amber-50">
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
}
