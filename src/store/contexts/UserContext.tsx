import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";

import { UserAction } from "@store/actions/user";
import userReducer from "@store/reducers/user";
import { UserState } from "@store/types";

const initialState: UserState = {
  username: '',
  theme: 'light',
  status: 'offline',
  avatar: '',
  isOnline: false,
  lastSeenAt: new Date().toISOString(),
};

export const UserContext = createContext<{
  state: UserState;
  dispatch: Dispatch<UserAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

