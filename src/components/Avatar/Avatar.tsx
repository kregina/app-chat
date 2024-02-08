import { FC } from 'react';

import { UserStatusEnum } from '@store/enums';
import { Link } from 'react-router-dom';

import styles from './Avatar.module.css';

interface AvatarProps {
  username: string;
  size: 'small' | 'medium' | 'large';
  status: UserStatusEnum
}

export const Avatar: FC<AvatarProps> = ({ username, size, status }) => {
  return (
    <Link
      to="/profile"
      className={`
        ${styles.avatar} 
        ${styles[size]}
        ${styles[status]}
      `}
    >
      <img
        src={`https://robohash.org/${username}?set=set4`} alt={`${username} avatar`}
      />
    </Link>
  );
};