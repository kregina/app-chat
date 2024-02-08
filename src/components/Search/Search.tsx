import { FC } from 'react';

import { Input } from '@components/Form/Input';

import styles from './Search.module.css';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (search: string) => void;
}

export const Search:FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {

  return (
    <div className={styles.container}>
      <Input
        id="search"
        placeholder="Search an user..."
        value={searchTerm}
        onValueChange={setSearchTerm}
      />
    </div>
  );
};