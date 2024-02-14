import { FC, MouseEventHandler, ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  isEnabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode,
  id: string,
  className?: 'icon' | string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { isEnabled = true, onClick, children, id, className, type } = props;

  return (
    <button
      data-testid={`button-${id}`}
      className={`${styles.button} ${className ? styles[className] : ''}`}
      disabled={!isEnabled} onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );};