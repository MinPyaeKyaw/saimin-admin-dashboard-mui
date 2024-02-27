import { Box, List, ListItem, useTheme } from '@mui/material';
import { MENUBAR_HEIGHT } from '@configs/ui-consts';
import { getSidebarWidth } from '@helpers/ui';
import useGetMenus from '@hooks/useGetMenus';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { MenuItem } from './MenuItem';

export function SideBar() {
  const theme = useTheme();
  const { sidebarOpen } = useUserPreferencesStore();
  const menus = useGetMenus();

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
        {menus.map((menu) => (
          <ListItem key={menu.id}>
            <MenuItem active name={menu.name} icon={menu.icon} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
