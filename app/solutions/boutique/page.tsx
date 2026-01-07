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
    { name: "Clothing Racks", desc: "Elegant garment displays", icon: "馃憯" },
    { name: "Display Tables", desc: "For folded items", icon: "馃敳" },
    { name: "Wall Systems", desc: "Flexible wall displays", icon: "馃搻" },
    { name: "Accessory Cases", desc: "Glass showcases for jewelry", icon: "馃拲" },
];

const caseStudies = [
    {
        name: "Chic Accessories Boutique",
        location: "Los Angeles, USA",
        description: "An elegant 80銕?boutique featuring rose gold fixtures and premium display tables.",
        highlights: ["Rose gold racks", "Glass accessory cases", "Velvet displays"],
        href: "/projects/boutique-accessories",
    },
];

export default function BoutiqueSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#004499] to-[#ff6b35] text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#f8f9fa] text-sm font-medium">Solutions / Boutique</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Boutique Store
                            </h1>
                            <p className="text-xl text-[#F8F1E3] mb-8">
                                Create an elegant shopping experience for fashion-forward customers.
                                Premium fixtures that match your brand aesthetic.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-[var(--primary)] hover:bg-[#f8f9fa]">
                                    Get Free 3D Design
                                </Link>
                                <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-[#0066cc]/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">馃憲</span>
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
                                <div className="aspect-video bg-gradient-to-br from-[#f8f9fa] to-[#f8f9fa] flex items-center justify-center">
                                    <span className="text-6xl">馃憲</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold">{study.name}</h3>
                                        <span className="text-sm text-gray-500">{study.location}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{study.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.highlights.map((h) => (
                                            <span key={h} className="text-xs bg-[#f8f9fa] text-[var(--accent)] px-2 py-1 rounded">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={study.href} className="text-[var(--accent)] font-medium hover:underline">
                                        View Project Details 鈫?
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
                                <span className="text-4xl mb-3 block">✨</span>
                                <h3 className="font-bold mb-2">Matte Black</h3>
                                <p className="text-gray-600 text-sm">Modern, premium look</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">馃獧</span>
                                <h3 className="font-bold mb-2">Gold/Rose Gold</h3>
                                <p className="text-gray-600 text-sm">Elegant, luxurious finish</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">馃</span>
                                <h3 className="font-bold mb-2">Wood Accents</h3>
                                <p className="text-gray-600 text-sm">Warm boutique feel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#004499] text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Design Your Dream Boutique
                    </h2>
                    <p className="text-[#F4E7CF] mb-8">
                        Free 3D design and factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-[var(--primary)] hover:bg-[#f8f9fa]">
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
}



