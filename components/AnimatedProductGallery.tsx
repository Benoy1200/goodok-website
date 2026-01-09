"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AnimatedProductGalleryProps {
    images: string[];
    productName: string;
}

export default function AnimatedProductGallery({ images, productName }: AnimatedProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentHighlight, setCurrentHighlight] = useState(0);

    // Auto-rotate highlight effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHighlight((prev) => (prev + 1) % Math.min(images.length, 8));
        }, 2500);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {/* Animated Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`group relative aspect-square rounded-xl overflow-hidden bg-gray-100 transition-all duration-500 ${index === currentHighlight
                                ? "ring-2 ring-[var(--accent)] scale-105 shadow-lg z-10"
                                : "hover:ring-2 hover:ring-[var(--primary)]"
                            }`}
                        style={{
                            animationDelay: `${index * 50}ms`,
                        }}
                    >
                        <Image
                            src={image}
                            alt={`${productName} - Image ${index + 1}`}
                            fill
                            className={`object-cover transition-all duration-700 ${index === currentHighlight
                                    ? "scale-110"
                                    : "group-hover:scale-105"
                                }`}
                        />
                        {/* Subtle pulse effect on highlighted */}
                        {index === currentHighlight && (
                            <div className="absolute inset-0 bg-white/10 animate-pulse" />
                        )}
                        {/* Light Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none select-none">
                            <div className="transform -rotate-45 text-white/40 font-bold text-sm whitespace-nowrap">
                                Goodok
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        {/* Image number indicator */}
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {index + 1}/{images.length}
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
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
                        {/* Lightbox Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
                            <div className="grid grid-cols-2 gap-32 opacity-10 transform -rotate-12">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <span key={i} className="text-white font-bold text-3xl">Goodok</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Navigation arrows */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = images.indexOf(selectedImage);
                            const prevIndex = (currentIndex - 1 + images.length) % images.length;
                            setSelectedImage(images[prevIndex]);
                        }}
                    >
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = images.indexOf(selectedImage);
                            const nextIndex = (currentIndex + 1) % images.length;
                            setSelectedImage(images[nextIndex]);
                        }}
                    >
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}
