import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "sfalter | Custom Posters & Wallpapers",
    template: "%s | sfalter",
  },
  description:
    "Explore exclusive, self-designed posters and high-resolution wallpapers by sfalter. Unique digital art and printables for your space and screens.",
  keywords: [
    "Poster Design",
    "Digital Wallpapers",
    "sfalter",
    "Graphic Design Portfolio",
    "Minimalist Art",
    "High-Res Backgrounds",
    "Printable Art",
  ],
  authors: [{ name: "sfalter" }],
  creator: "sfalter",
  openGraph: {
    title: "sfalter | Custom Posters & Wallpapers",
    description:
      "Unique visual designs for your walls and digital devices. Designed by sfalter.",
    url: "https://art.sfalter.de", // Update with your chosen subdomain
    siteName: "sfalter Design",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "sfalter Design Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "sfalter | Custom Posters & Wallpapers",
    description:
      "Download high-quality wallpapers and discover unique poster designs by sfalter.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
