/// <reference types="cypress" />

describe('ErrorPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/error');
  });

  it('Should go to the home page', () => {
    cy.get('[data-cy=go-home]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

