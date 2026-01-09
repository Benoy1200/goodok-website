import type { Metadata } from "next";
import Link from "next/link";
import ProductMarquee from "@/components/ProductMarquee";

export const metadata: Metadata = {
    title: "Gondola Shelving Wholesale | Double-Sided Retail Shelving | Goodok",
    description:
        "Factory-direct gondola shelving for supermarkets and retail stores. Double-sided units, customizable sizes, and competitive wholesale pricing.",
    keywords: [
        "gondola shelving",
        "gondola shelving wholesale",
        "double-sided shelving",
        "supermarket shelving",
        "retail gondola racks",
    ],
};

// 产品图片列表
const productImages = [
    "/images/products/gondola-shelving/CZ-003.jpg",
    "/images/products/gondola-shelving/CZ-006.jpg",
    "/images/products/gondola-shelving/Camera112_20211126021844215-6.jpg",
    "/images/products/gondola-shelving/中岛柜004_25071109085244b8b-15.jpg",
    "/images/products/gondola-shelving/中岛柜005-A_25071109085244b8b-1.jpg",
    "/images/products/gondola-shelving/中岛柜006-A_25071109085244b8b-2.jpg",
    "/images/products/gondola-shelving/中岛柜007_25071109085244b8b-3.jpg",
    "/images/products/gondola-shelving/中岛柜009_25071109085244b8b-5.jpg",
    "/images/products/gondola-shelving/中岛柜010A_25071109085244b8b-6.jpg",
    "/images/products/gondola-shelving/中岛柜012_25071109085244b8b-12.jpg",
    "/images/products/gondola-shelving/中岛柜013_25071109085244b8b-7.jpg",
    "/images/products/gondola-shelving/中岛柜014_25071109085244b8b-8.jpg",
];

const features = [
    {
        title: "Double-Sided Display",
        description: "Maximize product exposure with accessible shelving from both sides.",
        icon: "🏪",
    },
    {
        title: "Adjustable Shelves",
        description: "Customize shelf heights to fit any product size.",
        icon: "📐",
    },
    {
        title: "Heavy-Duty Steel",
        description: "1.0mm+ steel construction for lasting durability.",
        icon: "🔩",
    },
    {
        title: "Modular Design",
        description: "Connect multiple units to create endless aisle configurations.",
        icon: "🔧",
    },
];

const specs = [
    { label: "Height", value: "1200mm - 2400mm" },
    { label: "Width", value: "600mm - 1200mm" },
    { label: "Depth", value: "300mm - 500mm" },
    { label: "Steel Thickness", value: "0.7mm - 1.2mm" },
    { label: "Shelf Load", value: "50kg - 150kg per shelf" },
    { label: "Finish", value: "Powder Coated / Galvanized" },
];

export default function GondolaShelvingPage() {
    return (
        <div className="pt-24">
            {/* Hero - 白底居中标题 */}
            <section className="bg-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Gondola Shelving
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            The essential double-sided shelving system for supermarkets, convenience stores,
                            and retail spaces. Factory-direct wholesale pricing.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/free-3d-design" className="btn btn-primary">
                                Get Free Quote
                            </Link>
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20gondola%20shelving%20quote"
                                className="btn btn-secondary"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 产品图片走马灯 - 3行 */}
            <ProductMarquee images={productImages} productName="Gondola Shelving" />

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl">
                                <span className="text-4xl mb-4 block">{feature.icon}</span>
                                <h3 className="font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="py-20 bg-white border-t">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Specifications
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {specs.map((spec) => (
                                <div key={spec.label} className="flex justify-between py-3 border-b border-gray-200">
                                    <span className="font-medium text-gray-900">{spec.label}</span>
                                    <span className="text-gray-600">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white border-t">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get a free 3D store design and quote. Our team will help you find the perfect
                        gondola shelving solution for your store.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn btn-primary">
                            Get Free 3D Design
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
