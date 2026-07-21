import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Alien MKT | Experiência Imersiva de Alta Performance",
  description: "O seu negócio precisa de mais do que um site. Precisa de uma máquina de conversão invisível.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-[#020205] text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
