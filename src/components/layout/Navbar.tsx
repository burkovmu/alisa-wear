'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const categories = [
  { name: 'Платья', href: '/category/dresses' },
  { name: 'Блузки', href: '/category/blouses' },
  { name: 'Юбки', href: '/category/skirts' },
  { name: 'Брюки', href: '/category/pants' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link href="/" className="text-xl font-light">
            АЛИСА
          </Link>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className={`text-sm hover:text-gray-600 transition-colors ${
                  pathname === category.href ? 'text-black' : 'text-gray-500'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Иконки корзины и избранного */}
          <div className="flex items-center space-x-4">
            <Link href="/favorites" className="text-gray-500 hover:text-gray-900">
              <HeartIcon className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="text-gray-500 hover:text-gray-900">
              <ShoppingBagIcon className="w-6 h-6" />
            </Link>
          </div>

          {/* Мобильное меню */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню (выпадающее) */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className={`block py-2 text-sm ${
                  pathname === category.href ? 'text-black' : 'text-gray-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
} 