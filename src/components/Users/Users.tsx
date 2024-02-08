import { UserState } from '@store/types';

import { User } from './User';
import styles from './Users.module.css';

const users: UserState[] = [
  { id: 1, username: 'Alice',
    isOnline: true, 
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: 'Available'
  },
  { id: 2, username: 'Bob',
    isOnline: false, 
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: 'Busy'
  },
  { id: 3, username: 'Charlie',
    isOnline: true, 
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: 'Away'
  },
];

export const Users = () => {

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};