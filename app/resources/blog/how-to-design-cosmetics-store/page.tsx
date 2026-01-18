import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "How to Design a Cosmetics Store in 2026: Layout, Fixtures & Lighting",
    description: "Design your cosmetics store for success. Learn essential layout tips, display fixtures ($200-$1500), lighting design, and merchandising strategies.",
    keywords: ["cosmetics store design", "beauty store layout", "makeup store fixtures", "cosmetics display ideas", "beauty retail design"],
};

const faqItems = [
    {
        question: "How do I design a cosmetics store layout?",
        answer: "Start with a welcoming entrance zone, place testers and bestsellers at eye level, create defined sections for skincare/makeup/fragrance, and ensure wide aisles (4+ feet) for browsing. Use mirrors throughout."
    },
    {
        question: "What display fixtures work best for cosmetics?",
        answer: "Glass display cases ($200-$800) for high-end products, LED-lit showcases for luxury items, wall-mounted slatwall for samples, and gondola shelving for mass-market items. Include testing stations."
    },
    {
        question: "What lighting is best for a beauty store?",
        answer: "Use 4000K-5000K color temperature for accurate color representation. Combine ambient lighting (general), task lighting (testing areas), and accent lighting (product highlights). Avoid harsh shadows."
    }
];

export default function CosmeticsStoreGuide() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="How to Design a Cosmetics Store: Complete Guide 2026"
                description="Learn everything about designing a successful cosmetics store, from layout planning to display fixtures selection and lighting optimization."
                datePublished="2026-01-04"
                author="Goodok Shopfitting"
                image="/images/blog/blog_display_cases_1767944020952.png"
            />
            <FAQSchema items={faqItems} />
            {/* Hero */}
            <section className="bg-white pt-12 pb-8 border-b">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <Link href="/resources/blog" className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                                ← Back to Blog
                            </Link>
                            <span className="text-xs font-semibold text-[var(--accent)] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wide">
                                Store Design
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            How to Design a Cosmetics Store: Complete Guide 2026
                        </h1>

                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            Learn everything about designing a successful cosmetics store, from layout planning to display fixtures selection and lighting optimization.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span>January 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>⏱️</span>
                                <span>12 min read</span>
                            </div>
                        </div>

                        {/* Hero Image - Removed and moved to content */}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none text-gray-600">
                                {/* Featured Image inside Prose */}
                                <div className="relative w-full aspect-[4/3] mb-8 rounded-xl overflow-hidden shadow-md not-prose">
                                    <Image 
                                        src="/images/blog/blog_display_cases_1767944020952.png" 
                                        alt="How to Design a Cosmetics Store: Complete Guide 2025"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <h2>Introduction</h2>
                                <p>Welcome to our comprehensive guide on how to design a cosmetics store: complete guide 2025. In this article, we will explore the best practices and strategies to help you succeed.</p>
                                
                                <h2>Key Considerations</h2>
                                <p>When planning your store design, it is essential to focus on customer experience and efficient space utilization. Good display fixtures can make a significant difference.</p>
                                
                                <h2>Design Tips</h2>
                                <ul>
                                    <li>Maximize vertical space with <Link href="/products/wall-shelving" className="text-[var(--accent)] hover:underline">wall shelving</Link> for testing products and samples.</li>
                                    <li>Use <Link href="/products/gondola-shelving" className="text-[var(--accent)] hover:underline">gondola shelving</Link> for versatile aisle displays of mass-market items.</li>
                                    <li>Install <Link href="/products/display-cases" className="text-[var(--accent)] hover:underline">glass display cases</Link> for high-end skincare and premium cosmetics.</li>
                                    <li>Ensure adequate lighting to highlight products - LED strips work great with our shelving systems.</li>
                                    <li>Create a logical flow that guides customers through the store with strategic <Link href="/products/checkout-counters" className="text-[var(--accent)] hover:underline">checkout counter</Link> placement.</li>
                                </ul>

                                <h2>Recommended Fixtures</h2>
                                <p>For a successful cosmetics store, we recommend:</p>
                                <ul>
                                    <li><strong>Wall Shelving:</strong> Perfect for displaying testers and samples at eye level. <Link href="/products/wall-shelving" className="text-[var(--accent)] hover:underline">View our wall shelving options →</Link></li>
                                    <li><strong>Display Cases:</strong> Lockable glass cases protect high-value skincare products. <Link href="/products/display-cases" className="text-[var(--accent)] hover:underline">Browse display cases →</Link></li>
                                    <li><strong>Accessories:</strong> Price tag holders, shelf dividers, and LED lights complete the look. <Link href="/products/accessories" className="text-[var(--accent)] hover:underline">See all accessories →</Link></li>
                                </ul>

                                <h2>Conclusion</h2>
                                <p>We hope this guide helps you in your retail journey. For more specialized advice, feel free to contact our design experts or <Link href="/free-3d-design" className="text-[var(--accent)] hover:underline">get a free 3D store design</Link>.</p>
                            </div>
                        </div>
                    </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-white border-t">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Ready to Upgrade Your Store?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        15+ years experience creating retail spaces. Get a free consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn btn-primary">
                            Get Free Layout Design
                        </Link>
                        <Link href="/products" className="btn btn-secondary">
                            Browse Fixtures
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
};
