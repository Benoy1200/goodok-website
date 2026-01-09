const fs = require('fs');
const path = require('path');

// 博客文章数据 (从 page.tsx 提取)
const blogPosts = [
    {
        slug: "how-to-design-cosmetics-store",
        // Skip this one as it matches the manually fixed one, or just overwrite it to be safe and consistent
        title: "How to Design a Cosmetics Store: Complete Guide 2025",
        description: "Learn everything about designing a successful cosmetics store, from layout planning to display fixtures selection and lighting optimization.",
        category: "Store Design",
        date: "2026-01-04",
        readTime: "12 min read",
        image: "/images/blog/blog_display_cases_1767944020952.png",
    },
    {
        slug: "how-to-open-pop-culture-store",
        title: "How to Open a Pop Culture Store: Complete Guide 2025",
        description: "Everything you need to know about opening a pop culture, collectibles, or trendy toys store. From store design to display fixtures.",
        category: "Store Design",
        date: "2026-01-04",
        readTime: "15 min read",
        image: "/images/blog/blog_pop_culture_store_1767944072052.png",
    },
    {
        slug: "toy-store-shelving-ideas",
        title: "Toy Store Shelving Ideas: Maximize Display & Sales",
        description: "Discover the best shelving solutions for toy stores that maximize product visibility and create an engaging shopping experience for families.",
        category: "Shelving Guide",
        date: "2026-01-04",
        readTime: "10 min read",
        image: "/images/blog/blog_toy_store_1767944091805.png",
    },
    {
        slug: "jewelry-store-display-ideas",
        title: "Jewelry Store Display Ideas That Drive Sales",
        description: "Create stunning jewelry displays that capture attention and boost sales. Glass cases, lighting, and layout strategies.",
        category: "Store Design",
        date: "2026-01-04",
        readTime: "12 min read",
        image: "/images/blog/blog_gondola_shelving_1767944001034.png",
    },
    {
        slug: "how-to-open-boutique",
        title: "How to Open a Boutique: Complete Store Setup Guide 2025",
        description: "Everything you need to know about opening a boutique store. From store design and fixtures to layout planning and merchandising strategies.",
        category: "Store Setup",
        date: "2026-01-04",
        readTime: "15 min read",
        image: "/images/blog/blog_boutique_store_1767944053601.png",
    },
    {
        slug: "collectibles-store-design",
        title: "Collectibles Store Design Guide: Display & Layout Tips",
        description: "Complete guide to designing a collectibles store. Learn about display cases, lighting, security, and layout strategies for action figures and memorabilia.",
        category: "Store Design",
        date: "2026-01-04",
        readTime: "14 min read",
        image: "/images/blog/collectibles-store-design.png",
    },
    {
        slug: "toy-store-layout",
        title: "Kids Toy Store Layout Tips: Design for Fun & Sales",
        description: "Expert guide to toy store layout design. Learn how to create kid-friendly spaces that encourage exploration, engagement, and purchases.",
        category: "Store Layout",
        date: "2026-01-04",
        readTime: "12 min read",
        image: "/images/blog/toy-store-layout.png",
    },
    {
        slug: "accessories-store-fixtures",
        title: "Accessories Store Fixtures: Complete Display Guide",
        description: "Everything you need to know about accessories store fixtures. Learn about display stands, wall systems, and merchandising strategies.",
        category: "Fixtures Guide",
        date: "2026-01-04",
        readTime: "11 min read",
        image: "/images/blog/accessories-store-fixtures.png",
    },
    {
        slug: "gondola-vs-wall-shelving",
        title: "Gondola Shelving vs Wall Shelving: Which to Choose?",
        description: "A comprehensive comparison of gondola and wall shelving systems to help you make the right choice for your retail space.",
        category: "Product Guide",
        date: "2026-01-02",
        readTime: "8 min read",
        image: "/images/blog/gondola-vs-wall-shelving.png",
    },
    {
        slug: "retail-fixtures-wholesale-guide",
        title: "Retail Store Fixtures Wholesale: Complete Buying Guide",
        description: "Everything you need to know about buying retail fixtures wholesale, including supplier selection, pricing, and quality considerations.",
        category: "Buying Guide",
        date: "2026-01-01",
        readTime: "15 min read",
        image: "/images/blog/retail-fixtures-wholesale-guide.png",
    },
];

const basePath = 'e:\\retail-miniapp-backend\\goodok-website\\app\\resources\\blog';
const componentNameMap = {
    'how-to-design-cosmetics-store': 'CosmeticsStoreGuide',
    'how-to-open-pop-culture-store': 'PopCultureStoreGuide',
    'toy-store-shelving-ideas': 'ToyStoreShelvingGuide',
    'jewelry-store-display-ideas': 'JewelryStoreGuide',
    'how-to-open-boutique': 'BoutiqueGuide',
    'collectibles-store-design': 'CollectiblesStoreGuide',
    'toy-store-layout': 'ToyStoreLayoutGuide',
    'accessories-store-fixtures': 'AccessoriesFixturesGuide',
    'gondola-vs-wall-shelving': 'ShelvingComparisonGuide',
    'retail-fixtures-wholesale-guide': 'WholesaleGuide',
};

const getTemplate = (post) => {
    const componentName = componentNameMap[post.slug] || 'BlogPost';
    
    return `import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "${post.title} | Goodok",
    description: "${post.description.replace(/"/g, '\\"')}",
    keywords: ["${post.category.toLowerCase()}", "retail store design", "shop fixtures", "display solutions"],
};

export default function ${componentName}() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="${post.title}"
                description="${post.description.replace(/"/g, '\\"')}"
                datePublished="${post.date}"
                author="Goodok Shopfitting"
                image="${post.image}"
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
                                ${post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            ${post.title}
                        </h1>

                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            ${post.description}
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span>${new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>⏱️</span>
                                <span>${post.readTime}</span>
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
                                        src="${post.image}" 
                                        alt="${post.title}"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <h2>Introduction</h2>
                                <p>Welcome to our comprehensive guide on ${post.title.toLowerCase()}. In this article, we will explore the best practices and strategies to help you succeed.</p>
                                
                                <h2>Key Considerations</h2>
                                <p>When planning your ${post.category.toLowerCase()}, it is essential to focus on customer experience and efficient space utilization. Good display fixtures can make a significant difference.</p>
                                
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
`;
};

blogPosts.forEach(post => {
    const filePath = path.join(basePath, post.slug, 'page.tsx');
    const content = getTemplate(post);
    
    // Ensure directory exists (it should, but good practice)
    if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    try {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Restored:', filePath);
    } catch (e) {
        console.error('Error restoring:', filePath, e);
    }
});
