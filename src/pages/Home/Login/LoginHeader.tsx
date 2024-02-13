import { FC } from 'react';

import styles from './Login.module.css';

export const LoginHeader: FC = () => {
  return (
    <>
      <h4>Welcome to</h4>
      <h1 className={styles.h1}><strong>The Lobby&trade;</strong></h1>
      <p>
        Step right up!
        where the chat never stops and your next adventure is just a username away!
      </p>
    </>
  );
};