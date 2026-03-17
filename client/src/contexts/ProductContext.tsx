import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Laptop', price: 1200, category: 'Eletrônicos' },
    { id: '2', name: 'Mouse', price: 25, category: 'Periféricos' },
    { id: '3', name: 'Teclado', price: 75, category: 'Periféricos' },
  ]);

  const addProduct = useCallback((product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    };
    setProducts((prev) => [...prev, newProduct]);
  }, []);

  const updateProduct = useCallback((id: string, product: Omit<Product, 'id'>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...product, id } : p))
    );
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
}
