"use client";

import Link from "next/link";
import { useState } from "react";

// Products with images for dropdown (Ujoy style)
const productItems = [
    { name: "Gondola Shelving", href: "/products/gondola-shelving", icon: "🏪" },
    { name: "Wall Shelving", href: "/products/wall-shelving", icon: "📐" },
    { name: "Display Cases", href: "/products/display-cases", icon: "💎" },
    { name: "Clothing Racks", href: "/products/clothing-racks", icon: "👔" },
    { name: "Custom Fixtures", href: "/products/custom-fixtures", icon: "✨" },
    { name: "Store Design", href: "/free-3d-design", icon: "🎨" },
];

const navigation = [
    { name: "Solutions", href: "/solutions" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Resources", href: "/resources/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <nav className="container flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">G</span>
                    </div>
                    <div className="hidden sm:block">
                        <span className="font-bold text-xl text-gray-900">Goodok</span>
                        <span className="text-sm text-gray-500 block -mt-1">Shopfitting</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navigation.map((item) => (
                        item.hasDropdown ? (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setProductsDropdownOpen(true)}
                                onMouseLeave={() => setProductsDropdownOpen(false)}
                            >
                                <Link
                                    href={item.href}
                                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1"
                                >
                                    {item.name}
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>

                                {/* Products Dropdown - Ujoy Style Grid */}
                                {productsDropdownOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]">
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6">
                                            <div className="grid grid-cols-3 gap-4">
                                                {productItems.map((product) => (
                                                    <Link
                                                        key={product.name}
                                                        href={product.href}
                                                        className="group block"
                                                    >
                                                        {/* Image placeholder */}
                                                        <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                                                            <span className="text-4xl group-hover:scale-110 transition-transform">{product.icon}</span>
                                                        </div>
                                                        <p className="text-sm font-medium text-center text-gray-700 group-hover:text-blue-600 transition-colors">
                                                            {product.name}
                                                        </p>
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                                                <Link href="/products" className="text-blue-600 font-medium hover:underline text-sm">
                                                    View All Products →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="lg:hidden p-2 text-gray-600"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 py-4">
                    <div className="container flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-blue-600 font-medium py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* Mobile Products Sub-items */}
                        <div className="pl-4 border-l-2 border-gray-200 ml-2">
                            {productItems.map((product) => (
                                <Link
                                    key={product.name}
                                    href={product.href}
                                    className="text-gray-500 hover:text-blue-600 py-1 text-sm block"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {product.icon} {product.name}
                                </Link>
                            ))}
                        </div>
                        <hr className="border-gray-200" />
                        <Link
                            href="/free-3d-design"
                            className="btn btn-primary text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Free 3D Design
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
