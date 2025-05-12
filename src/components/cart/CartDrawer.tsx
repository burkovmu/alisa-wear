'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useProducts } from '@/context/ProductContext';
import { useCart } from '@/context/CartContext';

interface CartItem {
  productId: number;
  size: string;
  color: string;
  quantity: number;
}

export default function CartDrawer() {
  const { products } = useProducts();
  const { isCartOpen, closeCart } = useCart();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  const removeItem = (index: number) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Затемнение фона */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Панель корзины */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[420px] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Заголовок */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-light tracking-wide">Корзина</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-gray-50 rounded-full transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Содержимое корзины */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length > 0 ? (
              <div className="space-y-6">
                {cartItems.map((item, index) => {
                  const product = products.find(p => p.id === item.productId);
                  if (!product) return null;

                  return (
                    <div key={index} className="flex gap-4">
                      <div className="relative w-24 h-32 flex-shrink-0">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link 
                          href={`/product/${product.id}`}
                          className="text-sm font-medium hover:underline tracking-wide"
                        >
                          {product.name}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1 tracking-wide">
                          Размер: {item.size} | Цвет: {item.color}
                        </p>
                        <div className="flex items-center gap-6 mt-3">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-colors"
                            >
                              -
                            </button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(index)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium tracking-wide">
                          {(product.price * item.quantity).toLocaleString('ru-RU')} ₽
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500 tracking-wide">
                Корзина пуста
              </div>
            )}
          </div>

          {/* Итого и кнопка оформления */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-gray-100">
              <div className="flex justify-between mb-6">
                <span className="text-gray-500 tracking-wide">Итого</span>
                <span className="font-medium tracking-wide">{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
              </div>
              <Link
                href="/cart"
                className="block w-full bg-black text-white text-center py-4 hover:bg-gray-800 transition-colors tracking-wide"
                onClick={closeCart}
              >
                Оформить заказ
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 