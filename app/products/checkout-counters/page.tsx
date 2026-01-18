import type { Metadata } from "next";
import Link from "next/link";
import ProductMarquee from "@/components/ProductMarquee";
import { ProductSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Checkout Counters Wholesale: $300-$1500 Cash Wrap | Goodok",
    description:
        "Buy checkout counters wholesale $300-$1500. Modern cash wrap designs with storage and cable management. Custom sizes. Factory-direct. Ships worldwide.",
    keywords: [
        "checkout counter",
        "cash wrap counter",
        "retail checkout",
        "POS counter",
        "store checkout desk",
        "checkout counter price",
    ],
};

const faqItems = [
    {
        question: "How much do checkout counters cost?",
        answer: "Factory-direct checkout counters cost $300-$1500. Basic counters: $300-$500, Standard with storage: $500-$900, Premium custom: $900-$1500."
    },
    {
        question: "Can checkout counters be customized?",
        answer: "Yes, we offer full customization: dimensions, colors, materials (MDF/wood/steel), built-in storage, cable management holes, and branding options."
    },
    {
        question: "What features are included in checkout counters?",
        answer: "Standard features: built-in storage, cable management, adjustable shelves. Premium options: LED lighting, electronic locks, glass displays, and promotional panels."
    }
];

const productImages = [
    "/images/products/Checkout-Counters/收银台001_25071204413944b8b-1.jpg",
    "/images/products/Checkout-Counters/收银台005-弧形侧柜_25071204413944b8b-2.jpg",
    "/images/products/Checkout-Counters/收银台012_25071204413944b8b-8.jpg",
    "/images/products/Checkout-Counters/收银台014_25071204413944b8b-9.jpg",
    "/images/products/Checkout-Counters/收银台018B_25071204413944b8b-7.jpg",
    "/images/products/Checkout-Counters/收银组合001_25072110372644b8b-1.jpg",
    "/images/products/Checkout-Counters/收银组合002_25072110372644b8b-2.jpg",
    "/images/products/Checkout-Counters/收银组合003_25072110372644b8b-3.jpg",
    "/images/products/Checkout-Counters/收银组合004_25072110372644b8b-4.jpg",
    "/images/products/Checkout-Counters/收银组合005_25072110372644b8b-5.jpg",
    "/images/products/Checkout-Counters/SYT-009收银台.jpg",
    "/images/products/Checkout-Counters/Camera008_20220719090946233.jpg",
];

const features = [
    {
        title: "Built-in Storage",
        description: "Ample storage space for bags, supplies, and POS equipment.",
        icon: "📦",
    },
    {
        title: "Cable Management",
        description: "Hidden cable channels for a clean, professional look.",
        icon: "🔌",
    },
    {
        title: "Ergonomic Design",
        description: "Comfortable height for staff and easy customer interaction.",
        icon: "👤",
    },
    {
        title: "Custom Dimensions",
        description: "Made to fit your exact store layout requirements.",
        icon: "📐",
    },
];

const specs = [
    { label: "Height", value: "850mm - 1000mm" },
    { label: "Width", value: "1200mm - 2400mm" },
    { label: "Depth", value: "600mm - 800mm" },
    { label: "Material", value: "MDF / Steel / Wood" },
    { label: "Counter Top", value: "Laminate / Solid Surface" },
    { label: "Finish", value: "Multiple Colors Available" },
];

export default function CheckoutCountersPage() {
    return (
        <div className="pt-24">
            <ProductSchema 
                name="Checkout Counters"
                description="Professional checkout and cash wrap counters for retail stores with storage and cable management."
                category="Retail Fixtures"
                price="300"
            />
            <FAQSchema items={faqItems} />
            <section className="bg-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Checkout Counters
                        </h1>
                        <p className="text-xl text-gray-600 mb-4">
                            Professional checkout and cash wrap counters designed for efficiency
                            and customer flow. Customizable to match your store design.
                        </p>
                        <p className="text-sm text-gray-500 mb-8">
                            <span className="font-medium">Typical range: $300-$1500.</span> Prices vary based on specifications. Contact us for exact quote.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/free-3d-design" className="btn btn-primary">
                                Get Free Quote
                            </Link>
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20checkout%20counter%20quote"
                                className="btn btn-secondary"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <ProductMarquee images={productImages} productName="Checkout Counter" />

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
                        Get a free 3D store design and custom checkout counter quote.
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
                        <p>Related guides: <Link href="/resources/blog/retail-shelving-cost-guide" className="text-[var(--accent)] hover:underline">Pricing Guide</Link> | <Link href="/resources/blog/retail-fixtures-wholesale-guide" className="text-[var(--accent)] hover:underline">Wholesale Guide</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
