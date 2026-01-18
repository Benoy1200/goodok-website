import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Apparel Boutique Display Fixtures | Clothing Store Solutions",
  description:
    "Elegant display solutions for clothing boutiques and fashion stores. Garment racks, fitting room accessories, and modern fixtures. Free 3D design.",
  keywords: [
    "boutique fixtures",
    "clothing store displays",
    "garment racks",
    "fashion retail fixtures",
    "apparel store shelving",
  ],
};

const featuredProducts = [
  {
    name: "Clothing Racks",
    description: "Elegant garment displays for showcasing your fashion collection",
    image: "/images/products/clothing-racks/1000中岛架.jpg",
    badge: "Popular",
  },
  {
    name: "Island Display Tables",
    description: "Featured display tables for folded items and accessories",
    image: "/images/products/Island-Display-Table/Camera008_20220714062421090-2.jpg",
    badge: "Best Seller",
  },
  {
    name: "Wall Display Systems",
    description: "Versatile wall-mounted systems for maximizing vertical space",
    image: "/images/products/wall-shelving/BG-005边柜.jpg",
  },
  {
    name: "Accessories Display",
    description: "Specialized fixtures for jewelry, bags, and fashion accessories",
    image: "/images/products/Versatile-Accessories/DM-D-4-帽子架.jpg",
  },
  {
    name: "Checkout Counters",
    description: "Stylish POS counters that complement your store aesthetic",
    image: "/images/products/Checkout-Counters/收银台001_25071204413944b8b-1.jpg",
  },
  {
    name: "Gondola Displays",
    description: "Double-sided fixtures for center floor merchandise",
    image: "/images/products/gondola-shelving/CZ-003.jpg",
  },
];

const painPoints = [
  {
    icon: "✨",
    title: "Premium Aesthetics",
    description: "Elegant fixtures that enhance your brand image and attract fashion-conscious customers.",
  },
  {
    icon: "👗",
    title: "Garment-Friendly",
    description: "Designed to display clothing without damage. Proper spacing and quality hangers included.",
  },
  {
    icon: "📐",
    title: "Space Optimization",
    description: "Maximize your retail space with efficient layouts that showcase more products.",
  },
];

export default function ApparelBoutiquePage() {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-rose-900 via-pink-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/scenes/boutique-shop.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative container h-full flex items-center">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-rose-500/20 text-rose-300 rounded-full text-sm font-medium mb-4">
              Fashion Retail Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apparel Boutique Display Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create a stunning shopping experience with our premium clothing store fixtures. 
              Elegant designs that showcase your fashion collection beautifully.
            </p>
            <Link
              href="/free-3d-design"
              className="btn btn-accent text-lg px-8 py-4"
            >
              Get Free 3D Design
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
              Featured Products for Clothing Boutiques
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Curated selection of elegant fixtures designed to elevate your fashion retail space.
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
                    <span className="absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
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
      <section className="py-20 bg-gradient-to-br from-rose-900 to-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Boutique?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free 3D design of your store layout. Our team will create a custom plan 
            that reflects your brand&apos;s unique style.
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
