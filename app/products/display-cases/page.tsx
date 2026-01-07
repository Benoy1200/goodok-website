import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProductSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Display Cases Wholesale | Glass Showcases for Retail | Goodok",
    description:
        "Premium glass display cases that make your jewelry shine brighter and sell faster. LED lighting, security locks, custom sizes. Free 3D design in 24h.",
    keywords: [
        "display cases",
        "glass showcase",
        "retail display cases",
        "jewelry display case",
        "glass cabinet",
    ],
};

// Scene gallery data - showcasing real installations
const sceneGallery = [
    {
        title: "Jewelry Store",
        subtitle: "Luxury Jewelry",
        description: "Elegant showcases that make diamonds sparkle",
        image: "/images/scenes/jewelry-store.jpg",
    },
    {
        title: "Watch Boutique",
        subtitle: "Premium Watches",
        description: "Precision displays for precision timepieces",
        image: "/images/scenes/watch-store.jpg",
    },
    {
        title: "Cosmetics Counter",
        subtitle: "Beauty Counter",
        description: "Illuminated beauty that sells",
        image: "/images/scenes/cosmetics-store.jpg",
    },
    {
        title: "Museum Exhibition",
        subtitle: "Museum Display",
        description: "Protect and present priceless artifacts",
        image: "/images/scenes/museum.jpg",
    },
];

// Comparison table data
const comparisonData = {
    headers: ["Feature", "Standard Series", "Premium Series"],
    rows: [
        ["Glass Type", "6mm Tempered", "10mm Ultra-Clear Tempered"],
        ["Lighting", "Standard LED Strip", "Shadowless LED System"],
        ["Lock Type", "Cam Lock", "Electronic Fingerprint Lock"],
        ["Frame Material", "Aluminum Alloy", "Stainless Steel 304"],
        ["Warranty", "2 Years", "5 Years"],
        ["Starting Price", "From $299", "From $599"],
    ],
};

// Case studies linking to projects
const caseStudies = [
    {
        title: "Trendy Toys Store",
        location: "Tokyo, Japan",
        image: "/images/projects/toy-store.jpg",
        href: "/projects/trendy-toys-store",
        result: "40% increase in collectible sales",
    },
    {
        title: "Boutique Accessories",
        location: "Dubai, UAE",
        image: "/images/projects/boutique.jpg",
        href: "/projects/boutique-accessories",
        result: "Premium positioning achieved",
    },
];

// Why choose us points
const whyChooseUs = [
    {
        icon: "馃彮",
        title: "Factory Direct",
        description: "Cut out middlemen. Work directly with our 15,000銕?manufacturing facility.",
    },
    {
        icon: "馃摝",
        title: "Safe Delivery",
        description: "Triple-layer packaging. We've shipped to 50+ countries without a single damage claim.",
    },
    {
        icon: "馃帹",
        title: "Free 3D Design",
        description: "See your showcase in your store before ordering. 24-hour turnaround.",
    },
];

