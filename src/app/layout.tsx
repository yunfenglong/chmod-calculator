import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@ant-design/v5-patch-for-react-19';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import the specified fonts
const mozillaHeadline = 'Mozilla Headline, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const mulish = 'Mulish, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const metadata: Metadata = {
  title: "Chmod Calculator",
  description: "A simple chmod permission calculator with Ant Design",
  other: {
    'preconnect-google-fonts': '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
