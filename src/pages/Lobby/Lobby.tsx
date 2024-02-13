import { FC } from 'react';

import { Chat } from '@components/Chat';
import { Navigation } from '@components/Navigation';
import { SideBar } from '@components/SideBar';

import styles from './Lobby.module.css';

const Lobby: FC = () => {
  return (
    <div className={styles.container} data-testid="lobby">
      <Navigation />
      <SideBar />
      <Chat />
    </div>
  );
};

export default Lobby;
