import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Lifestyle Store Fixtures | Home & Living Display | Goodok",
    description:
        "Complete fixture solutions for lifestyle stores. Display systems for home goods, kitchenware, decor, and wellness products.",
    keywords: [
        "lifestyle store fixtures",
        "home goods display",
        "homeware shelving",
        "gift shop fixtures",
        "wellness store display",
    ],
};

export default function LifestyleSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero Image */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/images/hero-bg-6.jpg"
                    alt="Lifestyle Store"
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
                            Lifestyle Store Fixtures
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Create an inspiring space that tells a story. Our display solutions help
                            lifestyle stores present curated collections that resonate with customers
                            seeking a particular aesthetic or way of living.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="https://api.whatsapp.com/send?phone=8613822102050" className="btn btn-primary">
                                Get Free 3D Design
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
                        <h2 className="text-3xl font-bold mb-6">Inspiring Lifestyle Display Solutions</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Lifestyle stores sell more than products—they sell aspiration. Whether you
                            focus on home decor, wellness, sustainable living, or curated gift concepts,
                            your fixtures should help create immersive vignettes that inspire customers.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We design display systems that encourage exploration and discovery. Island
                            tables for lifestyle tableaus, wall systems for curated galleries, and modular
                            pieces that adapt as your collections evolve.
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4">Key Features for Lifestyle Stores:</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Vignette-Ready:</strong> Tables and shelves designed for lifestyle displays</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Natural Materials:</strong> Wood and mixed-material options</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Modular Design:</strong> Easily reconfigure for seasonal themes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Warm Finishes:</strong> Oak, walnut, and natural tones</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Prop Integration:</strong> Built-in options for plants and decor</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
