import { Box, Typography, useTheme } from '@mui/material';
import { getSidebarWidth } from '@helpers/ui';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { Logo } from '@components/logos';
import { MENUBAR_HEIGHT } from '@configs/ui-consts';

export function SideBar() {
  const theme = useTheme();
  const { sidebarOpen } = useUserPreferencesStore();

  return (
    <Box
      sx={{
        width: getSidebarWidth(sidebarOpen),
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        borderRight: `1px solid ${theme.palette.divider}`,
        overflow: 'hidden',
        paddingTop: `${MENUBAR_HEIGHT}px`,
      }}
    >
      <div>HEllo</div>
    </Box>
  );
}
