import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Gondola Shelving Buying Guide: Types, Costs & Best Uses | Goodok",
    description: "Complete gondola shelving guide. Compare single vs double-sided, learn pricing ($150-$800), and find the best type for your store. Free quotes available.",
    keywords: [
        "gondola shelving",
        "gondola racks",
        "retail shelving",
        "store fixtures",
        "aisle displays",
        "double-sided shelving",
        "gondola shelving cost",
        "buy gondola shelving",
    ],
    openGraph: {
        title: "Gondola Shelving Buying Guide: Types, Costs & Best Uses",
        description: "Complete gondola shelving guide. Compare types, learn pricing ($150-$800), and find the best fit for your store.",
        type: "article",
    },
};

const faqItems = [
    {
        question: "How much does gondola shelving cost?",
        answer: "Gondola shelving costs $150-$400 per section for standard units. Heavy-duty or premium finishes range $400-$800. Bulk orders (20+ sections) typically receive 15-25% discounts. Installation adds $20-$50 per unit if not DIY."
    },
    {
        question: "What is the difference between single-sided and double-sided gondola shelving?",
        answer: "Single-sided gondolas mount against walls with one display face. Double-sided (island) gondolas stand freely with displays on both sides. Double-sided units are ideal for aisle centers and maximize floor space efficiency."
    },
    {
        question: "How long does gondola shelving last?",
        answer: "Quality steel gondola shelving lasts 15-25 years with proper use. Powder-coated finishes resist scratches and rust. Key durability factors: steel gauge thickness, weld quality, and weight capacity adherence."
    },
    {
        question: "Can I mix different gondola shelving brands?",
        answer: "Not recommended. Upright post slot patterns, shelf brackets, and accessory hooks vary between manufacturers. Mixing brands causes compatibility issues. Stick with one supplier for your entire store."
    },
    {
        question: "What accessories do I need for gondola shelving?",
        answer: "Essential accessories: shelf dividers ($5-$15), price tag holders ($2-$8), end caps ($50-$150), peg hooks ($1-$3), and shelf liners. Optional: sign holders, banner frames, and LED lighting kits."
    }
];

