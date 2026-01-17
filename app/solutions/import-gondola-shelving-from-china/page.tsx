import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Import Gondola Shelving from China | Factory Direct Pricing | Goodok",
    description:
        "Save 30-50% by importing gondola shelving direct from China factory. Free 3D design, quality guarantee, and worldwide shipping. Get your quote today.",
    keywords: [
        "import gondola shelving from China",
        "buy gondola shelving from China",
        "China gondola shelving factory",
        "wholesale gondola shelving China",
        "gondola shelving manufacturer China",
        "retail fixtures China",
        "store shelving import",
    ],
};

const processSteps = [
    {
        step: 1,
        title: "Send Your Requirements",
        description: "Share your store dimensions, products to display, and any design preferences via WhatsApp or email.",
        icon: "📋",
        time: "Day 1",
    },
    {
        step: 2,
        title: "Receive Free 3D Design",
        description: "Our designers create a complete 3D visualization of your store layout within 3-5 business days.",
        icon: "🎨",
        time: "Days 2-5",
    },
    {
        step: 3,
        title: "Confirm & Pay Deposit",
        description: "Review the design, make adjustments, and pay 30% deposit to start production.",
        icon: "✅",
        time: "Day 6-7",
    },
    {
        step: 4,
        title: "Production",
        description: "Your fixtures are manufactured in our 20,000㎡ factory. We send progress photos.",
        icon: "🏭",
        time: "Days 8-28",
    },
    {
        step: 5,
        title: "Quality Inspection",
        description: "Final inspection, packaging, and loading. You can request third-party inspection.",
        icon: "🔍",
        time: "Days 29-30",
    },
    {
        step: 6,
        title: "Shipping & Delivery",
        description: "We handle export documentation. Sea freight takes 25-35 days depending on destination.",
        icon: "🚢",
        time: "Days 31-65",
    },
];

const faqs = [
    {
        question: "What is the minimum order quantity (MOQ)?",
        answer: "Our minimum order is $3,000 USD (approximately one small store fit-out). For larger projects, we offer better pricing tiers.",
    },
    {
        question: "How much can I really save?",
        answer: "Typically 30-50% compared to buying from US distributors like ULINE or DGS Retail. For example, a $20,000 project from US suppliers might cost $10,000-$14,000 from us including shipping.",
    },
    {
        question: "What about shipping costs?",
        answer: "Sea freight typically costs $2,000-$5,000 for a 20ft container depending on destination. This is included in our quotes. Even with shipping, total cost is usually 30-50% less than US suppliers.",
    },
    {
        question: "How long does shipping take?",
        answer: "Sea freight is 25-35 days to US West Coast, 30-40 days to East Coast, 35-45 days to Europe. We can also arrange air freight for urgent orders (7-10 days) at additional cost.",
    },
    {
        question: "What if there are quality issues?",
        answer: "We offer a 2-year quality guarantee. If any manufacturing defects are found, we'll replace parts free of charge. We also welcome third-party inspections before shipping.",
    },
    {
        question: "Do you handle customs and import duties?",
        answer: "We provide all export documentation (commercial invoice, packing list, bill of lading). Import duties are typically 0-6.5% for store fixtures. We can recommend customs brokers in your country.",
    },
];

