import { UserState } from '@store/types';

import { User } from './User';
import styles from './UsersList.module.css';

export const UsersList = ({ users, title }: { users: UserState[]; title?: string }) => (
  <>
    {title && <h2>{title}</h2>}
    <ul className={styles.list}>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  </>
);