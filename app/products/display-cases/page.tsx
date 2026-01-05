import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Display Cases Wholesale | Glass Showcases for Retail | Goodok",
    description:
        "Premium glass display cases for jewelry, cosmetics, and collectibles. LED lighting, security locks, custom sizes available.",
    keywords: [
        "display cases",
        "glass showcase",
        "retail display cases",
        "jewelry display case",
        "glass cabinet",
    ],
};

const features = [
    {
        title: "Tempered Glass (钢化玻璃)",
        description: "Safety glass that's 5x stronger than regular glass.",
        icon: "🔒",
    },
    {
        title: "LED Lighting (LED照明)",
        description: "Built-in LED strips to highlight your products.",
        icon: "💡",
    },
    {
        title: "Security Locks (安全锁)",
        description: "High-security cam locks to protect valuables.",
        icon: "🔐",
    },
    {
        title: "Custom Sizes (定制尺寸)",
        description: "Made to fit your exact requirements.",
        icon: "📏",
    },
];

const types = [
    { name: "Counter Display (柜台展示柜)", desc: "Eye-level displays at checkout", icon: "🏪" },
    { name: "Tower Display (立柱展示柜)", desc: "360° viewing for premium items", icon: "🗼" },
    { name: "Wall-Mounted (壁挂展示柜)", desc: "Space-saving wall cases", icon: "📋" },
    { name: "Corner Display (转角展示柜)", desc: "Maximize corner spaces", icon: "📐" },
];

export default function DisplayCasesPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-purple-300 text-sm font-medium">Products / Display Cases</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Display Cases (展示柜)
                            </h1>
                            <p className="text-xl text-purple-100 mb-8">
                                Premium glass showcases for jewelry, cosmetics, collectibles, and high-value items.
                                Built-in lighting and security features.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-purple-900 hover:bg-purple-50">
                                    Get Free Quote (获取报价)
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20display%20cases%20quote"
                                    className="btn border-2 border-white text-white hover:bg-white hover:text-purple-900"
                                >
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-purple-800/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">💎</span>
                            </div>
                            <p className="text-center text-purple-200 mt-4 text-sm">
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
                        Premium Features (核心优势)
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

            {/* Types */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Display Case Types (展示柜类型)
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {types.map((type) => (
                            <div key={type.name} className="bg-white rounded-xl p-6 shadow-sm">
                                <span className="text-4xl mb-3 block">{type.icon}</span>
                                <h3 className="font-bold mb-2">{type.name}</h3>
                                <p className="text-gray-600 text-sm">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Industries We Serve (服务行业)
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Jewelry Stores (珠宝店)", icon: "💍" },
                            { name: "Cosmetics (化妆品店)", icon: "💄" },
                            { name: "Collectibles (收藏品店)", icon: "🎮" },
                            { name: "Museums (博物馆)", icon: "🏛️" },
                            { name: "Electronics (数码店)", icon: "📱" },
                            { name: "Watches (钟表店)", icon: "⌚" },
                        ].map((item) => (
                            <div key={item.name} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-purple-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Custom Display Cases (定制展示柜)
                    </h2>
                    <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
                        Tell us your requirements and we&apos;ll design the perfect showcase.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn bg-white text-purple-900 hover:bg-purple-50">
                            Request Quote (获取报价)
                        </Link>
                        <Link href="/products" className="btn border-2 border-white text-white hover:bg-white hover:text-purple-900">
                            View All Products (查看所有产品)
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
