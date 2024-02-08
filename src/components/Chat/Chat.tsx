
import { Message } from '@components/Message';

import styles from './Chat.module.css';

export const Chat = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Lobby&trade;</h1>
      <div className={styles.content}>
        <Message />
      </div>
    </div>
  );
};