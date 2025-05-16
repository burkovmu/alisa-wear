'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    id: 1,
    image: '/images/slid/001.png',
    title: 'Новая коллекция',
    description: 'Весна-лето 2024',
    position: 'center'
  },
  {
    id: 2,
    image: '/images/slid/002.jpg',
    title: 'Скидки до 50%',
    description: 'На избранные модели',
    position: 'left'
  },
  {
    id: 3,
    image: '/images/slid/003.jpg',
    title: 'Эксклюзивные модели',
    description: 'Только у нас',
    position: 'right'
  },
  {
    id: 4,
    image: '/images/slid/004.webp',
    title: 'Стиль и комфорт',
    description: 'Каждый день',
    position: 'center'
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(goToNextSlide, 7000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [currentSlide]);

  const getTextPosition = (position: string) => {
    switch(position) {
      case 'left': return 'justify-start text-left';
      case 'right': return 'justify-end text-right';
      default: return 'justify-center text-center';
    }
  };

  return (
    <div className="relative h-full overflow-hidden">
      {/* Слайды */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : index < currentSlide || (index === slides.length - 1 && currentSlide === 0)
                ? 'opacity-0 scale-110'
                : 'opacity-0 scale-90'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
          {/* Градиентный оверлей вместо однотонного */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Содержимое слайда */}
          <div className={`absolute inset-0 flex items-center ${getTextPosition(slide.position)} px-16`}>
            <div className={`${
              index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'
            }`}>
              <h2 className="text-6xl font-light text-white mb-3">
                {slide.title}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {slide.description}
              </p>
              <button className="px-8 py-2.5 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300">
                К покупкам
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Кнопки навигации */}
      <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-6 z-10">
        <button 
          onClick={() => {
            goToPrevSlide();
            resetAutoplay();
          }}
          className="bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
        >
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={() => {
            goToNextSlide();
            resetAutoplay();
          }}
          className="bg-white/10 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
        >
          <ArrowRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Точки навигации */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setTimeout(() => setIsAnimating(false), 1000);
              setCurrentSlide(index);
              resetAutoplay();
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider; 