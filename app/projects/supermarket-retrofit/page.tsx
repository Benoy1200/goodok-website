import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Supermarket Retrofit | Complete Store Renovation | Goodok",
    description: "Complete supermarket renovation in Bangkok with new gondola shelving and checkout counters.",
    keywords: [
        "supermarket design",
        "retail shelving",
        "store renovation",
        "gondola shelving",
        "Bangkok store project",
    ],
};

export default function SupermarketRetrofitPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-green-900 to-emerald-700 text-white py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/projects" className="text-green-300 hover:text-white mb-4 inline-block">
                            ← Back to Projects
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                            Supermarket Retrofit
                        </h1>
                        <p className="text-xl text-green-100 mb-6">
                            Bangkok, Thailand · Supermarket · 500㎡
                        </p>
                        <p className="text-lg text-green-100">
                            Complete supermarket renovation with new gondola shelving, checkout counters,
                            and improved customer flow optimization.
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
                                    <li>• Complete store renovation</li>
                                    <li>• Modern gondola shelving system</li>
                                    <li>• Efficient use of 500㎡ space</li>
                                    <li>• Improved customer flow and checkout experience</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• New gondola shelving with adjustable heights</li>
                                    <li>• Modern checkout counters with POS integration</li>
                                    <li>• Optimized aisle layout for better flow</li>
                                    <li>• Energy-efficient LED lighting throughout</li>
                                </ul>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-12">
                            <span className="text-8xl">🛒</span>
                        </div>

                        {/* Key Features */}
                        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">📦</span>
                                <h3 className="font-bold mb-2">Gondola Shelving</h3>
                                <p className="text-gray-600 text-sm">
                                    Modern gondola shelving with adjustable heights for maximum product visibility.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">🏪</span>
                                <h3 className="font-bold mb-2">Checkout Counters</h3>
                                <p className="text-gray-600 text-sm">
                                    Modern checkout counters with integrated POS systems and customer-friendly design.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">🚶</span>
                                <h3 className="font-bold mb-2">Optimized Flow</h3>
                                <p className="text-gray-600 text-sm">
                                    Improved aisle layout and customer flow for a better shopping experience.
                                </p>
                            </div>
                        </div>

                        {/* Results */}
                        <h2 className="text-3xl font-bold mb-8">Results</h2>
                        <div className="bg-green-50 rounded-xl p-8">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                                    <div className="text-gray-600">Increase in Sales</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
                                    <div className="text-gray-600">Products Displayed</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
                                    <div className="text-gray-600">Customer Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-green-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Your Supermarket Project
                    </h2>
                    <p className="text-green-200 mb-8">
                        Get a free 3D design and consultation for your store. We've helped hundreds of store owners create stunning retail spaces.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/free-3d-design" className="btn bg-white text-green-900 hover:bg-green-50">
                            Get Free Layout Design
                        </Link>
                        <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-green-900">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
