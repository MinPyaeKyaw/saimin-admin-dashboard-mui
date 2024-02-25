import { createTheme } from '@mui/material';
import { components } from './components';
import { palette } from './palette';

/**
 * @param mode only dark and light are available
 * @returns MUI theme by mode
 */
export const getTheme = (mode: 'dark' | 'light') => {
  return createTheme({
    palette: {
      mode,
      ...palette,
    },
    components,
  });
};
