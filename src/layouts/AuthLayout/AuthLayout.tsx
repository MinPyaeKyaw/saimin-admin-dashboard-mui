import { Box, CssBaseline } from '@mui/material';
import { Outlet } from '@tanstack/react-router';

export function AuthLayout() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Outlet />
      </Box>
    </>
  );
}
