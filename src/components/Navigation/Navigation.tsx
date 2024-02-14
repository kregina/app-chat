import { ReactNode } from 'react';

import { Tooltip } from '@components/StyledTooltip';
import { PATHS } from '@config/routes';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

interface NavigationProps {
  children: ReactNode;
}

export const Navigation = (props: NavigationProps) => {
  const { children } = props;

  return (
    <nav className={styles.navigation} data-testid="navigation">
      <Tooltip id="logout-tooltip" data-testid="logout-tooltip" />

      <ul className={styles.list}>
        {children}
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