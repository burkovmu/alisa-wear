'use client';

import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';

const newProducts = [
  {
    id: 1,
    name: 'Шелковый топ',
    price: 5900,
    image: '/images/products/product1.jpg',
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: 'Шелковый пиджак',
    price: 12900,
    image: '/images/products/product3.jpg',
    isNew: true,
    isSale: false,
  },
  {
    id: 5,
    name: 'Шелковый топ',
    price: 5900,
    image: '/images/products/product5.jpg',
    isNew: true,
    isSale: false,
  },
  {
    id: 7,
    name: 'Шелковый пиджак',
    price: 12900,
    image: '/images/products/product7.jpg',
    isNew: true,
    isSale: false,
  },
];

export default function NewCollectionPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-light mb-8">Новая коллекция</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
} 