import type { Metadata } from "next";
import Link from "next/link";
import ProductMarquee from "@/components/ProductMarquee";
import { ProductSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Clothing Racks Wholesale: $50-$300 Garment Display Systems | Goodok",
    description:
        "Buy clothing racks wholesale $50-$300. Round racks, 4-way racks, waterfall displays for boutiques and fashion stores. Factory-direct. Free 3D design.",
    keywords: [
        "clothing racks",
        "garment display",
        "fashion store fixtures",
        "boutique racks",
        "clothing display",
        "clothing rack price",
    ],
};

const faqItems = [
    {
        question: "How much do clothing racks cost wholesale?",
        answer: "Factory-direct clothing racks cost $50-$300. Basic round racks: $50-$100, 4-way racks: $80-$150, Premium waterfall displays: $150-$300."
    },
    {
        question: "What types of clothing racks are available?",
        answer: "We offer: Round racks, 4-way racks, waterfall displays, straight bars, Z-racks, and wall-mounted rails. All available in chrome, matte black, and custom colors."
    },
    {
        question: "What is the load capacity of clothing racks?",
        answer: "Standard racks hold 50-100kg. Heavy-duty racks hold 100-150kg. Steel thickness (1.0-1.5mm) and base weight determine capacity. All racks designed for commercial use."
    }
];

const productImages = [
    "/images/products/clothing-racks/ZZ-004.jpg",
    "/images/products/clothing-racks/ZZ-005.jpg",
    "/images/products/clothing-racks/ZZ-006.jpg",
    "/images/products/clothing-racks/1000中岛架.jpg",
    "/images/products/clothing-racks/1200中岛架.jpg",
    "/images/products/clothing-racks/1200中岛架-1.jpg",
    "/images/products/clothing-racks/1300中岛架1.jpg",
    "/images/products/clothing-racks/G-BDJ-2.jpg",
    "/images/products/clothing-racks/G-FZD-2.jpg",
    "/images/products/clothing-racks/G-FZD-B1.jpg",
    "/images/products/clothing-racks/G-GWD-1.jpg",
    "/images/products/clothing-racks/衣架A.jpg",
];

const features = [
    {
        title: "Modern Aesthetics",
        description: "Sleek designs that complement your fashion merchandise.",
        icon: "✨",
    },
    {
        title: "Heavy-Duty Construction",
        description: "Strong steel frames support heavy garments with ease.",
        icon: "💪",
    },
    {
        title: "Multiple Styles",
        description: "Round racks, 4-way racks, waterfall displays, and more.",
        icon: "🔄",
    },
    {
        title: "Premium Finishes",
        description: "Chrome, matte black, rose gold, and custom colors.",
        icon: "🎨",
    },
];

const specs = [
    { label: "Height", value: "1400mm - 1800mm" },
    { label: "Width", value: "600mm - 1200mm" },
    { label: "Depth", value: "400mm - 600mm" },
    { label: "Material", value: "Steel / Stainless Steel" },
    { label: "Load Capacity", value: "50kg - 100kg" },
    { label: "Finish", value: "Chrome / Powder Coated" },
];

export default function ClothingRacksPage() {
    return (
        <div className="pt-24">
            <ProductSchema 
                name="Clothing Racks"
                description="Professional clothing racks and garment display systems for boutiques and fashion stores."
                category="Retail Fixtures"
                price="50"
            />
            <FAQSchema items={faqItems} />
            <section className="bg-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Clothing Racks
                        </h1>
                        <p className="text-xl text-gray-600 mb-4">
                            Elegant garment display systems for fashion boutiques, clothing stores,
                            and retail showrooms. Modern designs that enhance your merchandise.
                        </p>
                        <p className="text-sm text-gray-500 mb-8">
                            <span className="font-medium">Typical range: $50-$300.</span> Prices vary based on specifications. Contact us for exact quote.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/free-3d-design" className="btn btn-primary">
                                Get Free Quote
                            </Link>
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20clothing%20racks%20quote"
                                className="btn btn-secondary"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <ProductMarquee images={productImages} productName="Clothing Racks" />

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
                        Get a free 3D store design and quote for your clothing racks.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn btn-primary">
                            Get Free Layout Design
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                    <div className="mt-8 text-sm text-gray-500">
                        <p>Related guides: <Link href="/resources/blog/how-to-open-boutique" className="text-[var(--accent)] hover:underline">How to Open a Boutique</Link> | <Link href="/resources/blog/retail-shelving-cost-guide" className="text-[var(--accent)] hover:underline">Pricing Guide</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
