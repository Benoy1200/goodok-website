import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "1000 SQM Supermarket Shelving Retrofit | Project Case Study",
    description:
        "Complete gondola shelving replacement for a 1000sqm supermarket, improving product visibility and shopper experience.",
    keywords: [
        "supermarket shelving",
        "gondola retrofit",
        "retail case study",
        "supermarket fixtures",
    ],
};

export default function SupermarketRetrofitPage() {
    return (
        <div className="pt-24">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.goodokshop.com" },
                    { name: "Projects", url: "https://www.goodokshop.com/projects" },
                    { name: "Supermarket Retrofit", url: "https://www.goodokshop.com/projects/supermarket-retrofit" },
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <Link href="/projects" className="text-blue-100 hover:underline mb-4 inline-block">
                            ← Back to Projects
                        </Link>
                        <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                            Supermarket
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Supermarket Shelving Retrofit
                        </h1>
                        <div className="flex flex-wrap gap-6 text-lg">
                            <span>📍 USA</span>
                            <span>⏱️ 7 Days</span>
                            <span>📐 1000 sqm</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden mb-8">
                                <Image
                                    src="/images/factory-1.jpg"
                                    alt="Supermarket Shelving"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="text-2xl font-bold mb-4">Project Overview (项目概述)</h2>
                            <p className="text-gray-600 mb-6">
                                Complete gondola shelving replacement for a 1000sqm supermarket, improving
                                product visibility and shopper experience. The project was completed during
                                off-hours with zero business disruption.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">Solutions (解决方案)</h2>
                            <ul className="space-y-3 text-gray-600 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Heavy-duty gondola shelving (200kg+ load capacity)
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Endcap display optimization for promotions
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Checkout counter redesign for efficiency
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Refrigeration unit integration
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                                <h3 className="font-bold text-lg mb-4">Project Highlights</h3>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Heavy-duty gondola shelving
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Endcap display optimization
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Checkout counter redesign
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Refrigeration integration
                                    </li>
                                </ul>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                    <span className="text-sm font-medium text-green-800">
                                        ✨ Results: Completed during off-hours, zero business disruption
                                    </span>
                                </div>

                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20saw%20the%20Supermarket%20project"
                                    className="btn btn-whatsapp w-full mb-3"
                                >
                                    Discuss Your Project
                                </a>
                                <Link href="/free-3d-design" className="btn btn-primary w-full">
                                    Get Free 3D Design
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
