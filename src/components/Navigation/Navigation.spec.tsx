import { useUser } from '@store/hooks';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Navigation } from './Navigation';
import '@testing-library/jest-dom';

jest.mock('@store/hooks');

describe('Navigation', () => {
  beforeEach(() => {
    (useUser as jest.Mock).mockReturnValue({
      state: {
        username: 'testUser',
        status: 'AVAILABLE',
        isOnline: true
      }
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
    (useUser as jest.Mock).mockReturnValueOnce({
      state: {
        username: 'longUsernameThatExceedsFiveCharacters',
        status: 'AVAILABLE',
        isOnline: true
      }
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
