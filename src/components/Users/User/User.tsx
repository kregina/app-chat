import { FC } from 'react';

import { Avatar } from '@components/Avatar';
import { UserState } from '@store/types';

import styles from './User.module.css';

interface UserProps  {
  user: UserState;
}

export const User:FC<UserProps> = ({ user }) => {
  const { username } = user;

  return (
    <div className={styles.container}>
      <Avatar username={username} size="small" />
    </div>
  );
};