import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Card Shop Shelving Ideas: Display Solutions for LGS Owners | Goodok",
    description: "Complete LGS shelving guide for trading card game stores. Display ideas for MTG, Pokemon, and Yu-Gi-Oh. Budget-friendly setup tips for new game shop owners.",
    keywords: [
        "card shop shelving",
        "LGS display ideas",
        "game store fixtures",
        "MTG display case",
        "trading card display",
        "Pokemon card store setup",
        "game shop layout",
        "local game store shelving",
        "TCG store design",
        "collectibles store display",
    ],
    openGraph: {
        title: "Card Shop Shelving Ideas: Complete LGS Display Guide",
        description: "Display solutions for trading card game stores. Layout ideas, budget tips, and fixture recommendations for LGS owners.",
        type: "article",
    },
};

const faqItems = [
    {
        question: "How much does it cost to set up shelving for a card shop?",
        answer: "A basic card shop shelving setup costs $2,000-$5,000 for a 500-800 sq ft space. This includes gondola shelving for singles/packs, display cases for high-value cards, and slatwall for accessories. Budget setups using used fixtures can reduce this by 50-70%."
    },
    {
        question: "What type of display case is best for valuable trading cards?",
        answer: "Glass display cases with locking doors are essential for cards over $50. Choose cases with LED lighting to showcase foils and holos. Avoid UV exposure—use UV-filtering glass or keep cases away from windows."
    },
    {
        question: "How should I organize card singles for easy browsing?",
        answer: "Organize by game first (MTG, Pokemon, Yu-Gi-Oh), then by set or price tier. Use bins with dividers on gondola shelves for bulk singles. Keep chase cards and high-value items in locked display cases at eye level."
    },
    {
        question: "Do I need different shelving for sealed products vs singles?",
        answer: "Yes. Sealed booster boxes and packs work well on standard gondola shelving with security devices. Singles require card storage bins or display cases. Consider pegboard or slatwall for blister-packed products."
    },
    {
        question: "What is the best layout for a small LGS with play space?",
        answer: "Use perimeter wall shelving to maximize floor space for play tables. Position the checkout counter near the entrance with impulse-buy accessories nearby. Keep high-value display cases within sight of the register for security."
    }
];

