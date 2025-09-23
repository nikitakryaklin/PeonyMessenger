import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { MainPrivider } from "./_mainPrivider";
import { Header } from "@/widgets";
import { icons } from "lucide-react";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Peony",
  description: "Peony - the beast messanger",
  openGraph: {
    images: "/icon/logo-180x180.svg",
  },
  icons: {
    icon: [
      { url: "/icon/logo-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon/logo-32x32.png", sizes: "32x32", type: "image/png" },
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
