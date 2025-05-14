'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, getProductById } from '@/data/products';

interface FavoriteContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  loadFavorites: () => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Функция загрузки избранных товаров из localStorage
  const loadFavorites = () => {
    if (typeof window === 'undefined') return;
    
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      try {
        const favoriteIds = JSON.parse(savedFavorites) as number[];
        
        // Преобразуем ID в объекты товаров
        const favoriteProducts: Product[] = favoriteIds
          .map(id => getProductById(id))
          .filter((product): product is Product => product !== undefined);
          
        setFavorites(favoriteProducts);
      } catch (error) {
        console.error("Ошибка при загрузке избранных товаров:", error);
        setFavorites([]);
      }
    } else {
      setFavorites([]);
    }
  };

  // Инициализация при первой загрузке
  useEffect(() => {
    loadFavorites();
    setIsInitialized(true);
    
    // Обработчик события изменения localStorage для синхронизации между вкладками
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'favorites') {
        loadFavorites();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const addToFavorites = (product: Product) => {
    // Проверяем, есть ли уже этот товар в избранном
    if (!favorites.some(p => p.id === product.id)) {
      const newFavorites = [...favorites, product];
      setFavorites(newFavorites);
      
      // Обновляем localStorage
      const favoriteIds = newFavorites.map(p => p.id);
      localStorage.setItem('favorites', JSON.stringify(favoriteIds));
      
      // Создаем и диспатчим событие для синхронизации в текущей вкладке
      const event = new Event('favoritesUpdated');
      window.dispatchEvent(event);
    }
  };

  const removeFromFavorites = (productId: number) => {
    const newFavorites = favorites.filter(p => p.id !== productId);
    setFavorites(newFavorites);
    
    // Обновляем localStorage
    const favoriteIds = newFavorites.map(p => p.id);
    localStorage.setItem('favorites', JSON.stringify(favoriteIds));
    
    // Создаем и диспатчим событие для синхронизации в текущей вкладке
    const event = new Event('favoritesUpdated');
    window.dispatchEvent(event);
  };

  const isFavorite = (productId: number) => {
    return favorites.some(p => p.id === productId);
  };

  return (
    <FavoriteContext.Provider value={{ 
      favorites, 
      addToFavorites, 
      removeFromFavorites, 
      isFavorite,
      loadFavorites
    }}>
      {isInitialized ? children : null}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoriteProvider');
  }
  return context;
} 