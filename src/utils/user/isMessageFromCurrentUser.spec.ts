import { isMessageFromCurrentUser } from '.';

describe('isMessageFromCurrentUser', () => {
  it('should return true if the message is from the current user', () => {
    const currentUserId = 1;
    const messageFromUserId = 1;
    expect(isMessageFromCurrentUser(currentUserId, messageFromUserId)).toBe(true);
  });

  it('should return false if the message is not from the current user', () => {
    const currentUserId = 1;
    const messageFromUserId = 2;
    expect(isMessageFromCurrentUser(currentUserId, messageFromUserId)).toBe(false);
  });

  it('should return false if the current user ID is undefined', () => {
    const currentUserId = undefined;
    const messageFromUserId = 1;
    expect(isMessageFromCurrentUser(currentUserId, messageFromUserId)).toBe(false);
  });
});
