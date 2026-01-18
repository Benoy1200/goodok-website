import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Boutique Store Fixtures | Fashion & Clothing Display | Goodok",
    description:
        "Elegant fixture solutions for boutiques and fashion stores. Clothing racks, display tables, and wall systems for apparel and accessories.",
    keywords: [
        "boutique store fixtures",
        "fashion store display",
        "clothing racks",
        "boutique shelving",
        "apparel fixtures",
    ],
};

export default function BoutiqueSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero Image */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/images/hero-bg-4.jpg"
                    alt="Boutique Store"
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
                            Boutique Store Fixtures
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Create a sophisticated shopping environment that reflects your brand&apos;s personality.
                            Our boutique fixtures combine minimalist elegance with practical functionality.
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
                        <h2 className="text-3xl font-bold mb-6">Elegant Boutique Display Solutions</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Boutique stores thrive on atmosphere. Unlike mass-market retail, boutiques
                            sell an experience as much as products. Your fixtures should enhance your
                            curated selection without overwhelming it.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We design minimalist racks that highlight garments, display tables that
                            create visual focal points, and wall systems that maximize space while
                            maintaining an airy, upscale feel.
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4">Key Features for Boutiques:</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Minimalist Design:</strong> Clean lines that let your clothing shine</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Premium Finishes:</strong> Brushed gold, matte black, or rose gold options</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Mobile Racks:</strong> Easily reconfigure your floor layout</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Nesting Tables:</strong> Tiered displays for folded items and accessories</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Mirror Integration:</strong> Full-length and vanity mirrors for your fitting area</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
