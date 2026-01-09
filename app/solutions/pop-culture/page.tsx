import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Pop Culture Store Fixtures | Collectibles & Gaming Display | Goodok",
    description:
        "Complete fixture solutions for pop culture, anime, and gaming stores. Display cases for action figures, trading cards, and collectibles.",
    keywords: [
        "pop culture store fixtures",
        "anime store display",
        "gaming store fixtures",
        "collectibles display",
        "funko pop display",
    ],
};

export default function PopCultureSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero Image */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Pop Culture Store"
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
                            Pop Culture Store Fixtures
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Create the ultimate destination for anime fans, gamers, and collectors.
                            Our display solutions protect and showcase valuable collectibles while creating
                            an immersive shopping experience.
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
                        <h2 className="text-3xl font-bold mb-6">Complete Pop Culture Store Solutions</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Pop culture stores require specialized fixtures that balance security with visibility.
                            From limited-edition action figures to rare trading cards, every item needs the right
                            display to showcase its value and protect it from damage.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We understand the unique needs of collectibles retail. Our fixtures feature tempered
                            glass cases with secure locking mechanisms, LED lighting that highlights product details,
                            and modular designs that adapt to your changing inventory.
                        </p>
                        
                        <h3 className="text-xl font-bold mb-4">Key Features for Pop Culture Stores:</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Secure Glass Cases:</strong> Lockable display cases for high-value figures and graded cards</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>LED Lighting:</strong> Adjustable lighting to highlight product details without UV damage</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Modular Wall Systems:</strong> Slatwall panels for flexible merchandise arrangement</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Themed Displays:</strong> Custom branded fixtures to match your store identity</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Card Display Systems:</strong> Specialized racks for trading cards and booster packs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Why Store Owners Choose Us</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-4xl mb-3 block">🔒</span>
                                <h3 className="font-bold mb-2">Security First</h3>
                                <p className="text-gray-600 text-sm">Lockable cases protect high-value collectibles from theft</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">💡</span>
                                <h3 className="font-bold mb-2">Perfect Lighting</h3>
                                <p className="text-gray-600 text-sm">LED strips highlight products without heat or UV damage</p>
                            </div>
                            <div>
                                <span className="text-4xl mb-3 block">🎨</span>
                                <h3 className="font-bold mb-2">Custom Themes</h3>
                                <p className="text-gray-600 text-sm">Branded fixtures that match your store identity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
