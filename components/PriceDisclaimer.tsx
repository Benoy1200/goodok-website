"use client";

export default function PriceDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-gray-500 italic ${className}`}>
      <span className="font-medium">Typical range.</span> Prices vary based on specifications. Contact us for exact quote.
    </p>
  );
}
