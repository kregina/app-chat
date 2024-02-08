import { Chat } from '@components/Chat';
import { Navigation } from '@components/Navigation';
import { SideBar } from '@components/SideBar';

import styles from './Lobby.module.css';

export default function Lobby() {

  return (
    <div className={styles.container}>
      <Navigation />
      <SideBar />
      <Chat />
    </div>
  );
}
