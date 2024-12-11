import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GalleryHorizontal, Home, Phone } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/ui/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "First Next.js app",
  description: "This is the starting point of next.js",
};
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <GalleryHorizontal className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={cn("antialiased")}
      >
        <FloatingNav navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
