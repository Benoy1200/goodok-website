import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Custom Retail Fixtures | Bespoke Store Design | Goodok",
    description:
        "Custom retail fixtures designed and manufactured to your exact specifications. From concept to installation, we bring your vision to life.",
    keywords: [
        "custom fixtures",
        "custom retail fixtures",
        "bespoke store fixtures",
        "custom display",
        "store design",
    ],
};

const process = [
    { step: "01", title: "Consultation (咨询)", desc: "Share your vision and requirements" },
    { step: "02", title: "3D Design (3D设计)", desc: "We create detailed 3D renders" },
    { step: "03", title: "Approval (确认)", desc: "Review and approve the design" },
    { step: "04", title: "Production (生产)", desc: "Precision manufacturing begins" },
    { step: "05", title: "Shipping (发货)", desc: "Safe international delivery" },
    { step: "06", title: "Installation (安装)", desc: "Remote support or on-site service" },
];

export default function CustomFixturesPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-900 to-orange-700 text-white py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-amber-300 text-sm font-medium">Products / Custom Fixtures</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Custom Fixtures (定制货架)
                            </h1>
                            <p className="text-xl text-amber-100 mb-8">
                                Can&apos;t find what you need? We design and manufacture bespoke
                                retail fixtures to match your exact specifications.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/free-3d-design" className="btn bg-white text-amber-900 hover:bg-amber-50">
                                    Start Your Project (开始项目)
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20custom%20fixtures"
                                    className="btn border-2 border-white text-white hover:bg-white hover:text-amber-900"
                                >
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="aspect-[4/3] bg-amber-800/50 rounded-xl flex items-center justify-center">
                                <span className="text-6xl">✨</span>
                            </div>
                            <p className="text-center text-amber-200 mt-4 text-sm">
                                [定制案例图片占位 - Custom Project Placeholder]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Process (流程)
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {process.map((item) => (
                            <div key={item.step} className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl font-bold text-amber-500 mb-3 block">{item.step}</span>
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What We Can Create (我们能制造)
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Unique Shelving (特殊货架)", icon: "📚" },
                            { name: "Branded Displays (品牌展示)", icon: "🏷️" },
                            { name: "Interactive Fixtures (互动装置)", icon: "👆" },
                            { name: "Pop-up Stores (快闪店)", icon: "🎪" },
                            { name: "Museum Cases (博物馆展柜)", icon: "🏛️" },
                            { name: "Checkout Counters (收银台)", icon: "💳" },
                            { name: "Product Kiosks (产品亭)", icon: "🏗️" },
                            { name: "Complete Store Fit-out (整店装修)", icon: "🏪" },
                        ].map((item) => (
                            <div key={item.name} className="bg-white rounded-xl p-6 text-center shadow-sm">
                                <span className="text-3xl mb-3 block">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-amber-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Bring Your Vision to Life (实现您的愿景)
                    </h2>
                    <p className="text-amber-200 mb-8 max-w-2xl mx-auto">
                        Share your ideas, sketches, or inspiration. We&apos;ll handle the rest.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn bg-white text-amber-900 hover:bg-amber-50">
                            Start Your Project (开始项目)
                        </Link>
                        <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-amber-900">
                            Contact Us (联系我们)
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
