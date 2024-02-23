import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { getTheme } from './theme';
import { ErrorBoundary } from './ErrorBoundary';

interface Props {
  children: ReactNode;
}

/**
 * @returns MUI theme provider to wrap children nodes
 */
export default function MuiProvider({ children }: Props) {
  const { mode } = useUserPreferencesStore();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>
  );
}
