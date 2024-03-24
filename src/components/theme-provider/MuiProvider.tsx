import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { ModalContainer } from '@components/modals';
import { SnackbarContainer } from '@components/snackbars';
import useUserStore from '@stores/userStore';
import { ErrorBoundary } from './ErrorBoundary';
import { getTheme } from './theme';

interface Props {
  children: ReactNode;
}

/**
 * @returns MUI theme provider to wrap children nodes
 */
export default function MuiProvider({ children }: Props) {
  const { mode } = useUserStore();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <>
          {children}
          <ModalContainer />
          <SnackbarContainer />
        </>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
