import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Jewelry Store Fixtures | Display Cases & Showcases | Goodok",
    description:
        "Premium jewelry display solutions. Glass showcases, secure display cases, and elegant fixtures for fine jewelry and accessories.",
    keywords: [
        "jewelry store fixtures",
        "jewelry display cases",
        "jewelry showcases",
        "watch display",
        "fine jewelry fixtures",
    ],
};

export default function JewelrySolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero Image */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/images/hero-bg-3.jpg"
                    alt="Jewelry Store"
                    fill
                    className="object-cover"
                    priority
                />
            </section>

            {/* Hero Content - Below Image */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Jewelry Store Fixtures
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Create a luxurious shopping experience that matches the value of your jewelry.
                            Our display solutions combine elegant aesthetics with robust security features.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="https://api.whatsapp.com/send?phone=8613822102050" className="btn btn-primary">
                                Get Free Layout Design
                            </a>
                            <Link href="/contact" className="btn btn-secondary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Premium Jewelry Display Solutions</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Jewelry stores demand the perfect balance of beauty and security. Your display
                            fixtures must showcase the brilliance of each piece while protecting high-value
                            inventory from theft. Our solutions deliver both.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We specialize in tempered glass showcases with integrated LED lighting that
                            brings out the sparkle in diamonds and gemstones. Every case features secure
                            locking mechanisms and elegant finishes that elevate your brand.
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4">Key Features for Jewelry Stores:</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Tempered Glass:</strong> Clear, strong display surfaces that resist scratches</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>LED Lighting:</strong> Cool white LEDs that enhance diamond brilliance</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Secure Locks:</strong> High-security cam locks or electronic options</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Velvet Inserts:</strong> Elegant presentation trays and ring holders</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Custom Finishes:</strong> Gold, silver, or custom colors to match your brand</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
