import { FC, useState } from 'react';

import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionsEnum, UserStatusEnum } from '@store/enums';
import { useAppState } from '@store/hooks';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import { PATHS } from '../../config/routes/routes';

export const Login: FC = () => {
  const { state, dispatch } = useAppState();
  const { theme } = state;

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
        type: ActionsEnum.ADD_USER,
        payload: {
          id: 0,
          username,
          theme,
          status: UserStatusEnum.AVAILABLE,
          isOnline: true,
          lastSeenAt: new Date().toISOString(),
        }
      });

      navigate(PATHS.LOBBY);
    }
  };

  return (
    <div className={`${styles.container} ${theme}`} data-testid="login">
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

          <Button isEnabled={isUsernameValid} onClick={handleEnter} id="login">
            <span>Enter</span>
            <FontAwesomeIcon
              data-testid="button-icon"
              icon={faArrowRightLong}
              className={`${isUsernameValid ? styles.animate : ''} ${styles.icon}`}
            />
          </Button>
        </form>
      </div>
    </div>
  );
};