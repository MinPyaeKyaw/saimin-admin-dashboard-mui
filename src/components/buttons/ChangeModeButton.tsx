import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Tooltip, IconButton } from '@mui/material';
import useUserPreferencesStore from '@stores/userPreferencesStore';

export function ChangeModeButton() {
  const { mode, changeMode } = useUserPreferencesStore();

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
