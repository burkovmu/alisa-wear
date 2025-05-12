'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, initialProducts } from '@/data/products';

interface ProductContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;
  getProductById: (id: number) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
  getSaleProducts: () => Product[];
  getNewProducts: () => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        return JSON.parse(savedProducts);
      }
      localStorage.setItem('products', JSON.stringify(initialProducts));
      return initialProducts;
    }
    return initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const getProductById = (id: number): Product | undefined => {
    return products.find(p => p.id === id);
  };

  const getProductsByCategory = (category: string): Product[] => {
    return products.filter(p => p.category === category);
  };

  const getSaleProducts = (): Product[] => {
    return products.filter(p => p.status === 'sale');
  };

  const getNewProducts = (): Product[] => {
    return products.filter(p => p.status === 'new');
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        getProductById,
        getProductsByCategory,
        getSaleProducts,
        getNewProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
} 