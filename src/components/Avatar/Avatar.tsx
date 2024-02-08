import { FC } from 'react';

export const Avatar: FC<{username: string}> = ({ username }) => {
  
  return (
    <div>
      <img 
        src={`https://robohash.org/${username}?set=set4`} alt={`${username} avatar`}
      />
    </div>
  );
};