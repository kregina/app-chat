import { FC } from 'react';

import { Avatar } from '@components/Avatar';
import { Tooltip } from '@components/StyledTooltip';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserState } from '@store/types';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

export const Navigation: FC<{user: UserState}> = ({ user }) => {

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.username}>
          <Link
            to="/profile"
            aria-label="Go to profile"
          >
            <Avatar
              username={user.username}
              size="large"
              status={user.status}
            />
            <span>{user.username}</span>
          </Link>
        </li>
        <li><h1>The Lobby&trade;</h1></li>
        <li
          className={styles.logout}
          data-tooltip-id="logout-tooltip"
          data-tooltip-content="Leave The Lobby"
        >
          <Tooltip id="logout-tooltip" />
          <Link to="/" aria-label="Logout" >
            <FontAwesomeIcon icon={faDoorOpen} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};