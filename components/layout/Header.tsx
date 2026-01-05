"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Projects", href: "/projects" },
    { name: "Resources", href: "/resources/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                        >
                            {item.name}
                        </Link>
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
