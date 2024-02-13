import styles from './Home.module.css';
import { Login } from './Login/Login';

export default function Home() {
  return (
    <div className={styles.container} data-testid="home">
      <Login />
    </div>
  );
}