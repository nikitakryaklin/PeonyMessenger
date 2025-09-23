import type { Metadata } from "next";
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
  description: "Peony - the best messenger",
  openGraph: {
    title: "Peony",
    description: "Peony - the best messenger",
    images: [{ url: "/icon/favicon-180x180.svg" }],
  },
  icons: {
    icon: [
      { url: "/icon/favicon.ico" },
      { url: "/icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon/apple-touch-icon.png",
        color: "#e0b8ff",
      },
    ],
  },
  manifest: "/site.webmatifest",
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
