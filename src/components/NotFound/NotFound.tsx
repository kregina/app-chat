import { Tooltip } from '@components/StyledTooltip';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.css';
import { PATHS } from '../../config/routes/routes';

export const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(PATHS.HOME);
  };

  return (
    <div className={styles.container} data-testid="not-found">
      <h1 className={styles.title}>404</h1>
      <p className={styles.meme}>👁️👄👁️</p>
      <p>Well, this is unexpected...</p>
      <p>The page you're looking for is not here,
         but we're just as surprised as you are!</p>

      <div className={styles.goback}>
        <p>Let's get you back on track.</p>

        <button
          className={styles.button}
          onClick={goToHome}
          data-cy="go-home"
          data-tooltip-id="go-home-tooltip"
          data-tooltip-content="Go back to the home page"
          data-tooltip-place="right"
          aria-label="Go back to the home page"
        >
          <Tooltip id="go-home-tooltip" />
          Go home <FontAwesomeIcon icon={faHouseChimney} />
        </button>
      </div>
    </div>
  );
};