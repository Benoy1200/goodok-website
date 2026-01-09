"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ProductImageCarouselProps {
    images: string[];
    alt: string;
}

export default function ProductImageCarousel({ images, alt }: ProductImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        // 随机初始延迟，避免所有卡片同时切换
        const randomDelay = Math.random() * 2000; // 0-2s 随机延迟
        let interval: NodeJS.Timeout;

        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 3000 + Math.random() * 1000); // 3-4s 随机间隔
        }, randomDelay);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [images.length]);

    // 确保至少有一张图片
    const displayImages = images.length > 0 ? images : ["/images/product-1.jpg"];

    return (
        <div className="relative h-64 overflow-hidden">
            {displayImages.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        idx === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={img}
                        alt={`${alt} ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={idx === 0}
                    />
                </div>
            ))}
            
            {/* 指示器 */}
            {displayImages.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {displayImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                idx === currentIndex ? "bg-white" : "bg-white/50"
                            }`}
                            aria-label={`查看图片 ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
