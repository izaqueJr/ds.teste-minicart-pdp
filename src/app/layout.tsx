import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { CartProvider } from "@/context/cart";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="PT-BR">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
