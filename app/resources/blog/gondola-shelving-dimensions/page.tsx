import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Gondola Shelving Dimensions & Sizes: 48\" to 84\" Complete Guide",
    description:
        "Standard gondola shelving dimensions: Heights (48\", 54\", 60\", 72\", 84\"), Widths (24\", 36\", 48\"), Depths (16\"-25\"). Find your perfect size with our complete guide.",
    keywords: [
        "gondola shelving dimensions",
        "gondola shelf sizes",
        "retail shelving measurements",
        "gondola unit specifications",
        "store shelving dimensions",
        "standard gondola sizes",
        "gondola shelving height",
        "gondola shelving width",
        "gondola shelving weight capacity",
    ],
    openGraph: {
        title: "Gondola Shelving Dimensions & Sizes: Complete Guide",
        description:
            "Standard gondola shelving dimensions: Heights (48\"-84\"), Widths (24\"-48\"), Depths (16\"-25\"). Find the right size for your store.",
        type: "article",
    },
};

const faqItems = [
    {
        question: "What are standard gondola shelving dimensions?",
        answer: "Standard gondola shelving dimensions are: Heights - 48\", 54\", 60\", 72\", 84\"; Widths - 24\", 36\", 48\"; Base Depths - 16\", 19\", 22\", 25\"; Shelf Depths - 8\", 10\", 12\", 16\", 19\", 22\"."
    },
    {
        question: "What is the most common gondola shelf height?",
        answer: "72\" (6 ft) is the most popular gondola height for supermarkets and general retail. It provides maximum display capacity with 5-6 shelves. For small stores, 54\"-60\" is recommended to maintain sightlines and accessibility."
    },
    {
        question: "What is the standard gondola shelf width?",
        answer: "36\" (3 ft) and 48\" (4 ft) are the two standard widths. 36\" is versatile for most applications, while 48\" requires fewer uprights (25% cost savings) and suits high-volume categories."
    },
    {
        question: "How do I choose the right gondola size?",
        answer: "Consider: 1) Your products - small items need 8-10\" shelf depth, large items need 19-22\"; 2) Your space - leave 42-48\" between gondolas for aisles; 3) Ceiling height - leave 12-18\" above tallest unit; 4) Store type - convenience stores use 54\"-60\", supermarkets use 72\"."
    },
    {
        question: "How much space do you need between gondola shelves?",
        answer: "Vertical spacing between shelves typically ranges from 4\" to 8\" depending on product heights. Most systems offer 1\" increment adjustability. Standard grocery uses 6\" for upper shelves and 8\"-10\" for base shelf clearance."
    },
    {
        question: "What is the weight capacity of gondola shelving?",
        answer: "Weight capacity varies by dimensions: 48\" wide base shelves support 300-500 lbs, standard upper shelves handle 150-275 lbs. Deeper shelves (22\"+) support more weight. Always distribute weight evenly across the shelf."
    }
];

