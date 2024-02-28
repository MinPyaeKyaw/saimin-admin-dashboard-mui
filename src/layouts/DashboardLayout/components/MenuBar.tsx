import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
} from '@mui/material';
import { ChangeModeButton } from '@components/buttons';
import { ChangeLangDropdown, NotiDropdown } from '@components/dropdowns';
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

          {/* <Box
            sx={{
              height: MENUBAR_HEIGHT,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box',
            }}
          >
            <Logo h={MENUBAR_HEIGHT - 25} />
          </Box> */}
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
