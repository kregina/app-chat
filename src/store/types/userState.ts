import { UserStatusEnum } from '@store/enums';

export type UserState = {
  id: number;
  username: string;
  theme?: string;
  status: UserStatusEnum;
  isOnline: boolean;
  lastSeenAt: string;
};