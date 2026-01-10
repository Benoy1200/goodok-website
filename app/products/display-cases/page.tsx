import type { Metadata } from "next";
import Link from "next/link";
import ProductMarquee from "@/components/ProductMarquee";
import { ProductSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Display Cases Wholesale: $200-$1500 Glass Showcases | Goodok",
    description:
        "Buy glass display cases wholesale $200-$1500. Island tables, jewelry showcases, cosmetics displays with LED lighting. Factory-direct. Ships worldwide.",
    keywords: [
        "display cases",
        "island display table",
        "glass showcase",
        "jewelry display",
        "retail display case",
        "display case price",
    ],
};

const faqItems = [
    {
        question: "How much do glass display cases cost?",
        answer: "Factory-direct display cases cost $200-$1500. Basic cases: $200-$400, LED-lit showcases: $400-$800, Premium jewelry cases: $800-$1500."
    },
    {
        question: "What types of display cases are available?",
        answer: "We offer: Island display tables, wall-mounted showcases, tower cases, counter displays, and custom cases. All available with LED lighting and security locks."
    },
    {
        question: "Do display cases come with LED lighting?",
        answer: "Yes, LED lighting is available on all cases. Options include: top-mount LED strips, under-shelf lighting, and adjustable spotlights. 3000K-5000K color temperatures."
    }
];

const productImages = [
    "/images/products/Island-Display-Table/LST-025流水台.jpg",
    "/images/products/Island-Display-Table/LST-026流水台.jpg",
    "/images/products/Island-Display-Table/CC_2507110996bc81212-20.CC_Xdk.0000.jpg",
    "/images/products/Island-Display-Table/CC_2507110996bc81212-38.CC_Xdk.0000.jpg",
    "/images/products/Island-Display-Table/CC_2507110996bc81212-39.CC_Xdk.0000.jpg",
    "/images/products/Island-Display-Table/Camera008_20220714062421090-2.jpg",
    "/images/products/Island-Display-Table/Camera008_20220714063054658-2.jpg",
    "/images/products/Island-Display-Table/头饰流水台 (2).jpg",
    "/images/products/Island-Display-Table/香薰流水台.jpg",
    "/images/products/Island-Display-Table/两层展台A2.jpg",
    "/images/products/Island-Display-Table/组合展台A2.jpg",
    "/images/products/Island-Display-Table/高低展台A2.jpg",
];

const features = [
    {
        title: "Tempered Glass",
        description: "Crystal clear, safety glass panels for premium display.",
        icon: "🔲",
    },
    {
        title: "LED Lighting",
        description: "Built-in LED strips to highlight your products.",
        icon: "💡",
    },
    {
        title: "Secure Locking",
        description: "High-security locks for valuable merchandise.",
        icon: "🔒",
    },
    {
        title: "Custom Sizes",
        description: "Made to fit your exact space requirements.",
        icon: "📐",
    },
];

const specs = [
    { label: "Height", value: "850mm - 1200mm" },
    { label: "Width", value: "600mm - 1500mm" },
    { label: "Depth", value: "400mm - 800mm" },
    { label: "Glass", value: "6mm - 10mm Tempered" },
    { label: "Lighting", value: "LED Strip / Spotlight" },
    { label: "Finish", value: "White / Black / Wood Grain" },
];

export default function DisplayCasesPage() {
    return (
        <div className="pt-24">
            <ProductSchema 
                name="Display Cases"
                description="Premium glass display cases and island tables for retail stores."
                category="Retail Fixtures"
                price="200"
            />
            <FAQSchema items={faqItems} />
            <section className="bg-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Display Cases & Island Tables
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Premium glass display cases and island display tables for jewelry,
                            cosmetics, and high-value merchandise. Elegant and secure.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/free-3d-design" className="btn btn-primary">
                                Get Free Quote
                            </Link>
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20display%20case%20quote"
                                className="btn btn-secondary"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <ProductMarquee images={productImages} productName="Display Cases" />

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
                        Get a free 3D store design and quote for your display cases.
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
                        <p>Related guides: <Link href="/resources/blog/jewelry-store-display-ideas" className="text-[var(--accent)] hover:underline">Jewelry Display Ideas</Link> | <Link href="/resources/blog/retail-shelving-cost-guide" className="text-[var(--accent)] hover:underline">Pricing Guide</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
