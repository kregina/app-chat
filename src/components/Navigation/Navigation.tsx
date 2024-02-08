import { FC } from 'react';

import { Avatar } from '@components/Avatar';
import { Tooltip } from '@components/StyledTooltip';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUser } from '@store/hooks';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

export const Navigation: FC = () => {
  const { state } = useUser();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <Avatar
            username={state.username}
            size="large"
            status={state.status}
          />
        </li>
        <li
          className={styles.link}
          data-tooltip-id="logout-tooltip"
          data-tooltip-content="Leave The Lobby"
        >
          <Tooltip id="logout-tooltip" />
          <Link to="/" aria-label="Logout">
            <FontAwesomeIcon icon={faDoorOpen} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};