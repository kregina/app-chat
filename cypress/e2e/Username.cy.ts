/// <reference types="cypress" />

describe('Username Input Validation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('accepts input', () => {
    const inputText = 'JaneDoe';
    cy.get('[data-cy=username-input]')
      .type(inputText)
      .should('have.value', inputText);
  });

  it('shows validation message for invalid input', () => {
    const shortInput = 'JD';
    cy.get('[data-cy=username-input]')
      .type(shortInput)
      .then(() => {
        cy.get('small').contains('Oops! at least 3 characters');
      });
  });

  it('shows positive validation message for valid input', () => {
    const validInput = 'JaneDoe';
    cy.get('[data-cy=username-input]')
      .type(validInput)
      .then(() => {
        cy.get('small').contains(`You are good to go ${validInput}`);
      });
  });
});
