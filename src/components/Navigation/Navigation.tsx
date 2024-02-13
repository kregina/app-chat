import { FC } from 'react';

import { Avatar } from '@components/Avatar';
import { Tooltip } from '@components/StyledTooltip';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppState } from '@store/hooks';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';
import { PATHS } from '../../config/routes/routes';

export const Navigation: FC = () => {
  const { state } = useAppState();

  return (
    <nav className={styles.navigation} data-testid="navigation">
      <Tooltip id="logout-tooltip" data-testid="logout-tooltip" />

      <ul className={styles.list}>
        {state.currentUser && (
          <li className={styles.username}>
            <Link
              to={PATHS.PROFILE}
              aria-label="Go to profile"
            >
              <Avatar
                username={state.currentUser.username}
                size="large"
                status={state.currentUser.status}
                isOnline={state.currentUser.isOnline}
              />
              <span
                data-tooltip-id="username-tooltip"
                data-tooltip-content={state.currentUser.username}
                data-testid="username-tooltip"
              >
                {state.currentUser.username.length > 5 && (
                  <Tooltip id="username-tooltip" data-testid="username-tooltip" />
                )}
                {state.currentUser.username}
              </span>
            </Link>
          </li>
        )}
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