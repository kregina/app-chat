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
    data-cy="button-login"
    className={styles.button}
    disabled={!isEnabled} onClick={onClick}>
    <span>Enter</span>
    <FontAwesomeIcon
      icon={faArrowRightLong} className={styles.icon} />
  </button>
);