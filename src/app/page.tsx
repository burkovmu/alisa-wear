'use client';

import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import CategoryCard from '@/components/category/CategoryCard';
import Slider from '@/components/slider/Slider';
import { Product } from '@/data/products';

const categories = [
  {
    id: 1,
    name: 'Юбки',
    image: '/images/categories/clothing.jpg',
    link: '/category/skirts'
  },
  {
    id: 2,
    name: 'Топы',
    image: '/images/categories/clothing.jpg',
    link: '/category/tops'
  },
  {
    id: 3,
    name: 'Платья',
    image: '/images/categories/clothing.jpg',
    link: '/category/dresses'
  },
  {
    id: 4,
    name: 'Пиджаки',
    image: '/images/categories/clothing.jpg',
    link: '/category/blazers'
  }
];

const popularProducts: Product[] = [
  {
    id: 1,
    name: 'Шелковый топ',
    price: 5900,
    category: 'tops',
    images: ['/images/products/product1.jpg'],
    colors: ['#000000', '#FFFFFF'],
    sizes: ['XS', 'S', 'M', 'L'],
    status: 'new',
    description: 'Элегантный шелковый топ'
  },
  {
    id: 2,
    name: 'Шерстяная юбка',
    price: 8900,
    category: 'skirts',
    images: ['/images/products/product2.jpg'],
    colors: ['#000000', '#808080'],
    sizes: ['S', 'M', 'L'],
    status: 'sale',
    description: 'Стильная шерстяная юбка'
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
    description: 'Элегантный шелковый пиджак'
  },
  {
    id: 4,
    name: 'Кружевное платье',
    price: 15900,
    category: 'dresses',
    images: ['/images/products/product4.jpg'],
    colors: ['#FFFFFF', '#000000'],
    sizes: ['XS', 'S', 'M', 'L'],
    status: 'sale',
    description: 'Изысканное кружевное платье'
  },
  {
    id: 5,
    name: 'Шелковый топ',
    price: 5900,
    category: 'tops',
    images: ['/images/products/product1.jpg'],
    colors: ['#000000', '#FFFFFF'],
    sizes: ['XS', 'S', 'M', 'L'],
    status: 'new',
    description: 'Элегантный шелковый топ'
  },
  {
    id: 6,
    name: 'Шерстяная юбка',
    price: 8900,
    category: 'skirts',
    images: ['/images/products/product2.jpg'],
    colors: ['#000000', '#808080'],
    sizes: ['S', 'M', 'L'],
    status: 'sale',
    description: 'Стильная шерстяная юбка'
  },
  {
    id: 7,
    name: 'Шелковый пиджак',
    price: 12900,
    category: 'blazers',
    images: ['/images/products/product3.jpg'],
    colors: ['#000000', '#808080'],
    sizes: ['S', 'M', 'L'],
    status: 'new',
    description: 'Элегантный шелковый пиджак'
  },
  {
    id: 8,
    name: 'Кружевное платье',
    price: 15900,
    category: 'dresses',
    images: ['/images/products/product4.jpg'],
    colors: ['#FFFFFF', '#000000'],
    sizes: ['XS', 'S', 'M', 'L'],
    status: 'sale',
    description: 'Изысканное кружевное платье'
  }
];

const benefits = [
  {
    id: 1,
    title: 'Качество',
    description: 'Только премиальные материалы'
  },
  {
    id: 2,
    title: 'Быстрая доставка',
    description: 'По всей России'
  },
  {
    id: 3,
    title: 'Безопасная оплата',
    description: 'Различные способы оплаты'
  }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero секция */}
      <section className="relative h-[80vh]">
        <Slider />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Новая коллекция</h1>
            <button className="bg-white text-black px-8 py-3 hover:bg-opacity-90 transition-colors duration-300">
              Смотреть
            </button>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">Категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-light">Популярные товары</h2>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-black">Все</button>
              <button className="text-black font-bold hover:text-black">Новая коллекция</button>
              <button className="text-red-500 font-bold hover:text-red-600">Sale</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Баннер новой коллекции */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Новая коллекция</h2>
                <p className="text-gray-600 mb-8">Откройте для себя нашу новую коллекцию</p>
                <button className="bg-black text-white px-8 py-3 hover:bg-opacity-90 transition-colors duration-300">
                  Смотреть
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="text-center">
                <h3 className="text-xl font-light mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
