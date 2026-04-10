import { useState, useEffect } from 'react';
import { useProducts, Product } from '@/contexts/ProductContext';

interface UseProductFormProps {
  product?: Product;
  onClose: () => void;
}

export function useProductForm({ product, onClose }: UseProductFormProps) {
  const { addProduct, updateProduct } = useProducts();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price.toString(),
        category: product.category,
      });
    } else {
      setFormData({
        name: '',
        price: '',
        category: '',
      });
    }
  }, [product]);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.category) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const productData = {
      name: formData.name,
      price: parseFloat(formData.price),
      category: formData.category,
    };

    if (product) {
      updateProduct(product.id, productData);
    } else {
      addProduct(productData);
    }

    onClose();
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isEditing: !!product,
  };
}
