import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Retail Display Blog - Store Design Tips & Industry Insights",
    description:
        "Expert guides on retail store design, shelving solutions, and display best practices. Learn how to create stunning retail environments that drive sales.",
    keywords: [
        "retail design blog",
        "store display tips",
        "retail shelving guide",
        "store layout ideas",
    ],
};

// Blog posts data
const blogPosts = [
    {
        slug: "retail-store-startup-cost",
        title: "Retail Store Startup Cost: Complete Budget Breakdown & Guide",
        excerpt:
            "Detailed breakdown of retail startup costs for 2026. From lease and licensing to store fixtures and inventory. Includes hidden costs to watch for.",
        category: "Startup Guide",
        date: "2026-01-10",
        readTime: "15 min read",
        featured: true,
        image: "/images/blog/retail-startup-cost-hero.png",
    },
    {
        slug: "new-vs-used-gondola-shelving",
        title: "New vs Used Gondola Shelving: Which Should You Buy?",
        excerpt:
            "Compare pricing, quality, and pros/cons of new vs used gondola shelving. Learn how to inspect used fixtures and where to find liquidation deals.",
        category: "Buying Guide",
        date: "2026-01-10",
        readTime: "12 min read",
        featured: true,
        image: "/images/blog/new-vs-used-gondola-hero.png",
    },
    {
        slug: "card-shop-shelving-ideas",
        title: "Card Shop Shelving Ideas: Display Guide for LGS Owners",
        excerpt:
            "Complete guide to card shop displays. From glass cases for high-value singles to gondola shelving for booster boxes and play area layout tips.",
        category: "Niche Guide",
        date: "2026-01-10",
        readTime: "14 min read",
        featured: false,
        image: "/images/blog/card-shop-hero.png",
    },
    {
        slug: "how-to-design-cosmetics-store",
        title: "How to Design a Cosmetics Store: Complete Guide 2025",
        excerpt:
            "Learn everything about designing a successful cosmetics store, from layout planning to display fixtures selection and lighting optimization.",
        category: "Store Design",
        date: "2026-01-04",
        readTime: "12 min read",
        featured: true,
        image: "/images/blog/blog_display_cases_1767944020952.png",
    },
    {
        slug: "how-to-open-pop-culture-store",
        title: "How to Open a Pop Culture Store: Complete Guide 2025",
        excerpt:
            "Everything you need to know about opening a pop culture, collectibles, or trendy toys store. From store design to display fixtures.",
        category: "Store Design",
        date: "2026-01-04",
        readTime: "15 min read",
        featured: true,
        image: "/images/blog/blog_pop_culture_store_1767944072052.png",
    },
    {
        slug: "toy-store-shelving-ideas",
        title: "Toy Store Shelving Ideas: Maximize Display & Sales",
        excerpt:
            "Discover the best shelving solutions for toy stores that maximize product visibility and create an engaging shopping experience for families.",
        category: "Shelving Guide",
        date: "2026-01-04",
        readTime: "10 min read",
        featured: true,
        image: "/images/blog/blog_toy_store_1767944091805.png",
    },
    {
        slug: "jewelry-store-display-ideas",
        title: "Jewelry Store Display Ideas That Drive Sales",
        excerpt:
            "Create stunning jewelry displays that capture attention and boost sales. Glass cases, lighting, and layout strategies.",
        category: "Store Design",
        date: "2026-01-04",
        readTime: "12 min read",
        featured: true,
        image: "/images/blog/blog_gondola_shelving_1767944001034.png",
    },
    {
        slug: "how-to-open-boutique",
        title: "How to Open a Boutique: Complete Store Setup Guide 2025",
        excerpt:
            "Everything you need to know about opening a boutique store. From store design and fixtures to layout planning and merchandising strategies.",
        category: "Store Setup",
        date: "2026-01-04",
        readTime: "15 min read",
        featured: true,
        image: "/images/blog/blog_boutique_store_1767944053601.png",
    },
    {
        slug: "collectibles-store-design",
        title: "Collectibles Store Design Guide: Display & Layout Tips",
        excerpt:
            "Complete guide to designing a collectibles store. Learn about display cases, lighting, security, and layout strategies for action figures and memorabilia.",
        category: "Store Design",
        date: "2026-01-04",
        readTime: "14 min read",
        featured: false,
        image: "/images/blog/collectibles-store-design.png",
    },
    {
        slug: "toy-store-layout",
        title: "Kids Toy Store Layout Tips: Design for Fun & Sales",
        excerpt:
            "Expert guide to toy store layout design. Learn how to create kid-friendly spaces that encourage exploration, engagement, and purchases.",
        category: "Store Layout",
        date: "2026-01-04",
        readTime: "12 min read",
        featured: false,
        image: "/images/blog/toy-store-layout.png",
    },
    {
        slug: "accessories-store-fixtures",
        title: "Accessories Store Fixtures: Complete Display Guide",
        excerpt:
            "Everything you need to know about accessories store fixtures. Learn about display stands, wall systems, and merchandising strategies.",
        category: "Fixtures Guide",
        date: "2026-01-04",
        readTime: "11 min read",
        featured: false,
        image: "/images/blog/accessories-store-fixtures.png",
    },
    {
        slug: "gondola-vs-wall-shelving",
        title: "Gondola Shelving vs Wall Shelving: Which to Choose?",
        excerpt:
            "A comprehensive comparison of gondola and wall shelving systems to help you make the right choice for your retail space.",
        category: "Product Guide",
        date: "2026-01-02",
        readTime: "8 min read",
        featured: false,
        image: "/images/blog/gondola-vs-wall-shelving.png",
    },
    {
        slug: "retail-fixtures-wholesale-guide",
        title: "Retail Store Fixtures Wholesale: Complete Buying Guide",
        excerpt:
            "Everything you need to know about buying retail fixtures wholesale, including supplier selection, pricing, and quality considerations.",
        category: "Buying Guide",
        date: "2026-01-01",
        readTime: "15 min read",
        featured: false,
        image: "/images/blog/retail-fixtures-wholesale-guide.png",
    },
    {
        slug: "gondola-shelving-dimensions",
        title: "Gondola Shelving Dimensions: Complete Size Guide",
        excerpt:
            "Complete guide to standard heights (48\"-84\"), widths (24\"-48\"), and depths. Find the perfect size for your store.",
        category: "Product Guide",
        date: "2025-12-20",
        readTime: "10 min read",
        featured: false,
        image: "/images/blog/gondola-height-comparison.png",
    },
    {
        slug: "how-to-measure-gondola-shelving",
        title: "How to Measure Gondola Shelving: Step-by-Step Guide",
        excerpt:
            "Step-by-step measurement guide with diagrams. Avoid common mistakes and get accurate dimensions for your retail space.",
        category: "How-To Guide",
        date: "2025-12-18",
        readTime: "8 min read",
        featured: false,
        image: "/images/blog/gondola-depth-options.png",
    },
    {
        slug: "gondola-shelving-buying-guide",
        title: "Gondola Shelving Buying Guide: Types, Pricing & Tips",
        excerpt:
            "Types, pricing ($150-$800), installation tips, and where to buy. Make informed purchasing decisions for your store.",
        category: "Buying Guide",
        date: "2025-12-15",
        readTime: "12 min read",
        featured: false,
        image: "/images/blog/retail-fixtures-comparison.png",
    },
];

