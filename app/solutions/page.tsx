import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Industry Solutions | Retail Store Fixtures by Goodok",
    description: "Discover our specialized retail fixture solutions for different industries. Pop culture stores, toy shops, jewelry stores, boutiques, and lifestyle stores.",
    keywords: [
        "retail store solutions",
        "store fixtures by industry",
        "shop design solutions",
        "retail display solutions",
    ],
};

const solutions = [
    {
        name: "Pop Culture Store",
        description: "Display solutions for anime, gaming, and collectibles stores. Secure cases for valuable items.",
        icon: "🎮",
        image: "/images/scenes/pop-culture.jpg",
        href: "/solutions/pop-culture",
        color: "from-[#004499] to-[#ff6b35]",
    },
    {
        name: "Stationery Store",
        description: "Organized displays for pens, notebooks, and accessories.",
        icon: "✏️",
        image: "/images/scenes/watch-shop.jpg",
        href: "/solutions/stationery",
        color: "from-[#004499] to-[#0066cc]",
    },
    {
        name: "Jewelry Store",
        description: "Secure, elegant showcases for precious items. LED lighting and security locks.",
        icon: "💎",
        image: "/images/scenes/jewelry-store.jpg",
        href: "/solutions/jewelry-store",
        color: "from-[#004499] to-[#0066cc]",
    },
    {
        name: "Boutique",
        description: "Fashion-forward displays for clothing and accessories stores. Elegant racks and glass cases.",
        icon: "👗",
        image: "/images/scenes/boutique-shop.jpg",
        href: "/solutions/boutique",
        color: "from-[#004499] to-[#ff6b35]",
    },
    {
        name: "Toy Store",
        description: "Kid-friendly displays with safety features. Interactive demo areas and colorful fixtures.",
        icon: "🧸",
        image: "/images/scenes/toy-store.jpg",
        href: "/solutions/toy-store",
        color: "from-[#ff6b35] to-[#ff9500]",
    },
    {
        name: "Lifestyle Store",
        description: "Flexible display systems for home goods, gifts, and lifestyle products.",
        icon: "🏠",
        image: "/images/scenes/cosmetics-store.jpg",
        href: "/solutions/lifestyle",
        color: "from-[#0066cc] to-[#008844]",
    },
];

export default function SolutionsPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-white py-20 border-b">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-900">
                            Industry-Specific Display Solutions
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Every retail sector has unique requirements. We&apos;ve developed specialized
                            fixture solutions to ensure your store stands out and sells more.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution) => (
                            <Link
                                key={solution.name}
                                href={solution.href}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`relative aspect-[4/3] bg-gradient-to-br ${solution.color} rounded-xl overflow-hidden`}>
                                    {solution.image && (
                                        <Image
                                            src={solution.image}
                                            alt={solution.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                                        {solution.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{solution.description}</p>
                                    <div className="text-[var(--accent)] font-medium flex items-center gap-2">
                                        Explore Solution
                                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4-7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white border-t">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Not Sure Which Solution Fits Your Store?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Our team can help you identify the perfect display solutions for your specific
                        retail environment. Get a free consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/free-3d-design"
                            className="btn btn-primary text-lg px-8 py-4"
                        >
                            Get Free 3D Design
                        </Link>
                        <Link
                            href="/contact"
                            className="btn btn-secondary text-lg px-8 py-4"
                        >
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

