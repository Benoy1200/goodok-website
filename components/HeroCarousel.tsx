"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
    "/images/hero-bg.jpg",
    "/images/hero-bg-2.jpg",
    "/images/hero-bg-3.jpg",
    "/images/hero-bg-4.jpg",
    "/images/hero-bg-5.jpg",
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // 5秒切换

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            {heroImages.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Retail store display ${index + 1}`}
                        fill
                        priority={index === 0}
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
}
