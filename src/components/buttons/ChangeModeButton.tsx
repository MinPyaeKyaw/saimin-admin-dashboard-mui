import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
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
          <DarkModeIcon color="primary" />
        ) : (
          <LightModeIcon color="primary" />
        )}
      </IconButton>
    </Tooltip>
  );
}
