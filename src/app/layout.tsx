import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter, La_Belle_Aurore } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const laBelle = La_Belle_Aurore({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-la-belle", // Die Variable, die wir im CSS nutzen
});

export const metadata: Metadata = {
  title: {
    default: "sfalter / gallery",
    template: "%s / sfalter",
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
  authors: [{ name: "Sebastian Falter" }],
  creator: "sfalter",
  openGraph: {
    title: "sfalter | Custom Posters & Wallpapers",
    description:
      "Unique visual designs for your walls and digital devices. Designed by sfalter.",
    url: "https://gallery.sfalter.de", // Update with your chosen subdomain
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

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${laBelle.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
