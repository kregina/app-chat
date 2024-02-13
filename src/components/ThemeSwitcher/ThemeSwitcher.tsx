import { Tooltip } from '@components/StyledTooltip';
import { useTheme } from '@components/Theme/useTheme';
import { ThemeEnum } from '@store/enums';

import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const label = theme ===
    ThemeEnum.Light ? 'Switch to dark mode' : 'Switch to light mode';

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

