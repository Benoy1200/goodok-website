import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Boutique Store Fixtures | Fashion & Accessories Display | Goodok",
    description:
        "Elegant boutique fixtures for fashion, accessories, and specialty stores. Clothing racks, display tables, and premium shelving.",
    keywords: [
        "boutique fixtures",
        "boutique store design",
        "fashion store fixtures",
        "clothing store display",
        "accessories display",
    ],
};

const products = [
    { name: "Clothing Racks", desc: "Elegant garment displays", icon: "👔" },
    { name: "Display Tables", desc: "For folded items", icon: "🔲" },
    { name: "Wall Systems", desc: "Flexible wall displays", icon: "📐" },
    { name: "Accessory Cases", desc: "Glass showcases for jewelry", icon: "💍" },
];

const caseStudies = [
    {
        name: "Chic Accessories Boutique",
        location: "Los Angeles, USA",
        description: "An elegant 80㎡ boutique featuring rose gold fixtures and premium display tables.",
        highlights: ["Rose gold racks", "Glass accessory cases", "Velvet displays"],
        href: "/projects/boutique-accessories",
    },
];

export default function BoutiqueSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-rose-900 to-pink-700 text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-rose-300 text-sm font-medium">Solutions / Boutique</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Boutique Store
                            </h1>
                            <p className="text-xl text-rose-100 mb-8">
                                Create an elegant shopping experience for fashion-forward customers.
                                Premium fixtures that match your brand aesthetic.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-rose-900 hover:bg-rose-50">
                                    Get Free 3D Design
                                </Link>
                                <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-rose-900">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-rose-800/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">👗</span>
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
                        See how we&apos;ve helped boutique owners create elegant retail spaces
                    </p>
                    <div className="max-w-2xl mx-auto">
                        {caseStudies.map((study) => (
                            <div key={study.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                                    <span className="text-6xl">👗</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold">{study.name}</h3>
                                        <span className="text-sm text-gray-500">{study.location}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{study.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.highlights.map((h) => (
                                            <span key={h} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={study.href} className="text-rose-600 font-medium hover:underline">
                                        View Project Details →
                                    </Link>
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

            {/* Style */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Material Options</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">⬛</span>
                                <h3 className="font-bold mb-2">Matte Black</h3>
                                <p className="text-gray-600 text-sm">Modern, premium look</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🪙</span>
                                <h3 className="font-bold mb-2">Gold/Rose Gold</h3>
                                <p className="text-gray-600 text-sm">Elegant, luxurious finish</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🪵</span>
                                <h3 className="font-bold mb-2">Wood Accents</h3>
                                <p className="text-gray-600 text-sm">Warm boutique feel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-rose-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Design Your Dream Boutique
                    </h2>
                    <p className="text-rose-200 mb-8">
                        Free 3D design and factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-rose-900 hover:bg-rose-50">
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
}
