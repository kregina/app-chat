import { useTheme } from "@components/Theme/useTheme";
import { Theme } from "@utils/enuns";
import { Tooltip } from "react-tooltip";

import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.button}
      onClick={toggleTheme}
      data-cy="theme-switcher"
      data-tooltip-id="theme-switcher-tooltip"
      data-tooltip-content={
        theme === Theme.Light ? 'Switch to dark mode' : 'Switch to light mode'
      }
    >
      <Tooltip id="theme-switcher-tooltip" />
      <span className={styles.icon}>{theme === Theme.Light ? '🌚' : '🌞'}</span>
    </button>
  );
};

export default ThemeSwitcher;
