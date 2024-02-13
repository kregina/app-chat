import { AppActions } from '@store/actions';
import { ActionsEnum } from '@store/enums';
import { AppState } from '@store/types';

export function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
  case ActionsEnum.SET_USER:
    return { ...state, currentUser: action.payload };
  case ActionsEnum.SET_THEME:
    return { ...state, theme: action.payload };
  case ActionsEnum.ADD_MESSAGE:
    return { ...state, messages: [...state.messages, action.payload] };
  case ActionsEnum.ADD_USER:
    return {
      ...state, currentUser: action.payload
    };
  default:
    return state;
  }
}
