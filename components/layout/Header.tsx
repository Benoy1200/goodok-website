"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Products for simple text dropdown
const productItems = [
    { name: "Gondola Shelving", href: "/products/gondola-shelving" },
    { name: "Wall Shelving", href: "/products/wall-shelving" },
    { name: "Display Cases", href: "/products/display-cases" },
    { name: "Clothing Racks", href: "/products/clothing-racks" },
    { name: "Custom Fixtures", href: "/products/custom-fixtures" },
    { name: "Store Design", href: "/free-3d-design" },
];

// Navigation order: Solutions 鈫?Products 鈫?About 鈫?Resources 鈫?Contact
const navigation = [
    { name: "Solutions", href: "/solutions" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
            <div className="container py-4">
                <div className="flex flex-col items-center">

                    {/* Row 1: Centered Logo */}
                    <Link href="/" className="mb-4 relative group">
                        <div className="relative h-20 w-[200px] transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/images/goodok-logo-v2.png"
                                alt="Goodok Shopfitting"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Row 2: Navigation & Actions */}
                    <div className="w-full flex items-center justify-between lg:justify-center relative">

                        {/* Mobile Menu Button (Absolute Left on Mobile) */}
                        <button
                            type="button"
                            className="lg:hidden p-2 text-gray-600 absolute left-0"
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

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-10">
                            {navigation.map((item) => (
                                item.hasDropdown ? (
                                    <div
                                        key={item.name}
                                        className="relative group py-2" // Added py-2 for hover hit area
                                        onMouseEnter={() => setProductsDropdownOpen(true)}
                                        onMouseLeave={() => setProductsDropdownOpen(false)}
                                    >
                                        <Link
                                            href={item.href}
                                            className="text-gray-800 hover:text-[var(--accent)] font-semibold text-[15px] uppercase tracking-wide transition-colors flex items-center gap-1"
                                        >
                                            {item.name}
                                            <svg className="w-3 h-3 text-gray-400 group-hover:text-[var(--accent)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </Link>

                                        {/* Products Dropdown */}
                                        <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 transition-all duration-200 ${productsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 overflow-hidden">
                                                {productItems.map((product) => (
                                                    <Link
                                                        key={product.name}
                                                        href={product.href}
                                                        className="block px-5 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-[var(--accent)] transition-colors text-sm font-medium"
                                                    >
                                                        {product.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-800 hover:text-[var(--accent)] font-semibold text-[15px] uppercase tracking-wide transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </nav>

                        {/* Right Side Actions (Search/CTA) - Optional, mimicking Ujoy structure if needed, or keep empty for now to center nav perfectly */}
                        <div className="hidden lg:flex items-center absolute right-0">
                            <Link
                                href="/contact"
                                className="bg-[var(--accent)] text-white px-5 py-2 rounded-md text-sm font-bold shadow-md hover:bg-orange-600 transition-colors uppercase tracking-wider"
                            >
                                Get Quote
                            </Link>
                        </div>

                        {/* Mobile Logo (Small, if we want one centered on mobile row? Or just keep the big top one? 
                             Ujoy keeps top one. Mobile usually collapses. 
                             Let's keep the flex-col layout on mobile too, but maybe scale it down) 
                         */}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 py-4 shadow-inner">
                    <div className="container flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-800 hover:text-[var(--accent)] font-bold text-lg py-2 border-b border-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* Mobile Products Sub-items */}
                        <div className="pl-4 ml-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Products</p>
                            {productItems.map((product) => (
                                <Link
                                    key={product.name}
                                    href={product.href}
                                    className="text-gray-600 hover:text-[var(--accent)] py-2 text-sm block"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {product.name}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4">
                            <Link
                                href="/free-3d-design"
                                className="btn btn-primary w-full text-center justify-center py-3 text-base"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Free 3D Design
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

