import { createContext, useReducer, Dispatch, FC, ReactNode } from 'react';

import { AppActions } from '@store/actions';
import { dataUsers, dataChat } from '@store/data';
import { ThemeEnum } from '@store/enums';
import { appReducer } from '@store/reducers';
import { AppState } from '@store/types';

const initialState: AppState = {
  currentUser: null,
  theme: ThemeEnum.Dark,
  users: dataUsers,
  messages: dataChat,
};

export const AppStateContext = createContext<{
  state: AppState; dispatch: Dispatch<AppActions> } | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};


