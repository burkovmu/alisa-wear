'use client';

import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">О нас</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-light mb-4">Наша история</h2>
          <p className="text-gray-600 mb-4">
            Основанный в 2020 году, магазин ALISA начал свой путь как небольшой бутик в центре Москвы. 
            Наша основательница, Алиса Петрова, всегда мечтала создать бренд, который будет сочетать 
            элегантность и комфорт для современных женщин.
          </p>
          <p className="text-gray-600 mb-4">
            С самого начала мы стремились предлагать не только качественную одежду, но и создавать 
            особое отношение к стилю. Каждая вещь в нашей коллекции имеет свою историю и создана 
            с особой заботой о деталях.
          </p>
          <p className="text-gray-600">
            Сегодня ALISA – это не просто магазин одежды, а сообщество женщин, которые ценят 
            индивидуальность, качество и современный дизайн.
          </p>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image 
            src="/images/about.jpg"
            alt="О магазине ALISA"
            fill
            className="object-cover"
            quality={90}
          />
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-light text-center mb-8">Наши ценности</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#fffaf7] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Качество</h3>
            <p className="text-gray-600">
              Мы используем только премиальные материалы и тщательно контролируем 
              каждый этап производства наших изделий.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#fffaf7] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Уникальность</h3>
            <p className="text-gray-600">
              Каждая коллекция разрабатывается нашими дизайнерами с учетом 
              последних тенденций и особенностей женской фигуры.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#fffaf7] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Забота</h3>
            <p className="text-gray-600">
              Мы заботимся не только о наших клиентах, но и об окружающей 
              среде, используя экологичные материалы и упаковку.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#fffaf7] p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-light text-center mb-8">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Эксклюзивные модели</h3>
              <p className="text-gray-600">Наши коллекции выпускаются ограниченным тиражом, что позволяет вам выделяться из толпы.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Высокое качество пошива</h3>
              <p className="text-gray-600">Каждое изделие проходит многоступенчатый контроль качества перед тем, как попасть к вам.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Комфорт и стиль</h3>
              <p className="text-gray-600">Мы создаем одежду, в которой вам будет комфортно и которая подчеркнет вашу индивидуальность.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Превосходный сервис</h3>
              <p className="text-gray-600">Мы стремимся предоставить лучший опыт покупок, от выбора до доставки и послепродажного обслуживания.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-12">
        <h2 className="text-2xl font-light mb-6">Присоединяйтесь к нам</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Мы всегда рады новым клиентам и партнерам. Если у вас есть вопросы или предложения, свяжитесь с нами!
        </p>
        <Link href="/contacts" className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
          Связаться с нами
        </Link>
      </div>
    </div>
  );
} 