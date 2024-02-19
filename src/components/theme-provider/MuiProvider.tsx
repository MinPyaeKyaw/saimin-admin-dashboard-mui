import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { getTheme } from './theme';

interface Props {
  children: ReactNode;
}

/**
 * @returns MUI theme provider to wrap children nodes
 */
export default function MuiProvider({ children }: Props) {
  const { mode } = useUserPreferencesStore();

  return <ThemeProvider theme={() => getTheme(mode)}>{children}</ThemeProvider>;
}
