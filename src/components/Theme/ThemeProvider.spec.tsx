import { Theme } from '@store/enums';
import { render, fireEvent } from '@testing-library/react';

import { ThemeContext, ThemeProvider } from './ThemeContext';

// Mock matchMedia
window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: query === '(prefers-color-scheme: dark)',
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

describe('ThemeProvider', () => {
  it('sets the initial theme based on system preference', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <div data-testid="theme">{value?.theme}</div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const themeElement = getByTestId('theme');
    expect(themeElement.textContent)
      .toBe(window.matchMedia('(prefers-color-scheme: dark)')
        .matches ? Theme.Dark : Theme.Light);
  });

  it('toggles the theme when toggleTheme is called', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <>
              <div data-testid="theme">{value?.theme}</div>

              <button onClick={value?.toggleTheme} data-testid="toggle-button">
                Toggle Theme
              </button>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const button = getByTestId('toggle-button');
    fireEvent.click(button);

    const themeElement = getByTestId('theme');
    expect(themeElement.textContent).toBe(Theme.Light);
  });

  it('updates the theme when setTheme is called', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <>
              <div data-testid="theme">{value?.theme}</div>

              <button
                onClick={() => value?.setTheme(Theme.Dark)}
                data-testid="set-dark-button">
                Toggle Theme
              </button>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const button = getByTestId('set-dark-button');
    fireEvent.click(button);

    const themeElement = getByTestId('theme');
    expect(themeElement.textContent).toBe(Theme.Dark);
  });
});
