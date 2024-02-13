import { ThemeEnum } from '@store/enums';

export const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

export const getSystemThemePreference = (): ThemeEnum =>
  window.matchMedia &&
window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches ? ThemeEnum.Dark : ThemeEnum.Light;