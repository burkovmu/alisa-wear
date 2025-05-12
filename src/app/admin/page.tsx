'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/layout/Layout';
import { PlusIcon, PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Product, initialProducts } from '@/data/products';
import { categories } from '@/data/products';
import { useProducts } from '@/context/ProductContext';

const availableSizes = ['XS', 'S', 'M', 'L', 'XL'];
const availableColors = ['Черный', 'Белый', 'Бежевый', 'Серый', 'Бордовый', 'Розовый', 'Синий', 'Красный'];

function AdminPageContent() {
  const { products, setProducts } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isMounted, setIsMounted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [colorImages, setColorImages] = useState<{ [key: string]: string[] }>({});

  // Инициализация данных только на клиенте
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Загрузка данных после монтирования
  useEffect(() => {
    if (!isMounted) return;

    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('products', JSON.stringify(initialProducts));
    }
  }, [isMounted, setProducts]);

  // Очищаем URL превью при размонтировании
  useEffect(() => {
    return () => {
      previewUrls.forEach(url => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [previewUrls]);

  const validateForm = (formData: FormData): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.get('name')) {
      newErrors.name = 'Введите название товара';
    }
    if (!formData.get('price') || Number(formData.get('price')) <= 0) {
      newErrors.price = 'Введите корректную цену';
    }
    if (!formData.get('category')) {
      newErrors.category = 'Выберите категорию';
    }
    if (!formData.get('description')) {
      newErrors.description = 'Введите описание товара';
    }
    
    const selectedSizes = availableSizes.filter(size => formData.get(`size-${size}`) === 'on');
    if (selectedSizes.length === 0) {
      newErrors.sizes = 'Выберите хотя бы один размер';
    }
    
    const selectedColors = availableColors.filter(color => formData.get(`color-${color}`) === 'on');
    if (selectedColors.length === 0) {
      newErrors.colors = 'Выберите хотя бы один цвет';
    }

    if (!selectedProduct && selectedImages.length === 0) {
      newErrors.images = 'Добавьте хотя бы одно изображение';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length + selectedImages.length > 10) {
        alert('Максимальное количество изображений - 10');
        return;
      }
      
      const validFiles = files.filter(file => file.type.startsWith('image/'));
      if (validFiles.length !== files.length) {
        alert('Пожалуйста, загружайте только изображения');
        return;
      }

      if (selectedColor) {
        // Если выбран цвет, добавляем изображения для этого цвета
        const newPreviewUrls = await Promise.all(
          validFiles.map(file => {
            return new Promise<string>((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                resolve(reader.result as string);
              };
              reader.readAsDataURL(file);
            });
          })
        );
        
        setColorImages(prev => ({
          ...prev,
          [selectedColor]: [...(prev[selectedColor] || []), ...newPreviewUrls]
        }));
      } else {
        // Иначе добавляем общие изображения
        const newPreviewUrls = await Promise.all(
          validFiles.map(file => {
            return new Promise<string>((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                resolve(reader.result as string);
              };
              reader.readAsDataURL(file);
            });
          })
        );
        setPreviewUrls([...previewUrls, ...newPreviewUrls]);
      }
    }
  };

  const removeImage = (index: number, color?: string) => {
    if (color) {
      const newColorImages = { ...colorImages };
      newColorImages[color].splice(index, 1);
      setColorImages(newColorImages);
    } else {
      const newSelectedImages = [...selectedImages];
      const newPreviewUrls = [...previewUrls];
      newSelectedImages.splice(index, 1);
      newPreviewUrls.splice(index, 1);
      setSelectedImages(newSelectedImages);
      setPreviewUrls(newPreviewUrls);

      if (index === mainImageIndex) {
        setMainImageIndex(0);
      } else if (index < mainImageIndex) {
        setMainImageIndex(mainImageIndex - 1);
      }
    }
  };

  const setMainImage = (index: number) => {
    setMainImageIndex(index);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) {
      return;
    }
    
    const newProduct: Product = {
      id: selectedProduct?.id || products.length + 1,
      name: formData.get('name') as string,
      price: Number(formData.get('price')),
      category: formData.get('category') as string,
      status: formData.get('isNew') === 'on' ? 'new' : formData.get('isSale') === 'on' ? 'sale' : undefined,
      images: [],
      colorImages: {},
      description: formData.get('description') as string,
      sizes: availableSizes.filter(size => formData.get(`size-${size}`) === 'on'),
      colors: availableColors.filter(color => formData.get(`color-${color}`) === 'on'),
    };

    // Обрабатываем общие изображения
    if (previewUrls.length > 0) {
      const imageUrls = [...previewUrls];
      const mainImage = imageUrls[mainImageIndex];
      imageUrls.splice(mainImageIndex, 1);
      imageUrls.unshift(mainImage);
      newProduct.images = imageUrls;
    } else if (selectedProduct?.images) {
      newProduct.images = [...selectedProduct.images];
    }

    // Добавляем изображения по цветам
    const selectedColors = availableColors.filter(color => formData.get(`color-${color}`) === 'on');
    const newColorImages: { [key: string]: string[] } = {};

    // Сохраняем существующие изображения по цветам
    if (selectedProduct?.colorImages) {
      Object.keys(selectedProduct.colorImages).forEach(color => {
        if (selectedColors.includes(color)) {
          newColorImages[color] = [...selectedProduct.colorImages![color]];
        }
      });
    }

    // Добавляем новые изображения по цветам
    Object.keys(colorImages).forEach(color => {
      if (selectedColors.includes(color)) {
        newColorImages[color] = [...colorImages[color]];
      }
    });

    newProduct.colorImages = newColorImages;

    let updatedProducts;
    if (selectedProduct) {
      updatedProducts = products.map(p => p.id === selectedProduct.id ? newProduct : p);
    } else {
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    setSelectedImages([]);
    setPreviewUrls([]);
    setColorImages({});
    setMainImageIndex(0);
    setIsModalOpen(false);
    setSelectedProduct(null);
    setErrors({});
  };

  const handleEdit = (product: Product) => {
    console.log('Editing product with colorImages:', product.colorImages);
    setSelectedProduct(product);
    setSelectedImages([]);
    setPreviewUrls(product.images || []);
    setColorImages(product.colorImages || {});
    setMainImageIndex(0);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleDelete = (productId: number) => {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      const updatedProducts = products.filter(p => p.id !== productId);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
  };

  const formatPrice = (price: number): string => {
    return price.toLocaleString('ru-RU');
  };

  if (!isMounted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-gray-500">Загрузка...</div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-light">Административная панель</h1>
          <button
            onClick={() => {
              setSelectedProduct(null);
              setSelectedImages([]);
              setPreviewUrls([]);
              setErrors({});
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            <PlusIcon className="h-5 w-5" />
            Добавить товар
          </button>
        </div>

        {/* Таблица товаров */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Изображение
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Название
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Категория
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Цена
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative w-16 h-16">
                      <img
                        src={product.images && product.images.length > 0 ? product.images[0] : '/images/placeholder.jpg'}
                        alt={product.name}
                        className="object-cover w-full h-full rounded"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {categories.find(c => c.id === product.category)?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatPrice(product.price)} ₽
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      {product.status === 'new' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-black text-white">
                          New
                        </span>
                      )}
                      {product.status === 'sale' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500 text-white">
                          Sale
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        title="Редактировать"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                        title="Удалить"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Модальное окно для редактирования/добавления товара */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-light">
                  {selectedProduct ? 'Редактировать товар' : 'Добавить товар'}
                </h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedProduct(null);
                    setSelectedImages([]);
                    setPreviewUrls([]);
                    setErrors({});
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Название
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    defaultValue={selectedProduct?.name}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Категория
                  </label>
                  <select
                    name="category"
                    required
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.category ? 'border-red-500' : 'border-gray-300'
                    }`}
                    defaultValue={selectedProduct?.category}
                  >
                    <option value="">Выберите категорию</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-500">{errors.category}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Цена
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    min="0"
                    step="100"
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.price ? 'border-red-500' : 'border-gray-300'
                    }`}
                    defaultValue={selectedProduct?.price}
                  />
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-500">{errors.price}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Описание
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    defaultValue={selectedProduct?.description}
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Размеры
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map((size) => (
                      <label
                        key={size}
                        className={`inline-flex items-center px-3 py-1 border rounded-md cursor-pointer transition-colors ${
                          selectedProduct?.sizes.includes(size)
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name={`size-${size}`}
                          defaultChecked={selectedProduct?.sizes.includes(size)}
                          className="sr-only"
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                  {errors.sizes && (
                    <p className="mt-1 text-sm text-red-500">{errors.sizes}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Цвета
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableColors.map((color) => (
                      <label
                        key={color}
                        className={`inline-flex items-center px-3 py-1 border rounded-md cursor-pointer transition-colors ${
                          selectedProduct?.colors.includes(color)
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name={`color-${color}`}
                          defaultChecked={selectedProduct?.colors.includes(color)}
                          className="sr-only"
                        />
                        {color}
                      </label>
                    ))}
                  </div>
                  {errors.colors && (
                    <p className="mt-1 text-sm text-red-500">{errors.colors}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Изображения по цветам
                  </label>
                  <div className="mb-4">
                    <select
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Выберите цвет для загрузки изображений</option>
                      {availableColors.map((color) => (
                        <option key={color} value={color}>
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedColor && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">
                        Изображения для цвета: {selectedColor}
                      </h3>
                      <div className="grid grid-cols-5 gap-4">
                        {colorImages[selectedColor]?.map((url, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={url}
                              alt={`${selectedColor} ${index + 1}`}
                              className="w-full h-24 object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index, selectedColor)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <XMarkIcon className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                        {(!colorImages[selectedColor] || colorImages[selectedColor].length < 10) && (
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full h-24 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors"
                          >
                            <PlusIcon className="h-8 w-8" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Общие изображения
                    </h3>
                    <div className="grid grid-cols-5 gap-4">
                      {previewUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={url}
                            alt={`Preview ${index + 1}`}
                            className={`w-full h-24 object-cover rounded cursor-pointer ${
                              index === mainImageIndex ? 'ring-2 ring-black' : ''
                            }`}
                            onClick={() => setMainImage(index)}
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <XMarkIcon className="h-4 w-4" />
                          </button>
                          {index === mainImageIndex && (
                            <div className="absolute bottom-1 left-1 bg-black text-white text-xs px-2 py-1 rounded">
                              Главное
                            </div>
                          )}
                        </div>
                      ))}
                      {previewUrls.length < 10 && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedColor('');
                            fileInputRef.current?.click();
                          }}
                          className="w-full h-24 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors"
                        >
                          <PlusIcon className="h-8 w-8" />
                        </button>
                      )}
                    </div>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isNew"
                      id="isNew"
                      className="h-4 w-4 text-black border-gray-300 rounded"
                      defaultChecked={selectedProduct?.status === 'new'}
                    />
                    <label htmlFor="isNew" className="ml-2 text-sm text-gray-700">
                      Новый
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isSale"
                      id="isSale"
                      className="h-4 w-4 text-black border-gray-300 rounded"
                      defaultChecked={selectedProduct?.status === 'sale'}
                    />
                    <label htmlFor="isSale" className="ml-2 text-sm text-gray-700">
                      Распродажа
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedProduct(null);
                      setSelectedImages([]);
                      setPreviewUrls([]);
                      setErrors({});
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    {selectedProduct ? 'Сохранить' : 'Добавить'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

// Используем динамический импорт с отключенным SSR
const AdminPage = dynamic(() => Promise.resolve(AdminPageContent), {
  ssr: false,
  loading: () => (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse text-gray-500">Загрузка...</div>
        </div>
      </div>
    </Layout>
  )
});

export default AdminPage; 