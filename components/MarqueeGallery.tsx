"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface MarqueeGalleryProps {
    images: string[];
    productName: string;
}

export default function MarqueeGallery({ images, productName }: MarqueeGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Split images into 3 rows
    const row1 = images.slice(0, Math.ceil(images.length / 3));
    const row2 = images.slice(Math.ceil(images.length / 3), Math.ceil(images.length * 2 / 3));
    const row3 = images.slice(Math.ceil(images.length * 2 / 3));

    return (
        <>
            <div
                className="space-y-4 overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Row 1 - scrolls left */}
                <div className="relative">
                    <div className={`flex gap-4 ${isPaused ? '' : 'animate-marquee-left'}`}>
                        {[...row1, ...row1].map((image, index) => (
                            <button
                                key={`r1-${index}`}
                                onClick={() => setSelectedImage(image)}
                                className="flex-shrink-0 w-48 h-48 relative rounded-xl overflow-hidden bg-gray-100 group hover:z-10"
                            >
                                <Image
                                    src={image}
                                    alt={`${productName} ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-150"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Row 2 - scrolls right */}
                <div className="relative">
                    <div className={`flex gap-4 ${isPaused ? '' : 'animate-marquee-right'}`}>
                        {[...row2, ...row2].map((image, index) => (
                            <button
                                key={`r2-${index}`}
                                onClick={() => setSelectedImage(image)}
                                className="flex-shrink-0 w-48 h-48 relative rounded-xl overflow-hidden bg-gray-100 group hover:z-10"
                            >
                                <Image
                                    src={image}
                                    alt={`${productName} ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-150"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Row 3 - scrolls left */}
                <div className="relative">
                    <div className={`flex gap-4 ${isPaused ? '' : 'animate-marquee-left-slow'}`}>
                        {[...row3, ...row3].map((image, index) => (
                            <button
                                key={`r3-${index}`}
                                onClick={() => setSelectedImage(image)}
                                className="flex-shrink-0 w-48 h-48 relative rounded-xl overflow-hidden bg-gray-100 group hover:z-10"
                            >
                                <Image
                                    src={image}
                                    alt={`${productName} ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-150"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
                        <Image
                            src={selectedImage}
                            alt={productName}
                            fill
                            className="object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    {/* Navigation */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            const idx = images.indexOf(selectedImage);
                            setSelectedImage(images[(idx - 1 + images.length) % images.length]);
                        }}
                    >
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            const idx = images.indexOf(selectedImage);
                            setSelectedImage(images[(idx + 1) % images.length]);
                        }}
                    >
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}

            <style jsx>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marquee-left 30s linear infinite;
                }
                .animate-marquee-right {
                    animation: marquee-right 25s linear infinite;
                }
                .animate-marquee-left-slow {
                    animation: marquee-left 35s linear infinite;
                }
            `}</style>
        </>
    );
}
