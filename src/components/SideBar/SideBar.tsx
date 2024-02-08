import { FC, useEffect, useState } from 'react';

import { Search } from '@components/Search';
import { UsersList } from '@components/Users';
import { dataUsers } from '@store/data';
import { UserState } from '@store/types';
import { useIsMobile } from '@utils/hooks';

import styles from './SideBar.module.css';

export const SideBar:FC = () => {
  const isMobile = useIsMobile();

  const [users, setUsers] = useState<UserState[]>(dataUsers);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredUsers = dataUsers.filter((user: UserState) => {
      return user.username.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setUsers(filteredUsers);
  }, [searchTerm]);

  const onlineUsers = users.filter((user: UserState) => user.isOnline);
  const offlineUsers = users.filter((user: UserState) => !user.isOnline);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Users</h2>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <div className={styles.content}>
        {isMobile ? (
          <UsersList users={users} />
        ) : (
          <>
            <UsersList users={onlineUsers} title="Online" />
            <UsersList users={offlineUsers} title="Offline" />
          </>
        )}
      </div>
    </div>
  );
};
