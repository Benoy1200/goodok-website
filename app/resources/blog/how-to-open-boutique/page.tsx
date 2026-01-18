import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "How to Open a Boutique in 2026: Startup Costs & Store Setup Guide",
    description: "Open your dream boutique store. Learn startup costs ($30K-$150K), essential fixtures, layout tips, and merchandising strategies from industry experts.",
    keywords: ["how to open a boutique", "boutique store startup", "clothing store setup", "boutique fixtures", "fashion retail design"],
};

const faqItems = [
    {
        question: "How much does it cost to open a boutique?",
        answer: "A boutique startup typically costs $30,000-$150,000. This includes: lease/deposit ($5,000-$20,000), store fixtures ($5,000-$30,000), initial inventory ($10,000-$50,000), renovations ($5,000-$30,000), and working capital."
    },
    {
        question: "What fixtures do I need for a boutique store?",
        answer: "Essential boutique fixtures include: clothing racks ($50-$300 each), display tables, wall-mounted shelving, fitting room mirrors, a checkout counter, and mannequins. Budget $5,000-$30,000 for fixtures."
    },
    {
        question: "What is the best layout for a boutique?",
        answer: "Use a loop or racetrack layout that guides customers through the store. Place high-margin items at the front, create a 'power wall' on the right, and position fitting rooms at the back to maximize exposure time."
    }
];

export default function BoutiqueGuide() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="How to Open a Boutique: Complete Store Setup Guide 2026"
                description="Everything you need to know about opening a boutique store. From store design and fixtures to layout planning and merchandising strategies."
                datePublished="2026-01-04"
                author="Goodok Shopfitting"
                image="/images/blog/blog_boutique_store_1767944053601.png"
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
                                Store Setup
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            How to Open a Boutique: Complete Store Setup Guide 2026
                        </h1>

                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            Everything you need to know about opening a boutique store. From store design and fixtures to layout planning and merchandising strategies.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span>January 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>⏱️</span>
                                <span>15 min read</span>
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
                                        src="/images/blog/blog_boutique_store_1767944053601.png" 
                                        alt="How to Open a Boutique: Complete Store Setup Guide 2025"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <h2>Introduction</h2>
                                <p>Welcome to our comprehensive guide on how to open a boutique: complete store setup guide 2025. In this article, we will explore the best practices and strategies to help you succeed.</p>
                                
                                <h2>Key Considerations</h2>
                                <p>When planning your store setup, it is essential to focus on customer experience and efficient space utilization. Good display fixtures can make a significant difference.</p>
                                
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
