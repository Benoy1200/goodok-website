import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pop Culture Store Fixtures | Collectibles & Gaming Display | Goodok",
    description:
        "Complete fixture solutions for pop culture, anime, and gaming stores. Display cases for action figures, trading cards, and collectibles.",
    keywords: [
        "pop culture store fixtures",
        "anime store display",
        "gaming store fixtures",
        "collectibles display",
        "funko pop display",
    ],
};

const products = [
    { name: "Glass Display Cases", desc: "For premium collectibles", icon: "💎" },
    { name: "Wall Shelving", desc: "Maximize vertical display", icon: "📐" },
    { name: "Trading Card Displays", desc: "Secure card showcases", icon: "🎴" },
    { name: "Themed Fixtures", desc: "Custom branded displays", icon: "🎨" },
];

// Store case studies for this industry
const caseStudies = [
    {
        name: "Trendy Toys Store",
        location: "Dubai, UAE",
        description: "A 200㎡ pop culture store featuring anime figures, trading cards, and gaming accessories.",
        highlights: ["Custom LED showcases", "Interactive demo area", "Secure lockable displays"],
        href: "/projects/trendy-toys-store",
    },
    {
        name: "Anime Paradise",
        location: "Singapore",
        description: "Premium collectibles store with high-end display cases for limited edition figures.",
        highlights: ["Glass tower displays", "Themed wall units", "Card display systems"],
        href: "#",
    },
];

export default function PopCultureSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-violet-900 to-purple-700 text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-violet-300 text-sm font-medium">Solutions / Pop Culture Store</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Pop Culture Store
                            </h1>
                            <p className="text-xl text-violet-100 mb-8">
                                Create the ultimate destination for anime fans, gamers, and collectors.
                                Display solutions that protect and showcase valuable items.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-violet-900 hover:bg-violet-50">
                                    Get Free 3D Design
                                </Link>
                                <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-violet-900">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-violet-800/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">🎮</span>
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
                        See how we&apos;ve helped pop culture store owners create stunning retail spaces
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudies.map((study) => (
                            <div key={study.name} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition">
                                <div className="aspect-video bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                                    <span className="text-6xl">🏪</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold">{study.name}</h3>
                                        <span className="text-sm text-gray-500">{study.location}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{study.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.highlights.map((h) => (
                                            <span key={h} className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    {study.href !== "#" && (
                                        <Link href={study.href} className="text-violet-600 font-medium hover:underline">
                                            View Project Details →
                                        </Link>
                                    )}
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
                        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">🔒</span>
                                <h3 className="font-bold mb-2">Security</h3>
                                <p className="text-gray-600 text-sm">Locking cases for high-value items</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">💡</span>
                                <h3 className="font-bold mb-2">Lighting</h3>
                                <p className="text-gray-600 text-sm">LED lighting to highlight products</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🎨</span>
                                <h3 className="font-bold mb-2">Custom</h3>
                                <p className="text-gray-600 text-sm">Themed designs for your brand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-violet-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Your Pop Culture Store
                    </h2>
                    <p className="text-violet-200 mb-8">
                        Free 3D design within 24 hours. Factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-violet-900 hover:bg-violet-50">
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
}
