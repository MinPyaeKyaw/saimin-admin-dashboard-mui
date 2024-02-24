import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
} from '@mui/material';
import { ChangeLangDropdown } from '@components/dropdowns';
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

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <ChangeLangDropdown />

          <Tooltip title="Notifications">
            <IconButton>
              <NotificationsIcon color="primary" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Profile">
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="Remy Sharp"
              src="https://media.proprofs.com/images/QM/user_images/2503852/-Type-Of-Person-.webp"
            />
          </Tooltip>
        </Stack>
      </Stack>
    </>
  );
}
