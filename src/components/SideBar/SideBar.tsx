import { UsersList } from '@components/Users';
import { UserStatusEnum } from '@store/enums';
import { UserState } from '@store/types';
import { useIsMobile } from '@utils/hooks';

import styles from './SideBar.module.css';

const users: UserState[] = [
  { id: 1, 
    username: 'Alice', 
    isOnline: true, 
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: UserStatusEnum.AVAILABLE
  },
  { id: 2, 
    username: 'Bob', 
    isOnline: false, 
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: UserStatusEnum.AWAY
  },
  { id: 3,
    username: 'Charlie',
    isOnline: true,
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: UserStatusEnum.BUSY
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
