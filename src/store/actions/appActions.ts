import { ActionsEnum, ThemeEnum } from '@store/enums';
import { Message, User } from '@store/types';

export type AppActions =
  | { type: ActionsEnum.SET_USER; payload: User }
  | { type: ActionsEnum.SET_THEME; payload: ThemeEnum }
  | { type: ActionsEnum.ADD_MESSAGE; payload: Message }
  | { type: ActionsEnum.ADD_USER; payload: User };
