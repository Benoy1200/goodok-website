import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Trendy Toys Store | Pop Culture Store Project | Goodok",
    description: "A 200㎡ pop culture store in Dubai featuring anime figures, trading cards, and gaming accessories with custom LED showcases.",
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
            <section className="bg-gradient-to-br from-violet-900 to-purple-700 text-white py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/projects" className="text-violet-300 hover:text-white mb-4 inline-block">
                            ← Back to Projects
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                            Trendy Toys Store
                        </h1>
                        <p className="text-xl text-violet-100 mb-6">
                            Dubai, UAE · Pop Culture Store · 200㎡
                        </p>
                        <p className="text-lg text-violet-100">
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
                                    <li>• Display high-value collectibles securely</li>
                                    <li>• Create interactive demo areas for customers</li>
                                    <li>• Maximize 200㎡ space efficiency</li>
                                    <li>• Premium aesthetic for anime figures</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Custom LED showcases with lockable glass</li>
                                    <li>• Interactive demo area with low-height gondolas</li>
                                    <li>• Colorful theming matching brand identity</li>
                                    <li>• Modular shelving for easy reconfiguration</li>
                                </ul>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-video bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center mb-12">
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
                                <span className="text-4xl mb-4 block">🎮</span>
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
                        <div className="bg-blue-50 rounded-xl p-8">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                                    <div className="text-gray-600">Increase in Collectible Sales</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                                    <div className="text-gray-600">Products Displayed</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                                    <div className="text-gray-600">Customer Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-violet-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Your Pop Culture Store
                    </h2>
                    <p className="text-violet-200 mb-8">
                        Get a free 3D design and consultation for your store. We've helped hundreds of store owners create stunning retail spaces.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/free-3d-design" className="btn bg-white text-violet-900 hover:bg-violet-50">
                            Get Free 3D Design
                        </Link>
                        <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-violet-900">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
