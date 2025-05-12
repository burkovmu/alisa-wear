'use client';

import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/data/products';

const newProducts: Product[] = [
  {
    id: 1,
    name: 'Шелковый топ',
    price: 5900,
    category: 'tops',
    images: ['/images/products/product1.jpg'],
    colors: ['#000000', '#FFFFFF'],
    sizes: ['XS', 'S', 'M', 'L'],
    status: 'new',
    description: 'Легкий шелковый топ из новой коллекции'
  },
  {
    id: 3,
    name: 'Шелковый пиджак',
    price: 12900,
    category: 'blazers',
    images: ['/images/products/product3.jpg'],
    colors: ['#000000', '#808080'],
    sizes: ['S', 'M', 'L'],
    status: 'new',
    description: 'Элегантный шелковый пиджак из новой коллекции'
  },
  {
    id: 5,
    name: 'Шелковый топ',
    price: 5900,
    category: 'tops',
    images: ['/images/products/product5.jpg'],
    colors: ['#FFFFFF', '#FFD700'],
    sizes: ['XS', 'S', 'M'],
    status: 'new',
    description: 'Стильный шелковый топ из новой коллекции'
  },
  {
    id: 7,
    name: 'Шелковый пиджак',
    price: 12900,
    category: 'blazers',
    images: ['/images/products/product7.jpg'],
    colors: ['#000000', '#000080'],
    sizes: ['S', 'M', 'L', 'XL'],
    status: 'new',
    description: 'Модный шелковый пиджак из новой коллекции'
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