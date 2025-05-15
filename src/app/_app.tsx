'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Компонент для сброса положения прокрутки при навигации
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // При изменении маршрута прокручиваем страницу наверх
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Дополнительная прокрутка для надежности
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
} 