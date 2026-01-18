import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Beauty & Nail Salon Display Fixtures | Salon Furniture Solutions",
  description:
    "Professional display solutions for beauty salons, nail spas, and cosmetic stores. Product displays, salon furniture, and retail fixtures. Free 3D design.",
  keywords: [
    "beauty salon fixtures",
    "nail salon displays",
    "cosmetic store shelving",
    "salon furniture",
    "spa retail fixtures",
  ],
};

const featuredProducts = [
  {
    name: "Cosmetic Display Cases",
    description: "Elegant glass cases for showcasing premium beauty products and skincare",
    image: "/images/products/display-cases/Camera008_20220714065430960.jpg",
    badge: "Popular",
  },
  {
    name: "Wall Display Systems",
    description: "Organized wall units for nail polish, beauty products, and retail items",
    image: "/images/products/wall-shelving/BG-006边柜.jpg",
    badge: "Best Seller",
  },
  {
    name: "Product Shelving",
    description: "Versatile shelving for displaying beauty supplies and accessories",
    image: "/images/products/gondola-shelving/DM-11-挂摆中柜.jpg",
  },
  {
    name: "Reception Counters",
    description: "Professional front desk solutions with retail display integration",
    image: "/images/products/Checkout-Counters/收银台005-弧形侧柜_25071204413944b8b-2.jpg",
  },
  {
    name: "Accessory Displays",
    description: "Specialized fixtures for jewelry, hair accessories, and small items",
    image: "/images/products/Versatile-Accessories/ME48铁艺头枕架.jpg",
  },
  {
    name: "Island Display Tables",
    description: "Featured tables for promotional products and new arrivals",
    image: "/images/products/Island-Display-Table/CC_2507110996bc81212-20.CC_Xdk.0000.jpg",
  },
];

const painPoints = [
  {
    icon: "💄",
    title: "Product Visibility",
    description: "Display cases designed to showcase beauty products with proper lighting and easy access.",
  },
  {
    icon: "🌸",
    title: "Elegant Design",
    description: "Modern, clean aesthetics that complement the beauty salon atmosphere your clients expect.",
  },
  {
    icon: "📦",
    title: "Retail Integration",
    description: "Seamlessly blend retail displays with service areas to boost product sales.",
  },
];

export default function BeautySalonPage() {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-pink-900 via-fuchsia-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/scenes/cosmetics-store.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative container h-full flex items-center">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium mb-4">
              Beauty Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beauty & Nail Salon Display Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create a luxurious retail experience in your beauty salon or nail spa. 
              Professional fixtures that showcase products and boost retail sales.
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
              Featured Products for Beauty & Nail Salons
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Curated selection of elegant fixtures designed to elevate your beauty salon retail experience.
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
                    <span className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
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
      <section className="py-20 bg-gradient-to-br from-pink-900 to-purple-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Salon?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free 3D design of your retail area. Our team will create a custom plan 
            that maximizes your product display and sales potential.
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
