import { UserStatusEnum } from '@store/enums';

import { isUserOnline } from '.';

const user = { id: 1,
  username: 'Alice',
  isOnline: true,
  lastSeenAt: '2021-07-01T12:00:00Z',
  status: UserStatusEnum.AVAILABLE
};

const currentUser = { id: 2,
  username: 'Bob',
  isOnline: false,
  lastSeenAt: '2021-07-01T12:00:00Z',
  status: UserStatusEnum.AWAY
};

describe('isUserOnline', () => {
  it('should return true if the user is online', () => {
    expect(isUserOnline(user, currentUser)).toBe(true);
  });

  it('should return false if the user is offline', () => {
    expect(
      isUserOnline(
        { ...user, isOnline: false },
        { ...currentUser, isOnline: true }
      )
    ).toBe(false);
  });

  it('should return true if the user is undefined but the current user is online', () => {
    const user = undefined;
    expect(isUserOnline(user, { ...currentUser, isOnline: true })).toBe(true);
  });

  it('should return undefined if the user is undefined and the current user null', () => {
    const user = undefined;
    const currentUser = null;
    expect(isUserOnline(user, currentUser)).toBe(undefined);
  });

  it('should return false if the user and the current user are offline', () => {
    expect(
      isUserOnline(
        { ...user, isOnline: false },
        { ...currentUser, isOnline: false }
      )
    ).toBe(false);
  });

  it('should handle null values for currentUser gracefully', () => {
    const currentUser = null;
    expect(isUserOnline({ ...user, isOnline: true }, currentUser)).toBe(true);
  });
});
