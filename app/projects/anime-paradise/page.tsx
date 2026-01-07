import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Anime Paradise | Premium Collectibles Store | Goodok",
    description: "Premium collectibles store in Singapore with high-end display cases for limited edition figures and glass tower displays.",
    keywords: [
        "anime store design",
        "collectibles display",
        "premium showcase",
        "limited edition display",
        "Singapore store project",
    ],
};

export default function AnimeParadisePage() {
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
                            Anime Paradise
                        </h1>
                        <p className="text-xl text-[#F8F1E3] mb-6">
                            Singapore 路 Premium Collectibles Store 路 150銕?
                        </p>
                        <p className="text-lg text-[#F8F1E3]">
                            Premium collectibles store with high-end display cases for limited edition figures,
                            featuring glass tower displays and themed wall units.
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
                                    <li>鈥?Display limited edition figures prominently</li>
                                    <li>鈥?Premium aesthetic for high-value collectibles</li>
                                    <li>鈥?Efficient use of 150銕?space</li>
                                    <li>鈥?Themed design reflecting anime culture</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>鈥?Glass tower displays for premium figures</li>
                                    <li>鈥?Themed wall units with LED lighting</li>
                                    <li>鈥?Card display systems for trading cards</li>
                                    <li>鈥?Modular design for future expansion</li>
                                </ul>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-video bg-gradient-to-br from-[#f8f9fa] to-[#f8f9fa] rounded-xl flex items-center justify-center mb-12">
                            <span className="text-8xl">馃帉</span>
                        </div>

                        {/* Key Features */}
                        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">馃彈锔?/span>
                                <h3 className="font-bold mb-2">Glass Tower Displays</h3>
                                <p className="text-gray-600 text-sm">
                                    Premium glass tower showcases for displaying limited edition figures at eye level.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">馃帹</span>
                                <h3 className="font-bold mb-2">Themed Wall Units</h3>
                                <p className="text-gray-600 text-sm">
                                    Custom-designed wall units with anime themes and integrated LED lighting.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <span className="text-4xl mb-4 block">馃幋</span>
                                <h3 className="font-bold mb-2">Card Display Systems</h3>
                                <p className="text-gray-600 text-sm">
                                    Specialized displays for trading cards with protective sleeves and easy access.
                                </p>
                            </div>
                        </div>

                        {/* Results */}
                        <h2 className="text-3xl font-bold mb-8">Results</h2>
                        <div className="bg-[#f8f9fa] rounded-xl p-8">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-2">50%</div>
                                    <div className="text-gray-600">Increase in Premium Sales</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-2">300+</div>
                                    <div className="text-gray-600">Figures Displayed</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[var(--accent)] mb-2">98%</div>
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
                        Start Your Collectibles Store
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



