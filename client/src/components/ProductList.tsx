import { useProducts, Product } from '@/contexts/ProductContext';
import { Button } from '@/components/ui/button';
import { Trash2, Edit2 } from 'lucide-react';

/**
 * Design: Minimalismo Corporativo Sofisticado
 * - Tabela limpa com bordas sutis
 * - Ícones minimalistas para ações
 * - Hover com fundo cinza claro
 * - Tipografia Inter 400 para corpo
 */

interface ProductListProps {
  onEdit: (product: Product) => void;
}

export default function ProductList({ onEdit }: ProductListProps) {
  const { products, deleteProduct } = useProducts();

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground" style={{ fontFamily: 'Inter' }}>
          Nenhum produto cadastrado. Crie um novo produto para começar.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left py-3 px-4 font-semibold text-foreground" style={{ fontFamily: 'Poppins' }}>
              Nome
            </th>
            <th className="text-left py-3 px-4 font-semibold text-foreground" style={{ fontFamily: 'Poppins' }}>
              Preço
            </th>
            <th className="text-left py-3 px-4 font-semibold text-foreground" style={{ fontFamily: 'Poppins' }}>
              Categoria
            </th>
            <th className="text-center py-3 px-4 font-semibold text-foreground" style={{ fontFamily: 'Poppins' }}>
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
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
                    onClick={() => {
                      if (confirm('Tem certeza que deseja excluir este produto?')) {
                        deleteProduct(product.id);
                      }
                    }}
                    className="gap-2"
                  >
                    <Trash2 size={16} />
                    Excluir
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
