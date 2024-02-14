/// <reference types="cypress" />

describe('Search Users', () => {
  beforeEach(() => {
    cy.visit('/');
    const validInput = 'JaneDoe';
    cy.get('[data-testid=username-input]')
      .type(validInput)
      .then(() => {
        cy.get('[data-testid=button-login]').click();
      });
  });

  it('Should search and filter users', () => {
    cy.get('[data-testid="lobby"]').should('be.visible');
    cy.get('[data-testid="sidebar"]').should('be.visible');
    cy.get('[data-testid="search"]').should('be.visible');

    const searchTerm = 'Alice';
    cy.get('[data-testid="search-input"]').type(searchTerm);

    cy.get('[data-testid="users-list-container"]').should('be.visible');
    cy.get('[data-testid="users-list-container"]')
      .children()
      .each(() => {
        cy.get('[data-testid="username"]').should('contain', searchTerm);
      });
  });
});
