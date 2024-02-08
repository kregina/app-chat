import { UserActionsEnum } from '../enums/user/actions';

export type UserAction =
  | { type: UserActionsEnum.JOIN; payload: { username: string; avatar: string } }
  | { type: UserActionsEnum.UPDATE_STATUS; payload: { status: string } }
  | { type: UserActionsEnum.SET_THEME; payload: { theme: string } }
  | { type: UserActionsEnum.TOGGLE_ONLINE_STATUS; payload: { isOnline: boolean } };