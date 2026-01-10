import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "New vs Used Gondola Shelving: Which Should You Buy? | Goodok",
    description: "Compare new vs used gondola shelving: pricing, quality, sources, and inspection tips. Learn when to buy liquidation fixtures and when new is worth it.",
    keywords: [
        "used gondola shelving",
        "new vs used shelving",
        "liquidation store fixtures",
        "secondhand retail shelving",
        "gondola shelving for sale",
        "buy used store fixtures",
        "store liquidation shelving",
        "refurbished gondola shelving",
        "cheap retail shelving",
        "gondola shelving price",
    ],
    openGraph: {
        title: "New vs Used Gondola Shelving: Complete Comparison Guide",
        description: "Compare new vs used gondola shelving pricing, quality, and where to buy. Liquidation tips and inspection checklist included.",
        type: "article",
    },
};

const faqItems = [
    {
        question: "How much does used gondola shelving cost?",
        answer: "Used gondola shelving typically costs $50-$150 per section, compared to $150-$400 new. Liquidation sales from closing retail stores offer the best deals, sometimes as low as $25-$50 per section for bulk purchases."
    },
    {
        question: "Where can I buy used gondola shelving?",
        answer: "The best sources for used gondola shelving are: store liquidation auctions, commercial fixture resellers, Craigslist/Facebook Marketplace, restaurant supply stores, and direct from closing retail stores. Check for 'store closing' or 'going out of business' sales in your area."
    },
    {
        question: "Is used gondola shelving worth buying?",
        answer: "Yes, for most retail stores. Quality steel gondola shelving lasts 20+ years, so a 5-year-old unit has plenty of life left. The main concerns are cosmetic damage and compatibility—used shelving must match your existing system or work standalone."
    },
    {
        question: "What should I check when buying used gondola shelving?",
        answer: "Inspect for: rust or corrosion, bent uprights, damaged shelf brackets, missing parts, wobbly base, and finish scratches. Test the adjustable shelf notches and ensure all accessories are compatible with your needs."
    },
    {
        question: "Can I mix new and used gondola shelving?",
        answer: "Only if they are the same brand and system. Gondola systems from different manufacturers (Madix, Lozier, etc.) have incompatible slot patterns. Mixing brands causes accessories and shelves to not fit properly."
    }
];

