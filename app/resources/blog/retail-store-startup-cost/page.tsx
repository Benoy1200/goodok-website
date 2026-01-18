import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Retail Store Startup Cost: Complete Budget Breakdown (2026) | Goodok",
    description: "How much does it cost to open a retail store? Complete startup cost breakdown including fixtures ($2K-$15K), inventory, rent, and hidden expenses. Free budget calculator.",
    keywords: [
        "retail store startup cost",
        "cost to open a store",
        "store fixture budget",
        "opening a retail store",
        "small business startup costs",
        "retail store budget breakdown",
        "store opening expenses",
        "how much to open a shop",
        "retail fixtures cost",
        "store setup cost",
    ],
    openGraph: {
        title: "Retail Store Startup Cost: Complete Budget Breakdown",
        description: "Complete breakdown of retail store startup costs. Fixtures, inventory, rent, and hidden expenses explained.",
        type: "article",
    },
};

const faqItems = [
    {
        question: "How much does it cost to open a small retail store?",
        answer: "A small retail store (500-1,000 sq ft) typically costs $50,000-$150,000 to open. This includes first/last month rent ($3K-$10K), fixtures and displays ($5K-$15K), initial inventory ($10K-$50K), POS system ($500-$2K), licenses and permits ($500-$2K), and operating capital for 3-6 months."
    },
    {
        question: "What percentage of startup budget should go to store fixtures?",
        answer: "Store fixtures typically represent 10-20% of total startup costs. For a $100K budget, expect to spend $10K-$20K on gondola shelving, display cases, checkout counters, and accessories. This percentage is lower for inventory-heavy stores like grocery, higher for display-focused stores like jewelry."
    },
    {
        question: "Can I open a retail store with $10,000?",
        answer: "Opening with $10K is extremely challenging but possible for specific models: pop-up shops, market stalls, or home-based retail. You would need to use 100% used fixtures ($500-$1,500), minimal inventory, and operate from low-cost locations. Most successful small stores require $30K-$50K minimum."
    },
    {
        question: "What are the hidden costs of opening a retail store?",
        answer: "Common hidden costs include: security deposits (often 2-3 months rent), insurance ($1K-$5K/year), signage and branding ($2K-$10K), unexpected build-out costs, credit card processing fees (2-3% of sales), shrinkage/theft (1-2% of inventory), and marketing for grand opening ($1K-$5K)."
    },
    {
        question: "How much does store shelving cost?",
        answer: "Store shelving costs vary by type: Gondola shelving runs $150-$400 per section new, $50-$150 used. Wall shelving is $100-$300 per 4ft section. Display cases cost $200-$1,200 each. For a 1,000 sq ft store, expect to spend $3,000-$8,000 on shelving and displays total."
    }
];

