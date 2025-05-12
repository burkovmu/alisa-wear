'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.link} className="group block relative aspect-[3/4] overflow-hidden">
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-light text-white">{category.name}</h3>
      </div>
    </Link>
  );
} 