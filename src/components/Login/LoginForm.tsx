import { FC, MouseEvent } from 'react';

import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionsEnum, UserStatusEnum } from '@store/enums';
import { useAppState } from '@store/hooks';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import { PATHS } from '../../config/routes/routes';


interface LoginFormProps {
  username: string;
  isUsernameValid: boolean;
  message: string;
  onUsernameChange: (username: string) => void;
}

export const LoginForm: FC<LoginFormProps> = (props: LoginFormProps) => {
  const { username, isUsernameValid, message, onUsernameChange } = props;

  const { state, dispatch } = useAppState();
  const navigate = useNavigate();

  const handleEnter = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isUsernameValid && username) {
      dispatch({
        type: ActionsEnum.ADD_USER,
        payload: {
          id: 0,
          username: username.trim(),
          theme: state.theme,
          status: UserStatusEnum.AVAILABLE,
          isOnline: true,
          lastSeenAt: new Date().toISOString(),
        }
      });

      navigate(PATHS.LOBBY);
    }
  };

  return (
    <form className={styles.form}>
      <Input
        id="username"
        value={username}
        onValueChange={onUsernameChange}
        message={message}
        placeholder="Choose a cool username!"
        withValidation
      />

      <Button isEnabled={isUsernameValid}
        onClick={(event) => handleEnter(event)} id="login">
        <span>Enter</span>
        <FontAwesomeIcon
          data-testid="button-icon"
          icon={faArrowRightLong}
          className={`${isUsernameValid ? styles.animate : ''} ${styles.icon}`}
        />
      </Button>
    </form>
  );
};