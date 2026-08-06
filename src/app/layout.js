import { DM_Sans, Manrope } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
    variable: "--font-body",
    subsets: ["latin"],
    display: "swap",
});

const manrope = Manrope({
    variable: "--font-heading",
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} | Premium Bubble Tea`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: [
        "bubble tea",
        "boba tea",
        "milk tea",
        "fruit tea",
        "tapioca pearls",
    ],
    authors: [
        {
            name: siteConfig.name,
        },
    ],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: `${siteConfig.name} | Premium Bubble Tea`,
        description: siteConfig.description,
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} | Premium Bubble Tea`,
        description: siteConfig.description,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${dmSans.variable} ${manrope.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
            >
                <div className="flex min-h-screen flex-col">
                    <Header />

                    <div className="flex-1">
                        {children}
                    </div>

                    <Footer />
                </div>
            </body>
        </html>
    );
}