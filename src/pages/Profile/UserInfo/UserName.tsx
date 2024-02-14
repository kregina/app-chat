import { MouseEvent, useEffect, useState } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { faPaperPlane, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionsEnum, UserStatusEnum } from '@store/enums';
import { useAppState } from '@store/hooks';

import styles from './UserInfo.module.css';

export const UserName = () => {
  const { state, dispatch } = useAppState();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(state.currentUser?.username || '');
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsEditing(false);
        setUsername(state.currentUser?.username || '');
      }
    };

    document.addEventListener('keydown', handleEscapeKeyPress);
    return () => document.removeEventListener('keydown', handleEscapeKeyPress);
  }, [state.currentUser]);

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
    validateUsername(newUsername);
  };

  const validateUsername = (newUsername: string) => {
    setUsername(newUsername);
    if (newUsername.length >= 3) {
      setIsValidUsername(true);
      setMessage(` (You are good to go ${newUsername}!😉)`);
    } else {
      setIsValidUsername(false);
      setMessage(' (Oops! at least 3 characters.😅)');
    }
  };

  const saveUsername = () => {
    if (isValidUsername && username) {
      dispatch({
        type: ActionsEnum.SET_USER,
        payload: {
          id: state.currentUser?.id || 0,
          isOnline: true,
          username: username.trim(),
          status: UserStatusEnum.AVAILABLE,
          lastSeenAt: new Date().toISOString(),
        },
      });
      setIsEditing(false);
    }
  };

  const toggleEditState = () => setIsEditing(!isEditing);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    isEditing ? saveUsername() : toggleEditState();
  };

  const handleInputBlur = () => {
    if (username !== state.currentUser?.username || isValidUsername) {
      saveUsername();
    } else {
      cancelEditing();
    }
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setUsername(state.currentUser?.username || '');
  };

  return (
    <h1 className={styles.username}>
      {!isEditing ? (
        state.currentUser?.username
      ) : (
        <Input
          id="username"
          placeholder="Username"
          defaultValue={state.currentUser?.username}
          onValueChange={handleUsernameChange}
          withValidation
          value={username}
          message={message}
          onBlur={handleInputBlur}
        />
      )}
      <Button
        id="edit-username"
        onClick={handleButtonClick}
        type="button"
        className="icon"
        isEnabled={!isEditing || isValidUsername}
      >
        <FontAwesomeIcon icon={!isEditing ? faPencil : faPaperPlane} />
      </Button>
    </h1>
  );
};