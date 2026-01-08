'use client';

import { useState } from 'react';

interface FAQItem {
    q: string;
    a: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    category: string;
}

export function FAQAccordion({ items, category }: FAQAccordionProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#004499] hover:shadow-md"
                >
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                        <h3 className="font-semibold text-gray-900 text-lg pr-4">
                            {item.q}
                        </h3>
                        <svg
                            className={`w-5 h-5 text-[#004499] flex-shrink-0 transition-transform duration-300 ${
                                expandedIndex === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </button>

                    {expandedIndex === index && (
                        <div className="px-6 py-4 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 animate-in fade-in duration-300">
                            <p className="text-gray-700 leading-relaxed">
                                {item.a}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
