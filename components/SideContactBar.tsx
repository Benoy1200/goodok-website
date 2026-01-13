"use client";

import { useState, useEffect } from "react";

// Extend Window interface for gtag
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (command: string, ...args: any[]) => void;
  }
}

const WHATSAPP_NUMBER = "8613822102050";
const PHONE_NUMBER = "+8613822102050";
const EMAIL = "info@goodokshop.com";

export default function SideContactBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show bar after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Initial check
    const timer = setTimeout(() => setIsVisible(true), 2000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const trackClick = (type: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", `side_contact_${type}_click`, {
        event_category: "engagement",
        event_label: `Side Contact Bar - ${type}`,
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
      {/* Phone */}
      <div
        className="relative group"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={() => trackClick("phone")}
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-l-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          aria-label="Call us"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        {/* Tooltip */}
        <div className={`absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <span className="text-sm font-medium text-gray-700">+86 138 2210 2050</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with retail fixtures")}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("whatsapp")}
        className="group relative flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-l-lg shadow-lg hover:bg-[#128C7E] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
        {/* Tooltip */}
        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <span className="text-sm font-medium text-gray-700">Chat on WhatsApp</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>
      </a>

      {/* Email */}
      <a
        href={`mailto:${EMAIL}`}
        onClick={() => trackClick("email")}
        className="group relative flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-l-lg shadow-lg hover:bg-orange-600 transition-all duration-300"
        aria-label="Send email"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {/* Tooltip */}
        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <span className="text-sm font-medium text-gray-700">info@goodokshop.com</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>
      </a>

      {/* Back to Top (optional, shown when scrolled) */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          trackClick("back_to_top");
        }}
        className="group relative flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-l-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        {/* Tooltip */}
        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <span className="text-sm font-medium text-gray-700">Back to Top</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>
      </button>
    </div>
  );
}
