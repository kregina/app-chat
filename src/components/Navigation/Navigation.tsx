import { FC } from "react";

import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Navigation.module.css';

export const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon icon={faComments} />
        </li>
        <li>
          <FontAwesomeIcon icon={faDoorOpen} />
        </li>
      </ul>
    </nav>
  );
};