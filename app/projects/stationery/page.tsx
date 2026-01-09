import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Stationery Store Project | Creative Display Case Study | Goodok",
    description:
        "Case study of a stationery store design project. Featuring organized shelving, creative display solutions, and efficient space utilization.",
    keywords: [
        "stationery store design",
        "stationery display fixtures",
        "retail project case study",
        "office supplies store",
        "stationery shop interior"
    ],
};

export default function StationeryProjectPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="relative h-[60vh] overflow-hidden">
                <Image
                    src="/images/scenes/watch-shop.jpg"
                    alt="Stationery Store Project"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center">
                    <div className="container text-white">
                        <span className="bg-[var(--accent)] text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                            Completed Project
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Modern Stationery Emporium
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl">
                            A colorful, organized stationery store with flexible shelving systems designed to showcase thousands of SKUs efficiently.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                            <div className="prose prose-lg text-gray-600">
                                <p className="mb-6">
                                    This stationery store required a complete shelving solution that could handle a diverse product range from small pens to large art supplies. The client wanted a bright, inspiring space that would encourage creativity.
                                </p>
                                <p className="mb-6">
                                    We implemented a combination of gondola shelving for general products and slatwall systems for accessories. Custom drawer units were designed for small items like erasers and paper clips.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Challenges</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Managing thousands of different SKUs efficiently</li>
                                    <li>Creating clear product categorization</li>
                                    <li>Designing child-friendly display heights</li>
                                </ul>
                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Solution</h3>
                                <p>
                                    We used a color-coded gondola system with adjustable shelves. Lower shelves were designed for children&apos;s reach, while premium items were displayed at eye level on slatwall systems with clear acrylic pockets.
                                </p>
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <div className="bg-gray-50 p-8 rounded-xl h-fit sticky top-24">
                            <h3 className="font-bold text-xl mb-6">Project Details</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Location</span>
                                    <span className="font-medium">Bangkok, Thailand</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Size</span>
                                    <span className="font-medium">150 sq. meters</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-medium">5 Weeks</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Budget</span>
                                    <span className="font-medium">$18,000 - $25,000</span>
                                </li>
                            </ul>
                            
                            <div className="mt-8">
                                <h4 className="font-bold mb-3">Products Used</h4>
                                <div className="space-y-2">
                                    <Link href="/products/gondola-shelving" className="block text-[var(--accent)] hover:underline">
                                        - Gondola Shelving
                                    </Link>
                                    <Link href="/products/wall-shelving" className="block text-[var(--accent)] hover:underline">
                                        - Wall Shelving System
                                    </Link>
                                    <Link href="/products/accessories" className="block text-[var(--accent)] hover:underline">
                                        - Display Accessories
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <p className="text-gray-600 mb-4 text-sm">Have a similar project in mind?</p>
                                <a href="https://api.whatsapp.com/send?phone=8613822102050" className="btn btn-primary w-full text-center block">
                                    Get Free Design
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
