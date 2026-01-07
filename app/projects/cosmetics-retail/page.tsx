import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cosmetics Retail | Modern Cosmetics Store | Goodok",
    description: "Modern cosmetics store in Seoul with sleek white displays and LED lighting for premium beauty products.",
    keywords: [
        "cosmetics store design",
        "beauty store fixtures",
        "makeup display",
        "modern retail design",
        "Seoul store project",
    ],
};

export default function CosmeticsRetailPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-pink-900 to-rose-700 text-white py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/projects" className="text-pink-300 hover:text-white mb-4 inline-block">
                            ← Back to Projects
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                            Cosmetics Retail
                        </h1>
                        <p className="text-xl text-pink-100 mb-6">
                            Seoul, South Korea · Modern Cosmetics Store · 180㎡
                        </p>
                        <p className="text-lg text-pink-100">
                            Modern cosmetics store with sleek white displays and LED lighting for premium
                            beauty products and skincare items.
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
                                    <li>• Modern, clean aesthetic for beauty products</li>
                                    <li>• Sleek white displays throughout store</li>
                                    <li>• Efficient use of 180㎡ space</li>
                                    <li>• Premium positioning for high-end cosmetics</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Sleek white displays with minimalist design</li>
                                    <li>• LED lighting for product highlighting</li>
                                    <li>• Modular shelving for easy reconfiguration</li>
                                    <li>• Custom makeup testing stations</li>
                                </ul>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-12">
                            <span className="text-8xl">💄</span>
                        </div>

                        {/* Key Features */}
                        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">⬜</span>
                                <h3 className="font-bold mb-2">Sleek White Displays</h3>
                                <p className="text-gray-600 text-sm">
                                    Minimalist white displays that create a clean, modern aesthetic.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">💡</span>
                                <h3 className="font-bold mb-2">LED Lighting</h3>
                                <p className="text-gray-600 text-sm">
                                    Premium LED lighting to highlight products and create an inviting atmosphere.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">🧪</span>
                                <h3 className="font-bold mb-2">Testing Stations</h3>
                                <p className="text-gray-600 text-sm">
                                    Custom makeup testing stations with mirrors and proper lighting.
                                </p>
                            </div>
                        </div>

                        {/* Results */}
                        <h2 className="text-3xl font-bold mb-8">Results</h2>
                        <div className="bg-pink-50 rounded-xl p-8">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-pink-600 mb-2">45%</div>
                                    <div className="text-gray-600">Increase in Sales</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
                                    <div className="text-gray-600">Products Displayed</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-pink-600 mb-2">96%</div>
                                    <div className="text-gray-600">Customer Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-pink-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Your Cosmetics Store
                    </h2>
                    <p className="text-pink-200 mb-8">
                        Get a free 3D design and consultation for your store. We've helped hundreds of store owners create stunning retail spaces.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/free-3d-design" className="btn bg-white text-pink-900 hover:bg-pink-50">
                            Get Free 3D Design
                        </Link>
                        <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-pink-900">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
