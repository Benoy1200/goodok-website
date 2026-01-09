"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AnimatedHeroGalleryProps {
    images: string[];
    displayCount?: number;
    intervalMs?: number;
}

export default function AnimatedHeroGallery({
    images,
    displayCount = 4,
    intervalMs = 2500,
}: AnimatedHeroGalleryProps) {
    // Initialize with first 4 images
    const [displayedImages, setDisplayedImages] = useState<string[]>(
        images.slice(0, displayCount)
    );
    const [fadingIndex, setFadingIndex] = useState<number | null>(null);

    useEffect(() => {
        if (images.length <= displayCount) return;

        const interval = setInterval(() => {
            // Pick a random slot to change (0-3)
            const slotToChange = Math.floor(Math.random() * displayCount);
            
            // Get all images not currently displayed
            const availableImages = images.filter(
                (img) => !displayedImages.includes(img)
            );
            
            if (availableImages.length === 0) return;
            
            // Pick a random new image
            const newImage = availableImages[Math.floor(Math.random() * availableImages.length)];
            
            // Start fade animation
            setFadingIndex(slotToChange);
            
            // After fade out, swap the image
            setTimeout(() => {
                setDisplayedImages((prev) => {
                    const newImages = [...prev];
                    newImages[slotToChange] = newImage;
                    return newImages;
                });
                // Fade back in
                setTimeout(() => {
                    setFadingIndex(null);
                }, 50);
            }, 300);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [images, displayCount, intervalMs, displayedImages]);

    return (
        <div className="grid grid-cols-4 gap-3">
            {displayedImages.map((src, index) => (
                <div
                    key={index}
                    className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden transition-opacity duration-300 ${
                        fadingIndex === index ? "opacity-0" : "opacity-100"
                    }`}
                >
                    <Image
                        src={src}
                        alt={`Product ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                </div>
            ))}
        </div>
    );
}
