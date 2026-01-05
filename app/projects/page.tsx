import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects - Store Fit-out Case Studies",
    description:
        "Explore our portfolio of completed store projects. From boutiques to supermarkets, see how we transform empty spaces into profitable retail environments.",
    keywords: [
        "retail store projects",
        "store fit-out case studies",
        "retail design portfolio",
        "shop renovation examples",
    ],
};

// Featured projects based on TikTok content themes
const projects = [
    {
        id: "trendy-toys-store",
        title: "500 SQM Trendy Toys & Accessories Store",
        category: "Toys & Accessories",
        location: "China",
        duration: "15 Days",
        description:
            "Complete store fit-out for a 500sqm trendy toys and accessories retail space. From empty shell to grand opening in just 15 days.",
        highlights: [
            "500 sqm retail space",
            "Custom display shelving",
            "LED lighting integration",
            "From design to completion: 15 days",
        ],
        results: "Grand opening achieved on schedule",
        image: "/images/product-1.jpg",
    },
    {
        id: "boutique-accessories",
        title: "High-Converting Boutique Entry Layout",
        category: "Boutique",
        location: "Southeast Asia",
        duration: "10 Days",
        description:
            "Strategic store layout design focused on maximizing customer flow and product visibility for a boutique accessories store.",
        highlights: [
            "Optimized entry layout",
            "Product-focused display zones",
            "Custom gondola shelving",
            "Lighting design consultation",
        ],
        results: "35% increase in customer dwell time",
        image: "/images/product-2.jpg",
    },
    {
        id: "cosmetics-retail",
        title: "Modern Cosmetics Retail Space",
        category: "Cosmetics",
        location: "Middle East",
        duration: "12 Days",
        description:
            "Premium retail fixtures for a modern cosmetics store, featuring glass display cases and elegant lighting.",
        highlights: [
            "Glass display showcases",
            "Premium finish fixtures",
            "Brand-integrated design",
            "Security display systems",
        ],
        results: "20% increase on average transaction value",
        image: "/images/product-3.jpg",
    },
    {
        id: "supermarket-retrofit",
        title: "Supermarket Shelving Retrofit",
        category: "Supermarket",
        location: "USA",
        duration: "7 Days",
        description:
            "Complete gondola shelving replacement for a 1000sqm supermarket, improving product visibility and shopper experience.",
        highlights: [
            "Heavy-duty gondola shelving",
            "Endcap display optimization",
            "Checkout counter redesign",
            "Refrigeration integration",
        ],
        results: "Completed during off-hours, zero business disruption",
        image: "/images/factory-1.jpg",
    },
];

const stats = [
    { number: "500+", label: "Stores Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "15", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
];

export default function ProjectsPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Projects
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            From empty shells to thriving stores — see how we&apos;ve helped
                            retailers around the world create stunning retail environments
                            that drive sales.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                                    <div className="text-gray-600 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <Link key={project.id} href={`/projects/${project.id}`} className="card overflow-hidden group hover:shadow-xl transition-shadow">
                                {/* Project Image */}
                                <div className="relative h-64 bg-gray-200">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span>📍 {project.location}</span>
                                        <span>⏱️ {project.duration}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h2>
                                    <p className="text-gray-600 mb-4">{project.description}</p>

                                    {/* Highlights */}
                                    <ul className="space-y-2 mb-4">
                                        {project.highlights.map((highlight) => (
                                            <li key={highlight} className="flex items-center gap-2 text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Results */}
                                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                                        <span className="text-sm font-medium text-green-800">
                                            ✨ Results: {project.results}
                                        </span>
                                    </div>

                                    <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                                        View Project Details →
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section - TikTok Integration */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            See Our Work in Action
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Follow us on TikTok for behind-the-scenes content, store transformations,
                            and design tips.
                        </p>
                    </div>

                    <div className="max-w-md mx-auto">
                        <a
                            href="https://www.tiktok.com/@goodokofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-bold text-lg">@goodokofficial</div>
                                    <div className="text-gray-500 text-sm">Goodok Shopfitting</div>
                                </div>
                            </div>

                            <div className="flex justify-around text-center border-t border-gray-100 pt-4">
                                <div>
                                    <div className="font-bold">100</div>
                                    <div className="text-gray-500 text-xs">Following</div>
                                </div>
                                <div>
                                    <div className="font-bold">60</div>
                                    <div className="text-gray-500 text-xs">Followers</div>
                                </div>
                                <div>
                                    <div className="font-bold">283</div>
                                    <div className="text-gray-500 text-xs">Likes</div>
                                </div>
                            </div>

                            <div className="mt-4 text-center">
                                <span className="btn btn-primary w-full">
                                    Follow on TikTok
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Popular Video Themes */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {[
                            { icon: "🎬", label: "Before & After", views: "14.5K+" },
                            { icon: "🏗️", label: "Store Buildouts", views: "9.9K+" },
                            { icon: "📐", label: "3D Designs", views: "8.7K+" },
                            { icon: "🏭", label: "Factory Tours", views: "7.2K+" },
                        ].map((theme) => (
                            <div key={theme.label} className="bg-white rounded-lg p-4 text-center">
                                <div className="text-2xl mb-2">{theme.icon}</div>
                                <div className="font-medium text-sm">{theme.label}</div>
                                <div className="text-gray-500 text-xs">{theme.views} views</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Your Store Could Be Next
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you&apos;re opening a new store or renovating an existing space,
                        let&apos;s create something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn bg-white text-gray-900 hover:bg-gray-100">
                            Get Free 3D Design
                        </Link>
                        <a
                            href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20saw%20your%20projects%20and%20I%20am%20interested"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Discuss Your Project
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
