import { FC } from 'react';

import styles from './Input.module.css';

interface InputProps{
  value: string;
  onValueChange: (value: string) => void;
  message?: string;
  placeholder: string;
  id: string;
  withValidation?: boolean;
  defaultValue?: string;
  onBlur?: () => void;
}

export const Input: FC<InputProps> = (props) => {
  const { value,
    onValueChange,
    message,
    placeholder,
    id,
    withValidation,
    defaultValue,
    onBlur
  } = props;

  return (
    <label htmlFor={id} className={styles.label}>
      <input
        className={styles.input}
        type="text"
        id={id}
        autoFocus
        onChange={(e) => onValueChange(e.target.value)}
        autoComplete="off"
        defaultValue={defaultValue ?? value}
        data-testid={`${id}-input`}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {withValidation && <small>{message}</small>}
    </label>
  );};