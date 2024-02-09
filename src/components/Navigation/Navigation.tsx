import { FC } from 'react';

import { Avatar } from '@components/Avatar';
import { Tooltip } from '@components/StyledTooltip';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUser } from '@store/hooks';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';
import { PATHS } from '../../config/routes/routes';

export const Navigation: FC = () => {
  const { state } = useUser();
  const user = state;

  return (
    <nav className={styles.navigation} data-testid="navigation">
      <Tooltip id="logout-tooltip" data-testid="" />

      <ul className={styles.list}>
        <li className={styles.username}>
          <Link
            to={PATHS.PROFILE}
            aria-label="Go to profile"
          >
            <Avatar
              username={user.username}
              size="large"
              status={user.status}
              isOnline={user.isOnline}
            />
            <span
              data-tooltip-id="username-tooltip"
              data-tooltip-content={user.username}
              data-testid="username-tooltip"
            >

              {user.username.length > 5 &&
              <Tooltip id="username-tooltip"
              />}

              {user.username}
            </span>
          </Link>
        </li>
        <li><h1>The Lobby&trade;</h1></li>
        <li
          data-tooltip-id="logout-tooltip"
          data-tooltip-content="Leave The Lobby"
          className={styles.logout}
        >
          <Link to={PATHS.HOME} aria-label="Logout" >
            <FontAwesomeIcon icon={faDoorOpen} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};