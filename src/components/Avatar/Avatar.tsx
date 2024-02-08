import { FC } from 'react';

import { UserStatusEnum } from '@store/enums';

import styles from './Avatar.module.css';

interface AvatarProps {
  username: string;
  size: 'small' | 'medium' | 'large';
  status: UserStatusEnum
  isOnline?: boolean;
}

export const Avatar: FC<AvatarProps> = ({ username, size, status, isOnline }) => {
  return (
    <div
      className={`
        ${styles.avatar} 
        ${styles[size]}
        ${isOnline ? styles[status] : ''}
      `}
    >
      <img
        src={`https://robohash.org/${username}?set=set4`} alt={`${username} avatar`}
      />
    </div>
  );
};