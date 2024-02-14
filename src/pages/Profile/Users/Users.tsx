import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { useAppState } from '@store/hooks';

import styles from './Users.module.css';

export const Users = () => {
  const { state } = useAppState();

  return (
    <div>
      <Header />
      <h2 className={styles.title}>Users</h2>
      <div className={styles.content}>
        {state.users.map((user) => (
          <div key={user.id} className={styles.card}>
            <Avatar
              username={user.username}
              size="large"
              status={user.status}
              isOnline={user.isOnline}
            />
            <div className={styles.info}>
              <p>{user.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};