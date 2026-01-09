"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardCarouselProps {
    name: string;
    nameCn?: string;
    description: string;
    descriptionCn?: string;
    href: string;
    images: string[];
    price?: string;
    features?: string[];
}

export default function ProductCardCarousel({
    name,
    nameCn,
    description,
    descriptionCn,
    href,
    images,
    price,
    features = [],
}: ProductCardCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-1">
            {/* Image Carousel Area */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
                {images.map((img, index) => (
                    <div
                        key={img}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`${name} - ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}

                {/* Carousel Indicators */}
                {images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-white w-4"
                                        : "bg-white/50 hover:bg-white/75"
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title and Price */}
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors">
                            {name}
                        </h3>
                        {nameCn && (
                            <p className="text-sm text-gray-500">{nameCn}</p>
                        )}
                    </div>
                    {price && (
                        <span className="text-[var(--accent)] font-semibold text-sm whitespace-nowrap">
                            {price}
                        </span>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {description}
                </p>
                {descriptionCn && (
                    <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                        {descriptionCn}
                    </p>
                )}

                {/* Features List */}
                {features.length > 0 && (
                    <ul className="space-y-1.5 mb-4 flex-grow">
                        {features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <svg className="w-4 h-4 text-[var(--primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* View Products Button */}
                <Link
                    href={href}
                    className="mt-auto block text-center py-3 px-6 border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors duration-300"
                >
                    View Products
                </Link>
            </div>
        </div>
    );
}
