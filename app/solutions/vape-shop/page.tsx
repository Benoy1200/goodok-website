import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vape & Smoke Shop Display Fixtures | Store Shelving Solutions",
  description:
    "Professional display solutions for vape shops, smoke shops, and CBD stores. Anti-theft cases, LED lighting, quick restock systems. Free 3D design.",
  keywords: [
    "vape shop fixtures",
    "smoke shop display cases",
    "vape store shelving",
    "CBD display solutions",
    "tobacco shop fixtures",
  ],
};

// Products suitable for vape shops (20% specialized + 80% general)
const featuredProducts = [
  // Specialized items (20%)
  {
    name: "LED Display Cases",
    description: "Secure glass cases with integrated LED lighting for showcasing premium vape products",
    image: "/images/products/Island-Display-Table/Camera008_20220714062421090-2.jpg",
    badge: "Anti-Theft",
  },
  {
    name: "Blister Pack Hooks",
    description: "Heavy-duty hooks designed for hanging vape cartridges and accessories",
    image: "/images/products/Versatile-Accessories/DM-D-1-橱窗高标价牌.jpg",
    badge: "Best Seller",
  },
  {
    name: "Countertop Displays",
    description: "Point-of-sale displays for impulse purchase items near checkout",
    image: "/images/products/Checkout-Counters/SYT-009收银台.jpg",
    badge: "New",
  },
  // General items (80%)
  {
    name: "Wall Shelving Units",
    description: "Customizable wall-mounted shelves for maximum product visibility",
    image: "/images/products/wall-shelving/BG-001边柜.jpg",
  },
  {
    name: "Gondola Shelving",
    description: "Double-sided freestanding shelves for center floor displays",
    image: "/images/products/gondola-shelving/Camera112_20211126021844215-6.jpg",
  },
  {
    name: "Checkout Counters",
    description: "Professional POS counters with built-in storage and display areas",
    image: "/images/products/Checkout-Counters/Camera008_20220719090946233.jpg",
  },
];

const painPoints = [
  {
    icon: "🔒",
    title: "Anti-Theft Protection",
    description: "Secure locking cases for high-value items. Reduce shrinkage with our tamper-proof designs.",
  },
  {
    icon: "💡",
    title: "LED Lighting",
    description: "Integrated lighting systems that make your products stand out and attract customers.",
  },
  {
    icon: "⚡",
    title: "Quick Restock",
    description: "Easy-access shelving systems designed for fast inventory turnover and restocking.",
  },
];

export default function VapeShopPage() {
  return (
    <div className="pt-24">
      {/* Hero Banner - Image on top, text below */}
      <section>
        {/* Hero Image */}
        <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
          <Image
            src="/images/scenes/pop-culture.jpg"
            alt="Vape shop display fixtures"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Hero Text - Centered, no background */}
        <div className="container py-12 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              Specialized Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vape & Smoke Shop Display Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional fixtures designed for vape shops, smoke shops, and CBD stores. 
              Maximize product visibility while ensuring security.
            </p>
            <Link
              href="/free-3d-design"
              className="btn btn-accent text-lg px-8 py-4"
            >
              Get Free Layout Design
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point) => (
              <div key={point.title} className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products for Vape & Smoke Shops
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Curated selection of display fixtures designed to meet the unique needs of your vape or smoke shop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Vape Shop?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free 3D design of your store layout. Our team will create a custom plan 
            optimized for your specific space and products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-3d-design" className="btn btn-accent text-lg px-8 py-4">
              Start Free Design
            </Link>
            <Link href="/contact" className="btn bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-4">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
