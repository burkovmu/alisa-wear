export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
  colors: string[];
  sizes: string[];
  status?: 'new' | 'sale';
  description?: string;
  colorImages?: { [key: string]: string[] };
}

export const initialProducts: Product[] = [
  // Платья
  {
    id: 1,
    name: "Шелковое платье",
    price: 12990,
    category: "dresses",
    images: ["/images/products/dress1.jpg", "/images/products/dress1_2.jpg", "/images/products/dress1_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#FF0000"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантное шелковое платье для особых случаев"
  },
  {
    id: 2,
    name: "Вечернее платье",
    price: 15990,
    category: "dresses",
    images: ["/images/products/dress2.jpg", "/images/products/dress2_2.jpg", "/images/products/dress2_3.jpg"],
    colors: ["#000000", "#FF0000"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Роскошное вечернее платье с открытой спиной"
  },
  {
    id: 3,
    name: "Повседневное платье",
    price: 8990,
    category: "dresses",
    images: ["/images/products/dress3.jpg", "/images/products/dress3_2.jpg", "/images/products/dress3_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Удобное платье для повседневной носки"
  },
  {
    id: 4,
    name: "Летнее платье",
    price: 7990,
    category: "dresses",
    images: ["/images/products/dress4.jpg", "/images/products/dress4_2.jpg", "/images/products/dress4_3.jpg"],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Легкое летнее платье с цветочным принтом"
  },
  {
    id: 5,
    name: "Деловое платье",
    price: 11990,
    category: "dresses",
    images: ["/images/products/dress5.jpg", "/images/products/dress5_2.jpg", "/images/products/dress5_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Строгое деловое платье для офиса"
  },
  {
    id: 6,
    name: "Платье-миди",
    price: 9990,
    category: "dresses",
    images: ["/images/products/dress6.jpg", "/images/products/dress6_2.jpg", "/images/products/dress6_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#FF0000"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Универсальное платье-миди для любого случая"
  },
  {
    id: 7,
    name: "Платье-макси",
    price: 13990,
    category: "dresses",
    images: ["/images/products/dress7.jpg", "/images/products/dress7_2.jpg", "/images/products/dress7_3.jpg"],
    colors: ["#000000", "#FF0000", "#800080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Длинное платье для особых случаев"
  },
  {
    id: 8,
    name: "Платье с рюшами",
    price: 10990,
    category: "dresses",
    images: ["/images/products/dress8.jpg", "/images/products/dress8_2.jpg", "/images/products/dress8_3.jpg"],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Романтичное платье с декоративными рюшами"
  },
  {
    id: 9,
    name: "Платье с вырезом",
    price: 11990,
    category: "dresses",
    images: ["/images/products/dress9.jpg", "/images/products/dress9_2.jpg", "/images/products/dress9_3.jpg"],
    colors: ["#000000", "#FF0000", "#800080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильное платье с глубоким вырезом"
  },
  {
    id: 10,
    name: "Платье с принтом",
    price: 8990,
    category: "dresses",
    images: ["/images/products/dress10.jpg", "/images/products/dress10_2.jpg", "/images/products/dress10_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Яркое платье с геометрическим принтом"
  },
  // Блейзеры
  {
    id: 11,
    name: "Шерстяной блейзер",
    price: 15990,
    category: "blazers",
    images: ["/images/products/blazer1.jpg", "/images/products/blazer1_2.jpg", "/images/products/blazer1_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Классический шерстяной блейзер"
  },
  {
    id: 12,
    name: "Блейзер с принтом",
    price: 13990,
    category: "blazers",
    images: ["/images/products/blazer2.jpg", "/images/products/blazer2_2.jpg", "/images/products/blazer2_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Стильный блейзер с клетчатым принтом"
  },
  {
    id: 13,
    name: "Летний блейзер",
    price: 11990,
    category: "blazers",
    images: ["/images/products/blazer3.jpg", "/images/products/blazer3_2.jpg", "/images/products/blazer3_3.jpg"],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Легкий летний блейзер из хлопка"
  },
  {
    id: 14,
    name: "Блейзер oversize",
    price: 14990,
    category: "blazers",
    images: ["/images/products/blazer4.jpg", "/images/products/blazer4_2.jpg", "/images/products/blazer4_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Модный блейзер свободного кроя"
  },
  {
    id: 15,
    name: "Блейзер с поясом",
    price: 16990,
    category: "blazers",
    images: ["/images/products/blazer5.jpg", "/images/products/blazer5_2.jpg", "/images/products/blazer5_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантный блейзер с декоративным поясом"
  },
  {
    id: 16,
    name: "Блейзер с патами",
    price: 15990,
    category: "blazers",
    images: ["/images/products/blazer6.jpg", "/images/products/blazer6_2.jpg", "/images/products/blazer6_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Классический блейзер с декоративными патами"
  },
  {
    id: 17,
    name: "Блейзер с воротником",
    price: 13990,
    category: "blazers",
    images: ["/images/products/blazer7.jpg", "/images/products/blazer7_2.jpg", "/images/products/blazer7_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильный блейзер с широким воротником"
  },
  {
    id: 18,
    name: "Блейзер с карманами",
    price: 14990,
    category: "blazers",
    images: ["/images/products/blazer8.jpg", "/images/products/blazer8_2.jpg", "/images/products/blazer8_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Практичный блейзер с накладными карманами"
  },
  {
    id: 19,
    name: "Блейзер с пуговицами",
    price: 15990,
    category: "blazers",
    images: ["/images/products/blazer9.jpg", "/images/products/blazer9_2.jpg", "/images/products/blazer9_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантный блейзер с декоративными пуговицами"
  },
  {
    id: 20,
    name: "Блейзер с подкладкой",
    price: 16990,
    category: "blazers",
    images: ["/images/products/blazer10.jpg", "/images/products/blazer10_2.jpg", "/images/products/blazer10_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Теплый блейзер с шелковой подкладкой"
  },
  // Топы
  {
    id: 21,
    name: "Шелковая блуза",
    price: 8990,
    category: "tops",
    images: ["/images/products/top1.jpg", "/images/products/top1_2.jpg", "/images/products/top1_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#FFD700"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантная шелковая блуза"
  },
  {
    id: 22,
    name: "Блуза с рюшами",
    price: 7990,
    category: "tops",
    images: ["/images/products/top2.jpg", "/images/products/top2_2.jpg", "/images/products/top2_3.jpg"],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Романтичная блуза с декоративными рюшами"
  },
  {
    id: 23,
    name: "Блуза с воротником",
    price: 6990,
    category: "tops",
    images: ["/images/products/top3.jpg", "/images/products/top3_2.jpg", "/images/products/top3_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная блуза с широким воротником"
  },
  {
    id: 24,
    name: "Блуза с бантом",
    price: 7990,
    category: "tops",
    images: ["/images/products/top4.jpg", "/images/products/top4_2.jpg", "/images/products/top4_3.jpg"],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Элегантная блуза с декоративным бантом"
  },
  {
    id: 25,
    name: "Блуза с вырезом",
    price: 8990,
    category: "tops",
    images: ["/images/products/top5.jpg", "/images/products/top5_2.jpg", "/images/products/top5_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная блуза с глубоким вырезом"
  },
  {
    id: 26,
    name: "Блуза с принтом",
    price: 7990,
    category: "tops",
    images: ["/images/products/top6.jpg", "/images/products/top6_2.jpg", "/images/products/top6_3.jpg"],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Яркая блуза с цветочным принтом"
  },
  {
    id: 27,
    name: "Блуза с рукавами",
    price: 6990,
    category: "tops",
    images: ["/images/products/top7.jpg", "/images/products/top7_2.jpg", "/images/products/top7_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная блуза с объемными рукавами"
  },
  {
    id: 28,
    name: "Блуза с карманами",
    price: 7990,
    category: "tops",
    images: ["/images/products/top8.jpg", "/images/products/top8_2.jpg", "/images/products/top8_3.jpg"],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Практичная блуза с накладными карманами"
  },
  {
    id: 29,
    name: "Блуза с пуговицами",
    price: 8990,
    category: "tops",
    images: ["/images/products/top9.jpg", "/images/products/top9_2.jpg", "/images/products/top9_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантная блуза с декоративными пуговицами"
  },
  {
    id: 30,
    name: "Блуза с подкладкой",
    price: 9990,
    category: "tops",
    images: ["/images/products/top10.jpg", "/images/products/top10_2.jpg", "/images/products/top10_3.jpg"],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Теплая блуза с шелковой подкладкой"
  },
  // Юбки
  {
    id: 31,
    name: "Шерстяная юбка",
    price: 9990,
    category: "skirts",
    images: ["/images/products/skirt1.jpg", "/images/products/skirt1_2.jpg", "/images/products/skirt1_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Классическая шерстяная юбка"
  },
  {
    id: 32,
    name: "Юбка с принтом",
    price: 8990,
    category: "skirts",
    images: ["/images/products/skirt2.jpg", "/images/products/skirt2_2.jpg", "/images/products/skirt2_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Стильная юбка с клетчатым принтом"
  },
  {
    id: 33,
    name: "Летняя юбка",
    price: 6990,
    category: "skirts",
    images: ["/images/products/skirt3.jpg", "/images/products/skirt3_2.jpg", "/images/products/skirt3_3.jpg"],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Легкая летняя юбка из хлопка"
  },
  {
    id: 34,
    name: "Юбка oversize",
    price: 8990,
    category: "skirts",
    images: ["/images/products/skirt4.jpg", "/images/products/skirt4_2.jpg", "/images/products/skirt4_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Модная юбка свободного кроя"
  },
  {
    id: 35,
    name: "Юбка с поясом",
    price: 9990,
    category: "skirts",
    images: ["/images/products/skirt5.jpg", "/images/products/skirt5_2.jpg", "/images/products/skirt5_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантная юбка с декоративным поясом"
  },
  {
    id: 36,
    name: "Юбка с карманами",
    price: 8990,
    category: "skirts",
    images: ["/images/products/skirt6.jpg", "/images/products/skirt6_2.jpg", "/images/products/skirt6_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Практичная юбка с накладными карманами"
  },
  {
    id: 37,
    name: "Юбка с разрезом",
    price: 7990,
    category: "skirts",
    images: ["/images/products/skirt7.jpg", "/images/products/skirt7_2.jpg", "/images/products/skirt7_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная юбка с боковым разрезом"
  },
  {
    id: 38,
    name: "Юбка с плиссе",
    price: 8990,
    category: "skirts",
    images: ["/images/products/skirt8.jpg", "/images/products/skirt8_2.jpg", "/images/products/skirt8_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Элегантная юбка с плиссировкой"
  },
  {
    id: 39,
    name: "Юбка с бантом",
    price: 9990,
    category: "skirts",
    images: ["/images/products/skirt9.jpg", "/images/products/skirt9_2.jpg", "/images/products/skirt9_3.jpg"],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная юбка с декоративным бантом"
  },
  {
    id: 40,
    name: "Юбка с подкладкой",
    price: 10990,
    category: "skirts",
    images: ["/images/products/skirt10.jpg", "/images/products/skirt10_2.jpg", "/images/products/skirt10_3.jpg"],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Теплая юбка с шелковой подкладкой"
  }
];

export const categories = [
  { id: 'dresses', name: 'Платья' },
  { id: 'blazers', name: 'Блейзеры' },
  { id: 'tops', name: 'Топы и блузы' },
  { id: 'skirts', name: 'Юбки' }
];

export function getProductsByCategory(category: string): Product[] {
  return initialProducts.filter(product => product.category === category);
}

export function getProductById(id: number): Product | undefined {
  return initialProducts.find(product => product.id === id);
}

export function getSaleProducts(): Product[] {
  return initialProducts.filter(product => product.status === 'sale');
}

export function getNewProducts(): Product[] {
  return initialProducts.filter(product => product.status === 'new');
} 