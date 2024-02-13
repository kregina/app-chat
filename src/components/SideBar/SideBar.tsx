import { ReactNode } from 'react';

import styles from './SideBar.module.css';

interface SideBarProps {
  children: ReactNode;
  title: string;
}

export const SideBar = (props: SideBarProps) => {
  const { children, title } = props;

  return (
    <div className={styles.container} data-testid="sidebar">
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

