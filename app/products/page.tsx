import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Products - Retail Display & Store Fixtures",
    description:
        "Browse our complete range of retail shelving, gondola racks, display cases, clothing racks and custom store fixtures. Factory direct pricing with global shipping.",
    keywords: [
        "gondola shelving",
        "retail shelving",
        "store fixtures",
        "display cases",
        "clothing racks",
        "wall shelving",
        "custom fixtures",
    ],
};

// Order: Checkout Counters, Wall Shelving, Gondola Shelving, Island Display Table, Clothing Racks, Accessories
const productCategories = [
    {
        id: "checkout-counters",
        name: "Checkout Counters",
        description:
            "Professional checkout and cash wrap counters designed for efficiency and customer flow. Customizable to match your store design.",
        features: [
            "Built-in storage",
            "Cable management",
            "Custom dimensions",
            "Integrated displays",
        ],
        priceRange: "From $350/unit",
        image: "/images/products/Checkout-Counters/收银台001_25071204413944b8b-1.jpg",
        href: "/products/checkout-counters",
    },
    {
        id: "wall-shelving",
        name: "Wall Shelving Systems",
        description:
            "Space-efficient wall-mounted shelving that maximizes your store's display capacity. Ideal for boutiques, pharmacies, and specialty stores.",
        features: [
            "Wall-mounted design",
            "Modular components",
            "Easy installation",
            "Various bracket styles",
        ],
        priceRange: "From $45/unit",
        image: "/images/products/wall-shelving/BG-001边柜.jpg",
        href: "/products/wall-shelving",
    },
    {
        id: "gondola-shelving",
        name: "Gondola Shelving",
        description:
            "Double-sided freestanding shelving units perfect for supermarkets, convenience stores, and retail environments. Available in various heights and widths.",
        features: [
            "Single & double-sided options",
            "Adjustable shelf heights",
            "Heavy-duty steel construction",
            "Multiple color finishes",
        ],
        priceRange: "From $85/bay",
        image: "/images/products/gondola-shelving/中岛柜005-A_25071109085244b8b-1.jpg",
        href: "/products/gondola-shelving",
    },
    {
        id: "island-display-table",
        name: "Island Display Table",
        description:
            "Elegant display tables for featured products and promotions. Perfect for showcasing new arrivals and seasonal items.",
        features: [
            "Various sizes available",
            "Customizable finishes",
            "Modular design",
            "Premium materials",
        ],
        priceRange: "From $200/unit",
        image: "/images/products/Island-Display-Table/LST-025流水台.jpg",
        href: "/products/display-cases",
    },
    {
        id: "clothing-racks",
        name: "Clothing Racks & Displays",
        description:
            "Elegant garment display systems for fashion boutiques, clothing stores, and retail showrooms. Modern designs that enhance your merchandise.",
        features: [
            "Floor & wall-mounted options",
            "Heavy-duty construction",
            "Modern aesthetics",
            "Multiple finish options",
        ],
        priceRange: "From $65/unit",
        image: "/images/products/clothing-racks/ZZ-004.jpg",
        href: "/products/clothing-racks",
    },
    {
        id: "accessories",
        name: "Accessories",
        description:
            "Versatile display accessories and retail fixtures. Complete your store setup with our range of hooks, signage, and display tools.",
        features: [
            "Display hooks",
            "Signage holders",
            "Mannequins",
            "Retail accessories",
        ],
        priceRange: "From $15/unit",
        image: "/images/products/Versatile-Accessories/四层架-A1.jpg",
        href: "/products/accessories",
    },
];

export default function ProductsPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Retail Display Products
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Professional-grade store fixtures manufactured to international
                            standards. Factory direct pricing with worldwide shipping.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/free-3d-design"
                                className="btn btn-primary"
                            >
                                Get Free Store Design
                            </Link>
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20want%20to%20inquire%20about%20your%20products"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Request Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productCategories.map((category) => (
                            <div key={category.id} className="card group">
                                {/* Product Image */}
                                <div className="h-64 relative overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h2 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors">
                                            {category.name}
                                        </h2>
                                        <span className="text-sm font-medium text-[var(--accent)] bg-[#f8f9fa] px-2 py-1 rounded">
                                            {category.priceRange}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-4">{category.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {category.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={category.href}
                                        className="btn btn-secondary w-full"
                                    >
                                        View Products
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - White background */}
            <section className="py-16 bg-white border-t">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Not Sure What You Need?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Share your store dimensions and requirements with us.
                        We&apos;ll create a custom 3D design showing exactly what products work best for your space.
                    </p>
                    <Link
                        href="/free-3d-design"
                        className="btn btn-primary"
                    >
                        Get Free 3D Store Design
                    </Link>
                </div>
            </section>
        </div>
    );
}
