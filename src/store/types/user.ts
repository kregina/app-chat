export type UserState = {
  id: number;
  username: string;
  theme?: string;
  status: string;
  isOnline: boolean;
  lastSeenAt: string;
};