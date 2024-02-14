import { Header } from '@components/Header';

import styles from './Chat.module.css';
import { Footer } from '../Footer';
import { Message } from '../Message';

export const Chat = () => {

  return (
    <div className={styles.container} data-testid="chat">
      <Header />
      <Message />
      <Footer />
    </div>
  );
};