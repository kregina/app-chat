import { useAppState } from '@store/hooks';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Navigation } from './Navigation';

import '@testing-library/jest-dom';

jest.mock('@store/hooks', () => ({
  useAppState: jest.fn()
}));

describe('Navigation', () => {
  beforeEach(() => {
    (useAppState as jest.Mock).mockReturnValue({
      state: {
        theme: 'light',
        currentUser: {
          username: 'testUser',
          status: 'Available',
          isOnline: true
        }
      },
    });
  });

  it('renders navigation container with correct elements', () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const navigationContainer = getByTestId('navigation');
    expect(navigationContainer).toBeInTheDocument();

    const profileLink = getByLabelText('Go to profile');
    expect(profileLink).toBeInTheDocument();

    const logoutLink = getByLabelText('Logout');
    expect(logoutLink).toBeInTheDocument();

    const lobbyTitle = getByText('The Lobby™');
    expect(lobbyTitle).toBeInTheDocument();
  });

  it('renders username and avatar correctly', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const usernameElement = getByText('testUser');
    expect(usernameElement).toBeInTheDocument();

    const avatarElement = getByTestId('avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  it('renders tooltip for long usernames', () => {
    (useAppState as jest.Mock).mockReturnValue({
      state: {
        theme: 'light',
        currentUser: {
          username: 'longUsernameThatExceedsFiveCharacters',
          status: 'Available',
          isOnline: true
        }
      },
    });

    const { getByTestId } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const usernameElement = getByTestId('username-tooltip');
    expect(usernameElement).toBeInTheDocument();
  });
});
