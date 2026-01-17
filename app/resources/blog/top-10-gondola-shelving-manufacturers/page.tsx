import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Top 10 Gondola Shelving Manufacturers 2025 | China vs USA Comparison",
    description:
        "Compare the best gondola shelving manufacturers in 2025. US brands like Lozier & Madix vs China factories. Learn pricing differences, MOQ, and how to save 30-50%.",
    keywords: [
        "gondola shelving manufacturers",
        "gondola shelving suppliers",
        "best gondola shelving brands",
        "lozier shelving",
        "madix shelving",
        "china gondola shelving",
        "gondola shelving factory",
        "wholesale gondola shelving",
    ],
};

// Manufacturer data
const usManufacturers = [
    {
        rank: 1,
        name: "Lozier Corporation",
        country: "USA",
        founded: "1956",
        specialty: "Premium retail shelving, pharmacy fixtures",
        priceRange: "$400-$700 per unit",
        pros: ["Industry standard", "Wide dealer network", "Quick local delivery"],
        cons: ["Premium pricing", "No direct factory sales"],
        website: "lozier.com",
    },
    {
        rank: 2,
        name: "Madix Inc.",
        country: "USA",
        founded: "1966",
        specialty: "Retail gondola systems, convenience store fixtures",
        priceRange: "$350-$600 per unit",
        pros: ["Good quality", "Multiple finishes", "US manufacturing"],
        cons: ["Higher cost than imports", "Long lead times"],
        website: "madix.com",
    },
    {
        rank: 3,
        name: "DGS Retail",
        country: "USA",
        founded: "2005",
        specialty: "Custom gondola solutions, slatwall systems",
        priceRange: "$300-$500 per unit",
        pros: ["Custom design services", "Good online ordering", "Dealer for Lozier"],
        cons: ["Reseller markup", "Limited manufacturing"],
        website: "dgsretail.com",
    },
    {
        rank: 4,
        name: "ULINE",
        country: "USA",
        founded: "1980",
        specialty: "Industrial shelving, quick-ship gondolas",
        priceRange: "$400-$700 per unit",
        pros: ["Same-day shipping", "Huge catalog", "Reliable"],
        cons: ["Premium pricing", "Limited customization"],
        website: "uline.com",
    },
    {
        rank: 5,
        name: "Streater LLC",
        country: "USA",
        founded: "1901",
        specialty: "Heavy-duty retail fixtures",
        priceRange: "$350-$550 per unit",
        pros: ["Long history", "Quality manufacturing"],
        cons: ["Limited dealer network", "Regional availability"],
        website: "streater.com",
    },
];

const chinaManufacturers = [
    {
        rank: 6,
        name: "Goodok (Our Factory)",
        country: "China",
        founded: "2009",
        specialty: "Custom store fixtures, free 3D design, one-stop solution",
        priceRange: "$80-$200 per unit",
        pros: ["Factory direct pricing", "Free 3D design", "Full customization", "Export to 50+ countries"],
        cons: ["Shipping time 30-45 days", "MOQ requirements"],
        website: "goodokshop.com",
        featured: true,
    },
    {
        rank: 7,
        name: "Heda Shelving",
        country: "China",
        founded: "2008",
        specialty: "Supermarket shelving, gondola racks",
        priceRange: "$50-$150 per unit",
        pros: ["Competitive pricing", "Good quality control"],
        cons: ["Less customization", "Communication challenges"],
        website: "hedashelving.com",
    },
    {
        rank: 8,
        name: "SuMetall",
        country: "China",
        founded: "2005",
        specialty: "Retail gondola systems, store fittings",
        priceRange: "$60-$180 per unit",
        pros: ["Wide product range", "Factory tours available"],
        cons: ["Higher MOQ", "Variable lead times"],
        website: "shelving.com.cn",
    },
    {
        rank: 9,
        name: "Highbright",
        country: "China",
        founded: "2003",
        specialty: "Supermarket equipment, display shelves",
        priceRange: "$40-$120 per unit",
        pros: ["Budget-friendly", "Large capacity"],
        cons: ["Basic designs", "Quality varies"],
        website: "supermarketequipments.com",
    },
    {
        rank: 10,
        name: "iYubo Custom",
        country: "China",
        founded: "2015",
        specialty: "Store design, custom fixtures",
        priceRange: "$100-$250 per unit",
        pros: ["Design-focused", "Modern website"],
        cons: ["Newer company", "Less track record"],
        website: "iyubocustom.com",
    },
];

