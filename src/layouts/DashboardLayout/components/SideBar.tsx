import { Box, List, ListItem, useTheme } from '@mui/material';
import { useRouterState } from '@tanstack/react-router';
import { MENUBAR_HEIGHT } from '@configs/ui-consts';
import { getSidebarWidth } from '@helpers/ui';
import useGetMenus from '@hooks/useGetMenus';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { SidebarItem } from './SidebarItem';

export function SideBar() {
  const routerState = useRouterState();
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
            <SidebarItem
              active={routerState.location.pathname === menu.route}
              menu={menu}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
