import Navigation from '@/components/Navigation';

/**
 * Design: Minimalismo Corporativo Sofisticado
 * - Layout simples e limpo
 * - Tipografia clara e legível
 * - Espaçamento generoso
 */

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="about" />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl">
          <h1
            className="text-4xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Sobre a Aplicação
          </h1>

          <div className="space-y-6 text-foreground" style={{ fontFamily: 'Inter' }}>
            <p className="text-lg leading-relaxed">
              A <strong>Product Management App</strong> é uma aplicação web moderna desenvolvida em React com Vite, projetada para facilitar a gestão eficiente de produtos.
            </p>

            <h2
              className="text-2xl font-bold text-foreground mt-8"
              style={{ fontFamily: 'Poppins' }}
            >
              Funcionalidades
            </h2>

            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>Criar Produtos:</strong> Adicione novos produtos com nome, preço e categoria
              </li>
              <li>
                <strong>Editar Produtos:</strong> Modifique as informações de produtos existentes
              </li>
              <li>
                <strong>Excluir Produtos:</strong> Remova produtos que não são mais necessários
              </li>
              <li>
                <strong>Visualizar Lista:</strong> Veja todos os produtos em uma tabela organizada
              </li>
            </ul>

            <h2
              className="text-2xl font-bold text-foreground mt-8"
              style={{ fontFamily: 'Poppins' }}
            >
              Tecnologias Utilizadas
            </h2>

            <ul className="space-y-2 list-disc list-inside">
              <li>React 19 - Biblioteca para construção da interface</li>
              <li>Vite - Ferramenta de build rápida e moderna</li>
              <li>Tailwind CSS - Framework de CSS utilitário</li>
              <li>TypeScript - Tipagem estática para JavaScript</li>
              <li>Cypress - Testes E2E automatizados</li>
            </ul>

            <h2
              className="text-2xl font-bold text-foreground mt-8"
              style={{ fontFamily: 'Poppins' }}
            >
              Design
            </h2>

            <p className="text-lg leading-relaxed">
              A aplicação segue os princípios de <strong>Minimalismo Corporativo Sofisticado</strong>, com uma paleta de cores profissional, tipografia clara e uma interface intuitiva que prioriza a eficiência e a experiência do usuário.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
