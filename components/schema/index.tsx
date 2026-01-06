// Schema components for SEO structured data
// 结构化数据组件

import type { ReactNode } from "react";

interface OrganizationSchemaProps {
    name?: string;
    url?: string;
    logo?: string;
    description?: string;
}

export function OrganizationSchema({
    name = "Goodok Shopfitting",
    url = "https://www.goodokshop.com",
    logo = "https://www.goodokshop.com/favicon.ico",
    description = "Professional retail shelving, gondola racks & custom store fixtures manufacturer.",
}: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        url,
        logo,
        description,
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+86-138-2210-2050",
            contactType: "sales",
            availableLanguage: ["English", "Chinese"],
        },
        sameAs: [
            "https://www.tiktok.com/@goodokofficial",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ProductSchemaProps {
    name: string;
    description: string;
    image?: string;
    brand?: string;
    category?: string;
}

export function ProductSchema({
    name,
    description,
    image = "https://www.goodokshop.com/images/product-placeholder.jpg",
    brand = "Goodok",
    category = "Retail Fixtures",
}: ProductSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        image,
        brand: {
            "@type": "Brand",
            name: brand,
        },
        category,
        manufacturer: {
            "@type": "Organization",
            name: "Goodok Shopfitting",
        },
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "0",
            priceValidUntil: "2026-12-31",
            url: "https://www.goodokshop.com/free-3d-design",
            seller: {
                "@type": "Organization",
                name: "Goodok Shopfitting",
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ArticleSchemaProps {
    headline: string;
    description: string;
    image?: string;
    datePublished?: string;
    author?: string;
}

export function ArticleSchema({
    headline,
    description,
    image = "https://www.goodokshop.com/images/blog-placeholder.jpg",
    datePublished = new Date().toISOString(),
    author = "Goodok Team",
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        image,
        datePublished,
        author: {
            "@type": "Person",
            name: author,
        },
        publisher: {
            "@type": "Organization",
            name: "Goodok Shopfitting",
            logo: {
                "@type": "ImageObject",
                url: "https://www.goodokshop.com/favicon.ico",
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
