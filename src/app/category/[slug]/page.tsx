'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { useProducts } from '@/context/ProductContext';

export default function CategoryPage() {
  const params = useParams();
  const { getProductsByCategory } = useProducts();
  const [products, setProducts] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const categoryProducts = getProductsByCategory(params.slug as string);
    setProducts(categoryProducts);
  }, [params.slug, getProductsByCategory]);

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
        <h1 className="text-3xl font-light tracking-wider mb-12">
          {params.slug === 'tops' && 'Топы'}
          {params.slug === 'bottoms' && 'Брюки'}
          {params.slug === 'dresses' && 'Платья'}
          {params.slug === 'outerwear' && 'Верхняя одежда'}
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