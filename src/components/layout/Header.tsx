'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagIcon, HeartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoriteContext';

const navigation = [
  { name: 'Юбки', href: '/category/skirts' },
  { name: 'Топы', href: '/category/tops' },
  { name: 'Платья', href: '/category/dresses' },
  { name: 'Пиджаки', href: '/category/jackets' },
  { name: 'New Collection', href: '/new' },
  { name: 'Sale', href: '/sale' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const pathname = usePathname();
  const { openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favorites } = useFavorites();
  const favoritesCount = favorites.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.length > 0);
  }, []);

  useEffect(() => {
    // Закрываем меню при изменении маршрута
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="h-28 flex items-center justify-between">
          {/* Логотип */}
          <Link href="/" className="relative w-32 h-8">
            <Image
              src="/images/logo.svg"
              alt="ALISA"
              fill
              className="object-contain"
            />
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wide hover:text-gray-600 transition-colors ${
                  pathname === item.href ? 'text-black border-b border-black' : 'text-gray-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Иконки */}
          <div className="flex items-center gap-4">
            <Link
              href="/favorites"
              className="relative p-2 hover:bg-gray-50 rounded-full transition-colors"
            >
              {isFavorite ? (
                <HeartIconSolid className="w-6 h-6 text-red-500" />
              ) : (
                <HeartIcon className="w-6 h-6" />
              )}
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <button
              onClick={openCart}
              className="p-2 hover:bg-gray-50 rounded-full transition-colors"
            >
              <ShoppingBagIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-gray-50 rounded-full transition-colors md:hidden"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Затемнение фона */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Панель меню */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="relative w-24 h-6">
                  <Image
                    src="/images/logo.svg"
                    alt="ALISA"
                    fill
                    className="object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-sm tracking-wide hover:text-gray-600 transition-colors ${
                      pathname === item.href ? 'text-black border-b border-black' : 'text-gray-500'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 