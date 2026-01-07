import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Trendy Toys Store | Pop Culture Store Project | Goodok",
    description: "A 200銕?pop culture store in Dubai featuring anime figures, trading cards, and gaming accessories with custom LED showcases.",
    keywords: [
        "pop culture store design",
        "toy store fixtures",
        "anime store display",
        "gaming store design",
        "Dubai store project",
    ],
};

export default function TrendyToysStorePage() {
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
                            Trendy Toys Store
                        </h1>
                        <p className="text-xl text-[#F8F1E3] mb-6">
                            Dubai, UAE 路 Pop Culture Store 路 200銕?
                        </p>
                        <p className="text-lg text-[#F8F1E3]">
                            A modern pop culture store featuring anime figures, trading cards, and gaming accessories
                            with custom LED showcases and interactive demo areas.
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
                                    <li>鈥?Display high-value collectibles securely</li>
                                    <li>鈥?Create interactive demo areas for customers</li>
                                    <li>鈥?Maximize 200銕?space efficiency</li>
                                    <li>鈥?Premium aesthetic for anime figures</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>鈥?Custom LED showcases with lockable glass</li>
                                    <li>鈥?Interactive demo area with low-height gondolas</li>
                                    <li>鈥?Colorful theming matching brand identity</li>
                                    <li>鈥?Modular shelving for easy reconfiguration</li>
                                </ul>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-video bg-gradient-to-br from-[#f8f9fa] to-[#f8f9fa] rounded-xl flex items-center justify-center mb-12">
                            <span className="text-8xl">🏪</span>
                        </div>

                        {/* Key Features */}
                        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">💡</span>
                                <h3 className="font-bold mb-2">Custom LED Showcases</h3>
                                <p className="text-gray-600 text-sm">
                                    High-quality LED lighting to highlight premium collectibles and create an immersive atmosphere.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">🎬</span>
                                <h3 className="font-bold mb-2">Interactive Demo Area</h3>
                                <p className="text-gray-600 text-sm">
                                    Dedicated space for customers to try products with accessible displays and comfortable seating.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">🔒</span>
                                <h3 className="font-bold mb-2">Secure Lockable Displays</h3>
                                <p className="text-gray-600 text-sm">
                                    Tempered glass cases with secure locks for high-value items and limited edition figures.
                                </p>
                            </div>
                        </div>

                        {/* Results */}
                        <h2 className="text-3xl font-bold mb-8">Results</h2>
                        <div className="bg-[#f8f9fa] rounded-xl p-8">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-2">40%</div>
                                    <div className="text-gray-600">Increase in Collectible Sales</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-2">200+</div>
                                    <div className="text-gray-600">Products Displayed</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-2">95%</div>
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
                        Start Your Pop Culture Store
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



