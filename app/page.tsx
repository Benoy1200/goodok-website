import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ClientTestimonials from "@/components/ClientTestimonials";
import HeroCarousel from "@/components/HeroCarousel";

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
    name: "Gondola Shelving",
    description: "Versatile double-sided shelving for supermarkets and retail stores",
    href: "/products/gondola-shelving",
    image: "/images/products/gondola-shelving.jpg",
  },
  {
    name: "Wall Shelving",
    description: "Space-saving wall-mounted display systems",
    href: "/products/wall-shelving",
    image: "/images/products/wall-shelving.jpg",
  },
  {
    name: "Display Cases",
    description: "Glass showcases for jewelry, cosmetics, and premium products",
    href: "/products/display-cases",
    image: "/images/products/display-cases.jpg",
  },
  {
    name: "Clothing Racks",
    description: "Elegant garment displays for boutiques and fashion stores",
    href: "/products/clothing-racks",
    image: "/images/products/clothing-racks.jpg",
  },
  {
    name: "Checkout Counters",
    description: "Modern checkout counters and POS systems for retail stores",
    href: "/products/checkout-counters", // Fixed fallback if needed
    image: "/images/products/checkout-counters.jpg",
  },
  {
    name: "Custom Fixtures",
    description: "Bespoke solutions designed for your unique store concept",
    href: "/products/custom-fixtures",
    image: "/images/products/custom-fixtures.jpg",
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

// Hero stats
const heroStats = [
  { number: "500+", label: "Stores Delivered" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Countries Served" },
  { number: "24h", label: "3D Design Delivery" },
];

// About stats (Ujoy style - larger numbers)
const aboutStats = [
  { number: "15+", label: "Years of Excellence" },
  { number: "15,000", label: "Square Meters Factory" },
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Countries Served" },
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

// Why choose us features
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
      <section className="h-[80vh] relative overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel />

        {/* Bottom content area */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16 pb-8">
          <div className="container">
            <div className="flex flex-col items-center text-center gap-2 md:gap-3 max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-outline-white">
                Professional Retail Display Solutions
              </h1>
              <p className="text-gray-300 text-sm md:text-base">
                Free 3D Design · Factory Direct · Global Shipping
              </p>
              <Link
                href="/free-3d-design"
                className="btn btn-accent px-6 py-3 whitespace-nowrap"
              >
                Get Free 3D Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions - Image Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-gray-600 text-lg">Tailored fixtures for every retail sector</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.name}
                href={solution.href}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <Image
                  src={solution.image}
                  alt={solution.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {solution.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10">
            <Link href="/solutions" className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:gap-3 transition-all">
              View All Solutions
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>


      {/* Complete Store Display Solutions - Image Grid Style */}
      <section className="py-20 bg-[#f8f9fa]">
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
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

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

      {/* Testimonials (Our Happy Clients style - Animated) */}
      <section className="py-20 bg-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Happy Clients</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto"></div>
          </div>
          <ClientTestimonials />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#004499] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Store Owners Choose Goodok
            </h2>
            <p className="text-[#f8f9fa] text-lg max-w-2xl mx-auto">
              We're not just a supplier - we're your partner in creating successful retail spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-[#ff6b35]/25 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#f8f9fa] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section (Two-column accordion style) */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">We help you with every step of project</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <span className="text-[var(--accent)] group-open:rotate-180 transition-transform duration-300 bg-[#f8f9fa] p-1 rounded-full">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-600 mt-4 text-sm leading-relaxed pl-1 pt-2 border-t border-gray-50/50">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-[var(--accent)] font-medium hover:underline">
                View More FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section (Simplified dark style) */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#004499] to-[#004499]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Free Consultation
            </h2>
            <p className="text-gray-400 mb-8">
              Free store layout | Free store design ideas | Free project estimate
            </p>

            <form
              action="https://formsubmit.co/henry879128@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New Inquiry from Goodok Website Homepage" />
              <input type="hidden" name="_next" value="https://www.goodokshop.com/contact?success=true" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message*</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg"
              >
                Get My Consultation Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
