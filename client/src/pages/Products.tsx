import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProductList from '@/components/ProductList';
import ProductForm from '@/components/ProductForm';
import { Button } from '@/components/ui/button';
import { Product } from '@/contexts/ProductContext';

/**
 * Design: Minimalismo Corporativo Sofisticado
 * - Layout com navegação no topo
 * - Container centralizado com padding generoso
 * - Botão de criar produto em destaque
 * - Tipografia hierárquica clara
 */

export default function Products() {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProduct(undefined);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="products" />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: 'Poppins' }}
          >
            Gestão de Produtos
          </h1>
          <Button
            data-testid="create-product-button"
            onClick={() => {
              setEditingProduct(undefined);
              setShowForm(true);
            }}
            className="bg-primary text-primary-foreground font-semibold px-6 py-2"
            style={{ fontFamily: 'Poppins' }}
          >
            + Criar Produto
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <ProductList onEdit={handleEdit} />
        </div>
      </main>

      {showForm && (
        <ProductForm
          product={editingProduct}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}
