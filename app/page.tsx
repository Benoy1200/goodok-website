import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ClientTestimonials from "@/components/ClientTestimonials";
import HeroCarousel from "@/components/HeroCarousel";
import ProductImageCarousel from "@/components/ProductImageCarousel";

export const metadata: Metadata = {
  title: {
    default: "Goodok Shopfitting | Professional Retail Display & Store Fixtures",
    template: "%s | Goodok Shopfitting"
  },
  description: "Professional retail shelving, display cases, and custom store fixtures. 15+ years experience, free 3D design, global shipping."
};

// Product categories (6 products)
const products = [
  {
    name: "Checkout Counters",
    description: "Modern checkout counters and POS systems for retail stores",
    href: "/products/checkout-counters",
    images: [
      "/images/products/Checkout-Counters/Camera008_20220719090946233.jpg",
      "/images/products/Checkout-Counters/SYT-009收银台.jpg",
      "/images/products/Checkout-Counters/收银台001_25071204413944b8b-1.jpg",
      "/images/products/Checkout-Counters/收银台005-弧形侧柜_25071204413944b8b-2.jpg"
    ]
  },
  {
    name: "Wall Shelving",
    description: "Space-saving wall-mounted display systems",
    href: "/products/wall-shelving",
    images: [
      "/images/products/wall-shelving/BG-001边柜.jpg",
      "/images/products/wall-shelving/BG-005边柜.jpg",
      "/images/products/wall-shelving/BG-006边柜.jpg",
      "/images/products/wall-shelving/BG-007边柜.jpg"
    ]
  },
  {
    name: "Gondola Shelving",
    description: "Versatile double-sided shelving for supermarkets and retail stores",
    href: "/products/gondola-shelving",
    images: [
      "/images/products/gondola-shelving/Camera112_20211126021844215-6.jpg",
      "/images/products/gondola-shelving/CZ-003.jpg",
      "/images/products/gondola-shelving/CZ-006.jpg",
      "/images/products/gondola-shelving/DM-11-挂摆中柜.jpg"
    ]
  },
  {
    name: "Island Display Table",
    description: "Elegant display tables for featured products and promotions",
    href: "/products/display-cases",
    images: [
      "/images/products/Island-Display-Table/Camera008_20220714062421090-2.jpg",
      "/images/products/Island-Display-Table/Camera008_20220714063054658-2.jpg",
      "/images/products/Island-Display-Table/Camera008_20220714065430960.jpg",
      "/images/products/Island-Display-Table/CC_2507110996bc81212-20.CC_Xdk.0000.jpg"
    ]
  },
  {
    name: "Clothing Racks",
    description: "Elegant garment displays for boutiques and fashion stores",
    href: "/products/clothing-racks",
    images: [
      "/images/products/clothing-racks/1000中岛架.jpg",
      "/images/products/clothing-racks/1200中岛架-1.jpg",
      "/images/products/clothing-racks/1200中岛架.jpg",
      "/images/products/clothing-racks/1300中岛架1.jpg"
    ]
  },
  {
    name: "Accessories",
    description: "Versatile display accessories and retail fixtures",
    href: "/products/accessories",
    images: [
      "/images/products/Versatile-Accessories/DM-D-1-橱窗高标价牌.jpg",
      "/images/products/Versatile-Accessories/DM-D-2-橱窗矮标价牌.jpg",
      "/images/products/Versatile-Accessories/DM-D-4-帽子架.jpg",
      "/images/products/Versatile-Accessories/ME48铁艺头枕架.jpg"
    ]
  },
];

// Industry solutions (6 solutions)
const solutions = [
  {
    name: "Pop Culture Store",
    description: "Display collectibles, figures, and trendy items",
    href: "/solutions/pop-culture",
    image: "/images/scenes/pop-culture.jpg",
  },
  {
    name: "Stationery Store",
    description: "Organized displays for pens, notebooks, and accessories",
    href: "/solutions/stationery",
    image: "/images/scenes/watch-shop.jpg",
  },
  {
    name: "Jewelry Store",
    description: "Secure, elegant showcases for precious items",
    href: "/solutions/jewelry-store",
    image: "/images/scenes/jewelry-store.jpg",
  },
  {
    name: "Boutique",
    description: "Fashion-forward displays for clothing and accessories",
    href: "/solutions/boutique",
    image: "/images/scenes/boutique-shop.jpg",
  },
  {
    name: "Toy Store",
    description: "Fun, safe, and accessible toy displays",
    href: "/solutions/toy-store",
    image: "/images/scenes/toy-store.jpg",
  },
  {
    name: "Lifestyle Store",
    description: "Home goods and lifestyle product displays",
    href: "/solutions/lifestyle",
    image: "/images/scenes/cosmetics-store.jpg",
  },
];

// FAQ data
const faqs = [
  {
    question: "Can you make a design for my store?",
    answer: "Yes, we have professional designers to make 3D renderings and engineering drawings. This service is completely free."
  },
  {
    question: "How long does it take to produce?",
    answer: "Generally, it takes 2 to 4 weeks after you approve drawings, depending on order complexity."
  },
  {
    question: "How much time for a custom design?",
    answer: "Our team typically delivers 3D designs within 24 hours of receiving your store dimensions and requirements."
  },
  {
    question: "What materials do you use?",
    answer: "We use high-quality materials including tempered glass, stainless steel 304, aluminum alloy, and MDF with various finishes."
  },
  {
    question: "Is it possible to fully customize?",
    answer: "Absolutely! We can customize size, color, material, lighting, and any specific features you need."
  },
  {
    question: "Do I need to install locally?",
    answer: "We provide detailed installation guides and video tutorials. Most fixtures are designed for easy DIY assembly."
  },
  {
    question: "I haven't imported from China, how to order?",
    answer: "We handle everything - from design to shipping. Many first-time importers work with us successfully."
  },
  {
    question: "What if items get damaged in shipping?",
    answer: "We use triple-layer packaging and offer insurance. Any damage claims are resolved within 48 hours."
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="h-[80vh] relative overflow-hidden">
        <HeroCarousel />
        
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16 pb-8">
          <div className="container">
            <div className="flex flex-col items-center text-center gap-2 md:gap-3 max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-outline-white animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
                Professional Retail Display Solutions
              </h1>
              <p className="text-gray-300 text-sm md:text-base animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s' }}>
                Free 3D Design · Factory Direct · Global Shipping
              </p>
              <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s' }}>
                <Link
                  href="/free-3d-design"
                  className="btn btn-accent px-6 py-3 whitespace-nowrap hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                >
                  Get Free 3D Design
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions - Image Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-gray-600 text-lg">Tailored fixtures for every retail sector</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.name}
                href={solution.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--accent)] transition-colors">{solution.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {solution.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Store Display Solutions - Updated with Carousel */}
      <section className="py-24 bg-[#f8f9fa]">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-1"
              >
                {/* Image Carousel Area */}
                <ProductImageCarousel images={product.images} alt={product.name} />

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="text-[var(--accent)] font-semibold text-sm flex items-center gap-2 mt-auto">
                    View Products
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Happy Clients</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto"></div>
          </div>
          <ClientTestimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-[var(--accent)] text-lg">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline"
            >
              Contact us directly
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
