import { FC, MouseEventHandler } from 'react';

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Button.module.css';

interface ButtonProps {
  isEnabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = ({
  isEnabled,
  onClick,
}) => (
  <button
    data-testid="button-login"
    data-cy="button-login"
    className={styles.button}
    disabled={!isEnabled} onClick={onClick}
  >
    <span>Enter</span>
    <FontAwesomeIcon
      data-testid="button-icon"
      icon={faArrowRightLong}
      className={styles.icon}
    />
  </button>
);