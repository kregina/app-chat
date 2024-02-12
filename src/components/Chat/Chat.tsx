import { Footer } from '@components/Footer';
import { Message } from '@components/Message';

import styles from './Chat.module.css';

export const Chat = () => {


  return (
    <div className={styles.container} data-testid="chat">
      <h1 className={styles.title}>The Lobby&trade;</h1>
      <Message />
      <Footer />
    </div>
  );
};