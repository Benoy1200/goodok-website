"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProductMarqueeProps {
    images: string[];
    productName: string;
}

export default function ProductMarquee({ images, productName }: ProductMarqueeProps) {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const row3Ref = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const animationsRef = useRef<(NodeJS.Timeout | null)[]>([]);

    useEffect(() => {
        // 动画速度配置
        const speeds = [30, 25, 35]; // 不同行不同速度
        const refs = [row1Ref, row2Ref, row3Ref];
        const directions = [1, -1, 1]; // 方向：1向左，-1向右
        const positions = [0, 0, 0];

        const startAnimations = () => {
            return refs.map((ref, index) => {
                if (!ref.current) return null;
                const element = ref.current;
                const speed = speeds[index];
                const direction = directions[index];
                
                if (positions[index] === 0) {
                    positions[index] = direction === 1 ? 0 : -element.scrollWidth / 2;
                }
                
                const animate = () => {
                    if (isPaused) return;
                    
                    positions[index] += direction * 0.5;
                    
                    if (direction === 1 && positions[index] >= element.scrollWidth / 2) {
                        positions[index] = 0;
                    } else if (direction === -1 && positions[index] <= -element.scrollWidth / 2) {
                        positions[index] = 0;
                    }
                    
                    element.style.transform = `translateX(${-positions[index]}px)`;
                };
                
                return setInterval(animate, speed);
            });
        };

        animationsRef.current = startAnimations();

        return () => {
            animationsRef.current.forEach(anim => anim && clearInterval(anim));
        };
    }, [isPaused]);

    // 确保每行至少有4张图片
    const ensureMinImages = (arr: string[], min: number = 4) => {
        const result = [...arr];
        while (result.length < min && arr.length > 0) {
            result.push(...arr);
        }
        return result.slice(0, Math.max(4, result.length));
    };

    // 将图片分成3组，每组4张
    const allImages = ensureMinImages(images, 12);
    const row1Images = allImages.slice(0, 4);
    const row2Images = allImages.slice(4, 8).length > 0 ? allImages.slice(4, 8) : allImages.slice(0, 4);
    const row3Images = allImages.slice(8, 12).length > 0 ? allImages.slice(8, 12) : allImages.slice(0, 4);

    const handleImageClick = (img: string) => {
        setSelectedImage(img);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const renderRow = (rowImages: string[], ref: React.RefObject<HTMLDivElement | null>, rowIndex: number) => {
        const displayImages = ensureMinImages(rowImages, 4);
        const duplicated = [...displayImages, ...displayImages]; // 复制一份实现无缝滚动
        
        return (
            <div className="overflow-hidden py-2">
                <div 
                    ref={ref}
                    className="flex gap-4 will-change-transform justify-center"
                    style={{ width: "max-content" }}
                >
                    {duplicated.map((img, idx) => (
                        <div 
                            key={`row${rowIndex}-${idx}`}
                            className="relative w-64 h-80 flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer group select-none"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => handleImageClick(img)}
                            onContextMenu={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                        >
                            <Image
                                src={img}
                                alt={`${productName} ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                                sizes="(max-width: 768px) 50vw, 256px"
                                quality={85}
                                draggable={false}
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                                    🔍 点击放大
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <section className="py-8 bg-gray-50 overflow-hidden">
                <div className="container mx-auto">
                    <div className="space-y-4">
                        {renderRow(row1Images, row1Ref, 0)}
                        {renderRow(row2Images, row2Ref, 1)}
                        {renderRow(row3Images, row3Ref, 2)}
                    </div>
                </div>
            </section>

            {/* 全屏放大弹窗 */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 select-none"
                    onClick={closeModal}
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <button 
                        className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-10"
                        onClick={closeModal}
                    >
                        ×
                    </button>
                    <div 
                        className="relative w-full max-w-4xl aspect-[4/5]"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                    >
                        <Image
                            src={selectedImage}
                            alt={productName}
                            fill
                            className="object-contain pointer-events-none"
                            sizes="100vw"
                            quality={100}
                            priority
                            draggable={false}
                        />
                        {/* 放大图水印层 - 5个水印，按红框位置分布 + 中心 */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.15 }}>
                            <div className="absolute top-[20%] left-[15%] text-white font-bold text-2xl rotate-[-30deg]">goodok</div>
                            <div className="absolute top-[35%] right-[20%] text-white font-bold text-2xl rotate-[30deg]">goodok</div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl rotate-[-20deg]">goodok</div>
                            <div className="absolute bottom-[35%] left-[18%] text-white font-bold text-2xl rotate-[30deg]">goodok</div>
                            <div className="absolute bottom-[20%] right-[15%] text-white font-bold text-2xl rotate-[-30deg]">goodok</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
