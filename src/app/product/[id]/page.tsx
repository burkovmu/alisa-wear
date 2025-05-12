'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useProducts } from '@/context/ProductContext';
import { useCart } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import { HeartIcon, ShoppingBagIcon, ChevronRightIcon, TruckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/data/products';

const colorMap: { [key: string]: string } = {
  'Черный': '#000000',
  'Белый': '#FFFFFF',
  'Бежевый': '#F5F5DC',
  'Серый': '#808080',
  'Бордовый': '#800000',
  'Розовый': '#FFC0CB',
  'Синий': '#0000FF',
  'Красный': '#FF0000',
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { products } = useProducts();
  const { openCart } = useCart();
  const product = products.find(p => p.id === parseInt(params.id));
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (product) {
      setCurrentImages(product.images || []);
      setCurrentSlide(0);
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        const favorites = JSON.parse(savedFavorites);
        setIsFavorite(favorites.includes(product.id));
      }
      
      // Сохранение товара в "Ранее просмотренные"
      const savedViewedItems = localStorage.getItem('recentlyViewed');
      let viewedItems = savedViewedItems ? JSON.parse(savedViewedItems) : [];
      
      // Удаляем текущий товар из списка, если он там есть
      viewedItems = viewedItems.filter((id: number) => id !== product.id);
      
      // Добавляем текущий товар в начало списка
      viewedItems.unshift(product.id);
      
      // Ограничиваем список до 4 товаров
      viewedItems = viewedItems.slice(0, 4);
      
      localStorage.setItem('recentlyViewed', JSON.stringify(viewedItems));
      
      // Загружаем ранее просмотренные товары для отображения
      if (viewedItems.length > 1) { // Более 1, потому что текущий товар тоже в списке
        const viewed = products.filter(p => 
          viewedItems.includes(p.id) && p.id !== product.id
        );
        setRecentlyViewed(viewed);
      }
    }
  }, [product, products]);

  useEffect(() => {
    if (product?.images && product.images.length > 0) {
      setCurrentImages(product.images);
    }
  }, [product?.images]);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setSelectedSize('');
    setCurrentSlide(0);
    
    // Если у товара есть изображения для этого цвета, загружаем их
    if (product?.colorImages && product?.colorImages[color]) {
      setCurrentImages(product.colorImages[color]);
    } else {
      // Иначе показываем общие изображения товара
      setCurrentImages(product?.images || []);
    }
  };

  const handleFavoriteClick = () => {
    const savedFavorites = localStorage.getItem('favorites');
    const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    if (isFavorite) {
      const newFavorites = favorites.filter((id: number) => id !== product?.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
      setNotification({ message: 'Товар удален из избранного', type: 'success' });
    } else {
      const newFavorites = [...favorites, product?.id];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(true);
      setNotification({ message: 'Товар добавлен в избранное', type: 'success' });
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setNotification({ message: 'Пожалуйста, выберите размер', type: 'error' });
      return;
    }

    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    const existingItemIndex = cart.findIndex(
      (item: any) => item.productId === product?.id && item.color === selectedColor && item.size === selectedSize
    );

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({
        productId: product?.id,
        color: selectedColor || product?.colors?.[0] || '',
        size: selectedSize,
        quantity: quantity
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setNotification({ message: 'Товар добавлен в корзину', type: 'success' });
    openCart();
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsTouching(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    if (!touchStartX.current || !touchEndX.current || !currentImages) return;
    
    const diffX = touchStartX.current - touchEndX.current;
    const threshold = 50; // минимальное расстояние для свайпа
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Свайп влево - следующий слайд
        setCurrentSlide((prev) => (prev < currentImages.length - 1 ? prev + 1 : prev));
      } else {
        // Свайп вправо - предыдущий слайд
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      }
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isMounted || !product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-gray-500">Загрузка...</div>
          </div>
        </div>
      </Layout>
    );
  }

  // Получаем похожие товары
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="text-gray-500 hover:text-gray-900">Главная</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href={`/category/${product.category}`} className="text-gray-500 hover:text-gray-900">{product.category}</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка с фотографиями - Мобильная версия (одна большая картинка со свайпом) */}
          <div className="lg:col-span-2 block md:hidden">
            {currentImages && currentImages.length > 0 ? (
              <div className="relative">
                <div 
                  className="relative aspect-[3/4] overflow-hidden rounded-lg"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onClick={() => {
                    setSelectedImageIndex(currentSlide);
                    setIsImageModalOpen(true);
                  }}
                >
                  <Image
                    src={currentImages[currentSlide]}
                    alt={`${product.name} - фото ${currentSlide + 1}`}
                    fill
                    className={`object-cover ${isTouching ? 'transition-none' : 'transition-opacity duration-300'}`}
                    priority
                    quality={80}
                    sizes="100vw"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                    {currentImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(index);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-[3/4] flex items-center justify-center text-gray-400 border border-gray-200 rounded-lg">
                Нет изображения
              </div>
            )}
          </div>

          {/* Левая колонка с фотографиями - Десктопная версия (сетка) */}
          <div className="lg:col-span-2 hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              {currentImages && currentImages.length > 0 ? (
                currentImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] overflow-hidden rounded-lg cursor-zoom-in"
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setIsImageModalOpen(true);
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - фото ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      quality={60}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                ))
              ) : (
                <div className="aspect-[3/4] flex items-center justify-center text-gray-400 border border-gray-200 rounded-lg">
                  Нет изображения
                </div>
              )}
            </div>
          </div>

          {/* Правая колонка с информацией */}
          <div className="product-info-card">
            <div>
              <h1 className="text-xl font-light mb-2">{product.name}</h1>
              <p className="text-2xl font-medium">{product.price.toLocaleString('ru-RU')} ₽</p>
            </div>

            {/* Цвета */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h2 className="text-sm font-medium mb-3">Цвет</h2>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      className={`w-8 h-8 rounded-full border transition-all ${
                        selectedColor === color 
                          ? 'ring-2 ring-black scale-110' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Размеры */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h2 className="text-sm font-medium mb-3">Размер</h2>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-1.5 text-sm border transition-all ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Количество */}
            <div>
              <h2 className="text-sm font-medium mb-3">Количество</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Кнопки корзины и избранного */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 text-base rounded transition-colors ${
                  selectedSize
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!selectedSize}
              >
                Добавить в корзину
              </button>
              <button
                onClick={handleFavoriteClick}
                className={`flex items-center justify-center py-3 px-4 rounded border transition-colors ${
                  isFavorite
                    ? 'bg-red-100 border-red-400 text-red-500 hover:bg-red-200'
                    : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-100'
                }`}
                style={{ minWidth: '48px', height: '48px' }}
                aria-label="Добавить в избранное"
              >
                {isFavorite ? (
                  <HeartIconSolid className="w-6 h-6" />
                ) : (
                  <HeartIcon className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Информация о доставке и дополнительных услугах */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TruckIcon className="w-4 h-4 text-gray-400" />
                <span>Бесплатная доставка от 5000 ₽</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ArrowPathIcon className="w-4 h-4 text-gray-400" />
                <span>Возврат в течение 14 дней</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Безопасная оплата онлайн</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>Подарочная упаковка с каждым заказом</span>
              </div>
            </div>
          </div>
        </div>

        {/* Описание */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <h2 className="text-lg font-medium mb-4">Описание</h2>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Рекомендации */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-light mb-8">С этим товаром покупают</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
        
        {/* Ранее просмотренные */}
        {recentlyViewed.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-light mb-8">Ранее просмотренные</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {recentlyViewed.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Модальное окно для увеличенного изображения */}
      {isImageModalOpen && currentImages && currentImages.length > 0 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4">
            <Image
              src={currentImages[selectedImageIndex]}
              alt={product.name}
              width={900}
              height={1200}
              className="object-contain"
              quality={60}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              unoptimized
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setIsImageModalOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Уведомления */}
      {notification && (
        <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transition-all ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {notification.message}
        </div>
      )}
    </Layout>
  );
} 