import { User as UserState } from '@store/types';

import { User } from './User';
import styles from './UsersList.module.css';

export const UsersList = ({ users, title }: { users: UserState[]; title?: string }) => (
  <>
    {title &&
      <h4 className={styles.title}>
        {title}
        <small> ({users.length})</small>
      </h4>
    }

    <ul className={styles.list}>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  </>
);