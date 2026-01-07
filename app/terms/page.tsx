import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Goodok Shopfitting",
    description: "Terms of Service for Goodok Shopfitting - Review our business terms and conditions.",
};

export default function TermsOfService() {
    return (
        <div className="pt-24">
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
                        <p className="text-gray-600">Last updated: January 4, 2026</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto prose prose-lg">
                        <h2>1. General Terms</h2>
                        <p>
                            By accessing and using the Goodok Shopfitting website (goodokshop.com), you agree
                            to be bound by these Terms of Service. If you do not agree with any part of these
                            terms, please do not use our website.
                        </p>

                        <h2>2. Services</h2>
                        <p>Goodok Shopfitting provides:</p>
                        <ul>
                            <li>Retail display fixtures manufacturing</li>
                            <li>Store shelving and gondola systems</li>
                            <li>Free 3D store design services</li>
                            <li>Custom fixture solutions</li>
                            <li>Worldwide shipping</li>
                        </ul>

                        <h2>3. Quotations and Orders</h2>
                        <p>
                            All quotations are valid for 30 days unless otherwise specified. Prices are
                            subject to change based on material costs, shipping rates, and other factors.
                            Orders are confirmed only upon receipt of deposit payment.
                        </p>

                        <h2>4. Payment Terms</h2>
                        <ul>
                            <li>30% deposit required to begin production</li>
                            <li>70% balance due before shipping</li>
                            <li>Payment accepted via T/T, L/C, or Alibaba Trade Assurance</li>
                        </ul>

                        <h2>5. Production and Delivery</h2>
                        <ul>
                            <li>Standard production time: 25-35 working days</li>
                            <li>Shipping time varies by destination (7-45 days)</li>
                            <li>Delays due to force majeure are not our responsibility</li>
                        </ul>

                        <h2>6. Quality and Warranty</h2>
                        <p>
                            All products are manufactured to international quality standards. We offer a
                            2-year warranty on structural defects. Normal wear and tear, misuse, or
                            improper installation are not covered.
                        </p>

                        <h2>7. Returns and Refunds</h2>
                        <p>
                            Due to the custom nature of our products, returns are generally not accepted.
                            If you receive damaged or defective goods, please contact us within 7 days of
                            delivery with photos and documentation.
                        </p>

                        <h2>8. Intellectual Property</h2>
                        <p>
                            All content on this website, including designs, images, and text, is the
                            property of Goodok Shopfitting and may not be reproduced without permission.
                        </p>

                        <h2>9. Limitation of Liability</h2>
                        <p>
                            Goodok Shopfitting shall not be liable for any indirect, incidental, or
                            consequential damages arising from the use of our products or services.
                        </p>

                        <h2>10. Governing Law</h2>
                        <p>
                            These terms shall be governed by the laws of the People&apos;s Republic of China.
                            Any disputes shall be resolved through friendly negotiation or arbitration.
                        </p>

                        <h2>11. Contact</h2>
                        <p>For questions about these terms:</p>
                        <ul>
                            <li>Email: info@goodokshop.com</li>
                            <li>WhatsApp: +86 138 2210 2050</li>
                        </ul>

                        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                            <Link href="/contact" className="text-[var(--accent)] hover:underline">
                                Contact us with any questions 鈫?
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

