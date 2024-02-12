import { UserStatusEnum } from '@store/enums';

export type ChatMessageState = {
  from_user_id: number;
  from_user: string;
  sent_at: string;
  text: string;
  isOnline: boolean;
  status: UserStatusEnum;
}