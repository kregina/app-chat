import { UserStatusEnum } from '@store/enums';

import { getUserFromMessage } from '.';

const users = [
  { id: 1,
    username: 'Alice',
    isOnline: true,
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: UserStatusEnum.AVAILABLE
  },
  { id: 2,
    username: 'Bob',
    isOnline: false,
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: UserStatusEnum.AWAY
  },
  { id: 3,
    username: 'Charlie',
    isOnline: true,
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: UserStatusEnum.BUSY
  },
];

describe('getUserFromMessage', () => {
  it('should return the user object when the user ID matches', () => {
    const messageFromUserId = 1;
    const expectedUser = users[0];
    const result = getUserFromMessage(users, messageFromUserId);
    expect(result).toEqual(expectedUser);
  });

  it('should return undefined when there is no matching user ID', () => {
    const messageFromUserId = 99;
    const result = getUserFromMessage(users, messageFromUserId);
    expect(result).toBeUndefined();
  });
});
