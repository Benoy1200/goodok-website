import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Industry Solutions | Retail Store Fixtures by Industry | Goodok",
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
        href: "/solutions/pop-culture",
        icon: "馃幃",
        color: "from-[#004499] to-[#ff6b35]",
    },
    {
        name: "Toy Store",
        description: "Kid-friendly displays with safety features. Interactive demo areas and colorful fixtures.",
        href: "/solutions/toy-store",
        icon: "馃Ц",
        color: "from-orange-500 to-yellow-500",
    },
    {
        name: "Jewelry Store",
        description: "Premium glass showcases with LED lighting and security locks for precious items.",
        href: "/solutions/jewelry-store",
        icon: "馃拵",
        color: "from-amber-600 to-yellow-600",
    },
    {
        name: "Boutique",
        description: "Elegant clothing racks and display tables for fashion and accessories stores.",
        href: "/solutions/boutique",
        icon: "馃憲",
        color: "from-[#004499] to-[#ff6b35]",
    },
    {
        name: "Lifestyle Store",
        description: "Flexible display systems for home goods, gifts, and lifestyle products.",
        href: "/solutions/lifestyle",
        icon: "馃彔",
        color: "from-teal-500 to-emerald-500",
    },
    {
        name: "Stationery Store",
        description: "Organized shelving and display racks for stationery, art supplies, and office products.",
        href: "/solutions/stationery",
        icon: "鉁忥笍",
        color: "from-[#004499] to-[#0066cc]",
    },
];

export default function SolutionsPage() {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="gradient-hero py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Industry-Specific Display Solutions
                        </h1>
                        <p className="text-xl text-gray-300">
                            Every retail sector has unique requirements. We&apos;ve developed specialized
                            fixture solutions for different industries, ensuring your store stands out
                            and sells more.
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
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                                <div className="p-8">
                                    <div className="text-5xl mb-4">{solution.icon}</div>
                                    <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                                        {solution.name}
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        {solution.description}
                                    </p>
                                    <div className="flex items-center text-[var(--accent)] font-medium">
                                        Explore Solutions
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
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





