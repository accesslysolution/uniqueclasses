import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import layout components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Import your new floating action buttons from ui
import { FloatingContactActions } from "@/components/ui/FloatingContactActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unique Classes | Empowering Minds for Academic Excellence",
  description: "Leading coaching for 8th-12th Science, JEE, and NEET in Pune.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-body font-sans">
        {/* Navbar sits at the top of all pages */}
        <Navbar />
        
        {/* Main content expands to fill space so footer stays at bottom */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer sits at the bottom of all pages */}
        <Footer />

        {/* Fixed utility actions layer */}
        <FloatingContactActions />
      </body>
    </html>
  );
}