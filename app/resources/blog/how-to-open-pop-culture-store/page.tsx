import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "How to Open a Pop Culture Store: $20K-$100K Startup Checklist 2026",
    description: "Complete checklist to open a profitable pop culture store. Startup costs $20K-$100K breakdown, best locations, essential fixtures & inventory tips. Free store layout included.",
    keywords: ["how to open pop culture store", "collectibles store startup", "pop culture shop fixtures", "toy store design", "retail store design", "pop culture store cost"],
    openGraph: {
        title: "How to Open a Pop Culture Store: $20K-$100K Startup Checklist",
        description: "Complete checklist to open a profitable pop culture store. Startup costs breakdown, locations, fixtures & inventory tips.",
        type: "article",
    },
};

const faqItems = [
    {
        question: "How much does it cost to open a pop culture store?",
        answer: "A pop culture store startup typically costs $20,000-$100,000+ depending on size and location. This includes: lease deposit (1-3 months rent), store fixtures ($5,000-$25,000), initial inventory ($10,000-$50,000), and licenses/permits ($500-$2,000)."
    },
    {
        question: "What display fixtures do I need for a collectibles store?",
        answer: "Essential fixtures include: glass display cases for high-value items, wall shelving for boxed products, gondola shelving for aisle displays, slatwall panels for hanging items, and specialized racks for specific collectibles like Funko Pops or trading cards."
    },
    {
        question: "What is the best location for a pop culture store?",
        answer: "Ideal locations include: near movie theaters or entertainment venues, shopping malls with high foot traffic, downtown areas near other specialty retail, or college town shopping districts. Consider rent costs vs. foot traffic carefully."
    }
];

export default function PopCultureStoreGuide() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="How to Open a Pop Culture Store: Complete Guide 2026"
                description="Everything you need to know about opening a pop culture, collectibles, or trendy toys store. From store design to display fixtures."
                datePublished="2026-01-04"
                author="Goodok Shopfitting"
                image="/images/blog/blog_pop_culture_store_1767944072052.png"
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
                            How to Open a Pop Culture Store: Complete Guide 2026
                        </h1>

                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            Everything you need to know about opening a pop culture, collectibles, or trendy toys store. From store design to display fixtures.
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
                                        src="/images/blog/blog_pop_culture_store_1767944072052.png" 
                                        alt="How to Open a Pop Culture Store: Complete Guide 2025"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <h2>Startup Costs Breakdown</h2>
                                <p>Opening a pop culture store typically costs <strong>$20,000–$100,000+</strong> depending on size and location. Here's what you'll spend:</p>
                                <ul>
                                    <li><strong>Lease deposit:</strong> 1–3 months rent ($3,000–$15,000)</li>
                                    <li><strong>Store fixtures:</strong> $5,000–$25,000 (shelving, display cases, checkout counter)</li>
                                    <li><strong>Initial inventory:</strong> $10,000–$50,000 (Funko Pops, trading cards, collectibles)</li>
                                    <li><strong>Licenses & permits:</strong> $500–$2,000</li>
                                </ul>
                                <p className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">💡 <strong>Pro Tip:</strong> <Link href="/resources/blog/retail-shelving-cost-guide" className="text-green-600 hover:underline">See our complete retail shelving cost guide</Link> for detailed fixture pricing.</p>

                                <h2>Essential Display Fixtures</h2>
                                <p>The right fixtures showcase your collectibles while maximizing limited floor space:</p>
                                <ul>
                                    <li><strong><Link href="/products/display-cases" className="text-green-600 hover:underline">Glass display cases</Link>:</strong> Essential for high-value items like signed memorabilia</li>
                                    <li><strong><Link href="/products/wall-shelving" className="text-green-600 hover:underline">Wall shelving</Link>:</strong> Maximize vertical space for boxed products</li>
                                    <li><strong><Link href="/products/gondola-shelving" className="text-green-600 hover:underline">Gondola shelving</Link>:</strong> Versatile center aisle displays</li>
                                    <li><strong>Slatwall panels:</strong> Perfect for hanging blister packs and accessories</li>
                                </ul>

                                <h2>Store Layout Tips</h2>
                                <ul>
                                    <li><strong>Entry zone:</strong> Feature new releases and trending items to hook customers immediately</li>
                                    <li><strong>High-value zone:</strong> Place rare collectibles in locked cases near checkout for security</li>
                                    <li><strong>Interactive area:</strong> Create a trading card play space to build community</li>
                                    <li><strong>Adequate lighting:</strong> Use spotlights to highlight premium collectibles</li>
                                </ul>

                                <h2>Best Locations for Pop Culture Stores</h2>
                                <p>Location can make or break your store. Consider these high-traffic options:</p>
                                <ul>
                                    <li>Near movie theaters or entertainment venues</li>
                                    <li>Shopping malls with geek culture demographics</li>
                                    <li>College town shopping districts</li>
                                    <li>Downtown areas near comic shops or game stores</li>
                                </ul>

                                <h2>Get a Free Store Layout</h2>
                                <p>Planning your pop culture store layout? We provide <strong>free 3D store designs</strong> with optimized fixture placement. <Link href="/contact" className="text-green-600 hover:underline">Contact us</Link> to get started or <Link href="/free-3d-design" className="text-green-600 hover:underline">request your free 3D design now</Link>.</p>
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
