import { User } from '@store/types';

export const isUserOnline = (user: User | undefined, currentUser: User | null) =>
  user?.isOnline ?? currentUser?.isOnline;