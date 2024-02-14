/// <reference types="cypress" />

describe('Update username', () => {
  beforeEach(() => {
    cy.visit('/');
    const validInput = 'JaneDoe';
    cy.get('[data-testid=username-input]')
      .type(validInput)
      .then(() => {
        cy.get('[data-testid=button-login]').click();
      });

    cy.get('[data-testid="navigation-avatar"]').click();
  });

  it('Should toggle edit mode on edit button click', () => {
    cy.get('[data-testid="button-edit-username"]').click();
    cy.get('[data-testid="username-input"]').should('exist');
    cy.get('[data-testid="username-input"]').blur();
    cy.get('[data-testid="username-input"]').should('not.exist');
  });

  it('Should update username on input change', () => {
    cy.get('[data-testid="button-edit-username"]').click();
    cy.get('[data-testid="username-input"]').clear().type('NewUsername');
    cy.get('[data-testid="username-input"]').should('have.value', 'NewUsername');
  });

  it('Should validate username correctly', () => {
    cy.get('[data-testid="button-edit-username"]').click();
    cy.get('[data-testid="username-input"]').clear().type('No');
    cy.get('body').contains('(Oops! at least 3 characters.😅)');
    cy.get('[data-testid="username-input"]').clear().type('NewUsername');
    cy.get('body').contains('(You are good to go NewUsername!😉)');
  });

  it('Should cancel editing on escape key press', () => {
    cy.get('[data-testid="button-edit-username"]').click();
    cy.get('[data-testid="username-input"]').type('{esc}');
    cy.get('[data-testid="username-input"]').should('not.exist');
  });

  it('Should save username on valid input and button click', () => {
    cy.get('[data-testid="button-edit-username"]').click();
    cy.get('[data-testid="username-input"]').clear().type('ValidUsername');
    cy.get('[data-testid="button-edit-username"]').click();
  });
});
