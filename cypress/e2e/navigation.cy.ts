/**
 * Testes E2E - Fluxo de Navegação pelo Menu (RT4)
 * 
 * Cenário mínimo:
 * - Acessar a aplicação
 * - Clicar no item de menu "Sobre"
 * - Validar que o conteúdo esperado da página "Sobre" é exibido
 * - Clicar no item de menu "Produtos"
 * - Validar que a tela de listagem de produtos é exibida novamente
 */

describe('RT4 - Fluxo de Navegação pelo Menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve navegar para a página "Sobre" e voltar para "Produtos"', () => {
    // Acessar a aplicação
    cy.get('[data-testid="menu-products"]').should('be.visible');
    cy.get('[data-testid="menu-about"]').should('be.visible');

    // Validar que estamos na página de Produtos
    cy.get('[data-testid="create-product-button"]').should('be.visible');

    // Clicar no item de menu "Sobre"
    cy.get('[data-testid="menu-about"]').click();

    // Validar que o conteúdo esperado da página "Sobre" é exibido
    cy.contains('Sobre a Aplicação').should('be.visible');
    cy.contains('Funcionalidades').should('be.visible');
    cy.contains('Tecnologias Utilizadas').should('be.visible');

    // Validar que o botão "Criar Produto" não está visível
    cy.get('[data-testid="create-product-button"]').should('not.exist');

    // Clicar no item de menu "Produtos"
    cy.get('[data-testid="menu-products"]').click();

    // Validar que a tela de listagem de produtos é exibida novamente
    cy.get('[data-testid="create-product-button"]').should('be.visible');
    cy.get('[data-testid="product-row"]').should('exist');
  });

  it('Deve manter o menu visível em ambas as páginas', () => {
    // Validar que o menu está visível na página de Produtos
    cy.get('[data-testid="menu-products"]').should('be.visible');
    cy.get('[data-testid="menu-about"]').should('be.visible');

    // Navegar para a página "Sobre"
    cy.get('[data-testid="menu-about"]').click();

    // Validar que o menu continua visível
    cy.get('[data-testid="menu-products"]').should('be.visible');
    cy.get('[data-testid="menu-about"]').should('be.visible');

    // Voltar para a página de Produtos
    cy.get('[data-testid="menu-products"]').click();

    // Validar que o menu continua visível
    cy.get('[data-testid="menu-products"]').should('be.visible');
    cy.get('[data-testid="menu-about"]').should('be.visible');
  });

  it('Deve indicar a página ativa no menu', () => {
    // Na página de Produtos, o item "Produtos" deve estar destacado
    cy.get('[data-testid="menu-products"]').should('have.class', 'text-primary');

    // Navegar para a página "Sobre"
    cy.get('[data-testid="menu-about"]').click();

    // Na página "Sobre", o item "Sobre" deve estar destacado
    cy.get('[data-testid="menu-about"]').should('have.class', 'text-primary');

    // Voltar para a página de Produtos
    cy.get('[data-testid="menu-products"]').click();

    // Na página de Produtos, o item "Produtos" deve estar destacado novamente
    cy.get('[data-testid="menu-products"]').should('have.class', 'text-primary');
  });
});
