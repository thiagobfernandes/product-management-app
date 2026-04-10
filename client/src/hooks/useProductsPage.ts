import { useState } from 'react';
import { Product } from '@/contexts/ProductContext';

export function useProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingProduct(undefined);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProduct(undefined);
  };

  return {
    showForm,
    editingProduct,
    handleEdit,
    handleCreate,
    handleCloseForm,
  };
}
