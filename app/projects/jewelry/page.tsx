import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Jewelry Store Project | Elegant Display Case Study | Goodok",
    description:
        "Case study of a luxury jewelry store design project. Featuring glass display cases, LED lighting, and secure showcases for precious items.",
    keywords: [
        "jewelry store design",
        "jewelry display cases",
        "retail project case study",
        "luxury store fixtures",
        "jewelry shop interior"
    ],
};

export default function JewelryProjectPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="relative h-[60vh] overflow-hidden">
                <Image
                    src="/images/scenes/jewelry-store.jpg"
                    alt="Jewelry Store Project"
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
                            Elegant Jewelry Boutique
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl">
                            A sophisticated jewelry store featuring custom glass display cases with integrated LED lighting and secure locking mechanisms.
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
                                    The client required a complete store fit-out for their new jewelry boutique. The design needed to balance security with elegance, allowing customers to view precious items while maintaining safety.
                                </p>
                                <p className="mb-6">
                                    We designed custom glass display cases with tempered safety glass and integrated LED strip lighting. Each case features hidden security locks and adjustable shelving, allowing flexible product presentation.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Challenges</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Balancing security requirements with aesthetic appeal</li>
                                    <li>Creating optimal lighting for gemstone display</li>
                                    <li>Designing modular cases for different jewelry types</li>
                                </ul>
                                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Solution</h3>
                                <p>
                                    We utilized our premium glass display case line with custom modifications. Cases feature 10mm tempered glass, brushed gold metal frames, and CRI 95+ LED lighting for accurate color representation of gemstones.
                                </p>
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <div className="bg-gray-50 p-8 rounded-xl h-fit sticky top-24">
                            <h3 className="font-bold text-xl mb-6">Project Details</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Location</span>
                                    <span className="font-medium">Dubai, UAE</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Size</span>
                                    <span className="font-medium">80 sq. meters</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-medium">6 Weeks</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-3">
                                    <span className="text-gray-500">Budget</span>
                                    <span className="font-medium">$25,000 - $35,000</span>
                                </li>
                            </ul>
                            
                            <div className="mt-8">
                                <h4 className="font-bold mb-3">Products Used</h4>
                                <div className="space-y-2">
                                    <Link href="/products/display-cases" className="block text-[var(--accent)] hover:underline">
                                        - Glass Display Cases
                                    </Link>
                                    <Link href="/products/wall-shelving" className="block text-[var(--accent)] hover:underline">
                                        - Wall Display Systems
                                    </Link>
                                    <Link href="/products/checkout-counters" className="block text-[var(--accent)] hover:underline">
                                        - Checkout Counter
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
