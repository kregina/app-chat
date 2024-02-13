
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

  it('renders lobby container with search and users list', () => {
    const { getByTestId } = render(
      <Router>
        <Lobby />
      </Router>
    );

    const searchElement = getByTestId('search');
    expect(searchElement).toBeInTheDocument();

    const usersListElement = getByTestId('users-list-container');
    expect(usersListElement).toBeInTheDocument();
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
