import { Product } from '@/contexts/ProductContext';
import { Button } from '@/components/ui/button';
import { Trash2, Edit2 } from 'lucide-react';

interface ProductItemProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

export default function ProductItem({ product, onEdit, onDelete }: ProductItemProps) {
  const handleDelete = () => {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      onDelete(product.id);
    }
  };

  return (
    <tr
      data-testid="product-row"
      className="border-b border-border hover:bg-secondary transition-colors duration-150"
    >
      <td className="py-3 px-4 text-foreground" style={{ fontFamily: 'Inter' }}>
        {product.name}
      </td>
      <td className="py-3 px-4 text-foreground" style={{ fontFamily: 'Inter' }}>
        R$ {product.price.toFixed(2)}
      </td>
      <td className="py-3 px-4 text-foreground" style={{ fontFamily: 'Inter' }}>
        {product.category}
      </td>
      <td className="py-3 px-4 text-center">
        <div className="flex gap-2 justify-center">
          <Button
            data-testid="edit-product-button"
            variant="outline"
            size="sm"
            onClick={() => onEdit(product)}
            className="gap-2"
          >
            <Edit2 size={16} />
            Editar
          </Button>
          <Button
            data-testid="delete-product-button"
            variant="destructive"
            size="sm"
            onClick={handleDelete}
            className="gap-2"
          >
            <Trash2 size={16} />
            Excluir
          </Button>
        </div>
      </td>
    </tr>
  );
}
