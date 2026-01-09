import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Gondola Shelving vs Wall Shelving: Which to Choose? | Goodok",
    description: "A comprehensive comparison of gondola and wall shelving systems to help you make the right choice for your retail space.",
    keywords: ["product guide", "retail store design", "shop fixtures", "display solutions"],
};

export default function ShelvingComparisonGuide() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="Gondola Shelving vs Wall Shelving: Which to Choose?"
                description="A comprehensive comparison of gondola and wall shelving systems to help you make the right choice for your retail space."
                datePublished="2026-01-02"
                author="Goodok Shopfitting"
                image="/images/blog/gondola-vs-wall-shelving.png"
            />
            {/* Hero */}
            <section className="bg-white pt-12 pb-8 border-b">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <Link href="/resources/blog" className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                                ← Back to Blog
                            </Link>
                            <span className="text-xs font-semibold text-[var(--accent)] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wide">
                                Product Guide
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Gondola Shelving vs Wall Shelving: Which to Choose?
                        </h1>

                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            A comprehensive comparison of gondola and wall shelving systems to help you make the right choice for your retail space.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span>January 2, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>⏱️</span>
                                <span>8 min read</span>
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
                                        src="/images/blog/gondola-vs-wall-shelving.png" 
                                        alt="Gondola Shelving vs Wall Shelving: Which to Choose?"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <h2>Introduction</h2>
                                <p>Welcome to our comprehensive guide on gondola shelving vs wall shelving: which to choose?. In this article, we will explore the best practices and strategies to help you succeed.</p>
                                
                                <h2>Key Considerations</h2>
                                <p>When planning your product guide, it is essential to focus on customer experience and efficient space utilization. Good display fixtures can make a significant difference.</p>
                                
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
                            Get Free 3D Design
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
