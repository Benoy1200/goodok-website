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
    { name: "Glass Display Cases (玻璃展柜)", desc: "For premium collectibles", icon: "💎" },
    { name: "Wall Shelving (墙面货架)", desc: "Maximize vertical display", icon: "📐" },
    { name: "Trading Card Displays (卡牌展示)", desc: "Secure card showcases", icon: "🎴" },
    { name: "Themed Fixtures (主题装置)", desc: "Custom branded displays", icon: "🎨" },
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
                                Pop Culture Store (潮玩店)
                            </h1>
                            <p className="text-xl text-violet-100 mb-8">
                                Create the ultimate destination for anime fans, gamers, and collectors.
                                Display solutions that protect and showcase valuable items.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-violet-900 hover:bg-violet-50">
                                    Get Free 3D Design (获取免费设计)
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20fixtures%20for%20pop%20culture%20store"
                                    className="btn border-2 border-white text-white hover:bg-white hover:text-violet-900"
                                >
                                    WhatsApp Us
                                </a>
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
                        <h2 className="text-3xl font-bold mb-8">Why Choose Us (选择我们的理由)</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">🔒</span>
                                <h3 className="font-bold mb-2">Security (安全)</h3>
                                <p className="text-gray-600 text-sm">Locking cases for high-value items</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">💡</span>
                                <h3 className="font-bold mb-2">Lighting (照明)</h3>
                                <p className="text-gray-600 text-sm">LED lighting to highlight products</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🎨</span>
                                <h3 className="font-bold mb-2">Custom (定制)</h3>
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
                        Start Your Pop Culture Store (开始您的潮玩店)
                    </h2>
                    <p className="text-violet-200 mb-8">
                        Free 3D design within 24 hours. Factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-violet-900 hover:bg-violet-50">
                        Get Started (开始)
                    </Link>
                </div>
            </section>
        </div>
    );
}
