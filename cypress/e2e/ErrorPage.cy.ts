/// <reference types="cypress" />

describe('ErrorPage', () => {
  beforeEach(() => {
    cy.visit('/app-chat/error');
  });

  it('Should go to the home page', () => {
    cy.get('[data-testid=button-go-home]').click();
    cy.url().should('eq', 'http://localhost:3000/app-chat');
  });
});

