import { FC } from 'react';

import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  value: string;
  onValueChange: (value: string) => void;
  message?: string;
  placeholder: string;
  id: string;
  withValidation?: boolean;
  defaultValue?: string;
}

export const Input: FC<InputProps> = (props) => {
  const { value,
    onValueChange,
    message,
    placeholder,
    id,
    withValidation,
    defaultValue
  } = props;

  return (
    <label htmlFor={id} className={styles.label}>
      <input
        {...props}
        className={styles.input}
        type="text"
        id={id}
        autoFocus
        onChange={(e) => onValueChange(e.target.value)}
        autoComplete="off"
        value={value}
        data-testid={`${id}-input`}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {withValidation && <small>{message}</small>}
    </label>
  );};