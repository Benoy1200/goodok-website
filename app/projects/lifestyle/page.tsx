import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Lifestyle Store Project | Modern Retail Design Case Study | Goodok",
    description:
        "Case study of a modern lifestyle store design project. Featuring modular shelving, warm wood finishes, and flexible display zones.",
    keywords: [
        "lifestyle store design",
        "retail project case study",
        "modern store fixtures",
        "boutique store design",
        "retail interior design"
    ],
};

export default function LifestyleProjectPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="relative h-[60vh] overflow-hidden">
                <Image
                    src="/images/scenes/cosmetics-store.jpg"
                    alt="Lifestyle Store Project"
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
                            Urban Living Lifestyle Store
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl">
                            A warm, inviting space designed to showcase homeware and gifts with a focus on natural materials and flexible layouts.
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
                                    The client approached us with a vision for a "slow living" concept store that needed to feel more like a home than a shop. They required fixtures that were robust enough for heavy ceramics but elegant enough for fine textiles.
                                </p>
                                <p className="mb-6">
                                    Our solution involved a mix of natural oak shelving and matte black metal frames. We created a modular wall system that allows shelves to be moved easily to accommodate changing seasonal inventory.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Challenges</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Creating flexibility for diverse product sizes</li>
                                    <li>Maximizing floor space in a narrow store footprint</li>
                                    <li>Integrating lighting into shelving without visible wires</li>
                                </ul>
                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Solution</h3>
                                <p>
                                    We utilized our signature modular gondola system with custom wood veneers. LED strip lighting was embedded into the underside of each shelf, powered by a concealed track system in the uprights.
                                </p>
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <div className="bg-gray-50 p-8 rounded-xl h-fit sticky top-24">
                            <h3 className="font-bold text-xl mb-6">Project Details</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Location</span>
                                    <span className="font-medium">Shanghai, China</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Size</span>
                                    <span className="font-medium">120 sq. meters</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-medium">4 Weeks</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Budget</span>
                                    <span className="font-medium">$15,000 - $20,000</span>
                                </li>
                            </ul>
                            
                            <div className="mt-8">
                                <h4 className="font-bold mb-3">Products Used</h4>
                                <div className="space-y-2">
                                    <Link href="/products/gondola-shelving" className="block text-[var(--accent)] hover:underline">
                                        • Modular Gondola Shelving
                                    </Link>
                                    <Link href="/products/display-cases" className="block text-[var(--accent)] hover:underline">
                                        • Glass Display Case
                                    </Link>
                                    <Link href="/products/clothing-racks" className="block text-[var(--accent)] hover:underline">
                                        • Boutique Clothing Rack
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
