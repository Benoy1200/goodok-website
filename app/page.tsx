import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Goodok Shopfitting | Professional Retail Display & Store Fixtures",
    template: "%s | Goodok Shopfitting"
  },
  description: "Professional retail shelving, display cases, and custom store fixtures. 15+ years experience, free 3D design, global shipping."
};

// Product categories for showcase
const productCategories = [
  {
    name: "Gondola Shelving",
    description: "Versatile double-sided shelving for supermarkets and retail stores",
    href: "/products/gondola-shelving",
    icon: "🏪",
  },
  {
    name: "Wall Shelving",
    description: "Space-saving wall-mounted display systems",
    href: "/products/wall-shelving",
    icon: "📐",
  },
  {
    name: "Display Cases",
    description: "Glass showcases for jewelry, cosmetics, and premium products",
    href: "/products/display-cases",
    icon: "💎",
  },
  {
    name: "Clothing Racks",
    description: "Elegant garment displays for boutiques and fashion stores",
    href: "/products/clothing-racks",
    icon: "👔",
  },
  {
    name: "Custom Fixtures",
    description: "Bespoke solutions designed for your unique store concept",
    href: "/products/custom-fixtures",
    icon: "✨",
  },
  {
    name: "Store Design",
    description: "Complete store layout planning and 3D visualization",
    href: "/free-3d-design",
    icon: "🎨",
  },
];

// Trust indicators
const stats = [
  { number: "500+", label: "Stores Delivered" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Countries Served" },
  { number: "24h", label: "3D Design Delivery" },
];

// Industries served
const industries = [
  { name: "Pop Culture Store (潮玩店)", icon: "🎮", href: "/solutions/pop-culture" },
  { name: "Stationery Store (文具店)", icon: "✏️", href: "/solutions/stationery" },
  { name: "Jewelry Store (珠宝店)", icon: "💎", href: "/solutions/jewelry-store" },
  { name: "Boutique (精品店)", icon: "👗", href: "/solutions/boutique" },
  { name: "Toy Store (玩具店)", icon: "🧸", href: "/solutions/toy-store" },
  { name: "Lifestyle Store (生活馆)", icon: "🏠", href: "/solutions/lifestyle" },
];

// Features
const features = [
  {
    title: "Free 3D Design",
    description: "Get a professional 3D store layout within 24 hours. Visualize your dream store before ordering.",
    icon: "🎯",
  },
  {
    title: "Factory Direct Pricing",
    description: "Cut out the middleman. Work directly with our manufacturing facility for the best prices.",
    icon: "💰",
  },
  {
    title: "Global Shipping",
    description: "We ship to over 50 countries. Professional packing ensures safe delivery worldwide.",
    icon: "🌍",
  },
  {
    title: "Installation Support",
    description: "Step-by-step installation guides and video tutorials. Remote support when you need it.",
    icon: "🔧",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Now Serving USA, Middle East &amp; Southeast Asia
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transform Empty Rooms Into
              <span className="text-blue-400"> Profitable Stores</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional retail display solutions from China&apos;s leading manufacturer.
              Get your <strong className="text-white">FREE 3D store design</strong> in 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/free-3d-design"
                className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Get Free 3D Design
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Store Display Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From single shelving units to complete store fit-outs, we provide everything you need
              to create a stunning retail environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="card p-6 group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
                <div className="mt-4 text-blue-600 font-medium flex items-center gap-2">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We understand that different retail sectors have unique display requirements.
              Explore solutions tailored for your industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="card p-4 text-center group hover:border-blue-500"
              >
                <div className="text-3xl mb-2">{industry.icon}</div>
                <h3 className="font-medium text-sm group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/solutions" className="btn btn-secondary">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Store Owners Choose Goodok
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              We&apos;re not just a supplier – we&apos;re your partner in creating successful retail spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
