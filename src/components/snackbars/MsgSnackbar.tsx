import { ReactElement } from 'react';
import { Alert } from '@mui/material';

interface Props {
  message: string;
  severity?: 'success' | 'warning' | 'error' | 'info';
  icon?: ReactElement<any, any> | false;
}

export function MsgSnackbar({
  message,
  icon = false,
  severity = 'success',
}: Props) {
  return (
    <Alert severity={severity} variant="filled" icon={icon}>
      {message}
    </Alert>
  );
}
