/// <reference types="cypress" />

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should toggle the theme (light/dark)', () => {
    cy.get('body').then(($body) => {
      const initialTheme = $body.hasClass('light') ? 'light' : 'dark';

      cy.get('[data-testid=theme-switcher]').click();

      const expectedThemeClass = initialTheme === 'light' ? 'dark' : 'light';

      cy.get('body').should('have.class', expectedThemeClass);
      cy.get('[data-testid=theme-switcher]').click();
      cy.get('body').should('have.class', initialTheme);
    });
  });
});

