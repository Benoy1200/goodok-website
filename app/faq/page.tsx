import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/schema";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

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
        category: "Products",
        questions: [
            {
                q: "What products do you manufacture?",
                a: "We manufacture a complete range of retail fixtures including gondola shelving, wall shelving, display cases, clothing racks, checkout counters, and custom fixtures for any type of retail store.",
            },
            {
                q: "Can you customize fixtures to my specifications?",
                a: "Yes! We specialize in custom manufacturing. Send us your requirements, sketches, or reference images and we'll create exactly what you need.",
            },
            {
                q: "What materials do you use?",
                a: "We use high-quality cold-rolled steel (0.7mm-1.5mm thickness), tempered glass (5mm-10mm), and premium powder coating. All materials meet international quality standards.",
            },
            {
                q: "What finishes are available?",
                a: "Standard finishes include powder coating (any RAL color), chrome plating, and galvanized steel. Custom finishes like wood grain laminate are also available.",
            },
        ],
    },
    {
        category: "Ordering & Payment",
        questions: [
            {
                q: "What is your minimum order quantity (MOQ)?",
                a: "Our MOQ varies by product type. Generally, it's around 30-50 units for standard products. For custom orders, we can discuss smaller quantities.",
            },
            {
                q: "What are your payment terms?",
                a: "We accept 30% deposit to start production, and 70% balance before shipping. Payment methods include T/T bank transfer, L/C, and Alibaba Trade Assurance.",
            },
            {
                q: "How do I get a quote?",
                a: "Send us your requirements via WhatsApp, email, or our contact form. Include product types, quantities, sizes, and your shipping destination. We'll respond within 24 hours.",
            },
            {
                q: "Do you offer samples?",
                a: "Yes, we can provide samples for quality evaluation. Sample costs will be refunded when you place a bulk order.",
            },
        ],
    },
    {
        category: "Shipping & Logistics",
        questions: [
            {
                q: "Which countries do you ship to?",
                a: "We ship worldwide to 50+ countries including USA, UK, Australia, Middle East, Africa, Southeast Asia, and Europe.",
            },
            {
                q: "How long does shipping take?",
                a: "Sea freight typically takes 25-35 days to USA, 30-40 days to Europe, and 20-30 days to Middle East. Express air freight is available for urgent orders.",
            },
            {
                q: "What shipping terms do you offer?",
                a: "We offer FOB (you arrange shipping), CIF (we deliver to your port), and DDP (we handle everything to your door). Most customers prefer FOB or CIF.",
            },
            {
                q: "How are the fixtures packed?",
                a: "All products are flat-packed in cartons with foam protection to minimize shipping costs and prevent damage. Assembly instructions are included.",
            },
        ],
    },
    {
        category: "Installation & Support",
        questions: [
            {
                q: "Is installation difficult?",
                a: "No, our fixtures are designed for easy DIY assembly. We provide detailed instructions, video tutorials, and remote support if needed.",
            },
            {
                q: "Do you offer installation service?",
                a: "For large projects, we can arrange installation teams in some countries or connect you with local contractors. Contact us for details.",
            },
            {
                q: "What if something is damaged or missing?",
                a: "Report any issues within 7 days of delivery with photos. We'll send replacement parts at no cost or provide compensation.",
            },
            {
                q: "What is your warranty?",
                a: "We offer a 2-year warranty on structural defects. Normal wear and tear or damage from misuse is not covered.",
            },
        ],
    },
    {
        category: "Design Services",
        questions: [
            {
                q: "What is the Free 3D Design service?",
                a: "Send us your floor plan and we'll create a professional 3D store layout within 24 hours. It helps you visualize your store before ordering.",
            },
            {
                q: "What do I need to provide for the 3D design?",
                a: "Just send us your floor plan (hand-drawn is OK), store dimensions, the type of products you sell, and any reference images of styles you like.",
            },
            {
                q: "Is the design really free?",
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
            <section className="bg-gradient-to-br from-[#004499] via-[#0066cc] to-[#003366] text-white py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-[#e8f0ff] leading-relaxed">
                            Everything you need to know about Goodok retail fixtures, ordering, shipping, and services. Find quick answers below or reach out to our team.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        {faqs.map((category) => (
                            <div key={category.category} className="mb-20">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        {category.category}
                                    </h2>
                                    <div className="h-1 w-16 bg-gradient-to-r from-[#004499] to-[#0066cc] rounded-full mt-3"></div>
                                </div>
                                <FAQAccordion items={category.questions} category={category.category} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-20 bg-gradient-to-br from-[#004499] to-[#003366] text-white">
                <div className="container text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Still Have Questions?
                    </h2>
                    <p className="text-lg text-[#e8f0ff] mb-10 max-w-2xl mx-auto leading-relaxed">
                        Can't find what you're looking for? Our team is here to help. Reach out anytime via WhatsApp or our contact form.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20have%20a%20question"
                            className="btn btn-whatsapp text-lg px-8 py-4"
                        >
                            Chat on WhatsApp
                        </a>
                        <Link href="/contact" className="btn btn-secondary text-lg px-8 py-4">
                            Contact Form
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
