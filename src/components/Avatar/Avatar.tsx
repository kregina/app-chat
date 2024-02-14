import { FC } from 'react';

import { UserStatusEnum } from '@store/enums';

import styles from './Avatar.module.css';

interface AvatarProps {
  username: string;
  size: 'small' | 'medium' | 'large';
  status: UserStatusEnum;
  isOnline?: boolean;
  id?: string;
}

export const Avatar: FC<AvatarProps> = ({ username, size, status, isOnline, id }) => {
  return (
    <div
      data-testid={`${id}-avatar`}
      className={`
        ${styles.avatar} 
        ${styles[size]}
        ${isOnline ? styles[status] : ''}
      `}
    >
      <img
        src={`https://robohash.org/${username}?set=set4`}
        alt={`${username} avatar`}
      />
    </div>
  );
};