export default function NewVsUsedGondolaShelving() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="New vs Used Gondola Shelving: Which Should You Buy?"
                description="Complete comparison of new vs used gondola shelving including pricing, quality factors, where to buy, and inspection tips."
                datePublished="2026-01-10"
                author="Goodok Shopfitting"
                image="/images/blog/new-vs-used-gondola-hero.png"
            />
            <FAQSchema items={faqItems} />
            
            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-50 to-white py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Link href="/resources/blog" className="text-sm text-gray-500 hover:text-gray-700">
                                ← Back to Blog
                            </Link>
                            <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded">
                                Buying Guide
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            New vs Used Gondola Shelving: Which Should You Buy?
                        </h1>

                        <p className="text-xl text-gray-600 mb-6">
                            Should you buy new gondola shelving or save money with used fixtures from 
                            liquidation sales? We break down the real costs, quality differences, 
                            and when each option makes sense.
                        </p>

                        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
                            <Image 
                                src="/images/blog/new-vs-used-gondola-hero.png"
                                alt="Side by side comparison of new vs used gondola shelving in warehouse"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>📅 January 10, 2026</span>
                            <span>📖 12 min read</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="prose prose-lg max-w-none">

                                {/* Key Takeaways */}
                                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4 text-amber-900">⚡ Quick Answer</h2>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• <strong>New shelving:</strong> $150-$400/section — Best for brand consistency, warranty, custom needs</li>
                                        <li>• <strong>Used shelving:</strong> $50-$150/section — Best for tight budgets, standard setups</li>
                                        <li>• <strong>Savings potential:</strong> 50-70% off retail with liquidation purchases</li>
                                        <li>• <strong>Key risk:</strong> Compatibility issues when mixing brands</li>
                                    </ul>
                                </div>

                                {/* TOC */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4">📚 In This Guide</h2>
                                    <ul className="space-y-2 text-gray-600">
                                        <li><a href="#price-comparison" className="hover:text-[var(--accent)]">1. Price Comparison</a></li>
                                        <li><a href="#when-new" className="hover:text-[var(--accent)]">2. When to Buy New</a></li>
                                        <li><a href="#when-used" className="hover:text-[var(--accent)]">3. When to Buy Used</a></li>
                                        <li><a href="#where-to-buy" className="hover:text-[var(--accent)]">4. Where to Find Used Shelving</a></li>
                                        <li><a href="#inspection-checklist" className="hover:text-[var(--accent)]">5. Used Shelving Inspection Checklist</a></li>
                                        <li><a href="#compatibility" className="hover:text-[var(--accent)]">6. Brand Compatibility Guide</a></li>
                                    </ul>
                                </div>

                                {/* Section 1 */}
                                <h2 id="price-comparison">1. Price Comparison: New vs Used</h2>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Component</th>
                                                <th className="px-4 py-3 text-left">New Price</th>
                                                <th className="px-4 py-3 text-left">Used Price</th>
                                                <th className="px-4 py-3 text-left">Savings</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Single-sided Section (4ft)</td>
                                                <td className="px-4 py-3">$150 - $250</td>
                                                <td className="px-4 py-3">$50 - $100</td>
                                                <td className="px-4 py-3 text-green-600">50-60%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Double-sided Island (4ft)</td>
                                                <td className="px-4 py-3">$250 - $400</td>
                                                <td className="px-4 py-3">$80 - $150</td>
                                                <td className="px-4 py-3 text-green-600">60-70%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">End Cap Unit</td>
                                                <td className="px-4 py-3">$200 - $350</td>
                                                <td className="px-4 py-3">$75 - $150</td>
                                                <td className="px-4 py-3 text-green-600">55-65%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Shelf (per piece)</td>
                                                <td className="px-4 py-3">$15 - $30</td>
                                                <td className="px-4 py-3">$5 - $12</td>
                                                <td className="px-4 py-3 text-green-600">50-60%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Peg Hooks (pack of 50)</td>
                                                <td className="px-4 py-3">$40 - $75</td>
                                                <td className="px-4 py-3">$15 - $30</td>
                                                <td className="px-4 py-3 text-green-600">55-65%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r my-6">
                                    <p className="text-blue-800">
                                        <strong>💡 Real Example from Reddit:</strong> &quot;I bought an entire retail 
                                        store&apos;s worth of storage shelving for $250. It was a 26-foot truckload of 
                                        commercial-grade gondola shelving. New, this would have been $3,000+.&quot; — r/Flipping
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <h2 id="when-new">2. When to Buy New Gondola Shelving</h2>

                                <p>New shelving makes sense in these situations:</p>

                                <h3>✅ Brand Image Matters</h3>
                                <p>
                                    High-end boutiques, jewelry stores, and brand-conscious retailers need 
                                    pristine fixtures. Scratches and wear communicate &quot;discount store,&quot; which 
                                    may not match your brand positioning.
                                </p>

                                <h3>✅ Custom Configuration Required</h3>
                                <p>
                                    Need specific heights, colors, or configurations? New orders allow full 
                                    customization. Used shelving is &quot;what you see is what you get.&quot;
                                </p>

                                <h3>✅ Warranty and Support</h3>
                                <p>
                                    New shelving typically comes with 5-10 year warranties. If a component 
                                    fails, you can get exact replacements. Used fixtures have no warranty.
                                </p>

                                <h3>✅ Matching Existing New System</h3>
                                <p>
                                    If you already have new Madix or Lozier shelving, buy new to ensure 
                                    perfect compatibility and color matching.
                                </p>

                                <p>
                                    <Link href="/products/gondola-shelving" className="text-[var(--accent)] hover:underline">
                                        Browse new gondola shelving options →
                                    </Link>
                                </p>

                                {/* Section 3 */}
                                <h2 id="when-used">3. When to Buy Used Gondola Shelving</h2>

                                <p>Used shelving is the smart choice when:</p>

                                <h3>✅ Budget Is Your Priority</h3>
                                <p>
                                    Starting a business with limited capital? Used fixtures free up money 
                                    for inventory, marketing, and operating capital—often more important 
                                    than pristine shelving.
                                </p>

                                <h3>✅ Standard Retail Setup</h3>
                                <p>
                                    Convenience stores, grocery, hardware stores—functional layout matters 
                                    more than aesthetics. Used shelving works perfectly.
                                </p>

                                <h3>✅ Temporary or Pop-Up Stores</h3>
                                <p>
                                    Why invest in new fixtures for a 6-month lease? Used shelving can be 
                                    resold when you&apos;re done.
                                </p>

                                <h3>✅ Warehouse or Back-of-House</h3>
                                <p>
                                    Storage areas don&apos;t need pretty shelving. Heavy-duty used gondolas 
                                    work just as well as new.
                                </p>

                                {/* Section 4 */}
                                <h2 id="where-to-buy">4. Where to Find Used Gondola Shelving</h2>

                                <div className="my-8 relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-md">
                                    <Image 
                                        src="/images/blog/used-shelving-aisle.png"
                                        alt="Used gondola shelving aisle in a retail store environment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3>🏆 Best Sources (Ranked)</h3>

                                <ol>
                                    <li>
                                        <strong>Store Liquidation Auctions</strong> — Best prices (70%+ off), 
                                        but requires quick action and pickup logistics.
                                    </li>
                                    <li>
                                        <strong>Commercial Fixture Resellers</strong> — Curated inventory, 
                                        some refurbishment, moderate prices.
                                    </li>
                                    <li>
                                        <strong>Craigslist / Facebook Marketplace</strong> — Hit or miss, but 
                                        great local deals with no shipping costs.
                                    </li>
                                    <li>
                                        <strong>Restaurant Supply Stores</strong> — Often carry used retail 
                                        fixtures alongside food service equipment.
                                    </li>
                                    <li>
                                        <strong>Direct from Closing Stores</strong> — Ask managers at 
                                        &quot;going out of business&quot; sales if fixtures are for sale.
                                    </li>
                                </ol>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r my-6">
                                    <p className="text-yellow-800">
                                        <strong>⚠️ Pro Tip:</strong> Set up Google Alerts for &quot;store closing 
                                        [your city]&quot; and &quot;retail liquidation [your city]&quot; to catch deals 
                                        before they go public.
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <h2 id="inspection-checklist">5. Used Shelving Inspection Checklist</h2>

                                <div className="my-8 relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-md">
                                    <Image 
                                        src="/images/blog/shelving-inspection-closeup.png"
                                        alt="Close up inspection of gondola shelving bracket and upright slots"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <p>Before buying used gondola shelving, check every item on this list:</p>

                                <div className="bg-gray-100 rounded-xl p-6 my-6 not-prose">
                                    <h3 className="font-bold text-lg mb-4">✅ Inspection Checklist</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">☐</span>
                                            <div>
                                                <strong>Uprights straight?</strong>
                                                <p className="text-sm text-gray-600">Bent uprights cause shelves to sit unevenly</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">☐</span>
                                            <div>
                                                <strong>No rust or corrosion?</strong>
                                                <p className="text-sm text-gray-600">Check base legs especially (moisture damage)</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">☐</span>
                                            <div>
                                                <strong>Shelf brackets intact?</strong>
                                                <p className="text-sm text-gray-600">Brackets should snap firmly into slots</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">☐</span>
                                            <div>
                                                <strong>Stable base?</strong>
                                                <p className="text-sm text-gray-600">Wobbling indicates damaged base or levelers</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">☐</span>
                                            <div>
                                                <strong>All parts included?</strong>
                                                <p className="text-sm text-gray-600">Count shelves, brackets, price tag rails</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">☐</span>
                                            <div>
                                                <strong>Clean condition?</strong>
                                                <p className="text-sm text-gray-600">Sticky residue, stickers, and grime add cleanup time</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-lg">☐</span>
                                            <div>
                                                <strong>Brand identified?</strong>
                                                <p className="text-sm text-gray-600">Check for Madix, Lozier, or other brand stamps</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 6 */}
                                <h2 id="compatibility">6. Brand Compatibility Guide</h2>

                                <p>
                                    <strong>Critical warning:</strong> Gondola shelving from different manufacturers 
                                    is NOT interchangeable. Slot patterns, shelf dimensions, and accessories 
                                    are brand-specific.
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Brand</th>
                                                <th className="px-4 py-3 text-left">Slot Pattern</th>
                                                <th className="px-4 py-3 text-left">Compatible With</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Madix</td>
                                                <td className="px-4 py-3">1&quot; on center</td>
                                                <td className="px-4 py-3">Madix only</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Lozier</td>
                                                <td className="px-4 py-3">1&quot; on center</td>
                                                <td className="px-4 py-3">Lozier only</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Streater</td>
                                                <td className="px-4 py-3">1&quot; on center</td>
                                                <td className="px-4 py-3">Streater only</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Generic Import</td>
                                                <td className="px-4 py-3">Varies (25mm common)</td>
                                                <td className="px-4 py-3">Same manufacturer only</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r my-6">
                                    <p className="text-red-800">
                                        <strong>⚠️ Warning:</strong> Even if slot spacing seems similar, bracket 
                                        designs differ. A Madix shelf will NOT properly fit Lozier uprights. 
                                        Always test fit before buying in bulk.
                                    </p>
                                </div>

                                <h2>The Bottom Line</h2>
                                <p>
                                    For most new store owners, used gondola shelving offers the best value. 
                                    The savings (50-70% off) can fund other critical startup needs. Just be 
                                    diligent about inspection and brand compatibility.
                                </p>
                                <p>
                                    If brand image, warranty, or customization matter more than upfront savings, 
                                    invest in new. Either way,{" "}
                                    <Link href="/free-3d-design" className="text-[var(--accent)] hover:underline">
                                        get a free layout consultation
                                    </Link>{" "}
                                    to plan your store fixtures efficiently.
                                </p>

                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-white">
                                    <h3 className="text-xl font-bold mb-3">
                                        🆕 Need New Shelving?
                                    </h3>
                                    <p className="text-amber-100 mb-4">
                                        Get factory-direct pricing with free 3D store layout.
                                    </p>
                                    <Link
                                        href="/free-3d-design"
                                        className="block w-full bg-white text-amber-700 font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                                    >
                                        Get Free Quote
                                    </Link>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-bold mb-4">📚 Related Articles</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="/resources/blog/gondola-shelving-buying-guide" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Complete Gondola Buying Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/retail-store-startup-cost" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Retail Store Startup Costs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/retail-shelving-cost-guide" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Retail Shelving Cost Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/gondola-shelving" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                View Gondola Products
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-[#f8f9fa] rounded-xl p-6">
                                    <h3 className="font-bold mb-3">💬 Questions?</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Not sure whether to buy new or used? Chat with our team.
                                    </p>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20advice%20on%20gondola%20shelving"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-whatsapp w-full"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                                <p className="text-gray-600">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-600">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        Ready to Outfit Your Store?
                    </h2>
                    <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
                        Whether you choose new or used, we can help you plan the perfect 
                        fixture layout. Get a free consultation and 3D design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn btn-primary bg-white text-amber-700 hover:bg-gray-100">
                            Get Free Quote
                        </Link>
                        <Link href="/products/gondola-shelving" className="btn border-2 border-white text-white hover:bg-white/10">
                            View Gondola Shelving
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
