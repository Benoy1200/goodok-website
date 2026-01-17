import React from 'react';

export default function ServiceProcess() {
  const steps = [
    {
      number: "01",
      title: "Consult",
      desc: "Send us your floor plan or requirements. We discuss your brand vision.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Design",
      desc: "Get free 3D renderings and layout planning within 24-48 hours.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Manufacture",
      desc: "Precision manufacturing in our 20,000㎡ factory with strict QC.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Delivery",
      desc: "Safe packaging and global shipping to your door / port.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
            <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">One-Stop Solution Process</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-4 rounded-full"></div>
         </div>
         
         <div className="grid md:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[45px] left-[12%] right-[12%] h-[2px] bg-gray-100 -z-0"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative bg-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 group text-center border border-gray-50 z-10">
                 <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300 shadow-sm relative">
                    {step.icon}
                 </div>
                 <div className="text-xs font-bold text-gray-300 mb-2 uppercase tracking-widest">STEP {step.number}</div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                 
                 {/* Mobile Arrow */}
                 {index < steps.length - 1 && (
                   <div className="md:hidden mt-6 text-gray-300 flex justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                     </svg>
                   </div>
                 )}
              </div>
            ))}
         </div>
         
         <div className="text-center mt-12">
            <a href="/free-3d-design" className="btn btn-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-blue-500/30 font-bold tracking-wide">
               Start Your Project Now
            </a>
         </div>
      </div>
    </section>
  );
}
