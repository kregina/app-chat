import { act, render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { App } from './App';

jest.mock('@store/hooks', () => ({
  useAppState: () => ({
    state: { theme: 'light' },
  }),
}));

describe('App component', () => {
  it('renders without crashing', async () => {
    const { container } = render(<App />);
    await act( async () => container);

    expect(container).toBeInTheDocument();
  });

  it('applies the theme class to the body', async () => {
    const { container } = render(<App />);
    await act( async () => container);

    expect(document.body.className).toBe('light');
  });
});
