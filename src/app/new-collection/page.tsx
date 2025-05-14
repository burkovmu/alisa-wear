'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { useProducts } from '@/context/ProductContext';
import { Product } from '@/data/products';

export default function NewCollectionPage() {
  const { products } = useProducts();
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filteredProducts = products.filter(product => product.status === 'new');
    setNewProducts(filteredProducts);
    setIsLoading(false);
  }, [products]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-black mb-8">Новая коллекция</h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-gray-500">Загрузка...</div>
          </div>
        ) : newProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            В настоящее время товары новой коллекции недоступны
          </div>
        )}
      </div>
    </Layout>
  );
} 