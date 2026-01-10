import type { Metadata } from "next";
import Link from "next/link";
import ProductMarquee from "@/components/ProductMarquee";
import { ProductSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Retail Accessories Wholesale: Hooks, Stands & Fixtures | Goodok",
    description:
        "Complete retail accessories: display hooks ($2-$15), signage holders, mannequins, and store fixtures. Factory-direct pricing. Ships worldwide.",
    keywords: [
        "retail accessories",
        "display hooks",
        "store fixtures",
        "mannequins",
        "retail signage",
        "retail accessories wholesale",
    ],
};

const faqItems = [
    {
        question: "What retail accessories do you offer?",
        answer: "We offer: display hooks ($2-$15), signage holders, shelf dividers, price tag holders, mannequins, endcap displays, umbrella stands, and promotional stands."
    },
    {
        question: "What is the minimum order for accessories?",
        answer: "MOQ varies by item: Hooks (100 pcs), Signs (50 pcs), Stands (10 pcs). Mixed orders welcome. Contact us for custom requirements."
    },
    {
        question: "Are accessories compatible with your shelving systems?",
        answer: "Yes, all accessories are designed to work with our gondola and wall shelving systems. Universal fit options also available for third-party fixtures."
    }
];

const productImages = [
    "/images/products/Versatile-Accessories/四层架-A1.jpg",
    "/images/products/Versatile-Accessories/橱窗道具.jpg",
    "/images/products/Versatile-Accessories/移动端头架.jpg",
    "/images/products/Versatile-Accessories/端头架.jpg",
    "/images/products/Versatile-Accessories/SD-20饰典移动堆头架.jpg",
    "/images/products/Versatile-Accessories/SD-22门口展示架.jpg",
    "/images/products/Versatile-Accessories/SD-24五层展示架.jpg",
    "/images/products/Versatile-Accessories/SD-27三层圆形端头架.jpg",
    "/images/products/Versatile-Accessories/ME48铁艺头枕架.jpg",
    "/images/products/Versatile-Accessories/ME53间隔展示架组合.jpg",
    "/images/products/Versatile-Accessories/ME54海报架组合.jpg",
    "/images/products/Versatile-Accessories/SD-19雨伞架组合.jpg",
];

const features = [
    {
        title: "Complete Range",
        description: "Everything you need to complete your store setup.",
        icon: "🛒",
    },
    {
        title: "Quality Materials",
        description: "Durable steel and premium finishes that last.",
        icon: "⭐",
    },
    {
        title: "Easy Integration",
        description: "Designed to work with all our fixture systems.",
        icon: "🔧",
    },
    {
        title: "Affordable Pricing",
        description: "Factory-direct pricing for all accessories.",
        icon: "💰",
    },
];

const specs = [
    { label: "Materials", value: "Steel / Acrylic / Wood" },
    { label: "Finishes", value: "Chrome / Powder Coated" },
    { label: "Categories", value: "Hooks / Signs / Stands" },
    { label: "Compatibility", value: "Universal Fit" },
    { label: "MOQ", value: "Varies by Item" },
    { label: "Lead Time", value: "5-15 Days" },
];

export default function AccessoriesPage() {
    return (
        <div className="pt-24">
            <ProductSchema 
                name="Retail Accessories"
                description="Complete range of retail accessories including display hooks, signage holders, and store fixtures."
                category="Retail Fixtures"
                price="2"
            />
            <FAQSchema items={faqItems} />
            <section className="bg-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Retail Accessories
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Complete your store setup with our range of display accessories,
                            hooks, signage holders, and retail fixtures.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/free-3d-design" className="btn btn-primary">
                                Get Free Quote
                            </Link>
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20accessories%20quote"
                                className="btn btn-secondary"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <ProductMarquee images={productImages} productName="Accessories" />

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
                        Get a complete quote for all your retail accessory needs.
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
                        <p>Related guides: <Link href="/resources/blog/accessories-store-fixtures" className="text-[var(--accent)] hover:underline">Accessories Store Fixtures</Link> | <Link href="/resources/blog/retail-fixtures-wholesale-guide" className="text-[var(--accent)] hover:underline">Wholesale Guide</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
