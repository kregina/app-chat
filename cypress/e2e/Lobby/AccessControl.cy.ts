/// <reference types="cypress" />

describe('Lobby Access Control', () => {
  beforeEach(() => {
    cy.visit('/');
    const validInput = 'JaneDoe';
    cy.get('[data-testid=username-input]')
      .type(validInput)
      .then(() => {
        cy.get('[data-testid=button-login]').click();
      });
  });

  it('Should redirect to login page on refresh if no current user is set', () => {
    cy.reload();

    cy.get('[data-testid=username-input]').should('be.visible');
  });

});
