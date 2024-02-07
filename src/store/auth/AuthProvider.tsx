import { ReactNode } from 'react';

import { AuthContext } from './AuthContext';
import { useAuthProvider } from './useAuthProvider';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};