export default function BlogPage() {
    const featuredPosts = blogPosts.filter((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://goodokshop.com" },
                { name: "Resources", url: "https://goodokshop.com/resources" },
                { name: "Blog", url: "https://goodokshop.com/resources/blog" },
            ]} />
            <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-white py-16 border-b">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Retail Display Blog
                        </h1>
                        <p className="text-xl text-gray-600">
                            Expert guides, design tips, and industry insights to help you
                            create stunning retail environments that drive sales.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/resources/blog/${post.slug}`}
                                className="group"
                            >
                                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                                    {/* Featured Image */}
                                    <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                                        <Image 
                                            src={post.image} 
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={75}
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs font-medium text-[var(--accent)] bg-gray-100 px-2 py-1 rounded">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-gray-500">{post.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4">{post.excerpt}</p>

                                        <div className="text-sm text-gray-400">{post.date}</div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {/* All Posts */}
            <section className="py-16 bg-white border-t">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8">All Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/resources/blog/${post.slug}`}
                                className="group h-full"
                            >
                                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs font-medium text-[var(--accent)] bg-gray-100 px-2 py-1 rounded">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-gray-500">{post.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                            <span className="text-sm text-gray-400">{post.date}</span>
                                            <span className="text-sm font-medium text-[var(--accent)] flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read More →
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white border-t">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Need Help With Your Store Design?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get a free 3D store design from our experts. Send us your store
                        dimensions and we&apos;ll create a custom layout within 24 hours.
                    </p>
                    <Link
                        href="/free-3d-design"
                        className="btn btn-primary"
                    >
                        Get Free Layout Design
                    </Link>
                </div>
            </section>
            </div>
        </>
    );
}
