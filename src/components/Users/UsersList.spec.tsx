import { UserStatusEnum } from '@store/enums';
import { render } from '@testing-library/react';

import { UsersList } from './UsersList';
import '@testing-library/jest-dom';

const mockUsers = [
  { id: 6,
    username: 'Walter6',
    isOnline: false,
    lastSeenAt: '2024-01-18T17:40:09Z',
    status: UserStatusEnum.AWAY
  },
  { id: 7,
    username: 'Ulysses7',
    isOnline: true,
    lastSeenAt: '2024-02-05T17:40:09Z',
    status: UserStatusEnum.AVAILABLE
  },
];

describe('UsersList', () => {
  it('renders list of users with title', () => {
    const { getByText, getAllByRole } = render(
      <UsersList users={mockUsers} title="Online (2)" />
    );

    const titleElement = getByText('Online (2)');
    expect(titleElement).toBeInTheDocument();

    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });

  it('renders list of users without title', () => {
    const { queryByText, getAllByRole } = render(
      <UsersList users={mockUsers} />
    );

    const titleElement = queryByText('Online (2)');
    expect(titleElement).toBeNull();

    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });
});
