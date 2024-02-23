import { Box, Stack } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from '@tanstack/react-router';
import { getSidebarWidth } from '@helpers/ui';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { MenuBar, SideBar } from './components';

export function DashboardLayout() {
  const { sidebarOpen } = useUserPreferencesStore();

  return (
    <>
      <CssBaseline />
      <Stack direction="row">
        <Box sx={{ width: getSidebarWidth(sidebarOpen) }}>
          <SideBar />
        </Box>

        <Box sx={{ flex: 1 }}>
          <MenuBar />

          <Box
            sx={{
              padding: 2,
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
