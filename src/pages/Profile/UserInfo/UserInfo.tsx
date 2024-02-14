import { useAppState } from '@store/hooks';

import styles from './UserInfo.module.css';
import { UserName } from './UserName';

export const UserInfo = () => {
  const { state } = useAppState();

  return (
    <div className={styles.content}>
      <UserName />
      <p>{state.currentUser?.status}</p>
      <p>
        {state.currentUser?.lastSeenAt
        && `Seen at: ${new Date(state.currentUser.lastSeenAt).toLocaleDateString()}`}
      </p>
    </div>
  );
};