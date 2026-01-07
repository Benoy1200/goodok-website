import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Store Fixtures Projects | Goodok Shopfitting Case Studies",
    description: "Browse our completed retail fixture projects from around the world. See how we've helped stores create stunning retail spaces.",
    keywords: [
        "store fixture projects",
        "retail case studies",
        "store design examples",
        "shopfitting projects",
        "completed retail projects",
    ],
};

const projects = [
    {
        name: "Trendy Toys Store",
        location: "Dubai, UAE",
        description: "A 200銕?pop culture store featuring anime figures, trading cards, and gaming accessories.",
        image: "/images/projects/toy-store.jpg",
        href: "/projects/trendy-toys-store",
        category: "Pop Culture",
    },
    {
        name: "Anime Paradise",
        location: "Singapore",
        description: "Premium collectibles store with high-end display cases for limited edition figures.",
        image: "/images/projects/anime-paradise.jpg",
        href: "/projects/anime-paradise",
        category: "Pop Culture",
    },
    {
        name: "Boutique Accessories",
        location: "Tokyo, Japan",
        description: "Fashion-forward boutique with elegant rose gold displays and glass accessory cases.",
        image: "/images/projects/boutique.jpg",
        href: "/projects/boutique-accessories",
        category: "Boutique",
    },
    {
        name: "Cosmetics Retail",
        location: "Seoul, South Korea",
        description: "Modern cosmetics store with sleek white displays and LED lighting.",
        image: "/images/projects/cosmetics.jpg",
        href: "/projects/cosmetics-retail",
        category: "Cosmetics",
    },
    {
        name: "Supermarket Retrofit",
        location: "Bangkok, Thailand",
        description: "Complete supermarket renovation with new gondola shelving and checkout counters.",
        image: "/images/projects/supermarket.jpg",
        href: "/projects/supermarket-retrofit",
        category: "Supermarket",
    },
];

export default function ProjectsPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#004499] to-[#ff6b35] text-white py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-[#F0E1C3] text-sm font-medium">Our Work</span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                            Completed Projects
                        </h1>
                        <p className="text-xl text-[#F8F1E3] mb-8">
                            Explore our portfolio of retail fixture installations from around the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Link
                                key={project.name}
                                href={project.href}
                                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition"
                            >
                                <div className="aspect-video bg-gradient-to-br from-[#f8f9fa] to-[#f8f9fa] flex items-center justify-center">
                                    <span className="text-6xl">馃彧</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs bg-[#f8f9fa] text-[var(--primary)] px-2 py-1 rounded">
                                            {project.category}
                                        </span>
                                        <span className="text-sm text-gray-500">{project.location}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{project.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Your Project
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get a free 3D design and consultation for your store. We've helped hundreds of store owners create stunning retail spaces.
                    </p>
                    <Link href="/free-3d-design" className="btn bg-[#004499] text-white hover:bg-[#0066cc]">
                        Get Free 3D Design
                    </Link>
                </div>
            </section>
        </div>
    );
}


