import { FC } from 'react';

import { Input } from '@components/Input';

import styles from './Search.module.css';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (search: string) => void;
}

export const Search:FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {

  return (
    <div className={styles.container} data-testid="search">
      <Input
        id="search"
        placeholder="Search an user..."
        value={searchTerm}
        onValueChange={setSearchTerm}
      />
    </div>
  );
};