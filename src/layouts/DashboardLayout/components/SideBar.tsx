import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { MENUBAR_HEIGHT } from '@configs/ui-consts';
import { getSidebarWidth } from '@helpers/ui';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { MENU_LIST } from '@configs/menu';
import AcUnitIcon from '@mui/icons-material/AcUnit';

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
      {MENU_LIST.map((menu) => (
        <Button key={menu.id} fullWidth>
          <Stack direction="row" width="100%">
            <AcUnitIcon />
            <Typography ml={2}>{menu.name}</Typography>
          </Stack>
        </Button>
      ))}
    </Box>
  );
}
