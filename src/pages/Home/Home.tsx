import { Login } from '@components/Login';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container} data-testid="home">
      <Login />
    </div>
  );
}