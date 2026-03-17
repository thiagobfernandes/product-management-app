/**
 * Testes E2E - Fluxo de Edição de Produto (RT2)
 * 
 * Cenário mínimo:
 * - Estando na tela de produtos com pelo menos um produto criado
 * - Clicar em "Editar" para um produto
 * - Alterar pelo menos um campo (por exemplo, nome ou preço)
 * - Clicar em "Salvar"
 * - Validar que a alteração aparece na listagem
 */

describe('RT2 - Fluxo de Edição de Produto', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve editar um produto com sucesso', () => {
    // Estando na tela de produtos com pelo menos um produto criado
    cy.get('[data-testid="product-row"]').first().should('be.visible');

    // Clicar em "Editar" para o primeiro produto
    cy.get('[data-testid="edit-product-button"]').first().click();

    // Alterar o nome do produto
    cy.get('[data-testid="product-name-input"]').clear().type('Laptop Editado');

    // Clicar em "Salvar"
    cy.get('[data-testid="save-product-button"]').click();

    // Validar que a alteração aparece na listagem
    cy.get('[data-testid="product-row"]').first().should('contain', 'Laptop Editado');
  });

  it('Deve editar apenas o preço de um produto', () => {
    // Clicar em "Editar"
    cy.get('[data-testid="edit-product-button"]').first().click();

    // Alterar apenas o preço
    cy.get('[data-testid="product-price-input"]').clear().type('999.99');

    // Clicar em "Salvar"
    cy.get('[data-testid="save-product-button"]').click();

    // Validar que o preço foi alterado
    cy.get('[data-testid="product-row"]').first().should('contain', '999.99');
  });

  it('Deve editar a categoria de um produto', () => {
    // Clicar em "Editar"
    cy.get('[data-testid="edit-product-button"]').first().click();

    // Alterar a categoria
    cy.get('[data-testid="product-category-input"]').clear().type('Novo Setor');

    // Clicar em "Salvar"
    cy.get('[data-testid="save-product-button"]').click();

    // Validar que a alteração aparece na listagem
    cy.get('[data-testid="product-row"]').first().should('contain', 'Novo Setor');
  });

  it('Deve cancelar a edição sem salvar alterações', () => {
    // Clicar em "Editar"
    cy.get('[data-testid="edit-product-button"]').first().click();

    // Alterar o nome
    cy.get('[data-testid="product-name-input"]').clear().type('Nome Alterado Temporariamente');

    // Clicar em "Cancelar"
    cy.get('[data-testid="cancel-product-button"]').click();

    // Validar que o formulário foi fechado
    cy.get('[data-testid="cancel-product-button"]').should('not.exist');
  });
});
