import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Stationery Store Fixtures | Office & School Supplies Display | Goodok",
    description:
        "Complete fixture solutions for stationery stores. Display systems for pens, notebooks, art supplies, and office accessories.",
    keywords: [
        "stationery store fixtures",
        "office supplies display",
        "pen display rack",
        "notebook shelving",
        "art supplies fixtures",
    ],
};

export default function StationerySolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero Image */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/images/hero-bg-2.jpg"
                    alt="Stationery Store"
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
                            Stationery Store Fixtures
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Create an organized, inspiring shopping experience for students, artists,
                            and professionals. Our display systems maximize product visibility while
                            keeping thousands of SKUs neatly arranged.
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
                        <h2 className="text-3xl font-bold mb-6">Complete Stationery Store Solutions</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Stationery stores face unique challenges: thousands of small items, seasonal demand
                            for school supplies, and the need to display everything from premium pens to bulk
                            notebooks. Our fixture systems are designed to handle this complexity.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We provide modular shelving that adapts to your inventory mix, specialized displays
                            for writing instruments, and counter units that drive impulse purchases at checkout.
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4">Key Features for Stationery Stores:</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Adjustable Shelving:</strong> Easy height changes for notebooks, binders, and art supplies</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Pen Display Racks:</strong> Specialized holders for writing instruments</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Accessory Hooks:</strong> Organize small items like erasers, clips, and rulers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Back-to-School Ready:</strong> High-capacity displays for seasonal rushes</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
