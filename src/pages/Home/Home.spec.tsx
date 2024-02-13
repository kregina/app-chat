
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';

jest.mock('@store/hooks', () => ({
  useAppState: () => ({
    state: {
      theme: 'light',
    },
  }),
}));

describe('Page Home', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('contains login component', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });
});
