import { UserStatusEnum } from '@store/enums';

import { UserActionsEnum } from '../enums/userEnum';

export type UserActions =
  | { type: UserActionsEnum.JOIN; payload: { username: string; avatar: string } }
  | { type: UserActionsEnum.UPDATE_STATUS; payload: { status: UserStatusEnum } }
  | { type: UserActionsEnum.SET_THEME; payload: { theme: string } }
  | { type: UserActionsEnum.TOGGLE_ONLINE_STATUS; payload: { isOnline: boolean } };