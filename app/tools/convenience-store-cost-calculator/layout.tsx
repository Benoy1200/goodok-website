import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mini Mart Setup Estimator: How Much to Open a Convenience Store (2026) | Goodok",
    description: "Most convenience store owners overspend 20-40% on fixtures. Get a realistic budget estimate in 5 minutes — avoid the common traps before you talk to suppliers.",
    keywords: [
        "convenience store startup cost",
        "how much to open a mini mart",
        "convenience store fixture budget",
        "mini mart setup cost",
        "convenience store setup calculator",
        "open a convenience store checklist",
        "c-store startup expenses",
        "mini mart shelving cost",
    ],
    openGraph: {
        title: "Mini Mart Setup Estimator | Avoid Overspending on Fixtures",
        description: "Most store owners overspend 20-40% on fixtures. Get a realistic budget estimate in 5 minutes.",
        type: "website",
    },
};

export default function ConvenienceStoreCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
