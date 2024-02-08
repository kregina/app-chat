import { UsersList } from '@components/Users';
import { UserState } from '@store/types';
import { useIsMobile } from '@utils/hooks';

import styles from './SideBar.module.css';

const users: UserState[] = [
  { id: 1, 
    username: 'Alice', 
    isOnline: true, 
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: 'Available'
  },
  { id: 2, 
    username: 'Bob', 
    isOnline: false, 
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: 'Busy'
  },
  { id: 3,
    username: 'Charlie',
    isOnline: true,
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: 'Away'
  },
];

export const SideBar = () => {
  const isMobile = useIsMobile();

  const onlineUsers = users.filter((user) => user.isOnline);
  const offlineUsers = users.filter((user) => !user.isOnline);

  return (
    <div className={styles.container}>
      {isMobile ? (
        <UsersList users={users} />
      ) : (
        <>
          <UsersList users={onlineUsers} title="Online" />
          <UsersList users={offlineUsers} title="All Users" />
        </>
      )}
    </div>
  );
};
