import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Wall Shelving Systems | Wall-Mounted Retail Display | Goodok",
    description:
        "Space-saving wall shelving systems for retail stores. Maximize vertical space with our modular wall-mounted display solutions.",
    keywords: [
        "wall shelving",
        "wall mounted shelving",
        "retail wall display",
        "slatwall panels",
        "wall shelving systems",
    ],
};

const features = [
    {
        title: "Space Saving (节省空间)",
        description: "Maximize vertical space without taking floor area.",
        icon: "📏",
    },
    {
        title: "Modular System (模块系统)",
        description: "Mix and match components for custom configurations.",
        icon: "🧩",
    },
    {
        title: "Easy Install (易安装)",
        description: "Simple mounting system for quick installation.",
        icon: "🔧",
    },
    {
        title: "Multiple Styles (多种风格)",
        description: "Slatwall, gridwall, and bracket options available.",
        icon: "🎨",
    },
];

const specs = [
    { label: "Height (高度)", value: "Up to 3000mm" },
    { label: "Width (宽度)", value: "900mm - 1200mm per panel" },
    { label: "Shelf Depth (层板深度)", value: "200mm - 400mm" },
    { label: "Steel Thickness (钢材厚度)", value: "0.8mm - 1.5mm" },
    { label: "Shelf Load (层板承重)", value: "30kg - 80kg per shelf" },
    { label: "Finish (表面处理)", value: "Powder Coated" },
];

export default function WallShelvingPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-green-300 text-sm font-medium">Products / Wall Shelving</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Wall Shelving (墙面货架)
                            </h1>
                            <p className="text-xl text-green-100 mb-8">
                                Maximize vertical space with our wall-mounted shelving systems.
                                Perfect for boutiques, pharmacies, and specialty stores.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-green-900 hover:bg-green-50">
                                    Get Free Quote (获取报价)
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20wall%20shelving%20quote"
                                    className="btn border-2 border-white text-white hover:bg-white hover:text-green-900"
                                >
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-green-800/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">📐</span>
                            </div>
                            <p className="text-center text-green-200 mt-4 text-sm">
                                [产品图片占位 - Product Image Placeholder]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Key Features (核心优势)
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl">
                                <span className="text-4xl mb-4 block">{feature.icon}</span>
                                <h3 className="font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Specifications (产品规格)
                        </h2>
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <table className="w-full">
                                <tbody>
                                    {specs.map((spec, index) => (
                                        <tr key={spec.label} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                                            <td className="px-6 py-4 font-medium">{spec.label}</td>
                                            <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Wall System Types (墙面系统类型)
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <span className="text-5xl mb-4 block">📋</span>
                            <h3 className="text-xl font-bold mb-2">Slatwall (槽板)</h3>
                            <p className="text-gray-600">Versatile panels with horizontal grooves for various accessories.</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <span className="text-5xl mb-4 block">🔲</span>
                            <h3 className="text-xl font-bold mb-2">Gridwall (网格板)</h3>
                            <p className="text-gray-600">Wire grid panels for modern, industrial aesthetics.</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <span className="text-5xl mb-4 block">📏</span>
                            <h3 className="text-xl font-bold mb-2">Bracket System (托架系统)</h3>
                            <p className="text-gray-600">Clean wall-mounted brackets with adjustable shelves.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-green-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Get Your Custom Wall System (定制您的墙面系统)
                    </h2>
                    <p className="text-green-200 mb-8 max-w-2xl mx-auto">
                        Send us your wall dimensions and we&apos;ll create a custom layout.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn bg-white text-green-900 hover:bg-green-50">
                            Request Quote (获取报价)
                        </Link>
                        <Link href="/products" className="btn border-2 border-white text-white hover:bg-white hover:text-green-900">
                            View All Products (查看所有产品)
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
