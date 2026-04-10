import { useProducts, Product } from '@/contexts/ProductContext';
import ProductItem from './ProductItem';

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
            <ProductItem
              key={product.id}
              product={product}
              onEdit={onEdit}
              onDelete={deleteProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
