import { Box, CssBaseline } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import { MENUBAR_HEIGHT } from '@configs/ui-consts';
import { Menubar } from './components';

export function AuthLayout() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Menubar />

        <Box
          sx={{
            height: `calc(100vh - ${MENUBAR_HEIGHT}px)`,
            paddingTop: `${MENUBAR_HEIGHT}px`,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
