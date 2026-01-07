import type { Metadata } from "next";
import Link from "next/link";
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

// Industry solutions (6 solutions) - NO Chinese text
const solutions = [
  {
    name: "Pop Culture Store",
    description: "Display collectibles, figures, and trendy items",
    icon: "🎮",
    href: "/solutions/pop-culture",
  },
  {
    name: "Stationery Store",
    description: "Organized displays for pens, notebooks, and accessories",
    icon: "✏️",
    href: "/solutions/stationery",
  },
  {
    name: "Jewelry Store",
    description: "Secure, elegant showcases for precious items",
    icon: "💎",
    href: "/solutions/jewelry-store",
  },
  {
    name: "Boutique",
    description: "Fashion-forward displays for clothing and accessories",
    icon: "👗",
    href: "/solutions/boutique",
  },
  {
    name: "Toy Store",
    description: "Fun, safe, and accessible toy displays",
    icon: "🧸",
    href: "/solutions/toy-store",
  },
  {
    name: "Lifestyle Store",
    description: "Home goods and lifestyle product displays",
    icon: "🏠",
    href: "/solutions/lifestyle",
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
    answer: "Generally, it takes 2 to 4 weeks after you approve the drawings, depending on order complexity."
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
      {/* Hero Section - 5张图片轮播 */}
      <section className="h-[80vh] relative overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel />

        {/* 底部内容区 */}
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
                className="btn bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 whitespace-nowrap"
              >
                Get Free 3D Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions - Auto-scrolling Marquee */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Industry Solutions</h2>
            <p className="text-gray-600">Tailored fixtures for every retail sector</p>
          </div>
        </div>
        {/* Auto-scrolling container */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee hover:pause-animation">
            {/* Double the items for seamless loop */}
            {[...solutions, ...solutions].map((solution, idx) => (
              <Link
                key={`${solution.name}-${idx}`}
                href={solution.href}
                className="flex-shrink-0 w-64 group"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl group-hover:scale-110 transition-transform">{solution.icon}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold">{solution.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm group-hover:text-blue-600 transition">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="text-center mt-8">
            <Link href="/solutions" className="text-blue-600 font-medium hover:underline">
              View All Solutions →
            </Link>
          </div>
        </div>
      </section>


      {/* Products - Card Grid Style (2 rows x 3 cols) */}
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
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-blue-600 font-medium flex items-center gap-2">
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

      {/* Testimonials (Our Happy Clients style - Animated) */}
      <section className="py-20 bg-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Happy Clients</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <ClientTestimonials />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section (Two-column accordion style) */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">We help you with every step of the project</p>
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
                      <span className="text-blue-600 group-open:rotate-180 transition-transform duration-300 bg-blue-50 p-1 rounded-full">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
              <Link href="/faq" className="text-blue-600 font-medium hover:underline">
                View More FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section (Simplified dark style) */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900"></div>
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message*</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
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
