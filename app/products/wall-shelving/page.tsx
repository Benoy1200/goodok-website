import type { Metadata } from "next";
import Link from "next/link";
import ProductMarquee from "@/components/ProductMarquee";
import { ProductSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Wall Shelving Wholesale: $80-$350 Space-Saving Retail Display | Goodok",
    description:
        "Buy wall shelving wholesale $80-$350/unit. Wall-mounted retail display systems for boutiques, pharmacies, convenience stores. Free 3D design. Ships worldwide.",
    keywords: [
        "wall shelving",
        "wall mounted shelving",
        "retail wall display",
        "store wall fixtures",
        "wall shelving systems",
        "wall shelving price",
    ],
};

const faqItems = [
    {
        question: "How much does wall shelving cost?",
        answer: "Factory-direct wall shelving costs $80-$350 per unit depending on size and material. Basic slatwall: $80-$150, Standard units: $150-$250, Premium/custom: $250-$350."
    },
    {
        question: "What are the standard wall shelving dimensions?",
        answer: "Heights: 1800mm-2400mm (6-8 ft), Widths: 900mm-1200mm (3-4 ft), Depths: 300mm-450mm (12-18 in). Custom sizes available for any wall configuration."
    },
    {
        question: "How is wall shelving installed?",
        answer: "Wall shelving uses wall-mount brackets or rail systems. Professional installation recommended. We provide installation guides and hardware with every order."
    }
];

const productImages = [
    "/images/products/wall-shelving/BG-001边柜.jpg",
    "/images/products/wall-shelving/BG-005边柜.jpg",
    "/images/products/wall-shelving/BG-006边柜.jpg",
    "/images/products/wall-shelving/BG-007边柜.jpg",
    "/images/products/wall-shelving/BG-011边柜.jpg",
    "/images/products/wall-shelving/BG-013边柜.jpg",
    "/images/products/wall-shelving/BG-014边柜.jpg",
    "/images/products/wall-shelving/wow HOME (4).jpg",
    "/images/products/wall-shelving/wow HOME (11).jpg",
    "/images/products/wall-shelving/wow HOME (12).jpg",
    "/images/products/wall-shelving/靠墙高柜-A.jpg",
    "/images/products/wall-shelving/靠墙高柜-B.jpg",
];

const features = [
    {
        title: "Space Saving",
        description: "Maximize floor space by utilizing vertical wall areas.",
        icon: "📐",
    },
    {
        title: "Modular Design",
        description: "Mix and match components to create custom configurations.",
        icon: "🔧",
    },
    {
        title: "Easy Installation",
        description: "Quick wall-mount system with adjustable brackets.",
        icon: "⚡",
    },
    {
        title: "Premium Finish",
        description: "Powder-coated steel in multiple color options.",
        icon: "✨",
    },
];

const specs = [
    { label: "Height", value: "1800mm - 2400mm" },
    { label: "Width", value: "900mm - 1200mm" },
    { label: "Depth", value: "300mm - 450mm" },
    { label: "Steel Thickness", value: "0.8mm - 1.0mm" },
    { label: "Shelf Load", value: "30kg - 80kg per shelf" },
    { label: "Finish", value: "Powder Coated" },
];

export default function WallShelvingPage() {
    return (
        <div className="pt-24">
            <ProductSchema 
                name="Wall Shelving"
                description="Space-saving wall-mounted display systems for retail stores."
                category="Retail Fixtures"
                price="80"
            />
            <FAQSchema items={faqItems} />
            {/* Hero */}
            <section className="bg-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Wall Shelving Systems
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Space-saving wall-mounted display systems that maximize your retail space.
                            Perfect for boutiques, pharmacies, and specialty stores.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/free-3d-design" className="btn btn-primary">
                                Get Free Quote
                            </Link>
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20wall%20shelving%20quote"
                                className="btn btn-secondary"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <ProductMarquee images={productImages} productName="Wall Shelving" />

            <section className="py-20 bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
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

            <section className="py-20 bg-white border-t">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Specifications</h2>
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

            <section className="py-20 bg-white border-t">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get a free 3D store design and quote for your wall shelving needs.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn btn-primary">
                            Get Free 3D Design
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                    <div className="mt-8 text-sm text-gray-500">
                        <p>Related guides: <Link href="/resources/blog/gondola-vs-wall-shelving" className="text-[var(--accent)] hover:underline">Gondola vs Wall Shelving</Link> | <Link href="/resources/blog/retail-shelving-cost-guide" className="text-[var(--accent)] hover:underline">Pricing Guide</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