export default function DisplayCasesPage() {
    // FAQ data for structured data
    const faqItems = [
        {
            question: "What types of glass do you offer for display cases?",
            answer: "We offer 6mm tempered glass for standard cases and 10mm ultra-clear tempered glass for premium cases. Ultra-clear glass has no green tint and provides maximum clarity for jewelry and watches."
        },
        {
            question: "Do your display cases come with LED lighting?",
            answer: "Yes, all our display cases include LED lighting. Standard series has LED strip lighting, while Premium series features shadowless LED systems for even illumination without hot spots."
        },
        {
            question: "What security features are available?",
            answer: "We offer multiple lock options: key locks (standard), electronic keypad locks, and fingerprint locks. Premium cases also include reinforced glass and optional alarm sensors."
        },
        {
            question: "Can you customize display case dimensions?",
            answer: "Absolutely! We offer custom sizing for all display cases. Send us your requirements and we'll provide a quote. Custom orders typically add 2-3 weeks to lead time."
        },
        {
            question: "What is the minimum order quantity?",
            answer: "Our MOQ is just 1 unit for standard sizes. For custom designs, MOQ varies based on complexity. Contact us for specific requirements."
        },
    ];

    return (
        <>
            {/* Structured Data for SEO */}
            <ProductSchema
                name="Premium Glass Display Cases"
                description="Professional retail display cases with LED lighting and security locks. Glass showcases for jewelry, watches, cosmetics, and collectibles. Factory-direct pricing with free 3D design."
                category="Retail Display Equipment"
            />
            <FAQSchema items={faqItems} />

            <div className="pt-24">
                {/* Hero - User-Focused Messaging */}
                <section className="bg-gradient-to-br from-gray-900 via-[#004499] to-gray-900 text-white py-20 relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 right-10 w-96 h-96 bg-[#ff6b35] rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#0066cc] rounded-full blur-3xl"></div>
                    </div>

                    <div className="container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block bg-[#ff6b35]/20 text-[#F0E1C3] px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    Display Cases 鈥?Glass Showcases
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                    Make Your Products
                                    <span className="text-[#f8f9fa] block">Irresistible to Buy</span>
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    The right display case doesn&apos;t just protect your products鈥攊t makes customers
                                    <strong className="text-white"> willing to pay 30% more</strong>.
                                    Our showcases are designed to turn browsers into buyers.
                                </p>
                                <div className="flex flex-wrap gap-4 mb-8">
                                    <Link
                                        href="/free-3d-design"
                                        className="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8 py-4"
                                    >
                                        See It In Your Store First
                                    </Link>
                                </div>
                                {/* Trust badges */}
                                <div className="flex items-center gap-6 text-sm text-gray-400">
                                    <span className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> Free 3D Design
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> 15+ Years Experience
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> Global Shipping
                                    </span>
                                </div>
                            </div>
                            <div className="relative">
                                {/* Hero image placeholder - will be replaced with real image */}
                                <div className="aspect-[4/3] bg-gradient-to-br from-[#0066cc]/50 to-gray-800/50 rounded-2xl backdrop-blur-sm border border-[#ff6b35]/20 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-8xl block mb-4">馃拵</span>
                                        <p className="text-[#F0E1C3] text-sm">Premium Showcase Preview</p>
                                    </div>
                                </div>
                                {/* Floating stats */}
                                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-xl p-4 shadow-xl">
                                    <div className="text-2xl font-bold text-[var(--accent)]">500+</div>
                                    <div className="text-sm text-gray-600">Stores Equipped</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scene Gallery - Horizontal Scroll */}
                <section className="py-16 bg-gray-50">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-3">See It In Action</h2>
                            <p className="text-gray-600">Real installations. Real results.</p>
                        </div>
                        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                            {sceneGallery.map((scene) => (
                                <div
                                    key={scene.title}
                                    className="flex-shrink-0 w-80 snap-center group"
                                >
                                    <div className="relative aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden mb-4">
                                        {/* Placeholder for scene image */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#004499] to-[#0066cc] flex items-center justify-center">
                                            <span className="text-white text-6xl">馃彧</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                            <h3 className="text-white font-semibold">{scene.title}</h3>
                                            <p className="text-gray-300 text-sm">{scene.subtitle}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm">{scene.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-20">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-3">Standard vs Premium</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Choose the right level for your business. Both built to last, both designed to sell.
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-900 text-white">
                                            {comparisonData.headers.map((header, index) => (
                                                <th
                                                    key={header}
                                                    className={`py-4 px-6 text-left font-semibold ${index === 0 ? "w-1/3" : "w-1/3"
                                                        }`}
                                                >
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonData.rows.map((row, rowIndex) => (
                                            <tr
                                                key={row[0]}
                                                className={`${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b border-gray-100`}
                                            >
                                                <td className="py-4 px-6 font-medium text-gray-900">{row[0]}</td>
                                                <td className="py-4 px-6 text-gray-600">{row[1]}</td>
                                                <td className="py-4 px-6 text-[var(--accent)] font-medium">{row[2]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                * Custom configurations available. Contact us for specific requirements.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-[#f8f9fa]">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-3">Why 500+ Store Owners Trust Us</h2>
                            <p className="text-gray-600">More than display cases - they're your business accelerator</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {whyChooseUs.map((item) => (
                                <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm">
                                    <span className="text-5xl block mb-4">{item.icon}</span>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Studies - See It In Action */}
                <section className="py-20">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-3">Real Businesses. Real Results.</h2>
                            <p className="text-gray-600">See how other store owners boosted their sales with our showcases</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {caseStudies.map((study) => (
                                <Link
                                    key={study.title}
                                    href={study.href}
                                    className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-[#004499] to-[#0066cc] flex items-center justify-center">
                                        <span className="text-white text-6xl">馃摳</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold text-lg group-hover:text-[var(--accent)] transition">
                                                    {study.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm">{study.location}</p>
                                            </div>
                                            <span className="text-[var(--accent)]">→</span>
                                        </div>
                                        <div className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                                            {study.result}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA - Simplified */}
                <section className="py-20 bg-gradient-to-r from-[#004499] to-gray-900 text-white">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Tell Us Your Vision
                        </h2>
                        <p className="text-[#F4E7CF] mb-8 max-w-2xl mx-auto text-lg">
                            Every great store starts with a conversation. Share your ideas, and we&apos;ll create a
                            free 3D design showing exactly how your display cases will look.
                        </p>
                        <Link
                            href="/contact"
                            className="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-10 py-4"
                        >
                            Start the Conversation
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}




