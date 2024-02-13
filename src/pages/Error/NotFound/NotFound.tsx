import { Button } from '@components/Button';
import { Tooltip } from '@components/StyledTooltip';
import { PATHS } from '@config/routes';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} data-testid="not-found">
      <h1 className={styles.title}>404</h1>
      <p className={styles.meme}>👁️👄👁️</p>
      <p>Well, this is unexpected...</p>
      <p>The page you're looking for is not here,
         but we're just as surprised as you are!</p>

      <p>Let's get you back on track.</p>

      <Button
        onClick={() => navigate(PATHS.HOME)}
        id="go-home"
        data-cy="go-home"
        data-tooltip-id="go-home-tooltip"
        data-tooltip-content="Go back to the home page"
        data-tooltip-place="right"
        aria-label="Go back to the home page"
        data-testid="go-home"
      >
        <Tooltip id="go-home-tooltip" />
        Go home <FontAwesomeIcon icon={faHouseChimney} />
      </Button>
    </div>
  );
};