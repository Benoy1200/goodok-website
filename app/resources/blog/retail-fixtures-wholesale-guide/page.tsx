import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Retail Store Fixtures Wholesale: Complete Buying Guide | Goodok",
    description:
        "Everything you need to know about buying retail fixtures wholesale. Learn about supplier selection, quality assessment, pricing, and shipping from China.",
    keywords: [
        "retail fixtures wholesale",
        "wholesale store fixtures",
        "buy retail shelving wholesale",
        "China fixtures supplier",
        "store fixtures manufacturer",
        "bulk retail displays",
    ],
    openGraph: {
        title: "Retail Store Fixtures Wholesale: Complete Buying Guide",
        description:
            "Complete guide to buying retail fixtures wholesale from manufacturers.",
        type: "article",
    },
};

export default function RetailFixturesWholesaleGuide() {
    return (
        <article className="pt-24">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Link href="/resources/blog" className="text-sm text-gray-500 hover:text-gray-700">
                                ← Back to Blog
                            </Link>
                            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                Buying Guide
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Retail Store Fixtures Wholesale: Complete Buying Guide
                        </h1>

                        <p className="text-xl text-gray-600 mb-6">
                            Save 40-60% by buying retail fixtures directly from manufacturers.
                            Here&apos;s everything you need to know.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>📅 January 1, 2026</span>
                            <span>⏱️ 15 min read</span>
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
                                {/* TOC */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4">📋 In This Guide</h2>
                                    <ul className="space-y-2 text-gray-600">
                                        <li><a href="#why-wholesale" className="hover:text-blue-600">1. Why Buy Wholesale?</a></li>
                                        <li><a href="#finding-suppliers" className="hover:text-blue-600">2. Finding Suppliers</a></li>
                                        <li><a href="#quality" className="hover:text-blue-600">3. Quality Assessment</a></li>
                                        <li><a href="#pricing" className="hover:text-blue-600">4. Understanding Pricing</a></li>
                                        <li><a href="#shipping" className="hover:text-blue-600">5. Shipping & Logistics</a></li>
                                        <li><a href="#checklist" className="hover:text-blue-600">6. Buying Checklist</a></li>
                                    </ul>
                                </div>

                                <p>
                                    Retail fixtures are a significant investment for any store. Buying wholesale
                                    from manufacturers can save you 40-60% compared to local distributors.
                                    But it requires knowledge and careful planning.
                                </p>

                                {/* Section 1 */}
                                <h2 id="why-wholesale">1. Why Buy Wholesale?</h2>

                                <h3>Cost Savings</h3>
                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Item</th>
                                                <th className="px-4 py-3 text-left">Local Retail</th>
                                                <th className="px-4 py-3 text-left">Wholesale</th>
                                                <th className="px-4 py-3 text-left">Savings</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3">Gondola Unit</td>
                                                <td className="px-4 py-3">$450</td>
                                                <td className="px-4 py-3 text-green-600">$180</td>
                                                <td className="px-4 py-3 text-green-600">60%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3">Glass Display Case</td>
                                                <td className="px-4 py-3">$800</td>
                                                <td className="px-4 py-3 text-green-600">$350</td>
                                                <td className="px-4 py-3 text-green-600">56%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3">Wall Shelving (m)</td>
                                                <td className="px-4 py-3">$200</td>
                                                <td className="px-4 py-3 text-green-600">$90</td>
                                                <td className="px-4 py-3 text-green-600">55%</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3">Clothing Rack</td>
                                                <td className="px-4 py-3">$150</td>
                                                <td className="px-4 py-3 text-green-600">$60</td>
                                                <td className="px-4 py-3 text-green-600">60%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3>Other Benefits</h3>
                                <ul>
                                    <li><strong>Customization</strong>: Get exact sizes, colors, and features</li>
                                    <li><strong>Volume discounts</strong>: Bigger orders = better pricing</li>
                                    <li><strong>Direct communication</strong>: Work directly with the factory</li>
                                    <li><strong>Consistency</strong>: Same quality across all units</li>
                                </ul>

                                {/* Section 2 */}
                                <h2 id="finding-suppliers">2. Finding Suppliers</h2>

                                <h3>Where to Look</h3>
                                <ul>
                                    <li><strong>Alibaba</strong>: Largest platform, verify Gold Suppliers</li>
                                    <li><strong>Made-in-China</strong>: Good for industrial products</li>
                                    <li><strong>Trade Shows</strong>: Canton Fair, GlobalSources shows</li>
                                    <li><strong>Direct Factory Websites</strong>: Like goodokshop.com</li>
                                </ul>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                    <p className="font-medium text-blue-800">
                                        💡 Pro Tip: Working directly with manufacturers (not trading companies)
                                        gives you better prices and more control over quality.
                                    </p>
                                </div>

                                <h3>Supplier Red Flags</h3>
                                <ul>
                                    <li>No factory photos or videos</li>
                                    <li>Prices significantly lower than competitors</li>
                                    <li>Reluctance to provide samples</li>
                                    <li>No established trade history</li>
                                    <li>Poor English with no Chinese team support</li>
                                </ul>

                                {/* Section 3 */}
                                <h2 id="quality">3. Quality Assessment</h2>

                                <h3>Before Ordering</h3>
                                <ul>
                                    <li>Request samples (pay for them if needed)</li>
                                    <li>Ask for factory certification (ISO 9001)</li>
                                    <li>Request client references</li>
                                    <li>Video call with factory tour</li>
                                    <li>Check material specifications</li>
                                </ul>

                                <h3>Key Quality Factors</h3>
                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Factor</th>
                                                <th className="px-4 py-3 text-left">What to Look For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3">Steel Thickness</td>
                                                <td className="px-4 py-3">1.0mm+ for heavy duty, 0.7mm for light</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3">Powder Coating</td>
                                                <td className="px-4 py-3">60+ microns, scratch test</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3">Glass</td>
                                                <td className="px-4 py-3">Tempered, 5mm+ thickness</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3">Welds</td>
                                                <td className="px-4 py-3">Clean, no visible seams</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3">Hardware</td>
                                                <td className="px-4 py-3">Stainless steel screws, quality locks</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Section 4 */}
                                <h2 id="pricing">4. Understanding Pricing</h2>

                                <h3>Price Components</h3>
                                <ul>
                                    <li><strong>FOB price</strong>: Product cost + loading at port</li>
                                    <li><strong>Shipping</strong>: Sea freight (40HQ container $3-8K)</li>
                                    <li><strong>Customs</strong>: Duties + import taxes (varies by country)</li>
                                    <li><strong>Local delivery</strong>: From port to your store</li>
                                </ul>

                                <h3>Payment Terms</h3>
                                <ul>
                                    <li><strong>30% deposit</strong>: To start production</li>
                                    <li><strong>70% balance</strong>: Before shipping</li>
                                    <li><strong>Options</strong>: T/T, L/C, Trade Assurance</li>
                                </ul>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <p className="font-medium text-yellow-800">
                                        ⚠️ Never pay 100% upfront. A reputable supplier will accept standard
                                        30/70 payment terms.
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <h2 id="shipping">5. Shipping & Logistics</h2>

                                <h3>Container Options</h3>
                                <ul>
                                    <li><strong>20GP</strong>: ~28 CBM, good for small orders</li>
                                    <li><strong>40HQ</strong>: ~68 CBM, most common for store fit-outs</li>
                                    <li><strong>LCL</strong>: Less than container load, share with others</li>
                                </ul>

                                <h3>Shipping Timeline</h3>
                                <ul>
                                    <li><strong>Production</strong>: 25-35 days</li>
                                    <li><strong>Sea Freight to USA</strong>: 25-35 days</li>
                                    <li><strong>Sea Freight to Europe</strong>: 30-40 days</li>
                                    <li><strong>Sea Freight to Middle East</strong>: 20-30 days</li>
                                    <li><strong>Customs clearance</strong>: 3-7 days</li>
                                </ul>

                                <h3>Incoterms</h3>
                                <ul>
                                    <li><strong>FOB</strong>: You handle shipping from port</li>
                                    <li><strong>CIF</strong>: Seller handles shipping to your port</li>
                                    <li><strong>DDP</strong>: Seller handles everything to your door</li>
                                </ul>

                                {/* Section 6 */}
                                <h2 id="checklist">6. Buying Checklist</h2>

                                <div className="bg-gray-50 rounded-xl p-6 my-6">
                                    <h3 className="text-lg font-bold mb-4">✅ Before Ordering</h3>
                                    <ul className="space-y-2">
                                        <li>☐ Verified supplier credentials</li>
                                        <li>☐ Requested and received samples</li>
                                        <li>☐ Confirmed specifications in writing</li>
                                        <li>☐ Agreed on payment terms</li>
                                        <li>☐ Got shipping quote</li>
                                        <li>☐ Checked import duties for your country</li>
                                    </ul>

                                    <h3 className="text-lg font-bold mt-6 mb-4">✅ During Production</h3>
                                    <ul className="space-y-2">
                                        <li>☐ Request production photos</li>
                                        <li>☐ Pre-shipment inspection</li>
                                        <li>☐ Packing list verification</li>
                                    </ul>

                                    <h3 className="text-lg font-bold mt-6 mb-4">✅ After Receiving</h3>
                                    <ul className="space-y-2">
                                        <li>☐ Inspect all items upon delivery</li>
                                        <li>☐ Document any damage immediately</li>
                                        <li>☐ Test assembly</li>
                                    </ul>
                                </div>

                                <h2>Ready to Buy Wholesale?</h2>

                                <p>
                                    We&apos;re a direct manufacturer offering factory-direct pricing on all
                                    retail fixtures. Get a <strong>free quote</strong> with 3D store design
                                    included.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
                                    <h3 className="text-xl font-bold mb-3">
                                        Get Factory Direct Quote
                                    </h3>
                                    <p className="text-blue-100 mb-4">
                                        Save 40-60% with wholesale pricing!
                                    </p>
                                    <Link
                                        href="/free-3d-design"
                                        className="block w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg text-center hover:bg-blue-50 transition-colors"
                                    >
                                        Get Free Quote
                                    </Link>
                                </div>

                                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                    <h3 className="font-bold mb-3">💬 Questions?</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Chat with our export team.
                                    </p>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20a%20wholesale%20quote%20for%20retail%20fixtures"
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
                                            <Link href="/resources/blog/gondola-vs-wall-shelving" className="text-gray-600 hover:text-blue-600 text-sm">
                                                → Gondola vs Wall Shelving
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/how-to-open-boutique" className="text-gray-600 hover:text-blue-600 text-sm">
                                                → How to Open a Boutique
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
            <section className="py-16 bg-gray-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Buy Direct from the Factory
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        15+ years of experience. 50+ countries served. Factory-direct pricing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn bg-white text-gray-900 hover:bg-gray-100">
                            Get Free Quote
                        </Link>
                        <Link href="/products" className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900">
                            Browse Products
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
