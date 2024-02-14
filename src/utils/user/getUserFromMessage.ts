import { User } from '@store/types';

export const getUserFromMessage = (users: User[], messageFromUserId: number) =>
  users?.find((user) => user.id === messageFromUserId);