import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us - 15+ Years of Retail Display Excellence",
    description:
        "Learn about Goodok Shopfitting - China's leading retail display manufacturer with 15+ years experience, serving 500+ stores in over 50 countries worldwide.",
};

export default function AboutPage() {
    return (
        <div className="pt-24">
            {/* Hero with Stats */}
            <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Goodok Shopfitting
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-200 mb-12">
                            Professional Retail Display Manufacturer Since 2009
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            {[
                                { number: "15+", label: "Years" },
                                { number: "500+", label: "Stores" },
                                { number: "50+", label: "Countries" },
                                { number: "50+", label: "Team" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white">{stat.number}</div>
                                    <div className="text-blue-300 text-sm uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery - 3 Full Width Images */}
            <section className="py-0">
                {/* Office Team */}
                <div className="relative h-[70vh] min-h-[500px]">
                    <Image
                        src="/images/about/office-team.jpg"
                        alt="Goodok professional team - designers and sales staff"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Team</h2>
                        <p className="text-lg text-gray-200">50+ professionals dedicated to your success</p>
                    </div>
                </div>

                {/* Factory Workshop */}
                <div className="relative h-[70vh] min-h-[500px]">
                    <Image
                        src="/images/about/factory-workshop.jpg"
                        alt="Goodok factory workshop - manufacturing facility"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Factory</h2>
                        <p className="text-lg text-gray-200">15,000 sqm manufacturing facility in Foshan</p>
                    </div>
                </div>

                {/* Warehouse */}
                <div className="relative h-[70vh] min-h-[500px]">
                    <Image
                        src="/images/about/warehouse.jpg"
                        alt="Goodok warehouse - products ready for global shipping"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Warehouse</h2>
                        <p className="text-lg text-gray-200">Ready for global shipping to 50+ countries</p>
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Transform Your Store?
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Get a free 3D store design and factory-direct pricing
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                            Get Free 3D Design
                        </Link>
                        <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
