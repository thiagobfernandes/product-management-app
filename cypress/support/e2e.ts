// Cypress E2E support file
// This file is loaded before each test file

beforeEach(() => {
  // Clear any previous state
  cy.visit('/');
});
