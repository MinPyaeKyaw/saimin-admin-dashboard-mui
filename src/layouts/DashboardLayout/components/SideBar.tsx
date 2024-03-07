import { Dispatch, SetStateAction } from 'react';
import { Box, List, ListItem, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouterState } from '@tanstack/react-router';
import {
  MENUBAR_HEIGHT,
  MOBILE_MEDIA_QUERY,
  SIDEBAR_WIDTH,
} from '@configs/ui-consts';
import { getSidebarWidth } from '@helpers/ui';
import useGetMenus from '@hooks/useMenus';
import useUserPreferencesStore from '@stores/userPreferencesStore';
import { SidebarItem } from './SidebarItem';

interface Props {
  toggleMobileSibebar?: Dispatch<SetStateAction<boolean>>;
}

export function SideBar({ toggleMobileSibebar }: Props) {
  // * If mobile, matches = true. Otherwise, false.
  const matches = useMediaQuery(MOBILE_MEDIA_QUERY);
  const routerState = useRouterState();
  const theme = useTheme();
  const { sidebarOpen } = useUserPreferencesStore();
  const { menus } = useGetMenus();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        // * If mobile, the width doesn't need to be dynamic, Otherwise, it does.
        width: !matches ? SIDEBAR_WIDTH : getSidebarWidth(sidebarOpen),
        height: `calc(100vh - ${MENUBAR_HEIGHT}px)`,
        borderRight: `1px solid ${theme.palette.divider}`,
        position: 'fixed',
        left: 0,
        overflowX: 'hidden',
        overflowY: 'scroll',
        marginTop: `${MENUBAR_HEIGHT}px`,
      }}
    >
      <List>
        {menus.map((menu) => (
          <ListItem key={menu.route}>
            <SidebarItem
              toggleMobileSibebar={toggleMobileSibebar}
              active={routerState.location.pathname === menu.route}
              menu={menu}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