export default function CardShopShelvingIdeas() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="Card Shop Shelving Ideas: Complete Display Guide for LGS Owners"
                description="Display solutions and shelving ideas for trading card game stores. Covers MTG, Pokemon, Yu-Gi-Oh layouts with budget-friendly setup tips."
                datePublished="2026-01-10"
                author="Goodok Shopfitting"
                image="/images/blog/card-shop-hero.png"
            />
            <FAQSchema items={faqItems} />
            
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Link href="/resources/blog" className="text-sm text-gray-400 hover:text-gray-200">
                                ← Back to Blog
                            </Link>
                            <span className="text-xs font-medium text-purple-300 bg-purple-900/50 px-2 py-1 rounded">
                                Niche Guide
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Card Shop Shelving Ideas: The Complete LGS Display Guide
                        </h1>

                        <p className="text-xl text-gray-300 mb-6">
                            Opening a local game store? This guide covers everything you need to know about 
                            shelving and displays for trading card games—from budget setups to premium showcases.
                        </p>

                        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
                            <Image 
                                src="/images/blog/card-shop-hero.png"
                                alt="Cozy local game store interior with display cases and play tables"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <span>📅 January 10, 2026</span>
                            <span>📖 14 min read</span>
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
                                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4 text-purple-900">🎴 Key Takeaways</h2>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Basic LGS shelving setup: <strong>$2,000-$5,000</strong> for 500-800 sq ft</li>
                                        <li>• <strong>Glass display cases</strong> are essential for high-value cards ($50+)</li>
                                        <li>• Use <strong>gondola shelving</strong> for sealed products and bulk singles</li>
                                        <li>• <strong>Slatwall panels</strong> work best for accessories and impulse items</li>
                                        <li>• Keep <strong>play space</strong> separate but visible from the retail area</li>
                                    </ul>
                                </div>

                                {/* TOC */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4">📚 What&apos;s In This Guide</h2>
                                    <ul className="space-y-2 text-gray-600">
                                        <li><a href="#understanding-lgs" className="hover:text-[var(--accent)]">1. Understanding LGS Display Needs</a></li>
                                        <li><a href="#shelving-types" className="hover:text-[var(--accent)]">2. Shelving Types for Card Shops</a></li>
                                        <li><a href="#display-cases" className="hover:text-[var(--accent)]">3. Display Cases for Valuable Cards</a></li>
                                        <li><a href="#layout-ideas" className="hover:text-[var(--accent)]">4. LGS Layout Ideas</a></li>
                                        <li><a href="#budget-setup" className="hover:text-[var(--accent)]">5. Budget-Friendly Setup Options</a></li>
                                        <li><a href="#organization" className="hover:text-[var(--accent)]">6. Organizing Your Inventory</a></li>
                                        <li><a href="#security" className="hover:text-[var(--accent)]">7. Security Considerations</a></li>
                                    </ul>
                                </div>

                                {/* Section 1 */}
                                <h2 id="understanding-lgs">1. Understanding LGS Display Needs</h2>
                                
                                <p>
                                    Local game stores (LGS) have unique display requirements compared to typical retail. 
                                    You&apos;re not just selling products—you&apos;re creating a community hub where players 
                                    browse, trade, and compete.
                                </p>

                                <h3>What Makes Card Shop Displays Different</h3>
                                <ul>
                                    <li><strong>High-value inventory:</strong> Single cards can be worth $10 to $10,000+</li>
                                    <li><strong>Browsing behavior:</strong> Players spend 30-60 minutes looking through binders and bins</li>
                                    <li><strong>Mixed inventory:</strong> Sealed products, singles, accessories all require different displays</li>
                                    <li><strong>Play space integration:</strong> Retail and gaming areas need to coexist</li>
                                    <li><strong>Community atmosphere:</strong> Open, inviting layouts that encourage lingering</li>
                                </ul>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r my-6">
                                    <p className="text-blue-800">
                                        <strong>💡 From Reddit:</strong> &quot;The biggest mistake new LGS owners make is treating 
                                        it like a regular retail store. Your regulars will spend hours here—make it 
                                        comfortable, but keep the expensive stuff secure.&quot; — r/mtgfinance
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <h2 id="shelving-types">2. Shelving Types for Card Shops</h2>

                                <h3>Gondola Shelving</h3>
                                <p>
                                    Standard gondola shelving is the workhorse of card shop displays. Use it for:
                                </p>
                                <ul>
                                    <li>Sealed booster boxes and packs</li>
                                    <li>Bulk singles in storage bins</li>
                                    <li>Board games and RPG books</li>
                                    <li>Sleeves, deck boxes, and common accessories</li>
                                </ul>
                                <p>
                                    <strong>Recommended:</strong> 54&quot;-60&quot; height for visibility across the store. 
                                    Double-sided islands work well for creating product aisles.
                                </p>
                                <p>
                                    <Link href="/products/gondola-shelving" className="text-[var(--accent)] hover:underline">
                                        Explore gondola shelving options →
                                    </Link>
                                </p>

                                <h3>Slatwall Panels</h3>

                                <div className="my-8 relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-md">
                                    <Image 
                                        src="/images/blog/card-shop-slatwall.png"
                                        alt="Slatwall display with trading card accessories and playmats"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p>
                                    Perfect for perimeter walls and high-margin accessories:
                                </p>
                                <ul>
                                    <li>Blister-packed products (dice, tokens, playmats)</li>
                                    <li>Hanging merchandise displays</li>
                                    <li>Flexible configuration for seasonal items</li>
                                </ul>
                                <p>
                                    <Link href="/products/wall-shelving" className="text-[var(--accent)] hover:underline">
                                        View wall shelving solutions →
                                    </Link>
                                </p>

                                <h3>Wire Grid Displays</h3>
                                <p>
                                    Budget-friendly option for new stores:
                                </p>
                                <ul>
                                    <li>Lower cost than gondola ($50-$100 per 4x4 panel)</li>
                                    <li>Highly customizable with hooks and shelves</li>
                                    <li>Easy to reconfigure as inventory changes</li>
                                </ul>

                                {/* Section 3 */}
                                <h2 id="display-cases">3. Display Cases for Valuable Cards</h2>

                                <p>
                                    Every successful card shop needs secure display cases for high-value inventory. 
                                    These are non-negotiable.
                                </p>

                                <h3>Glass Display Cases</h3>

                                <div className="my-8 relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-md">
                                    <Image 
                                        src="/images/blog/card-display-case-detail.png"
                                        alt="Premium glass display case with LED lighting for high-value trading cards"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Type</th>
                                                <th className="px-4 py-3 text-left">Price Range</th>
                                                <th className="px-4 py-3 text-left">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Countertop Cases</td>
                                                <td className="px-4 py-3">$200-$500</td>
                                                <td className="px-4 py-3">Register area, chase cards</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Tower Display Cases</td>
                                                <td className="px-4 py-3">$400-$800</td>
                                                <td className="px-4 py-3">Premium cards, 360° viewing</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Wall-Mounted Cases</td>
                                                <td className="px-4 py-3">$300-$600</td>
                                                <td className="px-4 py-3">Graded slabs, signed cards</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Full-Vision Cases</td>
                                                <td className="px-4 py-3">$500-$1,200</td>
                                                <td className="px-4 py-3">Complete collection display</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <Link href="/products/display-cases" className="text-[var(--accent)] hover:underline">
                                        Browse display case options →
                                    </Link>
                                </p>

                                <h3>Display Case Must-Haves</h3>
                                <ul>
                                    <li><strong>Locking doors:</strong> Essential for cards over $50</li>
                                    <li><strong>LED lighting:</strong> Makes foil cards pop</li>
                                    <li><strong>UV protection:</strong> Prevents fading on displayed cards</li>
                                    <li><strong>Adjustable shelves:</strong> Accommodate different display items</li>
                                </ul>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r my-6">
                                    <p className="text-yellow-800">
                                        <strong>⚠️ Pro Tip:</strong> Position your most valuable display case 
                                        within direct line of sight of the register. This deters theft while 
                                        still showcasing your best inventory.
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <h2 id="layout-ideas">4. LGS Layout Ideas</h2>

                                <h3>Small Store Layout (500-800 sq ft)</h3>
                                <p>
                                    In smaller spaces, every square foot counts. Recommended layout:
                                </p>
                                <ul>
                                    <li><strong>Entrance area:</strong> Checkout counter + glass case with chase cards</li>
                                    <li><strong>Perimeter walls:</strong> Slatwall with accessories, wall shelving for games</li>
                                    <li><strong>Center floor:</strong> 1-2 gondola islands for sealed product</li>
                                    <li><strong>Back area:</strong> 4-6 play tables, singles browsing station</li>
                                </ul>

                                <h3>Medium Store Layout (800-1,500 sq ft)</h3>
                                <ul>
                                    <li><strong>Front zone:</strong> Retail displays, impulse buys</li>
                                    <li><strong>Middle zone:</strong> Multiple gondola aisles by game type</li>
                                    <li><strong>Side zone:</strong> Singles cases with browsing seating</li>
                                    <li><strong>Back zone:</strong> Dedicated play space (8-12 tables)</li>
                                </ul>

                                <h3>Key Layout Principles</h3>
                                <ul>
                                    <li><strong>Keep sightlines open:</strong> Use shorter shelving (54&quot;-60&quot;) to maintain visibility</li>
                                    <li><strong>Create zones:</strong> Separate retail browsing from play space</li>
                                    <li><strong>Position checkout strategically:</strong> Near entrance, with view of high-value items</li>
                                    <li><strong>Leave room for events:</strong> Flexible furniture for tournament days</li>
                                </ul>

                                {/* Section 5 */}
                                <h2 id="budget-setup">5. Budget-Friendly Setup Options</h2>

                                <p>
                                    Starting a card shop on a tight budget? Here are ways to save:
                                </p>

                                <h3>Option 1: Used Fixtures ($1,000-$2,000)</h3>
                                <ul>
                                    <li>Source gondola shelving from store liquidations</li>
                                    <li>Check Craigslist/Facebook for used display cases</li>
                                    <li>Buy wire grid panels from restaurant supply stores</li>
                                </ul>
                                <p>
                                    For more on this approach, see our{" "}
                                    <Link href="/resources/blog/new-vs-used-gondola-shelving" className="text-[var(--accent)] hover:underline">
                                        New vs Used Shelving Guide
                                    </Link>.
                                </p>

                                <h3>Option 2: Phased Investment</h3>
                                <ul>
                                    <li><strong>Phase 1:</strong> Essential display cases + basic shelving ($2,000)</li>
                                    <li><strong>Phase 2:</strong> Add gondola islands as inventory grows ($1,500)</li>
                                    <li><strong>Phase 3:</strong> Premium display upgrades from profits ($2,000)</li>
                                </ul>

                                <h3>Option 3: DIY Elements</h3>
                                <ul>
                                    <li>Build your own card storage bins from wood or acrylic</li>
                                    <li>Repurpose IKEA KALLAX shelves for singles organization</li>
                                    <li>Use pegboard (cheaper than slatwall) for accessories</li>
                                </ul>

                                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r my-6">
                                    <p className="text-green-800">
                                        <strong>💰 Budget Breakdown Example:</strong><br/>
                                        A Reddit user opened their LGS for under $5,000 in fixtures:<br/>
                                        • Used gondola (8 sections): $400<br/>
                                        • New glass cases (2): $800<br/>
                                        • Slatwall panels: $300<br/>
                                        • Play tables (used): $200<br/>
                                        • Card bins &amp; organization: $300<br/>
                                        • Chairs &amp; misc: $500<br/>
                                        <strong>Total: ~$2,500</strong>
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <h2 id="organization">6. Organizing Your Inventory</h2>

                                <h3>Singles Organization</h3>
                                <ul>
                                    <li><strong>By game:</strong> MTG, Pokemon, Yu-Gi-Oh, One Piece sections</li>
                                    <li><strong>By price tier:</strong> Bulk ($0.10-$1), Mid ($1-$10), Premium ($10+)</li>
                                    <li><strong>By set:</strong> Within each game, organize by release</li>
                                </ul>

                                <h3>Sealed Product Organization</h3>
                                <ul>
                                    <li>Current releases at eye level</li>
                                    <li>Older sets on lower/higher shelves</li>
                                    <li>Pre-order displays with release dates</li>
                                </ul>

                                <h3>Accessories Organization</h3>
                                <ul>
                                    <li>Group by game (MTG accessories together)</li>
                                    <li>Price-tiered displays (budget vs premium sleeves)</li>
                                    <li>Impulse items near checkout</li>
                                </ul>

                                {/* Section 7 */}
                                <h2 id="security">7. Security Considerations</h2>

                                <p>
                                    Card shops are unfortunately targets for theft. Design your layout with security in mind:
                                </p>

                                <ul>
                                    <li><strong>Clear sightlines:</strong> Staff should see all areas from the register</li>
                                    <li><strong>Locked cases:</strong> All cards over $20-50 value</li>
                                    <li><strong>Anti-theft devices:</strong> Spider wraps on sealed boxes</li>
                                    <li><strong>Camera placement:</strong> Cover entry, high-value areas, and blind spots</li>
                                    <li><strong>Limited access:</strong> Keep singles bins close to staff</li>
                                </ul>

                                <h2>Ready to Set Up Your Card Shop?</h2>
                                <p>
                                    Whether you&apos;re opening your first LGS or upgrading an existing store, 
                                    the right fixtures make all the difference. Get a free consultation to 
                                    discuss your specific needs.
                                </p>

                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 text-white">
                                    <h3 className="text-xl font-bold mb-3">
                                        🎴 Opening an LGS?
                                    </h3>
                                    <p className="text-purple-100 mb-4">
                                        Get a free 3D store layout for your card shop!
                                    </p>
                                    <Link
                                        href="/free-3d-design"
                                        className="block w-full bg-white text-purple-700 font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                                    >
                                        Get Free Design
                                    </Link>
                                </div>

                                <div className="bg-[#f8f9fa] rounded-xl p-6">
                                    <h3 className="font-bold mb-3">💬 Questions?</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Chat with our team about card shop displays.
                                    </p>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20help%20with%20card%20shop%20shelving"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-whatsapp w-full"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-bold mb-4">📚 Related Articles</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="/resources/blog/retail-store-startup-cost" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Retail Store Startup Costs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/new-vs-used-gondola-shelving" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                New vs Used Shelving
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/gondola-shelving-buying-guide" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Complete Gondola Buying Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/display-cases" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                View Display Cases
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 rounded-xl p-6">
                                    <h3 className="font-bold mb-3">🛒 Popular for LGS</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="/products/display-cases" className="text-purple-700 hover:underline text-sm font-medium">
                                                Glass Display Cases →
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/gondola-shelving" className="text-purple-700 hover:underline text-sm font-medium">
                                                Gondola Shelving →
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/checkout-counters" className="text-purple-700 hover:underline text-sm font-medium">
                                                Checkout Counters →
                                            </Link>
                                        </li>
                                    </ul>
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
            <section className="py-16 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        Ready to Create Your Dream LGS?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        From display cases to gondola shelving, we&apos;ll help you set up 
                        the perfect card shop. Get a free consultation and 3D layout.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn btn-primary">
                            Get Free Quote
                        </Link>
                        <Link href="/products/display-cases" className="btn bg-white text-gray-900 hover:bg-gray-100">
                            View Display Cases
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
