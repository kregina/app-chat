import { UserStatusEnum } from '@store/enums';
import { render } from '@testing-library/react';

import { User } from './User';
import '@testing-library/jest-dom';

const mockUser = {
  id: 7,
  username: 'Ulysses7',
  isOnline: true,
  lastSeenAt: '2024-02-05T17:40:09Z',
  status: UserStatusEnum.AVAILABLE
};

describe('User', () => {
  it('renders user correctly in mobile view', () => {
    jest.mock('@utils/hooks', () => ({
      useIsMobile: jest.fn(() => true),
    }));

    const { getByText } = render(<User user={mockUser} />);

    const usernameElement = getByText(mockUser.username);
    expect(usernameElement).toBeInTheDocument();
  });

  it('renders user correctly in desktop view', () => {
    jest.mock('@utils/hooks', () => ({
      useIsMobile: jest.fn(() => false),
    }));

    const { getByText } = render(<User user={mockUser} />);

    const usernameElement = getByText(mockUser.username);
    expect(usernameElement).toBeInTheDocument();

    const statusElement = getByText(mockUser.status);
    expect(statusElement).toBeInTheDocument();
  });
});
