/// <reference types="cypress" />

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('toggles the theme', () => {
    cy.get('body').then(($body) => {
      const initialTheme = $body.hasClass('light') ? 'light' : 'dark';

      cy.get('[data-cy=theme-switcher]').click();

      const expectedThemeClass = initialTheme === 'light' ? 'dark' : 'light';

      cy.get('body').should('have.class', expectedThemeClass);
      cy.get('[data-cy=theme-switcher]').click();
      cy.get('body').should('have.class', initialTheme);
    });
  });
});

