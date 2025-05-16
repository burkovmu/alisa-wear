'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import CategoryCard from '@/components/category/CategoryCard';
import Slider from '@/components/slider/Slider';
import { Product } from '@/data/products';
import { useProducts } from '@/context/ProductContext';
import Link from 'next/link';
import { 
  SparklesIcon, 
  TruckIcon, 
  CreditCardIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const categories = [
  {
    id: 1,
    name: 'Юбки',
    image: '/images/categories/clothing.jpg', // Будет заменено динамически
    link: '/category/skirts',
    categoryId: 'skirts'
  },
  {
    id: 2,
    name: 'Топы',
    image: '/images/categories/clothing.jpg', // Будет заменено динамически
    link: '/category/tops',
    categoryId: 'tops'
  },
  {
    id: 3,
    name: 'Платья',
    image: '/images/categories/clothing.jpg', // Будет заменено динамически
    link: '/category/dresses',
    categoryId: 'dresses'
  },
  {
    id: 4,
    name: 'Пиджаки',
    image: '/images/categories/clothing.jpg', // Будет заменено динамически
    link: '/category/jackets',
    categoryId: 'jackets'
  }
];

const benefits = [
  {
    id: 1,
    title: 'Исключительное качество',
    description: 'Мы отбираем только премиальные материалы и тщательно контролируем процесс производства каждого изделия',
    icon: SparklesIcon,
    color: 'bg-white'
  },
  {
    id: 2,
    title: 'Удобная доставка',
    description: 'Быстрая доставка по всей России с возможностью отслеживания заказа и примерки перед покупкой',
    icon: TruckIcon,
    color: 'bg-white'
  },
  {
    id: 3,
    title: 'Безопасные платежи',
    description: 'Различные способы оплаты с защитой данных и возможностью оплаты при получении',
    icon: CreditCardIcon,
    color: 'bg-white'
  },
  {
    id: 4,
    title: 'Гарантия качества',
    description: 'Мы уверены в качестве нашей продукции и предоставляем гарантию возврата в течение 14 дней',
    icon: ShieldCheckIcon,
    color: 'bg-white'
  }
];

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const { products } = useProducts();
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'new' | 'sale'>('all');
  const [dynamicCategories, setDynamicCategories] = useState(categories);

  // Обновляем изображения категорий на основе товаров в каталоге
  useEffect(() => {
    if (products && products.length > 0) {
      const updatedCategories = categories.map(category => {
        // Находим все товары из данной категории
        const categoryProducts = products.filter(product => product.category === category.categoryId);
        
        if (categoryProducts.length > 0) {
          // Берем случайный товар из категории
          const randomProduct = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
          // Выбираем первое изображение товара
          const randomImage = randomProduct.images && randomProduct.images.length > 0 
            ? randomProduct.images[0] 
            : category.image; // Fallback на дефолтное изображение
          
          return {
            ...category,
            image: randomImage
          };
        }
        
        // Если товаров в категории нет, оставляем дефолтное изображение
        return category;
      });
      
      setDynamicCategories(updatedCategories);
    }
  }, [products]);

  // Обновляем популярные товары по выбранному фильтру
  useEffect(() => {
    if (products && products.length > 0) {
      let filteredProducts = [...products];
      
      // Применяем фильтр, если выбран
      if (selectedFilter === 'new') {
        filteredProducts = filteredProducts.filter(product => product.status === 'new');
      } else if (selectedFilter === 'sale') {
        filteredProducts = filteredProducts.filter(product => product.status === 'sale');
      }
      
      // Перемешиваем массив
      const shuffled = shuffleArray(filteredProducts);
      
      // Берем первые 8 товаров или меньше, если товаров меньше 8
      setPopularProducts(shuffled.slice(0, 8));
    }
  }, [products, selectedFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero секция */}
      <section className="relative h-[90vh] pt-2">
        <Slider />
      </section>

      {/* Категории */}
      <section className="py-16">
        <div className="mx-auto w-[95%] md:w-[80%] px-4 max-w-[1920px]">
          <h2 className="text-3xl font-light text-center mb-12">Категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dynamicCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto w-[95%] md:w-[80%] px-4 max-w-[1920px]">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-light">Популярные товары</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.length > 0 ? (
              popularProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-4 text-center py-12">
                <p className="text-gray-500">Товары не найдены</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Баннер новой коллекции */}
      <section className="py-16">
        <div className="mx-auto w-[95%] md:w-[80%] px-4 max-w-[1920px]">
          <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Новая коллекция</h2>
                <p className="text-gray-600 mb-8">Откройте для себя нашу новую коллекцию</p>
                <Link href="/new-collection" className="bg-black text-white px-8 py-3 hover:bg-opacity-90 transition-colors duration-300 inline-block">
                  Смотреть
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto w-[95%] md:w-[80%] px-4 max-w-[1920px]">
          <h2 className="text-3xl font-light text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit.id} 
                className="rounded-lg p-6 transition-all duration-300 hover:shadow-md bg-white border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#f9f9f9] p-4 rounded-full shadow-sm mb-5">
                    <benefit.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
