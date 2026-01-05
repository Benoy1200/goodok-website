import type { Metadata } from "next";
import Link from "next/link";

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

// Blog posts data - will be converted to CMS or MDX later
const blogPosts = [
    {
        slug: "how-to-design-cosmetics-store",
        title: "How to Design a Cosmetics Store: Complete Guide 2025",
        excerpt:
            "Learn everything about designing a successful cosmetics store, from layout planning to display fixtures selection and lighting optimization.",
        category: "Store Design",
        date: "2026-01-04",
        readTime: "12 min read",
        featured: true,
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
    },
];

export default function BlogPage() {
    const featuredPosts = blogPosts.filter((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16">
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
            <section className="py-16">
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
                                    {/* Featured Image Placeholder */}
                                    <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                        <span className="text-6xl">📖</span>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-gray-500">{post.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
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
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8">All Articles</h2>
                    <div className="space-y-6">
                        {regularPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/resources/blog/${post.slug}`}
                                className="group block"
                            >
                                <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-gray-500">{post.readTime}</span>
                                            </div>

                                            <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                                                {post.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm mt-1">{post.excerpt}</p>
                                        </div>

                                        <div className="text-sm text-gray-400 md:text-right whitespace-nowrap">
                                            {post.date}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Need Help With Your Store Design?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Get a free 3D store design from our experts. Send us your store
                        dimensions and we&apos;ll create a custom layout within 24 hours.
                    </p>
                    <Link
                        href="/free-3d-design"
                        className="btn bg-white text-gray-900 hover:bg-gray-100"
                    >
                        Get Free 3D Design
                    </Link>
                </div>
            </section>
        </div>
    );
}
