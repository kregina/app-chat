import { MouseEvent, useState } from 'react';

import { useTheme } from '@components/Theme/useTheme';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';

export const Login = () => {
  const { theme } = useTheme();

  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [isUserNameValid, setIsUsernameValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentUsername = event.target.value.trim();
    setUsername(currentUsername);
    
    if(currentUsername.length >= 3) {
      setIsUsernameValid(true);
      setMessage(` (You are good to go ${currentUsername}!😉)`);
    } else {
      setIsUsernameValid(false);
      setMessage(" (Oops! at least 3 characters.😅)");
    }
  };

  
  const handleEnter = ( event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(isUserNameValid && username) {
      navigate('/lobby');
    }
  };

  return (
    <div className={`${styles.container} ${theme}`}>
      <div className={styles.content}>
        <h1 className={styles.h1}>Step right up!</h1>
        <p>Welcome to <strong>The Lobby&trade;</strong>, 
          where the chat never stops and your next adventure is just a username away!</p>

        <form className={styles.form}>
          <label htmlFor="username">
            <input
              type="text" 
              id="username"
              autoFocus 
              onChange={handleInput}
              autoComplete="off" 
              value={username}
              placeholder="Choose a cool username!"
            />
            <small>{message}</small>
          </label>

          <button 
            className={styles.button}
            disabled={!isUserNameValid} 
            onClick={handleEnter}>
            <span>Enter</span>
            <FontAwesomeIcon 
              icon={faArrowRightLong} 
              className={styles.icon} 
            />
          </button>       
        </form>
      </div>
    </div>
  );
};