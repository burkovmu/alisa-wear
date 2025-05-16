'use client';

import Layout from '@/components/layout/Layout';
import { ArrowPathIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <main>
      <div className="mobile-container px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Возврат товаров</h1>
        
        <p className="mb-8 text-lg">
          Мы стремимся к тому, чтобы вы были полностью удовлетворены вашей покупкой. 
          Однако, если по какой-либо причине вы не удовлетворены, вы можете вернуть товар 
          в течение 14 дней с момента получения.
        </p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Условия возврата</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Товар можно вернуть, если:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Товар не был в употреблении</li>
                <li>Сохранены бирки и ярлыки</li>
                <li>Сохранена оригинальная упаковка</li>
                <li>Товар не имеет следов использования или повреждений</li>
                <li>Прошло не более 14 дней с момента получения</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Товар нельзя вернуть, если:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Товар был в использовании</li>
                <li>Отсутствуют или повреждены бирки и ярлыки</li>
                <li>Нарушена целостность упаковки</li>
                <li>Есть следы носки, загрязнения или повреждения</li>
                <li>Товар относится к категории нижнего белья или купальников</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Процесс возврата</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-4 inline-block">
                  <DocumentTextIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">1. Заполните заявку</h3>
                <p>
                  Заполните форму заявки на возврат в личном кабинете или свяжитесь с нами по телефону.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-4 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0-6.75h-3m3 0h3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">2. Упакуйте товар</h3>
                <p>
                  Упакуйте товар в оригинальную или подходящую защитную упаковку с сохранением всех бирок.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-4 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">3. Отправьте товар</h3>
                <p>
                  Отправьте товар по указанному адресу любой удобной для вас службой доставки.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-4 inline-block">
                  <ArrowPathIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">4. Получите возврат</h3>
                <p>
                  После проверки товара мы вернем деньги на указанный вами счет в течение 10 рабочих дней.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Часто задаваемые вопросы</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Сколько времени занимает возврат денег?</h3>
              <p>После получения и проверки возвращенного товара, деньги будут возвращены вам в течение 10 рабочих дней.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Можно ли обменять товар на другой размер?</h3>
              <p>Да, вы можете обменять товар на другой размер при наличии его в наличии. Для этого свяжитесь с нашей службой поддержки.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Кто оплачивает доставку при возврате?</h3>
              <p>Расходы на обратную доставку товара при возврате оплачивает покупатель, за исключением случаев возврата товара ненадлежащего качества.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Что делать, если товар оказался бракованным?</h3>
              <p>Если вы обнаружили дефект или брак, пожалуйста, свяжитесь с нами в течение 3 дней с момента получения товара. Мы заменим товар или вернем деньги, включая расходы на доставку.</p>
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