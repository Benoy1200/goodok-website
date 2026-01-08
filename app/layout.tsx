import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/schema";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goodokshop.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Goodok Shopfitting | Retail Display & Store Fixture Manufacturer",
    template: "%s | Goodok Shopfitting",
  },
  description:
    "Professional retail shelving, gondola racks & custom store fixtures manufacturer. 15+ years experience. Free 3D store design. Ships worldwide to USA, Middle East & Southeast Asia.",
  keywords: [
    "retail shelving",
    "gondola shelving",
    "store fixtures",
    "retail display",
    "shop fittings",
    "retail equipment",
    "store design",
    "commercial shelving",
  ],
  authors: [{ name: "Goodok Shopfitting" }],
  openGraph: {
    title: "Goodok Shopfitting | Retail Display & Store Fixture Manufacturer",
    description:
      "Professional retail shelving, gondola racks & custom store fixtures manufacturer. Free 3D store design.",
    url: "https://www.goodokshop.com",
    siteName: "Goodok Shopfitting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodok Shopfitting | Retail Display & Store Fixture Manufacturer",
    description:
      "Professional retail shelving, gondola racks & custom store fixtures manufacturer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 预加载关键资源 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Analytics 4 - 延迟加载 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4RH2V521C5"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4RH2V521C5', {
              'page_path': window.location.pathname,
              'anonymize_ip': true,
            });
          `}
        </Script>

        {/* 结构化数据 */}
        <OrganizationSchema />

        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
