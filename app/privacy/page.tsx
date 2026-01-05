import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Goodok Shopfitting",
    description: "Privacy Policy for Goodok Shopfitting - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
    return (
        <div className="pt-24">
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
                        <p className="text-gray-600">Last updated: January 4, 2026</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto prose prose-lg">
                        <h2>1. Information We Collect</h2>
                        <p>
                            When you visit our website or contact us, we may collect the following information:
                        </p>
                        <ul>
                            <li><strong>Contact Information</strong>: Name, email address, phone number, company name</li>
                            <li><strong>Project Information</strong>: Floor plans, store dimensions, design requirements</li>
                            <li><strong>Technical Data</strong>: IP address, browser type, pages visited</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Respond to your inquiries and provide quotes</li>
                            <li>Create 3D store designs as requested</li>
                            <li>Send relevant product information and updates</li>
                            <li>Improve our website and services</li>
                        </ul>

                        <h2>3. Information Sharing</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your personal information to outside
                            parties. We may share information with trusted third parties who assist us in
                            operating our website and conducting our business.
                        </p>

                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information
                            against unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h2>5. Cookies</h2>
                        <p>
                            Our website uses cookies to enhance your browsing experience. You can choose to
                            disable cookies through your browser settings, but this may affect some
                            functionality of the website.
                        </p>

                        <h2>6. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible
                            for the privacy practices or content of these sites.
                        </p>

                        <h2>7. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access the personal data we hold about you</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt out of marketing communications</li>
                        </ul>

                        <h2>8. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <ul>
                            <li>Email: info@goodokshop.com</li>
                            <li>WhatsApp: +86 138 2210 2050</li>
                        </ul>

                        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                            <Link href="/contact" className="text-blue-600 hover:underline">
                                Contact us with any privacy concerns →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
