import { Avatar } from '@components/Avatar';
import { Navigation } from '@components/Navigation';
import { Tooltip } from '@components/StyledTooltip';
import { PATHS } from '@config/routes';
import { useAppState } from '@store/hooks';
import { Link } from 'react-router-dom';

import styles from './Lobby.module.css';

export const NavigationWrapper = () => {
  const { state } = useAppState();

  return (
    <Navigation>
      {state.currentUser && (
        <li className={styles.username}>
          <Link
            to={PATHS.PROFILE}
            aria-label="Go to profile"
          >
            <Avatar
              id="navigation"
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
    </Navigation>
  );
};