export default function GondolaShelvingDimensionsGuide() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="Gondola Shelving Dimensions: Complete Size Guide"
                description="Standard gondola shelving dimensions explained. Heights, widths, depths, weight capacity, and sizing by store type."
                datePublished="2026-01-10"
                author="Goodok Shopfitting"
            />
            <FAQSchema items={faqItems} />
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#f8f9fa] to-[#f8f9fa] py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Link href="/resources/blog" className="text-sm text-gray-500 hover:text-gray-700">
                                Back to Blog
                            </Link>
                            <span className="text-xs font-medium text-[var(--accent)] bg-[#f8f9fa] px-2 py-1 rounded">
                                Product Specs
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Gondola Shelving Dimensions: Complete Size Guide
                        </h1>

                        <p className="text-xl text-gray-600 mb-6">
                            Standard heights, widths, depths, and weight capacities explained. 
                            Choose the right gondola dimensions for your store layout and product types.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>📅 Updated January 10, 2026</span>
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
                                {/* Key Takeaways - NEW */}
                                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4 text-blue-900">📌 Key Takeaways</h2>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Standard heights range from <strong>48" to 84"</strong>, with 72" being the most popular for supermarkets</li>
                                        <li>• Two primary widths: <strong>36" and 48"</strong> - using 48" saves 25% on upright costs</li>
                                        <li>• Base shelf depths: <strong>16", 19", 22", 24"</strong>; upper shelves typically shallower at 10"-16"</li>
                                        <li>• Weight capacity: <strong>300-500 lbs</strong> for base shelves, <strong>150-275 lbs</strong> for upper shelves</li>
                                        <li>• Proper sizing can increase merchandising space by <strong>15-25%</strong> without expanding floor area</li>
                                        <li>• Double-sided units require <strong>32"-48" combined depth</strong> plus ADA-compliant aisle width</li>
                                    </ul>
                                </div>

                                {/* TOC */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4">📚 Quick Navigation</h2>
                                    <ul className="space-y-2 text-gray-600">
                                        <li><a href="#standard" className="hover:text-[var(--accent)]">1. Standard Dimensions Overview</a></li>
                                        <li><a href="#heights" className="hover:text-[var(--accent)]">2. Height Options (48" to 84")</a></li>
                                        <li><a href="#widths" className="hover:text-[var(--accent)]">3. Width Options (24" to 48")</a></li>
                                        <li><a href="#depths" className="hover:text-[var(--accent)]">4. Depth Measurements</a></li>
                                        <li><a href="#store-type" className="hover:text-[var(--accent)]">5. Dimensions by Store Type</a></li>
                                        <li><a href="#weight" className="hover:text-[var(--accent)]">6. Weight Capacity Guide</a></li>
                                        <li><a href="#mistakes" className="hover:text-[var(--accent)]">7. Common Sizing Mistakes</a></li>
                                        <li><a href="#choosing" className="hover:text-[var(--accent)]">8. How to Choose the Right Size</a></li>
                                        <li><a href="#custom" className="hover:text-[var(--accent)]">9. Custom Dimensions</a></li>
                                    </ul>
                                </div>

                                <p>
                                    Selecting the right gondola shelving dimensions directly impacts your store&apos;s 
                                    merchandising capacity, customer flow, and sales performance. This comprehensive 
                                    guide covers every standard dimension so you can order with confidence.
                                </p>

                                {/* Section 1 */}
                                <h2 id="standard">1. Standard Gondola Dimensions Overview</h2>

                                <p>
                                    Gondola shelving is measured in three primary dimensions. Each measurement 
                                    serves specific merchandising functions and must align with your store format, 
                                    product mix, and customer demographics.
                                </p>
                                <ul>
                                    <li><strong>Height</strong>: How tall the unit stands (determines vertical capacity)</li>
                                    <li><strong>Width</strong>: The length of each shelf section (affects planogram flexibility)</li>
                                    <li><strong>Depth</strong>: How far shelves extend from the base (impacts product visibility)</li>
                                </ul>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Dimension</th>
                                                <th className="px-4 py-3 text-left">Common Sizes (inches)</th>
                                                <th className="px-4 py-3 text-left">Metric (mm)</th>
                                                <th className="px-4 py-3 text-left">Most Popular</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Height</td>
                                                <td className="px-4 py-3">48&quot;, 54&quot;, 60&quot;, 72&quot;, 84&quot;</td>
                                                <td className="px-4 py-3">1220, 1370, 1524, 1829, 2134</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">72&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Width</td>
                                                <td className="px-4 py-3">24&quot;, 36&quot;, 48&quot;</td>
                                                <td className="px-4 py-3">610, 914, 1220</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">36&quot; / 48&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Base Depth</td>
                                                <td className="px-4 py-3">16&quot;, 19&quot;, 22&quot;, 24&quot;</td>
                                                <td className="px-4 py-3">406, 483, 559, 610</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">19&quot; / 22&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Shelf Depth</td>
                                                <td className="px-4 py-3">8&quot;, 10&quot;, 12&quot;, 16&quot;, 19&quot;, 22&quot;</td>
                                                <td className="px-4 py-3">203, 254, 305, 406, 483, 559</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">12&quot; / 16&quot;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Section 2 */}
                                <h2 id="heights">2. Height Options Explained</h2>

                                <p>
                                    Gondola upright heights determine your vertical merchandising capacity and 
                                    influence how customers interact with displayed products. Research shows products 
                                    placed above 72&quot; see 40-60% lower pick rates due to reach limitations.
                                </p>

                                {/* Height Comparison Infographic */}
                                <div className="my-8 not-prose">
                                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                        <Image 
                                            src="/images/blog/gondola-height-comparison.png"
                                            alt="Gondola Shelving Height Comparison Chart - 48 inch to 84 inch with human scale reference"
                                            fill
                                            className="object-contain bg-white"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500 text-center mt-2">
                                        Standard gondola heights compared with human scale (5&apos;6&quot;)
                                    </p>
                                </div>

                                <h3>48&quot; (4 ft) - Low Profile</h3>
                                <ul>
                                    <li><strong>Best for:</strong> Checkout areas, promotional islands, impulse displays</li>
                                    <li><strong>Advantage:</strong> Doesn&apos;t block sightlines, enhances store security</li>
                                    <li><strong>Shelves:</strong> Usually 3-4 shelves</li>
                                    <li><strong>Use case:</strong> End caps and cross-merchandising zones</li>
                                </ul>

                                <h3>54&quot; (4.5 ft) - Standard Short</h3>
                                <ul>
                                    <li><strong>Best for:</strong> Convenience stores, small boutiques, pharmacies</li>
                                    <li><strong>Advantage:</strong> Easy customer reach to top shelf, open feel</li>
                                    <li><strong>Shelves:</strong> 4-5 shelves</li>
                                    <li><strong>Use case:</strong> High-theft areas needing visibility</li>
                                </ul>

                                <h3>60&quot; (5 ft) - Medium</h3>
                                <ul>
                                    <li><strong>Best for:</strong> General retail, convenience stores, specialty stores</li>
                                    <li><strong>Advantage:</strong> Balance of capacity and visibility</li>
                                    <li><strong>Shelves:</strong> 5 shelves typical</li>
                                    <li><strong>Use case:</strong> Most versatile option for mixed-use stores</li>
                                </ul>

                                <h3>72&quot; (6 ft) - Standard Tall ⭐ Most Popular</h3>
                                <ul>
                                    <li><strong>Best for:</strong> Supermarkets, grocery stores, larger retail</li>
                                    <li><strong>Advantage:</strong> Maximum display capacity, industry standard</li>
                                    <li><strong>Shelves:</strong> 5-6 shelves</li>
                                    <li><strong>Use case:</strong> Primary aisle runs in most retail formats</li>
                                    <li className="text-green-600"><strong>Industry benchmark for general retail</strong></li>
                                </ul>

                                <h3>84&quot; (7 ft) - Extra Tall</h3>
                                <ul>
                                    <li><strong>Best for:</strong> High-ceiling warehouses, club stores</li>
                                    <li><strong>Advantage:</strong> Absolute maximum capacity</li>
                                    <li><strong>Caution:</strong> Top shelves require step stools or become storage-only</li>
                                    <li><strong>Use case:</strong> Warehouse retail, bulk merchandise</li>
                                </ul>

                                {/* Section 3 */}
                                <h2 id="widths">3. Width Options Explained</h2>

                                <p>
                                    Gondola shelf width affects both structural stability and planogram flexibility. 
                                    A 48&quot; wide section requires approximately 25% fewer upright posts than 
                                    equivalent footage using 36&quot; sections, reducing costs.
                                </p>

                                <h3>24&quot; (2 ft) - Narrow</h3>
                                <ul>
                                    <li><strong>Best for:</strong> Small products, cosmetics, pharmacy items</li>
                                    <li><strong>Advantage:</strong> Fits tight spaces, special order typically</li>
                                    <li><strong>Use case:</strong> Narrow aisles, specialized displays</li>
                                </ul>

                                <h3>36&quot; (3 ft) - Standard</h3>
                                <ul>
                                    <li><strong>Best for:</strong> Most retail applications, specialty stores</li>
                                    <li><strong>Advantage:</strong> Versatile, good for frequent planogram changes</li>
                                    <li><strong>Use case:</strong> End caps, narrow aisles, specialty retail</li>
                                    <li className="text-green-600"><strong>Most flexible option</strong></li>
                                </ul>

                                <h3>48&quot; (4 ft) - Wide</h3>
                                <ul>
                                    <li><strong>Best for:</strong> Large products, bulk displays, supermarkets</li>
                                    <li><strong>Advantage:</strong> 25% fewer uprights = lower cost per linear foot</li>
                                    <li><strong>Use case:</strong> Standard supermarket aisles, high-volume categories</li>
                                    <li className="text-green-600"><strong>Most cost-effective for large stores</strong></li>
                                </ul>

                                {/* Section 4 */}
                                <h2 id="depths">4. Depth Measurements</h2>

                                <h3>Base Depth vs Shelf Depth</h3>
                                <p>
                                    The <strong>base depth</strong> is the frame width. <strong>Shelf depth</strong> 
                                    can vary by level—typically deeper at bottom, shallower at top for better 
                                    visibility and reach.
                                </p>

                                {/* Depth Options Infographic */}
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

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Configuration</th>
                                                <th className="px-4 py-3 text-left">Base Depth</th>
                                                <th className="px-4 py-3 text-left">Upper Shelves</th>
                                                <th className="px-4 py-3 text-left">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Compact</td>
                                                <td className="px-4 py-3">16&quot;</td>
                                                <td className="px-4 py-3">8&quot;-12&quot;</td>
                                                <td className="px-4 py-3">Cosmetics, small items, jewelry</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Standard</td>
                                                <td className="px-4 py-3">19&quot;</td>
                                                <td className="px-4 py-3">10&quot;-16&quot;</td>
                                                <td className="px-4 py-3">General retail, convenience</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Deep</td>
                                                <td className="px-4 py-3">22&quot;</td>
                                                <td className="px-4 py-3">16&quot;-19&quot;</td>
                                                <td className="px-4 py-3">Grocery, supermarket</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Extra Deep</td>
                                                <td className="px-4 py-3">24&quot;-25&quot;</td>
                                                <td className="px-4 py-3">19&quot;-22&quot;</td>
                                                <td className="px-4 py-3">Bulk items, warehouse</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Section 5 - NEW */}
                                <h2 id="store-type">5. Recommended Dimensions by Store Type</h2>

                                <p>
                                    Different retail formats have evolved specific dimensional preferences based 
                                    on customer behavior, product mix, and space constraints.
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Store Type</th>
                                                <th className="px-4 py-3 text-left">Height</th>
                                                <th className="px-4 py-3 text-left">Width</th>
                                                <th className="px-4 py-3 text-left">Base Depth</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Convenience Store</td>
                                                <td className="px-4 py-3">54&quot;-60&quot;</td>
                                                <td className="px-4 py-3">36&quot;</td>
                                                <td className="px-4 py-3">16&quot;-19&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Supermarket</td>
                                                <td className="px-4 py-3">72&quot;</td>
                                                <td className="px-4 py-3">48&quot;</td>
                                                <td className="px-4 py-3">19&quot;-22&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Pharmacy</td>
                                                <td className="px-4 py-3">60&quot;</td>
                                                <td className="px-4 py-3">36&quot;</td>
                                                <td className="px-4 py-3">16&quot;-19&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Boutique</td>
                                                <td className="px-4 py-3">48&quot;-54&quot;</td>
                                                <td className="px-4 py-3">36&quot;</td>
                                                <td className="px-4 py-3">16&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Warehouse Club</td>
                                                <td className="px-4 py-3">84&quot;</td>
                                                <td className="px-4 py-3">48&quot;</td>
                                                <td className="px-4 py-3">22&quot;-24&quot;</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Toy Store</td>
                                                <td className="px-4 py-3">48&quot;-60&quot;</td>
                                                <td className="px-4 py-3">36&quot;</td>
                                                <td className="px-4 py-3">19&quot;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Section 6 - NEW */}
                                <h2 id="weight">6. Weight Capacity Guide</h2>

                                <p>
                                    Gondola shelf weight capacity varies by dimensions and steel gauge. 
                                    Always verify load ratings with your supplier and distribute weight evenly.
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Shelf Type</th>
                                                <th className="px-4 py-3 text-left">Width</th>
                                                <th className="px-4 py-3 text-left">Weight Capacity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Base Shelf (Heavy Duty)</td>
                                                <td className="px-4 py-3">48&quot;</td>
                                                <td className="px-4 py-3 font-bold">350-500 lbs</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Base Shelf (Standard)</td>
                                                <td className="px-4 py-3">36&quot;</td>
                                                <td className="px-4 py-3 font-bold">300-400 lbs</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Upper Shelf (Deep)</td>
                                                <td className="px-4 py-3">48&quot;</td>
                                                <td className="px-4 py-3 font-bold">200-275 lbs</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Upper Shelf (Standard)</td>
                                                <td className="px-4 py-3">36&quot;</td>
                                                <td className="px-4 py-3 font-bold">150-200 lbs</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r my-6">
                                    <p className="text-yellow-800">
                                        <strong>⚠️ Important:</strong> Weight ratings assume evenly distributed loads. 
                                        Concentrated weight in center of shelf reduces effective capacity by 20-30%.
                                    </p>
                                </div>

                                {/* Section 7 - NEW */}
                                <h2 id="mistakes">7. Common Sizing Mistakes to Avoid</h2>

                                <h3>❌ Mistake 1: Insufficient Aisle Width</h3>
                                <p>
                                    Many retailers calculate aisle width without accounting for shelf overhang or 
                                    customer movement. ADA requires minimum 36&quot; clear passage; comfortable 
                                    shopping requires 42&quot;-48&quot;.
                                </p>

                                <h3>❌ Mistake 2: Mismatched Shelf Depths</h3>
                                <p>
                                    Using the same depth for all shelves wastes space and blocks visibility. 
                                    Use deeper shelves (19&quot;-22&quot;) at bottom, shallower (10&quot;-16&quot;) at eye level.
                                </p>

                                <h3>❌ Mistake 3: Overlooking Height Restrictions</h3>
                                <p>
                                    Forgetting ceiling fixtures, sprinklers, and HVAC. Always leave 12&quot;-18&quot; 
                                    clearance above tallest unit. Check fire codes in your jurisdiction.
                                </p>

                                <h3>❌ Mistake 4: Ignoring Double-Sided Depth</h3>
                                <p>
                                    For island (double-sided) gondolas, combined depth is 32&quot;-48&quot;. 
                                    A 22&quot; base on each side = 44&quot; total width, significantly impacting 
                                    aisle planning.
                                </p>

                                {/* Section 8 */}
                                <h2 id="choosing">8. How to Choose the Right Size</h2>

                                <h3>Step 1: Assess Your Products</h3>
                                <ul>
                                    <li><strong>Small items (jewelry, cosmetics):</strong> 8&quot;-10&quot; shelf depth, 48&quot;-54&quot; height</li>
                                    <li><strong>Medium items (toys, apparel):</strong> 12&quot;-16&quot; shelf depth, 60&quot;-72&quot; height</li>
                                    <li><strong>Large items (appliances):</strong> 19&quot;-22&quot; shelf depth, 72&quot; height</li>
                                </ul>

                                <h3>Step 2: Measure Your Space</h3>
                                <ul>
                                    <li><strong>Aisle width:</strong> Standard 42&quot;-48&quot; between gondolas</li>
                                    <li><strong>ADA compliance:</strong> Minimum 36&quot; clear aisle</li>
                                    <li><strong>Ceiling height:</strong> Leave 12&quot;-18&quot; above tallest unit</li>
                                </ul>

                                <h3>Step 3: Calculate Requirements</h3>
                                <p className="bg-[#f8f9fa] border-l-4 border-[#ff6b35] p-4 rounded-r">
                                    📐 <strong>Formula: Store width ÷ (gondola width + aisle width)</strong> = 
                                    Number of gondola rows that fit
                                </p>

                                <p className="bg-[#f8f9fa] border-l-4 border-[#ff6b35] p-4 rounded-r mt-4">
                                    📐 <strong>Linear footage: Number of sections × section width</strong> = 
                                    Total display footage per aisle
                                </p>

                                {/* Section 9 */}
                                <h2 id="custom">9. Custom Dimensions</h2>

                                <p>
                                    Need non-standard dimensions? Custom sizing is available but costs more 
                                    and has longer lead times:
                                </p>
                                <ul>
                                    <li><strong>Cost:</strong> +20-40% over standard sizes</li>
                                    <li><strong>Lead time:</strong> +2-4 weeks</li>
                                    <li><strong>Minimum order:</strong> Usually 20+ units</li>
                                    <li><strong>When it makes sense:</strong> Unique architectural features, brand differentiation, specific product requirements</li>
                                </ul>

                                <h2>Need Help Choosing?</h2>

                                <p>
                                    Send us your floor plan and we&apos;ll recommend the exact gondola 
                                    dimensions for your space—plus provide a <strong>free 3D layout</strong> 
                                    showing how it all fits together.
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
                                    <p className="text-[#F8F1E3] mb-4">
                                        Get a 3D layout with optimized gondola placement!
                                    </p>
                                    <Link
                                        href="/free-3d-design"
                                        className="block w-full bg-white text-[var(--primary)] font-semibold py-3 px-4 rounded-lg text-center hover:bg-[#f8f9fa] transition-colors"
                                    >
                                        Get Free Design
                                    </Link>
                                </div>

                                <div className="bg-[#f8f9fa] border border-[#f8f9fa] rounded-xl p-6">
                                    <h3 className="font-bold mb-3">💬 Questions on Sizing?</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Chat with our team for sizing advice.
                                    </p>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20help%20with%20gondola%20shelving%20dimensions"
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
                                            <Link href="/resources/blog/gondola-vs-wall-shelving" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Gondola vs Wall Shelving Comparison
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/retail-shelving-cost-guide" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Retail Shelving Cost Guide 2026
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/retail-fixtures-wholesale-guide" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Wholesale Buying Guide
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
                        Get the Right Gondola Size
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Factory-direct gondola shelving in all standard dimensions. Free 3D layout included.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn btn-primary">
                            Get Free Layout
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
