import { useContext } from 'react';

import { AppStateContext } from '@store/contexts';

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};