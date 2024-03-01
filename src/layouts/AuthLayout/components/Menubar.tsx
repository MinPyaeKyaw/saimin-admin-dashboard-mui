import { Stack } from '@mui/material';
import { ChangeLangDropdown } from '@components/dropdowns';
import { MENUBAR_HEIGHT } from '@configs/ui-consts';

export function Menubar() {
  return (
    <Stack
      sx={{
        width: '100%',
        height: MENUBAR_HEIGHT,
        position: 'fixed',
        top: 0,
        left: 0,
      }}
      alignItems="flex-end"
      justifyContent="center"
      paddingX={2}
    >
      <ChangeLangDropdown />
    </Stack>
  );
}
