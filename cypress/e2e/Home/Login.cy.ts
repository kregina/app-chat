/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should show validation message for invalid input', () => {
    const shortInput = 'JD';
    cy.get('[data-testid=username-input]')
      .type(shortInput)
      .then(() => {
        cy.get('small').contains('Oops! at least 3 characters');
      });
  });

  it('Should shows positive validation message for valid input', () => {
    const validInput = 'JaneDoe';
    cy.get('[data-testid=username-input]')
      .type(validInput)
      .then(() => {
        cy.get('small').contains(`You are good to go ${validInput}`);
      });
  });

  it('Should go to the lobby page', () => {
    const validInput = 'JaneDoe';
    cy.get('[data-testid=username-input]')
      .type(validInput)
      .then(() => {
        cy.get('[data-testid=button-login]').click();
        cy.url().should('eq', 'http://localhost:3000/app-chat/lobby');
      });
  });
});
