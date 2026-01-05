import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "500 SQM Trendy Toys Store Fit-out | Project Case Study",
    description:
        "Complete store fit-out for a 500sqm trendy toys and accessories retail space. From empty shell to grand opening in just 15 days.",
    keywords: [
        "toy store fit-out",
        "retail store project",
        "store fixtures case study",
        "trendy toys display",
    ],
};

export default function TrendyToysStorePage() {
    return (
        <div className="pt-24">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.goodokshop.com" },
                    { name: "Projects", url: "https://www.goodokshop.com/projects" },
                    { name: "Trendy Toys Store", url: "https://www.goodokshop.com/projects/trendy-toys-store" },
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-orange-600 to-yellow-500 text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <Link href="/projects" className="text-orange-100 hover:underline mb-4 inline-block">
                            ← Back to Projects
                        </Link>
                        <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                            Toys & Accessories
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            500 SQM Trendy Toys & Accessories Store
                        </h1>
                        <div className="flex flex-wrap gap-6 text-lg">
                            <span>📍 China</span>
                            <span>⏱️ 15 Days</span>
                            <span>📐 500 sqm</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            {/* Main Image */}
                            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden mb-8">
                                <Image
                                    src="/images/product-1.jpg"
                                    alt="Trendy Toys Store"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="text-2xl font-bold mb-4">Project Overview (项目概述)</h2>
                            <p className="text-gray-600 mb-6">
                                Complete store fit-out for a 500sqm trendy toys and accessories retail space.
                                From empty shell to grand opening in just 15 days. The project included custom
                                display shelving, LED lighting integration, and optimized store layout for
                                maximum product visibility.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">Challenges (项目挑战)</h2>
                            <ul className="space-y-3 text-gray-600 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500">⚡</span>
                                    Tight 15-day deadline for complete fit-out
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500">⚡</span>
                                    Large open space requiring strategic zoning
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500">⚡</span>
                                    Need for flexible displays to accommodate various product sizes
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold mb-4">Solutions (解决方案)</h2>
                            <ul className="space-y-3 text-gray-600 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Pre-manufactured modular fixtures for rapid installation
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Custom gondola shelving with adjustable shelves
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Integrated LED lighting for product highlighting
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Strategic layout design for customer flow optimization
                                </li>
                            </ul>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                                <h3 className="font-bold text-lg mb-4">Project Highlights</h3>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        500 sqm retail space
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Custom display shelving
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        LED lighting integration
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        From design to completion: 15 days
                                    </li>
                                </ul>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                    <span className="text-sm font-medium text-green-800">
                                        ✨ Results: Grand opening achieved on schedule
                                    </span>
                                </div>

                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20saw%20the%20Trendy%20Toys%20Store%20project"
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
