import { ThemeEnum, UserStatusEnum } from '@store/enums';

export interface User {
  id: number;
  username: string;
  theme?: string;
  status: UserStatusEnum;
  isOnline: boolean;
  lastSeenAt: string;
}

export interface Message {
  from_user_id: number;
  from_user: string;
  sent_at: string;
  text: string;
  isOnline: boolean;
  status: UserStatusEnum;
}

export interface AppState {
  currentUser: User | null;
  theme: ThemeEnum;
  users: User[];
  messages: Message[];
}
