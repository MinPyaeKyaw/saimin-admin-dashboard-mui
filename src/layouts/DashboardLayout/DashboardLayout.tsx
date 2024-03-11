import { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Breadcrumbs, Stack, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from '@tanstack/react-router';
import { MOBILE_MEDIA_QUERY } from '@configs/ui-consts';
import { getSidebarWidth } from '@helpers/ui';
import useGetBreadcrumbs from '@hooks/useGetBreadcrumbs';
import useUserStore from '@stores/userStore';
import { MenuBar, SideBar } from './components';
import { MobileSideBarDrawer } from './components/MobileSideBarDrawer';

export function DashboardLayout() {
  const breadcrumbs = useGetBreadcrumbs();
  const matches = useMediaQuery(MOBILE_MEDIA_QUERY);
  const { sidebarOpen } = useUserStore();

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
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>

            <Outlet />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
