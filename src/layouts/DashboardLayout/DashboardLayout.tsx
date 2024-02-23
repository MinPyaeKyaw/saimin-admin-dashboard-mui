import { Box, Stack } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from '@tanstack/react-router';
import { SIDEBAR_WIDTH } from '@configs/ui-consts';
import { MenuBar, SideBar } from './components';

export function DashboardLayout() {
  return (
    <>
      <CssBaseline />
      <Stack direction="row">
        <Box sx={{ width: SIDEBAR_WIDTH }}>
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
