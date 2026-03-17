/**
 * Testes E2E - Fluxo de Exclusão de Produto (RT3)
 * 
 * Cenário mínimo:
 * - Estando na tela de produtos com pelo menos um produto criado
 * - Clicar em "Excluir" para um produto
 * - Confirmar a exclusão (se houver confirmação) ou simplesmente executar a ação
 * - Validar que o produto não aparece mais na listagem
 */

describe('RT3 - Fluxo de Exclusão de Produto', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve excluir um produto com sucesso', () => {
    // Estando na tela de produtos com pelo menos um produto criado
    cy.get('[data-testid="product-row"]').should('have.length.greaterThan', 0);

    // Obter o nome do primeiro produto
    cy.get('[data-testid="product-row"]').first().then(($row) => {
      const productName = $row.find('td').first().text();

      // Contar produtos antes de excluir
      cy.get('[data-testid="product-row"]').then(($rows) => {
        const initialCount = $rows.length;

        // Clicar em "Excluir" para o primeiro produto
        cy.get('[data-testid="delete-product-button"]').first().click();

        // Confirmar a exclusão (se houver confirmação)
        cy.on('window:confirm', () => true);

        // Validar que o produto não aparece mais na listagem
        cy.get('[data-testid="product-row"]').should('have.length', initialCount - 1);
        cy.get('[data-testid="product-row"]').should('not.contain', productName);
      });
    });
  });

  it('Deve cancelar a exclusão de um produto', () => {
    // Contar produtos antes de tentar excluir
    cy.get('[data-testid="product-row"]').then(($rows) => {
      const initialCount = $rows.length;

      // Clicar em "Excluir"
      cy.get('[data-testid="delete-product-button"]').first().click();

      // Cancelar a exclusão
      cy.on('window:confirm', () => false);

      // Validar que o produto continua na listagem
      cy.get('[data-testid="product-row"]').should('have.length', initialCount);
    });
  });

  it('Deve excluir múltiplos produtos', () => {
    // Contar produtos iniciais
    cy.get('[data-testid="product-row"]').then(($rows) => {
      const initialCount = $rows.length;

      // Excluir o primeiro produto
      cy.get('[data-testid="delete-product-button"]').first().click();
      cy.on('window:confirm', () => true);

      // Validar que um produto foi removido
      cy.get('[data-testid="product-row"]').should('have.length', initialCount - 1);

      // Se houver mais produtos, excluir outro
      if (initialCount > 1) {
        cy.get('[data-testid="delete-product-button"]').first().click();
        cy.on('window:confirm', () => true);

        // Validar que dois produtos foram removidos
        cy.get('[data-testid="product-row"]').should('have.length', initialCount - 2);
      }
    });
  });
});
