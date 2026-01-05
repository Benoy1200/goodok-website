import Link from "next/link";

const footerLinks = {
    products: [
        { name: "Gondola Shelving", href: "/products/gondola-shelving" },
        { name: "Wall Shelving", href: "/products/wall-shelving" },
        { name: "Display Cases", href: "/products/display-cases" },
        { name: "Clothing Racks", href: "/products/clothing-racks" },
        { name: "Custom Fixtures", href: "/products/custom-fixtures" },
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
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/resources/blog" },
        { name: "Contact", href: "/contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* CTA Section */}
            <div className="gradient-cta py-16">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Store?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Get your free 3D store design within 24 hours. No obligation, just professional guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/free-3d-design"
                            className="btn bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                        >
                            Get Free 3D Design
                        </Link>
                        <a
                            href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20a%203D%20store%20design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="container py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">G</span>
                            </div>
                            <div>
                                <span className="font-bold text-xl !text-white">Goodok</span>
                                <span className="text-sm text-gray-400 block -mt-1">Shopfitting</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            Professional retail display solutions manufacturer with 15+ years of experience.
                            Serving 500+ stores worldwide.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Links - TikTok */}
                            <a href="https://www.tiktok.com/@goodokofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="!text-white font-semibold mb-4">Products</h4>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 className="!text-white font-semibold mb-4">Solutions</h4>
                        <ul className="space-y-2">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="!text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <h5 className="text-white font-semibold mb-2 text-sm">Contact</h5>
                            <a
                                href="mailto:info@goodokshop.com"
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                info@goodokshop.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 py-6">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Goodok Shopfitting. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy" className="text-gray-500 hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
