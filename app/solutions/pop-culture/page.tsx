import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Pop Culture Store Fixtures | Anime & Collectibles Display | Goodok",
    description:
        "Professional fixture solutions for pop culture, anime, and gaming stores. See our real project cases with 3D design and installed photos. Free design service available.",
    keywords: [
        "pop culture store fixtures",
        "anime store display",
        "gaming store fixtures",
        "collectibles display",
        "funko pop display",
        "action figure display case",
        "trading card shop fixtures",
        "pop culture store design",
    ],
};

// Case study data
const caseStudies = [
    {
        id: "ruixin-popmart",
        title: "Ruixin Pop Mart Store",
        location: "China",
        description: "A trendy collectibles store featuring custom wall displays and glass showcases for blind box toys and designer figures.",
        features: ["Custom LED Lighting", "Glass Display Cases", "Branded Wall Units", "Checkout Counter"],
        images: {
            renders: [
                "/images/cases/pop-culture/ruixin-popmart/render-1.jpg",
                "/images/cases/pop-culture/ruixin-popmart/render-2.jpg",
            ],
            installed: [
                "/images/cases/pop-culture/ruixin-popmart/installed-1.jpg",
                "/images/cases/pop-culture/ruixin-popmart/installed-2.jpg",
                "/images/cases/pop-culture/ruixin-popmart/installed-3.jpg",
            ],
        },
    },
    {
        id: "filegu-anime",
        title: "Filegu Anime Store",
        location: "China",
        description: "A modern anime merchandise store with themed display areas for figures, posters, and accessories.",
        features: ["Figure Display Pedestals", "Slatwall Systems", "Themed Zones", "Security Display Cases"],
        images: {
            renders: [
                "/images/cases/pop-culture/filegu-anime/render-1.jpg",
                "/images/cases/pop-culture/filegu-anime/render-2.jpg",
            ],
            installed: [
                "/images/cases/pop-culture/filegu-anime/installed-1.jpg",
                "/images/cases/pop-culture/filegu-anime/installed-2.jpg",
                "/images/cases/pop-culture/filegu-anime/installed-3.jpg",
            ],
        },
    },
];

export default function PopCultureSolutionPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/images/cases/pop-culture/ruixin-popmart/render-1.jpg"
                    alt="Pop Culture Store Design by Goodok"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container">
                        <div className="max-w-2xl text-white">
                            <span className="inline-block px-3 py-1 bg-[var(--accent)] text-white text-sm font-medium rounded-full mb-4">
                                Real Projects Showcase
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Pop Culture Store Fixtures
                            </h1>
                            <p className="text-xl text-gray-200 mb-6">
                                Create the ultimate destination for anime fans, gamers, and collectors.
                                See our real project cases below.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://api.whatsapp.com/send?phone=8613822102050" className="btn btn-primary">
                                    Get Free 3D Design
                                </a>
                                <a href="#case-studies" className="btn btn-secondary bg-white/20 border-white text-white hover:bg-white hover:text-gray-900">
                                    View Real Cases
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-6 bg-[var(--primary)] text-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold">50+</div>
                            <div className="text-sm opacity-80">Pop Culture Stores Completed</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold">Free</div>
                            <div className="text-sm opacity-80">3D Design Service</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold">30-50%</div>
                            <div className="text-sm opacity-80">Cost Savings vs Local</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold">15+</div>
                            <div className="text-sm opacity-80">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real Case Studies */}
            <section id="case-studies" className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Project Cases</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            See how we transformed these spaces from 3D design to reality.
                            Every project includes free design consultation.
                        </p>
                    </div>

                    {caseStudies.map((caseStudy, index) => (
                        <div key={caseStudy.id} className={`mb-16 ${index % 2 === 1 ? 'bg-white rounded-2xl p-8' : ''}`}>
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Case Info */}
                                <div className="lg:w-1/3">
                                    <span className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium rounded-full mb-3">
                                        Case #{index + 1}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4">📍 {caseStudy.location}</p>
                                    <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-2">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {caseStudy.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=8613822102050"
                                        className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
                                    >
                                        Get Similar Design →
                                    </a>
                                </div>

                                {/* Images Grid */}
                                <div className="lg:w-2/3">
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-500 mb-3">3D Design Renders</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {caseStudy.images.renders.map((img, i) => (
                                                <div key={i} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                                                    <Image
                                                        src={img}
                                                        alt={`${caseStudy.title} 3D Render ${i + 1}`}
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute top-2 left-2 px-2 py-1 bg-blue-500 text-white text-xs rounded">
                                                        3D Design
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-3">Installed Photos</h4>
                                        <div className="grid grid-cols-3 gap-4">
                                            {caseStudy.images.installed.map((img, i) => (
                                                <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                                    <Image
                                                        src={img}
                                                        alt={`${caseStudy.title} Installed ${i + 1}`}
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute top-2 left-2 px-2 py-1 bg-green-500 text-white text-xs rounded">
                                                        Installed
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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

            {/* Store Types We Serve */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">Store Types We Serve</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "🎮", title: "Gaming Stores", desc: "Video game, board game, and TCG shops" },
                            { icon: "🎌", title: "Anime Shops", desc: "Figure stores, manga retailers, merchandise" },
                            { icon: "🦸", title: "Comic Book Stores", desc: "Comics, graphic novels, superhero collectibles" },
                            { icon: "🎁", title: "Blind Box Stores", desc: "Pop Mart, designer toys, mystery boxes" },
                            { icon: "🃏", title: "Trading Card Shops", desc: "Pokemon, Magic, sports cards" },
                            { icon: "🎬", title: "Movie Memorabilia", desc: "Funko Pop, props, poster stores" },
                            { icon: "🧸", title: "Toy Stores", desc: "Action figures, plush, vintage toys" },
                            { icon: "🎪", title: "Pop-up Exhibitions", desc: "Temporary exhibitions, conventions" },
                        ].map((item) => (
                            <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-3xl mb-3 block">{item.icon}</span>
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
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

            {/* CTA Section */}
            <section className="py-20 bg-[var(--primary)] text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Dream Store?</h2>
                        <p className="text-xl opacity-90 mb-8">
                            Get a free 3D design for your pop culture store. No commitment required.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050"
                                className="btn bg-white text-[var(--primary)] hover:bg-gray-100"
                            >
                                WhatsApp Us Now
                            </a>
                            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]">
                                Contact Form
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much do pop culture store fixtures cost?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Pop culture store fixtures typically range from $5,000 to $50,000 depending on store size and customization. As a direct factory, Goodok offers 30-50% savings compared to local retailers."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free store design?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! We provide free 3D design service for all pop culture store projects. Send us your floor plan and we'll create a custom design within 3-5 business days."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you ship fixtures internationally?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we export to 50+ countries worldwide. We handle complete shipping logistics including sea freight and customs documentation."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
