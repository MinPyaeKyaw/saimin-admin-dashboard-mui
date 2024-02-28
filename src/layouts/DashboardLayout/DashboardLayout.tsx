import { useState } from 'react';
import { Box, Stack, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from '@tanstack/react-router';
import { MOBILE_MEDIA_QUERY } from '@configs/ui-consts';
import { getSidebarWidth } from '@helpers/ui';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { MenuBar, SideBar } from './components';
import { MobileSideBarDrawer } from './components/MobileSideBarDrawer';

export function DashboardLayout() {
  const { sidebarOpen } = useUserPreferencesStore();
  const matches = useMediaQuery(MOBILE_MEDIA_QUERY);

  const [toggleMobileSidebarDrawer, setToggleMobileSidebarDrawer] =
    useState<boolean>(false);

  return (
    <>
      <CssBaseline />
      <Stack direction="row">
        {matches && (
          <Box sx={{ width: getSidebarWidth(sidebarOpen) }}>
            <SideBar />
          </Box>
        )}

        <MobileSideBarDrawer
          open={toggleMobileSidebarDrawer}
          onClose={setToggleMobileSidebarDrawer}
        />

        <Box sx={{ flex: 1 }}>
          <MenuBar toggleMobileSibebar={setToggleMobileSidebarDrawer} />

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
