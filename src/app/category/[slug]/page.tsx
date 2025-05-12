'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { useProducts } from '@/context/ProductContext';
import { categories } from '@/data/products';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const { getProductsByCategory } = useProducts();
  const [products, setProducts] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const categoryId = params.slug as string;

  useEffect(() => {
    setIsMounted(true);
    const categoryProducts = getProductsByCategory(categoryId);
    setProducts(categoryProducts);
  }, [categoryId, getProductsByCategory]);

  // Получаем название категории на русском
  const getCategoryName = (categoryId: string): string => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const categoryName = getCategoryName(categoryId);

  if (!isMounted) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-gray-500 tracking-wide">Загрузка...</div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        {/* Хлебные крошки */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="text-gray-500 hover:text-gray-900">Главная</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">{categoryName}</li>
          </ol>
        </nav>
        
        <h1 className="text-3xl font-light tracking-wider mb-12">
          {categoryName}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
} 