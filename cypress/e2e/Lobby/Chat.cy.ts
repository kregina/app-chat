/// <reference types="cypress" />

describe('Chat', () => {
  beforeEach(() => {
    cy.visit('/');
    const validInput = 'JaneDoe';
    cy.get('[data-testid=username-input]')
      .type(validInput)
      .then(() => {
        cy.get('[data-testid=button-login]').click();
      });
  });

  it('Should allow a user to send and view messages', () => {
    cy.get('[data-testid="chat"]').should('be.visible');
    cy.get('[data-testid="message"]').should('be.visible');
    cy.get('[data-testid="footer"]').should('be.visible');

    const testMessage = 'Hello, Cypress!';
    cy.get('[data-testid=new-message-input]').type(testMessage);

    cy.get('[data-testid="button-send-message"]').click();

    cy.get('[data-testid="message-item"]').should('contain', testMessage);
  });
});
