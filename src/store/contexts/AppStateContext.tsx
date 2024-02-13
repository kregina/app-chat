import { createContext, useReducer, Dispatch, FC, ReactNode, useEffect } from 'react';

import { AppActions } from '@store/actions';
import { dataUsers, dataChat } from '@store/data';
import { ActionsEnum, ThemeEnum } from '@store/enums';
import { appReducer } from '@store/reducers';
import { AppState } from '@store/types';
import { PREFERS_COLOR_SCHEME_DARK, getSystemThemePreference } from '@utils/user';

const initialState: AppState = {
  currentUser: null,
  theme: getSystemThemePreference(),
  users: dataUsers,
  messages: dataChat,
};

export const AppStateContext = createContext<{
  state: AppState; dispatch: Dispatch<AppActions> } | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const handleChange = (event: { matches: unknown; }) => {
      dispatch({
        type: ActionsEnum.SET_THEME,
        payload: event.matches ? ThemeEnum.Dark : ThemeEnum.Light,
      });
    };

    const mediaQuery = window.matchMedia(PREFERS_COLOR_SCHEME_DARK);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};


