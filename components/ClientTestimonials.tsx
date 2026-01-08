"use client";

import { useEffect, useRef } from "react";
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
    quote: "Incredible value for money. We outfitted our entire boutique for half of cost of local suppliers.",
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
    quote: "Robust and stylish shelving. Our heavy inventory feels secure, and store looks modern and clean.",
    name: "Marcus Johnson",
    title: "Store Manager, AutoParts Pro",
    avatar: "/images/avatars/client-7.jpg",
  },
  {
    id: 8,
    quote: "I was skeptical about ordering from overseas, but quality and speed blew me away. Will order again!",
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

// Duplicate testimonials for infinite scrolling effect
const testimonialsColumn1 = [...allTestimonials, ...allTestimonials];
const testimonialsColumn2 = [...allTestimonials.slice(1), ...allTestimonials.slice(0, 1), ...allTestimonials.slice(1), ...allTestimonials.slice(0, 1), ...allTestimonials.slice(1), ...allTestimonials.slice(0, 1)];
const testimonialsColumn3 = [...allTestimonials.slice(2), ...allTestimonials.slice(0, 2), ...allTestimonials.slice(2), ...allTestimonials.slice(0, 2), ...allTestimonials.slice(2), ...allTestimonials.slice(0, 2)];

export default function ClientTestimonials() {
  return (
    <div className="flex justify-center gap-6 overflow-hidden py-10">
      {/* Column 1 - Slowest speed */}
      <div className="flex flex-col gap-6 animate-scroll" style={{ animationDuration: "20s" }}>
        {testimonialsColumn1.map((testimonial, index) => (
          <div
            key={`col1-${testimonial.id}-${index}`}
            className="bg-white border border-gray-100 shadow-md rounded-xl p-8 relative min-w-[300px] max-w-[300px] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-[var(--accent)] text-4xl mb-4">&ldquo;</div>
            <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Column 2 - Medium speed */}
      <div className="hidden md:flex flex-col gap-6 animate-scroll" style={{ animationDuration: "25s" }}>
        {testimonialsColumn2.map((testimonial, index) => (
          <div
            key={`col2-${testimonial.id}-${index}`}
            className="bg-white border border-gray-100 shadow-md rounded-xl p-8 relative min-w-[300px] max-w-[300px] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-[var(--accent)] text-4xl mb-4">&ldquo;</div>
            <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Column 3 - Fastest speed */}
      <div className="hidden lg:flex flex-col gap-6 animate-scroll" style={{ animationDuration: "30s" }}>
        {testimonialsColumn3.map((testimonial, index) => (
          <div
            key={`col3-${testimonial.id}-${index}`}
            className="bg-white border border-gray-100 shadow-md rounded-xl p-8 relative min-w-[300px] max-w-[300px] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-[var(--accent)] text-4xl mb-4">&ldquo;</div>
            <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
