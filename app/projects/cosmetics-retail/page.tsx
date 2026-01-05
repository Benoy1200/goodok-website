import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Modern Cosmetics Retail Space | Project Case Study",
    description:
        "Premium retail fixtures for a modern cosmetics store, featuring glass display cases and elegant lighting.",
    keywords: [
        "cosmetics store design",
        "beauty store fixtures",
        "glass display cases",
        "retail case study",
    ],
};

export default function CosmeticsRetailPage() {
    return (
        <div className="pt-24">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.goodokshop.com" },
                    { name: "Projects", url: "https://www.goodokshop.com/projects" },
                    { name: "Cosmetics Retail", url: "https://www.goodokshop.com/projects/cosmetics-retail" },
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-600 to-pink-500 text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <Link href="/projects" className="text-purple-100 hover:underline mb-4 inline-block">
                            ← Back to Projects
                        </Link>
                        <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                            Cosmetics
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Modern Cosmetics Retail Space
                        </h1>
                        <div className="flex flex-wrap gap-6 text-lg">
                            <span>📍 Middle East</span>
                            <span>⏱️ 12 Days</span>
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
                                    src="/images/product-3.jpg"
                                    alt="Modern Cosmetics Store"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="text-2xl font-bold mb-4">Project Overview (项目概述)</h2>
                            <p className="text-gray-600 mb-6">
                                Premium retail fixtures for a modern cosmetics store, featuring glass display
                                cases and elegant lighting. The project focused on creating a luxurious shopping
                                experience that highlights beauty products effectively.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">Solutions (解决方案)</h2>
                            <ul className="space-y-3 text-gray-600 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Glass display showcases with LED backlighting
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Premium finish fixtures with gold accents
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Brand-integrated design elements
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500">✓</span>
                                    Security display systems for high-value products
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                                <h3 className="font-bold text-lg mb-4">Project Highlights</h3>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Glass display showcases
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Premium finish fixtures
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Brand-integrated design
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">✓</span>
                                        Security display systems
                                    </li>
                                </ul>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                    <span className="text-sm font-medium text-green-800">
                                        ✨ Results: 20% increase on average transaction value
                                    </span>
                                </div>

                                <a
                                    href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20saw%20the%20Cosmetics%20Store%20project"
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
