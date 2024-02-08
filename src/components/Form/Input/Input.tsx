import { FC } from 'react';

import styles from './Input.module.css';

interface InputProps {
  username: string;
  onUsernameChange: (username: string) => void;
  message: string;
}

export const Input: FC<InputProps> = ({ username, onUsernameChange, message }) => (
  <label htmlFor="username" className={styles.label}>
    <input
      className={styles.input}
      type="text"
      id="username"
      autoFocus
      onChange={(e) => onUsernameChange(e.target.value.trim())}
      autoComplete="off"
      value={username}
      data-cy="username-input"
      placeholder="Choose a cool username!"
    />
    <small>{message}</small>
  </label>
);