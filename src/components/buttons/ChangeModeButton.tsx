import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Tooltip, IconButton } from '@mui/material';
import useUserStore from '@stores/userStore';

export function ChangeModeButton() {
  const { mode, changeMode } = useUserStore();

  return (
    <Tooltip title={`Change ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        onClick={() => changeMode(mode === 'light' ? 'dark' : 'light')}
      >
        {mode === 'light' ? (
          <DarkModeOutlinedIcon color="primary" />
        ) : (
          <LightModeOutlinedIcon color="primary" />
        )}
      </IconButton>
    </Tooltip>
  );
}
