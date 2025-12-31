import type { Metadata } from "next";
import { Inter, Expletus_Sans } from "next/font/google";
import "./globals.css";
import AppKitProvider from "@/src/components/appkit";
import { Toaster } from "react-hot-toast";

const expletusSans = Expletus_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-expletus",
});

export const metadata: Metadata = {
  title: "Prompt³D",
  description: "Worlds With Prompt³D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${expletusSans.variable}`}>
        <AppKitProvider>
          <Toaster />
          {children}
        </AppKitProvider>
      </body>
    </html>
  );
}
