import { ReactElement } from 'react';
import { SnackbarOrigin } from '@mui/material';
import { create } from 'zustand';

interface SnackbarState {
  open: boolean;
  snackbarContent: ReactElement<any, any> | undefined;
  position: SnackbarOrigin;
  openSnackbar: (
    snackbarContent: ReactElement<any, any>,
    position?: SnackbarOrigin
  ) => void;
  closeSnackbar: () => void;
}

const useSnackbarManager = create<SnackbarState>()((set) => ({
  open: false,
  snackbarContent: undefined,
  position: { vertical: 'bottom', horizontal: 'left' },
  openSnackbar: (
    snackbarContent,
    position = { vertical: 'bottom', horizontal: 'left' }
  ) => set(() => ({ open: true, snackbarContent, position })),
  closeSnackbar: () => set(() => ({ open: false, snackbarContent: undefined })),
}));

export default useSnackbarManager;
