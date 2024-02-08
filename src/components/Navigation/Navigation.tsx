import { FC } from 'react';

import { Avatar } from '@components/Avatar';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUser } from '@store/hooks';

import styles from './Navigation.module.css';

export const Navigation: FC = () => {
  const { state } = useUser();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <Avatar username={state.username} />
        </li>
        <li>
          <FontAwesomeIcon icon={faDoorOpen} />
        </li>
      </ul>
    </nav>
  );
};