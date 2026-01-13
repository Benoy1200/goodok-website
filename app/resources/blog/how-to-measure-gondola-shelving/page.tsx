import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "How to Measure Gondola Shelving: Step-by-Step Guide with Diagrams",
    description: "Learn how to accurately measure gondola shelving for your store. Includes height, width, depth measurements, aisle spacing calculations, and free measurement checklist.",
    keywords: [
        "how to measure gondola shelving",
        "gondola shelving measurements",
        "measure retail shelving",
        "gondola sizing guide",
        "store shelving dimensions",
        "retail fixture measurements",
    ],
    openGraph: {
        title: "How to Measure Gondola Shelving: Complete Step-by-Step Guide",
        description: "Accurate gondola measurements made easy. Free checklist and diagrams included.",
        type: "article",
    },
};

const faqItems = [
    {
        question: "What tools do I need to measure gondola shelving?",
        answer: "You need a tape measure (25 ft recommended), a notepad or phone for recording, and a level to check floor evenness. For large stores, a laser measuring device speeds up the process significantly."
    },
    {
        question: "How do I measure gondola height accurately?",
        answer: "Measure from the floor to the top of the upright post. Standard heights are 48\", 54\", 60\", 72\", and 84\". Don't include casters or leveling feet in your measurement - measure the actual unit height."
    },
    {
        question: "What is the correct way to measure gondola shelf depth?",
        answer: "Measure from the back of the shelf (where it attaches to the upright) to the front lip. Base shelves are typically deeper (16\"-24\") than upper shelves (10\"-16\"). Measure each shelf level separately if depths vary."
    },
    {
        question: "How much aisle space do I need between gondolas?",
        answer: "Minimum 36\" for ADA compliance, but 42\"-48\" is recommended for comfortable shopping. For high-traffic areas or cart-heavy stores, use 48\"-60\". Measure the clear distance between facing products, not just the shelf edges."
    },
    {
        question: "Should I measure existing gondolas or the space for new ones?",
        answer: "Both! When replacing, measure existing units for matching dimensions. When planning new layouts, measure available floor space, ceiling height (leave 12\"-18\" clearance), and any obstacles like columns or HVAC units."
    }
];