export default function RetailStoreStartupCost() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="Retail Store Startup Cost: Complete Budget Breakdown for 2026"
                description="Complete breakdown of retail store startup costs including fixtures, inventory, rent, and hidden expenses with real-world examples."
                datePublished="2026-01-10"
                author="Goodok Shopfitting"
                image="/images/blog/retail-startup-cost-hero.png"
            />
            <FAQSchema items={faqItems} />
            
            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Link href="/resources/blog" className="text-sm text-gray-500 hover:text-gray-700">
                                ← Back to Blog
                            </Link>
                            <span className="text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                                Business Planning
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Retail Store Startup Cost: Complete Budget Breakdown (2026)
                        </h1>

                        <p className="text-xl text-gray-600 mb-6">
                            &quot;How much does it really cost to open a store?&quot; We break down every expense 
                            from fixtures to hidden fees—so you can plan with confidence, not anxiety.
                        </p>

                        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
                            <Image 
                                src="/images/blog/retail-startup-cost-hero.png"
                                alt="Retail store startup cost planning and budget calculation overlay"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>📅 January 10, 2026</span>
                            <span>📖 18 min read</span>
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
                                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4 text-emerald-900">💰 Quick Cost Summary</h2>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• <strong>Small Store (500-1,000 sq ft):</strong> $50,000 - $150,000</li>
                                        <li>• <strong>Medium Store (1,000-2,500 sq ft):</strong> $150,000 - $350,000</li>
                                        <li>• <strong>Store Fixtures Budget:</strong> 10-20% of total (~$5K-$30K)</li>
                                        <li>• <strong>Minimum Viable Budget:</strong> $30,000-$50,000 (bare bones)</li>
                                        <li>• <strong>Hidden Costs to Add:</strong> +15-25% buffer</li>
                                    </ul>
                                    <p className="text-xs text-gray-500 mt-3 italic">* Prices are typical ranges. Actual costs vary by location, store type, and specifications.</p>
                                </div>

                                {/* TOC */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4">📚 What&apos;s In This Guide</h2>
                                    <ul className="space-y-2 text-gray-600">
                                        <li><a href="#overview" className="hover:text-[var(--accent)]">1. Startup Cost Overview</a></li>
                                        <li><a href="#breakdown" className="hover:text-[var(--accent)]">2. Complete Cost Breakdown</a></li>
                                        <li><a href="#fixtures" className="hover:text-[var(--accent)]">3. Store Fixtures & Displays</a></li>
                                        <li><a href="#by-store-type" className="hover:text-[var(--accent)]">4. Costs by Store Type</a></li>
                                        <li><a href="#hidden-costs" className="hover:text-[var(--accent)]">5. Hidden Costs to Watch</a></li>
                                        <li><a href="#save-money" className="hover:text-[var(--accent)]">6. How to Save Money</a></li>
                                        <li><a href="#budget-template" className="hover:text-[var(--accent)]">7. Budget Planning Template</a></li>
                                    </ul>
                                </div>

                                {/* Section 1 */}
                                <h2 id="overview">1. Startup Cost Overview</h2>
                                
                                <p>
                                    Opening a retail store is one of the most exciting—and financially daunting—steps 
                                    you&apos;ll take as an entrepreneur. The number one question we hear from aspiring 
                                    store owners: <strong>&quot;How much will this actually cost?&quot;</strong>
                                </p>

                                <p>
                                    The honest answer: it depends. But unlike the vague &quot;$10K to $1M&quot; ranges 
                                    you&apos;ll find elsewhere, we&apos;re going to give you real numbers based on actual 
                                    store openings.
                                </p>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r my-6">
                                    <p className="text-blue-800">
                                        <strong>💡 From Reddit r/smallbusiness:</strong> &quot;I opened my 1,400 sq ft 
                                        bookstore for about $15K in fixtures alone. That was used gondola shelving, 
                                        some custom built shelves, and basic lighting. The total store opening was 
                                        closer to $80K when you count everything.&quot;
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <h2 id="breakdown">2. Complete Cost Breakdown</h2>

                                <div className="my-8 relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-md">
                                    <Image 
                                        src="/images/blog/retail-cost-breakdown.png"
                                        alt="Retail store budget breakdown blueprint and calculator"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <p>
                                    Here&apos;s where every dollar goes when opening a retail store:
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Category</th>
                                                <th className="px-4 py-3 text-left">Small Store</th>
                                                <th className="px-4 py-3 text-left">Medium Store</th>
                                                <th className="px-4 py-3 text-left">% of Budget</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Rent (First + Last + Deposit)</td>
                                                <td className="px-4 py-3">$3,000 - $10,000</td>
                                                <td className="px-4 py-3">$10,000 - $30,000</td>
                                                <td className="px-4 py-3">5-15%</td>
                                            </tr>
                                            <tr className="border-t bg-emerald-50">
                                                <td className="px-4 py-3 font-medium">Store Fixtures & Displays</td>
                                                <td className="px-4 py-3">$5,000 - $15,000</td>
                                                <td className="px-4 py-3">$15,000 - $40,000</td>
                                                <td className="px-4 py-3">10-20%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Initial Inventory</td>
                                                <td className="px-4 py-3">$10,000 - $50,000</td>
                                                <td className="px-4 py-3">$30,000 - $150,000</td>
                                                <td className="px-4 py-3">30-50%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Build-out & Renovation</td>
                                                <td className="px-4 py-3">$2,000 - $20,000</td>
                                                <td className="px-4 py-3">$10,000 - $50,000</td>
                                                <td className="px-4 py-3">5-15%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">POS & Technology</td>
                                                <td className="px-4 py-3">$500 - $3,000</td>
                                                <td className="px-4 py-3">$2,000 - $8,000</td>
                                                <td className="px-4 py-3">1-3%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Licenses & Permits</td>
                                                <td className="px-4 py-3">$500 - $2,000</td>
                                                <td className="px-4 py-3">$1,000 - $5,000</td>
                                                <td className="px-4 py-3">1-2%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Signage & Branding</td>
                                                <td className="px-4 py-3">$1,000 - $5,000</td>
                                                <td className="px-4 py-3">$3,000 - $15,000</td>
                                                <td className="px-4 py-3">2-5%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Insurance (First Year)</td>
                                                <td className="px-4 py-3">$1,000 - $3,000</td>
                                                <td className="px-4 py-3">$3,000 - $8,000</td>
                                                <td className="px-4 py-3">2-3%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Marketing & Grand Opening</td>
                                                <td className="px-4 py-3">$1,000 - $5,000</td>
                                                <td className="px-4 py-3">$5,000 - $20,000</td>
                                                <td className="px-4 py-3">3-5%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Operating Capital (3-6 mo)</td>
                                                <td className="px-4 py-3">$10,000 - $30,000</td>
                                                <td className="px-4 py-3">$30,000 - $80,000</td>
                                                <td className="px-4 py-3">15-25%</td>
                                            </tr>
                                            <tr className="border-t bg-gray-100 font-bold">
                                                <td className="px-4 py-3">TOTAL</td>
                                                <td className="px-4 py-3">$50,000 - $150,000</td>
                                                <td className="px-4 py-3">$150,000 - $350,000</td>
                                                <td className="px-4 py-3">100%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Section 3 */}
                                <h2 id="fixtures">3. Store Fixtures & Displays: Detailed Breakdown</h2>

                                <div className="my-8 relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-md">
                                    <Image 
                                        src="/images/blog/retail-fixtures-comparison.png"
                                        alt="Comparison of high-end vs affordable retail store fixtures"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <p>
                                    As a fixtures supplier, we have unique insight into this category. Here&apos;s 
                                    exactly what you can expect to spend:
                                </p>

                                <h3>Gondola Shelving</h3>
                                <ul>
                                    <li><strong>New:</strong> $150 - $400 per section</li>
                                    <li><strong>Used (liquidation):</strong> $50 - $150 per section</li>
                                    <li><strong>Typical store needs:</strong> 8-20 sections</li>
                                    <li><strong>Total range:</strong> $1,200 - $8,000</li>
                                </ul>
                                <p>
                                    <Link href="/products/gondola-shelving" className="text-[var(--accent)] hover:underline">
                                        View gondola shelving options →
                                    </Link>
                                </p>

                                <h3>Display Cases</h3>
                                <ul>
                                    <li><strong>Glass countertop cases:</strong> $200 - $500 each</li>
                                    <li><strong>Tower display cases:</strong> $400 - $800 each</li>
                                    <li><strong>Full-vision cases:</strong> $500 - $1,200 each</li>
                                    <li><strong>Typical store needs:</strong> 2-6 cases</li>
                                    <li><strong>Total range:</strong> $1,000 - $5,000</li>
                                </ul>
                                <p>
                                    <Link href="/products/display-cases" className="text-[var(--accent)] hover:underline">
                                        Browse display case options →
                                    </Link>
                                </p>

                                <h3>Checkout Counter</h3>
                                <ul>
                                    <li><strong>Basic counter:</strong> $300 - $800</li>
                                    <li><strong>With display case:</strong> $500 - $1,500</li>
                                    <li><strong>Custom built:</strong> $1,000 - $3,000</li>
                                </ul>
                                <p>
                                    <Link href="/products/checkout-counters" className="text-[var(--accent)] hover:underline">
                                        See checkout counter options →
                                    </Link>
                                </p>

                                <h3>Wall Shelving & Slatwall</h3>
                                <ul>
                                    <li><strong>Wall brackets + shelves:</strong> $100 - $300 per 4ft section</li>
                                    <li><strong>Slatwall panels:</strong> $50 - $100 per 4x8 panel</li>
                                    <li><strong>Typical store needs:</strong> 20-50 linear feet</li>
                                    <li><strong>Total range:</strong> $500 - $3,000</li>
                                </ul>

                                <h3>Accessories & Extras</h3>
                                <ul>
                                    <li><strong>Price tag holders:</strong> $50 - $200</li>
                                    <li><strong>Peg hooks:</strong> $50 - $150</li>
                                    <li><strong>Shelf dividers:</strong> $100 - $300</li>
                                    <li><strong>Signage holders:</strong> $50 - $200</li>
                                </ul>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r my-6">
                                    <p className="text-yellow-800">
                                        <strong>💡 Pro Tip:</strong> Buying from store liquidations can cut fixture 
                                        costs by 50-70%. Check our{" "}
                                        <Link href="/resources/blog/new-vs-used-gondola-shelving" className="text-yellow-700 underline">
                                            New vs Used Shelving Guide
                                        </Link>{" "}
                                        for sourcing strategies.
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <h2 id="by-store-type">4. Costs by Store Type</h2>

                                <p>
                                    Different retail formats have vastly different startup requirements:
                                </p>

                                <h3>Boutique Clothing Store (800 sq ft)</h3>
                                <ul>
                                    <li><strong>Fixtures:</strong> $8,000 - $15,000 (racks, display tables, mirrors)</li>
                                    <li><strong>Inventory:</strong> $15,000 - $40,000</li>
                                    <li><strong>Total Startup:</strong> $60,000 - $120,000</li>
                                </ul>

                                <h3>Gift Shop / Card Shop (600 sq ft)</h3>
                                <ul>
                                    <li><strong>Fixtures:</strong> $5,000 - $10,000 (gondolas, display cases)</li>
                                    <li><strong>Inventory:</strong> $10,000 - $25,000</li>
                                    <li><strong>Total Startup:</strong> $40,000 - $80,000</li>
                                </ul>
                                <p>
                                    See our{" "}
                                    <Link href="/resources/blog/card-shop-shelving-ideas" className="text-[var(--accent)] hover:underline">
                                        Card Shop Shelving Guide
                                    </Link>{" "}
                                    for specific fixture recommendations.
                                </p>

                                <h3>Convenience Store (1,200 sq ft)</h3>
                                <ul>
                                    <li><strong>Fixtures:</strong> $15,000 - $30,000 (gondolas, coolers, checkout)</li>
                                    <li><strong>Inventory:</strong> $25,000 - $50,000</li>
                                    <li><strong>Total Startup:</strong> $80,000 - $180,000</li>
                                </ul>
                                <p>
                                    <Link href="/tools/convenience-store-cost-calculator" className="text-[var(--accent)] hover:underline">
                                        👉 Try our 5-minute Mini Mart Setup Estimator →
                                    </Link>
                                </p>

                                <h3>Jewelry Store (500 sq ft)</h3>
                                <ul>
                                    <li><strong>Fixtures:</strong> $15,000 - $40,000 (high-security display cases)</li>
                                    <li><strong>Inventory:</strong> $30,000 - $200,000</li>
                                    <li><strong>Total Startup:</strong> $80,000 - $300,000</li>
                                </ul>

                                {/* Section 5 */}
                                <h2 id="hidden-costs">5. Hidden Costs to Watch Out For</h2>

                                <p>
                                    These are the expenses that catch new store owners off guard:
                                </p>

                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r my-6">
                                    <h4 className="font-bold text-red-900 mb-2">⚠️ The Budget Killers</h4>
                                    <ul className="text-red-800 space-y-1">
                                        <li>• <strong>Security deposit:</strong> Often 2-3 months rent (add $3K-$15K)</li>
                                        <li>• <strong>Utility deposits:</strong> $500-$2,000 for new commercial accounts</li>
                                        <li>• <strong>Build-out overruns:</strong> Add 20% buffer to contractor quotes</li>
                                        <li>• <strong>Delayed opening:</strong> Every week costs rent without revenue</li>
                                        <li>• <strong>Shrinkage/theft:</strong> Budget 1-2% of inventory annually</li>
                                    </ul>
                                </div>

                                <h3>Common Hidden Costs by Category</h3>
                                <ul>
                                    <li><strong>Credit card processing fees:</strong> 2-3% of all card sales</li>
                                    <li><strong>Merchant account setup:</strong> $100-$500</li>
                                    <li><strong>Alarm/security system:</strong> $500-$2,000 + monthly monitoring</li>
                                    <li><strong>Professional services:</strong> Lawyer, accountant fees ($1,000-$5,000)</li>
                                    <li><strong>Unexpected repairs:</strong> HVAC, plumbing, electrical ($500-$5,000)</li>
                                    <li><strong>Employee training:</strong> Time and materials before opening</li>
                                </ul>

                                {/* Section 6 */}
                                <h2 id="save-money">6. How to Save Money on Startup Costs</h2>

                                <h3>Fixture Savings (Potential: $3,000-$10,000)</h3>
                                <ul>
                                    <li><strong>Buy from liquidations:</strong> 50-70% savings on gondola shelving</li>
                                    <li><strong>Phase your investment:</strong> Start minimal, upgrade from profits</li>
                                    <li><strong>Negotiate bulk discounts:</strong> 15-25% off for 20+ fixture order</li>
                                    <li><strong>DIY installation:</strong> Save $500-$2,000 in labor</li>
                                </ul>

                                <h3>Rent Savings (Potential: $5,000-$20,000)</h3>
                                <ul>
                                    <li><strong>Negotiate free rent:</strong> 1-3 months free for new leases</li>
                                    <li><strong>Tenant improvement allowance:</strong> Landlord pays for build-out</li>
                                    <li><strong>Second-tier locations:</strong> 30-50% lower rent</li>
                                    <li><strong>Sublease space:</strong> From closing businesses</li>
                                </ul>

                                <h3>Inventory Savings (Potential: $5,000-$20,000)</h3>
                                <ul>
                                    <li><strong>Consignment arrangements:</strong> Pay only when sold</li>
                                    <li><strong>Pre-orders:</strong> Gauge demand before stocking</li>
                                    <li><strong>Lean inventory:</strong> Start with bestsellers only</li>
                                    <li><strong>Supplier terms:</strong> Net 30/60 payment terms</li>
                                </ul>

                                {/* Section 7 */}
                                <h2 id="budget-template">7. Budget Planning Template</h2>

                                <p>
                                    Use this template to plan your own store opening budget:
                                </p>

                                <div className="bg-gray-100 rounded-xl p-6 my-6 not-prose">
                                    <h3 className="font-bold text-lg mb-4">📋 Retail Store Startup Budget Template</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Store Size:</span>
                                            <span className="text-gray-500">_____ sq ft</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Monthly Rent:</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>× Deposit (3 months):</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Fixtures Budget (15% of total):</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Initial Inventory (40% of total):</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Build-out & Renovation:</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Technology & POS:</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Licenses & Insurance:</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Marketing & Signage:</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Operating Capital (6 months):</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Contingency (+20%):</span>
                                            <span className="text-gray-500">$_____</span>
                                        </div>
                                        <div className="flex justify-between font-bold pt-2">
                                            <span>TOTAL STARTUP BUDGET:</span>
                                            <span>$_____</span>
                                        </div>
                                    </div>
                                </div>

                                <h2>Ready to Plan Your Store?</h2>
                                <p>
                                    Understanding your startup costs is the first step to a successful retail 
                                    business. For help planning your fixture budget, get a free consultation 
                                    and quote from our team.
                                </p>

                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 text-white">
                                    <h3 className="text-xl font-bold mb-3">
                                        💰 Free Fixture Quote
                                    </h3>
                                    <p className="text-emerald-100 mb-4">
                                        Get a detailed fixture cost estimate for your store size and type.
                                    </p>
                                    <Link
                                        href="/free-3d-design"
                                        className="block w-full bg-white text-emerald-700 font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                                    >
                                        Get Free Quote
                                    </Link>
                                </div>

                                <div className="bg-[#f8f9fa] rounded-xl p-6">
                                    <h3 className="font-bold mb-3">💬 Have Questions?</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Chat with our team about fixture budgets and options.
                                    </p>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20help%20planning%20my%20store%20fixture%20budget"
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
                                            <Link href="/tools/convenience-store-cost-calculator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                                                🧮 Mini Mart Setup Estimator (Free Tool)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/gondola-shelving-buying-guide" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Gondola Shelving Buying Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/new-vs-used-gondola-shelving" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                New vs Used Shelving
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/retail-shelving-cost-guide" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Retail Shelving Cost Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/card-shop-shelving-ideas" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Card Shop Shelving Ideas
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-emerald-50 rounded-xl p-6">
                                    <h3 className="font-bold mb-3">🛒 Popular Starter Fixtures</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="/products/gondola-shelving" className="text-emerald-700 hover:underline text-sm font-medium">
                                                Gondola Shelving →
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/display-cases" className="text-emerald-700 hover:underline text-sm font-medium">
                                                Display Cases →
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/checkout-counters" className="text-emerald-700 hover:underline text-sm font-medium">
                                                Checkout Counters →
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/wall-shelving" className="text-emerald-700 hover:underline text-sm font-medium">
                                                Wall Shelving →
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
            <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        Ready to Plan Your Store Opening?
                    </h2>
                    <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Get a free consultation and detailed fixture quote. We&apos;ll help you 
                        build the perfect store within your budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn btn-primary bg-white text-emerald-700 hover:bg-gray-100">
                            Get Free Quote
                        </Link>
                        <Link href="/products" className="btn border-2 border-white text-white hover:bg-white/10">
                            Browse Products
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
