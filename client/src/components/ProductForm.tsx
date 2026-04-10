import { Product } from '@/contexts/ProductContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useProductForm } from '@/hooks/useProductForm';

/**
 * Design: Minimalismo Corporativo Sofisticado
 * - Formulário com labels acima dos campos
 * - Espaçamento generoso entre campos
 * - Botões com cores claras e feedback visual
 * - Tipografia Poppins para labels, Inter para inputs
 */

interface ProductFormProps {
  product?: Product;
  onClose: () => void;
}

export default function ProductForm({ product, onClose }: ProductFormProps) {
  const { formData, handleChange, handleSubmit, isEditing } = useProductForm({
    product,
    onClose,
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2
          className="text-2xl font-bold mb-6 text-foreground"
          style={{ fontFamily: 'Poppins' }}
        >
          {isEditing ? 'Editar Produto' : 'Criar Novo Produto'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label
              htmlFor="product-name"
              className="block mb-2 font-semibold text-foreground"
              style={{ fontFamily: 'Poppins' }}
            >
              Nome do Produto
            </Label>
            <Input
              id="product-name"
              data-testid="product-name-input"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Ex: Laptop"
              className="w-full"
              style={{ fontFamily: 'Inter' }}
            />
          </div>

          <div>
            <Label
              htmlFor="product-price"
              className="block mb-2 font-semibold text-foreground"
              style={{ fontFamily: 'Poppins' }}
            >
              Preço (R$)
            </Label>
            <Input
              id="product-price"
              data-testid="product-price-input"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => handleChange('price', e.target.value)}
              placeholder="Ex: 1200.00"
              className="w-full"
              style={{ fontFamily: 'Inter' }}
            />
          </div>

          <div>
            <Label
              htmlFor="product-category"
              className="block mb-2 font-semibold text-foreground"
              style={{ fontFamily: 'Poppins' }}
            >
              Categoria
            </Label>
            <Input
              id="product-category"
              data-testid="product-category-input"
              type="text"
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              placeholder="Ex: Eletrônicos"
              className="w-full"
              style={{ fontFamily: 'Inter' }}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              data-testid="save-product-button"
              type="submit"
              className="flex-1 bg-primary text-primary-foreground font-semibold"
              style={{ fontFamily: 'Poppins' }}
            >
              Salvar
            </Button>
            <Button
              data-testid="cancel-product-button"
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 font-semibold"
              style={{ fontFamily: 'Poppins' }}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
