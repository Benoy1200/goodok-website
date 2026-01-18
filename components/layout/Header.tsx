"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Products for dropdown
const productItems = [
  { name: "Checkout Counters", href: "/products/checkout-counters" },
  { name: "Wall Shelving", href: "/products/wall-shelving" },
  { name: "Gondola Shelving", href: "/products/gondola-shelving" },
  { name: "Island Display Table", href: "/products/display-cases" },
  { name: "Clothing Racks", href: "/products/clothing-racks" },
  { name: "Accessories", href: "/products/accessories" },
];

// Solutions by Industry for dropdown
const solutionItems = [
  { name: "Vape & Smoke Shop", href: "/solutions/vape-shop" },
  { name: "Apparel Boutique", href: "/solutions/apparel-boutique" },
  { name: "Beauty & Nail Salon", href: "/solutions/beauty-salon" },
];

// Navigation items
const navigation = [
  {
    name: "Solutions by Industry",
    href: "/solutions",
    hasDropdown: true,
    dropdownType: "solutions",
  },
  {
    name: "Products",
    href: "/products",
    hasDropdown: true,
    dropdownType: "products",
  },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
      <nav className="container flex items-center justify-between py-5">
        {/* Logo - 左侧 */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-[160px]">
            <Image
              src="/images/goodok-logo-v2.png"
              alt="Goodok Shopfitting"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation - 紧跟Logo */}
        <div className="hidden lg:flex items-center gap-10 ml-8">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.dropdownType === "solutions") {
                    setSolutionsDropdownOpen(true);
                  } else {
                    setProductsDropdownOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (item.dropdownType === "solutions") {
                    setSolutionsDropdownOpen(false);
                  } else {
                    setProductsDropdownOpen(false);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[var(--primary)] font-semibold text-base flex items-center gap-1 transition-colors"
                >
                  {item.name}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Solutions Dropdown */}
                {item.dropdownType === "solutions" && solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-52">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      {solutionItems.map((solution) => (
                        <Link
                          key={solution.name}
                          href={solution.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[var(--accent)] transition-colors text-sm"
                        >
                          {solution.name}
                        </Link>
                      ))}
                      <hr className="my-2 border-gray-100" />
                      <Link
                        href="/solutions"
                        className="block px-4 py-2 text-[var(--accent)] hover:bg-gray-50 transition-colors text-sm font-medium"
                      >
                        View All Solutions →
                      </Link>
                    </div>
                  </div>
                )}

                {/* Products Dropdown */}
                {item.dropdownType === "products" && productsDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-48">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      {productItems.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[var(--accent)] transition-colors text-sm"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[var(--primary)] font-semibold text-base transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block ml-auto">
           <Link 
             href="/free-3d-design" 
             className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#E65000] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center gap-2"
           >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Free Design
           </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4">
          <div className="container flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[var(--accent)] font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Products Sub-items */}
            <div className="pl-4 border-l-2 border-gray-200 ml-2">
              {productItems.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="text-gray-500 hover:text-[var(--accent)] py-1 text-sm block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
            <hr className="border-gray-200" />
            <Link
              href="/free-3d-design"
              className="bg-[#FF6B00] text-white font-bold py-3 rounded-lg text-center hover:bg-[#E65000] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Layout Design
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
