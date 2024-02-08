import { FC } from 'react';

import { Avatar } from '@components/Avatar';
import { UserState } from '@store/types';
import { useIsMobile } from '@utils/hooks';

import styles from './User.module.css';

interface UserProps  {
  user: UserState;
}

export const User:FC<UserProps> = ({ user }) => {
  const { username } = user;

  const isMobile = useIsMobile();

  return (
    <div className={styles.container}>
      <Avatar 
        username={username} 
        size={isMobile ? 'small' : 'medium'} 
        status={user.status}
      />

      {!isMobile && (
        <div className={styles.info}>
          <h3>{username}</h3>
          <p>{user.status}</p>
        </div>
      )}
    </div>
  );
};