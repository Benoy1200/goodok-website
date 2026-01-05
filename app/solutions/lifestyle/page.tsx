import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Lifestyle Store Fixtures | Home & Living Display | Goodok",
    description:
        "Complete fixture solutions for lifestyle and home goods stores. Display solutions for home decor, gifts, and living products.",
    keywords: [
        "lifestyle store fixtures",
        "home goods display",
        "home decor store fixtures",
        "gift shop fixtures",
        "living store design",
    ],
};

const products = [
    { name: "Display Shelving", desc: "For home decor items", icon: "🏠" },
    { name: "Nesting Tables", desc: "Multi-level displays", icon: "🔲" },
    { name: "Wall Systems", desc: "Art and decor display", icon: "🖼️" },
    { name: "Gift Displays", desc: "Highlight gifts and accessories", icon: "🎁" },
];

const caseStudies = [
    {
        name: "Modern Living Concept Store",
        location: "Melbourne, Australia",
        description: "A 120㎡ lifestyle store with warm wood fixtures and flexible display systems.",
        highlights: ["Wood shelving units", "Modular displays", "Gift section"],
        href: "#",
    },
];

export default function LifestyleSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-teal-800 to-cyan-600 text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-teal-200 text-sm font-medium">Solutions / Lifestyle Store</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Lifestyle Store
                            </h1>
                            <p className="text-xl text-teal-100 mb-8">
                                Create inspiring spaces for home goods, gifts, and lifestyle products.
                                Flexible displays that adapt to changing collections.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-teal-800 hover:bg-teal-50">
                                    Get Free 3D Design
                                </Link>
                                <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-teal-800">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-teal-700/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">🏠</span>
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
                        See how we&apos;ve helped lifestyle store owners create inspiring retail spaces
                    </p>
                    <div className="max-w-2xl mx-auto">
                        {caseStudies.map((study) => (
                            <div key={study.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                                    <span className="text-6xl">🏠</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold">{study.name}</h3>
                                        <span className="text-sm text-gray-500">{study.location}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{study.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {study.highlights.map((h) => (
                                            <span key={h} className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
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

            {/* Vibe */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Create the Vibe</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">🌿</span>
                                <h3 className="font-bold mb-2">Natural</h3>
                                <p className="text-gray-600 text-sm">Wood and organic materials</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">⬜</span>
                                <h3 className="font-bold mb-2">Minimalist</h3>
                                <p className="text-gray-600 text-sm">Clean lines and white space</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🎨</span>
                                <h3 className="font-bold mb-2">Eclectic</h3>
                                <p className="text-gray-600 text-sm">Mix of styles and textures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-teal-800 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Design Your Lifestyle Store
                    </h2>
                    <p className="text-teal-200 mb-8">
                        Free 3D design and factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-teal-800 hover:bg-teal-50">
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
}
