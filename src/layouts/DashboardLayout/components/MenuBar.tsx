import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import {
  DASHBOARD_LAYOUT_PADDING,
  MENUBAR_HEIGHT,
  Z_INDEXES,
} from '@configs/ui-consts';
import { getSidebarWidth } from '@helpers/ui';
import useUserPreferencesStore from '@stores/userPreferencesStore';

export function MenuBar() {
  const theme = useTheme();
  const { sidebarOpen, toggleSidebar } = useUserPreferencesStore();

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: MENUBAR_HEIGHT,
        }}
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={DASHBOARD_LAYOUT_PADDING}
        sx={{
          width: `calc(100% - ${getSidebarWidth(sidebarOpen)}px)`,
          height: MENUBAR_HEIGHT,
          backdropFilter: 'blur(4px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: Z_INDEXES.MENU_BAR,
        }}
      >
        <IconButton onClick={() => toggleSidebar(!sidebarOpen)}>
          {sidebarOpen ? (
            <FormatIndentDecreaseIcon color="primary" />
          ) : (
            <FormatIndentIncreaseIcon color="primary" />
          )}
        </IconButton>
        <Typography>Hello</Typography>
      </Stack>
    </>
  );
}