export default function GondolaShelvingBuyingGuide() {
    return (
        <article className="pt-24">
            <ArticleSchema 
                headline="The Complete Gondola Shelving Buying Guide: Everything You Need to Know"
                description="Complete gondola shelving guide covering types, pricing, installation, and best practices for retail stores."
                datePublished="2026-01-10"
                author="Goodok Shopfitting"
                image="/images/blog/blog_gondola_shelving_1767944001034.png"
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
                                Buying Guide
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            The Complete Gondola Shelving Buying Guide: Everything You Need to Know (2026)
                        </h1>

                        <p className="text-xl text-gray-600 mb-6">
                            Everything you need to know before purchasing gondola shelving: types, pricing, 
                            installation tips, and how to choose the right configuration for your store.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>📅 January 10, 2026</span>
                            <span>📖 15 min read</span>
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

                                {/* Featured Image */}
                                <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-md not-prose">
                                    <Image 
                                        src="/images/blog/blog_gondola_shelving_1767944001034.png" 
                                        alt="Gondola Shelving in a Modern Retail Store"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Key Takeaways */}
                                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4 text-blue-900">📌 Key Takeaways</h2>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Gondola shelving costs <strong>$150-$800 per section</strong> depending on size and finish</li>
                                        <li>• Choose <strong>single-sided for walls</strong>, <strong>double-sided for aisles</strong></li>
                                        <li>• Standard height: <strong>72&quot;</strong> for supermarkets, <strong>54&quot;-60&quot;</strong> for boutiques</li>
                                        <li>• Quality steel gondolas last <strong>15-25 years</strong> with proper use</li>
                                        <li>• Factory-direct buying saves <strong>30-50%</strong> vs retail distributors</li>
                                    </ul>
                                    <p className="text-xs text-gray-500 mt-3 italic">* Prices are typical ranges. Actual costs vary by specifications and order quantity.</p>
                                </div>

                                {/* TOC */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-8 not-prose">
                                    <h2 className="text-lg font-bold mb-4">📚 What&apos;s In This Guide</h2>
                                    <ul className="space-y-2 text-gray-600">
                                        <li><a href="#what-is" className="hover:text-[var(--accent)]">1. What is Gondola Shelving?</a></li>
                                        <li><a href="#types" className="hover:text-[var(--accent)]">2. Types of Gondola Shelving</a></li>
                                        <li><a href="#pricing" className="hover:text-[var(--accent)]">3. Gondola Shelving Pricing Guide</a></li>
                                        <li><a href="#how-to-choose" className="hover:text-[var(--accent)]">4. How to Choose the Right Gondola</a></li>
                                        <li><a href="#installation" className="hover:text-[var(--accent)]">5. Installation Tips</a></li>
                                        <li><a href="#accessories" className="hover:text-[var(--accent)]">6. Essential Accessories</a></li>
                                        <li><a href="#where-to-buy" className="hover:text-[var(--accent)]">7. Where to Buy Gondola Shelving</a></li>
                                    </ul>
                                </div>

                                {/* Section 1 */}
                                <h2 id="what-is">1. What is Gondola Shelving?</h2>
                                
                                <p>
                                    Gondola shelving is the industry-standard retail display system used in supermarkets, 
                                    convenience stores, pharmacies, and specialty retail. The name comes from the gondola-like 
                                    shape of freestanding aisle units when viewed from above.
                                </p>

                                <p>
                                    Unlike wall-mounted systems, gondola shelving features a <strong>modular design</strong> with 
                                    vertical uprights, adjustable shelves, and standardized accessories. This modularity means 
                                    you can reconfigure layouts as your merchandising needs change.
                                </p>

                                <h3>Key Components</h3>
                                <ul>
                                    <li><strong>Uprights (Posts):</strong> Vertical steel columns with slot patterns for shelf attachment</li>
                                    <li><strong>Base Deck:</strong> The bottom shelf, typically deeper than upper shelves</li>
                                    <li><strong>Upper Shelves:</strong> Adjustable shelves that hook into upright slots</li>
                                    <li><strong>Back Panels:</strong> Pegboard or solid panels for hanging merchandise</li>
                                    <li><strong>End Caps:</strong> Display units at aisle ends for promotional items</li>
                                </ul>

                                {/* Section 2 */}
                                <h2 id="types">2. Types of Gondola Shelving</h2>

                                <h3>Single-Sided (Wall Units)</h3>
                                <p>
                                    Single-sided gondolas display products on one face only. They&apos;re designed to mount 
                                    against walls or attach to wall-mounted systems.
                                </p>
                                <ul>
                                    <li><strong>Best for:</strong> Perimeter walls, back walls, small stores</li>
                                    <li><strong>Depth:</strong> 16&quot;-22&quot; base, 10&quot;-16&quot; upper shelves</li>
                                    <li><strong>Cost:</strong> $150-$300 per section</li>
                                </ul>
                                <p>
                                    <Link href="/products/wall-shelving" className="text-[var(--accent)] hover:underline">
                                        View our wall shelving options →
                                    </Link>
                                </p>

                                <h3>Double-Sided (Island/Aisle Units)</h3>
                                <p>
                                    Double-sided gondolas stand freely with product displays on both sides. They create 
                                    store aisles and maximize floor space efficiency.
                                </p>
                                <ul>
                                    <li><strong>Best for:</strong> Store center aisles, large retail spaces</li>
                                    <li><strong>Depth:</strong> 32&quot;-48&quot; total (both sides combined)</li>
                                    <li><strong>Cost:</strong> $250-$500 per section</li>
                                </ul>
                                <p>
                                    <Link href="/products/gondola-shelving" className="text-[var(--accent)] hover:underline">
                                        Explore our gondola shelving collection →
                                    </Link>
                                </p>

                                <h3>End Caps</h3>
                                <p>
                                    End caps attach to the ends of gondola runs, creating high-visibility promotional spaces. 
                                    These premium positions drive 3-5x higher sales than mid-aisle placements.
                                </p>
                                <ul>
                                    <li><strong>Best for:</strong> Promotions, new products, seasonal items</li>
                                    <li><strong>Cost:</strong> $100-$250 per unit</li>
                                </ul>

                                {/* Section 3 */}
                                <h2 id="pricing">3. Gondola Shelving Pricing Guide</h2>

                                <p>
                                    Gondola shelving prices vary based on size, material quality, finish, and supplier. 
                                    Here&apos;s what to expect in 2026:
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Type</th>
                                                <th className="px-4 py-3 text-left">Price Range</th>
                                                <th className="px-4 py-3 text-left">What&apos;s Included</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Basic Single-Sided</td>
                                                <td className="px-4 py-3">$150-$250</td>
                                                <td className="px-4 py-3">2 uprights, base, 4 shelves, back panel</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Standard Double-Sided</td>
                                                <td className="px-4 py-3">$250-$400</td>
                                                <td className="px-4 py-3">4 uprights, 2 bases, 8 shelves, 2 back panels</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Heavy-Duty</td>
                                                <td className="px-4 py-3">$400-$600</td>
                                                <td className="px-4 py-3">Thicker steel, higher weight capacity</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Premium/Custom Finish</td>
                                                <td className="px-4 py-3">$500-$800</td>
                                                <td className="px-4 py-3">Custom colors, wood accents, specialty materials</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-sm text-gray-500 italic mb-4">
                                    <strong>Note:</strong> Prices shown are typical ranges and vary based on specifications, order quantity, and customization. Contact us for an exact quote.
                                </p>

                                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r my-6">
                                    <p className="text-green-800">
                                        <strong>💰 Pro Tip:</strong> Buying factory-direct from manufacturers like Goodok 
                                        saves 30-50% compared to retail distributors. Minimum orders typically start at 
                                        10-20 sections for best pricing.
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <h2 id="how-to-choose">4. How to Choose the Right Gondola Shelving</h2>

                                <h3>Step 1: Define Your Store Type</h3>
                                <ul>
                                    <li><strong>Convenience Store:</strong> 54&quot;-60&quot; height, 36&quot; width, compact depths</li>
                                    <li><strong>Supermarket:</strong> 72&quot; height, 48&quot; width, 19&quot;-22&quot; depth</li>
                                    <li><strong>Boutique:</strong> 48&quot;-54&quot; height, 36&quot; width, premium finishes</li>
                                    <li><strong>Pharmacy:</strong> 60&quot; height, 36&quot; width, 16&quot;-19&quot; depth</li>
                                </ul>

                                <h3>Step 2: Measure Your Space</h3>
                                <p>Before ordering, measure:</p>
                                <ul>
                                    <li>Total floor space available for gondolas</li>
                                    <li>Ceiling height (leave 12&quot;-18&quot; clearance)</li>
                                    <li>Desired aisle width (42&quot;-48&quot; recommended)</li>
                                    <li>Wall lengths for perimeter shelving</li>
                                </ul>

                                <h3>Step 3: Calculate Quantity Needed</h3>
                                <p className="bg-[#f8f9fa] border-l-4 border-[#ff6b35] p-4 rounded-r">
                                    📐 <strong>Formula:</strong> Store length ÷ Section width = Sections per run<br/>
                                    Example: 48 ft wall ÷ 4 ft sections = 12 sections needed
                                </p>

                                <p>
                                    For detailed dimension guidance, see our{" "}
                                    <Link href="/resources/blog/gondola-shelving-dimensions" className="text-[var(--accent)] hover:underline">
                                        Gondola Shelving Dimensions Guide
                                    </Link>.
                                </p>

                                {/* Section 5 */}
                                <h2 id="installation">5. Installation Tips</h2>

                                <h3>DIY vs Professional Installation</h3>
                                <p>
                                    Gondola shelving is designed for easy assembly. Most retailers can self-install 
                                    with basic tools. However, consider professional help for:
                                </p>
                                <ul>
                                    <li>Large stores with 50+ sections</li>
                                    <li>Complex custom configurations</li>
                                    <li>Tight deadlines (new store openings)</li>
                                </ul>

                                <h3>Installation Best Practices</h3>
                                <ol>
                                    <li><strong>Level the floor:</strong> Uneven floors cause wobbly units</li>
                                    <li><strong>Start from corners:</strong> Work outward for better alignment</li>
                                    <li><strong>Use leveling feet:</strong> Adjust for floor imperfections</li>
                                    <li><strong>Connect sections:</strong> Link uprights for stability</li>
                                    <li><strong>Anchor end units:</strong> Secure freestanding ends to floor</li>
                                </ol>

                                {/* Section 6 */}
                                <h2 id="accessories">6. Essential Accessories</h2>

                                <p>
                                    The right accessories maximize your gondola&apos;s merchandising potential. 
                                    Check out our complete{" "}
                                    <Link href="/products/accessories" className="text-[var(--accent)] hover:underline">
                                        accessories collection
                                    </Link>.
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Accessory</th>
                                                <th className="px-4 py-3 text-left">Price Range</th>
                                                <th className="px-4 py-3 text-left">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Shelf Dividers</td>
                                                <td className="px-4 py-3">$5-$15</td>
                                                <td className="px-4 py-3">Organize products, prevent mixing</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Price Tag Rails</td>
                                                <td className="px-4 py-3">$2-$8</td>
                                                <td className="px-4 py-3">Display pricing, promotions</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Peg Hooks</td>
                                                <td className="px-4 py-3">$1-$3</td>
                                                <td className="px-4 py-3">Hang packaged products</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">Sign Holders</td>
                                                <td className="px-4 py-3">$10-$30</td>
                                                <td className="px-4 py-3">Category headers, promotions</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-4 py-3 font-medium">LED Light Kits</td>
                                                <td className="px-4 py-3">$50-$150</td>
                                                <td className="px-4 py-3">Highlight products, premium look</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Section 7 */}
                                <h2 id="where-to-buy">7. Where to Buy Gondola Shelving</h2>

                                <h3>Option 1: Factory-Direct (Recommended)</h3>
                                <p>
                                    Buying directly from manufacturers offers the best value. You get wholesale pricing, 
                                    customization options, and direct support.
                                </p>
                                <ul>
                                    <li><strong>Savings:</strong> 30-50% vs distributors</li>
                                    <li><strong>Lead time:</strong> 3-6 weeks for standard, 6-8 weeks for custom</li>
                                    <li><strong>MOQ:</strong> Usually 10-20 sections</li>
                                </ul>

                                <h3>Option 2: Local Distributors</h3>
                                <p>
                                    Distributors offer faster delivery and smaller quantities but at higher prices. 
                                    Good for urgent needs or small orders.
                                </p>

                                <h3>Option 3: Used/Refurbished</h3>
                                <p>
                                    Store liquidations offer 50-70% savings on used gondolas. Inspect carefully for 
                                    rust, bent uprights, and missing components.
                                </p>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r my-6">
                                    <p className="text-blue-800">
                                        <strong>🏭 About Goodok:</strong> We&apos;re a factory-direct gondola shelving 
                                        manufacturer with 15+ years experience. We offer competitive wholesale pricing, 
                                        custom finishes, and free 3D store layout design.
                                    </p>
                                </div>

                                <h2>Ready to Get Started?</h2>
                                <p>
                                    Whether you&apos;re outfitting a new store or upgrading existing fixtures, we&apos;re 
                                    here to help. Send us your floor plan and we&apos;ll provide a custom quote with 
                                    a free 3D layout showing your gondola configuration.
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
                                        Get a 3D visualization of your gondola configuration!
                                    </p>
                                    <Link
                                        href="/free-3d-design"
                                        className="block w-full bg-white text-[var(--primary)] font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                                    >
                                        Get Free Design
                                    </Link>
                                </div>

                                <div className="bg-[#f8f9fa] rounded-xl p-6">
                                    <h3 className="font-bold mb-3">💬 Need Advice?</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Chat with our team for recommendations.
                                    </p>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=8613822102050&text=Hi%20I%20need%20help%20choosing%20gondola%20shelving"
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
                                            <Link href="/resources/blog/gondola-shelving-dimensions" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Gondola Shelving Dimensions Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/resources/blog/gondola-vs-wall-shelving" className="text-gray-600 hover:text-[var(--accent)] text-sm">
                                                Gondola vs Wall Shelving
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
                        Factory-direct pricing, custom finishes available. Free 3D store layout included with every quote.
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
