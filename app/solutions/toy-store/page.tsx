import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Toy Store Fixtures | Kids Retail Display Solutions | Goodok",
    description:
        "Safe and engaging toy store fixtures. Kid-friendly displays, interactive shelving, and colorful store solutions.",
    keywords: [
        "toy store fixtures",
        "toy store shelving",
        "kids store display",
        "toy shop design",
        "children store fixtures",
    ],
};

const products = [
    { name: "Low Gondolas (矮中岛架)", desc: "Kid-height displays", icon: "📦" },
    { name: "Demo Tables (试玩台)", desc: "Interactive play areas", icon: "🎲" },
    { name: "Wall Displays (墙面展示)", desc: "Maximize vertical space", icon: "📐" },
    { name: "Dump Bins (促销桶)", desc: "For small toys and impulse buys", icon: "🪣" },
];

export default function ToyStoreSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-orange-500 to-yellow-400 text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-orange-100 text-sm font-medium">Solutions / Toy Store</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Toy Store (玩具店)
                            </h1>
                            <p className="text-xl text-orange-50 mb-8">
                                Create a magical shopping experience for kids and parents.
                                Safe, engaging, and sales-optimized layouts.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-orange-600 hover:bg-orange-50">
                                    Get Free 3D Design (获取免费设计)
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20fixtures%20for%20toy%20store"
                                    className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600"
                                >
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-orange-600/30 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">🧸</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Recommended Products (推荐产品)
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.name} className="bg-gray-50 rounded-xl p-6 text-center">
                                <span className="text-4xl mb-4 block">{product.icon}</span>
                                <h3 className="font-bold mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm">{product.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Safety First (安全第一)</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">🔵</span>
                                <h3 className="font-bold mb-2">Round Corners (圆角设计)</h3>
                                <p className="text-gray-600 text-sm">No sharp edges for child safety</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🔩</span>
                                <h3 className="font-bold mb-2">Anti-Tip (防倾倒)</h3>
                                <p className="text-gray-600 text-sm">Secured fixtures prevent accidents</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">👁️</span>
                                <h3 className="font-bold mb-2">Visibility (可视性)</h3>
                                <p className="text-gray-600 text-sm">Low shelves for parent sightlines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-orange-500 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Design Your Dream Toy Store (设计您的玩具店)
                    </h2>
                    <p className="text-orange-100 mb-8">
                        Free store layout design. Factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-orange-600 hover:bg-orange-50">
                        Get Started (开始)
                    </Link>
                </div>
            </section>
        </div>
    );
}