export default function HowToMeasureGondolaShelving() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="How to Measure Gondola Shelving: Step-by-Step Guide"
                description="Complete guide to measuring gondola shelving accurately. Includes diagrams, common mistakes to avoid, and a free measurement checklist."
                datePublished="2026-01-13"
                author="Goodok Shopfitting"
            />
            <FAQSchema items={faqItems} />
            
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#f8f9fa] to-white py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Link href="/resources/blog" className="text-sm text-gray-500 hover:text-gray-700">
                                ← Back to Blog
                            </Link>
                            <span className="text-xs font-medium text-[var(--accent)] bg-orange-50 px-2 py-1 rounded">
                                How-To Guide
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            How to Measure Gondola Shelving: Step-by-Step Guide
                        </h1>

                        <p className="text-xl text-gray-600 mb-6">
                            Get accurate measurements for ordering new gondola shelving or replacing existing units. 
                            Includes diagrams, calculations, and a free measurement checklist.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>📅 January 13, 2026</span>
                            <span>📖 8 min read</span>
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
                                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4 text-blue-900">📌 Key Takeaways</h2>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Measure <strong>height, width, and depth</strong> separately for accurate ordering</li>
                                        <li>• Always include <strong>aisle spacing</strong> in your floor plan calculations</li>
                                        <li>• Leave <strong>12&quot;-18&quot; ceiling clearance</strong> above tallest units</li>
                                        <li>• Use our <strong>free measurement checklist</strong> to avoid common mistakes</li>
                                        <li>• Link to our <Link href="/resources/blog/gondola-shelving-dimensions" className="text-blue-600 hover:underline">complete dimensions guide</Link> for standard sizes</li>
                                    </ul>
                                </div>

                                {/* TOC */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4">📚 In This Guide</h2>
                                    <ul className="space-y-2 text-gray-600">
                                        <li><a href="#tools" className="hover:text-[var(--accent)]">1. Tools You&apos;ll Need</a></li>
                                        <li><a href="#height" className="hover:text-[var(--accent)]">2. Measuring Height</a></li>
                                        <li><a href="#width" className="hover:text-[var(--accent)]">3. Measuring Width</a></li>
                                        <li><a href="#depth" className="hover:text-[var(--accent)]">4. Measuring Depth</a></li>
                                        <li><a href="#aisle" className="hover:text-[var(--accent)]">5. Calculating Aisle Space</a></li>
                                        <li><a href="#floor-plan" className="hover:text-[var(--accent)]">6. Creating a Floor Plan</a></li>
                                        <li><a href="#mistakes" className="hover:text-[var(--accent)]">7. Common Mistakes to Avoid</a></li>
                                        <li><a href="#checklist" className="hover:text-[var(--accent)]">8. Free Measurement Checklist</a></li>
                                    </ul>
                                </div>

                                <p>
                                    Accurate measurements are crucial when ordering gondola shelving. Wrong dimensions 
                                    mean wasted money, delayed openings, and frustrated customers. This guide walks 
                                    you through measuring like a pro.
                                </p>

                                {/* Section 1 */}
                                <h2 id="tools">1. Tools You&apos;ll Need</h2>
                                
                                <p>Before you start, gather these essential tools:</p>
                                
                                <ul>
                                    <li><strong>Tape Measure (25 ft):</strong> For measuring units and floor space</li>
                                    <li><strong>Laser Measure (optional):</strong> Speeds up large store measurements</li>
                                    <li><strong>Level:</strong> Check floor evenness - uneven floors affect unit stability</li>
                                    <li><strong>Notepad/Phone:</strong> Record measurements immediately</li>
                                    <li><strong>Camera:</strong> Photo documentation helps when ordering</li>
                                </ul>

                                {/* Section 2 */}
                                <h2 id="height">2. Measuring Gondola Height</h2>
                                
                                <p>
                                    Height is measured from the <strong>floor to the top of the upright post</strong>. 
                                    Do not include leveling feet or casters in your measurement.
                                </p>

                                <div className="my-8 not-prose">
                                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                        <Image 
                                            src="/images/blog/gondola-height-comparison.png"
                                            alt="Gondola Shelving Height Comparison - Standard heights from 48 inch to 84 inch"
                                            fill
                                            className="object-contain bg-white"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500 text-center mt-2">
                                        Standard gondola heights with human scale reference
                                    </p>
                                </div>

                                <h3>Standard Heights</h3>
                                <ul>
                                    <li><strong>48&quot; (4 ft):</strong> Checkout areas, promotional islands</li>
                                    <li><strong>54&quot; (4.5 ft):</strong> Convenience stores, boutiques</li>
                                    <li><strong>60&quot; (5 ft):</strong> General retail, pharmacies</li>
                                    <li><strong>72&quot; (6 ft):</strong> Supermarkets (most common)</li>
                                    <li><strong>84&quot; (7 ft):</strong> Warehouse stores</li>
                                </ul>

                                <p>
                                    For complete height specifications, see our{" "}
                                    <Link href="/resources/blog/gondola-shelving-dimensions" className="text-[var(--accent)] hover:underline">
                                        Gondola Shelving Dimensions Guide
                                    </Link>.
                                </p>

                                {/* Section 3 */}
                                <h2 id="width">3. Measuring Gondola Width</h2>
                                
                                <p>
                                    Width refers to the <strong>length of each section</strong> (the horizontal span 
                                    of one shelf bay). Measure from the center of one upright to the center of the next.
                                </p>

                                <h3>Standard Widths</h3>
                                <ul>
                                    <li><strong>24&quot; (2 ft):</strong> Narrow spaces, specialty displays</li>
                                    <li><strong>36&quot; (3 ft):</strong> Most versatile, common in retail</li>
                                    <li><strong>48&quot; (4 ft):</strong> Supermarkets, reduces upright costs by 25%</li>
                                </ul>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r my-6">
                                    <p className="text-yellow-800">
                                        <strong>💡 Pro Tip:</strong> Using 48&quot; sections instead of 36&quot; reduces 
                                        the number of uprights needed by approximately 25%, saving on material costs.
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <h2 id="depth">4. Measuring Gondola Depth</h2>
                                
                                <p>
                                    Depth is measured from the <strong>back of the shelf to the front lip</strong>. 
                                    Base shelves are typically deeper than upper shelves.
                                </p>

                                <div className="my-8 not-prose">
                                    <div className="relative w-full aspect-[16/12] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                        <Image 
                                            src="/images/blog/gondola-depth-options.png"
                                            alt="Gondola Shelving Depth Options - 16 inch to 24 inch with product examples"
                                            fill
                                            className="object-contain bg-white"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500 text-center mt-2">
                                        Recommended shelf depths by product type
                                    </p>
                                </div>

                                <h3>Depth by Product Type</h3>
                                <ul>
                                    <li><strong>16&quot;:</strong> Cosmetics, small items, jewelry</li>
                                    <li><strong>19&quot;:</strong> General retail, convenience stores</li>
                                    <li><strong>22&quot;:</strong> Grocery, supermarket products</li>
                                    <li><strong>24&quot;:</strong> Bulk items, warehouse stores</li>
                                </ul>

                                {/* Section 5 */}
                                <h2 id="aisle">5. Calculating Aisle Space</h2>
                                
                                <p>
                                    Aisle width is the <strong>clear distance between facing products</strong> on 
                                    opposite gondolas. This affects customer flow and ADA compliance.
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Store Type</th>
                                                <th className="px-4 py-3 text-left">Minimum Aisle</th>
                                                <th className="px-4 py-3 text-left">Recommended</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Convenience Store</td>
                                                <td className="px-4 py-3">36&quot;</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">42&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Supermarket</td>
                                                <td className="px-4 py-3">42&quot;</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">48&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Warehouse/Club</td>
                                                <td className="px-4 py-3">48&quot;</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">60&quot;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="bg-[#f8f9fa] border-l-4 border-[#ff6b35] p-4 rounded-r">
                                    📐 <strong>Formula:</strong> Floor width - (Gondola depth × 2) = Aisle width<br/>
                                    Example: 120&quot; floor - (22&quot; × 2) = 76&quot; aisle width
                                </p>

                                {/* Section 6 */}
                                <h2 id="floor-plan">6. Creating a Floor Plan</h2>
                                
                                <p>
                                    A floor plan helps visualize your layout before ordering. Include:
                                </p>

                                <ul>
                                    <li>Total floor dimensions (length × width)</li>
                                    <li>Column and obstacle locations</li>
                                    <li>Entry/exit points</li>
                                    <li>Checkout area space</li>
                                    <li>Back room access</li>
                                </ul>

                                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r my-6">
                                    <p className="text-green-800">
                                        <strong>🎁 Free Service:</strong> Send us your floor plan measurements and 
                                        we&apos;ll create a <Link href="/free-3d-design" className="text-green-700 underline font-medium">free 3D store layout</Link> showing 
                                        optimal gondola placement!
                                    </p>
                                </div>

                                {/* Section 7 */}
                                <h2 id="mistakes">7. Common Mistakes to Avoid</h2>

                                <h3>❌ Measuring with Products on Shelves</h3>
                                <p>
                                    Products add perceived depth. Always measure the empty shelf for accurate dimensions.
                                </p>

                                <h3>❌ Ignoring Floor Unevenness</h3>
                                <p>
                                    Use a level to check floor flatness. Uneven floors cause wobbly units and require 
                                    leveling feet adjustments.
                                </p>

                                <h3>❌ Forgetting Ceiling Height</h3>
                                <p>
                                    Leave 12&quot;-18&quot; clearance above your tallest unit. Account for sprinklers, 
                                    lights, and HVAC fixtures.
                                </p>

                                <h3>❌ Not Accounting for Double-Sided Units</h3>
                                <p>
                                    Double-sided (island) gondolas have combined depths of 32&quot;-48&quot;. A 22&quot; 
                                    depth on each side = 44&quot; total width.
                                </p>

                                {/* Section 8 */}
                                <h2 id="checklist">8. Free Measurement Checklist</h2>

                                <p>Use this checklist when measuring your space:</p>

                                <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
                                    <h3 className="font-bold mb-4">📋 Gondola Measurement Checklist</h3>
                                    <div className="space-y-2 text-gray-700">
                                        <p>☐ Floor dimensions (length × width)</p>
                                        <p>☐ Ceiling height at all points</p>
                                        <p>☐ Existing unit heights (if replacing)</p>
                                        <p>☐ Existing unit widths (section count)</p>
                                        <p>☐ Existing unit depths (base and upper)</p>
                                        <p>☐ Current aisle widths</p>
                                        <p>☐ Column/obstacle locations</p>
                                        <p>☐ Electrical outlet positions</p>
                                        <p>☐ Entry/exit door widths</p>
                                        <p>☐ Photos of current layout</p>
                                    </div>
                                </div>

                                <h2>Ready to Order?</h2>
                                <p>
                                    Once you have your measurements, explore our{" "}
                                    <Link href="/products/gondola-shelving" className="text-[var(--accent)] hover:underline">
                                        gondola shelving collection
                                    </Link>{" "}
                                    or contact us for a custom quote. We offer factory-direct pricing 
                                    and free 3D layout design with every order.
                                </p>

                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-gradient-to-br from-[#004499] to-[#0066cc] rounded-xl p-6 text-white">
                                    <h3 className="text-xl font-bold mb-3">
                                        Free Store Layout
                                    </h3>
                                    <p className="text-blue-100 mb-4">
                                        Send us your measurements and get a 3D visualization!
                                    </p>
                                    <Link
                                        href="/free-3d-design"
                                        className="block w-full bg-white text-[var(--primary)] font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                                    >
                                        Get Free Design
                                    </Link>
                                </div>

                                <div className="bg-[#f8f9fa] rounded-xl p-6">
                                    <h3 className="font-bold mb-3">💬 Need Help Measuring?</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Our team can guide you through the process.
                                    </p>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20help%20measuring%20gondola%20shelving"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-whatsapp w-full"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-bold mb-4">📚 Related Guides</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="/resources/blog/gondola-shelving-dimensions" className="text-gray-600 hover:text-[var(--accent)] text-sm font-medium">
                                                → Gondola Shelving Dimensions Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/gondola-shelving-buying-guide" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Gondola Shelving Buying Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/gondola-vs-wall-shelving" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Gondola vs Wall Shelving
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/gondola-shelving" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                View Gondola Products
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-white border-t">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Order Gondola Shelving?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Factory-direct pricing with free 3D store layout included. Get your measurements ready!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn btn-primary">
                            Get Free Quote
                        </Link>
                        <Link href="/products/gondola-shelving" className="btn btn-secondary">
                            View Gondola Products
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
