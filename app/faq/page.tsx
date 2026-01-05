import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "FAQ - Frequently Asked Questions | Goodok Shopfitting",
    description:
        "Common questions about Goodok retail fixtures, ordering, shipping, and installation. Get answers about our products and services.",
    keywords: [
        "retail fixtures FAQ",
        "store fixtures questions",
        "wholesale fixtures FAQ",
        "china fixtures shipping",
    ],
};

const faqs = [
    {
        category: "Products (产品相关)",
        questions: [
            {
                q: "What products do you manufacture? (你们生产什么产品？)",
                a: "We manufacture a complete range of retail fixtures including gondola shelving, wall shelving, display cases, clothing racks, checkout counters, and custom fixtures for any type of retail store.",
            },
            {
                q: "Can you customize fixtures to my specifications? (可以按我的规格定制吗？)",
                a: "Yes! We specialize in custom manufacturing. Send us your requirements, sketches, or reference images and we'll create exactly what you need.",
            },
            {
                q: "What materials do you use? (你们使用什么材料？)",
                a: "We use high-quality cold-rolled steel (0.7mm-1.5mm thickness), tempered glass (5mm-10mm), and premium powder coating. All materials meet international quality standards.",
            },
            {
                q: "What finishes are available? (有什么表面处理选择？)",
                a: "Standard finishes include powder coating (any RAL color), chrome plating, and galvanized steel. Custom finishes like wood grain laminate are also available.",
            },
        ],
    },
    {
        category: "Ordering & Payment (订购和付款)",
        questions: [
            {
                q: "What is your minimum order quantity (MOQ)? (最小起订量是多少？)",
                a: "Our MOQ varies by product type. Generally, it's around 30-50 units for standard products. For custom orders, we can discuss smaller quantities.",
            },
            {
                q: "What are your payment terms? (付款方式是什么？)",
                a: "We accept 30% deposit to start production, and 70% balance before shipping. Payment methods include T/T bank transfer, L/C, and Alibaba Trade Assurance.",
            },
            {
                q: "How do I get a quote? (如何获取报价？)",
                a: "Send us your requirements via WhatsApp, email, or our contact form. Include product types, quantities, sizes, and your shipping destination. We'll respond within 24 hours.",
            },
            {
                q: "Do you offer samples? (提供样品吗？)",
                a: "Yes, we can provide samples for quality evaluation. Sample costs will be refunded when you place a bulk order.",
            },
        ],
    },
    {
        category: "Shipping & Logistics (物流运输)",
        questions: [
            {
                q: "Which countries do you ship to? (发货到哪些国家？)",
                a: "We ship worldwide to 50+ countries including USA, UK, Australia, Middle East, Africa, Southeast Asia, and Europe.",
            },
            {
                q: "How long does shipping take? (运输需要多长时间？)",
                a: "Sea freight typically takes 25-35 days to USA, 30-40 days to Europe, and 20-30 days to Middle East. Express air freight is available for urgent orders.",
            },
            {
                q: "What shipping terms do you offer? (提供什么运输条款？)",
                a: "We offer FOB (you arrange shipping), CIF (we deliver to your port), and DDP (we handle everything to your door). Most customers prefer FOB or CIF.",
            },
            {
                q: "How are the fixtures packed? (货架如何包装？)",
                a: "All products are flat-packed in cartons with foam protection to minimize shipping costs and prevent damage. Assembly instructions are included.",
            },
        ],
    },
    {
        category: "Installation & Support (安装和支持)",
        questions: [
            {
                q: "Is installation difficult? (安装难吗？)",
                a: "No, our fixtures are designed for easy DIY assembly. We provide detailed instructions, video tutorials, and remote support if needed.",
            },
            {
                q: "Do you offer installation service? (提供安装服务吗？)",
                a: "For large projects, we can arrange installation teams in some countries or connect you with local contractors. Contact us for details.",
            },
            {
                q: "What if something is damaged or missing? (如果有损坏或缺件怎么办？)",
                a: "Report any issues within 7 days of delivery with photos. We'll send replacement parts at no cost or provide compensation.",
            },
            {
                q: "What is your warranty? (保修政策是什么？)",
                a: "We offer a 2-year warranty on structural defects. Normal wear and tear or damage from misuse is not covered.",
            },
        ],
    },
    {
        category: "Design Services (设计服务)",
        questions: [
            {
                q: "What is the Free 3D Design service? (什么是免费3D设计服务？)",
                a: "Send us your floor plan and we'll create a professional 3D store layout within 24 hours. It helps you visualize your store before ordering.",
            },
            {
                q: "What do I need to provide for the 3D design? (我需要提供什么？)",
                a: "Just send us your floor plan (hand-drawn is OK), store dimensions, the type of products you sell, and any reference images of styles you like.",
            },
            {
                q: "Is the design really free? (设计真的免费吗？)",
                a: "Yes, the initial design is completely free with no obligation. It's our way of demonstrating our capabilities and helping you plan your store.",
            },
        ],
    },
];

export default function FAQPage() {
    // Flatten all FAQ items for Schema
    const allFaqItems = faqs.flatMap((category) =>
        category.questions.map((q) => ({ question: q.q, answer: q.a }))
    );

    return (
        <div className="pt-24">
            {/* FAQ Schema for SEO */}
            <FAQSchema items={allFaqItems} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            FAQ (常见问题)
                        </h1>
                        <p className="text-xl text-gray-300">
                            Find answers to common questions about our products, ordering, shipping, and services.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        {faqs.map((category) => (
                            <div key={category.category} className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 pb-2 border-b">{category.category}</h2>
                                <div className="space-y-6">
                                    {category.questions.map((faq, index) => (
                                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                                            <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                                            <p className="text-gray-600">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-16 bg-gray-100">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Still Have Questions? (还有疑问？)
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our team is here to help. Contact us via WhatsApp for quick responses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20have%20a%20question"
                            className="btn btn-whatsapp"
                        >
                            Chat on WhatsApp
                        </a>
                        <Link href="/contact" className="btn bg-gray-900 text-white hover:bg-gray-800">
                            Contact Form (联系表单)
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
