import { useEffect } from 'react';

import { Avatar } from '@components/Avatar';
import { Navigation } from '@components/Navigation';
import { SideBar } from '@components/SideBar';
import { PATHS } from '@config/routes';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppState } from '@store/hooks';
import { useIsMobile } from '@utils/hooks';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Profile.module.css';
import { UserInfo } from './UserInfo';
import { Users } from './Users';

export default function Profile () {
  const { state } = useAppState();
  const navigation = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!state.currentUser) {
      navigation(PATHS.HOME);
    }
  }, [navigation, state.currentUser]);

  return (
    <div className={styles.container} data-testid="profile">
      <Navigation>
        <li>
          <Link to={PATHS.LOBBY} className={styles.link}>
            <FontAwesomeIcon icon={faComments} />
          </Link>
        </li>
      </Navigation>

      <SideBar title="">
        <div className={styles.sidebar}>
          {state.currentUser && (
            <Avatar
              username={state.currentUser.username}
              size="large"
              status={state.currentUser.status}
              isOnline={state.currentUser.isOnline}
            />
          )}
        </div>
        {!isMobile && <UserInfo /> }
      </SideBar>

      {isMobile && <UserInfo /> }

      <Users />
    </div>
  );
}