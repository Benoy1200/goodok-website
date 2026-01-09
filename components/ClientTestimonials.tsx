"use client";

import Image from "next/image";

// 扩展后的Testimonials数据
const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Retail Store Owner",
    content: "Goodok's shelving solutions completely transformed our store. The quality is outstanding and installation was a breeze.",
    avatar: "/images/avatars/avatar1.png",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Boutique Manager",
    content: "The custom display cases we ordered are beautiful. They really elevate the presentation of our jewelry collection.",
    avatar: "/images/avatars/avatar2.png",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Supermarket Manager",
    content: "Excellent gondola shelving. Sturdy, versatile, and looks professional. Highly recommend for any grocery store.",
    avatar: "/images/avatars/avatar3.png",
    rating: 4
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Fashion Retailer",
    content: "The clothing racks are perfect. Stylish yet durable. Just what we needed for our new branch.",
    avatar: "/images/avatars/avatar4.png",
    rating: 5
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Shop Owner",
    content: "Great service from start to finish. The 3D design helped us visualize everything perfectly.",
    avatar: "/images/avatars/avatar1.png",
    rating: 5
  },
  {
    id: 6,
    name: "Jessica Brown",
    role: "Visual Merchandiser",
    content: "I love the flexibility of the wall systems. We can easily rearrange displays for different seasons.",
    avatar: "/images/avatars/avatar2.png",
    rating: 5
  },
  // Added 6 more
  {
    id: 7,
    name: "Robert Taylor",
    role: "Tech Store Manager",
    content: "The checkout counters are ergonomic and sleek. Staff loves them!",
    avatar: "/images/avatars/avatar3.png",
    rating: 5
  },
  {
    id: 8,
    name: "Lisa Anderson",
    role: "Gift Shop Owner",
    content: "Fast shipping and great packaging. Everything arrived in perfect condition.",
    avatar: "/images/avatars/avatar4.png",
    rating: 4
  },
  {
    id: 9,
    name: "James Martin",
    role: "Pharmacy Owner",
    content: "Professional team. They understood exactly what we needed for our pharmacy layout.",
    avatar: "/images/avatars/avatar5.png",
    rating: 5
  },
  {
    id: 10,
    name: "Kelly White",
    role: "Cosmetics Retailer",
    content: "The lighting in the display cases makes our products sparkle. Sales have increased!",
    avatar: "/images/avatars/avatar6.png",
    rating: 5
  },
  {
    id: 11,
    name: "Tom Harris",
    role: "Hardware Store Owner",
    content: "Heavy duty shelving that actually looks good. Very impressed with the load capacity.",
    avatar: "/images/avatars/avatar5.png",
    rating: 5
  },
  {
    id: 12,
    name: "Sophia Lee",
    role: "Pop-up Store Manager",
    content: "Quick turnaround time saved our opening day. Thank you Goodok!",
    avatar: "/images/avatars/avatar6.png",
    rating: 5
  }
];

// 将数据分成3列
const col1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
const col2 = [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)];
const col3 = [...testimonials.slice(8, 12), ...testimonials.slice(8, 12)];

export default function ClientTestimonials() {
  return (
    <div className="h-[600px] overflow-hidden relative">
      {/* 遮罩层实现顶部和底部渐隐效果 */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {/* Column 1 - Up */}
        <div className="relative h-full overflow-hidden">
             <div className="animate-marquee-up flex flex-col gap-6 absolute left-0 right-0">
                {col1.map((item, idx) => (
                    <TestimonialCard key={`col1-${idx}`} item={item} />
                ))}
             </div>
        </div>

        {/* Column 2 - Down (New Animation) */}
        <div className="relative h-full overflow-hidden hidden md:block">
             <div className="animate-marquee-down flex flex-col gap-6 absolute left-0 right-0" style={{ top: '-100%' }}> 
             {/* Note: Down animation needs starting position adjustment often, or keyframes from -100% to 0 */}
                {col2.map((item, idx) => (
                    <TestimonialCard key={`col2-${idx}`} item={item} />
                ))}
             </div>
        </div>

        {/* Column 3 - Up (Slower/Faster) */}
        <div className="relative h-full overflow-hidden hidden md:block">
             <div className="animate-marquee-up flex flex-col gap-6 absolute left-0 right-0" style={{ animationDuration: '45s' }}>
                {col3.map((item, idx) => (
                    <TestimonialCard key={`col3-${idx}`} item={item} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow mx-2">
      <div className="flex items-center gap-2 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-4">
        &quot;{item.content}&quot;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden relative">
            <Image 
                src={item.avatar} 
                alt={item.name} 
                fill 
                className="object-cover"
                sizes="40px"
            />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
          <p className="text-gray-500 text-xs">{item.role}</p>
        </div>
      </div>
    </div>
  );
}
