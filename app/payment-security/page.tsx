import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment & Security | Goodok Shopfitting",
  description:
    "Secure payment options and buyer protection for your retail fixture orders. PayPal, Trade Assurance, and wire transfer available.",
  keywords: [
    "secure payment",
    "trade assurance",
    "buyer protection",
    "alibaba trade assurance",
    "paypal payment",
  ],
};

const paymentMethods = [
  {
    name: "PayPal",
    icon: "💳",
    description: "Fast and secure payment for orders under $5,000",
    features: [
      "Buyer protection included",
      "Funds held until delivery confirmation",
      "Quick processing time",
    ],
    recommended: "Orders < $5,000",
  },
  {
    name: "Alibaba Trade Assurance",
    icon: "🛡️",
    description: "Maximum protection for medium to large orders",
    features: [
      "Alibaba holds your funds until approval",
      "Full refund if order not shipped on time",
      "Quality dispute resolution support",
    ],
    recommended: "$5,000 - $20,000",
  },
  {
    name: "Bank Transfer (T/T)",
    icon: "🏦",
    description: "Traditional wire transfer for large orders",
    features: [
      "30% deposit to start production",
      "70% before shipping",
      "Trade Assurance available for deposits",
    ],
    recommended: "Orders > $20,000",
  },
];

const guarantees = [
  {
    icon: "✅",
    title: "100% Money-Back Guarantee",
    description:
      "If items are damaged on arrival (subject to verification photos/video), we provide a full refund or free replacement.",
  },
  {
    icon: "🔧",
    title: "1-Year Warranty",
    description:
      "Free replacements for any manufacturing defects within 1 year of delivery. We stand behind our quality.",
  },
  {
    icon: "🛡️",
    title: "Trade Assurance Protection",
    description:
      "Alibaba holds your funds until you approve the goods. Your payment is protected from order to delivery.",
  },
];

export default function PaymentSecurityPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
              Secure Transactions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Payment & Security
            </h1>
            <p className="text-xl text-gray-300">
              Your payment is protected. We offer multiple secure payment options 
              with buyer protection guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guarantees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to ensuring your complete satisfaction with every order.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {guarantees.map((guarantee) => (
              <div
                key={guarantee.title}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl mb-4">{guarantee.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Methods</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the payment method that works best for your order size and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-8"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-4">
                  Recommended: {method.recommended}
                </p>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🔒</span>
              </div>
              <span className="text-sm text-gray-600 font-medium">SSL Encrypted</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">💳</span>
              </div>
              <span className="text-sm text-gray-600 font-medium">PayPal Protected</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🛡️</span>
              </div>
              <span className="text-sm text-gray-600 font-medium">Trade Assurance</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">✓</span>
              </div>
              <span className="text-sm text-gray-600 font-medium">Verified Supplier</span>
            </div>
          </div>
        </div>
      </section>

      {/* Large Order Notice */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              For Orders Over $5,000
            </h2>
            <p className="text-blue-200 mb-6">
              Contact us for an Alibaba Trade Assurance link. This method saves on processing fees 
              while providing maximum buyer protection through Alibaba&apos;s secure platform.
            </p>
            <Link
              href="/contact"
              className="btn btn-accent text-lg px-8 py-4"
            >
              Contact Us for Trade Assurance
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Payment FAQs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">
                  How does Trade Assurance work?
                </h3>
                <p className="text-gray-600">
                  When you pay through Alibaba Trade Assurance, your funds are held by Alibaba until 
                  you receive and approve your order. If there&apos;s any issue with quality or delivery, 
                  Alibaba mediates and can issue refunds.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">
                  Is PayPal safe for international orders?
                </h3>
                <p className="text-gray-600">
                  Yes, PayPal offers buyer protection for international purchases. If items don&apos;t arrive 
                  or don&apos;t match the description, you can file a dispute within 180 days.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">
                  What if my order arrives damaged?
                </h3>
                <p className="text-gray-600">
                  Take photos/videos immediately upon delivery. Contact us within 48 hours with documentation. 
                  We provide free replacements or full refunds for shipping damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contact us to discuss payment options and get started with your custom store fixtures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-3d-design" className="btn btn-primary text-lg px-8 py-4">
              Get Free Layout Design
            </Link>
            <Link href="/contact" className="btn btn-secondary text-lg px-8 py-4">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
