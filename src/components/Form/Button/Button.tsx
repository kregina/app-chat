import { FC, MouseEventHandler, ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  isEnabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode,
  id: string,
  className?: 'icon';
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { isEnabled = true, onClick, children, id, className } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <button
      data-testid={`button-${id}`}
      data-cy={`button-${id}`}
      className={`${styles.button} ${className ? styles[className] : ''}`}
      disabled={!isEnabled} onClick={handleOnClick}
    >
      {children}
    </button>
  );};