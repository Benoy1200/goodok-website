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
    { name: "Display Shelving (展示货架)", desc: "For home decor items", icon: "🏠" },
    { name: "Nesting Tables (展示台)", desc: "Multi-level displays", icon: "🔲" },
    { name: "Wall Systems (墙面系统)", desc: "Art and decor display", icon: "🖼️" },
    { name: "Gift Displays (礼品展示)", desc: "Highlight gifts and accessories", icon: "🎁" },
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
                                Lifestyle Store (生活馆)
                            </h1>
                            <p className="text-xl text-teal-100 mb-8">
                                Create inspiring spaces for home goods, gifts, and lifestyle products.
                                Flexible displays that adapt to changing collections.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-teal-800 hover:bg-teal-50">
                                    Get Free 3D Design (获取免费设计)
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20fixtures%20for%20lifestyle%20store"
                                    className="btn border-2 border-white text-white hover:bg-white hover:text-teal-800"
                                >
                                    WhatsApp Us
                                </a>
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

            {/* Vibe */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Create the Vibe (打造氛围)</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">🌿</span>
                                <h3 className="font-bold mb-2">Natural (自然风)</h3>
                                <p className="text-gray-600 text-sm">Wood and organic materials</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">⬜</span>
                                <h3 className="font-bold mb-2">Minimalist (极简风)</h3>
                                <p className="text-gray-600 text-sm">Clean lines and white space</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🎨</span>
                                <h3 className="font-bold mb-2">Eclectic (混搭风)</h3>
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
                        Design Your Lifestyle Store (设计您的生活馆)
                    </h2>
                    <p className="text-teal-200 mb-8">
                        Free 3D design and factory-direct pricing.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-white text-teal-800 hover:bg-teal-50">
                        Get Started (开始)
                    </Link>
                </div>
            </section>
        </div>
    );
}
