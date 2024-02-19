import { Theme, createTheme } from '@mui/material'
import { palette } from './palette'
import { components } from './components'

/**
 * @param mode only dark and light are available
 * @returns MUI theme by mode
 */
export const getTheme = (mode: 'dark' | 'light'): Theme => {
  return createTheme({
    palette: {
      mode,
      ...palette,
    },
    components,
  })
}
