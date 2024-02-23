import { Box, Typography, useTheme } from '@mui/material';
import { getSidebarWidth } from '@helpers/ui';
import useUserPreferencesStore from '@stores/userPreferencesStore';

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
      }}
    >
      <Typography>Hello</Typography>
    </Box>
  );
}
