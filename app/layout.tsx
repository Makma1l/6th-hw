import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { title } from "process";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header >
          <Navigation navLinks={[{title: 'Home', href: '/'},{title: 'About', href: '/about'}, {title: 'Services', href: '/services'},{title: 'Systems', href: '/systems'},]}  />
        </header>
        <main className="">
          {children}
          </main>
          <footer><Footer/></footer>
        </body>
    </html>
  );
}
