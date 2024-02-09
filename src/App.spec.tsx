import { act, render } from '@testing-library/react';

import { App } from './App';

import '@testing-library/jest-dom';

// Mocking the lazy-loaded components
jest.mock('./pages/Home/Home', () => ({
  __esModule: true,
  default: () => <div>Home Component</div>,
}));

jest.mock('./pages/Lobby/Lobby', () => ({
  __esModule: true,
  default: () => <div>Lobby Component</div>,
}));

jest.mock('./pages/Profile/Profile', () => ({
  __esModule: true,
  default: () => <div>Profile Component</div>,
}));

jest.mock('./pages/Error/Error', () => ({
  __esModule: true,
  default: () => <div>Error Page</div>,
}));

// Mocking useTheme hook
jest.mock('@components/Theme/useTheme', () => ({
  useTheme: () => ({ theme: 'dark' })
}));

// Mocking Context Providers
jest.mock('@store/contexts', () => ({
  UserProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe('<App />', () => {
  it('renders without crashing', async () => {
    const { container } = render(<App />);
    await act( async () => container);

    expect(container).toBeInTheDocument();
  });

  it('applies the correct theme to the document body', async () => {
    render(<App />);
    await act( async () => document.body);

    expect(document.body.className).toBe('dark');
  });
});
