"use client";

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "8613822102050";

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Show button after a short delay for better UX
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSend = () => {
        const text = message.trim() || "Hi, I need help with retail fixtures";
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 z-50">
            {/* Chat Dialog Box */}
            {isOpen && (
                <div className="absolute bottom-20 left-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp">
                    {/* Header */}
                    <div className="bg-[#075E54] px-4 py-4 relative">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                <span className="text-white text-xl font-bold">G</span>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Goodok Support</h4>
                                <p className="text-green-200 text-xs">Typically replies within minutes</p>
                            </div>
                        </div>
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full text-white/70 hover:text-white flex items-center justify-center transition"
                        >
                            ×
                        </button>
                    </div>

                    {/* Chat Content */}
                    <div className="p-4 bg-[#ECE5DD] min-h-[100px]">
                        <div className="bg-white rounded-lg p-3 shadow-sm max-w-[85%]">
                            <p className="text-gray-700 text-sm">
                                👋 How may I help you? :)
                            </p>
                            <span className="text-gray-400 text-xs block text-right mt-1">Just now</span>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-[#F0F0F0] flex items-center gap-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Write your message..."
                            className="flex-1 bg-white rounded-full px-4 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            onClick={handleSend}
                            className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition flex-shrink-0"
                        >
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* WhatsApp Icon Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative"
                aria-label="Chat on WhatsApp"
            >
                {/* Pulse animation ring */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>

                {/* Main button */}
                <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    {isOpen ? (
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-7 h-7 fill-white"
                        >
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                    )}
                </div>

                {/* Hover tooltip - only show when dialog is closed */}
                {!isOpen && (
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-700">Chat with us!</span>
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-white"></div>
                    </div>
                )}
            </button>
        </div>
    );
}
