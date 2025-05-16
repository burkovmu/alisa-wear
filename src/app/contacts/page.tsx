'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ContactsPage() {
  return (
    <main>
      <div className="mobile-container px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Контакты</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-4">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Телефон</h3>
                  <p className="text-gray-700">+7 (800) 123-45-67</p>
                  <p className="text-sm text-gray-500 mt-1">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-4">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-gray-700">info@alisa-store.ru</p>
                  <p className="text-sm text-gray-500 mt-1">Ответим в течение 24 часов</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-4">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Адрес магазина</h3>
                  <p className="text-gray-700">г. Москва, ул. Тверская, д. 10</p>
                  <p className="text-sm text-gray-500 mt-1">Метро Тверская, 5 минут пешком</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-4">
                  <ClockIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Время работы</h3>
                  <p className="text-gray-700">Пн-Пт: 10:00 - 21:00</p>
                  <p className="text-gray-700">Сб-Вс: 11:00 - 20:00</p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Форма обратной связи</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-3 border"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-3 border"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-3 border"
                  placeholder="Укажите тему сообщения"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-3 border"
                  placeholder="Введите ваше сообщение"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Отправить
                </button>
              </div>
            </form>
          </section>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Карта</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Здесь будет карта с расположением магазина</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Часто задаваемые вопросы</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Как оформить заказ?</h3>
              <p>Выберите товары, добавьте их в корзину и следуйте инструкциям по оформлению заказа. Подробная информация доступна в разделе <Link href="/delivery" className="text-blue-600 hover:underline">Доставка</Link>.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Как вернуть товар?</h3>
              <p>Информацию о возврате товара можно найти в разделе <Link href="/returns" className="text-blue-600 hover:underline">Возврат</Link>.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Есть ли у вас программа лояльности?</h3>
              <p>Да, у нас есть программа лояльности для постоянных клиентов. За каждую покупку вы получаете бонусные баллы, которые можно использовать для скидки на следующие покупки.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 