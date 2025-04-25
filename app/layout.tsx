import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter", // opsional, untuk dipakai via CSS
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat", // opsional
});

export const metadata: Metadata = {
    title: "Okky Maheswara | Portfolio",
    description: "Portofolio digital Okky Maheswara — desainer kreatif dan pengembang front-end yang fokus pada pengalaman pengguna dan desain yang elegan.",
    keywords: ["Okky Maheswara", "Mahesora", "portfolio", "web developer", "UI/UX designer", "front-end developer"],
    authors: [{ name: "Okky Maheswara", url: "https://mahesora.id/" }],
    creator: "Okky Maheswara",
    publisher: "Mahesora",
    metadataBase: new URL("https://mahesora.id/"), // ganti dengan domain aslimu

    icons: {
        icon: "/assets/images/logo.png", // default berada pada folder "/public/"
        shortcut: "/assets/images/logo.png",
        apple: "/apple-touch-icon.png", // opsional, bisa bikin versi khusus Apple
    },

    openGraph: {
        title: "Okky Maheswara | Creative Portfolio",
        description: "Jelajahi karya dan proyek digital dari Okky Maheswara, seorang desainer dan pengembang web yang menggabungkan estetika dan teknologi.",
        url: "https://mahesora.id",
        siteName: "Mahesora",
        images: [
            {
                url: "/og-image.png", // preview image, letakkan di public/og-image.png
                width: 1200,
                height: 630,
                alt: "Preview portfolio Okky Maheswara",
            },
        ],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Okky Maheswara | Portfolio",
        description: "Desainer & Developer. Karya, proyek, dan eksplorasi digital dari Okky Maheswara.",
        creator: "@yourtwitter", // opsional
        images: ["/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${montserrat.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
