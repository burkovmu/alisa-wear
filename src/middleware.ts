import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Клонируем заголовки, чтобы изменить их
  const requestHeaders = new Headers(request.headers);
  
  // Добавляем заголовки для отключения кэширования
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Устанавливаем заголовки кэширования в ответе
  response.headers.set('Cache-Control', 'no-store, no-cache, max-age=0, must-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  
  // Добавляем уникальный заголовок для принудительного обновления
  response.headers.set('X-Force-Reload', Date.now().toString());

  return response;
}

// Применяем middleware ко всем путям
export const config = {
  matcher: [
    /*
     * Совпадает со всеми путями, кроме:
     * 1. Всеми файлами внутри директорий public, static, _next (включая все вложенные пути)
     * 2. Всеми путями, имеющими расширение файла (.svg, .jpg и т.д.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 