"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            {/* Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 hover:ring-2 hover:ring-[var(--primary)] transition-all duration-300"
                    >
                        <Image
                            src={image}
                            alt={`${productName} - Image ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Light Anti-theft Watermark Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none select-none">
                            <div className="transform -rotate-45 text-white/40 font-bold text-sm whitespace-nowrap">
                                Goodok
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
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
                </div>
            )}
        </>
    );
}
