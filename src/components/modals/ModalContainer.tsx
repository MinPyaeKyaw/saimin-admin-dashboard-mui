import { Box, Dialog, useMediaQuery, useTheme } from '@mui/material';
import useModalManager from '@hooks/useModalManager';

export function ModalContainer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { modalContent, open, closeModal } = useModalManager();

  return (
    <Dialog
      onClose={closeModal}
      open={open}
      fullWidth
      maxWidth={isMobile ? 'xl' : 'sm'}
    >
      <Box padding={2}>{modalContent}</Box>
    </Dialog>
  );
}
