import { Navigation } from '@components/Navigation';
import { SideBar } from '@components/SideBar';
import { users } from '@store/data';
import { useUser } from '@store/hooks';

import styles from './Lobby.module.css';

export default function Lobby() {
  const { state } = useUser();

  return (
    <div className={styles.container}>
      <Navigation user={state} />
      <SideBar users={users} />
      <div>
        <h1>Lobby</h1>
        <p>Hey {state.username}</p>
      </div>
    </div>
  );
}
