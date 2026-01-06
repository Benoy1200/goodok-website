import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us - Goodok Shopfitting",
    description:
        "Learn about Goodok Shopfitting - China's leading retail display manufacturer with 15+ years experience.",
};

export default function AboutPage() {
    return (
        <div className="pt-24 pb-16">
            <div className="container max-w-5xl mx-auto space-y-8">
                {/* Image 1: Office Team */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/about/office-team.jpg"
                        alt="Goodok professional team"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Image 2: Factory Workshop */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/about/factory-workshop.jpg"
                        alt="Goodok factory workshop"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Image 3: Warehouse */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/about/warehouse.jpg"
                        alt="Goodok warehouse"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
