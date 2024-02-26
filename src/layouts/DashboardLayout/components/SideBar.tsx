import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import { Box, Button, List, ListItem, useTheme } from '@mui/material';
import { MENU_LIST } from '@configs/menu';
import { MENUBAR_HEIGHT } from '@configs/ui-consts';
import { getSidebarWidth } from '@helpers/ui';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { MenuItem } from './MenuItem';

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
      <List>
        <ListItem>
          <Button fullWidth size="large">
            {MENU_LIST[0].name}
          </Button>
        </ListItem>

        <ListItem>
          <MenuItem
            active
            name={MENU_LIST[0].name}
            icon={<DashboardCustomizeOutlinedIcon sx={{ marginX: 1.5 }} />}
          />
        </ListItem>

        <ListItem>
          <Button fullWidth>{MENU_LIST[2].name}</Button>
        </ListItem>
      </List>
    </Box>
  );
}
