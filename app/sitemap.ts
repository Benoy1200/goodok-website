import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://goodokshop.com";

    // Static pages
    const staticPages = [
        "",
        "/products",
        "/products/gondola-shelving",
        "/products/wall-shelving",
        "/products/display-cases",
        "/products/clothing-racks",
        "/products/checkout-counters",
        "/products/accessories",
        "/solutions",
        "/solutions/pop-culture",
        "/solutions/toy-store",
        "/solutions/jewelry-store",
        "/solutions/boutique",
        "/solutions/lifestyle",
        "/solutions/stationery",
        "/about",
        "/contact",
        "/free-3d-design",
        "/projects",
        "/faq",
        "/resources/blog",
        "/resources/blog/how-to-design-cosmetics-store",
        "/resources/blog/toy-store-shelving-ideas",
        "/resources/blog/how-to-open-pop-culture-store",
        "/resources/blog/jewelry-store-display-ideas",
        "/resources/blog/how-to-open-boutique",
        "/resources/blog/collectibles-store-design",
        "/resources/blog/toy-store-layout",
        "/resources/blog/accessories-store-fixtures",
        "/resources/blog/gondola-vs-wall-shelving",
        "/resources/blog/retail-fixtures-wholesale-guide",
        "/resources/blog/retail-shelving-cost-guide",
        "/resources/blog/gondola-shelving-dimensions",
        "/resources/blog/store-fixtures-vs-custom",
        "/resources/blog/how-to-choose-display-cases",
        "/privacy",
        "/terms",
    ];

    const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/free-3d-design" ? 0.9 : 0.8,
    }));

    return staticRoutes;
}
