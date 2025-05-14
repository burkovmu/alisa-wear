'use client';

import Layout from '@/components/layout/Layout';
import { TruckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function DeliveryPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Доставка</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-600 mb-8 text-center">
            Мы осуществляем доставку по всей России и в страны СНГ.
            Выберите удобный для вас способ доставки и получите ваш заказ в кратчайшие сроки.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#fffaf7] p-3 rounded-full mr-4">
                <TruckIcon className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-xl font-medium">Курьерская доставка</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Доставка по Москве: 1-2 рабочих дня</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Доставка по Санкт-Петербургу: 2-3 рабочих дня</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Доставка по другим городам России: 3-7 рабочих дней</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Стоимость доставки: 350 ₽ (бесплатно при заказе от 5000 ₽)</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Возможна примерка перед покупкой (до 15 минут)</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#fffaf7] p-3 rounded-full mr-4">
                <GlobeAltIcon className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-xl font-medium">Доставка в пункты выдачи</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Доставка в пункты выдачи по всей России</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Более 15000 пунктов выдачи</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Срок доставки: 2-7 рабочих дней</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Стоимость доставки: 250 ₽ (бесплатно при заказе от 3000 ₽)</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Срок хранения заказа: до 7 дней</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8">Часто задаваемые вопросы о доставке</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Как долго осуществляется доставка?</h3>
              <p className="text-gray-600">
                Сроки доставки зависят от выбранного способа и региона. В Москве и Санкт-Петербурге доставка 
                занимает 1-3 рабочих дня, в другие города России — от 3 до 7 рабочих дней. Точный срок доставки 
                вы увидите при оформлении заказа.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Можно ли изменить адрес доставки после оформления заказа?</h3>
              <p className="text-gray-600">
                Да, вы можете изменить адрес доставки, связавшись с нашей службой поддержки клиентов не позднее, 
                чем за 24 часа до отправки заказа. После того как заказ отправлен, изменить адрес доставки 
                будет невозможно.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Что делать, если я не получил заказ в указанный срок?</h3>
              <p className="text-gray-600">
                Если вы не получили заказ в указанный срок, пожалуйста, проверьте статус доставки в личном кабинете 
                или свяжитесь с нашей службой поддержки. Мы всегда готовы помочь вам отследить ваш заказ.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Осуществляете ли вы доставку за границу?</h3>
              <p className="text-gray-600">
                Да, мы осуществляем международную доставку в страны СНГ. Стоимость и сроки доставки зависят от страны 
                назначения. Для уточнения деталей, пожалуйста, свяжитесь с нашей службой поддержки.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Можно ли заказать доставку на определенное время?</h3>
              <p className="text-gray-600">
                При заказе курьерской доставки по Москве и Санкт-Петербургу вы можете выбрать удобный для вас временной 
                интервал (утро, день, вечер). Точное время доставки согласовывается с курьером в день доставки.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light mb-6">Остались вопросы?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Если у вас остались вопросы по доставке, пожалуйста, свяжитесь с нашей службой поддержки. Мы всегда рады помочь!
          </p>
          <Link href="/contacts" className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            Связаться с нами
          </Link>
        </div>
      </div>
    </Layout>
  );
} 