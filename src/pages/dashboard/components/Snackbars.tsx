import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button, Grid } from '@mui/material';
import { MsgSnackbar } from '@components/snackbars';
import useSnackbarManager from '@hooks/useSnackbarManager';

export function Snackbars() {
  const { openSnackbar } = useSnackbarManager();
  /**
   * * check the implementation of openSnackbar fn in /hooks/useSnackbarManager.tsx
   * * accept the first parameter as a component
   * * second parameter as the position of the snackbar
   * * check sample snackbar components in components/snackbar
   */

  const handleOpenBottomLeft = () => {
    openSnackbar(
      <MsgSnackbar
        severity="error"
        message="This is error bottom left snackbar without icon!"
      />
    );
  };

  const handleOpenBottomRight = () => {
    openSnackbar(
      <MsgSnackbar
        severity="warning"
        message="This is warning bottom right snackbar without icon!"
      />,
      {
        vertical: 'bottom',
        horizontal: 'right',
      }
    );
  };

  const handleOpenBottomCenter = () => {
    openSnackbar(
      <MsgSnackbar
        message="This is success bottom center snackbar with icon!"
        icon={<CheckCircleOutlineIcon />}
      />,
      {
        vertical: 'bottom',
        horizontal: 'center',
      }
    );
  };

  const handleOpenTopLeft = () => {
    openSnackbar(
      <MsgSnackbar
        severity="info"
        message="This is info bottom center snackbar without icon!"
      />,
      {
        vertical: 'top',
        horizontal: 'left',
      }
    );
  };

  const handleOpenTopRight = () => {
    openSnackbar(
      <MsgSnackbar message="This is success bottom center snackbar with icon!" />,
      {
        vertical: 'top',
        horizontal: 'right',
      }
    );
  };

  const handleOpenTopCenter = () => {
    openSnackbar(
      <MsgSnackbar
        icon={<CheckCircleOutlineIcon />}
        message="This is success bottom center snackbar with icon!"
      />,
      {
        vertical: 'top',
        horizontal: 'center',
      }
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Button onClick={handleOpenBottomLeft} fullWidth variant="outlined">
          Bottom left
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <Button onClick={handleOpenBottomRight} fullWidth variant="outlined">
          Bottom right
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <Button onClick={handleOpenBottomCenter} fullWidth variant="outlined">
          Bottom Center
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <Button onClick={handleOpenTopLeft} fullWidth variant="outlined">
          Top Left
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <Button onClick={handleOpenTopRight} fullWidth variant="outlined">
          Top Right
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <Button onClick={handleOpenTopCenter} fullWidth variant="outlined">
          Top Center
        </Button>
      </Grid>
    </Grid>
  );
}
