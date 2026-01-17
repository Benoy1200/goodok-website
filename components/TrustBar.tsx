import React from 'react';

export default function TrustBar() {
  return (
    <section className="bg-gradient-to-r from-[#004499] to-[#0066cc] py-8 relative z-20 shadow-lg -mt-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white divide-x divide-white/20">
          <div className="flex flex-col items-center group cursor-default p-2">
            <span className="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">20,000㎡</span>
            <span className="text-blue-100 text-sm uppercase tracking-wider font-medium">Factory Area</span>
          </div>
          <div className="flex flex-col items-center group cursor-default p-2">
            <span className="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">15+</span>
            <span className="text-blue-100 text-sm uppercase tracking-wider font-medium">Years Experience</span>
          </div>
          <div className="flex flex-col items-center group cursor-default p-2">
            <span className="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">50+</span>
            <span className="text-blue-100 text-sm uppercase tracking-wider font-medium">Countries</span>
          </div>
          <div className="flex flex-col items-center group cursor-default p-2">
            <span className="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">Direct</span>
            <span className="text-blue-100 text-sm uppercase tracking-wider font-medium">Factory Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
