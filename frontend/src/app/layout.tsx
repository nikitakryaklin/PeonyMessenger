import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { MainPrivider } from "./_mainPrivider";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Peony",
  description: "Peony - Pick me messenger",
  openGraph: {
    title: "Peony",
    description: "Peony - Pick me messenger",
    type: "website",
    images: [
      {
        url: "https://client.nikitakryaklin.ru/favicon-180x180.png",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/apple-touch-icon-180x180.png",
        color: "#e0b8ff",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMSans.variable} antialiased bg-[var(--white)]`}>
        <MainPrivider>{children}</MainPrivider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
