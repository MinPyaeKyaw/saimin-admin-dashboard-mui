import { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Breadcrumbs, Stack, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from '@tanstack/react-router';
import { MENUBAR_HEIGHT, MOBILE_MEDIA_QUERY } from '@configs/ui-consts';
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
          <Box
            sx={{
              width: getSidebarWidth(sidebarOpen),
            }}
          >
            <SideBar />
          </Box>
        )}

        <MobileSideBarDrawer
          open={toggleMobileSidebarDrawer}
          onClose={setToggleMobileSidebarDrawer}
        />

        <Stack
          sx={{
            width: matches
              ? `calc(100vw - ${getSidebarWidth(sidebarOpen)}px)`
              : '100%',
          }}
        >
          <MenuBar toggleMobileSibebar={setToggleMobileSidebarDrawer} />

          <Stack
            sx={{
              padding: 2,
              minHeight: `calc(100vh - ${MENUBAR_HEIGHT}px)`,
              position: 'relative',
            }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>

            <Outlet />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
