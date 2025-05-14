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
  features?: string[];
  careInfo?: string[];
}

export const initialProducts: Product[] = [
  // Платья
  {
    id: 1,
    name: "Шелковое платье",
    price: 12990,
    category: "dresses",
    images: [
      "/images/dres/01.jpg", 
      "/images/dres/02.jpg", 
      "/images/dres/03.jpg", 
      "/images/dres/04.jpg", 
      "/images/dres/05.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#FF0000"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантное шелковое платье для особых случаев",
    features: [
      "Состав: 100% натуральный шелк",
      "Длина: макси",
      "Силуэт: приталенный",
      "Декоративные элементы: кружевная отделка",
      "Застежка: потайная молния сзади"
    ],
    careInfo: [
      "Ручная стирка при температуре не выше 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Сухая чистка",
      "Хранить на вешалке"
    ]
  },
  {
    id: 2,
    name: "Вечернее платье",
    price: 15990,
    category: "dresses",
    images: [
      "/images/dres/02.jpg", 
      "/images/dres/03.jpg", 
      "/images/dres/04.jpg", 
      "/images/dres/05.jpg", 
      "/images/dres/01.jpg"
    ],
    colors: ["#000000", "#FF0000"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Роскошное вечернее платье с открытой спиной",
    features: [
      "Состав: 85% полиэстер, 15% эластан",
      "Длина: макси",
      "Силуэт: облегающий",
      "Декоративные элементы: стразы, открытая спина",
      "Застежка: потайная молния сбоку"
    ],
    careInfo: [
      "Только сухая чистка",
      "Не отбеливать",
      "Не стирать в машинке",
      "Гладить при низкой температуре через ткань",
      "Хранить на вешалке в чехле"
    ]
  },
  {
    id: 3,
    name: "Повседневное платье",
    price: 8990,
    category: "dresses",
    images: [
      "/images/dres/03.jpg", 
      "/images/dres/04.jpg", 
      "/images/dres/05.jpg", 
      "/images/dres/01.jpg", 
      "/images/dres/02.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Удобное платье для повседневной носки",
    features: [
      "Состав: 60% хлопок, 40% полиэстер",
      "Длина: миди",
      "Силуэт: свободный",
      "Декоративные элементы: карманы",
      "Застежка: пуговицы"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при средней температуре",
      "Не подвергать химчистке",
      "Можно сушить в машине при низкой температуре"
    ]
  },
  {
    id: 4,
    name: "Летнее платье",
    price: 7990,
    category: "dresses",
    images: [
      "/images/dres/04.jpg", 
      "/images/dres/05.jpg", 
      "/images/dres/01.jpg", 
      "/images/dres/02.jpg", 
      "/images/dres/03.jpg"
    ],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Легкое летнее платье с цветочным принтом",
    features: [
      "Состав: 100% хлопок",
      "Длина: мини",
      "Силуэт: расклешенный",
      "Декоративные элементы: цветочный принт, рюши",
      "Тонкие бретели"
    ],
    careInfo: [
      "Машинная стирка при 40°C",
      "Не отбеливать",
      "Гладить при средней температуре",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 5,
    name: "Деловое платье",
    price: 11990,
    category: "dresses",
    images: [
      "/images/dres/05.jpg", 
      "/images/dres/01.jpg", 
      "/images/dres/02.jpg", 
      "/images/dres/03.jpg", 
      "/images/dres/04.jpg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Строгое деловое платье для офиса",
    features: [
      "Состав: 70% вискоза, 25% полиэстер, 5% эластан",
      "Длина: до колена",
      "Силуэт: прямой",
      "Декоративные элементы: пояс",
      "Застежка: потайная молния сзади"
    ],
    careInfo: [
      "Машинная стирка при 30°C с деликатными средствами",
      "Не отбеливать",
      "Гладить при средней температуре",
      "Возможна деликатная химчистка",
      "Хранить на вешалке"
    ]
  },
  {
    id: 6,
    name: "Платье-миди",
    price: 9990,
    category: "dresses",
    images: [
      "/images/dres/02.jpg", 
      "/images/dres/04.jpg", 
      "/images/dres/01.jpg", 
      "/images/dres/05.jpg", 
      "/images/dres/03.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#FF0000"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Универсальное платье-миди для любого случая",
    features: [
      "Состав: 95% полиэстер, 5% эластан",
      "Длина: миди",
      "Силуэт: полуприлегающий",
      "Декоративные элементы: драпировка",
      "Застежка: пуговицы на спине"
    ],
    careInfo: [
      "Ручная стирка при температуре не выше 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре с изнаночной стороны",
      "Химчистка разрешена",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 7,
    name: "Платье-макси",
    price: 13990,
    category: "dresses",
    images: [
      "/images/dres/05.jpg", 
      "/images/dres/03.jpg", 
      "/images/dres/01.jpg", 
      "/images/dres/04.jpg", 
      "/images/dres/02.jpg"
    ],
    colors: ["#000000", "#FF0000", "#800080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Длинное платье для особых случаев",
    features: [
      "Состав: 80% вискоза, 20% шелк",
      "Длина: макси",
      "Силуэт: прямой",
      "Декоративные элементы: разрез сбоку",
      "Застежка: потайная молния"
    ],
    careInfo: [
      "Только сухая чистка",
      "Не отбеливать",
      "Гладить при низкой температуре через ткань",
      "Не стирать в машинке",
      "Хранить на широкой вешалке"
    ]
  },
  {
    id: 8,
    name: "Платье с рюшами",
    price: 10990,
    category: "dresses",
    images: [
      "/images/dres/04.jpg", 
      "/images/dres/02.jpg", 
      "/images/dres/05.jpg", 
      "/images/dres/03.jpg", 
      "/images/dres/01.jpg"
    ],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Романтичное платье с декоративными рюшами",
    features: [
      "Состав: 100% полиэстер",
      "Длина: мини",
      "Силуэт: приталенный",
      "Декоративные элементы: рюши по всей длине",
      "Застежка: молния на спине"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 9,
    name: "Платье с вырезом",
    price: 11990,
    category: "dresses",
    images: [
      "/images/dres/03.jpg", 
      "/images/dres/01.jpg", 
      "/images/dres/05.jpg", 
      "/images/dres/02.jpg", 
      "/images/dres/04.jpg"
    ],
    colors: ["#000000", "#FF0000", "#800080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильное платье с глубоким вырезом",
    features: [
      "Состав: 90% полиэстер, 10% эластан",
      "Длина: миди",
      "Силуэт: облегающий",
      "Декоративные элементы: глубокий V-образный вырез",
      "Застежка: потайная молния сбоку"
    ],
    careInfo: [
      "Деликатная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре с изнаночной стороны",
      "Химчистка разрешена",
      "Хранить на вешалке"
    ]
  },
  {
    id: 10,
    name: "Платье с принтом",
    price: 8990,
    category: "dresses",
    images: [
      "/images/dres/01.jpg", 
      "/images/dres/05.jpg", 
      "/images/dres/04.jpg", 
      "/images/dres/03.jpg", 
      "/images/dres/02.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Яркое платье с геометрическим принтом",
    features: [
      "Состав: 95% хлопок, 5% эластан",
      "Длина: миди",
      "Силуэт: трапеция",
      "Декоративные элементы: геометрический принт",
      "Застежка: пуговицы спереди"
    ],
    careInfo: [
      "Машинная стирка при 40°C",
      "Не отбеливать",
      "Гладить при средней температуре с изнаночной стороны",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  // Пиджаки
  {
    id: 11,
    name: "Шерстяной блейзер",
    price: 15990,
    category: "jackets",
    images: [
      "/images/jackets/jackets01.jpeg", 
      "/images/jackets/jackets02.jpeg", 
      "/images/jackets/jackets03.jpeg", 
      "/images/jackets/jackets04.jpeg", 
      "/images/jackets/jackets05.jpeg",
      "/images/jackets/jackets06.jpeg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Классический шерстяной блейзер",
    features: [
      "Состав: 80% шерсть, 20% полиэстер",
      "Длина: стандартная",
      "Силуэт: приталенный",
      "Декоративные элементы: две пуговицы",
      "Подкладка: 100% вискоза"
    ],
    careInfo: [
      "Только сухая чистка",
      "Не отбеливать",
      "Гладить при средней температуре",
      "Беречь от влаги",
      "Хранить на широкой вешалке"
    ]
  },
  {
    id: 12,
    name: "Блейзер с принтом",
    price: 13990,
    category: "jackets",
    images: [
      "/images/jackets/jackets02.jpeg", 
      "/images/jackets/jackets03.jpeg", 
      "/images/jackets/jackets04.jpeg", 
      "/images/jackets/jackets05.jpeg", 
      "/images/jackets/jackets06.jpeg",
      "/images/jackets/jackets01.jpeg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Стильный блейзер с клетчатым принтом",
    features: [
      "Состав: 70% полиэстер, 30% шерсть",
      "Длина: стандартная",
      "Силуэт: прямой",
      "Декоративные элементы: клетчатый принт, карманы с клапанами",
      "Подкладка: 100% полиэстер"
    ],
    careInfo: [
      "Химчистка",
      "Не стирать в машинке",
      "Гладить при низкой температуре с изнаночной стороны",
      "Не отбеливать",
      "Хранить на вешалке"
    ]
  },
  {
    id: 13,
    name: "Летний блейзер",
    price: 11990,
    category: "jackets",
    images: [
      "/images/jackets/jackets03.jpeg", 
      "/images/jackets/jackets04.jpeg", 
      "/images/jackets/jackets05.jpeg", 
      "/images/jackets/jackets06.jpeg", 
      "/images/jackets/jackets01.jpeg",
      "/images/jackets/jackets02.jpeg"
    ],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Легкий летний блейзер из хлопка",
    features: [
      "Состав: 100% хлопок",
      "Длина: укороченная",
      "Силуэт: свободный",
      "Декоративные элементы: накладные карманы",
      "Без подкладки"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при средней температуре",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 14,
    name: "Блейзер oversize",
    price: 14990,
    category: "jackets",
    images: [
      "/images/jackets/jackets04.jpeg", 
      "/images/jackets/jackets05.jpeg", 
      "/images/jackets/jackets06.jpeg", 
      "/images/jackets/jackets01.jpeg", 
      "/images/jackets/jackets02.jpeg",
      "/images/jackets/jackets03.jpeg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Модный блейзер свободного кроя",
    features: [
      "Состав: 55% полиэстер, 45% вискоза",
      "Длина: удлиненная",
      "Силуэт: оверсайз",
      "Декоративные элементы: широкие лацканы, крупные пуговицы",
      "Подкладка: 100% полиэстер"
    ],
    careInfo: [
      "Химчистка",
      "Не стирать в машинке",
      "Гладить при низкой температуре",
      "Не отбеливать",
      "Хранить на широкой вешалке"
    ]
  },
  {
    id: 15,
    name: "Блейзер с поясом",
    price: 16990,
    category: "jackets",
    images: [
      "/images/jackets/jackets05.jpeg", 
      "/images/jackets/jackets06.jpeg", 
      "/images/jackets/jackets01.jpeg", 
      "/images/jackets/jackets02.jpeg", 
      "/images/jackets/jackets03.jpeg",
      "/images/jackets/jackets04.jpeg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантный блейзер с декоративным поясом",
    features: [
      "Состав: 65% полиэстер, 30% вискоза, 5% эластан",
      "Длина: стандартная",
      "Силуэт: приталенный",
      "Декоративные элементы: съемный пояс, застежка на одну пуговицу",
      "Подкладка: 100% полиэстер"
    ],
    careInfo: [
      "Деликатная химчистка",
      "Не стирать в машинке",
      "Гладить при низкой температуре через ткань",
      "Не отбеливать",
      "Хранить на вешалке"
    ]
  },
  {
    id: 16,
    name: "Блейзер с патами",
    price: 15990,
    category: "jackets",
    images: [
      "/images/jackets/jackets06.jpeg", 
      "/images/jackets/jackets01.jpeg", 
      "/images/jackets/jackets02.jpeg", 
      "/images/jackets/jackets03.jpeg", 
      "/images/jackets/jackets04.jpeg",
      "/images/jackets/jackets05.jpeg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Классический блейзер с декоративными патами",
    features: [
      "Состав: 75% шерсть, 25% полиэстер",
      "Длина: стандартная",
      "Силуэт: прямой",
      "Декоративные элементы: паты на плечах, металлические пуговицы",
      "Подкладка: 100% ацетат"
    ],
    careInfo: [
      "Только сухая чистка",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Беречь от влаги",
      "Хранить на вешалке"
    ]
  },
  {
    id: 17,
    name: "Твидовый блейзер",
    price: 17990,
    category: "jackets",
    images: [
      "/images/jackets/jackets01.jpeg", 
      "/images/jackets/jackets03.jpeg", 
      "/images/jackets/jackets05.jpeg", 
      "/images/jackets/jackets02.jpeg", 
      "/images/jackets/jackets04.jpeg",
      "/images/jackets/jackets06.jpeg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильный твидовый блейзер в классическом стиле",
    features: [
      "Состав: 90% шерсть, 10% полиамид",
      "Длина: стандартная",
      "Силуэт: полуприлегающий",
      "Декоративные элементы: твидовая фактура, нашивки на локтях",
      "Подкладка: 100% шелк"
    ],
    careInfo: [
      "Только профессиональная химчистка",
      "Не отбеливать",
      "Не гладить",
      "Беречь от влаги",
      "Хранить на вешалке в чехле"
    ]
  },
  {
    id: 41,
    name: "Блейзер с карманами",
    price: 14990,
    category: "jackets",
    images: [
      "/images/jackets/jackets02.jpeg", 
      "/images/jackets/jackets04.jpeg", 
      "/images/jackets/jackets06.jpeg", 
      "/images/jackets/jackets01.jpeg", 
      "/images/jackets/jackets03.jpeg",
      "/images/jackets/jackets05.jpeg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Элегантный блейзер с декоративными карманами",
    features: [
      "Состав: 60% полиэстер, 35% вискоза, 5% эластан",
      "Длина: стандартная",
      "Силуэт: приталенный",
      "Декоративные элементы: четыре кармана с клапанами",
      "Подкладка: 100% полиэстер"
    ],
    careInfo: [
      "Химчистка рекомендована",
      "Машинная стирка при 30°C возможна",
      "Гладить при низкой температуре",
      "Не отбеливать",
      "Хранить на вешалке"
    ]
  },
  {
    id: 42,
    name: "Офисный блейзер",
    price: 16990,
    category: "jackets",
    images: [
      "/images/jackets/jackets03.jpeg", 
      "/images/jackets/jackets05.jpeg", 
      "/images/jackets/jackets01.jpeg", 
      "/images/jackets/jackets04.jpeg", 
      "/images/jackets/jackets06.jpeg",
      "/images/jackets/jackets02.jpeg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Строгий блейзер для деловых встреч",
    features: [
      "Состав: 70% шерсть, 30% полиэстер",
      "Длина: стандартная",
      "Силуэт: прямой",
      "Декоративные элементы: шлица сзади",
      "Подкладка: 100% вискоза"
    ],
    careInfo: [
      "Только сухая чистка",
      "Не отбеливать",
      "Гладить при средней температуре через влажную ткань",
      "Беречь от влаги",
      "Хранить на вешалке с широкими плечиками"
    ]
  },
  {
    id: 43,
    name: "Блейзер с накладными карманами",
    price: 12990,
    category: "jackets",
    images: [
      "/images/jackets/jackets06.jpeg", 
      "/images/jackets/jackets04.jpeg", 
      "/images/jackets/jackets02.jpeg", 
      "/images/jackets/jackets05.jpeg", 
      "/images/jackets/jackets03.jpeg",
      "/images/jackets/jackets01.jpeg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Практичный блейзер с накладными карманами",
    features: [
      "Состав: 50% хлопок, 50% лен",
      "Длина: стандартная",
      "Силуэт: свободный",
      "Декоративные элементы: большие накладные карманы",
      "Частичная подкладка"
    ],
    careInfo: [
      "Деликатная стирка при 30°C",
      "Не отбеливать",
      "Гладить при высокой температуре",
      "Не использовать сушильную машину",
      "Хранить на вешалке"
    ]
  },
  // Топы
  {
    id: 21,
    name: "Шелковая блуза",
    price: 8990,
    category: "tops",
    images: [
      "/images/top/top01.jpg", 
      "/images/top/top02.jpg", 
      "/images/top/top03.jpg", 
      "/images/top/top04.jpg", 
      "/images/top/top05.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#FFD700"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантная шелковая блуза",
    features: [
      "Состав: 100% шелк",
      "Длина: стандартная",
      "Силуэт: прямой",
      "Детали: V-образный вырез",
      "Застежка: пуговицы"
    ],
    careInfo: [
      "Ручная стирка при температуре не выше 30°C",
      "Не отбеливать",
      "Гладить при минимальной температуре",
      "Сухая чистка",
      "Сушить в горизонтальном положении"
    ]
  },
  {
    id: 22,
    name: "Блуза с рюшами",
    price: 7990,
    category: "tops",
    images: [
      "/images/top/top02.jpg", 
      "/images/top/top03.jpg", 
      "/images/top/top04.jpg", 
      "/images/top/top05.jpg", 
      "/images/top/top01.jpg"
    ],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Романтичная блуза с декоративными рюшами",
    features: [
      "Состав: 85% полиэстер, 15% эластан",
      "Длина: стандартная",
      "Силуэт: приталенный",
      "Детали: декоративные рюши по линии выреза",
      "Застежка: пуговицы на спине"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Деликатная сухая чистка",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 23,
    name: "Блуза с воротником",
    price: 6990,
    category: "tops",
    images: [
      "/images/top/top03.jpg", 
      "/images/top/top04.jpg", 
      "/images/top/top05.jpg", 
      "/images/top/top01.jpg", 
      "/images/top/top02.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная блуза с широким воротником",
    features: [
      "Состав: 70% хлопок, 30% полиэстер",
      "Длина: стандартная",
      "Силуэт: прямой",
      "Детали: отложной воротник",
      "Застежка: пуговицы"
    ],
    careInfo: [
      "Машинная стирка при 40°C",
      "Не отбеливать",
      "Гладить при средней температуре",
      "Не подвергать химчистке",
      "Можно сушить в машине при низкой температуре"
    ]
  },
  {
    id: 24,
    name: "Блуза с бантом",
    price: 7990,
    category: "tops",
    images: [
      "/images/top/top04.jpg", 
      "/images/top/top05.jpg", 
      "/images/top/top01.jpg", 
      "/images/top/top02.jpg", 
      "/images/top/top03.jpg"
    ],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Элегантная блуза с декоративным бантом",
    features: [
      "Состав: 95% полиэстер, 5% эластан",
      "Длина: стандартная",
      "Силуэт: приталенный",
      "Детали: декоративный бант у горловины",
      "Застежка: пуговицы сзади"
    ],
    careInfo: [
      "Деликатная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре с изнаночной стороны",
      "Сухая чистка",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 25,
    name: "Блуза с вырезом",
    price: 8990,
    category: "tops",
    images: [
      "/images/top/top05.jpg", 
      "/images/top/top01.jpg", 
      "/images/top/top02.jpg", 
      "/images/top/top03.jpg", 
      "/images/top/top04.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная блуза с глубоким вырезом",
    features: [
      "Состав: 90% вискоза, 10% эластан",
      "Длина: удлиненная",
      "Силуэт: свободный",
      "Детали: глубокий V-образный вырез",
      "Застежка: отсутствует"
    ],
    careInfo: [
      "Машинная стирка при 30°C в деликатном режиме",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 26,
    name: "Блуза с принтом",
    price: 7990,
    category: "tops",
    images: [
      "/images/top/top02.jpg", 
      "/images/top/top04.jpg", 
      "/images/top/top01.jpg", 
      "/images/top/top05.jpg", 
      "/images/top/top03.jpg"
    ],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Яркая блуза с цветочным принтом",
    features: [
      "Состав: 100% вискоза",
      "Длина: стандартная",
      "Силуэт: прямой",
      "Детали: цветочный принт",
      "Застежка: пуговицы"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре с изнаночной стороны",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 27,
    name: "Блуза с рукавами",
    price: 6990,
    category: "tops",
    images: [
      "/images/top/top05.jpg", 
      "/images/top/top03.jpg", 
      "/images/top/top01.jpg", 
      "/images/top/top04.jpg", 
      "/images/top/top02.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная блуза с объемными рукавами",
    features: [
      "Состав: 80% хлопок, 20% полиэстер",
      "Длина: стандартная",
      "Силуэт: свободный",
      "Детали: объемные рукава с манжетами",
      "Застежка: пуговицы"
    ],
    careInfo: [
      "Машинная стирка при 40°C",
      "Не отбеливать",
      "Гладить при средней температуре",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 28,
    name: "Блуза с карманами",
    price: 7990,
    category: "tops",
    images: [
      "/images/top/top04.jpg", 
      "/images/top/top02.jpg", 
      "/images/top/top05.jpg", 
      "/images/top/top03.jpg", 
      "/images/top/top01.jpg"
    ],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Практичная блуза с накладными карманами",
    features: [
      "Состав: 100% лиоцелл",
      "Длина: стандартная",
      "Силуэт: прямой",
      "Детали: накладные карманы на груди",
      "Застежка: пуговицы"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при средней температуре",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 29,
    name: "Блуза с пуговицами",
    price: 8990,
    category: "tops",
    images: [
      "/images/top/top03.jpg", 
      "/images/top/top01.jpg", 
      "/images/top/top05.jpg", 
      "/images/top/top02.jpg", 
      "/images/top/top04.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантная блуза с декоративными пуговицами",
    features: [
      "Состав: 65% хлопок, 35% полиэстер",
      "Длина: удлиненная",
      "Силуэт: приталенный",
      "Детали: декоративные пуговицы",
      "Застежка: скрытые кнопки"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 30,
    name: "Блуза с подкладкой",
    price: 9990,
    category: "tops",
    images: [
      "/images/top/top01.jpg", 
      "/images/top/top05.jpg", 
      "/images/top/top04.jpg", 
      "/images/top/top03.jpg", 
      "/images/top/top02.jpg"
    ],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Теплая блуза с шелковой подкладкой",
    features: [
      "Состав: верх - 70% вискоза, 30% полиэстер; подкладка - 100% шелк",
      "Длина: стандартная",
      "Силуэт: прямой",
      "Детали: подкладка из натурального шелка",
      "Застежка: пуговицы"
    ],
    careInfo: [
      "Только сухая чистка",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Не стирать в машинке",
      "Хранить на вешалке"
    ]
  },
  // Юбки
  {
    id: 31,
    name: "Шерстяная юбка",
    price: 9990,
    category: "skirts",
    images: [
      "/images/skirts/skirts01.jpg", 
      "/images/skirts/skirts02.jpg", 
      "/images/skirts/skirts03.jpg", 
      "/images/skirts/skirts04.jpg", 
      "/images/skirts/skirts05.jpg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Классическая шерстяная юбка",
    features: [
      "Состав: 80% шерсть, 20% полиэстер",
      "Длина: до колена",
      "Силуэт: прямой",
      "Детали: шлица сзади",
      "Застежка: потайная молния"
    ],
    careInfo: [
      "Только сухая чистка",
      "Не отбеливать",
      "Гладить при средней температуре через влажную ткань",
      "Беречь от влаги",
      "Хранить на вешалке"
    ]
  },
  {
    id: 32,
    name: "Юбка с принтом",
    price: 8990,
    category: "skirts",
    images: [
      "/images/skirts/skirts02.jpg", 
      "/images/skirts/skirts03.jpg", 
      "/images/skirts/skirts04.jpg", 
      "/images/skirts/skirts05.jpg", 
      "/images/skirts/skirts01.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Стильная юбка с клетчатым принтом",
    features: [
      "Состав: 65% полиэстер, 35% вискоза",
      "Длина: миди",
      "Силуэт: трапеция",
      "Детали: клетчатый принт",
      "Застежка: потайная молния сбоку"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре с изнаночной стороны",
      "Химчистка разрешена",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 33,
    name: "Летняя юбка",
    price: 6990,
    category: "skirts",
    images: [
      "/images/skirts/skirts03.jpg", 
      "/images/skirts/skirts04.jpg", 
      "/images/skirts/skirts05.jpg", 
      "/images/skirts/skirts01.jpg", 
      "/images/skirts/skirts02.jpg"
    ],
    colors: ["#FFFFFF", "#FFD700", "#FF69B4"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Легкая летняя юбка из хлопка",
    features: [
      "Состав: 100% хлопок",
      "Длина: мини",
      "Силуэт: расклешенный",
      "Детали: пояс на резинке",
      "Без подкладки"
    ],
    careInfo: [
      "Машинная стирка при 40°C",
      "Не отбеливать",
      "Гладить при высокой температуре",
      "Не подвергать химчистке",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 34,
    name: "Юбка oversize",
    price: 8990,
    category: "skirts",
    images: [
      "/images/skirts/skirts04.jpg", 
      "/images/skirts/skirts05.jpg", 
      "/images/skirts/skirts01.jpg", 
      "/images/skirts/skirts02.jpg", 
      "/images/skirts/skirts03.jpg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Модная юбка свободного кроя",
    features: [
      "Состав: 90% полиэстер, 10% эластан",
      "Длина: миди",
      "Силуэт: свободный",
      "Детали: асимметричный крой",
      "Застежка: молния сбоку"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Химчистка разрешена",
      "Сушить на плоской поверхности"
    ]
  },
  {
    id: 35,
    name: "Юбка с поясом",
    price: 9990,
    category: "skirts",
    images: [
      "/images/skirts/skirts05.jpg", 
      "/images/skirts/skirts01.jpg", 
      "/images/skirts/skirts02.jpg", 
      "/images/skirts/skirts03.jpg", 
      "/images/skirts/skirts04.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Элегантная юбка с декоративным поясом",
    features: [
      "Состав: 70% вискоза, 25% полиэстер, 5% эластан",
      "Длина: до колена",
      "Силуэт: прямой",
      "Детали: съемный декоративный пояс, разрез спереди",
      "Застежка: потайная молния сзади"
    ],
    careInfo: [
      "Деликатная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Деликатная химчистка",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 36,
    name: "Юбка с карманами",
    price: 8990,
    category: "skirts",
    images: [
      "/images/skirts/skirts02.jpg", 
      "/images/skirts/skirts04.jpg", 
      "/images/skirts/skirts01.jpg", 
      "/images/skirts/skirts05.jpg", 
      "/images/skirts/skirts03.jpg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Практичная юбка с накладными карманами",
    features: [
      "Состав: 95% хлопок, 5% эластан",
      "Длина: миди",
      "Силуэт: прямой",
      "Детали: два накладных кармана спереди",
      "Застежка: пуговицы спереди"
    ],
    careInfo: [
      "Машинная стирка при 40°C",
      "Не отбеливать",
      "Гладить при средней температуре",
      "Не подвергать химчистке",
      "Можно сушить в машине при низкой температуре"
    ]
  },
  {
    id: 37,
    name: "Юбка с разрезом",
    price: 7990,
    category: "skirts",
    images: [
      "/images/skirts/skirts05.jpg", 
      "/images/skirts/skirts03.jpg", 
      "/images/skirts/skirts01.jpg", 
      "/images/skirts/skirts04.jpg", 
      "/images/skirts/skirts02.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная юбка с боковым разрезом",
    features: [
      "Состав: 80% вискоза, 20% нейлон",
      "Длина: макси",
      "Силуэт: облегающий",
      "Детали: высокий разрез сбоку",
      "Застежка: потайная молния сзади"
    ],
    careInfo: [
      "Ручная стирка при температуре не выше 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Сухая чистка",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 38,
    name: "Юбка с плиссе",
    price: 8990,
    category: "skirts",
    images: [
      "/images/skirts/skirts04.jpg", 
      "/images/skirts/skirts02.jpg", 
      "/images/skirts/skirts05.jpg", 
      "/images/skirts/skirts03.jpg", 
      "/images/skirts/skirts01.jpg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Элегантная юбка с плиссировкой",
    features: [
      "Состав: 100% полиэстер",
      "Длина: миди",
      "Силуэт: плиссированный",
      "Детали: мелкие складки по всей длине",
      "Застежка: эластичный пояс"
    ],
    careInfo: [
      "Ручная стирка при температуре не выше 30°C",
      "Не отбеливать",
      "Не гладить",
      "Деликатная химчистка",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 39,
    name: "Юбка с бантом",
    price: 9990,
    category: "skirts",
    images: [
      "/images/skirts/skirts03.jpg", 
      "/images/skirts/skirts01.jpg", 
      "/images/skirts/skirts05.jpg", 
      "/images/skirts/skirts02.jpg", 
      "/images/skirts/skirts04.jpg"
    ],
    colors: ["#FFFFFF", "#000000", "#808080"],
    sizes: ["XS", "S", "M", "L"],
    status: "new",
    description: "Стильная юбка с декоративным бантом",
    features: [
      "Состав: 65% полиэстер, 35% хлопок",
      "Длина: миди",
      "Силуэт: А-силуэт",
      "Детали: декоративный бант на поясе",
      "Застежка: потайная молния сзади"
    ],
    careInfo: [
      "Машинная стирка при 30°C",
      "Не отбеливать",
      "Гладить при низкой температуре с изнаночной стороны",
      "Химчистка разрешена",
      "Сушить в расправленном виде"
    ]
  },
  {
    id: 40,
    name: "Юбка с подкладкой",
    price: 10990,
    category: "skirts",
    images: [
      "/images/skirts/skirts01.jpg", 
      "/images/skirts/skirts05.jpg", 
      "/images/skirts/skirts04.jpg", 
      "/images/skirts/skirts03.jpg", 
      "/images/skirts/skirts02.jpg"
    ],
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["S", "M", "L"],
    status: "sale",
    description: "Теплая юбка с шелковой подкладкой",
    features: [
      "Состав: верх - 70% шерсть, 30% полиэстер; подкладка - 100% шелк",
      "Длина: до колена",
      "Силуэт: слегка расклешенный",
      "Детали: шелковая подкладка",
      "Застежка: потайная молния сзади"
    ],
    careInfo: [
      "Только сухая чистка",
      "Не отбеливать",
      "Гладить при низкой температуре",
      "Беречь от влаги",
      "Хранить на вешалке"
    ]
  }
];

export const categories = [
  { id: 'dresses', name: 'Платья' },
  { id: 'jackets', name: 'Пиджаки' },
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