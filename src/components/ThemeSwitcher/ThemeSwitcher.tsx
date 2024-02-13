import { Tooltip } from '@components/StyledTooltip';
import { ActionsEnum, ThemeEnum } from '@store/enums';
import { useAppState } from '@store/hooks';

import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { state, dispatch } = useAppState();
  const { theme } = state;

  const label = theme ===
    ThemeEnum.Light ? 'Switch to dark mode' : 'Switch to light mode';

  const toggleTheme = () => {
    dispatch({ type: ActionsEnum.SET_THEME,
      payload: theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light
    });
  };

  return (
    <button
      className={styles.button}
      onClick={toggleTheme}
      data-cy="theme-switcher"
      aria-label={label}
      data-tooltip-id="theme-switcher-tooltip"
      data-tooltip-content={label}
    >
      <Tooltip id="theme-switcher-tooltip" />
      <span className={styles.icon}>{theme === ThemeEnum.Light ? '🌚' : '🌞'}</span>
    </button>
  );
};

