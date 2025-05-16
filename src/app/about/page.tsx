'use client';

import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <div className="mobile-container px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">О нас</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">История нашего бренда</h2>
          <p className="mb-4">
            Наш магазин одежды "Алиса" был основан в 2020 году Алисой Петровой, 
            талантливым дизайнером с многолетним опытом работы в индустрии моды. 
            Наш бренд создан для современных женщин, которые ценят элегантность, 
            комфорт и уникальный стиль.
          </p>
          <p>
            С момента открытия мы стремимся предлагать нашим клиентам одежду 
            высочайшего качества, которая подчеркивает индивидуальность и 
            соответствует последним тенденциям моды.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Качество</h3>
              <p>
                Мы используем только высококачественные материалы и 
                сотрудничаем с проверенными производителями, чтобы 
                гарантировать долговечность нашей одежды.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Уникальность</h3>
              <p>
                Каждая модель в нашем магазине — это уникальное сочетание 
                стиля, комфорта и функциональности, созданное с любовью 
                к деталям.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Забота о среде</h3>
              <p>
                Мы стремимся минимизировать негативное влияние на 
                окружающую среду, используя экологичные материалы 
                и сокращая отходы производства.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Почему выбирают нас</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-medium">Эксклюзивные модели</span> — одежда, которую вы не найдете в других магазинах.</li>
            <li><span className="font-medium">Качественный пошив</span> — каждая деталь тщательно проработана.</li>
            <li><span className="font-medium">Комфорт</span> — наша одежда идеально сидит на фигуре и не стесняет движений.</li>
            <li><span className="font-medium">Стиль</span> — мы следим за последними тенденциями моды.</li>
            <li><span className="font-medium">Отличный сервис</span> — мы всегда готовы помочь с выбором и ответить на вопросы.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Присоединяйтесь к нам</h2>
          <p className="mb-4">
            Мы приглашаем вас стать частью нашего сообщества ценителей стиля и качества. 
            Следите за нашими новостями и новыми коллекциями в социальных сетях.
          </p>
          <p>
            Остались вопросы? <Link href="/contacts" className="text-blue-600 hover:underline">Свяжитесь с нами</Link>, и мы с радостью на них ответим.
          </p>
        </section>
      </div>
    </main>
  );
} 