import { FC } from 'react';

import { UsersList } from '@components/Users';
import { UserState } from '@store/types';
import { useIsMobile } from '@utils/hooks';

import styles from './SideBar.module.css';

export const SideBar:FC<{users: UserState[]}> = ({ users }) => {
  const isMobile = useIsMobile();

  const onlineUsers = users.filter((user) => user.isOnline);
  const offlineUsers = users.filter((user) => !user.isOnline);

  return (
    <div className={styles.container}>
      {isMobile ? (
        <UsersList users={users} />
      ) : (
        <>
          <UsersList users={onlineUsers} title="Online" />
          <UsersList users={offlineUsers} title="All Users" />
        </>
      )}
    </div>
  );
};
