import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    products: [
        { name: "Checkout Counters", href: "/products/checkout-counters" },
        { name: "Wall Shelving", href: "/products/wall-shelving" },
        { name: "Gondola Shelving", href: "/products/gondola-shelving" },
        { name: "Island Display Table", href: "/products/display-cases" },
        { name: "Clothing Racks", href: "/products/clothing-racks" },
        { name: "Accessories", href: "/products/accessories" },
    ],
    solutions: [
        { name: "Pop Culture Store", href: "/solutions/pop-culture" },
        { name: "Toy Store", href: "/solutions/toy-store" },
        { name: "Jewelry Store", href: "/solutions/jewelry-store" },
        { name: "Boutique", href: "/solutions/boutique" },
        { name: "Lifestyle Store", href: "/solutions/lifestyle" },
        { name: "Stationery Store", href: "/solutions/stationery" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/resources/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Payment & Security", href: "/payment-security" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Links Section */}
            <div className="container py-16">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
                    {/* Brand Column - Left Side */}
                    <div className="lg:max-w-md">
                        <div className="relative h-10 w-[140px] mb-6">
                            <Image
                                src="/images/goodok-logo-v2.png"
                                alt="Goodok Shopfitting"
                                fill
                                className="object-contain object-left rounded-sm"
                            />
                        </div>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Professional retail display solutions manufacturer with 15+ years of experience.
                            Serving 500+ stores worldwide.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Links - TikTok */}
                            <a href="https://www.tiktok.com/@goodokofficial" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--accent)] transition-colors" aria-label="TikTok">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Section - Right Side */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
                        {/* Products Column */}
                        <div>
                            <h4 className="text-gray-900 font-semibold mb-4">Products</h4>
                            <ul className="space-y-3">
                                {footerLinks.products.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-600 hover:text-[var(--accent)] text-sm transition-colors duration-300">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions Column */}
                        <div>
                            <h4 className="text-gray-900 font-semibold mb-4">Solutions</h4>
                            <ul className="space-y-3">
                                {footerLinks.solutions.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-600 hover:text-[var(--accent)] text-sm transition-colors duration-300">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-600 hover:text-[var(--accent)] text-sm transition-colors duration-300">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <h5 className="text-gray-900 font-semibold mb-2 text-sm">Contact</h5>
                                <a
                                    href="mailto:info@goodokshop.com"
                                    className="text-gray-600 hover:text-[var(--accent)] text-sm transition-colors duration-300"
                                >
                                    info@goodokshop.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 py-8">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Goodok Shopfitting. All rights reserved.
                    </p>
                    
                    {/* Payment Icons */}
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-xs">We Accept:</span>
                        <div className="flex items-center gap-3">
                            {/* PayPal */}
                            <div className="bg-gray-100 px-3 py-1.5 rounded text-xs font-bold text-blue-600">PayPal</div>
                            {/* Visa */}
                            <div className="bg-gray-100 px-3 py-1.5 rounded text-xs font-bold text-blue-800">VISA</div>
                            {/* Mastercard */}
                            <div className="bg-gray-100 px-3 py-1.5 rounded text-xs font-bold text-orange-600">MC</div>
                            {/* Trade Assurance */}
                            <div className="bg-orange-100 px-3 py-1.5 rounded text-xs font-bold text-orange-700">Trade Assurance</div>
                        </div>
                    </div>
                    
                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy" className="text-gray-500 hover:text-gray-900">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-gray-900">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
