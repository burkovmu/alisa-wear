import type { Metadata } from "next";
import "./globals.css";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";
import { FavoriteProvider } from "@/context/FavoriteContext";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, max-age=0, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Принудительная перезагрузка при изменении скрытой iframe
            (function() {
              if (!window.location.href.includes('localhost')) {
                const preventCache = () => {
                  // Добавляем временную метку для предотвращения кэширования
                  const timestamp = new Date().getTime();
                  const links = document.getElementsByTagName('link');
                  for (let i = 0; i < links.length; i++) {
                    if (links[i].rel === 'stylesheet') {
                      links[i].href = links[i].href.replace(/\\?.*|$/, '?t=' + timestamp);
                    }
                  }
                  
                  // Форсируем перезагрузку контента
                  setTimeout(() => {
                    window.location.reload(true);
                  }, 30000); // Проверка каждые 30 секунд
                };
                
                // Запускаем при загрузке страницы
                window.addEventListener('load', preventCache);
                
                // Запускаем при переходе между страницами
                if (window.history && window.history.pushState) {
                  window.addEventListener('popstate', preventCache);
                }
              }
            })();
          `
        }} />
      </head>
      <body className="font-sans bg-[rgb(var(--background-rgb))] text-[rgb(var(--foreground-rgb))]">
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
