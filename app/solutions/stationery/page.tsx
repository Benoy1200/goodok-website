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
    { name: "Wall Shelving (墙面货架)", desc: "Maximize vertical space", icon: "📐" },
    { name: "Gondola Displays (中岛展示)", desc: "Double-sided browsing", icon: "📦" },
    { name: "Pen & Pencil Racks (笔架)", desc: "Organized display", icon: "✏️" },
    { name: "Book Displays (书架)", desc: "For notebooks and journals", icon: "📚" },
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
                                Stationery Store (文具店)
                            </h1>
                            <p className="text-xl text-blue-100 mb-8">
                                Create an organized and inspiring shopping experience for students,
                                artists, and office professionals with our specialized fixtures.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-blue-800 hover:bg-blue-50">
                                    Get Free 3D Design (获取免费设计)
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20fixtures%20for%20stationery%20store"
                                    className="btn border-2 border-white text-white hover:bg-white hover:text-blue-800"
                                >
                                    WhatsApp Us
                                </a>
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

            {/* Features */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Key Features (核心特点)</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">📋</span>
                                <h3 className="font-bold mb-2">Organization (分类陈列)</h3>
                                <p className="text-gray-600 text-sm">Clear category zones for easy browsing</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🎨</span>
                                <h3 className="font-bold mb-2">Colorful (色彩丰富)</h3>
                                <p className="text-gray-600 text-sm">Bright displays attract students</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">📏</span>
                                <h3 className="font-bold mb-2">Adjustable (可调整)</h3>
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
                        Design Your Stationery Store (设计您的文具店)
                    </h2>
                    <p className="text-blue-200 mb-8">
                        Free 3D design and factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-blue-800 hover:bg-blue-50">
                        Get Started (开始)
                    </Link>
                </div>
            </section>
        </div>
    );
}
