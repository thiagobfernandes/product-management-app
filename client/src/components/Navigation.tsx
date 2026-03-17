import { Link } from 'wouter';

/**
 * Design: Minimalismo Corporativo Sofisticado
 * - Menu horizontal no topo com links claros
 * - Tipografia Poppins 600 para destaque
 * - Fundo branco com borda sutil
 * - Hover com cor azul profunda (#1E3A8A)
 */

interface NavigationProps {
  currentPage: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Poppins' }}>
          📦 Products
        </div>
        <div className="flex gap-8">
          <Link href="/">
            <a
              data-testid="menu-products"
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'products'
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-primary'
              }`}
              style={{ fontFamily: 'Poppins' }}
            >
              Produtos
            </a>
          </Link>
          <Link href="/about">
            <a
              data-testid="menu-about"
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'about'
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-primary'
              }`}
              style={{ fontFamily: 'Poppins' }}
            >
              Sobre
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
