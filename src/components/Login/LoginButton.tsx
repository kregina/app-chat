import { FC, MouseEventHandler } from "react";

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./Login.module.css";

interface LoginButtonProps { 
  isEnabled: boolean; 
  onClick: MouseEventHandler<HTMLButtonElement> 
}

export const LoginButton: FC<LoginButtonProps> = ({
  isEnabled,
  onClick,
}) => (
  <button 
    data-cy="button-login" 
    className={styles.button} 
    disabled={!isEnabled} onClick={onClick}>
    <span>Enter</span>
    <FontAwesomeIcon 
      icon={faArrowRightLong} className={styles.icon} />
  </button>
);