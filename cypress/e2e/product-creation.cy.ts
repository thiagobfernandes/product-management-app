/**
 * Testes E2E - Fluxo de Criação de Produto (RT1)
 * 
 * Cenário mínimo:
 * - Acessar a aplicação na tela principal
 * - Clicar no botão "Criar Produto"
 * - Preencher os campos obrigatórios do formulário
 * - Clicar em "Salvar"
 * - Validar que o novo produto aparece na listagem com as informações corretas
 */

describe('RT1 - Fluxo de Criação de Produto', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve criar um novo produto com sucesso', () => {
    // Acessar a aplicação na tela principal
    cy.get('[data-testid="create-product-button"]').should('be.visible');

    // Clicar no botão "Criar Produto"
    cy.get('[data-testid="create-product-button"]').click();

    // Preencher os campos obrigatórios do formulário
    cy.get('[data-testid="product-name-input"]').type('Monitor 27 polegadas');
    cy.get('[data-testid="product-price-input"]').type('450.00');
    cy.get('[data-testid="product-category-input"]').type('Periféricos');

    // Clicar em "Salvar"
    cy.get('[data-testid="save-product-button"]').click();

    // Validar que o novo produto aparece na listagem com as informações corretas
    cy.get('[data-testid="product-row"]').should('contain', 'Monitor 27 polegadas');
    cy.get('[data-testid="product-row"]').should('contain', '450.00');
    cy.get('[data-testid="product-row"]').should('contain', 'Periféricos');
  });

  it('Deve validar campos obrigatórios ao criar produto', () => {
    // Clicar no botão "Criar Produto"
    cy.get('[data-testid="create-product-button"]').click();

    // Tentar salvar sem preencher campos
    cy.get('[data-testid="save-product-button"]').click();

    // Validar que um alerta é exibido
    cy.on('window:alert', (str) => {
      expect(str).to.include('Por favor, preencha todos os campos');
    });
  });

  it('Deve cancelar a criação de produto sem salvar', () => {
    // Clicar no botão "Criar Produto"
    cy.get('[data-testid="create-product-button"]').click();

    // Preencher os campos
    cy.get('[data-testid="product-name-input"]').type('Produto Teste');
    cy.get('[data-testid="product-price-input"]').type('100.00');
    cy.get('[data-testid="product-category-input"]').type('Teste');

    // Contar produtos antes de cancelar
    cy.get('[data-testid="product-row"]').then(($rows) => {
      const initialCount = $rows.length;

      // Clicar em "Cancelar"
      cy.get('[data-testid="cancel-product-button"]').click();

      // Validar que o formulário foi fechado
      cy.get('[data-testid="cancel-product-button"]').should('not.exist');

      // Validar que o produto não foi adicionado
      cy.get('[data-testid="product-row"]').should('have.length', initialCount);
    });
  });
});
