import { Box, Snackbar } from '@mui/material';
import useSnackbarManager from '@hooks/useSnackbarManager';

export function SnackbarContainer() {
  const { open, closeSnackbar, snackbarContent, position } =
    useSnackbarManager();

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      anchorOrigin={position}
    >
      <Box>{snackbarContent}</Box>
    </Snackbar>
  );
}
