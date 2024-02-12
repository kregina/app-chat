import { FC } from 'react';

import styles from './Input.module.css';

interface InputProps {
  value: string;
  onValueChange: (value: string) => void;
  message?: string;
  placeholder: string;
  id: string;
}

export const Input: FC<InputProps> = (props) => {
  const { value, onValueChange, message, placeholder, id } = props;

  return (
    <label htmlFor={id} className={styles.label}>
      <input
        className={styles.input}
        type="text"
        id={id}
        autoFocus
        onChange={(e) => onValueChange(e.target.value.trim())}
        autoComplete="off"
        value={value}
        data-cy={`${id}-input`}
        placeholder={placeholder}
      />
      {message && <small>{message}</small>}
    </label>
  );};