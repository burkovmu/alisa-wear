'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Здесь будет логика отправки формы на сервер
    // Имитация отправки формы с задержкой
    setTimeout(() => {
      setSubmitResult({
        success: true,
        message: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.'
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Контакты</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-600 mb-8 text-center">
            Мы всегда рады помочь вам с любыми вопросами. Выберите удобный для вас способ связи или заполните форму обратной связи.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border border-gray-200 rounded-lg p-6 text-center transition-shadow hover:shadow-md">
            <div className="bg-[#fffaf7] p-4 rounded-full inline-flex items-center justify-center mb-4">
              <PhoneIcon className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-xl font-medium mb-2">Телефон</h2>
            <p className="text-gray-600 mb-2">
              Для заказов и обращений:
            </p>
            <a href="tel:+74951234567" className="text-black font-medium hover:underline">
              +7 (495) 123-45-67
            </a>
            <p className="text-gray-600 text-sm mt-3">
              Пн-Пт: 9:00-20:00<br />
              Сб-Вс: 10:00-18:00
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 text-center transition-shadow hover:shadow-md">
            <div className="bg-[#fffaf7] p-4 rounded-full inline-flex items-center justify-center mb-4">
              <EnvelopeIcon className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-xl font-medium mb-2">Email</h2>
            <p className="text-gray-600 mb-2">
              Для общих вопросов:
            </p>
            <a href="mailto:info@alisa-store.ru" className="text-black font-medium hover:underline">
              info@alisa-store.ru
            </a>
            <p className="text-gray-600 mt-3">
              Для работы с поставщиками:
            </p>
            <a href="mailto:partners@alisa-store.ru" className="text-black font-medium hover:underline">
              partners@alisa-store.ru
            </a>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 text-center transition-shadow hover:shadow-md">
            <div className="bg-[#fffaf7] p-4 rounded-full inline-flex items-center justify-center mb-4">
              <MapPinIcon className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-xl font-medium mb-2">Адрес</h2>
            <p className="text-gray-600 mb-2">
              Главный офис и шоурум:
            </p>
            <address className="text-black font-medium not-italic">
              г. Москва, ул. Тверская, 15<br />
              БЦ "Галерея", 3 этаж
            </address>
            <p className="text-gray-600 text-sm mt-3">
              Часы работы:<br />
              Пн-Вс: 10:00-22:00
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="bg-[#fffaf7] rounded-lg p-8">
            <h2 className="text-2xl font-light text-center mb-8">Напишите нам</h2>
            
            {submitResult ? (
              <div className={`text-center p-6 rounded-lg ${submitResult.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                <p className="font-medium mb-4">{submitResult.message}</p>
                <button 
                  onClick={() => setSubmitResult(null)} 
                  className="px-6 py-2 rounded bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Отправить еще сообщение
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Выберите тему</option>
                    <option value="order">Вопрос по заказу</option>
                    <option value="return">Возврат товара</option>
                    <option value="product">Информация о товаре</option>
                    <option value="cooperation">Сотрудничество</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded bg-black text-white hover:bg-gray-800 transition-colors disabled:bg-gray-500"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8">Как нас найти</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            {/* В реальном проекте здесь будет iframe с картой */}
            <div className="bg-gray-200 h-full flex items-center justify-center">
              <p className="text-gray-600">Карта расположения магазина будет здесь</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light mb-6">Мы в социальных сетях</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Следите за нашими новостями, акциями и новыми коллекциями в социальных сетях
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#fffaf7] hover:bg-[#fff3eb] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#fffaf7] hover:bg-[#fff3eb] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://telegram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#fffaf7] hover:bg-[#fff3eb] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M16.64,8.8c-0.15,1.58-0.8,5.42-1.13,7.19 c-0.14,0.75-0.42,1-0.68,1.03c-0.58,0.05-1.02-0.38-1.58-0.75c-0.88-0.58-1.38-0.94-2.23-1.5c-0.99-0.65-0.35-1.01,0.22-1.59 c0.15-0.15,2.71-2.48,2.76-2.69c0.01-0.03,0.01-0.13-0.05-0.18c-0.06-0.05-0.14-0.03-0.21-0.02c-0.09,0.02-1.49,0.95-4.22,2.79 c-0.4,0.27-0.76,0.41-1.08,0.4c-0.36-0.01-1.04-0.2-1.54-0.37c-0.63-0.2-1.12-0.31-1.08-0.66c0.02-0.18,0.27-0.36,0.74-0.55 c2.92-1.27,4.86-2.11,5.83-2.51c2.78-1.16,3.35-1.36,3.73-1.36c0.08,0,0.27,0.02,0.39,0.12c0.1,0.08,0.13,0.19,0.14,0.27 C16.64,8.43,16.65,8.58,16.64,8.8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 