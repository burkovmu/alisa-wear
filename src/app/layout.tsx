import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";
import { FavoriteProvider } from "@/context/FavoriteContext";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "ALISA - Магазин женской одежды",
  description: "Магазин женской одежды ALISA - стильная и качественная одежда для современной женщины",
  keywords: ["женская одежда", "платья", "юбки", "топы", "пиджаки", "мода", "стиль"],
  authors: [{ name: "ALISA" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${roboto.variable}`}>
      <body className="font-roboto bg-[rgb(var(--background-rgb))] text-[rgb(var(--foreground-rgb))]">
        <ProductProvider>
          <CartProvider>
            <FavoriteProvider>
              {children}
            </FavoriteProvider>
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
