import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Toy Store Fixtures | Kids Retail Display Solutions | Goodok",
    description:
        "Complete fixture solutions for toy stores. Safe, colorful displays for games, dolls, action figures, and educational toys.",
    keywords: [
        "toy store fixtures",
        "kids store display",
        "toy shelving",
        "game store fixtures",
        "children store layout",
    ],
};

export default function ToyStoreSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero Image */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/images/hero-bg-5.jpg"
                    alt="Toy Store"
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
                            Toy Store Fixtures
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Create a magical shopping experience that excites kids and gives parents
                            confidence. Our displays are colorful, safe, and designed for little explorers.
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
                        <h2 className="text-3xl font-bold mb-6">Fun & Safe Toy Store Solutions</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Toy stores are unique: your customers come in pairs—kids who want to play
                            and parents who make purchasing decisions. Great fixtures engage children
                            while organizing inventory in a way that helps parents find what they need.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We design sturdy shelving at child-friendly heights, demo stations that
                            encourage hands-on play, and colorful displays that make your store feel
                            like a destination, not just a shop.
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4">Key Features for Toy Stores:</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Child-Safe Design:</strong> Rounded corners and stable bases</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Low Shelving:</strong> Reachable displays for little shoppers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Demo Areas:</strong> Interactive play zones that boost sales</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Colorful Options:</strong> Bright finishes that create excitement</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>High Durability:</strong> Built to withstand enthusiastic shoppers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
