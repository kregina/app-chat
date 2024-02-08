import { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './Avatar.module.css';

interface AvatarProps {
  username: string;
  size: 'small' | 'medium' | 'large';
}

export const Avatar: FC<AvatarProps> = ({ username, size }) => {
  
  return (
    <Link to="/profile" className={`${styles.avatar} ${styles[size]}`}>
      <img 
        src={`https://robohash.org/${username}?set=set4`} alt={`${username} avatar`}
      />
    </Link>
  );
};