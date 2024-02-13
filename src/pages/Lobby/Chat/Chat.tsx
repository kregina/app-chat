import styles from './Chat.module.css';
import { Footer } from '../Footer';
import { Message } from '../Message';

export const Chat = () => {

  return (
    <div className={styles.container} data-testid="chat">
      <h1 className={styles.title}>The Lobby&trade;</h1>
      <Message />
      <Footer />
    </div>
  );
};