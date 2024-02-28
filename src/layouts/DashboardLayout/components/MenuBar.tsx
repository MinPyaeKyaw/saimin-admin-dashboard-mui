import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import { Box, IconButton, Stack, useTheme } from '@mui/material';
import { ChangeModeButton } from '@components/buttons';
import {
  ChangeLangDropdown,
  NotiDropdown,
  ProfileDropdown,
} from '@components/dropdowns';
// import { Logo } from '@components/logos';
import {
  DASHBOARD_LAYOUT_PADDING,
  MENUBAR_HEIGHT,
  Z_INDEXES,
} from '@configs/ui-consts';
import useUserPreferencesStore from '@stores/userPreferencesStore';

export function MenuBar() {
  const theme = useTheme();
  const { sidebarOpen, toggleSidebar } = useUserPreferencesStore();

  const user = {
    username: 'Sai Min',
    position: 'Web Developer',
    profileImg:
      'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
  };

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
          width: '100%',
          height: MENUBAR_HEIGHT,
          backdropFilter: 'blur(4px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: Z_INDEXES.MENU_BAR,
          paddingX: 2,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <IconButton onClick={() => toggleSidebar(!sidebarOpen)}>
            {sidebarOpen ? (
              <FormatIndentDecreaseIcon color="primary" />
            ) : (
              <FormatIndentIncreaseIcon color="primary" />
            )}
          </IconButton>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <ChangeModeButton />

          <ChangeLangDropdown />

          <NotiDropdown />

          <ProfileDropdown user={user} />
        </Stack>
      </Stack>
    </>
  );
}
