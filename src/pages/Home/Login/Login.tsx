
import { FC, useState } from 'react';

import { useAppState } from '@store/hooks';

import styles from './Login.module.css';
import { LoginForm } from './LoginForm';
import { LoginHeader } from './LoginHeader';

export const Login: FC = () => {
  const { state } = useAppState();
  const { theme } = state;

  const [username, setUsername] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [message, setMessage] = useState('');

  const handleUsernameChange = (username: string) => {
    setUsername(username);
    if (username.length >= 3) {
      setIsUsernameValid(true);
      setMessage(` (You are good to go ${username}!😉)`);
    } else {
      setIsUsernameValid(false);
      setMessage(' (Oops! at least 3 characters.😅)');
    }
  };

  return (
    <div className={`${styles.container} ${theme}`} data-testid="login">
      <div className={styles.content}>
        <LoginHeader />
        <LoginForm
          username={username}
          isUsernameValid={isUsernameValid}
          message={message}
          onUsernameChange={handleUsernameChange}
        />
      </div>
    </div>
  );
};