import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Clothing Racks Wholesale | Garment Display for Boutiques | Goodok",
    description:
        "Premium clothing racks and garment displays for boutiques and fashion stores. Floor racks, wall-mounted, and rolling options.",
    keywords: [
        "clothing racks",
        "garment display",
        "boutique fixtures",
        "clothes rack wholesale",
        "fashion store display",
    ],
};

const types = [
    { name: "4-Way Racks", desc: "Display 4 directions of merchandise", icon: "🔲" },
    { name: "Round Racks", desc: "Classic circular display racks", icon: "⭕" },
    { name: "Straight Racks", desc: "Simple horizontal display", icon: "🔲" },
    { name: "Wall-Mounted", desc: "Space-saving wall solutions", icon: "📐" },
    { name: "Rolling Racks", desc: "Portable with wheels", icon: "🛒" },
    { name: "Nesting Tables", desc: "For folded items and accessories", icon: "🔳" },
];

export default function ClothingRacksPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#004499] to-[#ff6b35] text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#f8f9fa] text-sm font-medium">Products / Clothing Racks</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Clothing Racks
                            </h1>
                            <p className="text-xl text-[#F8F1E3] mb-8">
                                Elegant garment displays for boutiques, fashion stores, and retail spaces.
                                Multiple styles to match your store aesthetic.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-[var(--primary)] hover:bg-[#f8f9fa]">
                                    Get Free Quote
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20clothing%20racks%20quote"
                                    className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]"
                                >
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-[#0066cc]/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">👔</span>
                            </div>
                            <p className="text-center text-[#F4E7CF] mt-4 text-sm">
                                [Product Image Placeholder]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Rack Types
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {types.map((type) => (
                            <div key={type.name} className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-3 block">{type.icon}</span>
                                <h3 className="font-bold mb-2">{type.name}</h3>
                                <p className="text-gray-600 text-sm">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Material Options
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                            <span className="text-5xl mb-4 block">🔩</span>
                            <h3 className="text-xl font-bold mb-2">Chrome</h3>
                            <p className="text-gray-600">Classic shiny finish, durable</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                            <span className="text-5xl mb-4 block">⬛</span>
                            <h3 className="text-xl font-bold mb-2">Matte Black</h3>
                            <p className="text-gray-600">Modern, premium aesthetic</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                            <span className="text-5xl mb-4 block">🪵</span>
                            <h3 className="text-xl font-bold mb-2">Wood Accent</h3>
                            <p className="text-gray-600">Warm, boutique feel</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#004499] text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Design Your Fashion Display
                    </h2>
                    <p className="text-[#F4E7CF] mb-8 max-w-2xl mx-auto">
                        We create custom clothing display systems for any store style.
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
