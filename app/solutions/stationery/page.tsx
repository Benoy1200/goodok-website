import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Stationery Store Fixtures | Educational & Office Supply Display | Goodok",
    description:
        "Complete fixture solutions for stationery and educational supply stores. Organized shelving, display racks, and storage solutions.",
    keywords: [
        "stationery store fixtures",
        "office supply display",
        "educational store shelving",
        "stationery shop design",
    ],
};

const products = [
    { name: "Wall Shelving", desc: "Maximize vertical space", icon: "📐" },
    { name: "Gondola Displays", desc: "Double-sided browsing", icon: "📦" },
    { name: "Pen & Pencil Racks", desc: "Organized display", icon: "✏️" },
    { name: "Book Displays", desc: "For notebooks and journals", icon: "📚" },
];

const caseStudies = [
    {
        name: "Stationery Paradise",
        location: "Tokyo, Japan",
        description: "A colorful 90㎡ stationery store with organized category zones and bright displays.",
        highlights: ["Color-coded sections", "Wall shelving systems", "Demo areas"],
        href: "#",
    },
];

export default function StationerySolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-800 to-indigo-700 text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-200 text-sm font-medium">Solutions / Stationery Store</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Stationery Store
                            </h1>
                            <p className="text-xl text-blue-100 mb-8">
                                Create an organized and inspiring shopping experience for students,
                                artists, and office professionals with our specialized fixtures.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-blue-800 hover:bg-blue-50">
                                    Get Free 3D Design
                                </Link>
                                <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-800">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-blue-700/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">✏️</span>
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
                        See how we&apos;ve helped stationery store owners create organized retail spaces
                    </p>
                    <div className="max-w-2xl mx-auto">
                        {caseStudies.map((study) => (
                            <div key={study.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                                    <span className="text-6xl">✏️</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold">{study.name}</h3>
                                        <span className="text-sm text-gray-500">{study.location}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{study.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {study.highlights.map((h) => (
                                            <span key={h} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
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
                        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">📋</span>
                                <h3 className="font-bold mb-2">Organization</h3>
                                <p className="text-gray-600 text-sm">Clear category zones for easy browsing</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🎨</span>
                                <h3 className="font-bold mb-2">Colorful</h3>
                                <p className="text-gray-600 text-sm">Bright displays attract students</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">📏</span>
                                <h3 className="font-bold mb-2">Adjustable</h3>
                                <p className="text-gray-600 text-sm">Flexible shelves for various products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-800 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Design Your Stationery Store
                    </h2>
                    <p className="text-blue-200 mb-8">
                        Free 3D design and factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-blue-800 hover:bg-blue-50">
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
}
