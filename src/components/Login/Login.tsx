import { FC, useState } from 'react';

import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { useTheme } from '@components/Theme/useTheme';
import { UserActionsEnum } from '@store/enums';
import { useUser } from '@store/hooks';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import { PATHS } from '../../config/routes/routes';

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

      navigate(PATHS.LOBBY);
    }
  };

  return (
    <div className={`${styles.container} ${theme}`}>
      <div className={styles.content}>
        <h4>Welcome to</h4>
        <h1 className={styles.h1}><strong>The Lobby&trade;</strong></h1>
        <p>
        Step right up!
        where the chat never stops and your next adventure is just a username away!
        </p>

        <form className={styles.form}>
          <Input
            id="username"
            value={username}
            onValueChange={handleUsernameChange}
            message={message}
            placeholder="Choose a cool username!"
          />

          <Button isEnabled={isUsernameValid} onClick={handleEnter} />
        </form>
      </div>
    </div>
  );
};