export default function TopManufacturersPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block px-3 py-1 bg-[var(--accent)] text-white text-sm font-medium rounded-full mb-4">
                            2025 Industry Guide
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Top 10 Gondola Shelving Manufacturers
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            USA vs China: Compare pricing, quality, and find the best supplier for your retail store.
                            Save 30-50% by sourcing from the right manufacturer.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="#comparison" className="btn btn-primary">
                                See Full Comparison
                            </a>
                            <a href="#china-vs-usa" className="btn btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                                China vs USA Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-8 bg-[var(--primary)] text-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold">10</div>
                            <div className="text-sm opacity-80">Top Manufacturers</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold">5 USA</div>
                            <div className="text-sm opacity-80">American Brands</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold">5 China</div>
                            <div className="text-sm opacity-80">Factory Direct</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold">30-50%</div>
                            <div className="text-sm opacity-80">Potential Savings</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-12 bg-gray-50">
                <div className="container">
                    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="font-bold mb-4">Table of Contents</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#usa-manufacturers" className="text-[var(--primary)] hover:underline">→ Top 5 USA Manufacturers</a></li>
                            <li><a href="#china-manufacturers" className="text-[var(--primary)] hover:underline">→ Top 5 China Manufacturers</a></li>
                            <li><a href="#comparison" className="text-[var(--primary)] hover:underline">→ Side-by-Side Comparison Table</a></li>
                            <li><a href="#china-vs-usa" className="text-[var(--primary)] hover:underline">→ China vs USA: Which is Right for You?</a></li>
                            <li><a href="#how-to-choose" className="text-[var(--primary)] hover:underline">→ How to Choose the Best Manufacturer</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* USA Manufacturers */}
            <section id="usa-manufacturers" className="py-16 bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-3xl">🇺🇸</span>
                            <h2 className="text-3xl font-bold">Top 5 USA Manufacturers</h2>
                        </div>
                        <p className="text-gray-600 mb-8">
                            American manufacturers offer the advantage of quick local shipping and established dealer networks.
                            However, pricing is typically 2-3x higher than China factory direct.
                        </p>
                        
                        <div className="space-y-6">
                            {usManufacturers.map((mfr) => (
                                <div key={mfr.rank} className="bg-gray-50 rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded mb-2">
                                                #{mfr.rank}
                                            </span>
                                            <h3 className="text-xl font-bold">{mfr.name}</h3>
                                            <p className="text-gray-500 text-sm">Founded {mfr.founded} • {mfr.country}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-[var(--primary)]">{mfr.priceRange}</div>
                                            <div className="text-xs text-gray-500">per starter unit</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">{mfr.specialty}</p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-green-600 mb-2">✓ Pros</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {mfr.pros.map((pro) => (
                                                    <li key={pro}>• {pro}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-red-600 mb-2">✗ Cons</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {mfr.cons.map((con) => (
                                                    <li key={con}>• {con}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* China Manufacturers */}
            <section id="china-manufacturers" className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-3xl">🇨🇳</span>
                            <h2 className="text-3xl font-bold">Top 5 China Manufacturers</h2>
                        </div>
                        <p className="text-gray-600 mb-8">
                            China manufacturers offer factory-direct pricing with significant cost savings.
                            Many provide free design services and full customization options.
                        </p>
                        
                        <div className="space-y-6">
                            {chinaManufacturers.map((mfr) => (
                                <div 
                                    key={mfr.rank} 
                                    className={`rounded-xl p-6 ${mfr.featured ? 'bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border-2 border-[var(--primary)]' : 'bg-white'}`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${mfr.featured ? 'bg-[var(--primary)] text-white' : 'bg-orange-100 text-orange-700'}`}>
                                                    #{mfr.rank}
                                                </span>
                                                {mfr.featured && (
                                                    <span className="inline-block px-2 py-1 bg-[var(--accent)] text-white text-xs font-medium rounded">
                                                        ⭐ Our Factory
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold">{mfr.name}</h3>
                                            <p className="text-gray-500 text-sm">Founded {mfr.founded} • {mfr.country}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-green-600">{mfr.priceRange}</div>
                                            <div className="text-xs text-gray-500">per starter unit</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">{mfr.specialty}</p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-green-600 mb-2">✓ Pros</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {mfr.pros.map((pro) => (
                                                    <li key={pro}>• {pro}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-red-600 mb-2">✗ Cons</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {mfr.cons.map((con) => (
                                                    <li key={con}>• {con}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    {mfr.featured && (
                                        <div className="mt-4 pt-4 border-t border-[var(--primary)]/20">
                                            <a
                                                href="https://api.whatsapp.com/send?phone=8613822102050"
                                                className="inline-flex items-center gap-2 btn btn-primary"
                                            >
                                                Get Free Quote from Goodok →
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section id="comparison" className="py-16 bg-white">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Side-by-Side Comparison</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-3 text-left font-semibold">Manufacturer</th>
                                        <th className="p-3 text-left font-semibold">Country</th>
                                        <th className="p-3 text-left font-semibold">Price Range</th>
                                        <th className="p-3 text-left font-semibold">Lead Time</th>
                                        <th className="p-3 text-left font-semibold">MOQ</th>
                                        <th className="p-3 text-left font-semibold">Free Design</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium">Lozier</td>
                                        <td className="p-3">🇺🇸 USA</td>
                                        <td className="p-3">$400-$700</td>
                                        <td className="p-3">1-2 weeks</td>
                                        <td className="p-3">1 unit</td>
                                        <td className="p-3">❌</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium">Madix</td>
                                        <td className="p-3">🇺🇸 USA</td>
                                        <td className="p-3">$350-$600</td>
                                        <td className="p-3">2-3 weeks</td>
                                        <td className="p-3">1 unit</td>
                                        <td className="p-3">❌</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium">ULINE</td>
                                        <td className="p-3">🇺🇸 USA</td>
                                        <td className="p-3">$400-$700</td>
                                        <td className="p-3">Same day</td>
                                        <td className="p-3">1 unit</td>
                                        <td className="p-3">❌</td>
                                    </tr>
                                    <tr className="border-b bg-green-50">
                                        <td className="p-3 font-bold text-[var(--primary)]">Goodok ⭐</td>
                                        <td className="p-3">🇨🇳 China</td>
                                        <td className="p-3 text-green-600 font-medium">$80-$200</td>
                                        <td className="p-3">30-45 days</td>
                                        <td className="p-3">$3,000+</td>
                                        <td className="p-3">✅ Free</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium">Heda</td>
                                        <td className="p-3">🇨🇳 China</td>
                                        <td className="p-3 text-green-600">$50-$150</td>
                                        <td className="p-3">30-45 days</td>
                                        <td className="p-3">$2,000+</td>
                                        <td className="p-3">Limited</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium">iYubo</td>
                                        <td className="p-3">🇨🇳 China</td>
                                        <td className="p-3 text-green-600">$100-$250</td>
                                        <td className="p-3">35-50 days</td>
                                        <td className="p-3">$5,000+</td>
                                        <td className="p-3">✅ Free</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* China vs USA */}
            <section id="china-vs-usa" className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">China vs USA: Which is Right for You?</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    🇺🇸 Choose USA Manufacturer If:
                                </h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500">✓</span>
                                        <span>You need shelving within 1-2 weeks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500">✓</span>
                                        <span>You're ordering just 1-5 units</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500">✓</span>
                                        <span>Budget is not a primary concern</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500">✓</span>
                                        <span>You prefer local support and warranty</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-sm border-2 border-green-200">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    🇨🇳 Choose China Manufacturer If:
                                </h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span><strong>You want to save 30-50%</strong> on fixtures</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>You're fitting out an entire store</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>You need <strong>custom designs</strong> or branding</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>You can plan 6-8 weeks ahead</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>You want <strong>free 3D store design</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Choose */}
            <section id="how-to-choose" className="py-16 bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">How to Choose the Best Manufacturer</h2>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h3 className="font-bold mb-2">Calculate Your Total Order Value</h3>
                                    <p className="text-gray-600">If your fixture budget exceeds $5,000, importing from China becomes highly cost-effective even after shipping.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h3 className="font-bold mb-2">Check Lead Time Requirements</h3>
                                    <p className="text-gray-600">Plan your store opening. If you have 8+ weeks, China shipping is feasible. Need it faster? Go with US suppliers.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h3 className="font-bold mb-2">Request Samples or References</h3>
                                    <p className="text-gray-600">Ask for photos of completed projects. Reputable manufacturers will have case studies to share.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h3 className="font-bold mb-2">Compare Total Landed Cost</h3>
                                    <p className="text-gray-600">Include shipping, duties, and installation when comparing. Even with shipping, China is often 30-50% cheaper for larger orders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--primary)] text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Save 30-50% on Your Store Fixtures?
                        </h2>
                        <p className="text-xl opacity-90 mb-8">
                            Get a free quote from Goodok. We'll include shipping estimate and 3D design at no cost.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://api.whatsapp.com/send?phone=8613822102050"
                                className="btn bg-white text-[var(--primary)] hover:bg-gray-100"
                            >
                                WhatsApp Us Now
                            </a>
                            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]">
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8 text-center">Related Guides</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/resources/blog/gondola-shelving-dimensions" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold mb-2">Gondola Shelving Dimensions Guide</h3>
                            <p className="text-gray-600 text-sm">Standard sizes and how to choose the right dimensions.</p>
                        </Link>
                        <Link href="/resources/blog/gondola-shelving-buying-guide" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold mb-2">Gondola Shelving Buying Guide</h3>
                            <p className="text-gray-600 text-sm">Everything you need to know before purchasing.</p>
                        </Link>
                        <Link href="/resources/blog/retail-store-startup-cost" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold mb-2">Retail Store Startup Cost</h3>
                            <p className="text-gray-600 text-sm">Complete breakdown of store opening costs.</p>
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
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Who is the largest gondola shelving manufacturer?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Lozier Corporation is the largest gondola shelving manufacturer in the United States, founded in 1956. In China, there are numerous manufacturers including Goodok, Heda, and SuMetall that export globally."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much cheaper is gondola shelving from China?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Gondola shelving from China typically costs 30-50% less than US-made equivalents. A starter unit that costs $400-$700 from US brands like Lozier or ULINE may cost $80-$200 from Chinese factories like Goodok."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is it worth importing gondola shelving from China?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, if your order exceeds $5,000 and you can plan 6-8 weeks ahead. Even with shipping costs, you can save 30-50% compared to buying from US distributors. Many Chinese manufacturers also offer free 3D design services."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
