import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Accessories Store Fixtures: Display Stands, Racks & Wall Systems",
    description: "Complete guide to accessories store fixtures. Slatwall systems ($50-$200), spinning racks ($100-$400), display stands, and merchandising strategies.",
    keywords: ["accessories store fixtures", "jewelry display stands", "slatwall systems", "spinning display racks", "accessories shop design"],
};

const faqItems = [
    {
        question: "What fixtures are best for displaying accessories?",
        answer: "Use spinning racks ($100-$400) for sunglasses/scarves, slatwall panels ($50-$200) for bags/belts, countertop displays for small items, and T-bar stands for necklaces. Mix heights for visual interest."
    },
    {
        question: "How do I maximize space in a small accessories store?",
        answer: "Use vertical displays: slatwall panels to ceiling, rotating fixtures, pegboard walls, and tiered countertop displays. Avoid floor clutter. Use mirrors to create visual depth."
    },
    {
        question: "What's the best layout for an accessories store?",
        answer: "Use a loop layout with impulse items at checkout, trending products at eye level (52\"-60\"), premium accessories in focal displays, and everyday items on lower shelves."
    }
];

export default function AccessoriesFixturesGuide() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="Accessories Store Fixtures: Display Stands, Racks & Wall Systems"
                description="Everything you need to know about accessories store fixtures. Learn about display stands, wall systems, and merchandising strategies."
                datePublished="2026-01-04"
                author="Goodok Shopfitting"
                image="/images/blog/accessories-store-fixtures.png"
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
                                Fixtures Guide
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Accessories Store Fixtures: Display Stands, Racks & Wall Systems
                        </h1>

                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            Everything you need to know about accessories store fixtures. Learn about display stands, wall systems, and merchandising strategies.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span>January 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>⏱️</span>
                                <span>11 min read</span>
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
                                        src="/images/blog/accessories-store-fixtures.png" 
                                        alt="Accessories Store Fixtures: Complete Display Guide"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <h2>Introduction</h2>
                                <p>Welcome to our comprehensive guide on accessories store fixtures: complete display guide. In this article, we will explore the best practices and strategies to help you succeed.</p>
                                
                                <h2>Key Considerations</h2>
                                <p>When planning your fixtures guide, it is essential to focus on customer experience and efficient space utilization. Good display fixtures can make a significant difference.</p>
                                
                                <h2>Design Tips</h2>
                                <ul>
                                    <li>Maximize vertical space with wall shelving.</li>
                                    <li>Use gondola shelving for versatile aisle displays.</li>
                                    <li>Ensure adequate lighting to highlight products.</li>
                                    <li>Create a logical flow that guides customers through the store.</li>
                                </ul>

                                <h2>Conclusion</h2>
                                <p>We hope this guide helps you in your retail journey. For more specialized advice, feel free to contact our design experts.</p>
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
