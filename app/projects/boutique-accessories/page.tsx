import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Boutique Accessories | Fashion Boutique Project | Goodok",
    description: "Fashion-forward boutique in Tokyo with elegant rose gold displays and glass accessory cases.",
    keywords: [
        "boutique design",
        "fashion store fixtures",
        "accessories display",
        "rose gold fixtures",
        "Tokyo store project",
    ],
};

export default function BoutiqueAccessoriesPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#004499] to-[#ff6b35] text-white py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/projects" className="text-[#f8f9fa] hover:text-white mb-4 inline-block">
                            鈫?Back to Projects
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                            Boutique Accessories
                        </h1>
                        <p className="text-xl text-[#F8F1E3] mb-6">
                            Tokyo, Japan 路 Fashion Boutique 路 120銕?
                        </p>
                        <p className="text-lg text-[#F8F1E3]">
                            Fashion-forward boutique with elegant rose gold displays, glass accessory cases,
                            and velvet displays for premium accessories.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Client Requirements</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>鈥?Elegant aesthetic for luxury accessories</li>
                                    <li>鈥?Rose gold theme throughout the store</li>
                                    <li>鈥?Efficient use of 120銕?space</li>
                                    <li>鈥?Premium positioning for high-end products</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>鈥?Rose gold racks with elegant design</li>
                                    <li>鈥?Glass accessory cases with LED lighting</li>
                                    <li>鈥?Velvet displays for premium items</li>
                                    <li>鈥?Modular shelving for easy reconfiguration</li>
                                </ul>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-video bg-gradient-to-br from-[#f8f9fa] to-[#f8f9fa] rounded-xl flex items-center justify-center mb-12">
                            <span className="text-8xl">👑</span>
                        </div>

                        {/* Key Features */}
                        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">✓</span>
                                <h3 className="font-bold mb-2">Rose Gold Racks</h3>
                                <p className="text-gray-600 text-sm">
                                    Elegant rose gold clothing racks that match the boutique's luxury aesthetic.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">💎</span>
                                <h3 className="font-bold mb-2">Glass Accessory Cases</h3>
                                <p className="text-gray-600 text-sm">
                                    Premium glass showcases with LED lighting for displaying jewelry and accessories.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">🎀</span>
                                <h3 className="font-bold mb-2">Velvet Displays</h3>
                                <p className="text-gray-600 text-sm">
                                    Luxurious velvet-lined displays for premium accessories and handbags.
                                </p>
                            </div>
                        </div>

                        {/* Results */}
                        <h2 className="text-3xl font-bold mb-8">Results</h2>
                        <div className="bg-[#f8f9fa] rounded-xl p-8">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-2">Premium</div>
                                    <div className="text-gray-600">Positioning Achieved</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-2">35%</div>
                                    <div className="text-gray-600">Increase in Sales</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-2">97%</div>
                                    <div className="text-gray-600">Customer Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#004499] text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Your Boutique
                    </h2>
                    <p className="text-[#F4E7CF] mb-8">
                        Get a free 3D design and consultation for your store. We've helped hundreds of store owners create stunning retail spaces.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/free-3d-design" className="btn bg-white text-[var(--primary)] hover:bg-[#f8f9fa]">
                            Get Free 3D Design
                        </Link>
                        <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}



