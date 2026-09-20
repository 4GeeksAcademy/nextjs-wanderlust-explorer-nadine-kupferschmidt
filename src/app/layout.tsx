import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description:
    "Descubre experiencias únicas alrededor del mundo y encuentra tu próxima aventura.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <FavoritesProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
