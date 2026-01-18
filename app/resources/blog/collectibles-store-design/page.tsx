import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Collectibles Store Design: Display Cases, Layout & Security Tips",
    description: "Design a collectibles store that protects and showcases. Glass cases for action figures, UV protection, security features, and layout strategies.",
    keywords: ["collectibles store design", "action figure display cases", "memorabilia store", "collectibles shop fixtures", "hobby store design"],
};

const faqItems = [
    {
        question: "How do I display collectibles safely?",
        answer: "Use UV-filtered glass cases to prevent fading, climate-controlled displays for vintage items, lockable cases for valuable pieces, and dust-proof enclosures. Keep items away from direct sunlight and heat sources."
    },
    {
        question: "What display cases are best for action figures?",
        answer: "Acrylic cases ($20-$100) for individual pieces, wall-mounted shelving for boxed figures, tower displays ($200-$800) for premium items, and slatwall with hooks for blister packs."
    },
    {
        question: "How should I organize a collectibles store?",
        answer: "Group by category (comics, figures, trading cards), then by franchise/brand. Place high-value items in secure glass cases at eye level, new arrivals near entrance, and trading card supplies near checkout."
    }
];

export default function CollectiblesStoreGuide() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="Collectibles Store Design: Display Cases, Layout & Security Tips"
                description="Complete guide to designing a collectibles store. Learn about display cases, lighting, security, and layout strategies for action figures and memorabilia."
                datePublished="2026-01-04"
                author="Goodok Shopfitting"
                image="/images/blog/collectibles-store-design.png"
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
                            Collectibles Store Design: Display Cases, Layout & Security Tips
                        </h1>

                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            Complete guide to designing a collectibles store. Learn about display cases, lighting, security, and layout strategies for action figures and memorabilia.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span>January 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>⏱️</span>
                                <span>14 min read</span>
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
                                        src="/images/blog/collectibles-store-design.png" 
                                        alt="Collectibles Store Design Guide: Display & Layout Tips"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <h2>Introduction</h2>
                                <p>Welcome to our comprehensive guide on collectibles store design guide: display & layout tips. In this article, we will explore the best practices and strategies to help you succeed.</p>
                                
                                <h2>Key Considerations</h2>
                                <p>When planning your store design, it is essential to focus on customer experience and efficient space utilization. Good display fixtures can make a significant difference.</p>
                                
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
