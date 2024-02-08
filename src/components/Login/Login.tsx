import { FC, useState } from 'react';

import { useTheme } from '@components/Theme/useTheme';
import { UserActionsEnum } from '@store/enums';
import { useUser } from '@store/hooks';
import { useNavigate } from 'react-router-dom';

import { Input } from './Input';
import styles from './Login.module.css';
import { LoginButton } from './LoginButton';

export const Login: FC = () => {
  const { theme } = useTheme();
  const { dispatch } = useUser();
  const navigate = useNavigate();

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

  const handleEnter = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isUsernameValid && username) {
      dispatch({ 
        type: UserActionsEnum.JOIN, 
        payload: { 
          username: username, 
          avatar: 'avatar_url' 
        } 
      });

      navigate('/lobby');
    }
  };

  return (
    <div className={`${styles.container} ${theme}`}>
      <div className={styles.content}>
        <h1 className={styles.h1}>Step right up!</h1>
        <p>
          Welcome to <strong>The Lobby&trade;</strong>, 
          where the chat never stops and your next adventure is just a username away!
        </p>

        <form className={styles.form}>
          <Input 
            username={username} 
            onUsernameChange={handleUsernameChange} 
            message={message} />
            
          <LoginButton isEnabled={isUsernameValid} onClick={handleEnter} />
        </form>
      </div>
    </div>
  );
};