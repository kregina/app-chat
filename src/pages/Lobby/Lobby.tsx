import { FC, useEffect, useState } from 'react';

import { SideBar } from '@components/SideBar';
import { PATHS } from '@config/routes';
import { useAppState } from '@store/hooks';
import { User } from '@store/types';
import { useIsMobile } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';

import { Chat } from './Chat';
import styles from './Lobby.module.css';
import { NavigationWrapper } from './NavigationWrapper';
import { Search } from './Search';
import { UsersList } from './Users';

const Lobby: FC = () => {
  const navigation = useNavigate();
  const isMobile = useIsMobile();
  const { state } = useAppState();

  const [users, setUsers] = useState<User[]>(state.users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!state.currentUser) {
      navigation(PATHS.HOME);
    }
  }, [navigation, state.currentUser]);

  useEffect(() => {
    const filteredUsers = state.users.filter((user: User) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  }, [searchTerm, state.users]);

  const onlineUsers = users.filter((user: User) => user.isOnline);
  const offlineUsers = users.filter((user: User) => !user.isOnline);

  return (
    <div className={styles.container} data-testid="lobby">
      <NavigationWrapper />

      <SideBar title="Users">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div data-testid="users-list-container">
          {isMobile ? (
            <UsersList users={users} />
          ) : (
            <>
              <UsersList users={onlineUsers} title="Online" />
              <UsersList users={offlineUsers} title="Offline" />
            </>
          )}
        </div>
      </SideBar>
      <Chat />
    </div>
  );
};

export default Lobby;
