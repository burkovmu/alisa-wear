'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagIcon, HeartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoriteContext';

const navigation = [
  { name: 'Юбки', href: '/category/skirts' },
  { name: 'Топы', href: '/category/tops' },
  { name: 'Платья', href: '/category/dresses' },
  { name: 'Пиджаки', href: '/category/jackets' },
  { name: 'New Collection', href: '/new-collection' },
  { name: 'Sale', href: '/sale' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favorites } = useFavorites();
  const favoritesCount = favorites.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Закрываем меню при изменении маршрута
    setIsMenuOpen(false);
  }, [pathname]);

  // Блокировка прокрутки страницы, когда открыто меню
  useEffect(() => {
    let scrollPosition = 0;
    
    if (isMenuOpen) {
      scrollPosition = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.dataset.scrollPosition = scrollPosition.toString();
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      
      if (document.body.dataset.scrollPosition) {
        window.scrollTo(0, parseInt(document.body.dataset.scrollPosition));
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMenuOpen]);

  // Обработчик клика по ссылке в мобильном меню
  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Если переходим на ту же страницу, но другой раздел, просто скроллим вверх
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      // Для навигации между страницами используем router с отключенным скроллом
      router.push(href, { scroll: false });
    }
  };

  // Эффект для прокрутки страницы наверх при изменении маршрута
  useEffect(() => {
    // Принудительная прокрутка наверх с небольшой задержкой для надежности
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    scrollToTop();
    
    // Дополнительная прокрутка после небольшой задержки для надежности
    const timeoutId = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm backdrop-blur-sm' : 'bg-white/95'
    }`}>
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between border-b border-gray-100">
          {/* Логотип */}
          <Link href="/" className="relative w-28 h-7 group">
            <Image
              src="/images/logo.svg"
              alt="ALISA"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wider hover:text-black transition-all duration-300 relative ${
                  pathname === item.href 
                    ? 'text-black after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-[-4px] after:left-0' : 
                  item.name === 'New Collection' 
                    ? 'text-black font-bold' :
                  item.name === 'Sale' 
                    ? 'text-red-500 font-bold' 
                    : 'text-gray-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Иконки */}
          <div className="flex items-center gap-5">
            <Link
              href="/favorites"
              className="relative p-1.5 hover:bg-gray-50/80 rounded-full transition-all duration-300 group"
              aria-label="Избранное"
            >
              {favoritesCount > 0 ? (
                <HeartIconSolid className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <HeartIcon className="w-6 h-6 group-hover:scale-110 group-hover:text-red-400 transition-all duration-300 stroke-[1.5px]" />
              )}
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm transform group-hover:scale-110 transition-transform duration-300">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <button
              onClick={openCart}
              className="p-1.5 hover:bg-gray-50/80 rounded-full transition-all duration-300 group"
              aria-label="Корзина"
            >
              <ShoppingBagIcon className="w-6 h-6 group-hover:scale-110 group-hover:text-black transition-all duration-300 stroke-[1.5px]" />
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-1.5 hover:bg-gray-50/80 rounded-full transition-all duration-300 md:hidden"
              aria-label="Меню"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div 
        className={`fixed inset-0 z-[999] md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ height: '100vh', overflowY: 'hidden' }}
      >
        {/* Затемнение фона */}
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Панель меню */}
        <div 
          className={`fixed top-0 right-0 bottom-0 h-[100vh] w-[80%] max-w-[320px] bg-white shadow-xl transform transition-all duration-300 ease-out overflow-hidden flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Заголовок с логотипом и кнопкой закрытия */}
          <div className="p-5 border-b border-gray-100 bg-white">
            <div className="flex justify-between items-center">
              <Link 
                href="/" 
                className="relative w-24 h-6" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/');
                }}
              >
                <Image
                  src="/images/logo.svg"
                  alt="ALISA"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Прокручиваемое содержимое */}
          <div className="flex-1 overflow-y-auto">
            <nav className="mb-auto">
              <div className="p-5 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-3 px-4 text-base font-normal tracking-wide transition-colors duration-200 rounded-lg ${
                      pathname === item.href 
                        ? 'bg-gray-50 text-black font-medium' 
                        : item.name === 'New Collection' 
                          ? 'text-black font-bold hover:bg-gray-50/80' 
                          : item.name === 'Sale' 
                            ? 'text-red-500 font-bold hover:bg-gray-50/80' 
                            : 'text-gray-600 hover:bg-gray-50/80 hover:text-black'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="px-5 mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-400 mb-4 px-4">Информация</h3>
                <div className="space-y-2">
                  <Link
                    href="/about"
                    className="block py-2 px-4 text-base font-normal text-gray-600 hover:bg-gray-50/80 hover:text-black rounded-lg transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/about');
                    }}
                  >
                    О нас
                  </Link>
                  <Link
                    href="/delivery"
                    className="block py-2 px-4 text-base font-normal text-gray-600 hover:bg-gray-50/80 hover:text-black rounded-lg transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/delivery');
                    }}
                  >
                    Доставка
                  </Link>
                  <Link
                    href="/returns"
                    className="block py-2 px-4 text-base font-normal text-gray-600 hover:bg-gray-50/80 hover:text-black rounded-lg transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/returns');
                    }}
                  >
                    Возврат
                  </Link>
                  <Link
                    href="/contacts"
                    className="block py-2 px-4 text-base font-normal text-gray-600 hover:bg-gray-50/80 hover:text-black rounded-lg transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/contacts');
                    }}
                  >
                    Контакты
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* Футер меню с соц. сетями */}
          <div className="p-5 border-t border-gray-100 bg-white mt-auto">
            <div className="flex justify-center space-x-7">
              <a href="#" className="p-2 text-gray-500 hover:text-black transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-2 text-gray-500 hover:text-black transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-2 text-gray-500 hover:text-black transition-colors">
                <span className="sr-only">Telegram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M16.64,8.8c-0.15,1.58-0.8,5.42-1.13,7.19 c-0.14,0.75-0.42,1-0.68,1.03c-0.58,0.05-1.02-0.38-1.58-0.75c-0.88-0.58-1.38-0.94-2.23-1.5c-0.99-0.65-0.35-1.01,0.22-1.59 c0.15-0.15,2.71-2.48,2.76-2.69c0.01-0.03,0.01-0.13-0.05-0.18c-0.06-0.05-0.14-0.03-0.21-0.02c-0.09,0.02-1.49,0.95-4.22,2.79 c-0.4,0.27-0.76,0.41-1.08,0.4c-0.36-0.01-1.04-0.2-1.54-0.37c-0.63-0.2-1.12-0.31-1.08-0.66c0.02-0.18,0.27-0.36,0.74-0.55 c2.92-1.27,4.86-2.11,5.83-2.51c2.78-1.16,3.35-1.36,3.73-1.36c0.08,0,0.27,0.02,0.39,0.12c0.1,0.08,0.13,0.19,0.14,0.27 C16.64,8.43,16.65,8.58,16.64,8.8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 