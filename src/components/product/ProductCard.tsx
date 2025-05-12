'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import { useFavorites } from '@/context/FavoriteContext';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const pathname = usePathname();
  const isCategoryPage = pathname.startsWith('/category/');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      setSelectedImage(0);
    }
  }, [product.colors]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
      setNotification({ type: 'success', message: 'Товар удален из избранного' });
    } else {
      addToFavorites(product);
      setNotification({ type: 'success', message: 'Товар добавлен в избранное' });
    }

    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  // Базовый рендер для сервера
  if (!isMounted) {
    return (
      <div className="group relative">
        <div className="relative aspect-[3/4] overflow-hidden">
          {product.images && product.images.length > 0 ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Нет изображения
            </div>
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-light tracking-wide">{product.name}</h3>
          <p className="mt-1 text-sm font-medium tracking-wide">{product.price.toLocaleString('ru-RU')} ₽</p>
        </div>
      </div>
    );
  }

  // Клиентский рендер
  return (
    <div className="group relative">
      <div className="relative">
        <Link href={`/product/${product.id}`} className="block">
          <div 
            className="relative aspect-[3/4] overflow-hidden"
            onMouseEnter={() => product.images && product.images.length > 1 && setSelectedImage(1)}
            onMouseLeave={() => setSelectedImage(0)}
          >
            {product.images && product.images.length > 0 ? (
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={selectedImage === 0}
                loading={selectedImage === 0 ? 'eager' : 'lazy'}
                quality={60}
                unoptimized
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gray-100">
                <span className="text-gray-400">Нет изображения</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            
            {/* Статус продукта */}
            {product.status && (
              <div className="absolute top-2 left-2">
                {product.status === 'new' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-bold bg-black text-white">
                    New
                  </span>
                )}
                {product.status === 'sale' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-bold bg-red-500 text-white">
                    Sale
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-light tracking-wide">{product.name}</h3>
            <p className="mt-1 text-sm font-medium tracking-wide">{product.price.toLocaleString('ru-RU')} ₽</p>
          </div>
        </Link>

        {/* Кнопка избранного */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleFavoriteClick}
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
          >
            {isFavorite(product.id) ? (
              <HeartIconSolid className="w-5 h-5 text-red-500" />
            ) : (
              <HeartIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Уведомление */}
      {notification && (
        <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm tracking-wide ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {notification.message}
        </div>
      )}

      {/* Цвета */}
      {product.colors && product.colors.length > 0 && (
        <div className="mt-2 flex gap-1">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
        </div>
      )}
    </div>
  );
} 