export default function ImportFromChinaPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full mb-6">
                            🏭 Direct Factory Pricing
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Import Gondola Shelving<br />from China & Save 30-50%
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Cut out the middleman. Buy directly from our 20,000㎡ factory with free 3D design,
                            quality guarantee, and door-to-door shipping worldwide.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050"
                                className="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8"
                            >
                                Get Free Quote
                            </a>
                            <a href="#process" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] text-lg px-8">
                                How It Works
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-6 bg-gray-900 text-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        <div>
                            <div className="text-2xl font-bold">20,000㎡</div>
                            <div className="text-sm opacity-70">Factory Area</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">15+ Years</div>
                            <div className="text-sm opacity-70">Experience</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">50+</div>
                            <div className="text-sm opacity-70">Countries Exported</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">500+</div>
                            <div className="text-sm opacity-70">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">Free</div>
                            <div className="text-sm opacity-70">3D Design</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Price Comparison */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Real Price Comparison</h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            See how much you can save by importing directly from our factory compared to US distributors.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* US Pricing */}
                            <div className="bg-gray-50 p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-2xl">🇺🇸</span>
                                    <h3 className="text-xl font-bold">US Distributor Price</h3>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600">Starter Gondola Unit</span>
                                        <span className="font-bold">$400-$600</span>
                                    </li>
                                    <li className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600">Add-On Unit</span>
                                        <span className="font-bold">$280-$400</span>
                                    </li>
                                    <li className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600">End Cap</span>
                                        <span className="font-bold">$350-$500</span>
                                    </li>
                                    <li className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600">Small Store (30 units)</span>
                                        <span className="font-bold text-red-600">$12,000-$18,000</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                                    <div className="text-sm text-red-700">❌ No free design</div>
                                    <div className="text-sm text-red-700">❌ Limited customization</div>
                                </div>
                            </div>
                            
                            {/* China Factory Pricing */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-2xl">🇨🇳</span>
                                    <h3 className="text-xl font-bold">Goodok Factory Price</h3>
                                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded">SAVE 50%</span>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex justify-between py-2 border-b border-green-200">
                                        <span className="text-gray-600">Starter Gondola Unit</span>
                                        <span className="font-bold text-green-600">$80-$150</span>
                                    </li>
                                    <li className="flex justify-between py-2 border-b border-green-200">
                                        <span className="text-gray-600">Add-On Unit</span>
                                        <span className="font-bold text-green-600">$50-$100</span>
                                    </li>
                                    <li className="flex justify-between py-2 border-b border-green-200">
                                        <span className="text-gray-600">End Cap</span>
                                        <span className="font-bold text-green-600">$100-$180</span>
                                    </li>
                                    <li className="flex justify-between py-2 border-b border-green-200">
                                        <span className="text-gray-600">Small Store (30 units) + Shipping</span>
                                        <span className="font-bold text-green-600">$6,000-$10,000</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                                    <div className="text-sm text-green-700">✓ Free 3D design included</div>
                                    <div className="text-sm text-green-700">✓ Full customization available</div>
                                    <div className="text-sm text-green-700">✓ Quality guarantee 2 years</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section id="process" className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
                        <p className="text-gray-600 text-center mb-12">
                            From inquiry to delivery in 60-75 days. We handle everything.
                        </p>
                        
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/20" />
                            
                            {processSteps.map((step, index) => (
                                <div key={step.step} className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="bg-white p-6 rounded-xl shadow-sm">
                                            <div className="text-3xl mb-2">{step.icon}</div>
                                            <span className="text-sm text-[var(--primary)] font-medium">{step.time}</span>
                                            <h3 className="text-lg font-bold mt-1 mb-2">{step.title}</h3>
                                            <p className="text-gray-600 text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex w-12 h-12 bg-[var(--primary)] text-white rounded-full items-center justify-center font-bold z-10">
                                        {step.step}
                                    </div>
                                    <div className="flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-bold mb-2">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Get */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">What You'll Get from Goodok</h2>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl text-center">
                                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🎨</span>
                                </div>
                                <h3 className="font-bold mb-2">Free 3D Design</h3>
                                <p className="text-gray-600 text-sm">Professional store layout with product placement visualization</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl text-center">
                                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🏭</span>
                                </div>
                                <h3 className="font-bold mb-2">Factory Direct Price</h3>
                                <p className="text-gray-600 text-sm">No middleman markup, straight from production line</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl text-center">
                                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🔧</span>
                                </div>
                                <h3 className="font-bold mb-2">Full Customization</h3>
                                <p className="text-gray-600 text-sm">Colors, sizes, branding - everything tailored to you</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl text-center">
                                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">📦</span>
                                </div>
                                <h3 className="font-bold mb-2">Door-to-Door Shipping</h3>
                                <p className="text-gray-600 text-sm">We handle export docs, shipping, and customs support</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl text-center">
                                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">✅</span>
                                </div>
                                <h3 className="font-bold mb-2">Quality Guarantee</h3>
                                <p className="text-gray-600 text-sm">2-year warranty on all manufacturing defects</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl text-center">
                                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">💬</span>
                                </div>
                                <h3 className="font-bold mb-2">English Support</h3>
                                <p className="text-gray-600 text-sm">Dedicated project manager, WhatsApp communication</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Save on Your Store Fixtures?
                        </h2>
                        <p className="text-xl opacity-90 mb-8">
                            Send us your store dimensions and we'll prepare a free quote with 3D design within 48 hours.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050"
                                className="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8"
                            >
                                WhatsApp: +86 138 2210 2050
                            </a>
                            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] text-lg px-8">
                                Email Us
                            </Link>
                        </div>
                        <p className="mt-6 text-white/70 text-sm">
                            Response within 24 hours • No commitment required
                        </p>
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8 text-center">Related Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/resources/blog/top-10-gondola-shelving-manufacturers" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold mb-2">Top 10 Manufacturers</h3>
                            <p className="text-gray-600 text-sm">Compare China vs USA manufacturers.</p>
                        </Link>
                        <Link href="/resources/blog/gondola-shelving-dimensions" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold mb-2">Dimensions Guide</h3>
                            <p className="text-gray-600 text-sm">Standard sizes and specifications.</p>
                        </Link>
                        <Link href="/solutions/pop-culture" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold mb-2">Pop Culture Store Cases</h3>
                            <p className="text-gray-600 text-sm">See our real project examples.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
