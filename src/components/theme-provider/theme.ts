import { createTheme, responsiveFontSizes } from '@mui/material';
import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';

/**
 * @param mode only dark and light are available
 * @returns MUI theme by mode
 */
export const getTheme = (mode: 'dark' | 'light') => {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        ...palette,
      },
      components,
      typography,
    })
  );
};
