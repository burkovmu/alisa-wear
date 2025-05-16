import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FavoriteProvider } from '@/context/FavoriteContext';
import { ProductProvider } from '@/context/ProductContext';
import { CartProvider } from '@/context/CartContext';
import ScrollToTop from './_app';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'ALISA - Магазин женской одежды',
  description: 'Магазин стильной женской одежды с уникальным дизайном и высоким качеством материалов',
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
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var storageKey = 'theme';
              var prefersDarkQuery = '(prefers-color-scheme: dark)';
              var mql = window.matchMedia(prefersDarkQuery);
              var supportsLocalStorage = !!window.localStorage;
              
              var getItem = function(key) {
                try {
                  return window.localStorage.getItem(key);
                } catch (e) {
                  return null;
                }
              }
              
              var setItem = function(key, value) {
                try {
                  window.localStorage.setItem(key, value);
                } catch (e) {
                  // ignore
                }
              }
              
              var getThemePreference = function() {
                if(supportsLocalStorage) {
                  var storedPrefs = getItem(storageKey);
                  if (storedPrefs) {
                    return storedPrefs;
                  }
                }
                return mql.matches ? 'dark' : 'light';
              }
            
              // Скрипт для прокрутки страницы наверх при навигации
              if (typeof window !== 'undefined') {
                window.history.scrollRestoration = 'manual';
              }
          `}} />
      </head>
      <body className={inter.className}>
        <ProductProvider>
          <FavoriteProvider>
            <CartProvider>
              <ScrollToTop />
              <Header />
              <main>
                {children}
              </main>
              <CartDrawer />
              {/* Глобальный футер для всего приложения */}
              <Footer />
            </CartProvider>
          </FavoriteProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
