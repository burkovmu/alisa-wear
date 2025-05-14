'use client';

import Layout from '@/components/layout/Layout';
import { ArrowPathIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Возврат товаров</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-600 mb-8 text-center">
            Мы стремимся к тому, чтобы вы были полностью удовлетворены своей покупкой.
            Если по какой-либо причине товар вам не подошел, вы можете вернуть его в течение 14 дней с момента получения.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8">Условия возврата</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-[#fffaf7] p-3 rounded-full mr-4">
                  <ArrowPathIcon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-medium">Что можно вернуть</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Товары, не бывшие в употреблении</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Товары с сохраненными ярлыками и бирками</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Товары в оригинальной упаковке (если применимо)</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Товары, не имеющие следов носки и использования</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Товары, купленные не более 14 дней назад</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-[#fffaf7] p-3 rounded-full mr-4">
                  <DocumentTextIcon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-medium">Что нельзя вернуть</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Товары, бывшие в употреблении или со следами носки</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Товары без оригинальных ярлыков и бирок</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Товары со скидкой более 50% (только обмен при наличии брака)</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Нижнее белье, носки, купальники (по гигиеническим соображениям)</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Товары, купленные более 14 дней назад</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-[#fffaf7] rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-light text-center mb-8">Процесс возврата</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-semibold">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Заполните заявку</h3>
              <p className="text-gray-600">
                Заполните форму заявки на возврат в личном кабинете или свяжитесь с нами по телефону
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-semibold">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Упакуйте товар</h3>
              <p className="text-gray-600">
                Упакуйте товар в оригинальную или подходящую упаковку вместе с заполненным заявлением
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-semibold">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Отправьте товар</h3>
              <p className="text-gray-600">
                Отправьте товар через курьерскую службу или принесите в один из наших магазинов
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-semibold">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Получите возврат</h3>
              <p className="text-gray-600">
                После проверки товара мы вернем деньги на вашу карту или банковский счет в течение 10 дней
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-light text-center mb-8">Часто задаваемые вопросы о возврате</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Как быстро я получу деньги за возвращенный товар?</h3>
              <p className="text-gray-600">
                После того как мы получим и проверим возвращенный товар, денежные средства будут возвращены 
                на вашу банковскую карту или счет в течение 10 рабочих дней. Точный срок зависит от вашего банка.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Могу ли я обменять товар на другой размер или цвет?</h3>
              <p className="text-gray-600">
                Да, вы можете обменять товар на другой размер или цвет при наличии нужного товара на складе. 
                Для этого следуйте той же процедуре, что и при возврате, указав в заявлении, что вы хотите обменять товар.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Кто оплачивает доставку при возврате товара?</h3>
              <p className="text-gray-600">
                Если товар возвращается по причине брака или ошибки с нашей стороны, мы полностью компенсируем стоимость 
                доставки. В других случаях расходы на доставку товара обратно несет покупатель.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Что делать, если товар оказался бракованным?</h3>
              <p className="text-gray-600">
                Если вы обнаружили брак или дефект товара, пожалуйста, сообщите нам об этом в течение 3 дней после 
                получения. Приложите фотографии дефекта к вашему заявлению на возврат. Мы вернем вам полную стоимость 
                товара и компенсируем расходы на доставку.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Можно ли вернуть товар, купленный со скидкой?</h3>
              <p className="text-gray-600">
                Товары, купленные со скидкой до 50%, можно вернуть на общих основаниях. Товары со скидкой более 50% 
                возврату не подлежат, но могут быть обменены при наличии производственного брака.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light mb-6">Нужна помощь с возвратом?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Если у вас возникли вопросы по процедуре возврата или вам нужна помощь, пожалуйста, свяжитесь с нашей службой поддержки.
          </p>
          <Link href="/contacts" className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            Связаться с нами
          </Link>
        </div>
      </div>
    </Layout>
  );
} 