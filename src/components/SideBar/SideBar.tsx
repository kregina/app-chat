import { FC, useEffect, useState } from 'react';

import { Search } from '@components/Search';
import { UsersList } from '@components/Users';
import { useAppState } from '@store/hooks';
import { User } from '@store/types';
import { useIsMobile } from '@utils/hooks';

import styles from './SideBar.module.css';

export const SideBar:FC = () => {
  const isMobile = useIsMobile();
  const { state } = useAppState();

  const [users, setUsers] = useState<User[]>(state.users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredUsers = state.users.filter((user: User) => {
      return user.username.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setUsers(filteredUsers);
  }, [searchTerm, state.users]);

  const onlineUsers = users.filter((user: User) => user.isOnline);
  const offlineUsers = users.filter((user: User) => !user.isOnline);

  return (
    <div className={styles.container} data-testid="sidebar">
      <h2 className={styles.title}>Users</h2>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <div className={styles.content} data-testid="users-list-container">
        {isMobile && (
          <UsersList users={users} />
        )}

        {!isMobile && (
          <>
            <UsersList users={onlineUsers} title="Online" />
            <UsersList users={offlineUsers} title="Offline" />
          </>
        )}
      </div>
    </div>
  );
};
