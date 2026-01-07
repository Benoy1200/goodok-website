"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    title: string;
    avatar: string;
}

const allTestimonials: Testimonial[] = [
    {
        id: 1,
        quote: "The quality exceeded our expectations. Our jewelry store looks absolutely stunning with these display cases.",
        name: "Sarah Chen",
        title: "Owner, Sparkle Jewelry",
        avatar: "/images/avatars/client-1.jpg",
    },
    {
        id: 2,
        quote: "Fast delivery and excellent communication. The gondola shelving transformed our supermarket layout completely.",
        name: "Michael Wong",
        title: "Manager, Fresh Mart",
        avatar: "/images/avatars/client-2.jpg",
    },
    {
        id: 3,
        quote: "The free 3D design service helped us visualize our store before ordering. Highly professional team!",
        name: "Emily Rodriguez",
        title: "Founder, Trendy Toys",
        avatar: "/images/avatars/client-3.jpg",
    },
    {
        id: 4,
        quote: "Goodok's custom fixtures are top-notch. They perfectly matched our brand identity and were easy to assemble.",
        name: "David Smith",
        title: "CEO, TechHaven",
        avatar: "/images/avatars/client-4.jpg",
    },
    {
        id: 5,
        quote: "Incredible value for money. We outfitted our entire boutique for half the cost of local suppliers.",
        name: "Jessica Lee",
        title: "Owner, Chic Boutique",
        avatar: "/images/avatars/client-5.jpg",
    },
    {
        id: 6,
        quote: "Their customer support is amazing. They walked us through every step of the logistics process.",
        name: "Ahmed Hassan",
        title: "Director, Luxury Living",
        avatar: "/images/avatars/client-6.jpg",
    },
    {
        id: 7,
        quote: "Robust and stylish shelving. Our heavy inventory feels secure, and the store looks modern and clean.",
        name: "Marcus Johnson",
        title: "Store Manager, AutoParts Pro",
        avatar: "/images/avatars/client-7.jpg",
    },
    {
        id: 8,
        quote: "I was skeptical about ordering from overseas, but the quality and speed blew me away. Will order again!",
        name: "Linda Davis",
        title: "Owner, The Book Nook",
        avatar: "/images/avatars/client-8.jpg",
    },
    {
        id: 9,
        quote: "The pharmacy shelving units are versatile and easy to clean. Perfect for our medical supply store.",
        name: "Maria Gonzales",
        title: "Pharmacist, HealthFirst",
        avatar: "/images/avatars/client-9.jpg",
    },
];

export default function ClientTestimonials() {
    const [displayed, setDisplayed] = useState<Testimonial[]>([]);
    const [fadingIndex, setFadingIndex] = useState<number | null>(null);

    useEffect(() => {
        // Initial random selection
        const shuffled = [...allTestimonials].sort(() => 0.5 - Math.random());
        setDisplayed(shuffled.slice(0, 3));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            // Pick a random slot to update (0, 1, or 2)
            const slotToUpdate = Math.floor(Math.random() * 3);
            setFadingIndex(slotToUpdate);

            // Wait for fade out
            setTimeout(() => {
                setDisplayed((prev) => {
                    const currentIds = new Set(prev.map((t) => t.id));
                    const available = allTestimonials.filter((t) => !currentIds.has(t.id));
                    if (available.length === 0) return prev;

                    // Pick random new testimonial
                    const nextTestimonial = available[Math.floor(Math.random() * available.length)];

                    const newDisplayed = [...prev];
                    newDisplayed[slotToUpdate] = nextTestimonial;
                    return newDisplayed;
                });

                // Reset fade (fade in)
                setFadingIndex(null);
            }, 500); // 500ms fade out duration matches CSS transition
        }, 4000); // Update every 4 seconds

        return () => clearInterval(interval);
    }, []);

    if (displayed.length === 0) return null;

    return (
        <div className="grid md:grid-cols-3 gap-6">
            {displayed.map((testimonial, index) => (
                <div
                    key={`${testimonial.id}-${index}`} // Composite key to force re-render if needed, though index is stable
                    className={`bg-gray-700/50 backdrop-blur rounded-xl p-8 relative transition-all duration-500 transform ${fadingIndex === index ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        }`}
                >
                    <div className="text-[#f8f9fa] text-4xl mb-4">&ldquo;</div>
                    <p className="text-gray-300 mb-6 leading-relaxed min-h-[80px]">
                        {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-600 shrink-0">
                            <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="font-semibold text-white">{testimonial.name}</div>
                            <div className="text-gray-400 text-sm">{testimonial.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


