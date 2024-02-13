import { StatusMessageEnum, ThemeEnum, UserStatusEnum } from '@store/enums';
export interface User {
  id: number;
  username: string;
  theme?: string;
  status: UserStatusEnum;
  isOnline: boolean;
  lastSeenAt?: string;
}

export interface Message {
  from_user_id: number;
  from_user: string;
  from_user_status: UserStatusEnum;
  sent_at: string;
  text: string;
  status: StatusMessageEnum;
}

export interface AppState {
  currentUser: User | null;
  theme: ThemeEnum;
  users: User[];
  messages: Message[];
}
