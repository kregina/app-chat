import { UserActions } from '@store/actions';
import { UserActionsEnum } from '@store/enums';
import { UserState } from '@store/types';

export const userReducer = (state: UserState, action: UserActions): UserState => {
  switch (action.type) {

  case UserActionsEnum.JOIN:
    return {
      ...state,
      username: action.payload.username,
      isOnline: true,
      lastSeenAt: new Date().toISOString(),
    };

  case UserActionsEnum.UPDATE_STATUS:
    return {
      ...state,
      status: action.payload.status,
    };

  case UserActionsEnum.SET_THEME:
    return {
      ...state,
      theme: action.payload.theme,
    };

  case UserActionsEnum.TOGGLE_ONLINE_STATUS:
    return {
      ...state,
      isOnline: action.payload.isOnline,
      lastSeenAt: action.payload.isOnline ? state.lastSeenAt : new Date().toISOString(),
    };

  default:
    return state;
  }
};
