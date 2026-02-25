import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Envopure - Best Pest Control Services in Noida | Professional Pest Control Near Me",
  description: "Envopure offers professional pest control services in Noida NCR. Expert termite treatment, rodent control, cockroach control, bed bug treatment & mosquito control. Affordable & eco-friendly pest management solutions. Call now!",
  keywords: [
    "Envopure",
    "pest control services in Noida",
    "pest control in Noida NCR",
    "best pest control near me",
    "termite treatment Noida",
    "termite control services Noida",
    "rodent control Noida",
    "cockroach control Noida",
    "bed bug treatment Noida",
    "mosquito control Noida",
    "commercial pest control Noida",
    "residential pest control Noida",
    "affordable pest control Noida",
    "emergency pest control Noida",
    "professional pest exterminator Noida",
    "pest control services",
    "pest control near me",
    "exterminator near me",
    "termite inspection",
    "ant control services",
    "rodent removal",
    "bed bug exterminator",
    "mosquito pest control",
    "organic pest control",
    "eco-friendly pest control",
    "local pest control company",
    "pest management specialists"
  ],
  authors: [{ name: "Envopure" }],
  creator: "Envopure",
  publisher: "Envopure",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.envopure.in",
    siteName: "Envopure",
    title: "Envopure - Best Pest Control Services in Noida | Professional Pest Control Near Me",
    description: "Envopure offers professional pest control services in Noida NCR. Expert termite treatment, rodent control, cockroach control, bed bug treatment & mosquito control.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Envopure Pest Control Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envopure - Best Pest Control Services in Noida",
    description: "Professional pest control services in Noida NCR. Termite treatment, rodent control & more. Affordable & eco-friendly solutions.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.envopure.in",
  },
  verification: {
    google: "your-google-verification-code",
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
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
