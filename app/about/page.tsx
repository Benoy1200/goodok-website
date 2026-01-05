import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us - 15+ Years of Retail Display Excellence",
    description:
        "Learn about Goodok Shopfitting - China's leading retail display manufacturer with 15+ years experience, serving 500+ stores in over 50 countries worldwide.",
};

const milestones = [
    { year: "2009", event: "Founded in Guangdong, China" },
    { year: "2012", event: "First international export to Southeast Asia" },
    { year: "2015", event: "Expanded to Middle East market" },
    { year: "2018", event: "Reached 200+ stores delivered milestone" },
    { year: "2020", event: "Launched 3D design visualization service" },
    { year: "2023", event: "500+ stores delivered globally" },
    { year: "2024", event: "Opened USA distribution partnerships" },
];

const values = [
    {
        icon: "🎯",
        title: "Quality First",
        description:
            "Every fixture leaves our factory after rigorous quality checks. We use premium materials and manufacturing processes.",
    },
    {
        icon: "🤝",
        title: "Customer Partnership",
        description:
            "We're not just suppliers — we're partners in your success. Your store's performance is our priority.",
    },
    {
        icon: "💡",
        title: "Innovation",
        description:
            "From 3D design visualization to smart shelving solutions, we continuously evolve to serve you better.",
    },
    {
        icon: "🌍",
        title: "Global Reach",
        description:
            "Serving stores across 50+ countries with reliable shipping and local support when you need it.",
    },
];

const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001 Environmental Management",
    "CE Certified Products",
    "SGS Tested Materials",
];

export default function AboutPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About Goodok Shopfitting
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            For over 15 years, we&apos;ve been helping store owners around the
                            world create stunning retail environments that drive sales and
                            delight customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Goodok Shopfitting began in 2009 with a simple mission: to make
                                    professional retail display solutions accessible to store owners
                                    everywhere — not just big chains with big budgets.
                                </p>
                                <p>
                                    Starting from a small workshop in Guangdong, China, we&apos;ve grown
                                    into a full-scale manufacturing facility serving customers across
                                    6 continents. Our team of 50+ craftsmen and designers work together
                                    to bring your store vision to life.
                                </p>
                                <p>
                                    What sets us apart? We believe every store owner deserves the same
                                    level of service that major retailers receive. That&apos;s why we offer
                                    free 3D design consultations, factory-direct pricing, and dedicated
                                    support from inquiry to installation.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { number: "500+", label: "Stores Delivered" },
                                { number: "15+", label: "Years Experience" },
                                { number: "50+", label: "Countries Served" },
                                { number: "50+", label: "Team Members" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-blue-50 rounded-xl p-6 text-center">
                                    <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="text-center">
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Factory & Team Section */}
            <section className="py-16">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Factory & Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A glimpse into our manufacturing facility and the dedicated team behind every project
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Factory Images */}
                        <div className="relative h-64 rounded-xl overflow-hidden group">
                            <Image
                                src="/images/factory-1.jpg"
                                alt="Goodok factory floor - manufacturing facility"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="font-semibold">Manufacturing Facility</div>
                                <div className="text-sm text-gray-300">Foshan, Guangdong</div>
                            </div>
                        </div>

                        <div className="relative h-64 rounded-xl overflow-hidden group">
                            <Image
                                src="/images/factory-2.jpg"
                                alt="Goodok workshop - production area"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="font-semibold">Production Workshop</div>
                                <div className="text-sm text-gray-300">5000 sqm facility</div>
                            </div>
                        </div>

                        <div className="relative h-64 rounded-xl overflow-hidden group">
                            <Image
                                src="/images/team-1.jpg"
                                alt="Goodok team - professional designers and craftsmen"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="font-semibold">Our Team</div>
                                <div className="text-sm text-gray-300">50+ professionals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            {milestones.map((milestone, index) => (
                                <div key={milestone.year} className="flex gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                            {milestone.year.slice(-2)}
                                        </div>
                                        {index < milestones.length - 1 && (
                                            <div className="w-0.5 h-full bg-blue-200 my-2"></div>
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <div className="text-sm text-blue-600 font-semibold">{milestone.year}</div>
                                        <div className="text-lg font-medium">{milestone.event}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Quality Certifications</h2>
                        <p className="text-gray-600">
                            Our commitment to quality is backed by international certifications
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {certifications.map((cert) => (
                            <div
                                key={cert}
                                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-6 py-4"
                            >
                                <svg
                                    className="w-5 h-5 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                                <span className="font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Let&apos;s Build Something Great Together
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you&apos;re opening a new store or renovating an existing space,
                        we&apos;re here to help you create a retail environment that works.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn bg-white text-gray-900 hover:bg-gray-100">
                            Get Free Store Design
                        </Link>
                        <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900">
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
