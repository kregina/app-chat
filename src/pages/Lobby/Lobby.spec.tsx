
import '@testing-library/jest-dom';
import { dataUsers } from '@store/data';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Lobby from './Lobby';

jest.mock('@store/hooks', () => ({
  useAppState: () => ({
    state: {
      theme: 'light',
      users: dataUsers
    },
  }),
}));

describe('Page Lobby', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  it('renders without crashing', () => {
    render(
      <Router>
        <Lobby />
      </Router>
    );
    expect(screen.getByTestId('lobby')).toBeInTheDocument();
  });

  it('contains navigation, sidebar, and chat components', () => {
    render(
      <Router>
        <Lobby />
      </Router>
    );
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('chat')).toBeInTheDocument();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
