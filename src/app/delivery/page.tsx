'use client';

import Layout from '@/components/layout/Layout';
import { TruckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function DeliveryPage() {
  return (
    <main>
      <div className="mobile-container px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Доставка</h1>
        
        <p className="mb-8 text-lg">
          Мы осуществляем доставку по всей России и странам СНГ. Выберите удобный для вас способ доставки.
        </p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Способы доставки</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <TruckIcon className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-medium">Курьерская доставка</h3>
              </div>
              <ul className="space-y-2">
                <li><span className="font-medium">Сроки:</span> 1-3 рабочих дня в Москве и Санкт-Петербурге, 3-7 дней по остальной России.</li>
                <li><span className="font-medium">Стоимость:</span> от 300 ₽, в зависимости от региона.</li>
                <li><span className="font-medium">Бесплатно:</span> при заказе от 5000 ₽ в Москве и Санкт-Петербурге, от 7000 ₽ по России.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-medium">Доставка в пункты выдачи</h3>
              </div>
              <ul className="space-y-2">
                <li><span className="font-medium">Сроки:</span> 2-5 рабочих дней в зависимости от региона.</li>
                <li><span className="font-medium">Стоимость:</span> от 200 ₽, в зависимости от региона.</li>
                <li><span className="font-medium">Бесплатно:</span> при заказе от 4000 ₽.</li>
                <li><span className="font-medium">Хранение:</span> 7 дней с момента поступления заказа в пункт выдачи.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Как отследить заказ</h2>
          <ol className="list-decimal list-inside space-y-3 pl-4">
            <li>После оформления заказа вы получите электронное письмо с номером для отслеживания.</li>
            <li>Войдите в личный кабинет на нашем сайте и перейдите в раздел "Мои заказы".</li>
            <li>Выберите нужный заказ и нажмите кнопку "Отследить".</li>
            <li>Вы сможете в режиме реального времени узнать, где находится ваш заказ и когда ожидать доставку.</li>
          </ol>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Часто задаваемые вопросы</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Сколько времени занимает доставка?</h3>
              <p>Сроки доставки зависят от вашего региона и выбранного способа доставки. В среднем от 1 до 7 рабочих дней.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Можно ли изменить адрес доставки после оформления заказа?</h3>
              <p>Да, вы можете изменить адрес доставки до момента отправки заказа. Для этого свяжитесь с нашей службой поддержки.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Как узнать, что мой заказ отправлен?</h3>
              <p>Вы получите уведомление по электронной почте и SMS, когда ваш заказ будет передан в службу доставки.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Осуществляете ли вы международную доставку?</h3>
              <p>Да, мы доставляем заказы в страны СНГ. Стоимость и сроки доставки рассчитываются индивидуально.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Можно ли выбрать удобное время доставки?</h3>
              <p>При курьерской доставке вы можете выбрать удобный временной интервал. Наш курьер свяжется с вами для уточнения деталей.</p>
            </div>
          </div>
        </section>
        
        <section>
          <p className="text-lg">
            Остались вопросы? <Link href="/contacts" className="text-blue-600 hover:underline">Свяжитесь с нами</Link>, и мы с радостью на них ответим.
          </p>
        </section>
      </div>
    </main>
  );
} 