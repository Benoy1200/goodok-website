import type { Metadata } from "next";
import Link from "next/link";

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

// Customer testimonials
const testimonials = [
  {
    quote: "The quality exceeded our expectations. Our jewelry store looks absolutely stunning with these display cases.",
    name: "Sarah Chen",
    title: "Owner, Sparkle Jewelry",
    avatar: "👩‍💼",
  },
  {
    quote: "Fast delivery and excellent communication. The gondola shelving transformed our supermarket layout completely.",
    name: "Michael Wong",
    title: "Manager, Fresh Mart",
    avatar: "👨‍💼",
  },
  {
    quote: "The free 3D design service helped us visualize our store before ordering. Highly professional team!",
    name: "Emily Rodriguez",
    title: "Founder, Trendy Toys",
    avatar: "👩‍🦰",
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
      {/* Hero Section */}
      <section className="gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
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
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
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

      {/* About Section - Ujoy Style (Title + Stats + Content) */}
      <section className="py-20 bg-white">
        <div className="container">
          {/* Centered Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Goodok</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional retail display manufacturer with 15+ years of experience
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Stats Row - Ujoy Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Your Trusted Partner in Retail Display Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2009, Goodok Shopfitting has grown from a small workshop to a 15,000㎡
                manufacturing facility serving over 500 stores worldwide. We specialize in designing
                and producing high-quality retail fixtures that help store owners maximize their sales potential.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of experienced designers and craftsmen work together to deliver custom solutions
                that perfectly match your brand identity and business needs. From initial design to final
                installation support, we&apos;re with you every step of the way.
              </p>

              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>

            {/* Right - Image Grid (Ujoy style - multiple images) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl block mb-2">🏭</span>
                  <p className="text-gray-500 text-xs">Factory</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl block mb-2">🔧</span>
                  <p className="text-gray-500 text-xs">Workshop</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl block mb-2">👥</span>
                  <p className="text-gray-500 text-xs">Team</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl block mb-2">📦</span>
                  <p className="text-gray-500 text-xs">Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions - Card Grid (No Chinese) */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We understand that different retail sectors have unique display requirements.
              Explore solutions tailored for your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.name}
                href={solution.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {solution.name}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="text-blue-600 font-medium flex items-center gap-2">
                  Explore Solutions
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
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

      {/* Testimonials (Our Happy Clients style) */}
      <section className="py-20 bg-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Happy Clients</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-700/50 backdrop-blur rounded-xl p-8 relative"
              >
                <div className="text-blue-400 text-4xl mb-4">&ldquo;</div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.title}</div>
                  </div>
                </div>
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
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer list-none">
                        <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                        <span className="text-blue-600 group-open:rotate-180 transition-transform">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="text-gray-600 mt-3 text-sm">{faq.answer}</p>
                    </details>
                  </div>
                ))}
              </div>
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
