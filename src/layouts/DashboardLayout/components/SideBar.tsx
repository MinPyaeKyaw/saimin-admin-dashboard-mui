import { SIDEBAR_WIDTH } from '@configs/ui-consts';
import { Box, Typography, useTheme } from '@mui/material';

export function SideBar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: SIDEBAR_WIDTH,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        borderRight: '1px',
        borderRightStyle: 'solid',
        borderRightColor: theme.palette.divider,
      }}
    >
      <Typography>Hello</Typography>
    </Box>
  );
}
