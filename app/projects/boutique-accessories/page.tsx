import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "High-Converting Boutique Entry Layout | Project Case Study",
    description:
        "Strategic store layout design focused on maximizing customer flow and product visibility for a boutique accessories store.",
    keywords: [
        "boutique layout",
        "store design",
        "retail fixtures case study",
        "accessories store",
    ],
};

export default function BoutiqueAccessoriesPage() {
    return (
        <div className="pt-24">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.goodokshop.com" },
                    { name: "Projects", url: "https://www.goodokshop.com/projects" },
                    { name: "Boutique Accessories", url: "https://www.goodokshop.com/projects/boutique-accessories" },
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-rose-600 to-pink-500 text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <Link href="/projects" className="text-rose-100 hover:underline mb-4 inline-block">
                            ← Back to Projects
                        </Link>
                        <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                            Boutique
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            High-Converting Boutique Entry Layout
                        </h1>
                        <div className="flex flex-wrap gap-6 text-lg">
                            <span>📍 Southeast Asia</span>
                            <span>⏱️ 10 Days</span>
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
                                    src="/images/product-2.jpg"
                                    alt="Boutique Accessories Store"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="text-2xl font-bold mb-4">Project Overview (项目概述)</h2>
                            <p className="text-gray-600 mb-6">
                                Strategic store layout design focused on maximizing customer flow and product
                                visibility for a boutique accessories store. The redesigned entry layout
                                significantly improved customer engagement and dwell time.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">Solutions (解决方案)</h2>
                            <ul className="space-y-3 text-gray-600 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Optimized entry layout for immediate product visibility
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Product-focused display zones with themed areas
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Custom gondola shelving with premium finish
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Lighting design consultation for ambiance
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                                <h3 className="font-bold text-lg mb-4">Project Highlights</h3>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Optimized entry layout
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Product-focused display zones
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Custom gondola shelving
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Lighting design consultation
                                    </li>
                                </ul>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                    <span className="text-sm font-medium text-green-800">
                                        ✨ Results: 35% increase in customer dwell time
                                    </span>
                                </div>

                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20saw%20the%20Boutique%20project"
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
