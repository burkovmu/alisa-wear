'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  shop: [
    { name: 'Юбки', href: '/category/skirts' },
    { name: 'Топы', href: '/category/tops' },
    { name: 'Платья', href: '/category/dresses' },
    { name: 'Пиджаки', href: '/category/blazers' },
  ],
  info: [
    { name: 'О нас', href: '/about' },
    { name: 'Доставка', href: '/delivery' },
    { name: 'Возврат', href: '/returns' },
    { name: 'Контакты', href: '/contacts' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.svg"
                alt="Alisa Store"
                width={120}
                height={40}
                className="h-8 w-auto"
                unoptimized
              />
            </Link>
            <p className="text-gray-600 text-sm">
              Магазин женской одежды с уникальным дизайном и высоким качеством материалов.
            </p>
          </div>

          {/* Категории */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Магазин</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Информация */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Информация</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Социальные сети */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Социальные сети</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Alisa Store. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 